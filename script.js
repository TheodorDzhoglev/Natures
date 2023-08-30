"use strict";

const headerBtn = document.querySelector(".btn--white");
const navigation = document.querySelector(".navigation__nav");
const checkbox = document.querySelector("#navi-toggle");

const popup = document.querySelector("#popup");

const popupContent = document.querySelector(".popup__content");

const cardBtn = document.querySelectorAll('a[href="#popup"]');

const popupCloseBtn = document.querySelector(".popup__close");

const smoothScrollOffset = function (target, offset) {
  const targetCoords = document.querySelector(target).getBoundingClientRect();
  window.scrollTo(
    targetCoords.left + window.scrollX,
    targetCoords.top + window.scrollY + offset
  );
};

headerBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const target = e.target.getAttribute("href");
  smoothScrollOffset(target, 240);
});

navigation.addEventListener("click", function (e) {
  e.preventDefault();
  const target = e.target.getAttribute("href");
  if (target) {
    smoothScrollOffset(target, 120);
    checkbox.checked = false;
  }
});

cardBtn.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    popup.classList.add("popup--visible");
    popupContent.classList.add("popup__content--visible");
  })
);

popup.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target === popup || e.target === popupCloseBtn) {
    popup.classList.remove("popup--visible");
    popupContent.classList.remove("popup__content--visible");
  }
});
