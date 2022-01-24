let underline, title, quickLinks;
let github, linkedin

window.onload = function() {
    title = this.document.getElementById("title");
    underline = this.document.getElementById("underline");
    quickLinks = this.document.getElementById("quickLinks");

    github = this.document.getElementById("github");
    linkedin = this.document.getElementById("linkedin");

    github.onclick = function() {
        nextPage("https://github.com/mrkami1");
    }

    linkedin.onclick = function() {
        nextPage("https://www.linkedin.com/in/mashhood-anwar-2a0a1b164/");
    }

    addListeners();

    for (let i = 0; i < quickLinks.childElementCount; i++) {
        switch (quickLinks.children[i].textContent) {
            case "Home":    quickLinks.children[i].onclick = function() {
                                nextPage("index.html");
                            }
                            break;
            case "Projects":   quickLinks.children[i].onclick = function() {
                                nextPage("projects.html");
                            }
                            break;
            case "About Me": quickLinks.children[i].onclick = function() {
                                nextPage("about.html");
                            }
                            break;       
        }
    }

    
    loadAnimation();
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
        scale: 1.5,
        targets: '.icon',
        easing: 'easeOutBounce'
    });
}

function addListeners() {
    
    github.addEventListener('mouseenter', function(e) {
        anime({
            scale: 1.7,
            targets: '#github',
            easing: 'easeOutBack',
            duration: 500
        });
    });
    github.addEventListener('mouseleave', function(e) {
        anime({
            scale: 1.5,
            targets: '#github',
            easing: 'easeOutBack',
            duration: 500
        });
    });


    linkedin.addEventListener('mouseenter', function(e) {
        anime({
            scale: 1.7,
            targets: '#linkedin',
            easing: 'easeOutBack',
            duration: 500
        });
    });
    linkedin.addEventListener('mouseleave', function(e) {
        anime({
            scale: 1.5,
            targets: '#linkedin',
            easing: 'easeOutBack',
            duration: 500
        });
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