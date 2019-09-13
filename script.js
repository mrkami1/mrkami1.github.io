let underline;
let aboutMeButton, projectsButton, contactButton, buttonClass, buttonsDiv;

window.onload = function() {
    //Get all the elements
    underline = document.getElementById("underline");
    projectsButton = document.getElementById("projects_button");
    aboutMeButton = document.getElementById("about_button");
    contactButton = document.getElementById("contact_button");
    buttonClass = document.getElementsByClassName("button");
    buttonsDiv = document.getElementById("buttons");
    
    //Start the page load animation
    loadAnimation();

    //Init button clicks and setup button animations
    projectsButton.onclick = function() {
        console.log("hellooooo");
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
    
}
function loadAnimation() {
    anime({
        targets: underline,
        width: '800px',
        easing: 'easeOutQuart',
        duration: 900,
        loop: false
      });
    anime({
        targets: buttonsDiv,
        opacity: 100,
        easing: 'easeInSine',
        duration: 3000,
        delay: 650,
        loop: false
    });
}