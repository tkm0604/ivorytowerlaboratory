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
/* harmony import */ var _modules_hamburger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/hamburger */ "../src/js/modules/hamburger.js");
/* harmony import */ var _modules_hamburger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_hamburger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_linkNoOpener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/linkNoOpener */ "../src/js/modules/linkNoOpener.js");
/* harmony import */ var _modules_innerLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/innerLink */ "../src/js/modules/innerLink.js");
//scripts





window.addEventListener('DOMContentLoaded', function () {
  (0,_layout_header__WEBPACK_IMPORTED_MODULE_0__.header)();
  if (document.querySelector('.js-pagetop') != null) {
    (0,_modules_pagetop__WEBPACK_IMPORTED_MODULE_1__.pagetop)();
  }
  (0,_modules_linkNoOpener__WEBPACK_IMPORTED_MODULE_3__.linkNoOpener)();
  (0,_modules_innerLink__WEBPACK_IMPORTED_MODULE_4__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7RUFDZGpDLDhEQUFnQixDQUFDLENBQUM7QUFDcEIsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbmtlbi1uYW1lLy4uL3NyYy9qcy9sYXlvdXQvaGVhZGVyLmpzIiwid2VicGFjazovL2Fua2VuLW5hbWUvLi4vc3JjL2pzL21vZHVsZXMvaGFtYnVyZ2VyLmpzIiwid2VicGFjazovL2Fua2VuLW5hbWUvLi4vc3JjL2pzL21vZHVsZXMvaW5uZXJMaW5rLmpzIiwid2VicGFjazovL2Fua2VuLW5hbWUvLi4vc3JjL2pzL21vZHVsZXMvbGlua05vT3BlbmVyLmpzIiwid2VicGFjazovL2Fua2VuLW5hbWUvLi4vc3JjL2pzL21vZHVsZXMvcGFnZXRvcC5qcyIsIndlYnBhY2s6Ly9hbmtlbi1uYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Fua2VuLW5hbWUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYW5rZW4tbmFtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYW5rZW4tbmFtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Fua2VuLW5hbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hbmtlbi1uYW1lLy4uL3NyYy9qcy9idW5kbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGhlYWRlcigpIHtcbiAgaGFtYnVyZ2VyTWVudSgpXG4gIGhlYWRlck5hdmlnYXRpb24oKVxufVxuXG5leHBvcnQgY29uc3QgaGFtYnVyZ2VyTWVudSA9ICgpID0+IHtcbiAgXG59XG5cbmV4cG9ydCBjb25zdCBoZWFkZXJOYXZpZ2F0aW9uID0gKCkgPT4ge1xuICBcbn0iLCIvLyAubmF2X3RvZ2dsZSDopoHntKDjgpLlj5blvpdcbmNvbnN0IG5hdlRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2X3RvZ2dsZVwiKTtcbi8vIC5uYXYg6KaB57Sg44KS5Y+W5b6XXG5jb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnAtc3AtbWVudVwiKTtcbmNvbnN0IHNtb290aFNjcm9sbExpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYVtocmVmXj1cIiNcIl0nKTtcblxuLy8gLm5hdl90b2dnbGUg6KaB57Sg44Gr44Kv44Oq44OD44Kv44Kk44OZ44Oz44OI44Oq44K544OK44O844KS6Kit5a6aXG5uYXZUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgLy8gLm5hdl90b2dnbGUg44GoIC5uYXYg44Gu5Lih5pa544GrIHNob3cg44Kv44Op44K544KS5YiH44KK5pu/44GIXG4gIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIik7XG4gIG5hdi5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCduby1zY3JvbGwnKTtcbn0pO1xuXG4vLyAucC1zcC1tZW51X19pdGVtIOimgee0oOOCkuWFqOOBpuWPluW+l1xuY29uc3QgbGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wLXNwLW1lbnVfX2l0ZW1cIik7XG5cbi8vIOWQhCAucC1zcC1tZW51X19pdGVtIOimgee0oOOBq+OCr+ODquODg+OCr+OCpOODmeODs+ODiOODquOCueODiuODvOOCkuioreWumlxubGlzdEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyDjg6Hjg4vjg6Xjg7zjgpLplonjgZjjgotcbiAgICAgICAgbmF2VG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgICAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm8tc2Nyb2xsJyk7XG4gICAgfSk7XG59KTtcblxuLy8g44K544Og44O844K644K544Kv44Ot44O844Or44Gu44Gf44KB44Gu44Kk44OZ44Oz44OI44Oq44K544OK44O844KS6Kit5a6aXG5zbW9vdGhTY3JvbGxMaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgaHJlZiA9IHRoaXMuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGhyZWYpO1xuICAgICAgICB0YXJnZXRFbGVtZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ3N0YXJ0JyB9KTtcblxuICAgICAgICAvLyDjg6Hjg4vjg6Xjg7zjgpLplonjgZjjgovjg63jgrjjg4Pjgq/jgoLjgZPjgZPjgavlkKvjgoHjgotcbiAgICAgICAgbmF2VG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgICAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm8tc2Nyb2xsJyk7XG4gICAgfSk7XG59KTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlubmVyTGlua1N1bW1lcnkoKSB7XG4gIC8vIOODmuODvOOCuOWGheODquODs+OCr1xuICBpbm5lckxpbmtNYWluKCcuanMtaW5uZXItbGluaycpXG59XG5cbmV4cG9ydCBjb25zdCBpbm5lckxpbmtNYWluID0gKHRyaWdnZXJDbGFzc1N0cikgPT4ge1xuICBjb25zdCB0cmlnZ2VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodHJpZ2dlckNsYXNzU3RyKVxuXG4gIHRyaWdnZXJzLmZvckVhY2goKHRyaWdnZXIpID0+IHtcbiAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaW5uZXJMaW5rKVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgaW5uZXJMaW5rID0gKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgaW5uZXJMaW5rV2l0aEhhc2goZXZlbnQ/LmN1cnJlbnRUYXJnZXQ/Lmhhc2ggPz8gXCJodG1sXCIpXG59XG5cbmV4cG9ydCBjb25zdCBpbm5lckxpbmtXaXRoSGFzaCA9IChoYXNoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubC1oZWFkZXInKVxuICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoaGFzaClbMF1cbiAgY29uc3QgaGVhZGVySGVpZ2h0ICAgPSBoZWFkZXIuY2xpZW50SGVpZ2h0XG4gIGNvbnN0IHRhcmdldFBvc2l0aW9uID0gZWwub2Zmc2V0VG9wIC0gaGVhZGVySGVpZ2h0XG4gIGNvbnN0IHN0YXJ0UG9zaXRpb24gPSBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50LnNjcm9sbFRvcFxuICBsZXQgY3VycmVudFBvc2l0aW9uID0gZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3BcblxuICBjb25zdCBnb0Rvd24gPSBjdXJyZW50UG9zaXRpb24gPCB0YXJnZXRQb3NpdGlvblxuICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBtcCA9IG1vdmluZ1Bvc2l0aW9uKHN0YXJ0UG9zaXRpb24sIHRhcmdldFBvc2l0aW9uLCBjdXJyZW50UG9zaXRpb24pXG4gICAgY3VycmVudFBvc2l0aW9uICs9IGdvRG93biA/IG1wICsgNSA6IC1tcCAtIDVcbiAgICBpZiAoZ29Eb3duICYmIGN1cnJlbnRQb3NpdGlvbiA+IHRhcmdldFBvc2l0aW9uXG4gICAgICB8fCAhZ29Eb3duICYmIGN1cnJlbnRQb3NpdGlvbiA8IHRhcmdldFBvc2l0aW9uKSB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKVxuICAgICAgZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3AgPSB0YXJnZXRQb3NpdGlvblxuICAgIH1cbiAgICBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50LnNjcm9sbFRvcCA9IGN1cnJlbnRQb3NpdGlvblxuICB9LCAxMClcbn1cblxuY29uc3QgbW92aW5nUG9zaXRpb24gPSAoc3RhcnQsIHRhcmdldCwgY3VycmVudCkgPT4ge1xuICBjb25zdCBzaW4gPSBNYXRoLnNpbigoY3VycmVudCAtIHRhcmdldCkgLyAoc3RhcnQgLSB0YXJnZXQpICogTWF0aC5QSSlcbiAgcmV0dXJuIHNpbiAqIDIwMC8vc3BlZWRcbn0iLCJleHBvcnQgZnVuY3Rpb24gbGlua05vT3BlbmVyKCkge1xuICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbdGFyZ2V0PVwiX2JsYW5rXCJdJylcbiAgbGlua3MuZm9yRWFjaChsaW5rID0+IHtcbiAgICBsaW5rLnNldEF0dHJpYnV0ZSgncmVsJywgJ25vb3BlbmVyIG5vcmVmZXJyZXInKVxuICB9KVxufSIsIndpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID4gMTAwIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPiAxMDApXG4gIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2V0b3BcIikuc3R5bGUub3BhY2l0eSA9IFwiMC43XCI7XG4gIH0gZWxzZVxuICB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdldG9wXCIpLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcblxuICB9ICBcbn07XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZXRvcFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHdpbmRvdy5zY3JvbGxUbyh7dG9wOiAwLCBiZWhhdmlvcjogJ3Ntb290aCd9KTtcbn0pOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvL3NjcmlwdHNcbmltcG9ydCB7aGVhZGVyfSBmcm9tICcuL2xheW91dC9oZWFkZXInXG5pbXBvcnQgeyBwYWdldG9wIH0gZnJvbSAnLi9tb2R1bGVzL3BhZ2V0b3AnXG5pbXBvcnQgeyBoYW1idXJnZXIgfSBmcm9tICcuL21vZHVsZXMvaGFtYnVyZ2VyJ1xuaW1wb3J0IHtsaW5rTm9PcGVuZXJ9IGZyb20gJy4vbW9kdWxlcy9saW5rTm9PcGVuZXInXG5pbXBvcnQgaW5uZXJMaW5rU3VtbWVyeSBmcm9tICcuL21vZHVsZXMvaW5uZXJMaW5rJ1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgaGVhZGVyKCk7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtcGFnZXRvcCcpICE9IG51bGwpIHtcbiAgICBwYWdldG9wKCk7XG4gIH1cbiAgbGlua05vT3BlbmVyKCk7XG4gIGlubmVyTGlua1N1bW1lcnkoKTtcbn0pIl0sIm5hbWVzIjpbImhlYWRlciIsImhhbWJ1cmdlck1lbnUiLCJoZWFkZXJOYXZpZ2F0aW9uIiwibmF2VG9nZ2xlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibmF2Iiwic21vb3RoU2Nyb2xsTGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImJvZHkiLCJsaXN0SXRlbXMiLCJmb3JFYWNoIiwiaXRlbSIsInJlbW92ZSIsImxpbmsiLCJlIiwicHJldmVudERlZmF1bHQiLCJocmVmIiwiZ2V0QXR0cmlidXRlIiwidGFyZ2V0RWxlbWVudCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsImlubmVyTGlua1N1bW1lcnkiLCJpbm5lckxpbmtNYWluIiwidHJpZ2dlckNsYXNzU3RyIiwidHJpZ2dlcnMiLCJ0cmlnZ2VyIiwiaW5uZXJMaW5rIiwiZXZlbnQiLCJfZXZlbnQkY3VycmVudFRhcmdldCQiLCJfZXZlbnQkY3VycmVudFRhcmdldCIsImlubmVyTGlua1dpdGhIYXNoIiwiY3VycmVudFRhcmdldCIsImhhc2giLCJlbCIsImhlYWRlckhlaWdodCIsImNsaWVudEhlaWdodCIsInRhcmdldFBvc2l0aW9uIiwib2Zmc2V0VG9wIiwic3RhcnRQb3NpdGlvbiIsInNjcm9sbGluZ0VsZW1lbnQiLCJzY3JvbGxUb3AiLCJjdXJyZW50UG9zaXRpb24iLCJnb0Rvd24iLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwibXAiLCJtb3ZpbmdQb3NpdGlvbiIsImNsZWFySW50ZXJ2YWwiLCJzdGFydCIsInRhcmdldCIsImN1cnJlbnQiLCJzaW4iLCJNYXRoIiwiUEkiLCJsaW5rTm9PcGVuZXIiLCJsaW5rcyIsInNldEF0dHJpYnV0ZSIsIndpbmRvdyIsIm9uc2Nyb2xsIiwiZG9jdW1lbnRFbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsIm9wYWNpdHkiLCJzY3JvbGxUbyIsInRvcCIsInBhZ2V0b3AiLCJoYW1idXJnZXIiXSwic291cmNlUm9vdCI6IiJ9