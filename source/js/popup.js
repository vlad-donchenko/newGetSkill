"use strict";

(function() {
  var reviewsOptionDropdown = document.querySelectorAll(
    ".reviews__option-dropdown"
  );
  var popuBlock = document.querySelector(".popup");

  if (reviewsOptionDropdown) {
    function showModalWin() {
      var darkLayer = document.getElementById("shadow");
      darkLayer.style.display = "flex";
      // darkLayer.id = 'shadow';
      // document.body.appendChild(darkLayer);

      var modalWin = document.getElementById("popupWin");
      modalWin.style.display = "block";

      var btnCancel = document.querySelector(
        ".modalwin__button .button--cancel"
      );

      darkLayer.addEventListener("click", () => {
        darkLayer.style.display = "none";
        // darkLayer.parentNode.removeChild(darkLayer);
        modalWin.style.display = "none";
        return false;
      });
      btnCancel.addEventListener("click", () => {
        darkLayer.style.display = "none";
        // darkLayer.parentNode.removeChild(darkLayer);
        modalWin.style.display = "none";
        return false;
      });
    }

    reviewsOptionDropdown.forEach(element => {
      element.addEventListener("click", showModalWin);
    });
  }
})();
