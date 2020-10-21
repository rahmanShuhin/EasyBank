const hamburger_btn=document.getElementById("hamburger_btn");
const header__overlay=document.querySelector(".header__overlay");
const header__menu=document.querySelector(".header__menu");
const body=document.querySelector("body");
hamburger_btn.addEventListener('click',()=>{
  hamburger_btn.classList.toggle("open");
  header__overlay.classList.toggle("header__overlay__open");
  header__menu.classList.toggle("header__menu__open")
  body.classList.toggle("no-scroll");
})