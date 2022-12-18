let navMenu = document.querySelector(".burger")
let sideMenu = document.querySelector(".fake")
navMenu.addEventListener("click", function(){
    sideMenu.classList.toggle("active")
})