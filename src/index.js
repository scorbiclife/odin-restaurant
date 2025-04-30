import "./index.css";
import home from "./home.js";
import menu from "./menu.js";

const $content = document.getElementById("content");

function setPageToHome() {
  $content?.replaceChildren(home);
}
const $home = document.getElementById("home");
$home?.addEventListener("click", setPageToHome);

const $menu = document.getElementById("menu");
$menu?.addEventListener("click", function setPageToMenu() {
  $content?.replaceChildren(menu);
});

function initPage() {
  setPageToHome();
}

initPage();
