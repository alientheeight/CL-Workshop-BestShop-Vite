import "./scss/main.scss";

function makeBurger() {
  const btn = document.querySelector(".header__menu-burger");
  const body = document.querySelector("body");
  btn.onclick = () => {
    body.classList.toggle("show-menu");
  };
}

makeBurger();
