/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../src/js/layout/header.js":
/*!**********************************!*\
  !*** ../src/js/layout/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "../src/js/modules/innerLink.js":
/*!**************************************!*\
  !*** ../src/js/modules/innerLink.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ../src/js/bundle.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/header */ "../src/js/layout/header.js");
/* harmony import */ var _modules_pagetop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/pagetop */ "../src/js/modules/pagetop.js");
/* harmony import */ var _modules_linkNoOpener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/linkNoOpener */ "../src/js/modules/linkNoOpener.js");
/* harmony import */ var _modules_innerLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/innerLink */ "../src/js/modules/innerLink.js");
//scripts




window.addEventListener('DOMContentLoaded', function () {
  (0,_layout_header__WEBPACK_IMPORTED_MODULE_0__.header)();
  if (document.querySelector('.js-pagetop') != null) {
    (0,_modules_pagetop__WEBPACK_IMPORTED_MODULE_1__.pagetop)();
  }
  (0,_modules_linkNoOpener__WEBPACK_IMPORTED_MODULE_2__.linkNoOpener)();
  (0,_modules_innerLink__WEBPACK_IMPORTED_MODULE_3__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RztBQUNVO0FBQ0Q7QUFFbERILE1BQU0sQ0FBQ3RDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQU07RUFDaERYLHNEQUFNLENBQUMsQ0FBQztFQUNSLElBQUlPLFFBQVEsQ0FBQ2EsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksRUFBRTtJQUNqRDBCLHlEQUFPLENBQUMsQ0FBQztFQUNYO0VBQ0FKLG1FQUFZLENBQUMsQ0FBQztFQUNkdkMsOERBQWdCLENBQUMsQ0FBQztBQUNwQixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Fua2VuLW5hbWUvLi4vc3JjL2pzL2xheW91dC9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vYW5rZW4tbmFtZS8uLi9zcmMvanMvbW9kdWxlcy9pbm5lckxpbmsuanMiLCJ3ZWJwYWNrOi8vYW5rZW4tbmFtZS8uLi9zcmMvanMvbW9kdWxlcy9saW5rTm9PcGVuZXIuanMiLCJ3ZWJwYWNrOi8vYW5rZW4tbmFtZS8uLi9zcmMvanMvbW9kdWxlcy9wYWdldG9wLmpzIiwid2VicGFjazovL2Fua2VuLW5hbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYW5rZW4tbmFtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYW5rZW4tbmFtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Fua2VuLW5hbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hbmtlbi1uYW1lLy4uL3NyYy9qcy9idW5kbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGhlYWRlcigpIHtcbiAgaGFtYnVyZ2VyTWVudSgpXG4gIGhlYWRlck5hdmlnYXRpb24oKVxufVxuXG5leHBvcnQgY29uc3QgaGFtYnVyZ2VyTWVudSA9ICgpID0+IHtcbiAgXG59XG5cbmV4cG9ydCBjb25zdCBoZWFkZXJOYXZpZ2F0aW9uID0gKCkgPT4ge1xuICBcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbm5lckxpbmtTdW1tZXJ5KCkge1xuICAvLyDjg5rjg7zjgrjlhoXjg6rjg7Pjgq9cbiAgaW5uZXJMaW5rTWFpbignLmpzLWlubmVyLWxpbmsnKVxufVxuXG5leHBvcnQgY29uc3QgaW5uZXJMaW5rTWFpbiA9ICh0cmlnZ2VyQ2xhc3NTdHIpID0+IHtcbiAgY29uc3QgdHJpZ2dlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRyaWdnZXJDbGFzc1N0cilcblxuICB0cmlnZ2Vycy5mb3JFYWNoKCh0cmlnZ2VyKSA9PiB7XG4gICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGlubmVyTGluaylcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGlubmVyTGluayA9IChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIGlubmVyTGlua1dpdGhIYXNoKGV2ZW50Py5jdXJyZW50VGFyZ2V0Py5oYXNoID8/IFwiaHRtbFwiKVxufVxuXG5leHBvcnQgY29uc3QgaW5uZXJMaW5rV2l0aEhhc2ggPSAoaGFzaCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmwtaGVhZGVyJylcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGhhc2gpWzBdXG4gIGNvbnN0IGhlYWRlckhlaWdodCAgID0gaGVhZGVyLmNsaWVudEhlaWdodFxuICBjb25zdCB0YXJnZXRQb3NpdGlvbiA9IGVsLm9mZnNldFRvcCAtIGhlYWRlckhlaWdodFxuICBjb25zdCBzdGFydFBvc2l0aW9uID0gZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3BcbiAgbGV0IGN1cnJlbnRQb3NpdGlvbiA9IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsVG9wXG5cbiAgY29uc3QgZ29Eb3duID0gY3VycmVudFBvc2l0aW9uIDwgdGFyZ2V0UG9zaXRpb25cbiAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbXAgPSBtb3ZpbmdQb3NpdGlvbihzdGFydFBvc2l0aW9uLCB0YXJnZXRQb3NpdGlvbiwgY3VycmVudFBvc2l0aW9uKVxuICAgIGN1cnJlbnRQb3NpdGlvbiArPSBnb0Rvd24gPyBtcCArIDUgOiAtbXAgLSA1XG4gICAgaWYgKGdvRG93biAmJiBjdXJyZW50UG9zaXRpb24gPiB0YXJnZXRQb3NpdGlvblxuICAgICAgfHwgIWdvRG93biAmJiBjdXJyZW50UG9zaXRpb24gPCB0YXJnZXRQb3NpdGlvbikge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcbiAgICAgIGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsVG9wID0gdGFyZ2V0UG9zaXRpb25cbiAgICB9XG4gICAgZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3AgPSBjdXJyZW50UG9zaXRpb25cbiAgfSwgMTApXG59XG5cbmNvbnN0IG1vdmluZ1Bvc2l0aW9uID0gKHN0YXJ0LCB0YXJnZXQsIGN1cnJlbnQpID0+IHtcbiAgY29uc3Qgc2luID0gTWF0aC5zaW4oKGN1cnJlbnQgLSB0YXJnZXQpIC8gKHN0YXJ0IC0gdGFyZ2V0KSAqIE1hdGguUEkpXG4gIHJldHVybiBzaW4gKiAyMDAvL3NwZWVkXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGxpbmtOb09wZW5lcigpIHtcbiAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW3RhcmdldD1cIl9ibGFua1wiXScpXG4gIGxpbmtzLmZvckVhY2gobGluayA9PiB7XG4gICAgbGluay5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdub29wZW5lciBub3JlZmVycmVyJylcbiAgfSlcbn0iLCJleHBvcnQgZnVuY3Rpb24gcGFnZXRvcCgpIHtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXBhZ2V0b3AnKVxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwYWdldG9wTGluaylcbn1cblxuZXhwb3J0IGNvbnN0IHBhZ2V0b3BMaW5rID0gKCkgPT4ge1xuICB3aW5kb3cuc2Nyb2xsKHsgdG9wOiAwLCBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy9zY3JpcHRzXG5pbXBvcnQge2hlYWRlcn0gZnJvbSAnLi9sYXlvdXQvaGVhZGVyJ1xuaW1wb3J0IHtwYWdldG9wfSBmcm9tICcuL21vZHVsZXMvcGFnZXRvcCdcbmltcG9ydCB7bGlua05vT3BlbmVyfSBmcm9tICcuL21vZHVsZXMvbGlua05vT3BlbmVyJ1xuaW1wb3J0IGlubmVyTGlua1N1bW1lcnkgZnJvbSAnLi9tb2R1bGVzL2lubmVyTGluaydcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGhlYWRlcigpO1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXBhZ2V0b3AnKSAhPSBudWxsKSB7XG4gICAgcGFnZXRvcCgpO1xuICB9XG4gIGxpbmtOb09wZW5lcigpO1xuICBpbm5lckxpbmtTdW1tZXJ5KCk7XG59KSJdLCJuYW1lcyI6WyJoZWFkZXIiLCJoYW1idXJnZXJNZW51IiwiaGVhZGVyTmF2aWdhdGlvbiIsImlubmVyTGlua1N1bW1lcnkiLCJpbm5lckxpbmtNYWluIiwidHJpZ2dlckNsYXNzU3RyIiwidHJpZ2dlcnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwidHJpZ2dlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbm5lckxpbmsiLCJldmVudCIsIl9ldmVudCRjdXJyZW50VGFyZ2V0JCIsIl9ldmVudCRjdXJyZW50VGFyZ2V0IiwicHJldmVudERlZmF1bHQiLCJpbm5lckxpbmtXaXRoSGFzaCIsImN1cnJlbnRUYXJnZXQiLCJoYXNoIiwicXVlcnlTZWxlY3RvciIsImVsIiwiaGVhZGVySGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwidGFyZ2V0UG9zaXRpb24iLCJvZmZzZXRUb3AiLCJzdGFydFBvc2l0aW9uIiwic2Nyb2xsaW5nRWxlbWVudCIsInNjcm9sbFRvcCIsImN1cnJlbnRQb3NpdGlvbiIsImdvRG93biIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJtcCIsIm1vdmluZ1Bvc2l0aW9uIiwiY2xlYXJJbnRlcnZhbCIsInN0YXJ0IiwidGFyZ2V0IiwiY3VycmVudCIsInNpbiIsIk1hdGgiLCJQSSIsImxpbmtOb09wZW5lciIsImxpbmtzIiwibGluayIsInNldEF0dHJpYnV0ZSIsInBhZ2V0b3AiLCJidG4iLCJwYWdldG9wTGluayIsIndpbmRvdyIsInNjcm9sbCIsInRvcCIsImJlaGF2aW9yIl0sInNvdXJjZVJvb3QiOiIifQ==