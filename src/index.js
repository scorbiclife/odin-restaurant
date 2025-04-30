import "./index.css";
import restaurantImage from "../assets/restaurant.png";

function $(tagName, attributes = {}) {
  return function (...children) {
    const $element = document.createElement(tagName);
    for (const a in attributes) {
      $element.setAttribute(a, attributes[a]);
    }
    $element.append(...children);
    return $element;
  };
}

const $content = document.getElementById("content");
$content?.appendChild(
  $("div")(
    $("h1")("Restaurant"),
    $("img", { src: restaurantImage, alt: "restaurant image" })(),
    $("p")("this restaurant is wonderful")
  )
);
