import { $ } from "./common.js";
import restaurantImage from "../assets/restaurant.png";

export default $("div")(
  $("h1")("Restaurant"),
  $("img", { src: restaurantImage, alt: "restaurant image" })(),
  $("p")("this restaurant is wonderful")
);
