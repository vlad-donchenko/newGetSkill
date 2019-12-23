"use strict";

(function() {
  const searchBlock = document.querySelector(".search");
  const searchResultBlock = document.querySelector(".result-search");
  const searchInput = document.getElementById("search");
  const header = document.querySelector("header");
  const mobileButtonCancel = document.querySelector(".search__button-cancel");

  const likeHead = document.querySelector(".like.like--header");
  const buttonOrganization = document.querySelector(
    ".button.button--organization-header"
  );

  const body = document.querySelector("body");

  if (searchInput) {
    searchInput.addEventListener(
      "input",
      function(e) {
        paramScroll();
      },
      false
    );

    searchInput.addEventListener("focus", function(e) {
      body.addEventListener("click", function(event) {
        let shadowForSearch = document.getElementById("shadow-for-search");
        if (event.target === searchInput) {
          if (shadowForSearch) {
            shadowForSearch.remove();
          }
          createShadow();
          likeHead.style.display = "none";
          buttonOrganization.style.display = "none";
          searchBlock.classList.add("is--focus");
          searchResultBlock.classList.add("is--active");
          header.style.zIndex = "1000";
        }
      });
    });
    searchInput.addEventListener("blur", function(e) {
      body.addEventListener("click", function(event) {
        let shadowForSearch = document.getElementById("shadow-for-search");
        if (
          event.target.offsetParent !== searchResultBlock &&
          event.target.offsetParent !== searchInput
        ) {
          likeHead.style.display = "";
          buttonOrganization.style.display = "";
          searchBlock.classList.remove("is--focus");
          searchResultBlock.classList.remove("is--active");
          header.style.zIndex = "";
          if (shadowForSearch) {
            shadowForSearch.remove();
          }
        }
      });
    });

    function createShadow() {
      let shadowSearch = document.createElement("div");
      shadowSearch.style.display = "flex";
      shadowSearch.id = "shadow-for-search";
      document.body.appendChild(shadowSearch);
    }

    function paramScroll() {
      let searchResultBlockItems = document.querySelectorAll(
        ".result-search__item"
      );
      searchResultBlockItems.forEach((element, index) => {
        if (index >= 6) {
          searchResultBlock.style.overflowY = "scroll";
        } else {
          searchResultBlock.style.overflowY = "hidden";
        }
      });
    }

    mobileButtonCancel.addEventListener("click", function(e) {
      let shadowForSearch = document.getElementById("shadow-for-search");
      e.preventDefault();
      likeHead.style.display = "";
      buttonOrganization.style.display = "";
      searchBlock.classList.remove("is--focus");
      searchResultBlock.classList.remove("is--active");
      header.style.zIndex = "";
      if (shadowForSearch) {
        shadowForSearch.remove();
      }
    });
  }
})();
