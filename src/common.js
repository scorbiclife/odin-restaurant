export function $(tagName, attributes = {}) {
  return function (...children) {
    const $element = document.createElement(tagName);
    for (const a in attributes) {
      $element.setAttribute(a, attributes[a]);
    }
    $element.append(...children);
    return $element;
  };
}
