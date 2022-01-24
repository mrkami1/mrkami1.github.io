let name, underline;
let aboutMeButton, projectsButton, contactButton, buttonClass, buttonsDiv;

window.onload = function() {
    
    //Get the elements
    name = this.document.getElementById("name");
    underline = this.document.getElementById("underline");
    projectsButton = this.document.getElementById("projects_button");
    aboutMeButton = this.document.getElementById("about_button");
    contactButton = this.document.getElementById("contact_button");
    buttonClass = this.document.getElementsByClassName("button");
    buttonsDiv = this.document.getElementById("buttons");

    //Init button clicks and setup button animations
    projectsButton.onclick = function() {
        nextPage(projectsButton.id);
    }
    aboutMeButton.onclick = function() {
        nextPage(aboutMeButton.id);
    }
    contactButton.onclick = function() {
        nextPage(contactButton.id);
    }
    
    for (let i = 0; i < buttonClass.length; i++) {
        buttonClass.item(i).onmousedown = function() { 
            this.style.backgroundColor = "rgb(90, 90, 90)";
            this.style.color = "white"
        }
        buttonClass.item(i).onmouseup = function() { 
            this.style.backgroundColor = "white";
            this.style.color = "black" 
        }
        buttonClass.item(i).onmouseenter = function() { 
            this.style.backgroundColor = "white";
            this.style.color = "black"  
        }
        buttonClass.item(i).onmouseleave = function() { 
            this.style.backgroundColor = "gray";
            this.style.color = "white"  
        }
    }
    
    //Start the page load animation
    loadAnimation();
}

window.onunload = function(){}; 

window.onpageshow = function(event) {
    if (event.persisted) {
        window.location.reload() 
    }
};

function loadAnimation() {
    anime({
        targets: name,
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
        delay: 1000,
        targets: buttonsDiv,
        opacity: 100,
        easing: 'easeInSine',
        duration: 3000
    });
}

function nextPage(buttonname) {
    anime({
        targets: 'body',
        easing: 'easeOutSine',
        duration: 300,
        opacity: 0,
        complete: function() {
            let pageName = buttonname.substring(0, buttonname.indexOf('_'));
            window.location.href = pageName + ".html?";
        }
      });
}
