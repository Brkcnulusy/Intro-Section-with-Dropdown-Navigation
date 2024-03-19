import { addClass, closeElement, openElement, removeClass } from "./ui.js";

const introSection = (function () {
  // Variables

  const featureMenu = document.querySelector(".js-feature");
  const companyMenu = document.querySelector(".js-company");
  const featureDropdown = document.querySelector(".js-features-dropdown");
  const companyDropdown = document.querySelector(".js-company-dropdown");
  const hamburgerMenu = document.querySelector(".js-hamburger-menu");
  const navbar = document.querySelector(".js-navbar");
  const closeIcon = document.querySelector(".js-close-icon");
  const bannerImage = document.querySelector(".js-banner");
  const windowWidth = window.screen.width;

  // Event Listeners

  const _eventListeners = function () {
    featureMenu.addEventListener("click", _openDropDown);
    companyMenu.addEventListener("click", _openDropDown);
    hamburgerMenu.addEventListener("click", function () {
      openElement(navbar);
    });
    closeIcon.addEventListener("click", function () {
      closeElement(navbar);
    });
  };

  // FunC

  const _openDropDown = function (e) {
    if (e.target == featureMenu) {
      if (featureDropdown.style.display == "flex") {
        closeElement(featureDropdown);
        removeClass(featureMenu);
      } else {
        openElement(featureDropdown);
        addClass(featureMenu);
      }
    } else {
      if (companyDropdown.style.display == "flex") {
        closeElement(companyDropdown);
        removeClass(companyMenu);
      } else {
        openElement(companyDropdown);
        addClass(companyMenu);
      }
    }
  };

  const _changeBanner = function () {
    if (windowWidth < 1260) {
      bannerImage.src = "./assets/images/image-hero-mobile.png";
    }
  };

  return {
    init: function () {
      _eventListeners();
      _changeBanner();
    },
  };
})();

document.addEventListener("DOMContentLoaded", function () {
  introSection.init();
});
