const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu")
const loader = document.querySelector(".loader")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active")
  menu.classList.toggle("menu-active")
})

window.addEventListener("scroll", () => {
  hamburger.classList.remove("is-active")
  menu.classList.remove("menu-active")
})

function loaderActive () {
  loader.classList.add("loader-active")
}

function loaderActiveTime() {
  setInterval(loaderActive, 2100)
}

window.onload = loaderActiveTime();
