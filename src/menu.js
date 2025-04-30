import { $ } from "./common.js";

export default $("div")(
  $("h1")("Restaurant"),
  $("h2")("Menu"),
  $("ul")($("li")("Curry and Rice"), $("li")("Ramen"))
);
