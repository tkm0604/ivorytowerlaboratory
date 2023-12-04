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
  if (scrollPosition > 500) {
    headerElement.classList.add("p-header-fix", "fading-in");
  } else if (scrollPosition > 300) {
    headerElement.classList.remove("p-header-fix", "fading-in");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLEVBQUU7SUFDakRtRSx5REFBTyxDQUFDLENBQUM7RUFDWDtFQUNBWixtRUFBWSxDQUFDLENBQUM7RUFDZGpDLDhEQUFnQixDQUFDLENBQUM7QUFDcEIsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbmtlbi1uYW1lLy4uL3NyYy9qcy9sYXlvdXQvaGVhZGVyLmpzIiwid2VicGFjazovL2Fua2VuLW5hbWUvLi4vc3JjL2pzL21vZHVsZXMvY29tbW9uLmpzIiwid2VicGFjazovL2Fua2VuLW5hbWUvLi4vc3JjL2pzL21vZHVsZXMvaGFtYnVyZ2VyLmpzIiwid2VicGFjazovL2Fua2VuLW5hbWUvLi4vc3JjL2pzL21vZHVsZXMvaW5uZXJMaW5rLmpzIiwid2VicGFjazovL2Fua2VuLW5hbWUvLi4vc3JjL2pzL21vZHVsZXMvbGlua05vT3BlbmVyLmpzIiwid2VicGFjazovL2Fua2VuLW5hbWUvLi4vc3JjL2pzL21vZHVsZXMvcGFnZXRvcC5qcyIsIndlYnBhY2s6Ly9hbmtlbi1uYW1lLy4uL3NyYy9qcy9tb2R1bGVzL3Njcm9sbEhlYWRlci5qcyIsIndlYnBhY2s6Ly9hbmtlbi1uYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Fua2VuLW5hbWUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYW5rZW4tbmFtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYW5rZW4tbmFtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Fua2VuLW5hbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hbmtlbi1uYW1lLy4uL3NyYy9qcy9idW5kbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGhlYWRlcigpIHtcbiAgaGFtYnVyZ2VyTWVudSgpXG4gIGhlYWRlck5hdmlnYXRpb24oKVxufVxuXG5leHBvcnQgY29uc3QgaGFtYnVyZ2VyTWVudSA9ICgpID0+IHtcbiAgXG59XG5cbmV4cG9ydCBjb25zdCBoZWFkZXJOYXZpZ2F0aW9uID0gKCkgPT4ge1xuICBcbn1cblxuXG5cbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgICBsZXQgdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgXG4gICAgLy8gVVJM5pyr5bC+44Gr5b+c44GY44Gf44Kv44Op44K544Gu5YiH44KK5pu/44GIXG4gICAgaWYgKHVybC5lbmRzV2l0aCgnI2NvbmZpcm1hdGlvbicpKSB7XG4gICAgICAgIC8vICNjb250YWN044Gu5aC05ZCI44CBbmF2aV8wMeOBi+OCieOCr+ODqeOCueOCkuWJiumZpOOBl+OAgW5hdmlfMDLjgavov73liqBcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlfMDEucC1jb250YWN0LWhlYWRfX2l0ZW0tY3VycmVudCcpLmNsYXNzTGlzdC5yZW1vdmUoJ3AtY29udGFjdC1oZWFkX19pdGVtLWN1cnJlbnQnKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm1hdGlvbicpLmNsYXNzTGlzdC5hZGQoJ3AtY29udGFjdC1oZWFkX19pdGVtLWN1cnJlbnQnKTtcbiAgICB9IGVsc2UgaWYgKHVybC5lbmRzV2l0aCgnI2NvbnRhY3RfZmluaXNoJykpIHtcbiAgICAgICAgLy8gI2NvbnRhY3RfZmluaXNo44Gu5aC05ZCI44CBbmF2aV8wMeOBi+OCieOCr+ODqeOCueOCkuWJiumZpOOBl+OAgW5hdmlfMDPjgavov73liqBcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlfMDEucC1jb250YWN0LWhlYWRfX2l0ZW0tY3VycmVudCcpLmNsYXNzTGlzdC5yZW1vdmUoJ3AtY29udGFjdC1oZWFkX19pdGVtLWN1cnJlbnQnKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbmQtY29tcGxldGVseScpLmNsYXNzTGlzdC5hZGQoJ3AtY29udGFjdC1oZWFkX19pdGVtLWN1cnJlbnQnKTtcbiAgICB9XG59KTtcbiIsIi8vIC5uYXZfdG9nZ2xlIOimgee0oOOCkuWPluW+l1xuY29uc3QgbmF2VG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXZfdG9nZ2xlXCIpO1xuLy8gLm5hdiDopoHntKDjgpLlj5blvpdcbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucC1zcC1tZW51XCIpO1xuY29uc3Qgc21vb3RoU2Nyb2xsTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWZePVwiI1wiXScpO1xuXG4vLyAubmF2X3RvZ2dsZSDopoHntKDjgavjgq/jg6rjg4Pjgq/jgqTjg5njg7Pjg4jjg6rjgrnjg4rjg7zjgpLoqK3lrppcbm5hdlRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAvLyAubmF2X3RvZ2dsZSDjgaggLm5hdiDjga7kuKHmlrnjgasgc2hvdyDjgq/jg6njgrnjgpLliIfjgormm7/jgYhcbiAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKTtcbiAgbmF2LmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ25vLXNjcm9sbCcpO1xufSk7XG5cbi8vIC5wLXNwLW1lbnVfX2l0ZW0g6KaB57Sg44KS5YWo44Gm5Y+W5b6XXG5jb25zdCBsaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnAtc3AtbWVudV9faXRlbVwiKTtcblxuLy8g5ZCEIC5wLXNwLW1lbnVfX2l0ZW0g6KaB57Sg44Gr44Kv44Oq44OD44Kv44Kk44OZ44Oz44OI44Oq44K544OK44O844KS6Kit5a6aXG5saXN0SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIOODoeODi+ODpeODvOOCkumWieOBmOOCi1xuICAgICAgICBuYXZUb2dnbGUuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCduby1zY3JvbGwnKTtcbiAgICB9KTtcbn0pO1xuXG4vLyDjgrnjg6Djg7zjgrrjgrnjgq/jg63jg7zjg6vjga7jgZ/jgoHjga7jgqTjg5njg7Pjg4jjg6rjgrnjg4rjg7zjgpLoqK3lrppcbnNtb290aFNjcm9sbExpbmtzLmZvckVhY2gobGluayA9PiB7XG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBocmVmID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaHJlZik7XG4gICAgICAgIHRhcmdldEVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnc3RhcnQnIH0pO1xuXG4gICAgICAgIC8vIOODoeODi+ODpeODvOOCkumWieOBmOOCi+ODreOCuOODg+OCr+OCguOBk+OBk+OBq+WQq+OCgeOCi1xuICAgICAgICBuYXZUb2dnbGUuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCduby1zY3JvbGwnKTtcbiAgICB9KTtcbn0pO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5uZXJMaW5rU3VtbWVyeSgpIHtcbiAgLy8g44Oa44O844K45YaF44Oq44Oz44KvXG4gIGlubmVyTGlua01haW4oJy5qcy1pbm5lci1saW5rJylcbn1cblxuZXhwb3J0IGNvbnN0IGlubmVyTGlua01haW4gPSAodHJpZ2dlckNsYXNzU3RyKSA9PiB7XG4gIGNvbnN0IHRyaWdnZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0cmlnZ2VyQ2xhc3NTdHIpXG5cbiAgdHJpZ2dlcnMuZm9yRWFjaCgodHJpZ2dlcikgPT4ge1xuICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBpbm5lckxpbmspXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBpbm5lckxpbmsgPSAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICBpbm5lckxpbmtXaXRoSGFzaChldmVudD8uY3VycmVudFRhcmdldD8uaGFzaCA/PyBcImh0bWxcIilcbn1cblxuZXhwb3J0IGNvbnN0IGlubmVyTGlua1dpdGhIYXNoID0gKGhhc2gpID0+IHtcbiAgY29uc3QgaGVhZGVyID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sLWhlYWRlcicpXG4gIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChoYXNoKVswXVxuICBjb25zdCBoZWFkZXJIZWlnaHQgICA9IGhlYWRlci5jbGllbnRIZWlnaHRcbiAgY29uc3QgdGFyZ2V0UG9zaXRpb24gPSBlbC5vZmZzZXRUb3AgLSBoZWFkZXJIZWlnaHRcbiAgY29uc3Qgc3RhcnRQb3NpdGlvbiA9IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsVG9wXG4gIGxldCBjdXJyZW50UG9zaXRpb24gPSBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50LnNjcm9sbFRvcFxuXG4gIGNvbnN0IGdvRG93biA9IGN1cnJlbnRQb3NpdGlvbiA8IHRhcmdldFBvc2l0aW9uXG4gIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IG1wID0gbW92aW5nUG9zaXRpb24oc3RhcnRQb3NpdGlvbiwgdGFyZ2V0UG9zaXRpb24sIGN1cnJlbnRQb3NpdGlvbilcbiAgICBjdXJyZW50UG9zaXRpb24gKz0gZ29Eb3duID8gbXAgKyA1IDogLW1wIC0gNVxuICAgIGlmIChnb0Rvd24gJiYgY3VycmVudFBvc2l0aW9uID4gdGFyZ2V0UG9zaXRpb25cbiAgICAgIHx8ICFnb0Rvd24gJiYgY3VycmVudFBvc2l0aW9uIDwgdGFyZ2V0UG9zaXRpb24pIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXG4gICAgICBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50LnNjcm9sbFRvcCA9IHRhcmdldFBvc2l0aW9uXG4gICAgfVxuICAgIGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsVG9wID0gY3VycmVudFBvc2l0aW9uXG4gIH0sIDEwKVxufVxuXG5jb25zdCBtb3ZpbmdQb3NpdGlvbiA9IChzdGFydCwgdGFyZ2V0LCBjdXJyZW50KSA9PiB7XG4gIGNvbnN0IHNpbiA9IE1hdGguc2luKChjdXJyZW50IC0gdGFyZ2V0KSAvIChzdGFydCAtIHRhcmdldCkgKiBNYXRoLlBJKVxuICByZXR1cm4gc2luICogMjAwLy9zcGVlZFxufSIsImV4cG9ydCBmdW5jdGlvbiBsaW5rTm9PcGVuZXIoKSB7XG4gIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYVt0YXJnZXQ9XCJfYmxhbmtcIl0nKVxuICBsaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgIGxpbmsuc2V0QXR0cmlidXRlKCdyZWwnLCAnbm9vcGVuZXIgbm9yZWZlcnJlcicpXG4gIH0pXG59Iiwid2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuICBpZiAoZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPiAxMDAgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA+IDEwMClcbiAge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZXRvcFwiKS5zdHlsZS5vcGFjaXR5ID0gXCIwLjdcIjtcbiAgfSBlbHNlXG4gIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2V0b3BcIikuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuXG4gIH0gIFxufTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdldG9wXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgd2luZG93LnNjcm9sbFRvKHt0b3A6IDAsIGJlaGF2aW9yOiAnc21vb3RoJ30pO1xufSk7IiwiY29uc3QgaGVhZGVyRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcblxuLy/jgrnjgq/jg63jg7zjg6vjgqTjg5njg7Pjg4jjg6rjgrnjg4rjg7zov73liqBcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGZ1bmN0aW9uICgpXG57XG5cbiAgLy8gd2luZG9344Gu44K544Kv44Ot44O844Or5L2N572u44KS5Y+W5b6XXG4gIGNvbnN0IHNjcm9sbFBvc2l0aW9uID0gdGhpcy53aW5kb3cucGFnZVlPZmZzZXQ7XG4gIFxuICAvLyBoZWFkZXJFbGVtZW5044GM54m55a6a44Gu5L2N572u44Gr6YGU44GX44Gf44GL44OB44Kn44OD44KvXG4gIGlmIChzY3JvbGxQb3NpdGlvbiA+IDUwMClcbiAge1xuICAgICAgaGVhZGVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicC1oZWFkZXItZml4XCIsIFwiZmFkaW5nLWluXCIpO1xuICB9XG4gIGVsc2UgaWYgKHNjcm9sbFBvc2l0aW9uID4gMzAwKVxuICB7XG4gICAgaGVhZGVyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwicC1oZWFkZXItZml4XCIsIFwiZmFkaW5nLWluXCIpO1xuXG4gIH1cblxufSk7XG5cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy9zY3JpcHRzXG5pbXBvcnQge2hlYWRlcn0gZnJvbSAnLi9sYXlvdXQvaGVhZGVyJ1xuaW1wb3J0IHsgcGFnZXRvcCB9IGZyb20gJy4vbW9kdWxlcy9wYWdldG9wJ1xuaW1wb3J0IHsgc2Nyb2xsSGVhZGVyIH0gZnJvbSAnLi9tb2R1bGVzL3Njcm9sbEhlYWRlcidcbmltcG9ydCB7IGNvbW1vbiB9IGZyb20gJy4vbW9kdWxlcy9jb21tb24nXG5pbXBvcnQgeyBoYW1idXJnZXIgfSBmcm9tICcuL21vZHVsZXMvaGFtYnVyZ2VyJ1xuaW1wb3J0IHtsaW5rTm9PcGVuZXJ9IGZyb20gJy4vbW9kdWxlcy9saW5rTm9PcGVuZXInXG5pbXBvcnQgaW5uZXJMaW5rU3VtbWVyeSBmcm9tICcuL21vZHVsZXMvaW5uZXJMaW5rJ1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgaGVhZGVyKCk7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtcGFnZXRvcCcpICE9IG51bGwpIHtcbiAgICBwYWdldG9wKCk7XG4gIH1cbiAgbGlua05vT3BlbmVyKCk7XG4gIGlubmVyTGlua1N1bW1lcnkoKTtcbn0pIl0sIm5hbWVzIjpbImhlYWRlciIsImhhbWJ1cmdlck1lbnUiLCJoZWFkZXJOYXZpZ2F0aW9uIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwidXJsIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZW5kc1dpdGgiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGQiLCJuYXZUb2dnbGUiLCJuYXYiLCJzbW9vdGhTY3JvbGxMaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0b2dnbGUiLCJib2R5IiwibGlzdEl0ZW1zIiwiZm9yRWFjaCIsIml0ZW0iLCJsaW5rIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZ2V0QXR0cmlidXRlIiwidGFyZ2V0RWxlbWVudCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsImlubmVyTGlua1N1bW1lcnkiLCJpbm5lckxpbmtNYWluIiwidHJpZ2dlckNsYXNzU3RyIiwidHJpZ2dlcnMiLCJ0cmlnZ2VyIiwiaW5uZXJMaW5rIiwiZXZlbnQiLCJfZXZlbnQkY3VycmVudFRhcmdldCQiLCJfZXZlbnQkY3VycmVudFRhcmdldCIsImlubmVyTGlua1dpdGhIYXNoIiwiY3VycmVudFRhcmdldCIsImhhc2giLCJlbCIsImhlYWRlckhlaWdodCIsImNsaWVudEhlaWdodCIsInRhcmdldFBvc2l0aW9uIiwib2Zmc2V0VG9wIiwic3RhcnRQb3NpdGlvbiIsInNjcm9sbGluZ0VsZW1lbnQiLCJzY3JvbGxUb3AiLCJjdXJyZW50UG9zaXRpb24iLCJnb0Rvd24iLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwibXAiLCJtb3ZpbmdQb3NpdGlvbiIsImNsZWFySW50ZXJ2YWwiLCJzdGFydCIsInRhcmdldCIsImN1cnJlbnQiLCJzaW4iLCJNYXRoIiwiUEkiLCJsaW5rTm9PcGVuZXIiLCJsaW5rcyIsInNldEF0dHJpYnV0ZSIsIm9uc2Nyb2xsIiwiZG9jdW1lbnRFbGVtZW50Iiwic3R5bGUiLCJvcGFjaXR5Iiwic2Nyb2xsVG8iLCJ0b3AiLCJoZWFkZXJFbGVtZW50Iiwic2Nyb2xsUG9zaXRpb24iLCJwYWdlWU9mZnNldCIsInBhZ2V0b3AiLCJzY3JvbGxIZWFkZXIiLCJjb21tb24iLCJoYW1idXJnZXIiXSwic291cmNlUm9vdCI6IiJ9