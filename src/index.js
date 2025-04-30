import "./index.css";
import home from "./home.js";
import menu from "./menu.js";
import about from "./about.js";

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

function setPageToAbout() {
  $content?.replaceChildren(about);
}

const $about = document.getElementById("about");
$about?.addEventListener("click", setPageToAbout);

function initPage() {
  setPageToHome();
}

initPage();
