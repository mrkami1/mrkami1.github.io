let underline, title, quickLinks;

window.onload = function() {
    title = this.document.getElementById("title");
    underline = this.document.getElementById("underline");
    quickLinks = this.document.getElementById("quickLinks");

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
            case "Contact": quickLinks.children[i].onclick = function() {
                                nextPage("contact.html");
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
        delay: 750,
        opacity: 1,
        targets: '#description',
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