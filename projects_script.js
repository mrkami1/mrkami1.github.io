let underline, title, quickLinks;
let project_list;

window.onload = function() {
    title = this.document.getElementById("title");
    underline = this.document.getElementById("underline");
    quickLinks = this.document.getElementById("quickLinks");
    project_list = this.document.getElementById("project_list");

    for (let i = 0; i < quickLinks.childElementCount; i++) {
        switch (quickLinks.children[i].textContent) {
            case "Home":    quickLinks.children[i].onclick = function() {
                                nextPage("index.html");
                            }
                            break;
            case "About":   quickLinks.children[i].onclick = function() {
                                nextPage("about.html");
                            }
                            break;
            case "Contact": quickLinks.children[i].onclick = function() {
                                nextPage("contact.html");
                            }
                            break;       
        }
    }

    getProjects("https://api.github.com/users/mrkami1/repos?per_page=100");
}

window.onunload = function(){}; 

function loadAnimation() {
    anime({
        targets: [title, quickLinks],
        easing: 'easeInSine',
        duration: 750,
        opacity: 1
        });
    anime({
        delay: 300,
        opacity: 1,
        targets: underline,
        width: '800px',
        easing: 'easeOutQuart',
        duration: 750
      });
    anime({
        delay: anime.stagger(200, {start: 750}),
        opacity: 1,
        targets: '.project',
        easing: 'easeOutQuart'
    });
}

function nextPage(page) {
    anime({
        targets: 'body',
        easing: 'easeOutSine',
        duration: 300,
        opacity: 0,
        complete: function() {
            window.location.href = page;
        }
      });
}

async function getProjects(url) {
    let response = await fetch(url);
    await response.json().then(data => {
        parseData(data);
    });
}

function parseData(data) {

    let obj = [];

    for (i = 0; i < data.length; i++) {
        if (data[i].name != "mrkami1.github.io") {
            obj.push({
                name: data[i].name, 
                desc: data[i].description, 
                link: data[i].html_url
            });
        }
    }

    for (i = 0; i < obj.length; i++) {
        let div = document.createElement("div");
        div.id = "project" + i;
        div.className = "project"

        let p1 = document.createElement("p");
        p1.id = "name" + i;
        p1.className = "project_name";
        p1.innerHTML = obj[i].name;

        let p2 = document.createElement("p");
        p2.id = "desc" + i;
        p2.className = "project_desc";
        p2.innerHTML = obj[i].desc;

        let p3 = document.createElement("p");
        p3.id = "link" + i;
        p3.className = "project_link";
        let a = document.createElement("a");
        a.href = obj[i].link;
        a.innerHTML = "GitHub page >>";
        p3.appendChild(a);
        
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        div.appendChild(document.createElement("br"));

        project_list.appendChild(div);
    }

    loadAnimation();
}