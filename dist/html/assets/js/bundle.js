/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../src/js/layout/header.js":
/*!**********************************!*\
  !*** ../src/js/layout/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hamburgerMenu: () => (/* binding */ hamburgerMenu),
/* harmony export */   header: () => (/* binding */ header),
/* harmony export */   headerNavigation: () => (/* binding */ headerNavigation)
/* harmony export */ });
function header() {
  hamburgerMenu();
  headerNavigation();
}
var hamburgerMenu = function hamburgerMenu() {};
var headerNavigation = function headerNavigation() {};

/***/ }),

/***/ "../src/js/modules/common.js":
/*!***********************************!*\
  !*** ../src/js/modules/common.js ***!
  \***********************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  var url = window.location.href;

  // URL末尾に応じたクラスの切り替え
  if (url.endsWith('#confirmation')) {
    // #contactの場合、navi_01からクラスを削除し、navi_02に追加
    document.querySelector('.navi_01.p-contact-head__item-current').classList.remove('p-contact-head__item-current');
    document.getElementById('confirmation').classList.add('p-contact-head__item-current');
  } else if (url.endsWith('#contact_finish')) {
    // #contact_finishの場合、navi_01からクラスを削除し、navi_03に追加
    document.querySelector('.navi_01.p-contact-head__item-current').classList.remove('p-contact-head__item-current');
    document.getElementById('send-completely').classList.add('p-contact-head__item-current');
  }
});

/***/ }),

/***/ "../src/js/modules/hamburger.js":
/*!**************************************!*\
  !*** ../src/js/modules/hamburger.js ***!
  \**************************************/
/***/ (() => {

// .nav_toggle 要素を取得
var navToggle = document.querySelector("#nav_toggle");
// .nav 要素を取得
var nav = document.querySelector(".p-sp-menu");
var smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

// .nav_toggle 要素にクリックイベントリスナーを設定
navToggle.addEventListener("click", function () {
  // .nav_toggle と .nav の両方に show クラスを切り替え
  this.classList.toggle("show");
  nav.classList.toggle("show");
  document.body.classList.toggle('no-scroll');
});

// .p-sp-menu__item 要素を全て取得
var listItems = document.querySelectorAll(".p-sp-menu__item");

// 各 .p-sp-menu__item 要素にクリックイベントリスナーを設定
listItems.forEach(function (item) {
  item.addEventListener("click", function () {
    // メニューを閉じる
    navToggle.classList.remove("show");
    nav.classList.remove("show");
    document.body.classList.remove('no-scroll');
  });
});

// スムーズスクロールのためのイベントリスナーを設定
smoothScrollLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    var href = this.getAttribute('href');
    var targetElement = document.querySelector(href);
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    // メニューを閉じるロジックもここに含める
    navToggle.classList.remove("show");
    nav.classList.remove("show");
    document.body.classList.remove('no-scroll');
  });
});

/***/ }),

/***/ "../src/js/modules/innerLink.js":
/*!**************************************!*\
  !*** ../src/js/modules/innerLink.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ innerLinkSummery),
/* harmony export */   innerLink: () => (/* binding */ innerLink),
/* harmony export */   innerLinkMain: () => (/* binding */ innerLinkMain),
/* harmony export */   innerLinkWithHash: () => (/* binding */ innerLinkWithHash)
/* harmony export */ });
function innerLinkSummery() {
  // ページ内リンク
  innerLinkMain('.js-inner-link');
}
var innerLinkMain = function innerLinkMain(triggerClassStr) {
  var triggers = document.querySelectorAll(triggerClassStr);
  triggers.forEach(function (trigger) {
    trigger.addEventListener('click', innerLink);
  });
};
var innerLink = function innerLink(event) {
  var _event$currentTarget$, _event$currentTarget;
  event.preventDefault();
  innerLinkWithHash((_event$currentTarget$ = event === null || event === void 0 ? void 0 : (_event$currentTarget = event.currentTarget) === null || _event$currentTarget === void 0 ? void 0 : _event$currentTarget.hash) !== null && _event$currentTarget$ !== void 0 ? _event$currentTarget$ : "html");
};
var innerLinkWithHash = function innerLinkWithHash(hash) {
  var header = document.querySelector('.l-header');
  var el = document.querySelectorAll(hash)[0];
  var headerHeight = header.clientHeight;
  var targetPosition = el.offsetTop - headerHeight;
  var startPosition = document.scrollingElement.scrollTop;
  var currentPosition = document.scrollingElement.scrollTop;
  var goDown = currentPosition < targetPosition;
  var interval = setInterval(function () {
    var mp = movingPosition(startPosition, targetPosition, currentPosition);
    currentPosition += goDown ? mp + 5 : -mp - 5;
    if (goDown && currentPosition > targetPosition || !goDown && currentPosition < targetPosition) {
      clearInterval(interval);
      document.scrollingElement.scrollTop = targetPosition;
    }
    document.scrollingElement.scrollTop = currentPosition;
  }, 10);
};
var movingPosition = function movingPosition(start, target, current) {
  var sin = Math.sin((current - target) / (start - target) * Math.PI);
  return sin * 200; //speed
};

/***/ }),

/***/ "../src/js/modules/linkNoOpener.js":
/*!*****************************************!*\
  !*** ../src/js/modules/linkNoOpener.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   linkNoOpener: () => (/* binding */ linkNoOpener)
/* harmony export */ });
function linkNoOpener() {
  var links = document.querySelectorAll('a[target="_blank"]');
  links.forEach(function (link) {
    link.setAttribute('rel', 'noopener noreferrer');
  });
}

/***/ }),

/***/ "../src/js/modules/pagetop.js":
/*!************************************!*\
  !*** ../src/js/modules/pagetop.js ***!
  \************************************/
/***/ (() => {

window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("pagetop").style.opacity = "0.7";
  } else {
    document.getElementById("pagetop").style.opacity = "0";
  }
};
document.getElementById("pagetop").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

/***/ }),

/***/ "../src/js/modules/scrollHeader.js":
/*!*****************************************!*\
  !*** ../src/js/modules/scrollHeader.js ***!
  \*****************************************/
/***/ (() => {

var headerElement = document.getElementById("main");

//スクロールイベントリスナー追加
window.addEventListener("scroll", function () {
  // windowのスクロール位置を取得
  var scrollPosition = this.window.pageYOffset;

  // headerElementが特定の位置に達したかチェック
  if (scrollPosition > 180) {
    headerElement.classList.add("show");
  } else if (scrollPosition >= 50) {
    headerElement.classList.remove("show");
  }
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***************************!*\
  !*** ../src/js/bundle.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/header */ "../src/js/layout/header.js");
/* harmony import */ var _modules_pagetop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/pagetop */ "../src/js/modules/pagetop.js");
/* harmony import */ var _modules_pagetop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_pagetop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_scrollHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scrollHeader */ "../src/js/modules/scrollHeader.js");
/* harmony import */ var _modules_scrollHeader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_scrollHeader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/common */ "../src/js/modules/common.js");
/* harmony import */ var _modules_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_hamburger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/hamburger */ "../src/js/modules/hamburger.js");
/* harmony import */ var _modules_hamburger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_hamburger__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_linkNoOpener__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/linkNoOpener */ "../src/js/modules/linkNoOpener.js");
/* harmony import */ var _modules_innerLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/innerLink */ "../src/js/modules/innerLink.js");
//scripts







window.addEventListener('DOMContentLoaded', function () {
  (0,_layout_header__WEBPACK_IMPORTED_MODULE_0__.header)();
  if (document.querySelector('.js-pagetop') != null) {
    (0,_modules_pagetop__WEBPACK_IMPORTED_MODULE_1__.pagetop)();
  }
  (0,_modules_linkNoOpener__WEBPACK_IMPORTED_MODULE_5__.linkNoOpener)();
  (0,_modules_innerLink__WEBPACK_IMPORTED_MODULE_6__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksSUFBSSxFQUFFO0lBQ2pEbUUseURBQU8sQ0FBQyxDQUFDO0VBQ1g7RUFDQVosbUVBQVksQ0FBQyxDQUFDO0VBQ2RqQyw4REFBZ0IsQ0FBQyxDQUFDO0FBQ3BCLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW5rZW4tbmFtZS8uLi9zcmMvanMvbGF5b3V0L2hlYWRlci5qcyIsIndlYnBhY2s6Ly9hbmtlbi1uYW1lLy4uL3NyYy9qcy9tb2R1bGVzL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly9hbmtlbi1uYW1lLy4uL3NyYy9qcy9tb2R1bGVzL2hhbWJ1cmdlci5qcyIsIndlYnBhY2s6Ly9hbmtlbi1uYW1lLy4uL3NyYy9qcy9tb2R1bGVzL2lubmVyTGluay5qcyIsIndlYnBhY2s6Ly9hbmtlbi1uYW1lLy4uL3NyYy9qcy9tb2R1bGVzL2xpbmtOb09wZW5lci5qcyIsIndlYnBhY2s6Ly9hbmtlbi1uYW1lLy4uL3NyYy9qcy9tb2R1bGVzL3BhZ2V0b3AuanMiLCJ3ZWJwYWNrOi8vYW5rZW4tbmFtZS8uLi9zcmMvanMvbW9kdWxlcy9zY3JvbGxIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vYW5rZW4tbmFtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hbmtlbi1uYW1lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Fua2VuLW5hbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Fua2VuLW5hbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hbmtlbi1uYW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYW5rZW4tbmFtZS8uLi9zcmMvanMvYnVuZGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBoZWFkZXIoKSB7XG4gIGhhbWJ1cmdlck1lbnUoKVxuICBoZWFkZXJOYXZpZ2F0aW9uKClcbn1cblxuZXhwb3J0IGNvbnN0IGhhbWJ1cmdlck1lbnUgPSAoKSA9PiB7XG4gIFxufVxuXG5leHBvcnQgY29uc3QgaGVhZGVyTmF2aWdhdGlvbiA9ICgpID0+IHtcbiAgXG59XG5cblxuXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gICAgbGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIFxuICAgIC8vIFVSTOacq+WwvuOBq+W/nOOBmOOBn+OCr+ODqeOCueOBruWIh+OCiuabv+OBiFxuICAgIGlmICh1cmwuZW5kc1dpdGgoJyNjb25maXJtYXRpb24nKSkge1xuICAgICAgICAvLyAjY29udGFjdOOBruWgtOWQiOOAgW5hdmlfMDHjgYvjgonjgq/jg6njgrnjgpLliYrpmaTjgZfjgIFuYXZpXzAy44Gr6L+95YqgXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZpXzAxLnAtY29udGFjdC1oZWFkX19pdGVtLWN1cnJlbnQnKS5jbGFzc0xpc3QucmVtb3ZlKCdwLWNvbnRhY3QtaGVhZF9faXRlbS1jdXJyZW50Jyk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtYXRpb24nKS5jbGFzc0xpc3QuYWRkKCdwLWNvbnRhY3QtaGVhZF9faXRlbS1jdXJyZW50Jyk7XG4gICAgfSBlbHNlIGlmICh1cmwuZW5kc1dpdGgoJyNjb250YWN0X2ZpbmlzaCcpKSB7XG4gICAgICAgIC8vICNjb250YWN0X2ZpbmlzaOOBruWgtOWQiOOAgW5hdmlfMDHjgYvjgonjgq/jg6njgrnjgpLliYrpmaTjgZfjgIFuYXZpXzAz44Gr6L+95YqgXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZpXzAxLnAtY29udGFjdC1oZWFkX19pdGVtLWN1cnJlbnQnKS5jbGFzc0xpc3QucmVtb3ZlKCdwLWNvbnRhY3QtaGVhZF9faXRlbS1jdXJyZW50Jyk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZW5kLWNvbXBsZXRlbHknKS5jbGFzc0xpc3QuYWRkKCdwLWNvbnRhY3QtaGVhZF9faXRlbS1jdXJyZW50Jyk7XG4gICAgfVxufSk7XG4iLCIvLyAubmF2X3RvZ2dsZSDopoHntKDjgpLlj5blvpdcbmNvbnN0IG5hdlRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2X3RvZ2dsZVwiKTtcbi8vIC5uYXYg6KaB57Sg44KS5Y+W5b6XXG5jb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnAtc3AtbWVudVwiKTtcbmNvbnN0IHNtb290aFNjcm9sbExpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYVtocmVmXj1cIiNcIl0nKTtcblxuLy8gLm5hdl90b2dnbGUg6KaB57Sg44Gr44Kv44Oq44OD44Kv44Kk44OZ44Oz44OI44Oq44K544OK44O844KS6Kit5a6aXG5uYXZUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgLy8gLm5hdl90b2dnbGUg44GoIC5uYXYg44Gu5Lih5pa544GrIHNob3cg44Kv44Op44K544KS5YiH44KK5pu/44GIXG4gIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XG4gIG5hdi5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCduby1zY3JvbGwnKTtcbn0pO1xuXG4vLyAucC1zcC1tZW51X19pdGVtIOimgee0oOOCkuWFqOOBpuWPluW+l1xuY29uc3QgbGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wLXNwLW1lbnVfX2l0ZW1cIik7XG5cbi8vIOWQhCAucC1zcC1tZW51X19pdGVtIOimgee0oOOBq+OCr+ODquODg+OCr+OCpOODmeODs+ODiOODquOCueODiuODvOOCkuioreWumlxubGlzdEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyDjg6Hjg4vjg6Xjg7zjgpLplonjgZjjgotcbiAgICAgICAgbmF2VG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgICAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm8tc2Nyb2xsJyk7XG4gICAgfSk7XG59KTtcblxuLy8g44K544Og44O844K644K544Kv44Ot44O844Or44Gu44Gf44KB44Gu44Kk44OZ44Oz44OI44Oq44K544OK44O844KS6Kit5a6aXG5zbW9vdGhTY3JvbGxMaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgaHJlZiA9IHRoaXMuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGhyZWYpO1xuICAgICAgICB0YXJnZXRFbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ3N0YXJ0JyB9KTtcblxuICAgICAgICAvLyDjg6Hjg4vjg6Xjg7zjgpLplonjgZjjgovjg63jgrjjg4Pjgq/jgoLjgZPjgZPjgavlkKvjgoHjgotcbiAgICAgICAgbmF2VG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgICAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm8tc2Nyb2xsJyk7XG4gICAgfSk7XG59KTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlubmVyTGlua1N1bW1lcnkoKSB7XG4gIC8vIOODmuODvOOCuOWGheODquODs+OCr1xuICBpbm5lckxpbmtNYWluKCcuanMtaW5uZXItbGluaycpXG59XG5cbmV4cG9ydCBjb25zdCBpbm5lckxpbmtNYWluID0gKHRyaWdnZXJDbGFzc1N0cikgPT4ge1xuICBjb25zdCB0cmlnZ2VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodHJpZ2dlckNsYXNzU3RyKVxuXG4gIHRyaWdnZXJzLmZvckVhY2goKHRyaWdnZXIpID0+IHtcbiAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaW5uZXJMaW5rKVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgaW5uZXJMaW5rID0gKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgaW5uZXJMaW5rV2l0aEhhc2goZXZlbnQ/LmN1cnJlbnRUYXJnZXQ/Lmhhc2ggPz8gXCJodG1sXCIpXG59XG5cbmV4cG9ydCBjb25zdCBpbm5lckxpbmtXaXRoSGFzaCA9IChoYXNoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubC1oZWFkZXInKVxuICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoaGFzaClbMF1cbiAgY29uc3QgaGVhZGVySGVpZ2h0ICAgPSBoZWFkZXIuY2xpZW50SGVpZ2h0XG4gIGNvbnN0IHRhcmdldFBvc2l0aW9uID0gZWwub2Zmc2V0VG9wIC0gaGVhZGVySGVpZ2h0XG4gIGNvbnN0IHN0YXJ0UG9zaXRpb24gPSBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50LnNjcm9sbFRvcFxuICBsZXQgY3VycmVudFBvc2l0aW9uID0gZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3BcblxuICBjb25zdCBnb0Rvd24gPSBjdXJyZW50UG9zaXRpb24gPCB0YXJnZXRQb3NpdGlvblxuICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBtcCA9IG1vdmluZ1Bvc2l0aW9uKHN0YXJ0UG9zaXRpb24sIHRhcmdldFBvc2l0aW9uLCBjdXJyZW50UG9zaXRpb24pXG4gICAgY3VycmVudFBvc2l0aW9uICs9IGdvRG93biA/IG1wICsgNSA6IC1tcCAtIDVcbiAgICBpZiAoZ29Eb3duICYmIGN1cnJlbnRQb3NpdGlvbiA+IHRhcmdldFBvc2l0aW9uXG4gICAgICB8fCAhZ29Eb3duICYmIGN1cnJlbnRQb3NpdGlvbiA8IHRhcmdldFBvc2l0aW9uKSB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKVxuICAgICAgZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3AgPSB0YXJnZXRQb3NpdGlvblxuICAgIH1cbiAgICBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50LnNjcm9sbFRvcCA9IGN1cnJlbnRQb3NpdGlvblxuICB9LCAxMClcbn1cblxuY29uc3QgbW92aW5nUG9zaXRpb24gPSAoc3RhcnQsIHRhcmdldCwgY3VycmVudCkgPT4ge1xuICBjb25zdCBzaW4gPSBNYXRoLnNpbigoY3VycmVudCAtIHRhcmdldCkgLyAoc3RhcnQgLSB0YXJnZXQpICogTWF0aC5QSSlcbiAgcmV0dXJuIHNpbiAqIDIwMC8vc3BlZWRcbn0iLCJleHBvcnQgZnVuY3Rpb24gbGlua05vT3BlbmVyKCkge1xuICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbdGFyZ2V0PVwiX2JsYW5rXCJdJylcbiAgbGlua3MuZm9yRWFjaChsaW5rID0+IHtcbiAgICBsaW5rLnNldEF0dHJpYnV0ZSgncmVsJywgJ25vb3BlbmVyIG5vcmVmZXJyZXInKVxuICB9KVxufSIsIndpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID4gMTAwIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPiAxMDApXG4gIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2V0b3BcIikuc3R5bGUub3BhY2l0eSA9IFwiMC43XCI7XG4gIH0gZWxzZVxuICB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdldG9wXCIpLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcblxuICB9ICBcbn07XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZXRvcFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHdpbmRvdy5zY3JvbGxUbyh7dG9wOiAwLCBiZWhhdmlvcjogJ3Ntb290aCd9KTtcbn0pOyIsImNvbnN0IGhlYWRlckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG5cbi8v44K544Kv44Ot44O844Or44Kk44OZ44Oz44OI44Oq44K544OK44O86L+95YqgXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmdW5jdGlvbiAoKVxue1xuXG4gIC8vIHdpbmRvd+OBruOCueOCr+ODreODvOODq+S9jee9ruOCkuWPluW+l1xuICBjb25zdCBzY3JvbGxQb3NpdGlvbiA9IHRoaXMud2luZG93LnBhZ2VZT2Zmc2V0O1xuICBcbiAgLy8gaGVhZGVyRWxlbWVudOOBjOeJueWumuOBruS9jee9ruOBq+mBlOOBl+OBn+OBi+ODgeOCp+ODg+OCr1xuICBpZiAoc2Nyb2xsUG9zaXRpb24gPiAxODApXG4gIHtcbiAgICAgIGhlYWRlckVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG4gIH1cbiAgZWxzZSBpZiAoc2Nyb2xsUG9zaXRpb24gPj0gNTApXG4gIHtcbiAgICBoZWFkZXJFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuXG4gIH1cblxufSk7XG5cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy9zY3JpcHRzXG5pbXBvcnQge2hlYWRlcn0gZnJvbSAnLi9sYXlvdXQvaGVhZGVyJ1xuaW1wb3J0IHsgcGFnZXRvcCB9IGZyb20gJy4vbW9kdWxlcy9wYWdldG9wJ1xuaW1wb3J0IHsgc2Nyb2xsSGVhZGVyIH0gZnJvbSAnLi9tb2R1bGVzL3Njcm9sbEhlYWRlcidcbmltcG9ydCB7IGNvbW1vbiB9IGZyb20gJy4vbW9kdWxlcy9jb21tb24nXG5pbXBvcnQgeyBoYW1idXJnZXIgfSBmcm9tICcuL21vZHVsZXMvaGFtYnVyZ2VyJ1xuaW1wb3J0IHtsaW5rTm9PcGVuZXJ9IGZyb20gJy4vbW9kdWxlcy9saW5rTm9PcGVuZXInXG5pbXBvcnQgaW5uZXJMaW5rU3VtbWVyeSBmcm9tICcuL21vZHVsZXMvaW5uZXJMaW5rJ1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgaGVhZGVyKCk7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtcGFnZXRvcCcpICE9IG51bGwpIHtcbiAgICBwYWdldG9wKCk7XG4gIH1cbiAgbGlua05vT3BlbmVyKCk7XG4gIGlubmVyTGlua1N1bW1lcnkoKTtcbn0pIl0sIm5hbWVzIjpbImhlYWRlciIsImhhbWJ1cmdlck1lbnUiLCJoZWFkZXJOYXZpZ2F0aW9uIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwidXJsIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZW5kc1dpdGgiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGQiLCJuYXZUb2dnbGUiLCJuYXYiLCJzbW9vdGhTY3JvbGxMaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0b2dnbGUiLCJib2R5IiwibGlzdEl0ZW1zIiwiZm9yRWFjaCIsIml0ZW0iLCJsaW5rIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZ2V0QXR0cmlidXRlIiwidGFyZ2V0RWxlbWVudCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsImlubmVyTGlua1N1bW1lcnkiLCJpbm5lckxpbmtNYWluIiwidHJpZ2dlckNsYXNzU3RyIiwidHJpZ2dlcnMiLCJ0cmlnZ2VyIiwiaW5uZXJMaW5rIiwiZXZlbnQiLCJfZXZlbnQkY3VycmVudFRhcmdldCQiLCJfZXZlbnQkY3VycmVudFRhcmdldCIsImlubmVyTGlua1dpdGhIYXNoIiwiY3VycmVudFRhcmdldCIsImhhc2giLCJlbCIsImhlYWRlckhlaWdodCIsImNsaWVudEhlaWdodCIsInRhcmdldFBvc2l0aW9uIiwib2Zmc2V0VG9wIiwic3RhcnRQb3NpdGlvbiIsInNjcm9sbGluZ0VsZW1lbnQiLCJzY3JvbGxUb3AiLCJjdXJyZW50UG9zaXRpb24iLCJnb0Rvd24iLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwibXAiLCJtb3ZpbmdQb3NpdGlvbiIsImNsZWFySW50ZXJ2YWwiLCJzdGFydCIsInRhcmdldCIsImN1cnJlbnQiLCJzaW4iLCJNYXRoIiwiUEkiLCJsaW5rTm9PcGVuZXIiLCJsaW5rcyIsInNldEF0dHJpYnV0ZSIsIm9uc2Nyb2xsIiwiZG9jdW1lbnRFbGVtZW50Iiwic3R5bGUiLCJvcGFjaXR5Iiwic2Nyb2xsVG8iLCJ0b3AiLCJoZWFkZXJFbGVtZW50Iiwic2Nyb2xsUG9zaXRpb24iLCJwYWdlWU9mZnNldCIsInBhZ2V0b3AiLCJzY3JvbGxIZWFkZXIiLCJjb21tb24iLCJoYW1idXJnZXIiXSwic291cmNlUm9vdCI6IiJ9