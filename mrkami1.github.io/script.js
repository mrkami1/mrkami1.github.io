let underline;
let aboutMeButton, projectsButton, contactButton;

window.onload = function() {
    underline = document.getElementById("underline");
    projectsButton = document.getElementById("projects_button");
    aboutMeButton = document.getElementById("about_button");
    contactButton = document.getElementById("contact_button");
    projectsButton.onclick = function() {
        console.log("hellooooo");
    }
}