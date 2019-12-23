"use strict";

(function() {
  var menuItems = document.querySelectorAll(
    ".contacts__accordion.accordion .accordion__item"
  );
  var toggleButtons = document.querySelectorAll(
    ".accordion__item .accordion__toggle"
  );

  if (menuItems) {
    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].classList.add("accordion__item--hidden");
      menuItems[i].addEventListener("click", () => {
        menuItems[i].classList.toggle("accordion__item--open");
        menuItems[i].classList.toggle("accordion__item--hidden");
      });
    }
  }
})();
