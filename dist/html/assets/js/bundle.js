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

// .nav_toggle 要素を取得します。
var navToggle = document.querySelector("#nav_toggle");
// .nav 要素を取得します。
var nav = document.querySelector(".p-sp-menu");
// .nav 要素を取得します。
var list = document.querySelector(".p-sp-menu__item");

// .nav_toggle 要素にクリックイベントリスナーを設定します。
navToggle.addEventListener("click", function () {
  // .nav_toggle と .nav の両方に show クラスを切り替えます。
  this.classList.toggle("show");
  nav.classList.toggle("show");
  list.classList.toggle("list");
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pagetop: () => (/* binding */ pagetop),
/* harmony export */   pagetopLink: () => (/* binding */ pagetopLink)
/* harmony export */ });
function pagetop() {
  var btn = document.querySelector('.js-pagetop');
  btn.addEventListener('click', pagetopLink);
}
var pagetopLink = function pagetopLink() {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  });
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzVDO0FBRU8sSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUEsRUFBUztFQUMvQkMsTUFBTSxDQUFDQyxNQUFNLENBQUM7SUFBRUMsR0FBRyxFQUFFLENBQUM7SUFBRUMsUUFBUSxFQUFFO0VBQVMsQ0FBQyxDQUFDO0FBQy9DLENBQUM7Ozs7OztVQ1BEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNzQztBQUNLO0FBQ0k7QUFDSTtBQUNEO0FBRWxESCxNQUFNLENBQUM5QyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFNO0VBQ2hEUixzREFBTSxDQUFDLENBQUM7RUFDUixJQUFJSSxRQUFRLENBQUNDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLEVBQUU7SUFDakQ4Qyx5REFBTyxDQUFDLENBQUM7RUFDWDtFQUNBSixtRUFBWSxDQUFDLENBQUM7RUFDZHBDLDhEQUFnQixDQUFDLENBQUM7QUFDcEIsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbmtlbi1uYW1lLy4uL3NyYy9qcy9sYXlvdXQvaGVhZGVyLmpzIiwid2VicGFjazovL2Fua2VuLW5hbWUvLi4vc3JjL2pzL21vZHVsZXMvaGFtYnVyZ2VyLmpzIiwid2VicGFjazovL2Fua2VuLW5hbWUvLi4vc3JjL2pzL21vZHVsZXMvaW5uZXJMaW5rLmpzIiwid2VicGFjazovL2Fua2VuLW5hbWUvLi4vc3JjL2pzL21vZHVsZXMvbGlua05vT3BlbmVyLmpzIiwid2VicGFjazovL2Fua2VuLW5hbWUvLi4vc3JjL2pzL21vZHVsZXMvcGFnZXRvcC5qcyIsIndlYnBhY2s6Ly9hbmtlbi1uYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Fua2VuLW5hbWUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYW5rZW4tbmFtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYW5rZW4tbmFtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Fua2VuLW5hbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hbmtlbi1uYW1lLy4uL3NyYy9qcy9idW5kbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGhlYWRlcigpIHtcbiAgaGFtYnVyZ2VyTWVudSgpXG4gIGhlYWRlck5hdmlnYXRpb24oKVxufVxuXG5leHBvcnQgY29uc3QgaGFtYnVyZ2VyTWVudSA9ICgpID0+IHtcbiAgXG59XG5cbmV4cG9ydCBjb25zdCBoZWFkZXJOYXZpZ2F0aW9uID0gKCkgPT4ge1xuICBcbn0iLCIvLyAubmF2X3RvZ2dsZSDopoHntKDjgpLlj5blvpfjgZfjgb7jgZnjgIJcbmNvbnN0IG5hdlRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2X3RvZ2dsZVwiKTtcbi8vIC5uYXYg6KaB57Sg44KS5Y+W5b6X44GX44G+44GZ44CCXG5jb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnAtc3AtbWVudVwiKTtcbi8vIC5uYXYg6KaB57Sg44KS5Y+W5b6X44GX44G+44GZ44CCXG5jb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wLXNwLW1lbnVfX2l0ZW1cIik7XG5cbi8vIC5uYXZfdG9nZ2xlIOimgee0oOOBq+OCr+ODquODg+OCr+OCpOODmeODs+ODiOODquOCueODiuODvOOCkuioreWumuOBl+OBvuOBmeOAglxubmF2VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIC8vIC5uYXZfdG9nZ2xlIOOBqCAubmF2IOOBruS4oeaWueOBqyBzaG93IOOCr+ODqeOCueOCkuWIh+OCiuabv+OBiOOBvuOBmeOAglxuICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xuICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbiAgICBsaXN0LmNsYXNzTGlzdC50b2dnbGUoXCJsaXN0XCIpO1xufSk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbm5lckxpbmtTdW1tZXJ5KCkge1xuICAvLyDjg5rjg7zjgrjlhoXjg6rjg7Pjgq9cbiAgaW5uZXJMaW5rTWFpbignLmpzLWlubmVyLWxpbmsnKVxufVxuXG5leHBvcnQgY29uc3QgaW5uZXJMaW5rTWFpbiA9ICh0cmlnZ2VyQ2xhc3NTdHIpID0+IHtcbiAgY29uc3QgdHJpZ2dlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRyaWdnZXJDbGFzc1N0cilcblxuICB0cmlnZ2Vycy5mb3JFYWNoKCh0cmlnZ2VyKSA9PiB7XG4gICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGlubmVyTGluaylcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGlubmVyTGluayA9IChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIGlubmVyTGlua1dpdGhIYXNoKGV2ZW50Py5jdXJyZW50VGFyZ2V0Py5oYXNoID8/IFwiaHRtbFwiKVxufVxuXG5leHBvcnQgY29uc3QgaW5uZXJMaW5rV2l0aEhhc2ggPSAoaGFzaCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmwtaGVhZGVyJylcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGhhc2gpWzBdXG4gIGNvbnN0IGhlYWRlckhlaWdodCAgID0gaGVhZGVyLmNsaWVudEhlaWdodFxuICBjb25zdCB0YXJnZXRQb3NpdGlvbiA9IGVsLm9mZnNldFRvcCAtIGhlYWRlckhlaWdodFxuICBjb25zdCBzdGFydFBvc2l0aW9uID0gZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3BcbiAgbGV0IGN1cnJlbnRQb3NpdGlvbiA9IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsVG9wXG5cbiAgY29uc3QgZ29Eb3duID0gY3VycmVudFBvc2l0aW9uIDwgdGFyZ2V0UG9zaXRpb25cbiAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbXAgPSBtb3ZpbmdQb3NpdGlvbihzdGFydFBvc2l0aW9uLCB0YXJnZXRQb3NpdGlvbiwgY3VycmVudFBvc2l0aW9uKVxuICAgIGN1cnJlbnRQb3NpdGlvbiArPSBnb0Rvd24gPyBtcCArIDUgOiAtbXAgLSA1XG4gICAgaWYgKGdvRG93biAmJiBjdXJyZW50UG9zaXRpb24gPiB0YXJnZXRQb3NpdGlvblxuICAgICAgfHwgIWdvRG93biAmJiBjdXJyZW50UG9zaXRpb24gPCB0YXJnZXRQb3NpdGlvbikge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcbiAgICAgIGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsVG9wID0gdGFyZ2V0UG9zaXRpb25cbiAgICB9XG4gICAgZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3AgPSBjdXJyZW50UG9zaXRpb25cbiAgfSwgMTApXG59XG5cbmNvbnN0IG1vdmluZ1Bvc2l0aW9uID0gKHN0YXJ0LCB0YXJnZXQsIGN1cnJlbnQpID0+IHtcbiAgY29uc3Qgc2luID0gTWF0aC5zaW4oKGN1cnJlbnQgLSB0YXJnZXQpIC8gKHN0YXJ0IC0gdGFyZ2V0KSAqIE1hdGguUEkpXG4gIHJldHVybiBzaW4gKiAyMDAvL3NwZWVkXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGxpbmtOb09wZW5lcigpIHtcbiAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW3RhcmdldD1cIl9ibGFua1wiXScpXG4gIGxpbmtzLmZvckVhY2gobGluayA9PiB7XG4gICAgbGluay5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdub29wZW5lciBub3JlZmVycmVyJylcbiAgfSlcbn0iLCJleHBvcnQgZnVuY3Rpb24gcGFnZXRvcCgpIHtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXBhZ2V0b3AnKVxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwYWdldG9wTGluaylcbn1cblxuZXhwb3J0IGNvbnN0IHBhZ2V0b3BMaW5rID0gKCkgPT4ge1xuICB3aW5kb3cuc2Nyb2xsKHsgdG9wOiAwLCBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvL3NjcmlwdHNcbmltcG9ydCB7aGVhZGVyfSBmcm9tICcuL2xheW91dC9oZWFkZXInXG5pbXBvcnQgeyBwYWdldG9wIH0gZnJvbSAnLi9tb2R1bGVzL3BhZ2V0b3AnXG5pbXBvcnQgeyBoYW1idXJnZXIgfSBmcm9tICcuL21vZHVsZXMvaGFtYnVyZ2VyJ1xuaW1wb3J0IHtsaW5rTm9PcGVuZXJ9IGZyb20gJy4vbW9kdWxlcy9saW5rTm9PcGVuZXInXG5pbXBvcnQgaW5uZXJMaW5rU3VtbWVyeSBmcm9tICcuL21vZHVsZXMvaW5uZXJMaW5rJ1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgaGVhZGVyKCk7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtcGFnZXRvcCcpICE9IG51bGwpIHtcbiAgICBwYWdldG9wKCk7XG4gIH1cbiAgbGlua05vT3BlbmVyKCk7XG4gIGlubmVyTGlua1N1bW1lcnkoKTtcbn0pIl0sIm5hbWVzIjpbImhlYWRlciIsImhhbWJ1cmdlck1lbnUiLCJoZWFkZXJOYXZpZ2F0aW9uIiwibmF2VG9nZ2xlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibmF2IiwibGlzdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJpbm5lckxpbmtTdW1tZXJ5IiwiaW5uZXJMaW5rTWFpbiIsInRyaWdnZXJDbGFzc1N0ciIsInRyaWdnZXJzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJ0cmlnZ2VyIiwiaW5uZXJMaW5rIiwiZXZlbnQiLCJfZXZlbnQkY3VycmVudFRhcmdldCQiLCJfZXZlbnQkY3VycmVudFRhcmdldCIsInByZXZlbnREZWZhdWx0IiwiaW5uZXJMaW5rV2l0aEhhc2giLCJjdXJyZW50VGFyZ2V0IiwiaGFzaCIsImVsIiwiaGVhZGVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwidGFyZ2V0UG9zaXRpb24iLCJvZmZzZXRUb3AiLCJzdGFydFBvc2l0aW9uIiwic2Nyb2xsaW5nRWxlbWVudCIsInNjcm9sbFRvcCIsImN1cnJlbnRQb3NpdGlvbiIsImdvRG93biIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJtcCIsIm1vdmluZ1Bvc2l0aW9uIiwiY2xlYXJJbnRlcnZhbCIsInN0YXJ0IiwidGFyZ2V0IiwiY3VycmVudCIsInNpbiIsIk1hdGgiLCJQSSIsImxpbmtOb09wZW5lciIsImxpbmtzIiwibGluayIsInNldEF0dHJpYnV0ZSIsInBhZ2V0b3AiLCJidG4iLCJwYWdldG9wTGluayIsIndpbmRvdyIsInNjcm9sbCIsInRvcCIsImJlaGF2aW9yIiwiaGFtYnVyZ2VyIl0sInNvdXJjZVJvb3QiOiIifQ==