"use strict";

(function() {
  var bthWriteReviews = document.querySelector(
    ".button.reviews__write-reviews"
  );
  var reviewsList = document.querySelector(".reviews__list");
  var bthReviewsAll = document.querySelector(".reviews__all");
  var blockWriteReviews = document.querySelector(".reviews__new-write");
  var bthCancel = document.querySelector(".reviews__new-write .button--cancel");

  if (bthWriteReviews) {
    function hideRevieews() {
      reviewsList.style.display = "none";
      bthReviewsAll.style.display = "none";
      bthWriteReviews.style.display = "none";
      blockWriteReviews.style.display = "block";
    }
    function showRevieews() {
      reviewsList.style.display = "block";
      bthReviewsAll.style.display = "block";
      bthWriteReviews.style.display = "block";
      blockWriteReviews.style.display = "none";
    }

    bthWriteReviews.addEventListener("click", hideRevieews);
    bthCancel.addEventListener("click", showRevieews);
  }

  var reviewsOtions = document.querySelectorAll(".reviews__option-wrap");
  var reviewsList = document.querySelector(".reviews__list");
  var body = document.querySelector("body");
  if (reviewsOtions) {
    body.addEventListener("click", e => {
      var target = e.target.offsetParent;
    //   console.dir(e.target);
      Array.from(reviewsOtions).forEach(item => {
        // item.classList.remove("reviews__option-wrap--open");
        if (target !== item) {
          item.classList.remove("reviews__option-wrap--open");
        } else {
          reviewsOtions.forEach(element => {
            element.addEventListener("click", e => {
              element.classList.remove("reviews__option-wrap--open");
              var target = e.currentTarget;
              Array.from(reviewsOtions).forEach(item => {
                item.classList.remove("reviews__option-wrap--open");
              });
              target.classList.add("reviews__option-wrap--open");
            });
          });
        }
      });
    });
  }
})();
