let underline, title, quickLinks;
let projects;

window.onload = function() {
    title = this.document.getElementById("title");
    underline = this.document.getElementById("underline");
    quickLinks = this.document.getElementById("quickLinks");
    projects = this.document.getElementsByClassName("project");

    for (let i = 0; i < quickLinks.childElementCount; i++) {
        if (quickLinks.children[i].textContent == "Home") {
            quickLinks.children[i].onclick = function() {
                nextPage("Home");
            }
        }
    }
    
    this.addProject("Real-time Strategy Game (WIP)", "test 1 desc here", "https://github.com/mrkami1", "https://via.placeholder.com/150");
    this.addProject("Planet Explorer (WIP)", "A Simulator type game of the solar system", "https://github.com/mrkami1", "https://via.placeholder.com/150")

    loadAnimation();
}

function loadAnimation() {
    anime({
        targets: [title, quickLinks],
        easing: 'easeInSine',
        duration: 6000,
        opacity: 100
        });
    anime({
        delay: 300,
        opacity: 100,
        targets: underline,
        width: '800px',
        easing: 'easeOutQuart',
        duration: 900
      });
    anime({
        delay: 800,
        opacity: 100,
        targets: projects,
        easing: 'easeInQuart',
        duration: 900
    });
}

function nextPage(page) {
    anime({
        targets: 'body',
        easing: 'easeOutSine',
        duration: 300,
        opacity: 0,
        complete: function() {
            if (page == "Home") window.location.href = "index.html";
        }
      });
}

function addProject(title, description, link, imgSrc) {
    let originalDiv = document.getElementById("project1");
    let cloneDiv = originalDiv.cloneNode(true);
    let img = document.createElement("img");
    img.width = 150;
    img.height = 150;
    img.src = imgSrc;
    cloneDiv.children[0].textContent = title;
    cloneDiv.children[0].appendChild(img);
    cloneDiv.children[1].textContent = description;
    cloneDiv.children[2].children[0].href = link;
    cloneDiv.id = "";
    originalDiv.parentNode.appendChild(cloneDiv);
}