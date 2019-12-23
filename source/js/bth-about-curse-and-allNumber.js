"use strict";

(function() {
  var bthAboutCurse = document.querySelector(".button__show-about-curse");
  var butnClose = document.querySelector(".popup__button-close");
  var popupAboutThisCurse = document.querySelector(".school__about-this-curse");

  var bthShowNumber = document.querySelector(".button__all-numbers");
  var popupAllNumbers = document.querySelector(".popup__all-numbers");
  var butnCloseNumber = document.querySelector(
    ".popup__all-numbers .popup__button-close"
  );

  if (bthShowNumber) {
    function showModalWin(param) {
      function createDarkLayer(popupName, popupNameClasses, btnClose) {
        var darkLayer = document.createElement("div");
        darkLayer.id = "shadow-two";
        document.body.appendChild(darkLayer);
        darkLayer.style.display = "flex";

        darkLayer.addEventListener("click", () => {
          darkLayer.style.display = "none";
          darkLayer.remove();
          popupName.classList.remove(popupNameClasses);
          return false;
        });

        btnClose.addEventListener("click", () => {
          darkLayer.remove();
          popupName.classList.remove(popupNameClasses);
          return false;
        });
      }

      switch (param) {
        case "showAboutCurse":
          createDarkLayer(popupAboutThisCurse, "popup--open", butnClose);
          popupAboutThisCurse.classList.add("popup--open");
          break;

        case "showAllNumber":
          createDarkLayer(popupAllNumbers, "tabs__item--open", butnCloseNumber);
          popupAboutThisCurse.classList.remove("popup--open");
          popupAllNumbers.classList.add("tabs__item--open");

          break;

        default:
          return false;
          break;
      }
    }

    bthAboutCurse.addEventListener("click", () => {
      //   if (darkLayer) darkLayer.remove();
      if (document.getElementById("shadow-two")) {
        document.getElementById("shadow-two").remove();
      }

      popupAllNumbers.classList.remove("tabs__item--open");
      showModalWin((showAboutCurse = "showAboutCurse"));
    });
    bthShowNumber.addEventListener("click", () => {
      //   if (darkLayer) darkLayer.remove();
      bthShowNumber.style.display = "flex";
      if (document.getElementById("shadow-two")) {
        document.getElementById("shadow-two").remove();
      }
      popupAboutThisCurse.classList.remove("popup--open");
      showModalWin((showAllNumber = "showAllNumber"));
    });

    changeButnAllNumber();
    
    window.addEventListener("resize", changeButnAllNumber);

    function changeButnAllNumber() {
      if (screen.width > 991) {
        bthShowNumber.addEventListener("click", () => {
          //   if (darkLayer) darkLayer.remove();
          bthShowNumber.style.display = "none";
          if (document.getElementById("shadow-two")) {
            document.getElementById("shadow-two").remove();
          }
          popupAboutThisCurse.classList.remove("popup--open");
          showModalWin((showAllNumber = "showAllNumber"));
        });
      } else if (screen.width < 991) {
        bthShowNumber.style.display = "flex";

        bthShowNumber.addEventListener("click", () => {
          //   if (darkLayer) darkLayer.remove();
          bthShowNumber.style.display = "flex";
          if (document.getElementById("shadow-two")) {
            document.getElementById("shadow-two").remove();
          }
          popupAboutThisCurse.classList.remove("popup--open");
          showModalWin((showAllNumber = "showAllNumber"));
        });
      }
    }
  }
})();
