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
/* harmony import */ var _modules_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/common */ "../src/js/modules/common.js");
/* harmony import */ var _modules_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_hamburger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/hamburger */ "../src/js/modules/hamburger.js");
/* harmony import */ var _modules_hamburger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_hamburger__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_linkNoOpener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/linkNoOpener */ "../src/js/modules/linkNoOpener.js");
/* harmony import */ var _modules_innerLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/innerLink */ "../src/js/modules/innerLink.js");
//scripts






window.addEventListener('DOMContentLoaded', function () {
  (0,_layout_header__WEBPACK_IMPORTED_MODULE_0__.header)();
  if (document.querySelector('.js-pagetop') != null) {
    (0,_modules_pagetop__WEBPACK_IMPORTED_MODULE_1__.pagetop)();
  }
  (0,_modules_linkNoOpener__WEBPACK_IMPORTED_MODULE_4__.linkNoOpener)();
  (0,_modules_innerLink__WEBPACK_IMPORTED_MODULE_5__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztJQUFFM0MsUUFBUSxFQUFFO0VBQVEsQ0FBQyxDQUFDO0FBQy9DLENBQUMsQ0FBQzs7Ozs7O1VDZEY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ3NDO0FBQ0s7QUFDRjtBQUNNO0FBQ0k7QUFDRDtBQUVsRHhCLE1BQU0sQ0FBQ0YsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBTTtFQUNoREosc0RBQU0sQ0FBQyxDQUFDO0VBQ1IsSUFBSUcsUUFBUSxDQUFDTyxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSxFQUFFO0lBQ2pEZ0UseURBQU8sQ0FBQyxDQUFDO0VBQ1g7RUFDQVQsbUVBQVksQ0FBQyxDQUFDO0VBQ2RqQyw4REFBZ0IsQ0FBQyxDQUFDO0FBQ3BCLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW5rZW4tbmFtZS8uLi9zcmMvanMvbGF5b3V0L2hlYWRlci5qcyIsIndlYnBhY2s6Ly9hbmtlbi1uYW1lLy4uL3NyYy9qcy9tb2R1bGVzL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly9hbmtlbi1uYW1lLy4uL3NyYy9qcy9tb2R1bGVzL2hhbWJ1cmdlci5qcyIsIndlYnBhY2s6Ly9hbmtlbi1uYW1lLy4uL3NyYy9qcy9tb2R1bGVzL2lubmVyTGluay5qcyIsIndlYnBhY2s6Ly9hbmtlbi1uYW1lLy4uL3NyYy9qcy9tb2R1bGVzL2xpbmtOb09wZW5lci5qcyIsIndlYnBhY2s6Ly9hbmtlbi1uYW1lLy4uL3NyYy9qcy9tb2R1bGVzL3BhZ2V0b3AuanMiLCJ3ZWJwYWNrOi8vYW5rZW4tbmFtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hbmtlbi1uYW1lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Fua2VuLW5hbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Fua2VuLW5hbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hbmtlbi1uYW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYW5rZW4tbmFtZS8uLi9zcmMvanMvYnVuZGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBoZWFkZXIoKSB7XG4gIGhhbWJ1cmdlck1lbnUoKVxuICBoZWFkZXJOYXZpZ2F0aW9uKClcbn1cblxuZXhwb3J0IGNvbnN0IGhhbWJ1cmdlck1lbnUgPSAoKSA9PiB7XG4gIFxufVxuXG5leHBvcnQgY29uc3QgaGVhZGVyTmF2aWdhdGlvbiA9ICgpID0+IHtcbiAgXG59IiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICBcbiAgICAvLyBVUkzmnKvlsL7jgavlv5zjgZjjgZ/jgq/jg6njgrnjga7liIfjgormm7/jgYhcbiAgICBpZiAodXJsLmVuZHNXaXRoKCcjY29uZmlybWF0aW9uJykpIHtcbiAgICAgICAgLy8gI2NvbnRhY3Tjga7loLTlkIjjgIFuYXZpXzAx44GL44KJ44Kv44Op44K544KS5YmK6Zmk44GX44CBbmF2aV8wMuOBq+i/veWKoFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aV8wMS5wLWNvbnRhY3QtaGVhZF9faXRlbS1jdXJyZW50JykuY2xhc3NMaXN0LnJlbW92ZSgncC1jb250YWN0LWhlYWRfX2l0ZW0tY3VycmVudCcpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybWF0aW9uJykuY2xhc3NMaXN0LmFkZCgncC1jb250YWN0LWhlYWRfX2l0ZW0tY3VycmVudCcpO1xuICAgIH0gZWxzZSBpZiAodXJsLmVuZHNXaXRoKCcjY29udGFjdF9maW5pc2gnKSkge1xuICAgICAgICAvLyAjY29udGFjdF9maW5pc2jjga7loLTlkIjjgIFuYXZpXzAx44GL44KJ44Kv44Op44K544KS5YmK6Zmk44GX44CBbmF2aV8wM+OBq+i/veWKoFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aV8wMS5wLWNvbnRhY3QtaGVhZF9faXRlbS1jdXJyZW50JykuY2xhc3NMaXN0LnJlbW92ZSgncC1jb250YWN0LWhlYWRfX2l0ZW0tY3VycmVudCcpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VuZC1jb21wbGV0ZWx5JykuY2xhc3NMaXN0LmFkZCgncC1jb250YWN0LWhlYWRfX2l0ZW0tY3VycmVudCcpO1xuICAgIH1cbn0pO1xuIiwiLy8gLm5hdl90b2dnbGUg6KaB57Sg44KS5Y+W5b6XXG5jb25zdCBuYXZUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdl90b2dnbGVcIik7XG4vLyAubmF2IOimgee0oOOCkuWPluW+l1xuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wLXNwLW1lbnVcIik7XG5jb25zdCBzbW9vdGhTY3JvbGxMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaHJlZl49XCIjXCJdJyk7XG5cbi8vIC5uYXZfdG9nZ2xlIOimgee0oOOBq+OCr+ODquODg+OCr+OCpOODmeODs+ODiOODquOCueODiuODvOOCkuioreWumlxubmF2VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIC8vIC5uYXZfdG9nZ2xlIOOBqCAubmF2IOOBruS4oeaWueOBqyBzaG93IOOCr+ODqeOCueOCkuWIh+OCiuabv+OBiFxuICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xuICBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnbm8tc2Nyb2xsJyk7XG59KTtcblxuLy8gLnAtc3AtbWVudV9faXRlbSDopoHntKDjgpLlhajjgablj5blvpdcbmNvbnN0IGxpc3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucC1zcC1tZW51X19pdGVtXCIpO1xuXG4vLyDlkIQgLnAtc3AtbWVudV9faXRlbSDopoHntKDjgavjgq/jg6rjg4Pjgq/jgqTjg5njg7Pjg4jjg6rjgrnjg4rjg7zjgpLoqK3lrppcbmxpc3RJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8g44Oh44OL44Ol44O844KS6ZaJ44GY44KLXG4gICAgICAgIG5hdlRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vLXNjcm9sbCcpO1xuICAgIH0pO1xufSk7XG5cbi8vIOOCueODoOODvOOCuuOCueOCr+ODreODvOODq+OBruOBn+OCgeOBruOCpOODmeODs+ODiOODquOCueODiuODvOOCkuioreWumlxuc21vb3RoU2Nyb2xsTGlua3MuZm9yRWFjaChsaW5rID0+IHtcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGhyZWYgPSB0aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihocmVmKTtcbiAgICAgICAgdGFyZ2V0RWxlbWVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICdzdGFydCcgfSk7XG5cbiAgICAgICAgLy8g44Oh44OL44Ol44O844KS6ZaJ44GY44KL44Ot44K444OD44Kv44KC44GT44GT44Gr5ZCr44KB44KLXG4gICAgICAgIG5hdlRvZ2dsZS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vLXNjcm9sbCcpO1xuICAgIH0pO1xufSk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbm5lckxpbmtTdW1tZXJ5KCkge1xuICAvLyDjg5rjg7zjgrjlhoXjg6rjg7Pjgq9cbiAgaW5uZXJMaW5rTWFpbignLmpzLWlubmVyLWxpbmsnKVxufVxuXG5leHBvcnQgY29uc3QgaW5uZXJMaW5rTWFpbiA9ICh0cmlnZ2VyQ2xhc3NTdHIpID0+IHtcbiAgY29uc3QgdHJpZ2dlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRyaWdnZXJDbGFzc1N0cilcblxuICB0cmlnZ2Vycy5mb3JFYWNoKCh0cmlnZ2VyKSA9PiB7XG4gICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGlubmVyTGluaylcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGlubmVyTGluayA9IChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIGlubmVyTGlua1dpdGhIYXNoKGV2ZW50Py5jdXJyZW50VGFyZ2V0Py5oYXNoID8/IFwiaHRtbFwiKVxufVxuXG5leHBvcnQgY29uc3QgaW5uZXJMaW5rV2l0aEhhc2ggPSAoaGFzaCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmwtaGVhZGVyJylcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGhhc2gpWzBdXG4gIGNvbnN0IGhlYWRlckhlaWdodCAgID0gaGVhZGVyLmNsaWVudEhlaWdodFxuICBjb25zdCB0YXJnZXRQb3NpdGlvbiA9IGVsLm9mZnNldFRvcCAtIGhlYWRlckhlaWdodFxuICBjb25zdCBzdGFydFBvc2l0aW9uID0gZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3BcbiAgbGV0IGN1cnJlbnRQb3NpdGlvbiA9IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsVG9wXG5cbiAgY29uc3QgZ29Eb3duID0gY3VycmVudFBvc2l0aW9uIDwgdGFyZ2V0UG9zaXRpb25cbiAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbXAgPSBtb3ZpbmdQb3NpdGlvbihzdGFydFBvc2l0aW9uLCB0YXJnZXRQb3NpdGlvbiwgY3VycmVudFBvc2l0aW9uKVxuICAgIGN1cnJlbnRQb3NpdGlvbiArPSBnb0Rvd24gPyBtcCArIDUgOiAtbXAgLSA1XG4gICAgaWYgKGdvRG93biAmJiBjdXJyZW50UG9zaXRpb24gPiB0YXJnZXRQb3NpdGlvblxuICAgICAgfHwgIWdvRG93biAmJiBjdXJyZW50UG9zaXRpb24gPCB0YXJnZXRQb3NpdGlvbikge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcbiAgICAgIGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsVG9wID0gdGFyZ2V0UG9zaXRpb25cbiAgICB9XG4gICAgZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3AgPSBjdXJyZW50UG9zaXRpb25cbiAgfSwgMTApXG59XG5cbmNvbnN0IG1vdmluZ1Bvc2l0aW9uID0gKHN0YXJ0LCB0YXJnZXQsIGN1cnJlbnQpID0+IHtcbiAgY29uc3Qgc2luID0gTWF0aC5zaW4oKGN1cnJlbnQgLSB0YXJnZXQpIC8gKHN0YXJ0IC0gdGFyZ2V0KSAqIE1hdGguUEkpXG4gIHJldHVybiBzaW4gKiAyMDAvL3NwZWVkXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGxpbmtOb09wZW5lcigpIHtcbiAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW3RhcmdldD1cIl9ibGFua1wiXScpXG4gIGxpbmtzLmZvckVhY2gobGluayA9PiB7XG4gICAgbGluay5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdub29wZW5lciBub3JlZmVycmVyJylcbiAgfSlcbn0iLCJ3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG4gIGlmIChkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA+IDEwMCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID4gMTAwKVxuICB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdldG9wXCIpLnN0eWxlLm9wYWNpdHkgPSBcIjAuN1wiO1xuICB9IGVsc2VcbiAge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZXRvcFwiKS5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG5cbiAgfSAgXG59O1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2V0b3BcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB3aW5kb3cuc2Nyb2xsVG8oe3RvcDogMCwgYmVoYXZpb3I6ICdzbW9vdGgnfSk7XG59KTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy9zY3JpcHRzXG5pbXBvcnQge2hlYWRlcn0gZnJvbSAnLi9sYXlvdXQvaGVhZGVyJ1xuaW1wb3J0IHsgcGFnZXRvcCB9IGZyb20gJy4vbW9kdWxlcy9wYWdldG9wJ1xuaW1wb3J0IHsgY29tbW9uIH0gZnJvbSAnLi9tb2R1bGVzL2NvbW1vbidcbmltcG9ydCB7IGhhbWJ1cmdlciB9IGZyb20gJy4vbW9kdWxlcy9oYW1idXJnZXInXG5pbXBvcnQge2xpbmtOb09wZW5lcn0gZnJvbSAnLi9tb2R1bGVzL2xpbmtOb09wZW5lcidcbmltcG9ydCBpbm5lckxpbmtTdW1tZXJ5IGZyb20gJy4vbW9kdWxlcy9pbm5lckxpbmsnXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBoZWFkZXIoKTtcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1wYWdldG9wJykgIT0gbnVsbCkge1xuICAgIHBhZ2V0b3AoKTtcbiAgfVxuICBsaW5rTm9PcGVuZXIoKTtcbiAgaW5uZXJMaW5rU3VtbWVyeSgpO1xufSkiXSwibmFtZXMiOlsiaGVhZGVyIiwiaGFtYnVyZ2VyTWVudSIsImhlYWRlck5hdmlnYXRpb24iLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1cmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJlbmRzV2l0aCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJnZXRFbGVtZW50QnlJZCIsImFkZCIsIm5hdlRvZ2dsZSIsIm5hdiIsInNtb290aFNjcm9sbExpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsInRvZ2dsZSIsImJvZHkiLCJsaXN0SXRlbXMiLCJmb3JFYWNoIiwiaXRlbSIsImxpbmsiLCJlIiwicHJldmVudERlZmF1bHQiLCJnZXRBdHRyaWJ1dGUiLCJ0YXJnZXRFbGVtZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwiaW5uZXJMaW5rU3VtbWVyeSIsImlubmVyTGlua01haW4iLCJ0cmlnZ2VyQ2xhc3NTdHIiLCJ0cmlnZ2VycyIsInRyaWdnZXIiLCJpbm5lckxpbmsiLCJldmVudCIsIl9ldmVudCRjdXJyZW50VGFyZ2V0JCIsIl9ldmVudCRjdXJyZW50VGFyZ2V0IiwiaW5uZXJMaW5rV2l0aEhhc2giLCJjdXJyZW50VGFyZ2V0IiwiaGFzaCIsImVsIiwiaGVhZGVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwidGFyZ2V0UG9zaXRpb24iLCJvZmZzZXRUb3AiLCJzdGFydFBvc2l0aW9uIiwic2Nyb2xsaW5nRWxlbWVudCIsInNjcm9sbFRvcCIsImN1cnJlbnRQb3NpdGlvbiIsImdvRG93biIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJtcCIsIm1vdmluZ1Bvc2l0aW9uIiwiY2xlYXJJbnRlcnZhbCIsInN0YXJ0IiwidGFyZ2V0IiwiY3VycmVudCIsInNpbiIsIk1hdGgiLCJQSSIsImxpbmtOb09wZW5lciIsImxpbmtzIiwic2V0QXR0cmlidXRlIiwib25zY3JvbGwiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsIm9wYWNpdHkiLCJzY3JvbGxUbyIsInRvcCIsInBhZ2V0b3AiLCJjb21tb24iLCJoYW1idXJnZXIiXSwic291cmNlUm9vdCI6IiJ9