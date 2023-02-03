let container = document.getElementById("container");
let menu = document.getElementById("menu")
let home = document.getElementById("home");
let about = document.getElementById("about");
let contact = document.getElementById("contact");

menu.addEventListener("click", ()=>{
    container.classList.toggle("containerSecondSize");
    home.classList.toggle("showHome");
    about.classList.toggle("showAbout")
    contact.classList.toggle("showContact");
})