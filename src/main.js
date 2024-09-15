

// navbar buttons

const openBtn = document.querySelector(".bi-list");
const closeBtn = document.querySelector(".bi-x-lg");
const menu = document.querySelector(".navbar__menu")

openBtn.addEventListener("click",()=>{
    openBtn.classList.toggle("hide");
    closeBtn.classList.toggle("hide");
    menu.classList.toggle("hidden");
})

closeBtn.addEventListener("click",()=>{
    openBtn.classList.toggle("hide");
    closeBtn.classList.toggle("hide");
    menu.classList.toggle("hidden");
})