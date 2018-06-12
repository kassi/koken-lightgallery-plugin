/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "storage/plugins/lightgallery/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/initialize.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/initialize.js":
/*!***************************!*\
  !*** ./app/initialize.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./app/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_0__);
__webpack_require__(/*! lightgallery */ "./node_modules/lightgallery/dist/js/lightgallery.js");
__webpack_require__(/*! lg-fullscreen */ "./node_modules/lg-fullscreen/dist/lg-fullscreen.js");
__webpack_require__(/*! lg-thumbnail */ "./node_modules/lg-thumbnail/dist/lg-thumbnail.js");
__webpack_require__(/*! lg-zoom */ "./node_modules/lg-zoom/dist/lg-zoom.js");


var LightGallery = (function () {
  var images = [];

  var addImage = function (data) {
    images[data['index']] = data;
  };

  var open = function (elem, index) {
    $(elem).lightGallery({
      hideBarsDelay: 3000,
      index: index,
      // controls: false,
      // appendSubHtmlTo: '.lg-item',
      dynamic: true,
      dynamicEl: images,
      mode: 'lg-fade',
      download: true,
      // share: false,
      // hash: false,
      // pager: false,
      // selector: 'a',
      thumbnail: true,
      toggleThumb: true,
      showThumbByDefault: false,
      zoom: true,
      actualSize: false
    });
  };

  return {
    addImage: addImage,
    open: open
  };
})();
window.LightGallery = LightGallery;

document.addEventListener('DOMContentLoaded', function () {
  function clickEvent (event) {
    event.preventDefault();
    var index = parseInt($(event.target).attr('data-index'), 10);
    LightGallery.open(event.target, index);
  }
  $(function () {
    $('#grid a').on('click', clickEvent);

    $(window).on('k-infinite-loaded', function (event, html) {
      $('#grid a').off('click', clickEvent);
      $('#grid a').on('click', clickEvent);
    });
  });
});


/***/ }),

/***/ "./app/styles.css":
/*!************************!*\
  !*** ./app/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader!./styles.css */ "./node_modules/css-loader/index.js!./app/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/css-loader/index.js!./app/styles.css":
/*!**************************************************!*\
  !*** ./node_modules/css-loader!./app/styles.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../node_modules/css-loader!lightgallery/dist/css/lightgallery.min.css */ "./node_modules/css-loader/index.js!./node_modules/lightgallery/dist/css/lightgallery.min.css"), "");
exports.i(__webpack_require__(/*! -!../node_modules/css-loader!lightgallery/dist/css/lg-transitions.min.css */ "./node_modules/css-loader/index.js!./node_modules/lightgallery/dist/css/lg-transitions.min.css"), "");

// module
exports.push([module.i, "\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/lightgallery/dist/css/lg-transitions.min.css":
/*!*********************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/lightgallery/dist/css/lg-transitions.min.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".lg-css3.lg-zoom-in .lg-item{opacity:0}.lg-css3.lg-zoom-in .lg-item.lg-next-slide,.lg-css3.lg-zoom-in .lg-item.lg-prev-slide{-webkit-transform:scale3d(1.3,1.3,1.3);transform:scale3d(1.3,1.3,1.3)}.lg-css3.lg-zoom-in .lg-item.lg-current{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);opacity:1}.lg-css3.lg-zoom-in .lg-item.lg-current,.lg-css3.lg-zoom-in .lg-item.lg-next-slide,.lg-css3.lg-zoom-in .lg-item.lg-prev-slide{-webkit-transition:-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;-moz-transition:-moz-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;-o-transition:-o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;transition:transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s}.lg-css3.lg-zoom-in-big .lg-item{opacity:0}.lg-css3.lg-zoom-in-big .lg-item.lg-next-slide,.lg-css3.lg-zoom-in-big .lg-item.lg-prev-slide{-webkit-transform:scale3d(2,2,2);transform:scale3d(2,2,2)}.lg-css3.lg-zoom-in-big .lg-item.lg-current{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);opacity:1}.lg-css3.lg-zoom-in-big .lg-item.lg-current,.lg-css3.lg-zoom-in-big .lg-item.lg-next-slide,.lg-css3.lg-zoom-in-big .lg-item.lg-prev-slide{-webkit-transition:-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;-moz-transition:-moz-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;-o-transition:-o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;transition:transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s}.lg-css3.lg-zoom-out .lg-item{opacity:0}.lg-css3.lg-zoom-out .lg-item.lg-next-slide,.lg-css3.lg-zoom-out .lg-item.lg-prev-slide{-webkit-transform:scale3d(.7,.7,.7);transform:scale3d(.7,.7,.7)}.lg-css3.lg-zoom-out .lg-item.lg-current{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);opacity:1}.lg-css3.lg-zoom-out .lg-item.lg-current,.lg-css3.lg-zoom-out .lg-item.lg-next-slide,.lg-css3.lg-zoom-out .lg-item.lg-prev-slide{-webkit-transition:-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;-moz-transition:-moz-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;-o-transition:-o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;transition:transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s}.lg-css3.lg-zoom-out-big .lg-item{opacity:0}.lg-css3.lg-zoom-out-big .lg-item.lg-next-slide,.lg-css3.lg-zoom-out-big .lg-item.lg-prev-slide{-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0)}.lg-css3.lg-zoom-out-big .lg-item.lg-current{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);opacity:1}.lg-css3.lg-zoom-out-big .lg-item.lg-current,.lg-css3.lg-zoom-out-big .lg-item.lg-next-slide,.lg-css3.lg-zoom-out-big .lg-item.lg-prev-slide{-webkit-transition:-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;-moz-transition:-moz-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;-o-transition:-o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;transition:transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s}.lg-css3.lg-zoom-out-in .lg-item{opacity:0}.lg-css3.lg-zoom-out-in .lg-item.lg-prev-slide{-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0)}.lg-css3.lg-zoom-out-in .lg-item.lg-next-slide{-webkit-transform:scale3d(2,2,2);transform:scale3d(2,2,2)}.lg-css3.lg-zoom-out-in .lg-item.lg-current{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);opacity:1}.lg-css3.lg-zoom-out-in .lg-item.lg-current,.lg-css3.lg-zoom-out-in .lg-item.lg-next-slide,.lg-css3.lg-zoom-out-in .lg-item.lg-prev-slide{-webkit-transition:-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;-moz-transition:-moz-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;-o-transition:-o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;transition:transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s}.lg-css3.lg-zoom-in-out .lg-item{opacity:0}.lg-css3.lg-zoom-in-out .lg-item.lg-prev-slide{-webkit-transform:scale3d(2,2,2);transform:scale3d(2,2,2)}.lg-css3.lg-zoom-in-out .lg-item.lg-next-slide{-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0)}.lg-css3.lg-zoom-in-out .lg-item.lg-current{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);opacity:1}.lg-css3.lg-zoom-in-out .lg-item.lg-current,.lg-css3.lg-zoom-in-out .lg-item.lg-next-slide,.lg-css3.lg-zoom-in-out .lg-item.lg-prev-slide{-webkit-transition:-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;-moz-transition:-moz-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;-o-transition:-o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;transition:transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s}.lg-css3.lg-soft-zoom .lg-item{opacity:0}.lg-css3.lg-soft-zoom .lg-item.lg-prev-slide{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}.lg-css3.lg-soft-zoom .lg-item.lg-next-slide{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}.lg-css3.lg-soft-zoom .lg-item.lg-current{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);opacity:1}.lg-css3.lg-soft-zoom .lg-item.lg-current,.lg-css3.lg-soft-zoom .lg-item.lg-next-slide,.lg-css3.lg-soft-zoom .lg-item.lg-prev-slide{-webkit-transition:-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;-moz-transition:-moz-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;-o-transition:-o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;transition:transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s}.lg-css3.lg-scale-up .lg-item{opacity:0}.lg-css3.lg-scale-up .lg-item.lg-next-slide,.lg-css3.lg-scale-up .lg-item.lg-prev-slide{-moz-transform:scale3d(.8,.8,.8) translate3d(0,10%,0);-o-transform:scale3d(.8,.8,.8) translate3d(0,10%,0);-ms-transform:scale3d(.8,.8,.8) translate3d(0,10%,0);-webkit-transform:scale3d(.8,.8,.8) translate3d(0,10%,0);transform:scale3d(.8,.8,.8) translate3d(0,10%,0)}.lg-css3.lg-scale-up .lg-item.lg-current{-moz-transform:scale3d(1,1,1) translate3d(0,0,0);-o-transform:scale3d(1,1,1) translate3d(0,0,0);-ms-transform:scale3d(1,1,1) translate3d(0,0,0);-webkit-transform:scale3d(1,1,1) translate3d(0,0,0);transform:scale3d(1,1,1) translate3d(0,0,0);opacity:1}.lg-css3.lg-scale-up .lg-item.lg-current,.lg-css3.lg-scale-up .lg-item.lg-next-slide,.lg-css3.lg-scale-up .lg-item.lg-prev-slide{-webkit-transition:-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;-moz-transition:-moz-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;-o-transition:-o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;transition:transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s}.lg-css3.lg-slide-circular .lg-item{opacity:0}.lg-css3.lg-slide-circular .lg-item.lg-prev-slide{-moz-transform:scale3d(0,0,0) translate3d(-100%,0,0);-o-transform:scale3d(0,0,0) translate3d(-100%,0,0);-ms-transform:scale3d(0,0,0) translate3d(-100%,0,0);-webkit-transform:scale3d(0,0,0) translate3d(-100%,0,0);transform:scale3d(0,0,0) translate3d(-100%,0,0)}.lg-css3.lg-slide-circular .lg-item.lg-next-slide{-moz-transform:scale3d(0,0,0) translate3d(100%,0,0);-o-transform:scale3d(0,0,0) translate3d(100%,0,0);-ms-transform:scale3d(0,0,0) translate3d(100%,0,0);-webkit-transform:scale3d(0,0,0) translate3d(100%,0,0);transform:scale3d(0,0,0) translate3d(100%,0,0)}.lg-css3.lg-slide-circular .lg-item.lg-current{-moz-transform:scale3d(1,1,1) translate3d(0,0,0);-o-transform:scale3d(1,1,1) translate3d(0,0,0);-ms-transform:scale3d(1,1,1) translate3d(0,0,0);-webkit-transform:scale3d(1,1,1) translate3d(0,0,0);transform:scale3d(1,1,1) translate3d(0,0,0);opacity:1}.lg-css3.lg-slide-circular .lg-item.lg-current,.lg-css3.lg-slide-circular .lg-item.lg-next-slide,.lg-css3.lg-slide-circular .lg-item.lg-prev-slide{-webkit-transition:-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;-moz-transition:-moz-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;-o-transition:-o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;transition:transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s}.lg-css3.lg-slide-circular-up .lg-item{opacity:0}.lg-css3.lg-slide-circular-up .lg-item.lg-prev-slide{-moz-transform:scale3d(0,0,0) translate3d(-100%,-100%,0);-o-transform:scale3d(0,0,0) translate3d(-100%,-100%,0);-ms-transform:scale3d(0,0,0) translate3d(-100%,-100%,0);-webkit-transform:scale3d(0,0,0) translate3d(-100%,-100%,0);transform:scale3d(0,0,0) translate3d(-100%,-100%,0)}.lg-css3.lg-slide-circular-up .lg-item.lg-next-slide{-moz-transform:scale3d(0,0,0) translate3d(100%,-100%,0);-o-transform:scale3d(0,0,0) translate3d(100%,-100%,0);-ms-transform:scale3d(0,0,0) translate3d(100%,-100%,0);-webkit-transform:scale3d(0,0,0) translate3d(100%,-100%,0);transform:scale3d(0,0,0) translate3d(100%,-100%,0)}.lg-css3.lg-slide-circular-up .lg-item.lg-current{-moz-transform:scale3d(1,1,1) translate3d(0,0,0);-o-transform:scale3d(1,1,1) translate3d(0,0,0);-ms-transform:scale3d(1,1,1) translate3d(0,0,0);-webkit-transform:scale3d(1,1,1) translate3d(0,0,0);transform:scale3d(1,1,1) translate3d(0,0,0);opacity:1}.lg-css3.lg-slide-circular-up .lg-item.lg-current,.lg-css3.lg-slide-circular-up .lg-item.lg-next-slide,.lg-css3.lg-slide-circular-up .lg-item.lg-prev-slide{-webkit-transition:-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;-moz-transition:-moz-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;-o-transition:-o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;transition:transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s}.lg-css3.lg-slide-circular-down .lg-item{opacity:0}.lg-css3.lg-slide-circular-down .lg-item.lg-prev-slide{-moz-transform:scale3d(0,0,0) translate3d(-100%,100%,0);-o-transform:scale3d(0,0,0) translate3d(-100%,100%,0);-ms-transform:scale3d(0,0,0) translate3d(-100%,100%,0);-webkit-transform:scale3d(0,0,0) translate3d(-100%,100%,0);transform:scale3d(0,0,0) translate3d(-100%,100%,0)}.lg-css3.lg-slide-circular-down .lg-item.lg-next-slide{-moz-transform:scale3d(0,0,0) translate3d(100%,100%,0);-o-transform:scale3d(0,0,0) translate3d(100%,100%,0);-ms-transform:scale3d(0,0,0) translate3d(100%,100%,0);-webkit-transform:scale3d(0,0,0) translate3d(100%,100%,0);transform:scale3d(0,0,0) translate3d(100%,100%,0)}.lg-css3.lg-slide-circular-down .lg-item.lg-current{-moz-transform:scale3d(1,1,1) translate3d(0,0,0);-o-transform:scale3d(1,1,1) translate3d(0,0,0);-ms-transform:scale3d(1,1,1) translate3d(0,0,0);-webkit-transform:scale3d(1,1,1) translate3d(0,0,0);transform:scale3d(1,1,1) translate3d(0,0,0);opacity:1}.lg-css3.lg-slide-circular-down .lg-item.lg-current,.lg-css3.lg-slide-circular-down .lg-item.lg-next-slide,.lg-css3.lg-slide-circular-down .lg-item.lg-prev-slide{-webkit-transition:-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;-moz-transition:-moz-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;-o-transition:-o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;transition:transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s}.lg-css3.lg-slide-circular-vertical .lg-item{opacity:0}.lg-css3.lg-slide-circular-vertical .lg-item.lg-prev-slide{-moz-transform:scale3d(0,0,0) translate3d(0,-100%,0);-o-transform:scale3d(0,0,0) translate3d(0,-100%,0);-ms-transform:scale3d(0,0,0) translate3d(0,-100%,0);-webkit-transform:scale3d(0,0,0) translate3d(0,-100%,0);transform:scale3d(0,0,0) translate3d(0,-100%,0)}.lg-css3.lg-slide-circular-vertical .lg-item.lg-next-slide{-moz-transform:scale3d(0,0,0) translate3d(0,100%,0);-o-transform:scale3d(0,0,0) translate3d(0,100%,0);-ms-transform:scale3d(0,0,0) translate3d(0,100%,0);-webkit-transform:scale3d(0,0,0) translate3d(0,100%,0);transform:scale3d(0,0,0) translate3d(0,100%,0)}.lg-css3.lg-slide-circular-vertical .lg-item.lg-current{-moz-transform:scale3d(1,1,1) translate3d(0,0,0);-o-transform:scale3d(1,1,1) translate3d(0,0,0);-ms-transform:scale3d(1,1,1) translate3d(0,0,0);-webkit-transform:scale3d(1,1,1) translate3d(0,0,0);transform:scale3d(1,1,1) translate3d(0,0,0);opacity:1}.lg-css3.lg-slide-circular-vertical .lg-item.lg-current,.lg-css3.lg-slide-circular-vertical .lg-item.lg-next-slide,.lg-css3.lg-slide-circular-vertical .lg-item.lg-prev-slide{-webkit-transition:-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;-moz-transition:-moz-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;-o-transition:-o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;transition:transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s}.lg-css3.lg-slide-circular-vertical-left .lg-item{opacity:0}.lg-css3.lg-slide-circular-vertical-left .lg-item.lg-prev-slide{-moz-transform:scale3d(0,0,0) translate3d(-100%,-100%,0);-o-transform:scale3d(0,0,0) translate3d(-100%,-100%,0);-ms-transform:scale3d(0,0,0) translate3d(-100%,-100%,0);-webkit-transform:scale3d(0,0,0) translate3d(-100%,-100%,0);transform:scale3d(0,0,0) translate3d(-100%,-100%,0)}.lg-css3.lg-slide-circular-vertical-left .lg-item.lg-next-slide{-moz-transform:scale3d(0,0,0) translate3d(-100%,100%,0);-o-transform:scale3d(0,0,0) translate3d(-100%,100%,0);-ms-transform:scale3d(0,0,0) translate3d(-100%,100%,0);-webkit-transform:scale3d(0,0,0) translate3d(-100%,100%,0);transform:scale3d(0,0,0) translate3d(-100%,100%,0)}.lg-css3.lg-slide-circular-vertical-left .lg-item.lg-current{-moz-transform:scale3d(1,1,1) translate3d(0,0,0);-o-transform:scale3d(1,1,1) translate3d(0,0,0);-ms-transform:scale3d(1,1,1) translate3d(0,0,0);-webkit-transform:scale3d(1,1,1) translate3d(0,0,0);transform:scale3d(1,1,1) translate3d(0,0,0);opacity:1}.lg-css3.lg-slide-circular-vertical-left .lg-item.lg-current,.lg-css3.lg-slide-circular-vertical-left .lg-item.lg-next-slide,.lg-css3.lg-slide-circular-vertical-left .lg-item.lg-prev-slide{-webkit-transition:-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;-moz-transition:-moz-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;-o-transition:-o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;transition:transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s}.lg-css3.lg-slide-circular-vertical-down .lg-item{opacity:0}.lg-css3.lg-slide-circular-vertical-down .lg-item.lg-prev-slide{-moz-transform:scale3d(0,0,0) translate3d(100%,-100%,0);-o-transform:scale3d(0,0,0) translate3d(100%,-100%,0);-ms-transform:scale3d(0,0,0) translate3d(100%,-100%,0);-webkit-transform:scale3d(0,0,0) translate3d(100%,-100%,0);transform:scale3d(0,0,0) translate3d(100%,-100%,0)}.lg-css3.lg-slide-circular-vertical-down .lg-item.lg-next-slide{-moz-transform:scale3d(0,0,0) translate3d(100%,100%,0);-o-transform:scale3d(0,0,0) translate3d(100%,100%,0);-ms-transform:scale3d(0,0,0) translate3d(100%,100%,0);-webkit-transform:scale3d(0,0,0) translate3d(100%,100%,0);transform:scale3d(0,0,0) translate3d(100%,100%,0)}.lg-css3.lg-slide-circular-vertical-down .lg-item.lg-current{-moz-transform:scale3d(1,1,1) translate3d(0,0,0);-o-transform:scale3d(1,1,1) translate3d(0,0,0);-ms-transform:scale3d(1,1,1) translate3d(0,0,0);-webkit-transform:scale3d(1,1,1) translate3d(0,0,0);transform:scale3d(1,1,1) translate3d(0,0,0);opacity:1}.lg-css3.lg-slide-circular-vertical-down .lg-item.lg-current,.lg-css3.lg-slide-circular-vertical-down .lg-item.lg-next-slide,.lg-css3.lg-slide-circular-vertical-down .lg-item.lg-prev-slide{-webkit-transition:-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;-moz-transition:-moz-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;-o-transition:-o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s;transition:transform 1s cubic-bezier(0,0,.25,1) 0s,opacity 1s ease 0s}.lg-css3.lg-slide-vertical .lg-item{opacity:0}.lg-css3.lg-slide-vertical .lg-item.lg-prev-slide{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}.lg-css3.lg-slide-vertical .lg-item.lg-next-slide{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.lg-css3.lg-slide-vertical .lg-item.lg-current{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}.lg-css3.lg-slide-vertical .lg-item.lg-current,.lg-css3.lg-slide-vertical .lg-item.lg-next-slide,.lg-css3.lg-slide-vertical .lg-item.lg-prev-slide{-webkit-transition:-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;-moz-transition:-moz-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;-o-transition:-o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;transition:transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s}.lg-css3.lg-slide-vertical-growth .lg-item{opacity:0}.lg-css3.lg-slide-vertical-growth .lg-item.lg-prev-slide{-moz-transform:scale3d(.5,.5,.5) translate3d(0,-150%,0);-o-transform:scale3d(.5,.5,.5) translate3d(0,-150%,0);-ms-transform:scale3d(.5,.5,.5) translate3d(0,-150%,0);-webkit-transform:scale3d(.5,.5,.5) translate3d(0,-150%,0);transform:scale3d(.5,.5,.5) translate3d(0,-150%,0)}.lg-css3.lg-slide-vertical-growth .lg-item.lg-next-slide{-moz-transform:scale3d(.5,.5,.5) translate3d(0,150%,0);-o-transform:scale3d(.5,.5,.5) translate3d(0,150%,0);-ms-transform:scale3d(.5,.5,.5) translate3d(0,150%,0);-webkit-transform:scale3d(.5,.5,.5) translate3d(0,150%,0);transform:scale3d(.5,.5,.5) translate3d(0,150%,0)}.lg-css3.lg-slide-vertical-growth .lg-item.lg-current{-moz-transform:scale3d(1,1,1) translate3d(0,0,0);-o-transform:scale3d(1,1,1) translate3d(0,0,0);-ms-transform:scale3d(1,1,1) translate3d(0,0,0);-webkit-transform:scale3d(1,1,1) translate3d(0,0,0);transform:scale3d(1,1,1) translate3d(0,0,0);opacity:1}.lg-css3.lg-slide-vertical-growth .lg-item.lg-current,.lg-css3.lg-slide-vertical-growth .lg-item.lg-next-slide,.lg-css3.lg-slide-vertical-growth .lg-item.lg-prev-slide{-webkit-transition:-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;-moz-transition:-moz-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;-o-transition:-o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;transition:transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s}.lg-css3.lg-slide-skew-only .lg-item{opacity:0}.lg-css3.lg-slide-skew-only .lg-item.lg-next-slide,.lg-css3.lg-slide-skew-only .lg-item.lg-prev-slide{-moz-transform:skew(10deg,0deg);-o-transform:skew(10deg,0deg);-ms-transform:skew(10deg,0deg);-webkit-transform:skew(10deg,0deg);transform:skew(10deg,0deg)}.lg-css3.lg-slide-skew-only .lg-item.lg-current{-moz-transform:skew(0deg,0deg);-o-transform:skew(0deg,0deg);-ms-transform:skew(0deg,0deg);-webkit-transform:skew(0deg,0deg);transform:skew(0deg,0deg);opacity:1}.lg-css3.lg-slide-skew-only .lg-item.lg-current,.lg-css3.lg-slide-skew-only .lg-item.lg-next-slide,.lg-css3.lg-slide-skew-only .lg-item.lg-prev-slide{-webkit-transition:-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;-moz-transition:-moz-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;-o-transition:-o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;transition:transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s}.lg-css3.lg-slide-skew-only-rev .lg-item{opacity:0}.lg-css3.lg-slide-skew-only-rev .lg-item.lg-next-slide,.lg-css3.lg-slide-skew-only-rev .lg-item.lg-prev-slide{-moz-transform:skew(-10deg,0deg);-o-transform:skew(-10deg,0deg);-ms-transform:skew(-10deg,0deg);-webkit-transform:skew(-10deg,0deg);transform:skew(-10deg,0deg)}.lg-css3.lg-slide-skew-only-rev .lg-item.lg-current{-moz-transform:skew(0deg,0deg);-o-transform:skew(0deg,0deg);-ms-transform:skew(0deg,0deg);-webkit-transform:skew(0deg,0deg);transform:skew(0deg,0deg);opacity:1}.lg-css3.lg-slide-skew-only-rev .lg-item.lg-current,.lg-css3.lg-slide-skew-only-rev .lg-item.lg-next-slide,.lg-css3.lg-slide-skew-only-rev .lg-item.lg-prev-slide{-webkit-transition:-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;-moz-transition:-moz-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;-o-transition:-o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;transition:transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s}.lg-css3.lg-slide-skew-only-y .lg-item{opacity:0}.lg-css3.lg-slide-skew-only-y .lg-item.lg-next-slide,.lg-css3.lg-slide-skew-only-y .lg-item.lg-prev-slide{-moz-transform:skew(0deg,10deg);-o-transform:skew(0deg,10deg);-ms-transform:skew(0deg,10deg);-webkit-transform:skew(0deg,10deg);transform:skew(0deg,10deg)}.lg-css3.lg-slide-skew-only-y .lg-item.lg-current{-moz-transform:skew(0deg,0deg);-o-transform:skew(0deg,0deg);-ms-transform:skew(0deg,0deg);-webkit-transform:skew(0deg,0deg);transform:skew(0deg,0deg);opacity:1}.lg-css3.lg-slide-skew-only-y .lg-item.lg-current,.lg-css3.lg-slide-skew-only-y .lg-item.lg-next-slide,.lg-css3.lg-slide-skew-only-y .lg-item.lg-prev-slide{-webkit-transition:-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;-moz-transition:-moz-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;-o-transition:-o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;transition:transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s}.lg-css3.lg-slide-skew-only-y-rev .lg-item{opacity:0}.lg-css3.lg-slide-skew-only-y-rev .lg-item.lg-next-slide,.lg-css3.lg-slide-skew-only-y-rev .lg-item.lg-prev-slide{-moz-transform:skew(0deg,-10deg);-o-transform:skew(0deg,-10deg);-ms-transform:skew(0deg,-10deg);-webkit-transform:skew(0deg,-10deg);transform:skew(0deg,-10deg)}.lg-css3.lg-slide-skew-only-y-rev .lg-item.lg-current{-moz-transform:skew(0deg,0deg);-o-transform:skew(0deg,0deg);-ms-transform:skew(0deg,0deg);-webkit-transform:skew(0deg,0deg);transform:skew(0deg,0deg);opacity:1}.lg-css3.lg-slide-skew-only-y-rev .lg-item.lg-current,.lg-css3.lg-slide-skew-only-y-rev .lg-item.lg-next-slide,.lg-css3.lg-slide-skew-only-y-rev .lg-item.lg-prev-slide{-webkit-transition:-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;-moz-transition:-moz-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;-o-transition:-o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;transition:transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s}.lg-css3.lg-slide-skew .lg-item{opacity:0}.lg-css3.lg-slide-skew .lg-item.lg-prev-slide{-moz-transform:skew(20deg,0deg) translate3d(-100%,0,0);-o-transform:skew(20deg,0deg) translate3d(-100%,0,0);-ms-transform:skew(20deg,0deg) translate3d(-100%,0,0);-webkit-transform:skew(20deg,0deg) translate3d(-100%,0,0);transform:skew(20deg,0deg) translate3d(-100%,0,0)}.lg-css3.lg-slide-skew .lg-item.lg-next-slide{-moz-transform:skew(20deg,0deg) translate3d(100%,0,0);-o-transform:skew(20deg,0deg) translate3d(100%,0,0);-ms-transform:skew(20deg,0deg) translate3d(100%,0,0);-webkit-transform:skew(20deg,0deg) translate3d(100%,0,0);transform:skew(20deg,0deg) translate3d(100%,0,0)}.lg-css3.lg-slide-skew .lg-item.lg-current{-moz-transform:skew(0deg,0deg) translate3d(0,0,0);-o-transform:skew(0deg,0deg) translate3d(0,0,0);-ms-transform:skew(0deg,0deg) translate3d(0,0,0);-webkit-transform:skew(0deg,0deg) translate3d(0,0,0);transform:skew(0deg,0deg) translate3d(0,0,0);opacity:1}.lg-css3.lg-slide-skew .lg-item.lg-current,.lg-css3.lg-slide-skew .lg-item.lg-next-slide,.lg-css3.lg-slide-skew .lg-item.lg-prev-slide{-webkit-transition:-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;-moz-transition:-moz-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;-o-transition:-o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;transition:transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s}.lg-css3.lg-slide-skew-rev .lg-item{opacity:0}.lg-css3.lg-slide-skew-rev .lg-item.lg-prev-slide{-moz-transform:skew(-20deg,0deg) translate3d(-100%,0,0);-o-transform:skew(-20deg,0deg) translate3d(-100%,0,0);-ms-transform:skew(-20deg,0deg) translate3d(-100%,0,0);-webkit-transform:skew(-20deg,0deg) translate3d(-100%,0,0);transform:skew(-20deg,0deg) translate3d(-100%,0,0)}.lg-css3.lg-slide-skew-rev .lg-item.lg-next-slide{-moz-transform:skew(-20deg,0deg) translate3d(100%,0,0);-o-transform:skew(-20deg,0deg) translate3d(100%,0,0);-ms-transform:skew(-20deg,0deg) translate3d(100%,0,0);-webkit-transform:skew(-20deg,0deg) translate3d(100%,0,0);transform:skew(-20deg,0deg) translate3d(100%,0,0)}.lg-css3.lg-slide-skew-rev .lg-item.lg-current{-moz-transform:skew(0deg,0deg) translate3d(0,0,0);-o-transform:skew(0deg,0deg) translate3d(0,0,0);-ms-transform:skew(0deg,0deg) translate3d(0,0,0);-webkit-transform:skew(0deg,0deg) translate3d(0,0,0);transform:skew(0deg,0deg) translate3d(0,0,0);opacity:1}.lg-css3.lg-slide-skew-rev .lg-item.lg-current,.lg-css3.lg-slide-skew-rev .lg-item.lg-next-slide,.lg-css3.lg-slide-skew-rev .lg-item.lg-prev-slide{-webkit-transition:-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;-moz-transition:-moz-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;-o-transition:-o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;transition:transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s}.lg-css3.lg-slide-skew-cross .lg-item{opacity:0}.lg-css3.lg-slide-skew-cross .lg-item.lg-prev-slide{-moz-transform:skew(0deg,60deg) translate3d(-100%,0,0);-o-transform:skew(0deg,60deg) translate3d(-100%,0,0);-ms-transform:skew(0deg,60deg) translate3d(-100%,0,0);-webkit-transform:skew(0deg,60deg) translate3d(-100%,0,0);transform:skew(0deg,60deg) translate3d(-100%,0,0)}.lg-css3.lg-slide-skew-cross .lg-item.lg-next-slide{-moz-transform:skew(0deg,60deg) translate3d(100%,0,0);-o-transform:skew(0deg,60deg) translate3d(100%,0,0);-ms-transform:skew(0deg,60deg) translate3d(100%,0,0);-webkit-transform:skew(0deg,60deg) translate3d(100%,0,0);transform:skew(0deg,60deg) translate3d(100%,0,0)}.lg-css3.lg-slide-skew-cross .lg-item.lg-current{-moz-transform:skew(0deg,0deg) translate3d(0,0,0);-o-transform:skew(0deg,0deg) translate3d(0,0,0);-ms-transform:skew(0deg,0deg) translate3d(0,0,0);-webkit-transform:skew(0deg,0deg) translate3d(0,0,0);transform:skew(0deg,0deg) translate3d(0,0,0);opacity:1}.lg-css3.lg-slide-skew-cross .lg-item.lg-current,.lg-css3.lg-slide-skew-cross .lg-item.lg-next-slide,.lg-css3.lg-slide-skew-cross .lg-item.lg-prev-slide{-webkit-transition:-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;-moz-transition:-moz-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;-o-transition:-o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;transition:transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s}.lg-css3.lg-slide-skew-cross-rev .lg-item{opacity:0}.lg-css3.lg-slide-skew-cross-rev .lg-item.lg-prev-slide{-moz-transform:skew(0deg,-60deg) translate3d(-100%,0,0);-o-transform:skew(0deg,-60deg) translate3d(-100%,0,0);-ms-transform:skew(0deg,-60deg) translate3d(-100%,0,0);-webkit-transform:skew(0deg,-60deg) translate3d(-100%,0,0);transform:skew(0deg,-60deg) translate3d(-100%,0,0)}.lg-css3.lg-slide-skew-cross-rev .lg-item.lg-next-slide{-moz-transform:skew(0deg,-60deg) translate3d(100%,0,0);-o-transform:skew(0deg,-60deg) translate3d(100%,0,0);-ms-transform:skew(0deg,-60deg) translate3d(100%,0,0);-webkit-transform:skew(0deg,-60deg) translate3d(100%,0,0);transform:skew(0deg,-60deg) translate3d(100%,0,0)}.lg-css3.lg-slide-skew-cross-rev .lg-item.lg-current{-moz-transform:skew(0deg,0deg) translate3d(0,0,0);-o-transform:skew(0deg,0deg) translate3d(0,0,0);-ms-transform:skew(0deg,0deg) translate3d(0,0,0);-webkit-transform:skew(0deg,0deg) translate3d(0,0,0);transform:skew(0deg,0deg) translate3d(0,0,0);opacity:1}.lg-css3.lg-slide-skew-cross-rev .lg-item.lg-current,.lg-css3.lg-slide-skew-cross-rev .lg-item.lg-next-slide,.lg-css3.lg-slide-skew-cross-rev .lg-item.lg-prev-slide{-webkit-transition:-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;-moz-transition:-moz-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;-o-transition:-o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;transition:transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s}.lg-css3.lg-slide-skew-ver .lg-item{opacity:0}.lg-css3.lg-slide-skew-ver .lg-item.lg-prev-slide{-moz-transform:skew(60deg,0deg) translate3d(0,-100%,0);-o-transform:skew(60deg,0deg) translate3d(0,-100%,0);-ms-transform:skew(60deg,0deg) translate3d(0,-100%,0);-webkit-transform:skew(60deg,0deg) translate3d(0,-100%,0);transform:skew(60deg,0deg) translate3d(0,-100%,0)}.lg-css3.lg-slide-skew-ver .lg-item.lg-next-slide{-moz-transform:skew(60deg,0deg) translate3d(0,100%,0);-o-transform:skew(60deg,0deg) translate3d(0,100%,0);-ms-transform:skew(60deg,0deg) translate3d(0,100%,0);-webkit-transform:skew(60deg,0deg) translate3d(0,100%,0);transform:skew(60deg,0deg) translate3d(0,100%,0)}.lg-css3.lg-slide-skew-ver .lg-item.lg-current{-moz-transform:skew(0deg,0deg) translate3d(0,0,0);-o-transform:skew(0deg,0deg) translate3d(0,0,0);-ms-transform:skew(0deg,0deg) translate3d(0,0,0);-webkit-transform:skew(0deg,0deg) translate3d(0,0,0);transform:skew(0deg,0deg) translate3d(0,0,0);opacity:1}.lg-css3.lg-slide-skew-ver .lg-item.lg-current,.lg-css3.lg-slide-skew-ver .lg-item.lg-next-slide,.lg-css3.lg-slide-skew-ver .lg-item.lg-prev-slide{-webkit-transition:-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;-moz-transition:-moz-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;-o-transition:-o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;transition:transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s}.lg-css3.lg-slide-skew-ver-rev .lg-item{opacity:0}.lg-css3.lg-slide-skew-ver-rev .lg-item.lg-prev-slide{-moz-transform:skew(-60deg,0deg) translate3d(0,-100%,0);-o-transform:skew(-60deg,0deg) translate3d(0,-100%,0);-ms-transform:skew(-60deg,0deg) translate3d(0,-100%,0);-webkit-transform:skew(-60deg,0deg) translate3d(0,-100%,0);transform:skew(-60deg,0deg) translate3d(0,-100%,0)}.lg-css3.lg-slide-skew-ver-rev .lg-item.lg-next-slide{-moz-transform:skew(-60deg,0deg) translate3d(0,100%,0);-o-transform:skew(-60deg,0deg) translate3d(0,100%,0);-ms-transform:skew(-60deg,0deg) translate3d(0,100%,0);-webkit-transform:skew(-60deg,0deg) translate3d(0,100%,0);transform:skew(-60deg,0deg) translate3d(0,100%,0)}.lg-css3.lg-slide-skew-ver-rev .lg-item.lg-current{-moz-transform:skew(0deg,0deg) translate3d(0,0,0);-o-transform:skew(0deg,0deg) translate3d(0,0,0);-ms-transform:skew(0deg,0deg) translate3d(0,0,0);-webkit-transform:skew(0deg,0deg) translate3d(0,0,0);transform:skew(0deg,0deg) translate3d(0,0,0);opacity:1}.lg-css3.lg-slide-skew-ver-rev .lg-item.lg-current,.lg-css3.lg-slide-skew-ver-rev .lg-item.lg-next-slide,.lg-css3.lg-slide-skew-ver-rev .lg-item.lg-prev-slide{-webkit-transition:-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;-moz-transition:-moz-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;-o-transition:-o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;transition:transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s}.lg-css3.lg-slide-skew-ver-cross .lg-item{opacity:0}.lg-css3.lg-slide-skew-ver-cross .lg-item.lg-prev-slide{-moz-transform:skew(0deg,20deg) translate3d(0,-100%,0);-o-transform:skew(0deg,20deg) translate3d(0,-100%,0);-ms-transform:skew(0deg,20deg) translate3d(0,-100%,0);-webkit-transform:skew(0deg,20deg) translate3d(0,-100%,0);transform:skew(0deg,20deg) translate3d(0,-100%,0)}.lg-css3.lg-slide-skew-ver-cross .lg-item.lg-next-slide{-moz-transform:skew(0deg,20deg) translate3d(0,100%,0);-o-transform:skew(0deg,20deg) translate3d(0,100%,0);-ms-transform:skew(0deg,20deg) translate3d(0,100%,0);-webkit-transform:skew(0deg,20deg) translate3d(0,100%,0);transform:skew(0deg,20deg) translate3d(0,100%,0)}.lg-css3.lg-slide-skew-ver-cross .lg-item.lg-current{-moz-transform:skew(0deg,0deg) translate3d(0,0,0);-o-transform:skew(0deg,0deg) translate3d(0,0,0);-ms-transform:skew(0deg,0deg) translate3d(0,0,0);-webkit-transform:skew(0deg,0deg) translate3d(0,0,0);transform:skew(0deg,0deg) translate3d(0,0,0);opacity:1}.lg-css3.lg-slide-skew-ver-cross .lg-item.lg-current,.lg-css3.lg-slide-skew-ver-cross .lg-item.lg-next-slide,.lg-css3.lg-slide-skew-ver-cross .lg-item.lg-prev-slide{-webkit-transition:-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;-moz-transition:-moz-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;-o-transition:-o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;transition:transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s}.lg-css3.lg-slide-skew-ver-cross-rev .lg-item{opacity:0}.lg-css3.lg-slide-skew-ver-cross-rev .lg-item.lg-prev-slide{-moz-transform:skew(0deg,-20deg) translate3d(0,-100%,0);-o-transform:skew(0deg,-20deg) translate3d(0,-100%,0);-ms-transform:skew(0deg,-20deg) translate3d(0,-100%,0);-webkit-transform:skew(0deg,-20deg) translate3d(0,-100%,0);transform:skew(0deg,-20deg) translate3d(0,-100%,0)}.lg-css3.lg-slide-skew-ver-cross-rev .lg-item.lg-next-slide{-moz-transform:skew(0deg,-20deg) translate3d(0,100%,0);-o-transform:skew(0deg,-20deg) translate3d(0,100%,0);-ms-transform:skew(0deg,-20deg) translate3d(0,100%,0);-webkit-transform:skew(0deg,-20deg) translate3d(0,100%,0);transform:skew(0deg,-20deg) translate3d(0,100%,0)}.lg-css3.lg-slide-skew-ver-cross-rev .lg-item.lg-current{-moz-transform:skew(0deg,0deg) translate3d(0,0,0);-o-transform:skew(0deg,0deg) translate3d(0,0,0);-ms-transform:skew(0deg,0deg) translate3d(0,0,0);-webkit-transform:skew(0deg,0deg) translate3d(0,0,0);transform:skew(0deg,0deg) translate3d(0,0,0);opacity:1}.lg-css3.lg-slide-skew-ver-cross-rev .lg-item.lg-current,.lg-css3.lg-slide-skew-ver-cross-rev .lg-item.lg-next-slide,.lg-css3.lg-slide-skew-ver-cross-rev .lg-item.lg-prev-slide{-webkit-transition:-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;-moz-transition:-moz-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;-o-transition:-o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;transition:transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s}.lg-css3.lg-lollipop .lg-item{opacity:0}.lg-css3.lg-lollipop .lg-item.lg-prev-slide{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.lg-css3.lg-lollipop .lg-item.lg-next-slide{-moz-transform:translate3d(0,0,0) scale(.5);-o-transform:translate3d(0,0,0) scale(.5);-ms-transform:translate3d(0,0,0) scale(.5);-webkit-transform:translate3d(0,0,0) scale(.5);transform:translate3d(0,0,0) scale(.5)}.lg-css3.lg-lollipop .lg-item.lg-current{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}.lg-css3.lg-lollipop .lg-item.lg-current,.lg-css3.lg-lollipop .lg-item.lg-next-slide,.lg-css3.lg-lollipop .lg-item.lg-prev-slide{-webkit-transition:-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;-moz-transition:-moz-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;-o-transition:-o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;transition:transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s}.lg-css3.lg-lollipop-rev .lg-item{opacity:0}.lg-css3.lg-lollipop-rev .lg-item.lg-prev-slide{-moz-transform:translate3d(0,0,0) scale(.5);-o-transform:translate3d(0,0,0) scale(.5);-ms-transform:translate3d(0,0,0) scale(.5);-webkit-transform:translate3d(0,0,0) scale(.5);transform:translate3d(0,0,0) scale(.5)}.lg-css3.lg-lollipop-rev .lg-item.lg-next-slide{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.lg-css3.lg-lollipop-rev .lg-item.lg-current{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}.lg-css3.lg-lollipop-rev .lg-item.lg-current,.lg-css3.lg-lollipop-rev .lg-item.lg-next-slide,.lg-css3.lg-lollipop-rev .lg-item.lg-prev-slide{-webkit-transition:-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;-moz-transition:-moz-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;-o-transition:-o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;transition:transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s}.lg-css3.lg-rotate .lg-item{opacity:0}.lg-css3.lg-rotate .lg-item.lg-prev-slide{-moz-transform:rotate(-360deg);-o-transform:rotate(-360deg);-ms-transform:rotate(-360deg);-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}.lg-css3.lg-rotate .lg-item.lg-next-slide{-moz-transform:rotate(360deg);-o-transform:rotate(360deg);-ms-transform:rotate(360deg);-webkit-transform:rotate(360deg);transform:rotate(360deg)}.lg-css3.lg-rotate .lg-item.lg-current{-moz-transform:rotate(0);-o-transform:rotate(0);-ms-transform:rotate(0);-webkit-transform:rotate(0);transform:rotate(0);opacity:1}.lg-css3.lg-rotate .lg-item.lg-current,.lg-css3.lg-rotate .lg-item.lg-next-slide,.lg-css3.lg-rotate .lg-item.lg-prev-slide{-webkit-transition:-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;-moz-transition:-moz-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;-o-transition:-o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;transition:transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s}.lg-css3.lg-rotate-rev .lg-item{opacity:0}.lg-css3.lg-rotate-rev .lg-item.lg-prev-slide{-moz-transform:rotate(360deg);-o-transform:rotate(360deg);-ms-transform:rotate(360deg);-webkit-transform:rotate(360deg);transform:rotate(360deg)}.lg-css3.lg-rotate-rev .lg-item.lg-next-slide{-moz-transform:rotate(-360deg);-o-transform:rotate(-360deg);-ms-transform:rotate(-360deg);-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}.lg-css3.lg-rotate-rev .lg-item.lg-current{-moz-transform:rotate(0);-o-transform:rotate(0);-ms-transform:rotate(0);-webkit-transform:rotate(0);transform:rotate(0);opacity:1}.lg-css3.lg-rotate-rev .lg-item.lg-current,.lg-css3.lg-rotate-rev .lg-item.lg-next-slide,.lg-css3.lg-rotate-rev .lg-item.lg-prev-slide{-webkit-transition:-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;-moz-transition:-moz-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;-o-transition:-o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;transition:transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s}.lg-css3.lg-tube .lg-item{opacity:0}.lg-css3.lg-tube .lg-item.lg-prev-slide{-moz-transform:scale3d(1,0,1) translate3d(-100%,0,0);-o-transform:scale3d(1,0,1) translate3d(-100%,0,0);-ms-transform:scale3d(1,0,1) translate3d(-100%,0,0);-webkit-transform:scale3d(1,0,1) translate3d(-100%,0,0);transform:scale3d(1,0,1) translate3d(-100%,0,0)}.lg-css3.lg-tube .lg-item.lg-next-slide{-moz-transform:scale3d(1,0,1) translate3d(100%,0,0);-o-transform:scale3d(1,0,1) translate3d(100%,0,0);-ms-transform:scale3d(1,0,1) translate3d(100%,0,0);-webkit-transform:scale3d(1,0,1) translate3d(100%,0,0);transform:scale3d(1,0,1) translate3d(100%,0,0)}.lg-css3.lg-tube .lg-item.lg-current{-moz-transform:scale3d(1,1,1) translate3d(0,0,0);-o-transform:scale3d(1,1,1) translate3d(0,0,0);-ms-transform:scale3d(1,1,1) translate3d(0,0,0);-webkit-transform:scale3d(1,1,1) translate3d(0,0,0);transform:scale3d(1,1,1) translate3d(0,0,0);opacity:1}.lg-css3.lg-tube .lg-item.lg-current,.lg-css3.lg-tube .lg-item.lg-next-slide,.lg-css3.lg-tube .lg-item.lg-prev-slide{-webkit-transition:-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;-moz-transition:-moz-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;-o-transition:-o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;transition:transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/lightgallery/dist/css/lightgallery.min.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/lightgallery/dist/css/lightgallery.min.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".lg-sub-html,.lg-toolbar{background-color:rgba(0,0,0,.45)}@font-face{font-family:lg;src:url(" + escape(__webpack_require__(/*! ../fonts/lg.eot?n1z373 */ "./node_modules/lightgallery/dist/fonts/lg.eot?n1z373")) + ");src:url(" + escape(__webpack_require__(/*! ../fonts/lg.eot */ "./node_modules/lightgallery/dist/fonts/lg.eot")) + "?#iefixn1z373) format(\"embedded-opentype\"),url(" + escape(__webpack_require__(/*! ../fonts/lg.woff?n1z373 */ "./node_modules/lightgallery/dist/fonts/lg.woff?n1z373")) + ") format(\"woff\"),url(" + escape(__webpack_require__(/*! ../fonts/lg.ttf?n1z373 */ "./node_modules/lightgallery/dist/fonts/lg.ttf?n1z373")) + ") format(\"truetype\"),url(" + escape(__webpack_require__(/*! ../fonts/lg.svg?n1z373 */ "./node_modules/lightgallery/dist/fonts/lg.svg?n1z373")) + "#lg) format(\"svg\");font-weight:400;font-style:normal}.lg-icon{font-family:lg;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.lg-actions .lg-next,.lg-actions .lg-prev{background-color:rgba(0,0,0,.45);border-radius:2px;color:#999;cursor:pointer;display:block;font-size:22px;margin-top:-10px;padding:8px 10px 9px;position:absolute;top:50%;z-index:1080;border:none;outline:0}.lg-actions .lg-next.disabled,.lg-actions .lg-prev.disabled{pointer-events:none;opacity:.5}.lg-actions .lg-next:hover,.lg-actions .lg-prev:hover{color:#FFF}.lg-actions .lg-next{right:20px}.lg-actions .lg-next:before{content:\"\\E095\"}.lg-actions .lg-prev{left:20px}.lg-actions .lg-prev:after{content:\"\\E094\"}@-webkit-keyframes lg-right-end{0%,100%{left:0}50%{left:-30px}}@-moz-keyframes lg-right-end{0%,100%{left:0}50%{left:-30px}}@-ms-keyframes lg-right-end{0%,100%{left:0}50%{left:-30px}}@keyframes lg-right-end{0%,100%{left:0}50%{left:-30px}}@-webkit-keyframes lg-left-end{0%,100%{left:0}50%{left:30px}}@-moz-keyframes lg-left-end{0%,100%{left:0}50%{left:30px}}@-ms-keyframes lg-left-end{0%,100%{left:0}50%{left:30px}}@keyframes lg-left-end{0%,100%{left:0}50%{left:30px}}.lg-outer.lg-right-end .lg-object{-webkit-animation:lg-right-end .3s;-o-animation:lg-right-end .3s;animation:lg-right-end .3s;position:relative}.lg-outer.lg-left-end .lg-object{-webkit-animation:lg-left-end .3s;-o-animation:lg-left-end .3s;animation:lg-left-end .3s;position:relative}.lg-toolbar{z-index:1082;left:0;position:absolute;top:0;width:100%}.lg-toolbar .lg-icon{color:#999;cursor:pointer;float:right;font-size:24px;height:47px;line-height:27px;padding:10px 0;text-align:center;width:50px;text-decoration:none!important;outline:0;-webkit-transition:color .2s linear;-o-transition:color .2s linear;transition:color .2s linear}.lg-toolbar .lg-icon:hover{color:#FFF}.lg-toolbar .lg-close:after{content:\"\\E070\"}.lg-toolbar .lg-download:after{content:\"\\E0F2\"}.lg-sub-html{bottom:0;color:#EEE;font-size:16px;left:0;padding:10px 40px;position:fixed;right:0;text-align:center;z-index:1080}.lg-sub-html h4{margin:0;font-size:13px;font-weight:700}.lg-sub-html p{font-size:12px;margin:5px 0 0}#lg-counter{color:#999;display:inline-block;font-size:16px;padding-left:20px;padding-top:12px;vertical-align:middle}.lg-next,.lg-prev,.lg-toolbar{opacity:1;-webkit-transition:-webkit-transform .35s cubic-bezier(0,0,.25,1) 0s,opacity .35s cubic-bezier(0,0,.25,1) 0s,color .2s linear;-moz-transition:-moz-transform .35s cubic-bezier(0,0,.25,1) 0s,opacity .35s cubic-bezier(0,0,.25,1) 0s,color .2s linear;-o-transition:-o-transform .35s cubic-bezier(0,0,.25,1) 0s,opacity .35s cubic-bezier(0,0,.25,1) 0s,color .2s linear;transition:transform .35s cubic-bezier(0,0,.25,1) 0s,opacity .35s cubic-bezier(0,0,.25,1) 0s,color .2s linear}.lg-hide-items .lg-prev{opacity:0;-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}.lg-hide-items .lg-next{opacity:0;-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}.lg-hide-items .lg-toolbar{opacity:0;-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}body:not(.lg-from-hash) .lg-outer.lg-start-zoom .lg-object{-webkit-transform:scale3d(.5,.5,.5);transform:scale3d(.5,.5,.5);opacity:0;-webkit-transition:-webkit-transform 250ms cubic-bezier(0,0,.25,1) 0s,opacity 250ms cubic-bezier(0,0,.25,1)!important;-moz-transition:-moz-transform 250ms cubic-bezier(0,0,.25,1) 0s,opacity 250ms cubic-bezier(0,0,.25,1)!important;-o-transition:-o-transform 250ms cubic-bezier(0,0,.25,1) 0s,opacity 250ms cubic-bezier(0,0,.25,1)!important;transition:transform 250ms cubic-bezier(0,0,.25,1) 0s,opacity 250ms cubic-bezier(0,0,.25,1)!important;-webkit-transform-origin:50% 50%;-moz-transform-origin:50% 50%;-ms-transform-origin:50% 50%;transform-origin:50% 50%}body:not(.lg-from-hash) .lg-outer.lg-start-zoom .lg-item.lg-complete .lg-object{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);opacity:1}.lg-outer .lg-thumb-outer{background-color:#0D0A0A;bottom:0;position:absolute;width:100%;z-index:1080;max-height:350px;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);-webkit-transition:-webkit-transform .25s cubic-bezier(0,0,.25,1) 0s;-moz-transition:-moz-transform .25s cubic-bezier(0,0,.25,1) 0s;-o-transition:-o-transform .25s cubic-bezier(0,0,.25,1) 0s;transition:transform .25s cubic-bezier(0,0,.25,1) 0s}.lg-outer .lg-thumb-outer.lg-grab .lg-thumb-item{cursor:-webkit-grab;cursor:-moz-grab;cursor:-o-grab;cursor:-ms-grab;cursor:grab}.lg-outer .lg-thumb-outer.lg-grabbing .lg-thumb-item{cursor:move;cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:-o-grabbing;cursor:-ms-grabbing;cursor:grabbing}.lg-outer .lg-thumb-outer.lg-dragging .lg-thumb{-webkit-transition-duration:0s!important;transition-duration:0s!important}.lg-outer.lg-thumb-open .lg-thumb-outer{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.lg-outer .lg-thumb{padding:10px 0;height:100%;margin-bottom:-5px}.lg-outer .lg-thumb-item{cursor:pointer;float:left;overflow:hidden;height:100%;border:2px solid #FFF;border-radius:4px;margin-bottom:5px}@media (min-width:1025px){.lg-outer .lg-thumb-item{-webkit-transition:border-color .25s ease;-o-transition:border-color .25s ease;transition:border-color .25s ease}}.lg-outer .lg-thumb-item.active,.lg-outer .lg-thumb-item:hover{border-color:#a90707}.lg-outer .lg-thumb-item img{width:100%;height:100%;object-fit:cover}.lg-outer.lg-has-thumb .lg-item{padding-bottom:120px}.lg-outer.lg-can-toggle .lg-item{padding-bottom:0}.lg-outer.lg-pull-caption-up .lg-sub-html{-webkit-transition:bottom .25s ease;-o-transition:bottom .25s ease;transition:bottom .25s ease}.lg-outer.lg-pull-caption-up.lg-thumb-open .lg-sub-html{bottom:100px}.lg-outer .lg-toogle-thumb{background-color:#0D0A0A;border-radius:2px 2px 0 0;color:#999;cursor:pointer;font-size:24px;height:39px;line-height:27px;padding:5px 0;position:absolute;right:20px;text-align:center;top:-39px;width:50px}.lg-outer .lg-toogle-thumb:hover,.lg-outer.lg-dropdown-active #lg-share{color:#FFF}.lg-outer .lg-toogle-thumb:after{content:\"\\E1FF\"}.lg-outer .lg-video-cont{display:inline-block;vertical-align:middle;max-width:1140px;max-height:100%;width:100%;padding:0 5px}.lg-outer .lg-video{width:100%;height:0;padding-bottom:56.25%;overflow:hidden;position:relative}.lg-outer .lg-video .lg-object{display:inline-block;position:absolute;top:0;left:0;width:100%!important;height:100%!important}.lg-outer .lg-video .lg-video-play{width:84px;height:59px;position:absolute;left:50%;top:50%;margin-left:-42px;margin-top:-30px;z-index:1080;cursor:pointer}.lg-outer .lg-has-iframe .lg-video{-webkit-overflow-scrolling:touch;overflow:auto}.lg-outer .lg-has-vimeo .lg-video-play{background:url(" + escape(__webpack_require__(/*! ../img/vimeo-play.png */ "./node_modules/lightgallery/dist/img/vimeo-play.png")) + ") no-repeat}.lg-outer .lg-has-vimeo:hover .lg-video-play{background:url(" + escape(__webpack_require__(/*! ../img/vimeo-play.png */ "./node_modules/lightgallery/dist/img/vimeo-play.png")) + ") 0 -58px no-repeat}.lg-outer .lg-has-html5 .lg-video-play{background:url(" + escape(__webpack_require__(/*! ../img/video-play.png */ "./node_modules/lightgallery/dist/img/video-play.png")) + ") no-repeat;height:64px;margin-left:-32px;margin-top:-32px;width:64px;opacity:.8}.lg-outer .lg-has-html5:hover .lg-video-play{opacity:1}.lg-outer .lg-has-youtube .lg-video-play{background:url(" + escape(__webpack_require__(/*! ../img/youtube-play.png */ "./node_modules/lightgallery/dist/img/youtube-play.png")) + ") no-repeat}.lg-outer .lg-has-youtube:hover .lg-video-play{background:url(" + escape(__webpack_require__(/*! ../img/youtube-play.png */ "./node_modules/lightgallery/dist/img/youtube-play.png")) + ") 0 -60px no-repeat}.lg-outer .lg-video-object{width:100%!important;height:100%!important;position:absolute;top:0;left:0}.lg-outer .lg-has-video .lg-video-object{visibility:hidden}.lg-outer .lg-has-video.lg-video-playing .lg-object,.lg-outer .lg-has-video.lg-video-playing .lg-video-play{display:none}.lg-outer .lg-has-video.lg-video-playing .lg-video-object{visibility:visible}.lg-progress-bar{background-color:#333;height:5px;left:0;position:absolute;top:0;width:100%;z-index:1083;opacity:0;-webkit-transition:opacity 80ms ease 0s;-moz-transition:opacity 80ms ease 0s;-o-transition:opacity 80ms ease 0s;transition:opacity 80ms ease 0s}.lg-progress-bar .lg-progress{background-color:#a90707;height:5px;width:0}.lg-progress-bar.lg-start .lg-progress{width:100%}.lg-show-autoplay .lg-progress-bar{opacity:1}.lg-autoplay-button:after{content:\"\\E01D\"}.lg-show-autoplay .lg-autoplay-button:after{content:\"\\E01A\"}.lg-outer.lg-css3.lg-zoom-dragging .lg-item.lg-complete.lg-zoomable .lg-image,.lg-outer.lg-css3.lg-zoom-dragging .lg-item.lg-complete.lg-zoomable .lg-img-wrap{-webkit-transition-duration:0s;transition-duration:0s}.lg-outer.lg-use-transition-for-zoom .lg-item.lg-complete.lg-zoomable .lg-img-wrap{-webkit-transition:-webkit-transform .3s cubic-bezier(0,0,.25,1) 0s;-moz-transition:-moz-transform .3s cubic-bezier(0,0,.25,1) 0s;-o-transition:-o-transform .3s cubic-bezier(0,0,.25,1) 0s;transition:transform .3s cubic-bezier(0,0,.25,1) 0s}.lg-outer.lg-use-left-for-zoom .lg-item.lg-complete.lg-zoomable .lg-img-wrap{-webkit-transition:left .3s cubic-bezier(0,0,.25,1) 0s,top .3s cubic-bezier(0,0,.25,1) 0s;-moz-transition:left .3s cubic-bezier(0,0,.25,1) 0s,top .3s cubic-bezier(0,0,.25,1) 0s;-o-transition:left .3s cubic-bezier(0,0,.25,1) 0s,top .3s cubic-bezier(0,0,.25,1) 0s;transition:left .3s cubic-bezier(0,0,.25,1) 0s,top .3s cubic-bezier(0,0,.25,1) 0s}.lg-outer .lg-item.lg-complete.lg-zoomable .lg-img-wrap{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;backface-visibility:hidden}.lg-outer .lg-item.lg-complete.lg-zoomable .lg-image{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);-webkit-transition:-webkit-transform .3s cubic-bezier(0,0,.25,1) 0s,opacity .15s!important;-moz-transition:-moz-transform .3s cubic-bezier(0,0,.25,1) 0s,opacity .15s!important;-o-transition:-o-transform .3s cubic-bezier(0,0,.25,1) 0s,opacity .15s!important;transition:transform .3s cubic-bezier(0,0,.25,1) 0s,opacity .15s!important;-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;backface-visibility:hidden}#lg-zoom-in:after{content:\"\\E311\"}#lg-actual-size{font-size:20px}#lg-actual-size:after{content:\"\\E033\"}#lg-zoom-out{opacity:.5;pointer-events:none}#lg-zoom-out:after{content:\"\\E312\"}.lg-zoomed #lg-zoom-out{opacity:1;pointer-events:auto}.lg-outer .lg-pager-outer{bottom:60px;left:0;position:absolute;right:0;text-align:center;z-index:1080;height:10px}.lg-outer .lg-pager-outer.lg-pager-hover .lg-pager-cont{overflow:visible}.lg-outer .lg-pager-cont{cursor:pointer;display:inline-block;overflow:hidden;position:relative;vertical-align:top;margin:0 5px}.lg-outer .lg-pager-cont:hover .lg-pager-thumb-cont{opacity:1;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.lg-outer .lg-pager-cont.lg-pager-active .lg-pager{box-shadow:0 0 0 2px #fff inset}.lg-outer .lg-pager-thumb-cont{background-color:#fff;color:#FFF;bottom:100%;height:83px;left:0;margin-bottom:20px;margin-left:-60px;opacity:0;padding:5px;position:absolute;width:120px;border-radius:3px;-webkit-transition:opacity .15s ease 0s,-webkit-transform .15s ease 0s;-moz-transition:opacity .15s ease 0s,-moz-transform .15s ease 0s;-o-transition:opacity .15s ease 0s,-o-transform .15s ease 0s;transition:opacity .15s ease 0s,transform .15s ease 0s;-webkit-transform:translate3d(0,5px,0);transform:translate3d(0,5px,0)}.lg-outer .lg-pager-thumb-cont img{width:100%;height:100%}.lg-outer .lg-pager{background-color:rgba(255,255,255,.5);border-radius:50%;box-shadow:0 0 0 8px rgba(255,255,255,.7) inset;display:block;height:12px;-webkit-transition:box-shadow .3s ease 0s;-o-transition:box-shadow .3s ease 0s;transition:box-shadow .3s ease 0s;width:12px}.lg-outer .lg-pager:focus,.lg-outer .lg-pager:hover{box-shadow:0 0 0 8px #fff inset}.lg-outer .lg-caret{border-left:10px solid transparent;border-right:10px solid transparent;border-top:10px dashed;bottom:-10px;display:inline-block;height:0;left:50%;margin-left:-5px;position:absolute;vertical-align:middle;width:0}.lg-fullscreen:after{content:\"\\E20C\"}.lg-fullscreen-on .lg-fullscreen:after{content:\"\\E20D\"}.lg-outer #lg-dropdown-overlay{background-color:rgba(0,0,0,.25);bottom:0;cursor:default;left:0;position:fixed;right:0;top:0;z-index:1081;opacity:0;visibility:hidden;-webkit-transition:visibility 0s linear .18s,opacity .18s linear 0s;-o-transition:visibility 0s linear .18s,opacity .18s linear 0s;transition:visibility 0s linear .18s,opacity .18s linear 0s}.lg-outer.lg-dropdown-active #lg-dropdown-overlay,.lg-outer.lg-dropdown-active .lg-dropdown{-webkit-transition-delay:0s;transition-delay:0s;-moz-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1;visibility:visible}.lg-outer .lg-dropdown{background-color:#fff;border-radius:2px;font-size:14px;list-style-type:none;margin:0;padding:10px 0;position:absolute;right:0;text-align:left;top:50px;opacity:0;visibility:hidden;-moz-transform:translate3d(0,5px,0);-o-transform:translate3d(0,5px,0);-ms-transform:translate3d(0,5px,0);-webkit-transform:translate3d(0,5px,0);transform:translate3d(0,5px,0);-webkit-transition:-webkit-transform .18s linear 0s,visibility 0s linear .5s,opacity .18s linear 0s;-moz-transition:-moz-transform .18s linear 0s,visibility 0s linear .5s,opacity .18s linear 0s;-o-transition:-o-transform .18s linear 0s,visibility 0s linear .5s,opacity .18s linear 0s;transition:transform .18s linear 0s,visibility 0s linear .5s,opacity .18s linear 0s}.lg-outer .lg-dropdown:after{content:\"\";display:block;height:0;width:0;position:absolute;border:8px solid transparent;border-bottom-color:#FFF;right:16px;top:-16px}.lg-outer .lg-dropdown>li:last-child{margin-bottom:0}.lg-outer .lg-dropdown>li:hover .lg-icon,.lg-outer .lg-dropdown>li:hover a{color:#333}.lg-outer .lg-dropdown a{color:#333;display:block;white-space:pre;padding:4px 12px;font-family:\"Open Sans\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:12px}.lg-outer .lg-dropdown a:hover{background-color:rgba(0,0,0,.07)}.lg-outer .lg-dropdown .lg-dropdown-text{display:inline-block;line-height:1;margin-top:-3px;vertical-align:middle}.lg-outer .lg-dropdown .lg-icon{color:#333;display:inline-block;float:none;font-size:20px;height:auto;line-height:1;margin-right:8px;padding:0;vertical-align:middle;width:auto}.lg-outer,.lg-outer .lg,.lg-outer .lg-inner{width:100%;height:100%}.lg-outer #lg-share{position:relative}.lg-outer #lg-share:after{content:\"\\E80D\"}.lg-outer #lg-share-facebook .lg-icon{color:#3b5998}.lg-outer #lg-share-facebook .lg-icon:after{content:\"\\E901\"}.lg-outer #lg-share-twitter .lg-icon{color:#00aced}.lg-outer #lg-share-twitter .lg-icon:after{content:\"\\E904\"}.lg-outer #lg-share-googleplus .lg-icon{color:#dd4b39}.lg-outer #lg-share-googleplus .lg-icon:after{content:\"\\E902\"}.lg-outer #lg-share-pinterest .lg-icon{color:#cb2027}.lg-outer #lg-share-pinterest .lg-icon:after{content:\"\\E903\"}.lg-group:after{content:\"\";display:table;clear:both}.lg-outer{position:fixed;top:0;left:0;z-index:1050;text-align:left;opacity:0;-webkit-transition:opacity .15s ease 0s;-o-transition:opacity .15s ease 0s;transition:opacity .15s ease 0s}.lg-outer *{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.lg-outer.lg-visible{opacity:1}.lg-outer.lg-css3 .lg-item.lg-current,.lg-outer.lg-css3 .lg-item.lg-next-slide,.lg-outer.lg-css3 .lg-item.lg-prev-slide{-webkit-transition-duration:inherit!important;transition-duration:inherit!important;-webkit-transition-timing-function:inherit!important;transition-timing-function:inherit!important}.lg-outer.lg-css3.lg-dragging .lg-item.lg-current,.lg-outer.lg-css3.lg-dragging .lg-item.lg-next-slide,.lg-outer.lg-css3.lg-dragging .lg-item.lg-prev-slide{-webkit-transition-duration:0s!important;transition-duration:0s!important;opacity:1}.lg-outer.lg-grab img.lg-object{cursor:-webkit-grab;cursor:-moz-grab;cursor:-o-grab;cursor:-ms-grab;cursor:grab}.lg-outer.lg-grabbing img.lg-object{cursor:move;cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:-o-grabbing;cursor:-ms-grabbing;cursor:grabbing}.lg-outer .lg{position:relative;overflow:hidden;margin-left:auto;margin-right:auto;max-width:100%;max-height:100%}.lg-outer .lg-inner{position:absolute;left:0;top:0;white-space:nowrap}.lg-outer .lg-item{background:url(" + escape(__webpack_require__(/*! ../img/loading.gif */ "./node_modules/lightgallery/dist/img/loading.gif")) + ") center center no-repeat;display:none!important}.lg-outer.lg-css .lg-current,.lg-outer.lg-css3 .lg-current,.lg-outer.lg-css3 .lg-next-slide,.lg-outer.lg-css3 .lg-prev-slide{display:inline-block!important}.lg-outer .lg-img-wrap,.lg-outer .lg-item{display:inline-block;text-align:center;position:absolute;width:100%;height:100%}.lg-outer .lg-img-wrap:before,.lg-outer .lg-item:before{content:\"\";display:inline-block;height:50%;width:1px;margin-right:-1px}.lg-outer .lg-img-wrap{position:absolute;padding:0 5px;left:0;right:0;top:0;bottom:0}.lg-outer .lg-item.lg-complete{background-image:none}.lg-outer .lg-item.lg-current{z-index:1060}.lg-outer .lg-image{display:inline-block;vertical-align:middle;max-width:100%;max-height:100%;width:auto!important;height:auto!important}.lg-outer.lg-show-after-load .lg-item .lg-object,.lg-outer.lg-show-after-load .lg-item .lg-video-play{opacity:0;-webkit-transition:opacity .15s ease 0s;-o-transition:opacity .15s ease 0s;transition:opacity .15s ease 0s}.lg-outer.lg-show-after-load .lg-item.lg-complete .lg-object,.lg-outer.lg-show-after-load .lg-item.lg-complete .lg-video-play{opacity:1}.lg-outer .lg-empty-html,.lg-outer.lg-hide-download #lg-download{display:none}.lg-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;z-index:1040;background-color:#000;opacity:0;-webkit-transition:opacity .15s ease 0s;-o-transition:opacity .15s ease 0s;transition:opacity .15s ease 0s}.lg-backdrop.in{opacity:1}.lg-css3.lg-no-trans .lg-current,.lg-css3.lg-no-trans .lg-next-slide,.lg-css3.lg-no-trans .lg-prev-slide{-webkit-transition:none 0s ease 0s!important;-moz-transition:none 0s ease 0s!important;-o-transition:none 0s ease 0s!important;transition:none 0s ease 0s!important}.lg-css3.lg-use-css3 .lg-item,.lg-css3.lg-use-left .lg-item{-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;backface-visibility:hidden}.lg-css3.lg-fade .lg-item{opacity:0}.lg-css3.lg-fade .lg-item.lg-current{opacity:1}.lg-css3.lg-fade .lg-item.lg-current,.lg-css3.lg-fade .lg-item.lg-next-slide,.lg-css3.lg-fade .lg-item.lg-prev-slide{-webkit-transition:opacity .1s ease 0s;-moz-transition:opacity .1s ease 0s;-o-transition:opacity .1s ease 0s;transition:opacity .1s ease 0s}.lg-css3.lg-slide.lg-use-css3 .lg-item{opacity:0}.lg-css3.lg-slide.lg-use-css3 .lg-item.lg-prev-slide{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.lg-css3.lg-slide.lg-use-css3 .lg-item.lg-next-slide{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.lg-css3.lg-slide.lg-use-css3 .lg-item.lg-current{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);opacity:1}.lg-css3.lg-slide.lg-use-css3 .lg-item.lg-current,.lg-css3.lg-slide.lg-use-css3 .lg-item.lg-next-slide,.lg-css3.lg-slide.lg-use-css3 .lg-item.lg-prev-slide{-webkit-transition:-webkit-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;-moz-transition:-moz-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;-o-transition:-o-transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;transition:transform 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s}.lg-css3.lg-slide.lg-use-left .lg-item{opacity:0;position:absolute;left:0}.lg-css3.lg-slide.lg-use-left .lg-item.lg-prev-slide{left:-100%}.lg-css3.lg-slide.lg-use-left .lg-item.lg-next-slide{left:100%}.lg-css3.lg-slide.lg-use-left .lg-item.lg-current{left:0;opacity:1}.lg-css3.lg-slide.lg-use-left .lg-item.lg-current,.lg-css3.lg-slide.lg-use-left .lg-item.lg-next-slide,.lg-css3.lg-slide.lg-use-left .lg-item.lg-prev-slide{-webkit-transition:left 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;-moz-transition:left 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;-o-transition:left 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s;transition:left 1s cubic-bezier(0,0,.25,1) 0s,opacity .1s ease 0s}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/lg-fullscreen/dist/lg-fullscreen.js":
/*!**********************************************************!*\
  !*** ./node_modules/lg-fullscreen/dist/lg-fullscreen.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! lg-fullscreen - v1.0.1 - 2016-09-30
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2016 Sachin N; Licensed GPLv3 */

(function (root, factory) {
  if (true) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (a0) {
      return (factory(a0));
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function ($) {

(function() {

    'use strict';

    var defaults = {
        fullScreen: true
    };

    var Fullscreen = function(element) {

        // get lightGallery core plugin data
        this.core = $(element).data('lightGallery');

        this.$el = $(element);

        // extend module defalut settings with lightGallery core settings
        this.core.s = $.extend({}, defaults, this.core.s);

        this.init();

        return this;
    };

    Fullscreen.prototype.init = function() {
        var fullScreen = '';
        if (this.core.s.fullScreen) {

            // check for fullscreen browser support
            if (!document.fullscreenEnabled && !document.webkitFullscreenEnabled &&
                !document.mozFullScreenEnabled && !document.msFullscreenEnabled) {
                return;
            } else {
                fullScreen = '<span class="lg-fullscreen lg-icon"></span>';
                this.core.$outer.find('.lg-toolbar').append(fullScreen);
                this.fullScreen();
            }
        }
    };

    Fullscreen.prototype.requestFullscreen = function() {
        var el = document.documentElement;
        if (el.requestFullscreen) {
            el.requestFullscreen();
        } else if (el.msRequestFullscreen) {
            el.msRequestFullscreen();
        } else if (el.mozRequestFullScreen) {
            el.mozRequestFullScreen();
        } else if (el.webkitRequestFullscreen) {
            el.webkitRequestFullscreen();
        }
    };

    Fullscreen.prototype.exitFullscreen = function() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    };

    // https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Using_full_screen_mode
    Fullscreen.prototype.fullScreen = function() {
        var _this = this;

        $(document).on('fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg', function() {
            _this.core.$outer.toggleClass('lg-fullscreen-on');
        });

        this.core.$outer.find('.lg-fullscreen').on('click.lg', function() {
            if (!document.fullscreenElement &&
                !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
                _this.requestFullscreen();
            } else {
                _this.exitFullscreen();
            }
        });

    };

    Fullscreen.prototype.destroy = function() {

        // exit from fullscreen if activated
        this.exitFullscreen();

        $(document).off('fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg');
    };

    $.fn.lightGallery.modules.fullscreen = Fullscreen;

})();

}));


/***/ }),

/***/ "./node_modules/lg-thumbnail/dist/lg-thumbnail.js":
/*!********************************************************!*\
  !*** ./node_modules/lg-thumbnail/dist/lg-thumbnail.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! lg-thumbnail - v1.1.0 - 2017-08-08
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2017 Sachin N; Licensed GPLv3 */

(function (root, factory) {
  if (true) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (a0) {
      return (factory(a0));
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function ($) {

(function() {

    'use strict';

    var defaults = {
        thumbnail: true,

        animateThumb: true,
        currentPagerPosition: 'middle',

        thumbWidth: 100,
        thumbHeight: '80px',
        thumbContHeight: 100,
        thumbMargin: 5,

        exThumbImage: false,
        showThumbByDefault: true,
        toogleThumb: true,
        pullCaptionUp: true,

        enableThumbDrag: true,
        enableThumbSwipe: true,
        swipeThreshold: 50,

        loadYoutubeThumbnail: true,
        youtubeThumbSize: 1,

        loadVimeoThumbnail: true,
        vimeoThumbSize: 'thumbnail_small',

        loadDailymotionThumbnail: true
    };

    var Thumbnail = function(element) {

        // get lightGallery core plugin data
        this.core = $(element).data('lightGallery');

        // extend module default settings with lightGallery core settings
        this.core.s = $.extend({}, defaults, this.core.s);

        this.$el = $(element);
        this.$thumbOuter = null;
        this.thumbOuterWidth = 0;
        this.thumbTotalWidth = (this.core.$items.length * (this.core.s.thumbWidth + this.core.s.thumbMargin));
        this.thumbIndex = this.core.index;

        if (this.core.s.animateThumb) {
            this.core.s.thumbHeight = '100%';
        }

        // Thumbnail animation value
        this.left = 0;

        this.init();

        return this;
    };

    Thumbnail.prototype.init = function() {
        var _this = this;
        if (this.core.s.thumbnail && this.core.$items.length > 1) {
            if (this.core.s.showThumbByDefault) {
                setTimeout(function(){
                    _this.core.$outer.addClass('lg-thumb-open');
                }, 700);
            }

            if (this.core.s.pullCaptionUp) {
                this.core.$outer.addClass('lg-pull-caption-up');
            }

            this.build();
            if (this.core.s.animateThumb && this.core.doCss()) {
                if (this.core.s.enableThumbDrag) {
                    this.enableThumbDrag();
                }

                if (this.core.s.enableThumbSwipe) {
                    this.enableThumbSwipe();
                }

                this.thumbClickable = false;
            } else {
                this.thumbClickable = true;
            }

            this.toogle();
            this.thumbkeyPress();
        }
    };

    Thumbnail.prototype.build = function() {
        var _this = this;
        var thumbList = '';
        var vimeoErrorThumbSize = '';
        var $thumb;
        var html = '<div class="lg-thumb-outer">' +
            '<div class="lg-thumb lg-group">' +
            '</div>' +
            '</div>';

        switch (this.core.s.vimeoThumbSize) {
            case 'thumbnail_large':
                vimeoErrorThumbSize = '640';
                break;
            case 'thumbnail_medium':
                vimeoErrorThumbSize = '200x150';
                break;
            case 'thumbnail_small':
                vimeoErrorThumbSize = '100x75';
        }

        _this.core.$outer.addClass('lg-has-thumb');

        _this.core.$outer.find('.lg').append(html);

        _this.$thumbOuter = _this.core.$outer.find('.lg-thumb-outer');
        _this.thumbOuterWidth = _this.$thumbOuter.width();

        if (_this.core.s.animateThumb) {
            _this.core.$outer.find('.lg-thumb').css({
                width: _this.thumbTotalWidth + 'px',
                position: 'relative'
            });
        }

        if (this.core.s.animateThumb) {
            _this.$thumbOuter.css('height', _this.core.s.thumbContHeight + 'px');
        }

        function getThumb(src, thumb, index) {
            var isVideo = _this.core.isVideo(src, index) || {};
            var thumbImg;
            var vimeoId = '';

            if (isVideo.youtube || isVideo.vimeo || isVideo.dailymotion) {
                if (isVideo.youtube) {
                    if (_this.core.s.loadYoutubeThumbnail) {
                        thumbImg = '//img.youtube.com/vi/' + isVideo.youtube[1] + '/' + _this.core.s.youtubeThumbSize + '.jpg';
                    } else {
                        thumbImg = thumb;
                    }
                } else if (isVideo.vimeo) {
                    if (_this.core.s.loadVimeoThumbnail) {
                        thumbImg = '//i.vimeocdn.com/video/error_' + vimeoErrorThumbSize + '.jpg';
                        vimeoId = isVideo.vimeo[1];
                    } else {
                        thumbImg = thumb;
                    }
                } else if (isVideo.dailymotion) {
                    if (_this.core.s.loadDailymotionThumbnail) {
                        thumbImg = '//www.dailymotion.com/thumbnail/video/' + isVideo.dailymotion[1];
                    } else {
                        thumbImg = thumb;
                    }
                }
            } else {
                thumbImg = thumb;
            }

            thumbList += '<div data-vimeo-id="' + vimeoId + '" class="lg-thumb-item" style="width:' + _this.core.s.thumbWidth + 'px; height: ' + _this.core.s.thumbHeight + '; margin-right: ' + _this.core.s.thumbMargin + 'px"><img src="' + thumbImg + '" /></div>';
            vimeoId = '';
        }

        if (_this.core.s.dynamic) {
            for (var i = 0; i < _this.core.s.dynamicEl.length; i++) {
                getThumb(_this.core.s.dynamicEl[i].src, _this.core.s.dynamicEl[i].thumb, i);
            }
        } else {
            _this.core.$items.each(function(i) {

                if (!_this.core.s.exThumbImage) {
                    getThumb($(this).attr('href') || $(this).attr('data-src'), $(this).find('img').attr('src'), i);
                } else {
                    getThumb($(this).attr('href') || $(this).attr('data-src'), $(this).attr(_this.core.s.exThumbImage), i);
                }

            });
        }

        _this.core.$outer.find('.lg-thumb').html(thumbList);

        $thumb = _this.core.$outer.find('.lg-thumb-item');

        // Load vimeo thumbnails
        $thumb.each(function() {
            var $this = $(this);
            var vimeoVideoId = $this.attr('data-vimeo-id');

            if (vimeoVideoId) {
                $.getJSON('//www.vimeo.com/api/v2/video/' + vimeoVideoId + '.json?callback=?', {
                    format: 'json'
                }, function(data) {
                    $this.find('img').attr('src', data[0][_this.core.s.vimeoThumbSize]);
                });
            }
        });

        // manage active class for thumbnail
        $thumb.eq(_this.core.index).addClass('active');
        _this.core.$el.on('onBeforeSlide.lg.tm', function() {
            $thumb.removeClass('active');
            $thumb.eq(_this.core.index).addClass('active');
        });

        $thumb.on('click.lg touchend.lg', function() {
            var _$this = $(this);
            setTimeout(function() {

                // In IE9 and bellow touch does not support
                // Go to slide if browser does not support css transitions
                if ((_this.thumbClickable && !_this.core.lgBusy) || !_this.core.doCss()) {
                    _this.core.index = _$this.index();
                    _this.core.slide(_this.core.index, false, true, false);
                }
            }, 50);
        });

        _this.core.$el.on('onBeforeSlide.lg.tm', function() {
            _this.animateThumb(_this.core.index);
        });

        $(window).on('resize.lg.thumb orientationchange.lg.thumb', function() {
            setTimeout(function() {
                _this.animateThumb(_this.core.index);
                _this.thumbOuterWidth = _this.$thumbOuter.width();
            }, 200);
        });

    };

    Thumbnail.prototype.setTranslate = function(value) {
        // jQuery supports Automatic CSS prefixing since jQuery 1.8.0
        this.core.$outer.find('.lg-thumb').css({
            transform: 'translate3d(-' + (value) + 'px, 0px, 0px)'
        });
    };

    Thumbnail.prototype.animateThumb = function(index) {
        var $thumb = this.core.$outer.find('.lg-thumb');
        if (this.core.s.animateThumb) {
            var position;
            switch (this.core.s.currentPagerPosition) {
                case 'left':
                    position = 0;
                    break;
                case 'middle':
                    position = (this.thumbOuterWidth / 2) - (this.core.s.thumbWidth / 2);
                    break;
                case 'right':
                    position = this.thumbOuterWidth - this.core.s.thumbWidth;
            }
            this.left = ((this.core.s.thumbWidth + this.core.s.thumbMargin) * index - 1) - position;
            if (this.left > (this.thumbTotalWidth - this.thumbOuterWidth)) {
                this.left = this.thumbTotalWidth - this.thumbOuterWidth;
            }

            if (this.left < 0) {
                this.left = 0;
            }

            if (this.core.lGalleryOn) {
                if (!$thumb.hasClass('on')) {
                    this.core.$outer.find('.lg-thumb').css('transition-duration', this.core.s.speed + 'ms');
                }

                if (!this.core.doCss()) {
                    $thumb.animate({
                        left: -this.left + 'px'
                    }, this.core.s.speed);
                }
            } else {
                if (!this.core.doCss()) {
                    $thumb.css('left', -this.left + 'px');
                }
            }

            this.setTranslate(this.left);

        }
    };

    // Enable thumbnail dragging and swiping
    Thumbnail.prototype.enableThumbDrag = function() {

        var _this = this;
        var startCoords = 0;
        var endCoords = 0;
        var isDraging = false;
        var isMoved = false;
        var tempLeft = 0;

        _this.$thumbOuter.addClass('lg-grab');

        _this.core.$outer.find('.lg-thumb').on('mousedown.lg.thumb', function(e) {
            if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
                // execute only on .lg-object
                e.preventDefault();
                startCoords = e.pageX;
                isDraging = true;

                // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
                _this.core.$outer.scrollLeft += 1;
                _this.core.$outer.scrollLeft -= 1;

                // *
                _this.thumbClickable = false;
                _this.$thumbOuter.removeClass('lg-grab').addClass('lg-grabbing');
            }
        });

        $(window).on('mousemove.lg.thumb', function(e) {
            if (isDraging) {
                tempLeft = _this.left;
                isMoved = true;
                endCoords = e.pageX;

                _this.$thumbOuter.addClass('lg-dragging');

                tempLeft = tempLeft - (endCoords - startCoords);

                if (tempLeft > (_this.thumbTotalWidth - _this.thumbOuterWidth)) {
                    tempLeft = _this.thumbTotalWidth - _this.thumbOuterWidth;
                }

                if (tempLeft < 0) {
                    tempLeft = 0;
                }

                // move current slide
                _this.setTranslate(tempLeft);

            }
        });

        $(window).on('mouseup.lg.thumb', function() {
            if (isMoved) {
                isMoved = false;
                _this.$thumbOuter.removeClass('lg-dragging');

                _this.left = tempLeft;

                if (Math.abs(endCoords - startCoords) < _this.core.s.swipeThreshold) {
                    _this.thumbClickable = true;
                }

            } else {
                _this.thumbClickable = true;
            }

            if (isDraging) {
                isDraging = false;
                _this.$thumbOuter.removeClass('lg-grabbing').addClass('lg-grab');
            }
        });

    };

    Thumbnail.prototype.enableThumbSwipe = function() {
        var _this = this;
        var startCoords = 0;
        var endCoords = 0;
        var isMoved = false;
        var tempLeft = 0;

        _this.core.$outer.find('.lg-thumb').on('touchstart.lg', function(e) {
            if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
                e.preventDefault();
                startCoords = e.originalEvent.targetTouches[0].pageX;
                _this.thumbClickable = false;
            }
        });

        _this.core.$outer.find('.lg-thumb').on('touchmove.lg', function(e) {
            if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
                e.preventDefault();
                endCoords = e.originalEvent.targetTouches[0].pageX;
                isMoved = true;

                _this.$thumbOuter.addClass('lg-dragging');

                tempLeft = _this.left;

                tempLeft = tempLeft - (endCoords - startCoords);

                if (tempLeft > (_this.thumbTotalWidth - _this.thumbOuterWidth)) {
                    tempLeft = _this.thumbTotalWidth - _this.thumbOuterWidth;
                }

                if (tempLeft < 0) {
                    tempLeft = 0;
                }

                // move current slide
                _this.setTranslate(tempLeft);

            }
        });

        _this.core.$outer.find('.lg-thumb').on('touchend.lg', function() {
            if (_this.thumbTotalWidth > _this.thumbOuterWidth) {

                if (isMoved) {
                    isMoved = false;
                    _this.$thumbOuter.removeClass('lg-dragging');
                    if (Math.abs(endCoords - startCoords) < _this.core.s.swipeThreshold) {
                        _this.thumbClickable = true;
                    }

                    _this.left = tempLeft;
                } else {
                    _this.thumbClickable = true;
                }
            } else {
                _this.thumbClickable = true;
            }
        });

    };

    Thumbnail.prototype.toogle = function() {
        var _this = this;
        if (_this.core.s.toogleThumb) {
            _this.core.$outer.addClass('lg-can-toggle');
            _this.$thumbOuter.append('<span class="lg-toogle-thumb lg-icon"></span>');
            _this.core.$outer.find('.lg-toogle-thumb').on('click.lg', function() {
                _this.core.$outer.toggleClass('lg-thumb-open');
            });
        }
    };

    Thumbnail.prototype.thumbkeyPress = function() {
        var _this = this;
        $(window).on('keydown.lg.thumb', function(e) {
            if (e.keyCode === 38) {
                e.preventDefault();
                _this.core.$outer.addClass('lg-thumb-open');
            } else if (e.keyCode === 40) {
                e.preventDefault();
                _this.core.$outer.removeClass('lg-thumb-open');
            }
        });
    };

    Thumbnail.prototype.destroy = function() {
        if (this.core.s.thumbnail && this.core.$items.length > 1) {
            $(window).off('resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb');
            this.$thumbOuter.remove();
            this.core.$outer.removeClass('lg-has-thumb');
        }
    };

    $.fn.lightGallery.modules.Thumbnail = Thumbnail;

})();

}));


/***/ }),

/***/ "./node_modules/lg-zoom/dist/lg-zoom.js":
/*!**********************************************!*\
  !*** ./node_modules/lg-zoom/dist/lg-zoom.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! lg-zoom - v1.1.0 - 2017-08-08
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2017 Sachin N; Licensed GPLv3 */

(function (root, factory) {
  if (true) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (a0) {
      return (factory(a0));
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function ($) {

(function() {

    'use strict';

    var getUseLeft = function() {
        var useLeft = false;
        var isChrome = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
        if (isChrome && parseInt(isChrome[2], 10) < 54) {
            useLeft = true;
        }

        return useLeft;
    };

    var defaults = {
        scale: 1,
        zoom: true,
        actualSize: true,
        enableZoomAfter: 300,
        useLeftForZoom: getUseLeft()
    };

    var Zoom = function(element) {

        this.core = $(element).data('lightGallery');

        this.core.s = $.extend({}, defaults, this.core.s);

        if (this.core.s.zoom && this.core.doCss()) {
            this.init();

            // Store the zoomable timeout value just to clear it while closing
            this.zoomabletimeout = false;

            // Set the initial value center
            this.pageX = $(window).width() / 2;
            this.pageY = ($(window).height() / 2) + $(window).scrollTop();
        }

        return this;
    };

    Zoom.prototype.init = function() {

        var _this = this;
        var zoomIcons = '<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';

        if (_this.core.s.actualSize) {
            zoomIcons += '<span id="lg-actual-size" class="lg-icon"></span>';
        }

        if (_this.core.s.useLeftForZoom) {
            _this.core.$outer.addClass('lg-use-left-for-zoom');
        } else {
            _this.core.$outer.addClass('lg-use-transition-for-zoom');
        }

        this.core.$outer.find('.lg-toolbar').append(zoomIcons);

        // Add zoomable class
        _this.core.$el.on('onSlideItemLoad.lg.tm.zoom', function(event, index, delay) {

            // delay will be 0 except first time
            var _speed = _this.core.s.enableZoomAfter + delay;

            // set _speed value 0 if gallery opened from direct url and if it is first slide
            if ($('body').hasClass('lg-from-hash') && delay) {

                // will execute only once
                _speed = 0;
            } else {

                // Remove lg-from-hash to enable starting animation.
                $('body').removeClass('lg-from-hash');
            }

            _this.zoomabletimeout = setTimeout(function() {
                _this.core.$slide.eq(index).addClass('lg-zoomable');
            }, _speed + 30);
        });

        var scale = 1;
        /**
         * @desc Image zoom
         * Translate the wrap and scale the image to get better user experience
         *
         * @param {String} scaleVal - Zoom decrement/increment value
         */
        var zoom = function(scaleVal) {

            var $image = _this.core.$outer.find('.lg-current .lg-image');
            var _x;
            var _y;

            // Find offset manually to avoid issue after zoom
            var offsetX = ($(window).width() - $image.prop('offsetWidth')) / 2;
            var offsetY = (($(window).height() - $image.prop('offsetHeight')) / 2) + $(window).scrollTop();

            _x = _this.pageX - offsetX;
            _y = _this.pageY - offsetY;

            var x = (scaleVal - 1) * (_x);
            var y = (scaleVal - 1) * (_y);

            $image.css('transform', 'scale3d(' + scaleVal + ', ' + scaleVal + ', 1)').attr('data-scale', scaleVal);

            if (_this.core.s.useLeftForZoom) {
                $image.parent().css({
                    left: -x + 'px',
                    top: -y + 'px'
                }).attr('data-x', x).attr('data-y', y);
            } else {
                $image.parent().css('transform', 'translate3d(-' + x + 'px, -' + y + 'px, 0)').attr('data-x', x).attr('data-y', y);
            }
        };

        var callScale = function() {
            if (scale > 1) {
                _this.core.$outer.addClass('lg-zoomed');
            } else {
                _this.resetZoom();
            }

            if (scale < 1) {
                scale = 1;
            }

            zoom(scale);
        };

        var actualSize = function(event, $image, index, fromIcon) {
            var w = $image.prop('offsetWidth');
            var nw;
            if (_this.core.s.dynamic) {
                nw = _this.core.s.dynamicEl[index].width || $image[0].naturalWidth || w;
            } else {
                nw = _this.core.$items.eq(index).attr('data-width') || $image[0].naturalWidth || w;
            }

            var _scale;

            if (_this.core.$outer.hasClass('lg-zoomed')) {
                scale = 1;
            } else {
                if (nw > w) {
                    _scale = nw / w;
                    scale = _scale || 2;
                }
            }

            if (fromIcon) {
                _this.pageX = $(window).width() / 2;
                _this.pageY = ($(window).height() / 2) + $(window).scrollTop();
            } else {
                _this.pageX = event.pageX || event.originalEvent.targetTouches[0].pageX;
                _this.pageY = event.pageY || event.originalEvent.targetTouches[0].pageY;
            }

            callScale();
            setTimeout(function() {
                _this.core.$outer.removeClass('lg-grabbing').addClass('lg-grab');
            }, 10);
        };

        var tapped = false;

        // event triggered after appending slide content
        _this.core.$el.on('onAferAppendSlide.lg.tm.zoom', function(event, index) {

            // Get the current element
            var $image = _this.core.$slide.eq(index).find('.lg-image');

            $image.on('dblclick', function(event) {
                actualSize(event, $image, index);
            });

            $image.on('touchstart', function(event) {
                if (!tapped) {
                    tapped = setTimeout(function() {
                        tapped = null;
                    }, 300);
                } else {
                    clearTimeout(tapped);
                    tapped = null;
                    actualSize(event, $image, index);
                }

                event.preventDefault();
            });

        });

        // Update zoom on resize and orientationchange
        $(window).on('resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom', function() {
            _this.pageX = $(window).width() / 2;
            _this.pageY = ($(window).height() / 2) + $(window).scrollTop();
            zoom(scale);
        });

        $('#lg-zoom-out').on('click.lg', function() {
            if (_this.core.$outer.find('.lg-current .lg-image').length) {
                scale -= _this.core.s.scale;
                callScale();
            }
        });

        $('#lg-zoom-in').on('click.lg', function() {
            if (_this.core.$outer.find('.lg-current .lg-image').length) {
                scale += _this.core.s.scale;
                callScale();
            }
        });

        $('#lg-actual-size').on('click.lg', function(event) {
            actualSize(event, _this.core.$slide.eq(_this.core.index).find('.lg-image'), _this.core.index, true);
        });

        // Reset zoom on slide change
        _this.core.$el.on('onBeforeSlide.lg.tm', function() {
            scale = 1;
            _this.resetZoom();
        });

        // Drag option after zoom
        _this.zoomDrag();

        _this.zoomSwipe();

    };

    // Reset zoom effect
    Zoom.prototype.resetZoom = function() {
        this.core.$outer.removeClass('lg-zoomed');
        this.core.$slide.find('.lg-img-wrap').removeAttr('style data-x data-y');
        this.core.$slide.find('.lg-image').removeAttr('style data-scale');

        // Reset pagx pagy values to center
        this.pageX = $(window).width() / 2;
        this.pageY = ($(window).height() / 2) + $(window).scrollTop();
    };

    Zoom.prototype.zoomSwipe = function() {
        var _this = this;
        var startCoords = {};
        var endCoords = {};
        var isMoved = false;

        // Allow x direction drag
        var allowX = false;

        // Allow Y direction drag
        var allowY = false;

        _this.core.$slide.on('touchstart.lg', function(e) {

            if (_this.core.$outer.hasClass('lg-zoomed')) {
                var $image = _this.core.$slide.eq(_this.core.index).find('.lg-object');

                allowY = $image.prop('offsetHeight') * $image.attr('data-scale') > _this.core.$outer.find('.lg').height();
                allowX = $image.prop('offsetWidth') * $image.attr('data-scale') > _this.core.$outer.find('.lg').width();
                if ((allowX || allowY)) {
                    e.preventDefault();
                    startCoords = {
                        x: e.originalEvent.targetTouches[0].pageX,
                        y: e.originalEvent.targetTouches[0].pageY
                    };
                }
            }

        });

        _this.core.$slide.on('touchmove.lg', function(e) {

            if (_this.core.$outer.hasClass('lg-zoomed')) {

                var _$el = _this.core.$slide.eq(_this.core.index).find('.lg-img-wrap');
                var distanceX;
                var distanceY;

                e.preventDefault();
                isMoved = true;

                endCoords = {
                    x: e.originalEvent.targetTouches[0].pageX,
                    y: e.originalEvent.targetTouches[0].pageY
                };

                // reset opacity and transition duration
                _this.core.$outer.addClass('lg-zoom-dragging');

                if (allowY) {
                    distanceY = (-Math.abs(_$el.attr('data-y'))) + (endCoords.y - startCoords.y);
                } else {
                    distanceY = -Math.abs(_$el.attr('data-y'));
                }

                if (allowX) {
                    distanceX = (-Math.abs(_$el.attr('data-x'))) + (endCoords.x - startCoords.x);
                } else {
                    distanceX = -Math.abs(_$el.attr('data-x'));
                }

                if ((Math.abs(endCoords.x - startCoords.x) > 15) || (Math.abs(endCoords.y - startCoords.y) > 15)) {

                    if (_this.core.s.useLeftForZoom) {
                        _$el.css({
                            left: distanceX + 'px',
                            top: distanceY + 'px'
                        });
                    } else {
                        _$el.css('transform', 'translate3d(' + distanceX + 'px, ' + distanceY + 'px, 0)');
                    }
                }

            }

        });

        _this.core.$slide.on('touchend.lg', function() {
            if (_this.core.$outer.hasClass('lg-zoomed')) {
                if (isMoved) {
                    isMoved = false;
                    _this.core.$outer.removeClass('lg-zoom-dragging');
                    _this.touchendZoom(startCoords, endCoords, allowX, allowY);

                }
            }
        });

    };

    Zoom.prototype.zoomDrag = function() {

        var _this = this;
        var startCoords = {};
        var endCoords = {};
        var isDraging = false;
        var isMoved = false;

        // Allow x direction drag
        var allowX = false;

        // Allow Y direction drag
        var allowY = false;

        _this.core.$slide.on('mousedown.lg.zoom', function(e) {

            // execute only on .lg-object
            var $image = _this.core.$slide.eq(_this.core.index).find('.lg-object');

            allowY = $image.prop('offsetHeight') * $image.attr('data-scale') > _this.core.$outer.find('.lg').height();
            allowX = $image.prop('offsetWidth') * $image.attr('data-scale') > _this.core.$outer.find('.lg').width();

            if (_this.core.$outer.hasClass('lg-zoomed')) {
                if ($(e.target).hasClass('lg-object') && (allowX || allowY)) {
                    e.preventDefault();
                    startCoords = {
                        x: e.pageX,
                        y: e.pageY
                    };

                    isDraging = true;

                    // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
                    _this.core.$outer.scrollLeft += 1;
                    _this.core.$outer.scrollLeft -= 1;

                    _this.core.$outer.removeClass('lg-grab').addClass('lg-grabbing');
                }
            }
        });

        $(window).on('mousemove.lg.zoom', function(e) {
            if (isDraging) {
                var _$el = _this.core.$slide.eq(_this.core.index).find('.lg-img-wrap');
                var distanceX;
                var distanceY;

                isMoved = true;
                endCoords = {
                    x: e.pageX,
                    y: e.pageY
                };

                // reset opacity and transition duration
                _this.core.$outer.addClass('lg-zoom-dragging');

                if (allowY) {
                    distanceY = (-Math.abs(_$el.attr('data-y'))) + (endCoords.y - startCoords.y);
                } else {
                    distanceY = -Math.abs(_$el.attr('data-y'));
                }

                if (allowX) {
                    distanceX = (-Math.abs(_$el.attr('data-x'))) + (endCoords.x - startCoords.x);
                } else {
                    distanceX = -Math.abs(_$el.attr('data-x'));
                }

                if (_this.core.s.useLeftForZoom) {
                    _$el.css({
                        left: distanceX + 'px',
                        top: distanceY + 'px'
                    });
                } else {
                    _$el.css('transform', 'translate3d(' + distanceX + 'px, ' + distanceY + 'px, 0)');
                }
            }
        });

        $(window).on('mouseup.lg.zoom', function(e) {

            if (isDraging) {
                isDraging = false;
                _this.core.$outer.removeClass('lg-zoom-dragging');

                // Fix for chrome mouse move on click
                if (isMoved && ((startCoords.x !== endCoords.x) || (startCoords.y !== endCoords.y))) {
                    endCoords = {
                        x: e.pageX,
                        y: e.pageY
                    };
                    _this.touchendZoom(startCoords, endCoords, allowX, allowY);

                }

                isMoved = false;
            }

            _this.core.$outer.removeClass('lg-grabbing').addClass('lg-grab');

        });
    };

    Zoom.prototype.touchendZoom = function(startCoords, endCoords, allowX, allowY) {

        var _this = this;
        var _$el = _this.core.$slide.eq(_this.core.index).find('.lg-img-wrap');
        var $image = _this.core.$slide.eq(_this.core.index).find('.lg-object');
        var distanceX = (-Math.abs(_$el.attr('data-x'))) + (endCoords.x - startCoords.x);
        var distanceY = (-Math.abs(_$el.attr('data-y'))) + (endCoords.y - startCoords.y);
        var minY = (_this.core.$outer.find('.lg').height() - $image.prop('offsetHeight')) / 2;
        var maxY = Math.abs(($image.prop('offsetHeight') * Math.abs($image.attr('data-scale'))) - _this.core.$outer.find('.lg').height() + minY);
        var minX = (_this.core.$outer.find('.lg').width() - $image.prop('offsetWidth')) / 2;
        var maxX = Math.abs(($image.prop('offsetWidth') * Math.abs($image.attr('data-scale'))) - _this.core.$outer.find('.lg').width() + minX);

        if ((Math.abs(endCoords.x - startCoords.x) > 15) || (Math.abs(endCoords.y - startCoords.y) > 15)) {
            if (allowY) {
                if (distanceY <= -maxY) {
                    distanceY = -maxY;
                } else if (distanceY >= -minY) {
                    distanceY = -minY;
                }
            }

            if (allowX) {
                if (distanceX <= -maxX) {
                    distanceX = -maxX;
                } else if (distanceX >= -minX) {
                    distanceX = -minX;
                }
            }

            if (allowY) {
                _$el.attr('data-y', Math.abs(distanceY));
            } else {
                distanceY = -Math.abs(_$el.attr('data-y'));
            }

            if (allowX) {
                _$el.attr('data-x', Math.abs(distanceX));
            } else {
                distanceX = -Math.abs(_$el.attr('data-x'));
            }

            if (_this.core.s.useLeftForZoom) {
                _$el.css({
                    left: distanceX + 'px',
                    top: distanceY + 'px'
                });
            } else {
                _$el.css('transform', 'translate3d(' + distanceX + 'px, ' + distanceY + 'px, 0)');
            }

        }
    };

    Zoom.prototype.destroy = function() {

        var _this = this;

        // Unbind all events added by lightGallery zoom plugin
        _this.core.$el.off('.lg.zoom');
        $(window).off('.lg.zoom');
        _this.core.$slide.off('.lg.zoom');
        _this.core.$el.off('.lg.tm.zoom');
        _this.resetZoom();
        clearTimeout(_this.zoomabletimeout);
        _this.zoomabletimeout = false;
    };

    $.fn.lightGallery.modules.zoom = Zoom;

})();


}));


/***/ }),

/***/ "./node_modules/lightgallery/dist/fonts/lg.eot":
/*!*****************************************************!*\
  !*** ./node_modules/lightgallery/dist/fonts/lg.eot ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/fonts/lg.eot";

/***/ }),

/***/ "./node_modules/lightgallery/dist/fonts/lg.eot?n1z373":
/*!************************************************************!*\
  !*** ./node_modules/lightgallery/dist/fonts/lg.eot?n1z373 ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/fonts/lg.eot";

/***/ }),

/***/ "./node_modules/lightgallery/dist/fonts/lg.svg?n1z373":
/*!************************************************************!*\
  !*** ./node_modules/lightgallery/dist/fonts/lg.svg?n1z373 ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/fonts/lg.svg";

/***/ }),

/***/ "./node_modules/lightgallery/dist/fonts/lg.ttf?n1z373":
/*!************************************************************!*\
  !*** ./node_modules/lightgallery/dist/fonts/lg.ttf?n1z373 ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/fonts/lg.ttf";

/***/ }),

/***/ "./node_modules/lightgallery/dist/fonts/lg.woff?n1z373":
/*!*************************************************************!*\
  !*** ./node_modules/lightgallery/dist/fonts/lg.woff?n1z373 ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/fonts/lg.woff";

/***/ }),

/***/ "./node_modules/lightgallery/dist/img/loading.gif":
/*!********************************************************!*\
  !*** ./node_modules/lightgallery/dist/img/loading.gif ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/img/loading.gif";

/***/ }),

/***/ "./node_modules/lightgallery/dist/img/video-play.png":
/*!***********************************************************!*\
  !*** ./node_modules/lightgallery/dist/img/video-play.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/img/video-play.png";

/***/ }),

/***/ "./node_modules/lightgallery/dist/img/vimeo-play.png":
/*!***********************************************************!*\
  !*** ./node_modules/lightgallery/dist/img/vimeo-play.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/img/vimeo-play.png";

/***/ }),

/***/ "./node_modules/lightgallery/dist/img/youtube-play.png":
/*!*************************************************************!*\
  !*** ./node_modules/lightgallery/dist/img/youtube-play.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/img/youtube-play.png";

/***/ }),

/***/ "./node_modules/lightgallery/dist/js/lightgallery.js":
/*!***********************************************************!*\
  !*** ./node_modules/lightgallery/dist/js/lightgallery.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! lightgallery - v1.6.11 - 2018-05-22
* http://sachinchoolur.github.io/lightGallery/
* Copyright (c) 2018 Sachin N; Licensed GPLv3 */
(function (root, factory) {
  if (true) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (a0) {
      return (factory(a0));
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function ($) {

(function() {
    'use strict';

    var defaults = {

        mode: 'lg-slide',

        // Ex : 'ease'
        cssEasing: 'ease',

        //'for jquery animation'
        easing: 'linear',
        speed: 600,
        height: '100%',
        width: '100%',
        addClass: '',
        startClass: 'lg-start-zoom',
        backdropDuration: 150,
        hideBarsDelay: 6000,

        useLeft: false,

        closable: true,
        loop: true,
        escKey: true,
        keyPress: true,
        controls: true,
        slideEndAnimatoin: true,
        hideControlOnEnd: false,
        mousewheel: true,

        getCaptionFromTitleOrAlt: true,

        // .lg-item || '.lg-sub-html'
        appendSubHtmlTo: '.lg-sub-html',

        subHtmlSelectorRelative: false,

        /**
         * @desc number of preload slides
         * will exicute only after the current slide is fully loaded.
         *
         * @ex you clicked on 4th image and if preload = 1 then 3rd slide and 5th
         * slide will be loaded in the background after the 4th slide is fully loaded..
         * if preload is 2 then 2nd 3rd 5th 6th slides will be preloaded.. ... ...
         *
         */
        preload: 1,
        showAfterLoad: true,
        selector: '',
        selectWithin: '',
        nextHtml: '',
        prevHtml: '',

        // 0, 1
        index: false,

        iframeMaxWidth: '100%',

        download: true,
        counter: true,
        appendCounterTo: '.lg-toolbar',

        swipeThreshold: 50,
        enableSwipe: true,
        enableDrag: true,

        dynamic: false,
        dynamicEl: [],
        galleryId: 1
    };

    function Plugin(element, options) {

        // Current lightGallery element
        this.el = element;

        // Current jquery element
        this.$el = $(element);

        // lightGallery settings
        this.s = $.extend({}, defaults, options);

        // When using dynamic mode, ensure dynamicEl is an array
        if (this.s.dynamic && this.s.dynamicEl !== 'undefined' && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) {
            throw ('When using dynamic mode, you must also define dynamicEl as an Array.');
        }

        // lightGallery modules
        this.modules = {};

        // false when lightgallery complete first slide;
        this.lGalleryOn = false;

        this.lgBusy = false;

        // Timeout function for hiding controls;
        this.hideBartimeout = false;

        // To determine browser supports for touch events;
        this.isTouch = ('ontouchstart' in document.documentElement);

        // Disable hideControlOnEnd if sildeEndAnimation is true
        if (this.s.slideEndAnimatoin) {
            this.s.hideControlOnEnd = false;
        }

        // Gallery items
        if (this.s.dynamic) {
            this.$items = this.s.dynamicEl;
        } else {
            if (this.s.selector === 'this') {
                this.$items = this.$el;
            } else if (this.s.selector !== '') {
                if (this.s.selectWithin) {
                    this.$items = $(this.s.selectWithin).find(this.s.selector);
                } else {
                    this.$items = this.$el.find($(this.s.selector));
                }
            } else {
                this.$items = this.$el.children();
            }
        }

        // .lg-item
        this.$slide = '';

        // .lg-outer
        this.$outer = '';

        this.init();

        return this;
    }

    Plugin.prototype.init = function() {

        var _this = this;

        // s.preload should not be more than $item.length
        if (_this.s.preload > _this.$items.length) {
            _this.s.preload = _this.$items.length;
        }

        // if dynamic option is enabled execute immediately
        var _hash = window.location.hash;
        if (_hash.indexOf('lg=' + this.s.galleryId) > 0) {

            _this.index = parseInt(_hash.split('&slide=')[1], 10);

            $('body').addClass('lg-from-hash');
            if (!$('body').hasClass('lg-on')) {
                setTimeout(function() {
                    _this.build(_this.index);
                });

                $('body').addClass('lg-on');
            }
        }

        if (_this.s.dynamic) {

            _this.$el.trigger('onBeforeOpen.lg');

            _this.index = _this.s.index || 0;

            // prevent accidental double execution
            if (!$('body').hasClass('lg-on')) {
                setTimeout(function() {
                    _this.build(_this.index);
                    $('body').addClass('lg-on');
                });
            }
        } else {

            // Using different namespace for click because click event should not unbind if selector is same object('this')
            _this.$items.on('click.lgcustom', function(event) {

                // For IE8
                try {
                    event.preventDefault();
                    event.preventDefault();
                } catch (er) {
                    event.returnValue = false;
                }

                _this.$el.trigger('onBeforeOpen.lg');

                _this.index = _this.s.index || _this.$items.index(this);

                // prevent accidental double execution
                if (!$('body').hasClass('lg-on')) {
                    _this.build(_this.index);
                    $('body').addClass('lg-on');
                }
            });
        }

    };

    Plugin.prototype.build = function(index) {

        var _this = this;

        _this.structure();

        // module constructor
        $.each($.fn.lightGallery.modules, function(key) {
            _this.modules[key] = new $.fn.lightGallery.modules[key](_this.el);
        });

        // initiate slide function
        _this.slide(index, false, false, false);

        if (_this.s.keyPress) {
            _this.keyPress();
        }

        if (_this.$items.length > 1) {

            _this.arrow();

            setTimeout(function() {
                _this.enableDrag();
                _this.enableSwipe();
            }, 50);

            if (_this.s.mousewheel) {
                _this.mousewheel();
            }
        } else {
            _this.$slide.on('click.lg', function() {
                _this.$el.trigger('onSlideClick.lg');
            });
        }

        _this.counter();

        _this.closeGallery();

        _this.$el.trigger('onAfterOpen.lg');

        // Hide controllers if mouse doesn't move for some period
        _this.$outer.on('mousemove.lg click.lg touchstart.lg', function() {

            _this.$outer.removeClass('lg-hide-items');

            clearTimeout(_this.hideBartimeout);

            // Timeout will be cleared on each slide movement also
            _this.hideBartimeout = setTimeout(function() {
                _this.$outer.addClass('lg-hide-items');
            }, _this.s.hideBarsDelay);

        });

        _this.$outer.trigger('mousemove.lg');

    };

    Plugin.prototype.structure = function() {
        var list = '';
        var controls = '';
        var i = 0;
        var subHtmlCont = '';
        var template;
        var _this = this;

        $('body').append('<div class="lg-backdrop"></div>');
        $('.lg-backdrop').css('transition-duration', this.s.backdropDuration + 'ms');

        // Create gallery items
        for (i = 0; i < this.$items.length; i++) {
            list += '<div class="lg-item"></div>';
        }

        // Create controlls
        if (this.s.controls && this.$items.length > 1) {
            controls = '<div class="lg-actions">' +
                '<button class="lg-prev lg-icon">' + this.s.prevHtml + '</button>' +
                '<button class="lg-next lg-icon">' + this.s.nextHtml + '</button>' +
                '</div>';
        }

        if (this.s.appendSubHtmlTo === '.lg-sub-html') {
            subHtmlCont = '<div class="lg-sub-html"></div>';
        }

        template = '<div class="lg-outer ' + this.s.addClass + ' ' + this.s.startClass + '">' +
            '<div class="lg" style="width:' + this.s.width + '; height:' + this.s.height + '">' +
            '<div class="lg-inner">' + list + '</div>' +
            '<div class="lg-toolbar lg-group">' +
            '<span class="lg-close lg-icon"></span>' +
            '</div>' +
            controls +
            subHtmlCont +
            '</div>' +
            '</div>';

        $('body').append(template);
        this.$outer = $('.lg-outer');
        this.$slide = this.$outer.find('.lg-item');

        if (this.s.useLeft) {
            this.$outer.addClass('lg-use-left');

            // Set mode lg-slide if use left is true;
            this.s.mode = 'lg-slide';
        } else {
            this.$outer.addClass('lg-use-css3');
        }

        // For fixed height gallery
        _this.setTop();
        $(window).on('resize.lg orientationchange.lg', function() {
            setTimeout(function() {
                _this.setTop();
            }, 100);
        });

        // add class lg-current to remove initial transition
        this.$slide.eq(this.index).addClass('lg-current');

        // add Class for css support and transition mode
        if (this.doCss()) {
            this.$outer.addClass('lg-css3');
        } else {
            this.$outer.addClass('lg-css');

            // Set speed 0 because no animation will happen if browser doesn't support css3
            this.s.speed = 0;
        }

        this.$outer.addClass(this.s.mode);

        if (this.s.enableDrag && this.$items.length > 1) {
            this.$outer.addClass('lg-grab');
        }

        if (this.s.showAfterLoad) {
            this.$outer.addClass('lg-show-after-load');
        }

        if (this.doCss()) {
            var $inner = this.$outer.find('.lg-inner');
            $inner.css('transition-timing-function', this.s.cssEasing);
            $inner.css('transition-duration', this.s.speed + 'ms');
        }

        setTimeout(function() {
            $('.lg-backdrop').addClass('in');
        });

        setTimeout(function() {
            _this.$outer.addClass('lg-visible');
        }, this.s.backdropDuration);

        if (this.s.download) {
            this.$outer.find('.lg-toolbar').append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>');
        }

        // Store the current scroll top value to scroll back after closing the gallery..
        this.prevScrollTop = $(window).scrollTop();

    };

    // For fixed height gallery
    Plugin.prototype.setTop = function() {
        if (this.s.height !== '100%') {
            var wH = $(window).height();
            var top = (wH - parseInt(this.s.height, 10)) / 2;
            var $lGallery = this.$outer.find('.lg');
            if (wH >= parseInt(this.s.height, 10)) {
                $lGallery.css('top', top + 'px');
            } else {
                $lGallery.css('top', '0px');
            }
        }
    };

    // Find css3 support
    Plugin.prototype.doCss = function() {
        // check for css animation support
        var support = function() {
            var transition = ['transition', 'MozTransition', 'WebkitTransition', 'OTransition', 'msTransition', 'KhtmlTransition'];
            var root = document.documentElement;
            var i = 0;
            for (i = 0; i < transition.length; i++) {
                if (transition[i] in root.style) {
                    return true;
                }
            }
        };

        if (support()) {
            return true;
        }

        return false;
    };

    /**
     *  @desc Check the given src is video
     *  @param {String} src
     *  @return {Object} video type
     *  Ex:{ youtube  :  ["//www.youtube.com/watch?v=c0asJgSyxcY", "c0asJgSyxcY"] }
     */
    Plugin.prototype.isVideo = function(src, index) {

        var html;
        if (this.s.dynamic) {
            html = this.s.dynamicEl[index].html;
        } else {
            html = this.$items.eq(index).attr('data-html');
        }

        if (!src) {
            if(html) {
                return {
                    html5: true
                };
            } else {
                console.error('lightGallery :- data-src is not pvovided on slide item ' + (index + 1) + '. Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html');
                return false;
            }
        }

        var youtube = src.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i);
        var vimeo = src.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i);
        var dailymotion = src.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i);
        var vk = src.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);

        if (youtube) {
            return {
                youtube: youtube
            };
        } else if (vimeo) {
            return {
                vimeo: vimeo
            };
        } else if (dailymotion) {
            return {
                dailymotion: dailymotion
            };
        } else if (vk) {
            return {
                vk: vk
            };
        }
    };

    /**
     *  @desc Create image counter
     *  Ex: 1/10
     */
    Plugin.prototype.counter = function() {
        if (this.s.counter) {
            $(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.$items.length + '</span></div>');
        }
    };

    /**
     *  @desc add sub-html into the slide
     *  @param {Number} index - index of the slide
     */
    Plugin.prototype.addHtml = function(index) {
        var subHtml = null;
        var subHtmlUrl;
        var $currentEle;
        if (this.s.dynamic) {
            if (this.s.dynamicEl[index].subHtmlUrl) {
                subHtmlUrl = this.s.dynamicEl[index].subHtmlUrl;
            } else {
                subHtml = this.s.dynamicEl[index].subHtml;
            }
        } else {
            $currentEle = this.$items.eq(index);
            if ($currentEle.attr('data-sub-html-url')) {
                subHtmlUrl = $currentEle.attr('data-sub-html-url');
            } else {
                subHtml = $currentEle.attr('data-sub-html');
                if (this.s.getCaptionFromTitleOrAlt && !subHtml) {
                    subHtml = $currentEle.attr('title') || $currentEle.find('img').first().attr('alt');
                }
            }
        }

        if (!subHtmlUrl) {
            if (typeof subHtml !== 'undefined' && subHtml !== null) {

                // get first letter of subhtml
                // if first letter starts with . or # get the html form the jQuery object
                var fL = subHtml.substring(0, 1);
                if (fL === '.' || fL === '#') {
                    if (this.s.subHtmlSelectorRelative && !this.s.dynamic) {
                        subHtml = $currentEle.find(subHtml).html();
                    } else {
                        subHtml = $(subHtml).html();
                    }
                }
            } else {
                subHtml = '';
            }
        }

        if (this.s.appendSubHtmlTo === '.lg-sub-html') {

            if (subHtmlUrl) {
                this.$outer.find(this.s.appendSubHtmlTo).load(subHtmlUrl);
            } else {
                this.$outer.find(this.s.appendSubHtmlTo).html(subHtml);
            }

        } else {

            if (subHtmlUrl) {
                this.$slide.eq(index).load(subHtmlUrl);
            } else {
                this.$slide.eq(index).append(subHtml);
            }
        }

        // Add lg-empty-html class if title doesn't exist
        if (typeof subHtml !== 'undefined' && subHtml !== null) {
            if (subHtml === '') {
                this.$outer.find(this.s.appendSubHtmlTo).addClass('lg-empty-html');
            } else {
                this.$outer.find(this.s.appendSubHtmlTo).removeClass('lg-empty-html');
            }
        }

        this.$el.trigger('onAfterAppendSubHtml.lg', [index]);
    };

    /**
     *  @desc Preload slides
     *  @param {Number} index - index of the slide
     */
    Plugin.prototype.preload = function(index) {
        var i = 1;
        var j = 1;
        for (i = 1; i <= this.s.preload; i++) {
            if (i >= this.$items.length - index) {
                break;
            }

            this.loadContent(index + i, false, 0);
        }

        for (j = 1; j <= this.s.preload; j++) {
            if (index - j < 0) {
                break;
            }

            this.loadContent(index - j, false, 0);
        }
    };

    /**
     *  @desc Load slide content into slide.
     *  @param {Number} index - index of the slide.
     *  @param {Boolean} rec - if true call loadcontent() function again.
     *  @param {Boolean} delay - delay for adding complete class. it is 0 except first time.
     */
    Plugin.prototype.loadContent = function(index, rec, delay) {

        var _this = this;
        var _hasPoster = false;
        var _$img;
        var _src;
        var _poster;
        var _srcset;
        var _sizes;
        var _html;
        var getResponsiveSrc = function(srcItms) {
            var rsWidth = [];
            var rsSrc = [];
            for (var i = 0; i < srcItms.length; i++) {
                var __src = srcItms[i].split(' ');

                // Manage empty space
                if (__src[0] === '') {
                    __src.splice(0, 1);
                }

                rsSrc.push(__src[0]);
                rsWidth.push(__src[1]);
            }

            var wWidth = $(window).width();
            for (var j = 0; j < rsWidth.length; j++) {
                if (parseInt(rsWidth[j], 10) > wWidth) {
                    _src = rsSrc[j];
                    break;
                }
            }
        };

        if (_this.s.dynamic) {

            if (_this.s.dynamicEl[index].poster) {
                _hasPoster = true;
                _poster = _this.s.dynamicEl[index].poster;
            }

            _html = _this.s.dynamicEl[index].html;
            _src = _this.s.dynamicEl[index].src;

            if (_this.s.dynamicEl[index].responsive) {
                var srcDyItms = _this.s.dynamicEl[index].responsive.split(',');
                getResponsiveSrc(srcDyItms);
            }

            _srcset = _this.s.dynamicEl[index].srcset;
            _sizes = _this.s.dynamicEl[index].sizes;

        } else {

            if (_this.$items.eq(index).attr('data-poster')) {
                _hasPoster = true;
                _poster = _this.$items.eq(index).attr('data-poster');
            }

            _html = _this.$items.eq(index).attr('data-html');
            _src = _this.$items.eq(index).attr('href') || _this.$items.eq(index).attr('data-src');

            if (_this.$items.eq(index).attr('data-responsive')) {
                var srcItms = _this.$items.eq(index).attr('data-responsive').split(',');
                getResponsiveSrc(srcItms);
            }

            _srcset = _this.$items.eq(index).attr('data-srcset');
            _sizes = _this.$items.eq(index).attr('data-sizes');

        }

        //if (_src || _srcset || _sizes || _poster) {

        var iframe = false;
        if (_this.s.dynamic) {
            if (_this.s.dynamicEl[index].iframe) {
                iframe = true;
            }
        } else {
            if (_this.$items.eq(index).attr('data-iframe') === 'true') {
                iframe = true;
            }
        }

        var _isVideo = _this.isVideo(_src, index);
        if (!_this.$slide.eq(index).hasClass('lg-loaded')) {
            if (iframe) {
                _this.$slide.eq(index).prepend('<div class="lg-video-cont lg-has-iframe" style="max-width:' + _this.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + _src + '"  allowfullscreen="true"></iframe></div></div>');
            } else if (_hasPoster) {
                var videoClass = '';
                if (_isVideo && _isVideo.youtube) {
                    videoClass = 'lg-has-youtube';
                } else if (_isVideo && _isVideo.vimeo) {
                    videoClass = 'lg-has-vimeo';
                } else {
                    videoClass = 'lg-has-html5';
                }

                _this.$slide.eq(index).prepend('<div class="lg-video-cont ' + videoClass + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + _poster + '" /></div></div>');

            } else if (_isVideo) {
                _this.$slide.eq(index).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>');
                _this.$el.trigger('hasVideo.lg', [index, _src, _html]);
            } else {
                _this.$slide.eq(index).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + _src + '" /></div>');
            }

            _this.$el.trigger('onAferAppendSlide.lg', [index]);

            _$img = _this.$slide.eq(index).find('.lg-object');
            if (_sizes) {
                _$img.attr('sizes', _sizes);
            }

            if (_srcset) {
                _$img.attr('srcset', _srcset);
                try {
                    picturefill({
                        elements: [_$img[0]]
                    });
                } catch (e) {
                    console.warn('lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.');
                }
            }

            if (this.s.appendSubHtmlTo !== '.lg-sub-html') {
                _this.addHtml(index);
            }

            _this.$slide.eq(index).addClass('lg-loaded');
        }

        _this.$slide.eq(index).find('.lg-object').on('load.lg error.lg', function() {

            // For first time add some delay for displaying the start animation.
            var _speed = 0;

            // Do not change the delay value because it is required for zoom plugin.
            // If gallery opened from direct url (hash) speed value should be 0
            if (delay && !$('body').hasClass('lg-from-hash')) {
                _speed = delay;
            }

            setTimeout(function() {
                _this.$slide.eq(index).addClass('lg-complete');
                _this.$el.trigger('onSlideItemLoad.lg', [index, delay || 0]);
            }, _speed);

        });

        // @todo check load state for html5 videos
        if (_isVideo && _isVideo.html5 && !_hasPoster) {
            _this.$slide.eq(index).addClass('lg-complete');
        }

        if (rec === true) {
            if (!_this.$slide.eq(index).hasClass('lg-complete')) {
                _this.$slide.eq(index).find('.lg-object').on('load.lg error.lg', function() {
                    _this.preload(index);
                });
            } else {
                _this.preload(index);
            }
        }

        //}
    };

    /**
    *   @desc slide function for lightgallery
        ** Slide() gets call on start
        ** ** Set lg.on true once slide() function gets called.
        ** Call loadContent() on slide() function inside setTimeout
        ** ** On first slide we do not want any animation like slide of fade
        ** ** So on first slide( if lg.on if false that is first slide) loadContent() should start loading immediately
        ** ** Else loadContent() should wait for the transition to complete.
        ** ** So set timeout s.speed + 50
    <=> ** loadContent() will load slide content in to the particular slide
        ** ** It has recursion (rec) parameter. if rec === true loadContent() will call preload() function.
        ** ** preload will execute only when the previous slide is fully loaded (images iframe)
        ** ** avoid simultaneous image load
    <=> ** Preload() will check for s.preload value and call loadContent() again accoring to preload value
        ** loadContent()  <====> Preload();

    *   @param {Number} index - index of the slide
    *   @param {Boolean} fromTouch - true if slide function called via touch event or mouse drag
    *   @param {Boolean} fromThumb - true if slide function called via thumbnail click
    *   @param {String} direction - Direction of the slide(next/prev)
    */
    Plugin.prototype.slide = function(index, fromTouch, fromThumb, direction) {

        var _prevIndex = this.$outer.find('.lg-current').index();
        var _this = this;

        // Prevent if multiple call
        // Required for hsh plugin
        if (_this.lGalleryOn && (_prevIndex === index)) {
            return;
        }

        var _length = this.$slide.length;
        var _time = _this.lGalleryOn ? this.s.speed : 0;

        if (!_this.lgBusy) {

            if (this.s.download) {
                var _src;
                if (_this.s.dynamic) {
                    _src = _this.s.dynamicEl[index].downloadUrl !== false && (_this.s.dynamicEl[index].downloadUrl || _this.s.dynamicEl[index].src);
                } else {
                    _src = _this.$items.eq(index).attr('data-download-url') !== 'false' && (_this.$items.eq(index).attr('data-download-url') || _this.$items.eq(index).attr('href') || _this.$items.eq(index).attr('data-src'));

                }

                if (_src) {
                    $('#lg-download').attr('href', _src);
                    _this.$outer.removeClass('lg-hide-download');
                } else {
                    _this.$outer.addClass('lg-hide-download');
                }
            }

            this.$el.trigger('onBeforeSlide.lg', [_prevIndex, index, fromTouch, fromThumb]);

            _this.lgBusy = true;

            clearTimeout(_this.hideBartimeout);

            // Add title if this.s.appendSubHtmlTo === lg-sub-html
            if (this.s.appendSubHtmlTo === '.lg-sub-html') {

                // wait for slide animation to complete
                setTimeout(function() {
                    _this.addHtml(index);
                }, _time);
            }

            this.arrowDisable(index);

            if (!direction) {
                if (index < _prevIndex) {
                    direction = 'prev';
                } else if (index > _prevIndex) {
                    direction = 'next';
                }
            }

            if (!fromTouch) {

                // remove all transitions
                _this.$outer.addClass('lg-no-trans');

                this.$slide.removeClass('lg-prev-slide lg-next-slide');

                if (direction === 'prev') {

                    //prevslide
                    this.$slide.eq(index).addClass('lg-prev-slide');
                    this.$slide.eq(_prevIndex).addClass('lg-next-slide');
                } else {

                    // next slide
                    this.$slide.eq(index).addClass('lg-next-slide');
                    this.$slide.eq(_prevIndex).addClass('lg-prev-slide');
                }

                // give 50 ms for browser to add/remove class
                setTimeout(function() {
                    _this.$slide.removeClass('lg-current');

                    //_this.$slide.eq(_prevIndex).removeClass('lg-current');
                    _this.$slide.eq(index).addClass('lg-current');

                    // reset all transitions
                    _this.$outer.removeClass('lg-no-trans');
                }, 50);
            } else {

                this.$slide.removeClass('lg-prev-slide lg-current lg-next-slide');
                var touchPrev;
                var touchNext;
                if (_length > 2) {
                    touchPrev = index - 1;
                    touchNext = index + 1;

                    if ((index === 0) && (_prevIndex === _length - 1)) {

                        // next slide
                        touchNext = 0;
                        touchPrev = _length - 1;
                    } else if ((index === _length - 1) && (_prevIndex === 0)) {

                        // prev slide
                        touchNext = 0;
                        touchPrev = _length - 1;
                    }

                } else {
                    touchPrev = 0;
                    touchNext = 1;
                }

                if (direction === 'prev') {
                    _this.$slide.eq(touchNext).addClass('lg-next-slide');
                } else {
                    _this.$slide.eq(touchPrev).addClass('lg-prev-slide');
                }

                _this.$slide.eq(index).addClass('lg-current');
            }

            if (_this.lGalleryOn) {
                setTimeout(function() {
                    _this.loadContent(index, true, 0);
                }, this.s.speed + 50);

                setTimeout(function() {
                    _this.lgBusy = false;
                    _this.$el.trigger('onAfterSlide.lg', [_prevIndex, index, fromTouch, fromThumb]);
                }, this.s.speed);

            } else {
                _this.loadContent(index, true, _this.s.backdropDuration);

                _this.lgBusy = false;
                _this.$el.trigger('onAfterSlide.lg', [_prevIndex, index, fromTouch, fromThumb]);
            }

            _this.lGalleryOn = true;

            if (this.s.counter) {
                $('#lg-counter-current').text(index + 1);
            }

        }
        _this.index = index;

    };

    /**
     *  @desc Go to next slide
     *  @param {Boolean} fromTouch - true if slide function called via touch event
     */
    Plugin.prototype.goToNextSlide = function(fromTouch) {
        var _this = this;
        var _loop = _this.s.loop;
        if (fromTouch && _this.$slide.length < 3) {
            _loop = false;
        }

        if (!_this.lgBusy) {
            if ((_this.index + 1) < _this.$slide.length) {
                _this.index++;
                _this.$el.trigger('onBeforeNextSlide.lg', [_this.index]);
                _this.slide(_this.index, fromTouch, false, 'next');
            } else {
                if (_loop) {
                    _this.index = 0;
                    _this.$el.trigger('onBeforeNextSlide.lg', [_this.index]);
                    _this.slide(_this.index, fromTouch, false, 'next');
                } else if (_this.s.slideEndAnimatoin && !fromTouch) {
                    _this.$outer.addClass('lg-right-end');
                    setTimeout(function() {
                        _this.$outer.removeClass('lg-right-end');
                    }, 400);
                }
            }
        }
    };

    /**
     *  @desc Go to previous slide
     *  @param {Boolean} fromTouch - true if slide function called via touch event
     */
    Plugin.prototype.goToPrevSlide = function(fromTouch) {
        var _this = this;
        var _loop = _this.s.loop;
        if (fromTouch && _this.$slide.length < 3) {
            _loop = false;
        }

        if (!_this.lgBusy) {
            if (_this.index > 0) {
                _this.index--;
                _this.$el.trigger('onBeforePrevSlide.lg', [_this.index, fromTouch]);
                _this.slide(_this.index, fromTouch, false, 'prev');
            } else {
                if (_loop) {
                    _this.index = _this.$items.length - 1;
                    _this.$el.trigger('onBeforePrevSlide.lg', [_this.index, fromTouch]);
                    _this.slide(_this.index, fromTouch, false, 'prev');
                } else if (_this.s.slideEndAnimatoin && !fromTouch) {
                    _this.$outer.addClass('lg-left-end');
                    setTimeout(function() {
                        _this.$outer.removeClass('lg-left-end');
                    }, 400);
                }
            }
        }
    };

    Plugin.prototype.keyPress = function() {
        var _this = this;
        if (this.$items.length > 1) {
            $(window).on('keyup.lg', function(e) {
                if (_this.$items.length > 1) {
                    if (e.keyCode === 37) {
                        e.preventDefault();
                        _this.goToPrevSlide();
                    }

                    if (e.keyCode === 39) {
                        e.preventDefault();
                        _this.goToNextSlide();
                    }
                }
            });
        }

        $(window).on('keydown.lg', function(e) {
            if (_this.s.escKey === true && e.keyCode === 27) {
                e.preventDefault();
                if (!_this.$outer.hasClass('lg-thumb-open')) {
                    _this.destroy();
                } else {
                    _this.$outer.removeClass('lg-thumb-open');
                }
            }
        });
    };

    Plugin.prototype.arrow = function() {
        var _this = this;
        this.$outer.find('.lg-prev').on('click.lg', function() {
            _this.goToPrevSlide();
        });

        this.$outer.find('.lg-next').on('click.lg', function() {
            _this.goToNextSlide();
        });
    };

    Plugin.prototype.arrowDisable = function(index) {

        // Disable arrows if s.hideControlOnEnd is true
        if (!this.s.loop && this.s.hideControlOnEnd) {
            if ((index + 1) < this.$slide.length) {
                this.$outer.find('.lg-next').removeAttr('disabled').removeClass('disabled');
            } else {
                this.$outer.find('.lg-next').attr('disabled', 'disabled').addClass('disabled');
            }

            if (index > 0) {
                this.$outer.find('.lg-prev').removeAttr('disabled').removeClass('disabled');
            } else {
                this.$outer.find('.lg-prev').attr('disabled', 'disabled').addClass('disabled');
            }
        }
    };

    Plugin.prototype.setTranslate = function($el, xValue, yValue) {
        // jQuery supports Automatic CSS prefixing since jQuery 1.8.0
        if (this.s.useLeft) {
            $el.css('left', xValue);
        } else {
            $el.css({
                transform: 'translate3d(' + (xValue) + 'px, ' + yValue + 'px, 0px)'
            });
        }
    };

    Plugin.prototype.touchMove = function(startCoords, endCoords) {

        var distance = endCoords - startCoords;

        if (Math.abs(distance) > 15) {
            // reset opacity and transition duration
            this.$outer.addClass('lg-dragging');

            // move current slide
            this.setTranslate(this.$slide.eq(this.index), distance, 0);

            // move next and prev slide with current slide
            this.setTranslate($('.lg-prev-slide'), -this.$slide.eq(this.index).width() + distance, 0);
            this.setTranslate($('.lg-next-slide'), this.$slide.eq(this.index).width() + distance, 0);
        }
    };

    Plugin.prototype.touchEnd = function(distance) {
        var _this = this;

        // keep slide animation for any mode while dragg/swipe
        if (_this.s.mode !== 'lg-slide') {
            _this.$outer.addClass('lg-slide');
        }

        this.$slide.not('.lg-current, .lg-prev-slide, .lg-next-slide').css('opacity', '0');

        // set transition duration
        setTimeout(function() {
            _this.$outer.removeClass('lg-dragging');
            if ((distance < 0) && (Math.abs(distance) > _this.s.swipeThreshold)) {
                _this.goToNextSlide(true);
            } else if ((distance > 0) && (Math.abs(distance) > _this.s.swipeThreshold)) {
                _this.goToPrevSlide(true);
            } else if (Math.abs(distance) < 5) {

                // Trigger click if distance is less than 5 pix
                _this.$el.trigger('onSlideClick.lg');
            }

            _this.$slide.removeAttr('style');
        });

        // remove slide class once drag/swipe is completed if mode is not slide
        setTimeout(function() {
            if (!_this.$outer.hasClass('lg-dragging') && _this.s.mode !== 'lg-slide') {
                _this.$outer.removeClass('lg-slide');
            }
        }, _this.s.speed + 100);

    };

    Plugin.prototype.enableSwipe = function() {
        var _this = this;
        var startCoords = 0;
        var endCoords = 0;
        var isMoved = false;

        if (_this.s.enableSwipe && _this.doCss()) {

            _this.$slide.on('touchstart.lg', function(e) {
                if (!_this.$outer.hasClass('lg-zoomed') && !_this.lgBusy) {
                    e.preventDefault();
                    _this.manageSwipeClass();
                    startCoords = e.originalEvent.targetTouches[0].pageX;
                }
            });

            _this.$slide.on('touchmove.lg', function(e) {
                if (!_this.$outer.hasClass('lg-zoomed')) {
                    e.preventDefault();
                    endCoords = e.originalEvent.targetTouches[0].pageX;
                    _this.touchMove(startCoords, endCoords);
                    isMoved = true;
                }
            });

            _this.$slide.on('touchend.lg', function() {
                if (!_this.$outer.hasClass('lg-zoomed')) {
                    if (isMoved) {
                        isMoved = false;
                        _this.touchEnd(endCoords - startCoords);
                    } else {
                        _this.$el.trigger('onSlideClick.lg');
                    }
                }
            });
        }

    };

    Plugin.prototype.enableDrag = function() {
        var _this = this;
        var startCoords = 0;
        var endCoords = 0;
        var isDraging = false;
        var isMoved = false;
        if (_this.s.enableDrag && _this.doCss()) {
            _this.$slide.on('mousedown.lg', function(e) {
                if (!_this.$outer.hasClass('lg-zoomed') && !_this.lgBusy && !$(e.target).text().trim()) {
                    e.preventDefault();
                    _this.manageSwipeClass();
                    startCoords = e.pageX;
                    isDraging = true;

                    // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
                    _this.$outer.scrollLeft += 1;
                    _this.$outer.scrollLeft -= 1;

                    // *

                    _this.$outer.removeClass('lg-grab').addClass('lg-grabbing');

                    _this.$el.trigger('onDragstart.lg');
                }
            });

            $(window).on('mousemove.lg', function(e) {
                if (isDraging) {
                    isMoved = true;
                    endCoords = e.pageX;
                    _this.touchMove(startCoords, endCoords);
                    _this.$el.trigger('onDragmove.lg');
                }
            });

            $(window).on('mouseup.lg', function(e) {
                if (isMoved) {
                    isMoved = false;
                    _this.touchEnd(endCoords - startCoords);
                    _this.$el.trigger('onDragend.lg');
                } else if ($(e.target).hasClass('lg-object') || $(e.target).hasClass('lg-video-play')) {
                    _this.$el.trigger('onSlideClick.lg');
                }

                // Prevent execution on click
                if (isDraging) {
                    isDraging = false;
                    _this.$outer.removeClass('lg-grabbing').addClass('lg-grab');
                }
            });

        }
    };

    Plugin.prototype.manageSwipeClass = function() {
        var _touchNext = this.index + 1;
        var _touchPrev = this.index - 1;
        if (this.s.loop && this.$slide.length > 2) {
            if (this.index === 0) {
                _touchPrev = this.$slide.length - 1;
            } else if (this.index === this.$slide.length - 1) {
                _touchNext = 0;
            }
        }

        this.$slide.removeClass('lg-next-slide lg-prev-slide');
        if (_touchPrev > -1) {
            this.$slide.eq(_touchPrev).addClass('lg-prev-slide');
        }

        this.$slide.eq(_touchNext).addClass('lg-next-slide');
    };

    Plugin.prototype.mousewheel = function() {
        var _this = this;
        _this.$outer.on('mousewheel.lg', function(e) {

            if (!e.deltaY) {
                return;
            }

            if (e.deltaY > 0) {
                _this.goToPrevSlide();
            } else {
                _this.goToNextSlide();
            }

            e.preventDefault();
        });

    };

    Plugin.prototype.closeGallery = function() {

        var _this = this;
        var mousedown = false;
        this.$outer.find('.lg-close').on('click.lg', function() {
            _this.destroy();
        });

        if (_this.s.closable) {

            // If you drag the slide and release outside gallery gets close on chrome
            // for preventing this check mousedown and mouseup happened on .lg-item or lg-outer
            _this.$outer.on('mousedown.lg', function(e) {

                if ($(e.target).is('.lg-outer') || $(e.target).is('.lg-item ') || $(e.target).is('.lg-img-wrap')) {
                    mousedown = true;
                } else {
                    mousedown = false;
                }

            });
            
            _this.$outer.on('mousemove.lg', function() {
                mousedown = false;
            });

            _this.$outer.on('mouseup.lg', function(e) {

                if ($(e.target).is('.lg-outer') || $(e.target).is('.lg-item ') || $(e.target).is('.lg-img-wrap') && mousedown) {
                    if (!_this.$outer.hasClass('lg-dragging')) {
                        _this.destroy();
                    }
                }

            });

        }

    };

    Plugin.prototype.destroy = function(d) {

        var _this = this;

        if (!d) {
            _this.$el.trigger('onBeforeClose.lg');
            $(window).scrollTop(_this.prevScrollTop);
        }


        /**
         * if d is false or undefined destroy will only close the gallery
         * plugins instance remains with the element
         *
         * if d is true destroy will completely remove the plugin
         */

        if (d) {
            if (!_this.s.dynamic) {
                // only when not using dynamic mode is $items a jquery collection
                this.$items.off('click.lg click.lgcustom');
            }

            $.removeData(_this.el, 'lightGallery');
        }

        // Unbind all events added by lightGallery
        this.$el.off('.lg.tm');

        // Distroy all lightGallery modules
        $.each($.fn.lightGallery.modules, function(key) {
            if (_this.modules[key]) {
                _this.modules[key].destroy();
            }
        });

        this.lGalleryOn = false;

        clearTimeout(_this.hideBartimeout);
        this.hideBartimeout = false;
        $(window).off('.lg');
        $('body').removeClass('lg-on lg-from-hash');

        if (_this.$outer) {
            _this.$outer.removeClass('lg-visible');
        }

        $('.lg-backdrop').removeClass('in');

        setTimeout(function() {
            if (_this.$outer) {
                _this.$outer.remove();
            }

            $('.lg-backdrop').remove();

            if (!d) {
                _this.$el.trigger('onCloseAfter.lg');
            }

        }, _this.s.backdropDuration + 50);
    };

    $.fn.lightGallery = function(options) {
        return this.each(function() {
            if (!$.data(this, 'lightGallery')) {
                $.data(this, 'lightGallery', new Plugin(this, options));
            } else {
                try {
                    $(this).data('lightGallery').init();
                } catch (err) {
                    console.error('lightGallery has not initiated properly');
                }
            }
        });
    };

    $.fn.lightGallery.modules = {};

})();


}));


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "jquery":
/*!********************************!*\
  !*** external "window.jQuery" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = window.jQuery;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2luaXRpYWxpemUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0eWxlcy5jc3M/NmEyMiIsIndlYnBhY2s6Ly8vLi9hcHAvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGlnaHRnYWxsZXJ5L2Rpc3QvY3NzL2xnLXRyYW5zaXRpb25zLm1pbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpZ2h0Z2FsbGVyeS9kaXN0L2Nzcy9saWdodGdhbGxlcnkubWluLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL3VybC9lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xnLWZ1bGxzY3JlZW4vZGlzdC9sZy1mdWxsc2NyZWVuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sZy10aHVtYm5haWwvZGlzdC9sZy10aHVtYm5haWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xnLXpvb20vZGlzdC9sZy16b29tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saWdodGdhbGxlcnkvZGlzdC9mb250cy9sZy5lb3QiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpZ2h0Z2FsbGVyeS9kaXN0L2ZvbnRzL2xnLmVvdD9lZjUyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saWdodGdhbGxlcnkvZGlzdC9mb250cy9sZy5zdmciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpZ2h0Z2FsbGVyeS9kaXN0L2ZvbnRzL2xnLnR0ZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGlnaHRnYWxsZXJ5L2Rpc3QvZm9udHMvbGcud29mZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGlnaHRnYWxsZXJ5L2Rpc3QvaW1nL2xvYWRpbmcuZ2lmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saWdodGdhbGxlcnkvZGlzdC9pbWcvdmlkZW8tcGxheS5wbmciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpZ2h0Z2FsbGVyeS9kaXN0L2ltZy92aW1lby1wbGF5LnBuZyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGlnaHRnYWxsZXJ5L2Rpc3QvaW1nL3lvdXR1YmUtcGxheS5wbmciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpZ2h0Z2FsbGVyeS9kaXN0L2pzL2xpZ2h0Z2FsbGVyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cualF1ZXJ5XCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7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QVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxDQUFDOztBQUVELENBQUM7Ozs7Ozs7Ozs7OztBQzdkRDtBQUNBO0FBQ0EsOEJBQThCOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUFBO0FBQ0wsR0FBRyxRQU9IO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxpQ0FBaUM7O0FBRWpDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTs7QUFFYixTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTOztBQUVUOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztB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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsT0FBTztBQUN2QixnQkFBZ0IsUUFBUTtBQUN4QixnQkFBZ0IsUUFBUTtBQUN4QixnQkFBZ0IsT0FBTztBQUN2QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBLGFBQWE7O0FBRWI7QUFDQTtBQUNBLGFBQWE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhOztBQUViOztBQUVBOztBQUVBOztBQUVBOztBQUVB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QUN4RkEsK0IiLCJmaWxlIjoianMvcGx1Z2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJzdG9yYWdlL3BsdWdpbnMvbGlnaHRnYWxsZXJ5L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2FwcC9pbml0aWFsaXplLmpzXCIpO1xuIiwicmVxdWlyZSgnbGlnaHRnYWxsZXJ5Jyk7XG5yZXF1aXJlKCdsZy1mdWxsc2NyZWVuJyk7XG5yZXF1aXJlKCdsZy10aHVtYm5haWwnKTtcbnJlcXVpcmUoJ2xnLXpvb20nKTtcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxudmFyIExpZ2h0R2FsbGVyeSA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciBpbWFnZXMgPSBbXTtcblxuICB2YXIgYWRkSW1hZ2UgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIGltYWdlc1tkYXRhWydpbmRleCddXSA9IGRhdGE7XG4gIH07XG5cbiAgdmFyIG9wZW4gPSBmdW5jdGlvbiAoZWxlbSwgaW5kZXgpIHtcbiAgICAkKGVsZW0pLmxpZ2h0R2FsbGVyeSh7XG4gICAgICBoaWRlQmFyc0RlbGF5OiAzMDAwLFxuICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgLy8gY29udHJvbHM6IGZhbHNlLFxuICAgICAgLy8gYXBwZW5kU3ViSHRtbFRvOiAnLmxnLWl0ZW0nLFxuICAgICAgZHluYW1pYzogdHJ1ZSxcbiAgICAgIGR5bmFtaWNFbDogaW1hZ2VzLFxuICAgICAgbW9kZTogJ2xnLWZhZGUnLFxuICAgICAgZG93bmxvYWQ6IHRydWUsXG4gICAgICAvLyBzaGFyZTogZmFsc2UsXG4gICAgICAvLyBoYXNoOiBmYWxzZSxcbiAgICAgIC8vIHBhZ2VyOiBmYWxzZSxcbiAgICAgIC8vIHNlbGVjdG9yOiAnYScsXG4gICAgICB0aHVtYm5haWw6IHRydWUsXG4gICAgICB0b2dnbGVUaHVtYjogdHJ1ZSxcbiAgICAgIHNob3dUaHVtYkJ5RGVmYXVsdDogZmFsc2UsXG4gICAgICB6b29tOiB0cnVlLFxuICAgICAgYWN0dWFsU2l6ZTogZmFsc2VcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGFkZEltYWdlOiBhZGRJbWFnZSxcbiAgICBvcGVuOiBvcGVuXG4gIH07XG59KSgpO1xud2luZG93LkxpZ2h0R2FsbGVyeSA9IExpZ2h0R2FsbGVyeTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gY2xpY2tFdmVudCAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciBpbmRleCA9IHBhcnNlSW50KCQoZXZlbnQudGFyZ2V0KS5hdHRyKCdkYXRhLWluZGV4JyksIDEwKTtcbiAgICBMaWdodEdhbGxlcnkub3BlbihldmVudC50YXJnZXQsIGluZGV4KTtcbiAgfVxuICAkKGZ1bmN0aW9uICgpIHtcbiAgICAkKCcjZ3JpZCBhJykub24oJ2NsaWNrJywgY2xpY2tFdmVudCk7XG5cbiAgICAkKHdpbmRvdykub24oJ2staW5maW5pdGUtbG9hZGVkJywgZnVuY3Rpb24gKGV2ZW50LCBodG1sKSB7XG4gICAgICAkKCcjZ3JpZCBhJykub2ZmKCdjbGljaycsIGNsaWNrRXZlbnQpO1xuICAgICAgJCgnI2dyaWQgYScpLm9uKCdjbGljaycsIGNsaWNrRXZlbnQpO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGVzLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZXMuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZXMuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5leHBvcnRzLmkocmVxdWlyZShcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhbGlnaHRnYWxsZXJ5L2Rpc3QvY3NzL2xpZ2h0Z2FsbGVyeS5taW4uY3NzXCIpLCBcIlwiKTtcbmV4cG9ydHMuaShyZXF1aXJlKFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyFsaWdodGdhbGxlcnkvZGlzdC9jc3MvbGctdHJhbnNpdGlvbnMubWluLmNzc1wiKSwgXCJcIik7XG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5sZy1jc3MzLmxnLXpvb20taW4gLmxnLWl0ZW17b3BhY2l0eTowfS5sZy1jc3MzLmxnLXpvb20taW4gLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwubGctY3NzMy5sZy16b29tLWluIC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLjMsMS4zLDEuMyk7dHJhbnNmb3JtOnNjYWxlM2QoMS4zLDEuMywxLjMpfS5sZy1jc3MzLmxnLXpvb20taW4gLmxnLWl0ZW0ubGctY3VycmVudHstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKTt0cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSk7b3BhY2l0eToxfS5sZy1jc3MzLmxnLXpvb20taW4gLmxnLWl0ZW0ubGctY3VycmVudCwubGctY3NzMy5sZy16b29tLWluIC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsLmxnLWNzczMubGctem9vbS1pbiAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHM7LW1vei10cmFuc2l0aW9uOi1tb3otdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwczstby10cmFuc2l0aW9uOi1vLXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzfS5sZy1jc3MzLmxnLXpvb20taW4tYmlnIC5sZy1pdGVte29wYWNpdHk6MH0ubGctY3NzMy5sZy16b29tLWluLWJpZyAubGctaXRlbS5sZy1uZXh0LXNsaWRlLC5sZy1jc3MzLmxnLXpvb20taW4tYmlnIC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgyLDIsMik7dHJhbnNmb3JtOnNjYWxlM2QoMiwyLDIpfS5sZy1jc3MzLmxnLXpvb20taW4tYmlnIC5sZy1pdGVtLmxnLWN1cnJlbnR7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSk7dHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpO29wYWNpdHk6MX0ubGctY3NzMy5sZy16b29tLWluLWJpZyAubGctaXRlbS5sZy1jdXJyZW50LC5sZy1jc3MzLmxnLXpvb20taW4tYmlnIC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsLmxnLWNzczMubGctem9vbS1pbi1iaWcgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzOy1tb3otdHJhbnNpdGlvbjotbW96LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHM7LW8tdHJhbnNpdGlvbjotby10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzO3RyYW5zaXRpb246dHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwc30ubGctY3NzMy5sZy16b29tLW91dCAubGctaXRlbXtvcGFjaXR5OjB9LmxnLWNzczMubGctem9vbS1vdXQgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwubGctY3NzMy5sZy16b29tLW91dCAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjcsLjcsLjcpO3RyYW5zZm9ybTpzY2FsZTNkKC43LC43LC43KX0ubGctY3NzMy5sZy16b29tLW91dCAubGctaXRlbS5sZy1jdXJyZW50ey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpO3RyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKTtvcGFjaXR5OjF9LmxnLWNzczMubGctem9vbS1vdXQgLmxnLWl0ZW0ubGctY3VycmVudCwubGctY3NzMy5sZy16b29tLW91dCAubGctaXRlbS5sZy1uZXh0LXNsaWRlLC5sZy1jc3MzLmxnLXpvb20tb3V0IC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwczstbW96LXRyYW5zaXRpb246LW1vei10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzOy1vLXRyYW5zaXRpb246LW8tdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHN9LmxnLWNzczMubGctem9vbS1vdXQtYmlnIC5sZy1pdGVte29wYWNpdHk6MH0ubGctY3NzMy5sZy16b29tLW91dC1iaWcgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwubGctY3NzMy5sZy16b29tLW91dC1iaWcgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKTt0cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCl9LmxnLWNzczMubGctem9vbS1vdXQtYmlnIC5sZy1pdGVtLmxnLWN1cnJlbnR7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSk7dHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpO29wYWNpdHk6MX0ubGctY3NzMy5sZy16b29tLW91dC1iaWcgLmxnLWl0ZW0ubGctY3VycmVudCwubGctY3NzMy5sZy16b29tLW91dC1iaWcgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwubGctY3NzMy5sZy16b29tLW91dC1iaWcgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzOy1tb3otdHJhbnNpdGlvbjotbW96LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHM7LW8tdHJhbnNpdGlvbjotby10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzO3RyYW5zaXRpb246dHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwc30ubGctY3NzMy5sZy16b29tLW91dC1pbiAubGctaXRlbXtvcGFjaXR5OjB9LmxnLWNzczMubGctem9vbS1vdXQtaW4gLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKTt0cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCl9LmxnLWNzczMubGctem9vbS1vdXQtaW4gLmxnLWl0ZW0ubGctbmV4dC1zbGlkZXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDIsMiwyKTt0cmFuc2Zvcm06c2NhbGUzZCgyLDIsMil9LmxnLWNzczMubGctem9vbS1vdXQtaW4gLmxnLWl0ZW0ubGctY3VycmVudHstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKTt0cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSk7b3BhY2l0eToxfS5sZy1jc3MzLmxnLXpvb20tb3V0LWluIC5sZy1pdGVtLmxnLWN1cnJlbnQsLmxnLWNzczMubGctem9vbS1vdXQtaW4gLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwubGctY3NzMy5sZy16b29tLW91dC1pbiAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHM7LW1vei10cmFuc2l0aW9uOi1tb3otdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwczstby10cmFuc2l0aW9uOi1vLXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzfS5sZy1jc3MzLmxnLXpvb20taW4tb3V0IC5sZy1pdGVte29wYWNpdHk6MH0ubGctY3NzMy5sZy16b29tLWluLW91dCAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMiwyLDIpO3RyYW5zZm9ybTpzY2FsZTNkKDIsMiwyKX0ubGctY3NzMy5sZy16b29tLWluLW91dCAubGctaXRlbS5sZy1uZXh0LXNsaWRley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApO3RyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKX0ubGctY3NzMy5sZy16b29tLWluLW91dCAubGctaXRlbS5sZy1jdXJyZW50ey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpO3RyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKTtvcGFjaXR5OjF9LmxnLWNzczMubGctem9vbS1pbi1vdXQgLmxnLWl0ZW0ubGctY3VycmVudCwubGctY3NzMy5sZy16b29tLWluLW91dCAubGctaXRlbS5sZy1uZXh0LXNsaWRlLC5sZy1jc3MzLmxnLXpvb20taW4tb3V0IC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwczstbW96LXRyYW5zaXRpb246LW1vei10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzOy1vLXRyYW5zaXRpb246LW8tdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHN9LmxnLWNzczMubGctc29mdC16b29tIC5sZy1pdGVte29wYWNpdHk6MH0ubGctY3NzMy5sZy1zb2Z0LXpvb20gLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEuMSwxLjEsMS4xKTt0cmFuc2Zvcm06c2NhbGUzZCgxLjEsMS4xLDEuMSl9LmxnLWNzczMubGctc29mdC16b29tIC5sZy1pdGVtLmxnLW5leHQtc2xpZGV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguOSwuOSwuOSk7dHJhbnNmb3JtOnNjYWxlM2QoLjksLjksLjkpfS5sZy1jc3MzLmxnLXNvZnQtem9vbSAubGctaXRlbS5sZy1jdXJyZW50ey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpO3RyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKTtvcGFjaXR5OjF9LmxnLWNzczMubGctc29mdC16b29tIC5sZy1pdGVtLmxnLWN1cnJlbnQsLmxnLWNzczMubGctc29mdC16b29tIC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsLmxnLWNzczMubGctc29mdC16b29tIC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwczstbW96LXRyYW5zaXRpb246LW1vei10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzOy1vLXRyYW5zaXRpb246LW8tdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHN9LmxnLWNzczMubGctc2NhbGUtdXAgLmxnLWl0ZW17b3BhY2l0eTowfS5sZy1jc3MzLmxnLXNjYWxlLXVwIC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsLmxnLWNzczMubGctc2NhbGUtdXAgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstbW96LXRyYW5zZm9ybTpzY2FsZTNkKC44LC44LC44KSB0cmFuc2xhdGUzZCgwLDEwJSwwKTstby10cmFuc2Zvcm06c2NhbGUzZCguOCwuOCwuOCkgdHJhbnNsYXRlM2QoMCwxMCUsMCk7LW1zLXRyYW5zZm9ybTpzY2FsZTNkKC44LC44LC44KSB0cmFuc2xhdGUzZCgwLDEwJSwwKTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC44LC44LC44KSB0cmFuc2xhdGUzZCgwLDEwJSwwKTt0cmFuc2Zvcm06c2NhbGUzZCguOCwuOCwuOCkgdHJhbnNsYXRlM2QoMCwxMCUsMCl9LmxnLWNzczMubGctc2NhbGUtdXAgLmxnLWl0ZW0ubGctY3VycmVudHstbW96LXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKSB0cmFuc2xhdGUzZCgwLDAsMCk7LW8tdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpIHRyYW5zbGF0ZTNkKDAsMCwwKTstbXMtdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpIHRyYW5zbGF0ZTNkKDAsMCwwKTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKSB0cmFuc2xhdGUzZCgwLDAsMCk7dHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpIHRyYW5zbGF0ZTNkKDAsMCwwKTtvcGFjaXR5OjF9LmxnLWNzczMubGctc2NhbGUtdXAgLmxnLWl0ZW0ubGctY3VycmVudCwubGctY3NzMy5sZy1zY2FsZS11cCAubGctaXRlbS5sZy1uZXh0LXNsaWRlLC5sZy1jc3MzLmxnLXNjYWxlLXVwIC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwczstbW96LXRyYW5zaXRpb246LW1vei10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzOy1vLXRyYW5zaXRpb246LW8tdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHN9LmxnLWNzczMubGctc2xpZGUtY2lyY3VsYXIgLmxnLWl0ZW17b3BhY2l0eTowfS5sZy1jc3MzLmxnLXNsaWRlLWNpcmN1bGFyIC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LW1vei10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoLTEwMCUsMCwwKTstby10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoLTEwMCUsMCwwKTstbXMtdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoLTEwMCUsMCwwKTt0cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoLTEwMCUsMCwwKX0ubGctY3NzMy5sZy1zbGlkZS1jaXJjdWxhciAubGctaXRlbS5sZy1uZXh0LXNsaWRley1tb3otdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKDEwMCUsMCwwKTstby10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoMTAwJSwwLDApOy1tcy10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoMTAwJSwwLDApOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKDEwMCUsMCwwKTt0cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoMTAwJSwwLDApfS5sZy1jc3MzLmxnLXNsaWRlLWNpcmN1bGFyIC5sZy1pdGVtLmxnLWN1cnJlbnR7LW1vei10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSkgdHJhbnNsYXRlM2QoMCwwLDApOy1vLXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKSB0cmFuc2xhdGUzZCgwLDAsMCk7LW1zLXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKSB0cmFuc2xhdGUzZCgwLDAsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSkgdHJhbnNsYXRlM2QoMCwwLDApO3RyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKSB0cmFuc2xhdGUzZCgwLDAsMCk7b3BhY2l0eToxfS5sZy1jc3MzLmxnLXNsaWRlLWNpcmN1bGFyIC5sZy1pdGVtLmxnLWN1cnJlbnQsLmxnLWNzczMubGctc2xpZGUtY2lyY3VsYXIgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwubGctY3NzMy5sZy1zbGlkZS1jaXJjdWxhciAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHM7LW1vei10cmFuc2l0aW9uOi1tb3otdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwczstby10cmFuc2l0aW9uOi1vLXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzfS5sZy1jc3MzLmxnLXNsaWRlLWNpcmN1bGFyLXVwIC5sZy1pdGVte29wYWNpdHk6MH0ubGctY3NzMy5sZy1zbGlkZS1jaXJjdWxhci11cCAubGctaXRlbS5sZy1wcmV2LXNsaWRley1tb3otdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKC0xMDAlLC0xMDAlLDApOy1vLXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgtMTAwJSwtMTAwJSwwKTstbXMtdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKC0xMDAlLC0xMDAlLDApOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKC0xMDAlLC0xMDAlLDApO3RyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgtMTAwJSwtMTAwJSwwKX0ubGctY3NzMy5sZy1zbGlkZS1jaXJjdWxhci11cCAubGctaXRlbS5sZy1uZXh0LXNsaWRley1tb3otdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKDEwMCUsLTEwMCUsMCk7LW8tdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKDEwMCUsLTEwMCUsMCk7LW1zLXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgxMDAlLC0xMDAlLDApOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKDEwMCUsLTEwMCUsMCk7dHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKDEwMCUsLTEwMCUsMCl9LmxnLWNzczMubGctc2xpZGUtY2lyY3VsYXItdXAgLmxnLWl0ZW0ubGctY3VycmVudHstbW96LXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKSB0cmFuc2xhdGUzZCgwLDAsMCk7LW8tdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpIHRyYW5zbGF0ZTNkKDAsMCwwKTstbXMtdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpIHRyYW5zbGF0ZTNkKDAsMCwwKTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKSB0cmFuc2xhdGUzZCgwLDAsMCk7dHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpIHRyYW5zbGF0ZTNkKDAsMCwwKTtvcGFjaXR5OjF9LmxnLWNzczMubGctc2xpZGUtY2lyY3VsYXItdXAgLmxnLWl0ZW0ubGctY3VycmVudCwubGctY3NzMy5sZy1zbGlkZS1jaXJjdWxhci11cCAubGctaXRlbS5sZy1uZXh0LXNsaWRlLC5sZy1jc3MzLmxnLXNsaWRlLWNpcmN1bGFyLXVwIC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwczstbW96LXRyYW5zaXRpb246LW1vei10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzOy1vLXRyYW5zaXRpb246LW8tdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHN9LmxnLWNzczMubGctc2xpZGUtY2lyY3VsYXItZG93biAubGctaXRlbXtvcGFjaXR5OjB9LmxnLWNzczMubGctc2xpZGUtY2lyY3VsYXItZG93biAubGctaXRlbS5sZy1wcmV2LXNsaWRley1tb3otdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKC0xMDAlLDEwMCUsMCk7LW8tdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKC0xMDAlLDEwMCUsMCk7LW1zLXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgtMTAwJSwxMDAlLDApOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKC0xMDAlLDEwMCUsMCk7dHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKC0xMDAlLDEwMCUsMCl9LmxnLWNzczMubGctc2xpZGUtY2lyY3VsYXItZG93biAubGctaXRlbS5sZy1uZXh0LXNsaWRley1tb3otdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKDEwMCUsMTAwJSwwKTstby10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoMTAwJSwxMDAlLDApOy1tcy10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoMTAwJSwxMDAlLDApOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKDEwMCUsMTAwJSwwKTt0cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoMTAwJSwxMDAlLDApfS5sZy1jc3MzLmxnLXNsaWRlLWNpcmN1bGFyLWRvd24gLmxnLWl0ZW0ubGctY3VycmVudHstbW96LXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKSB0cmFuc2xhdGUzZCgwLDAsMCk7LW8tdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpIHRyYW5zbGF0ZTNkKDAsMCwwKTstbXMtdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpIHRyYW5zbGF0ZTNkKDAsMCwwKTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKSB0cmFuc2xhdGUzZCgwLDAsMCk7dHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpIHRyYW5zbGF0ZTNkKDAsMCwwKTtvcGFjaXR5OjF9LmxnLWNzczMubGctc2xpZGUtY2lyY3VsYXItZG93biAubGctaXRlbS5sZy1jdXJyZW50LC5sZy1jc3MzLmxnLXNsaWRlLWNpcmN1bGFyLWRvd24gLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwubGctY3NzMy5sZy1zbGlkZS1jaXJjdWxhci1kb3duIC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwczstbW96LXRyYW5zaXRpb246LW1vei10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzOy1vLXRyYW5zaXRpb246LW8tdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHN9LmxnLWNzczMubGctc2xpZGUtY2lyY3VsYXItdmVydGljYWwgLmxnLWl0ZW17b3BhY2l0eTowfS5sZy1jc3MzLmxnLXNsaWRlLWNpcmN1bGFyLXZlcnRpY2FsIC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LW1vei10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoMCwtMTAwJSwwKTstby10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoMCwtMTAwJSwwKTstbXMtdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKDAsLTEwMCUsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoMCwtMTAwJSwwKTt0cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoMCwtMTAwJSwwKX0ubGctY3NzMy5sZy1zbGlkZS1jaXJjdWxhci12ZXJ0aWNhbCAubGctaXRlbS5sZy1uZXh0LXNsaWRley1tb3otdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKDAsMTAwJSwwKTstby10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoMCwxMDAlLDApOy1tcy10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoMCwxMDAlLDApOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKDAsMTAwJSwwKTt0cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoMCwxMDAlLDApfS5sZy1jc3MzLmxnLXNsaWRlLWNpcmN1bGFyLXZlcnRpY2FsIC5sZy1pdGVtLmxnLWN1cnJlbnR7LW1vei10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSkgdHJhbnNsYXRlM2QoMCwwLDApOy1vLXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKSB0cmFuc2xhdGUzZCgwLDAsMCk7LW1zLXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKSB0cmFuc2xhdGUzZCgwLDAsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSkgdHJhbnNsYXRlM2QoMCwwLDApO3RyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKSB0cmFuc2xhdGUzZCgwLDAsMCk7b3BhY2l0eToxfS5sZy1jc3MzLmxnLXNsaWRlLWNpcmN1bGFyLXZlcnRpY2FsIC5sZy1pdGVtLmxnLWN1cnJlbnQsLmxnLWNzczMubGctc2xpZGUtY2lyY3VsYXItdmVydGljYWwgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwubGctY3NzMy5sZy1zbGlkZS1jaXJjdWxhci12ZXJ0aWNhbCAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHM7LW1vei10cmFuc2l0aW9uOi1tb3otdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwczstby10cmFuc2l0aW9uOi1vLXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzfS5sZy1jc3MzLmxnLXNsaWRlLWNpcmN1bGFyLXZlcnRpY2FsLWxlZnQgLmxnLWl0ZW17b3BhY2l0eTowfS5sZy1jc3MzLmxnLXNsaWRlLWNpcmN1bGFyLXZlcnRpY2FsLWxlZnQgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstbW96LXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgtMTAwJSwtMTAwJSwwKTstby10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoLTEwMCUsLTEwMCUsMCk7LW1zLXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgtMTAwJSwtMTAwJSwwKTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgtMTAwJSwtMTAwJSwwKTt0cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoLTEwMCUsLTEwMCUsMCl9LmxnLWNzczMubGctc2xpZGUtY2lyY3VsYXItdmVydGljYWwtbGVmdCAubGctaXRlbS5sZy1uZXh0LXNsaWRley1tb3otdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKC0xMDAlLDEwMCUsMCk7LW8tdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKC0xMDAlLDEwMCUsMCk7LW1zLXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgtMTAwJSwxMDAlLDApOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKC0xMDAlLDEwMCUsMCk7dHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKC0xMDAlLDEwMCUsMCl9LmxnLWNzczMubGctc2xpZGUtY2lyY3VsYXItdmVydGljYWwtbGVmdCAubGctaXRlbS5sZy1jdXJyZW50ey1tb3otdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpIHRyYW5zbGF0ZTNkKDAsMCwwKTstby10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSkgdHJhbnNsYXRlM2QoMCwwLDApOy1tcy10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSkgdHJhbnNsYXRlM2QoMCwwLDApOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpIHRyYW5zbGF0ZTNkKDAsMCwwKTt0cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSkgdHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MX0ubGctY3NzMy5sZy1zbGlkZS1jaXJjdWxhci12ZXJ0aWNhbC1sZWZ0IC5sZy1pdGVtLmxnLWN1cnJlbnQsLmxnLWNzczMubGctc2xpZGUtY2lyY3VsYXItdmVydGljYWwtbGVmdCAubGctaXRlbS5sZy1uZXh0LXNsaWRlLC5sZy1jc3MzLmxnLXNsaWRlLWNpcmN1bGFyLXZlcnRpY2FsLWxlZnQgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzOy1tb3otdHJhbnNpdGlvbjotbW96LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHM7LW8tdHJhbnNpdGlvbjotby10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzO3RyYW5zaXRpb246dHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwc30ubGctY3NzMy5sZy1zbGlkZS1jaXJjdWxhci12ZXJ0aWNhbC1kb3duIC5sZy1pdGVte29wYWNpdHk6MH0ubGctY3NzMy5sZy1zbGlkZS1jaXJjdWxhci12ZXJ0aWNhbC1kb3duIC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LW1vei10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoMTAwJSwtMTAwJSwwKTstby10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoMTAwJSwtMTAwJSwwKTstbXMtdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKDEwMCUsLTEwMCUsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoMTAwJSwtMTAwJSwwKTt0cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoMTAwJSwtMTAwJSwwKX0ubGctY3NzMy5sZy1zbGlkZS1jaXJjdWxhci12ZXJ0aWNhbC1kb3duIC5sZy1pdGVtLmxnLW5leHQtc2xpZGV7LW1vei10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoMTAwJSwxMDAlLDApOy1vLXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgxMDAlLDEwMCUsMCk7LW1zLXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgxMDAlLDEwMCUsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoMTAwJSwxMDAlLDApO3RyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgxMDAlLDEwMCUsMCl9LmxnLWNzczMubGctc2xpZGUtY2lyY3VsYXItdmVydGljYWwtZG93biAubGctaXRlbS5sZy1jdXJyZW50ey1tb3otdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpIHRyYW5zbGF0ZTNkKDAsMCwwKTstby10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSkgdHJhbnNsYXRlM2QoMCwwLDApOy1tcy10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSkgdHJhbnNsYXRlM2QoMCwwLDApOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpIHRyYW5zbGF0ZTNkKDAsMCwwKTt0cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSkgdHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MX0ubGctY3NzMy5sZy1zbGlkZS1jaXJjdWxhci12ZXJ0aWNhbC1kb3duIC5sZy1pdGVtLmxnLWN1cnJlbnQsLmxnLWNzczMubGctc2xpZGUtY2lyY3VsYXItdmVydGljYWwtZG93biAubGctaXRlbS5sZy1uZXh0LXNsaWRlLC5sZy1jc3MzLmxnLXNsaWRlLWNpcmN1bGFyLXZlcnRpY2FsLWRvd24gLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzOy1tb3otdHJhbnNpdGlvbjotbW96LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHM7LW8tdHJhbnNpdGlvbjotby10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzO3RyYW5zaXRpb246dHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwc30ubGctY3NzMy5sZy1zbGlkZS12ZXJ0aWNhbCAubGctaXRlbXtvcGFjaXR5OjB9LmxnLWNzczMubGctc2xpZGUtdmVydGljYWwgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0xMDAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0xMDAlLDApfS5sZy1jc3MzLmxnLXNsaWRlLXZlcnRpY2FsIC5sZy1pdGVtLmxnLW5leHQtc2xpZGV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMDAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwMCUsMCl9LmxnLWNzczMubGctc2xpZGUtdmVydGljYWwgLmxnLWl0ZW0ubGctY3VycmVudHstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKTtvcGFjaXR5OjF9LmxnLWNzczMubGctc2xpZGUtdmVydGljYWwgLmxnLWl0ZW0ubGctY3VycmVudCwubGctY3NzMy5sZy1zbGlkZS12ZXJ0aWNhbCAubGctaXRlbS5sZy1uZXh0LXNsaWRlLC5sZy1jc3MzLmxnLXNsaWRlLXZlcnRpY2FsIC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7LW1vei10cmFuc2l0aW9uOi1tb3otdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7LW8tdHJhbnNpdGlvbjotby10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzfS5sZy1jc3MzLmxnLXNsaWRlLXZlcnRpY2FsLWdyb3d0aCAubGctaXRlbXtvcGFjaXR5OjB9LmxnLWNzczMubGctc2xpZGUtdmVydGljYWwtZ3Jvd3RoIC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LW1vei10cmFuc2Zvcm06c2NhbGUzZCguNSwuNSwuNSkgdHJhbnNsYXRlM2QoMCwtMTUwJSwwKTstby10cmFuc2Zvcm06c2NhbGUzZCguNSwuNSwuNSkgdHJhbnNsYXRlM2QoMCwtMTUwJSwwKTstbXMtdHJhbnNmb3JtOnNjYWxlM2QoLjUsLjUsLjUpIHRyYW5zbGF0ZTNkKDAsLTE1MCUsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguNSwuNSwuNSkgdHJhbnNsYXRlM2QoMCwtMTUwJSwwKTt0cmFuc2Zvcm06c2NhbGUzZCguNSwuNSwuNSkgdHJhbnNsYXRlM2QoMCwtMTUwJSwwKX0ubGctY3NzMy5sZy1zbGlkZS12ZXJ0aWNhbC1ncm93dGggLmxnLWl0ZW0ubGctbmV4dC1zbGlkZXstbW96LXRyYW5zZm9ybTpzY2FsZTNkKC41LC41LC41KSB0cmFuc2xhdGUzZCgwLDE1MCUsMCk7LW8tdHJhbnNmb3JtOnNjYWxlM2QoLjUsLjUsLjUpIHRyYW5zbGF0ZTNkKDAsMTUwJSwwKTstbXMtdHJhbnNmb3JtOnNjYWxlM2QoLjUsLjUsLjUpIHRyYW5zbGF0ZTNkKDAsMTUwJSwwKTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC41LC41LC41KSB0cmFuc2xhdGUzZCgwLDE1MCUsMCk7dHJhbnNmb3JtOnNjYWxlM2QoLjUsLjUsLjUpIHRyYW5zbGF0ZTNkKDAsMTUwJSwwKX0ubGctY3NzMy5sZy1zbGlkZS12ZXJ0aWNhbC1ncm93dGggLmxnLWl0ZW0ubGctY3VycmVudHstbW96LXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKSB0cmFuc2xhdGUzZCgwLDAsMCk7LW8tdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpIHRyYW5zbGF0ZTNkKDAsMCwwKTstbXMtdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpIHRyYW5zbGF0ZTNkKDAsMCwwKTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKSB0cmFuc2xhdGUzZCgwLDAsMCk7dHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpIHRyYW5zbGF0ZTNkKDAsMCwwKTtvcGFjaXR5OjF9LmxnLWNzczMubGctc2xpZGUtdmVydGljYWwtZ3Jvd3RoIC5sZy1pdGVtLmxnLWN1cnJlbnQsLmxnLWNzczMubGctc2xpZGUtdmVydGljYWwtZ3Jvd3RoIC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsLmxnLWNzczMubGctc2xpZGUtdmVydGljYWwtZ3Jvd3RoIC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7LW1vei10cmFuc2l0aW9uOi1tb3otdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7LW8tdHJhbnNpdGlvbjotby10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctb25seSAubGctaXRlbXtvcGFjaXR5OjB9LmxnLWNzczMubGctc2xpZGUtc2tldy1vbmx5IC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsLmxnLWNzczMubGctc2xpZGUtc2tldy1vbmx5IC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LW1vei10cmFuc2Zvcm06c2tldygxMGRlZywwZGVnKTstby10cmFuc2Zvcm06c2tldygxMGRlZywwZGVnKTstbXMtdHJhbnNmb3JtOnNrZXcoMTBkZWcsMGRlZyk7LXdlYmtpdC10cmFuc2Zvcm06c2tldygxMGRlZywwZGVnKTt0cmFuc2Zvcm06c2tldygxMGRlZywwZGVnKX0ubGctY3NzMy5sZy1zbGlkZS1za2V3LW9ubHkgLmxnLWl0ZW0ubGctY3VycmVudHstbW96LXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZyk7LW8tdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKTstbXMtdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKTstd2Via2l0LXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZyk7dHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKTtvcGFjaXR5OjF9LmxnLWNzczMubGctc2xpZGUtc2tldy1vbmx5IC5sZy1pdGVtLmxnLWN1cnJlbnQsLmxnLWNzczMubGctc2xpZGUtc2tldy1vbmx5IC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsLmxnLWNzczMubGctc2xpZGUtc2tldy1vbmx5IC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7LW1vei10cmFuc2l0aW9uOi1tb3otdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7LW8tdHJhbnNpdGlvbjotby10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctb25seS1yZXYgLmxnLWl0ZW17b3BhY2l0eTowfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctb25seS1yZXYgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwubGctY3NzMy5sZy1zbGlkZS1za2V3LW9ubHktcmV2IC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LW1vei10cmFuc2Zvcm06c2tldygtMTBkZWcsMGRlZyk7LW8tdHJhbnNmb3JtOnNrZXcoLTEwZGVnLDBkZWcpOy1tcy10cmFuc2Zvcm06c2tldygtMTBkZWcsMGRlZyk7LXdlYmtpdC10cmFuc2Zvcm06c2tldygtMTBkZWcsMGRlZyk7dHJhbnNmb3JtOnNrZXcoLTEwZGVnLDBkZWcpfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctb25seS1yZXYgLmxnLWl0ZW0ubGctY3VycmVudHstbW96LXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZyk7LW8tdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKTstbXMtdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKTstd2Via2l0LXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZyk7dHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKTtvcGFjaXR5OjF9LmxnLWNzczMubGctc2xpZGUtc2tldy1vbmx5LXJldiAubGctaXRlbS5sZy1jdXJyZW50LC5sZy1jc3MzLmxnLXNsaWRlLXNrZXctb25seS1yZXYgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwubGctY3NzMy5sZy1zbGlkZS1za2V3LW9ubHktcmV2IC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7LW1vei10cmFuc2l0aW9uOi1tb3otdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7LW8tdHJhbnNpdGlvbjotby10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctb25seS15IC5sZy1pdGVte29wYWNpdHk6MH0ubGctY3NzMy5sZy1zbGlkZS1za2V3LW9ubHkteSAubGctaXRlbS5sZy1uZXh0LXNsaWRlLC5sZy1jc3MzLmxnLXNsaWRlLXNrZXctb25seS15IC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LW1vei10cmFuc2Zvcm06c2tldygwZGVnLDEwZGVnKTstby10cmFuc2Zvcm06c2tldygwZGVnLDEwZGVnKTstbXMtdHJhbnNmb3JtOnNrZXcoMGRlZywxMGRlZyk7LXdlYmtpdC10cmFuc2Zvcm06c2tldygwZGVnLDEwZGVnKTt0cmFuc2Zvcm06c2tldygwZGVnLDEwZGVnKX0ubGctY3NzMy5sZy1zbGlkZS1za2V3LW9ubHkteSAubGctaXRlbS5sZy1jdXJyZW50ey1tb3otdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKTstby10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpOy1tcy10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpOy13ZWJraXQtdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKTt0cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpO29wYWNpdHk6MX0ubGctY3NzMy5sZy1zbGlkZS1za2V3LW9ubHkteSAubGctaXRlbS5sZy1jdXJyZW50LC5sZy1jc3MzLmxnLXNsaWRlLXNrZXctb25seS15IC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsLmxnLWNzczMubGctc2xpZGUtc2tldy1vbmx5LXkgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczstbW96LXRyYW5zaXRpb246LW1vei10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczstby10cmFuc2l0aW9uOi1vLXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzO3RyYW5zaXRpb246dHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHN9LmxnLWNzczMubGctc2xpZGUtc2tldy1vbmx5LXktcmV2IC5sZy1pdGVte29wYWNpdHk6MH0ubGctY3NzMy5sZy1zbGlkZS1za2V3LW9ubHkteS1yZXYgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwubGctY3NzMy5sZy1zbGlkZS1za2V3LW9ubHkteS1yZXYgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstbW96LXRyYW5zZm9ybTpza2V3KDBkZWcsLTEwZGVnKTstby10cmFuc2Zvcm06c2tldygwZGVnLC0xMGRlZyk7LW1zLXRyYW5zZm9ybTpza2V3KDBkZWcsLTEwZGVnKTstd2Via2l0LXRyYW5zZm9ybTpza2V3KDBkZWcsLTEwZGVnKTt0cmFuc2Zvcm06c2tldygwZGVnLC0xMGRlZyl9LmxnLWNzczMubGctc2xpZGUtc2tldy1vbmx5LXktcmV2IC5sZy1pdGVtLmxnLWN1cnJlbnR7LW1vei10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpOy1vLXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZyk7LW1zLXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZyk7LXdlYmtpdC10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpO3RyYW5zZm9ybTpza2V3KDBkZWcsMGRlZyk7b3BhY2l0eToxfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctb25seS15LXJldiAubGctaXRlbS5sZy1jdXJyZW50LC5sZy1jc3MzLmxnLXNsaWRlLXNrZXctb25seS15LXJldiAubGctaXRlbS5sZy1uZXh0LXNsaWRlLC5sZy1jc3MzLmxnLXNsaWRlLXNrZXctb25seS15LXJldiAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzOy1tb3otdHJhbnNpdGlvbjotbW96LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzOy1vLXRyYW5zaXRpb246LW8tdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwc30ubGctY3NzMy5sZy1zbGlkZS1za2V3IC5sZy1pdGVte29wYWNpdHk6MH0ubGctY3NzMy5sZy1zbGlkZS1za2V3IC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LW1vei10cmFuc2Zvcm06c2tldygyMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgtMTAwJSwwLDApOy1vLXRyYW5zZm9ybTpza2V3KDIwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7LW1zLXRyYW5zZm9ybTpza2V3KDIwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2tldygyMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgtMTAwJSwwLDApO3RyYW5zZm9ybTpza2V3KDIwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKC0xMDAlLDAsMCl9LmxnLWNzczMubGctc2xpZGUtc2tldyAubGctaXRlbS5sZy1uZXh0LXNsaWRley1tb3otdHJhbnNmb3JtOnNrZXcoMjBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMTAwJSwwLDApOy1vLXRyYW5zZm9ybTpza2V3KDIwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDEwMCUsMCwwKTstbXMtdHJhbnNmb3JtOnNrZXcoMjBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMTAwJSwwLDApOy13ZWJraXQtdHJhbnNmb3JtOnNrZXcoMjBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMTAwJSwwLDApO3RyYW5zZm9ybTpza2V3KDIwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDEwMCUsMCwwKX0ubGctY3NzMy5sZy1zbGlkZS1za2V3IC5sZy1pdGVtLmxnLWN1cnJlbnR7LW1vei10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMCwwKTstby10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMCwwKTstbXMtdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDAsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMCwwKTt0cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMCwwKTtvcGFjaXR5OjF9LmxnLWNzczMubGctc2xpZGUtc2tldyAubGctaXRlbS5sZy1jdXJyZW50LC5sZy1jc3MzLmxnLXNsaWRlLXNrZXcgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwubGctY3NzMy5sZy1zbGlkZS1za2V3IC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7LW1vei10cmFuc2l0aW9uOi1tb3otdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7LW8tdHJhbnNpdGlvbjotby10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctcmV2IC5sZy1pdGVte29wYWNpdHk6MH0ubGctY3NzMy5sZy1zbGlkZS1za2V3LXJldiAubGctaXRlbS5sZy1wcmV2LXNsaWRley1tb3otdHJhbnNmb3JtOnNrZXcoLTIwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7LW8tdHJhbnNmb3JtOnNrZXcoLTIwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7LW1zLXRyYW5zZm9ybTpza2V3KC0yMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgtMTAwJSwwLDApOy13ZWJraXQtdHJhbnNmb3JtOnNrZXcoLTIwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7dHJhbnNmb3JtOnNrZXcoLTIwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKC0xMDAlLDAsMCl9LmxnLWNzczMubGctc2xpZGUtc2tldy1yZXYgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZXstbW96LXRyYW5zZm9ybTpza2V3KC0yMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgxMDAlLDAsMCk7LW8tdHJhbnNmb3JtOnNrZXcoLTIwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDEwMCUsMCwwKTstbXMtdHJhbnNmb3JtOnNrZXcoLTIwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDEwMCUsMCwwKTstd2Via2l0LXRyYW5zZm9ybTpza2V3KC0yMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgxMDAlLDAsMCk7dHJhbnNmb3JtOnNrZXcoLTIwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDEwMCUsMCwwKX0ubGctY3NzMy5sZy1zbGlkZS1za2V3LXJldiAubGctaXRlbS5sZy1jdXJyZW50ey1tb3otdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDAsMCk7LW8tdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDAsMCk7LW1zLXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwwLDApOy13ZWJraXQtdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDAsMCk7dHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDAsMCk7b3BhY2l0eToxfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctcmV2IC5sZy1pdGVtLmxnLWN1cnJlbnQsLmxnLWNzczMubGctc2xpZGUtc2tldy1yZXYgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwubGctY3NzMy5sZy1zbGlkZS1za2V3LXJldiAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzOy1tb3otdHJhbnNpdGlvbjotbW96LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzOy1vLXRyYW5zaXRpb246LW8tdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwc30ubGctY3NzMy5sZy1zbGlkZS1za2V3LWNyb3NzIC5sZy1pdGVte29wYWNpdHk6MH0ubGctY3NzMy5sZy1zbGlkZS1za2V3LWNyb3NzIC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LW1vei10cmFuc2Zvcm06c2tldygwZGVnLDYwZGVnKSB0cmFuc2xhdGUzZCgtMTAwJSwwLDApOy1vLXRyYW5zZm9ybTpza2V3KDBkZWcsNjBkZWcpIHRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7LW1zLXRyYW5zZm9ybTpza2V3KDBkZWcsNjBkZWcpIHRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2tldygwZGVnLDYwZGVnKSB0cmFuc2xhdGUzZCgtMTAwJSwwLDApO3RyYW5zZm9ybTpza2V3KDBkZWcsNjBkZWcpIHRyYW5zbGF0ZTNkKC0xMDAlLDAsMCl9LmxnLWNzczMubGctc2xpZGUtc2tldy1jcm9zcyAubGctaXRlbS5sZy1uZXh0LXNsaWRley1tb3otdHJhbnNmb3JtOnNrZXcoMGRlZyw2MGRlZykgdHJhbnNsYXRlM2QoMTAwJSwwLDApOy1vLXRyYW5zZm9ybTpza2V3KDBkZWcsNjBkZWcpIHRyYW5zbGF0ZTNkKDEwMCUsMCwwKTstbXMtdHJhbnNmb3JtOnNrZXcoMGRlZyw2MGRlZykgdHJhbnNsYXRlM2QoMTAwJSwwLDApOy13ZWJraXQtdHJhbnNmb3JtOnNrZXcoMGRlZyw2MGRlZykgdHJhbnNsYXRlM2QoMTAwJSwwLDApO3RyYW5zZm9ybTpza2V3KDBkZWcsNjBkZWcpIHRyYW5zbGF0ZTNkKDEwMCUsMCwwKX0ubGctY3NzMy5sZy1zbGlkZS1za2V3LWNyb3NzIC5sZy1pdGVtLmxnLWN1cnJlbnR7LW1vei10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMCwwKTstby10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMCwwKTstbXMtdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDAsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMCwwKTt0cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMCwwKTtvcGFjaXR5OjF9LmxnLWNzczMubGctc2xpZGUtc2tldy1jcm9zcyAubGctaXRlbS5sZy1jdXJyZW50LC5sZy1jc3MzLmxnLXNsaWRlLXNrZXctY3Jvc3MgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwubGctY3NzMy5sZy1zbGlkZS1za2V3LWNyb3NzIC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7LW1vei10cmFuc2l0aW9uOi1tb3otdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7LW8tdHJhbnNpdGlvbjotby10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctY3Jvc3MtcmV2IC5sZy1pdGVte29wYWNpdHk6MH0ubGctY3NzMy5sZy1zbGlkZS1za2V3LWNyb3NzLXJldiAubGctaXRlbS5sZy1wcmV2LXNsaWRley1tb3otdHJhbnNmb3JtOnNrZXcoMGRlZywtNjBkZWcpIHRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7LW8tdHJhbnNmb3JtOnNrZXcoMGRlZywtNjBkZWcpIHRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7LW1zLXRyYW5zZm9ybTpza2V3KDBkZWcsLTYwZGVnKSB0cmFuc2xhdGUzZCgtMTAwJSwwLDApOy13ZWJraXQtdHJhbnNmb3JtOnNrZXcoMGRlZywtNjBkZWcpIHRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7dHJhbnNmb3JtOnNrZXcoMGRlZywtNjBkZWcpIHRyYW5zbGF0ZTNkKC0xMDAlLDAsMCl9LmxnLWNzczMubGctc2xpZGUtc2tldy1jcm9zcy1yZXYgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZXstbW96LXRyYW5zZm9ybTpza2V3KDBkZWcsLTYwZGVnKSB0cmFuc2xhdGUzZCgxMDAlLDAsMCk7LW8tdHJhbnNmb3JtOnNrZXcoMGRlZywtNjBkZWcpIHRyYW5zbGF0ZTNkKDEwMCUsMCwwKTstbXMtdHJhbnNmb3JtOnNrZXcoMGRlZywtNjBkZWcpIHRyYW5zbGF0ZTNkKDEwMCUsMCwwKTstd2Via2l0LXRyYW5zZm9ybTpza2V3KDBkZWcsLTYwZGVnKSB0cmFuc2xhdGUzZCgxMDAlLDAsMCk7dHJhbnNmb3JtOnNrZXcoMGRlZywtNjBkZWcpIHRyYW5zbGF0ZTNkKDEwMCUsMCwwKX0ubGctY3NzMy5sZy1zbGlkZS1za2V3LWNyb3NzLXJldiAubGctaXRlbS5sZy1jdXJyZW50ey1tb3otdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDAsMCk7LW8tdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDAsMCk7LW1zLXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwwLDApOy13ZWJraXQtdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDAsMCk7dHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDAsMCk7b3BhY2l0eToxfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctY3Jvc3MtcmV2IC5sZy1pdGVtLmxnLWN1cnJlbnQsLmxnLWNzczMubGctc2xpZGUtc2tldy1jcm9zcy1yZXYgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwubGctY3NzMy5sZy1zbGlkZS1za2V3LWNyb3NzLXJldiAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzOy1tb3otdHJhbnNpdGlvbjotbW96LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzOy1vLXRyYW5zaXRpb246LW8tdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwc30ubGctY3NzMy5sZy1zbGlkZS1za2V3LXZlciAubGctaXRlbXtvcGFjaXR5OjB9LmxnLWNzczMubGctc2xpZGUtc2tldy12ZXIgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstbW96LXRyYW5zZm9ybTpza2V3KDYwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsLTEwMCUsMCk7LW8tdHJhbnNmb3JtOnNrZXcoNjBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwtMTAwJSwwKTstbXMtdHJhbnNmb3JtOnNrZXcoNjBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwtMTAwJSwwKTstd2Via2l0LXRyYW5zZm9ybTpza2V3KDYwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsLTEwMCUsMCk7dHJhbnNmb3JtOnNrZXcoNjBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwtMTAwJSwwKX0ubGctY3NzMy5sZy1zbGlkZS1za2V3LXZlciAubGctaXRlbS5sZy1uZXh0LXNsaWRley1tb3otdHJhbnNmb3JtOnNrZXcoNjBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwxMDAlLDApOy1vLXRyYW5zZm9ybTpza2V3KDYwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMTAwJSwwKTstbXMtdHJhbnNmb3JtOnNrZXcoNjBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwxMDAlLDApOy13ZWJraXQtdHJhbnNmb3JtOnNrZXcoNjBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwxMDAlLDApO3RyYW5zZm9ybTpza2V3KDYwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMTAwJSwwKX0ubGctY3NzMy5sZy1zbGlkZS1za2V3LXZlciAubGctaXRlbS5sZy1jdXJyZW50ey1tb3otdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDAsMCk7LW8tdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDAsMCk7LW1zLXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwwLDApOy13ZWJraXQtdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDAsMCk7dHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDAsMCk7b3BhY2l0eToxfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctdmVyIC5sZy1pdGVtLmxnLWN1cnJlbnQsLmxnLWNzczMubGctc2xpZGUtc2tldy12ZXIgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwubGctY3NzMy5sZy1zbGlkZS1za2V3LXZlciAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzOy1tb3otdHJhbnNpdGlvbjotbW96LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzOy1vLXRyYW5zaXRpb246LW8tdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwc30ubGctY3NzMy5sZy1zbGlkZS1za2V3LXZlci1yZXYgLmxnLWl0ZW17b3BhY2l0eTowfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctdmVyLXJldiAubGctaXRlbS5sZy1wcmV2LXNsaWRley1tb3otdHJhbnNmb3JtOnNrZXcoLTYwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsLTEwMCUsMCk7LW8tdHJhbnNmb3JtOnNrZXcoLTYwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsLTEwMCUsMCk7LW1zLXRyYW5zZm9ybTpza2V3KC02MGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLC0xMDAlLDApOy13ZWJraXQtdHJhbnNmb3JtOnNrZXcoLTYwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsLTEwMCUsMCk7dHJhbnNmb3JtOnNrZXcoLTYwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsLTEwMCUsMCl9LmxnLWNzczMubGctc2xpZGUtc2tldy12ZXItcmV2IC5sZy1pdGVtLmxnLW5leHQtc2xpZGV7LW1vei10cmFuc2Zvcm06c2tldygtNjBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwxMDAlLDApOy1vLXRyYW5zZm9ybTpza2V3KC02MGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDEwMCUsMCk7LW1zLXRyYW5zZm9ybTpza2V3KC02MGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDEwMCUsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2tldygtNjBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwxMDAlLDApO3RyYW5zZm9ybTpza2V3KC02MGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDEwMCUsMCl9LmxnLWNzczMubGctc2xpZGUtc2tldy12ZXItcmV2IC5sZy1pdGVtLmxnLWN1cnJlbnR7LW1vei10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMCwwKTstby10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMCwwKTstbXMtdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDAsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMCwwKTt0cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMCwwKTtvcGFjaXR5OjF9LmxnLWNzczMubGctc2xpZGUtc2tldy12ZXItcmV2IC5sZy1pdGVtLmxnLWN1cnJlbnQsLmxnLWNzczMubGctc2xpZGUtc2tldy12ZXItcmV2IC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsLmxnLWNzczMubGctc2xpZGUtc2tldy12ZXItcmV2IC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7LW1vei10cmFuc2l0aW9uOi1tb3otdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7LW8tdHJhbnNpdGlvbjotby10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctdmVyLWNyb3NzIC5sZy1pdGVte29wYWNpdHk6MH0ubGctY3NzMy5sZy1zbGlkZS1za2V3LXZlci1jcm9zcyAubGctaXRlbS5sZy1wcmV2LXNsaWRley1tb3otdHJhbnNmb3JtOnNrZXcoMGRlZywyMGRlZykgdHJhbnNsYXRlM2QoMCwtMTAwJSwwKTstby10cmFuc2Zvcm06c2tldygwZGVnLDIwZGVnKSB0cmFuc2xhdGUzZCgwLC0xMDAlLDApOy1tcy10cmFuc2Zvcm06c2tldygwZGVnLDIwZGVnKSB0cmFuc2xhdGUzZCgwLC0xMDAlLDApOy13ZWJraXQtdHJhbnNmb3JtOnNrZXcoMGRlZywyMGRlZykgdHJhbnNsYXRlM2QoMCwtMTAwJSwwKTt0cmFuc2Zvcm06c2tldygwZGVnLDIwZGVnKSB0cmFuc2xhdGUzZCgwLC0xMDAlLDApfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctdmVyLWNyb3NzIC5sZy1pdGVtLmxnLW5leHQtc2xpZGV7LW1vei10cmFuc2Zvcm06c2tldygwZGVnLDIwZGVnKSB0cmFuc2xhdGUzZCgwLDEwMCUsMCk7LW8tdHJhbnNmb3JtOnNrZXcoMGRlZywyMGRlZykgdHJhbnNsYXRlM2QoMCwxMDAlLDApOy1tcy10cmFuc2Zvcm06c2tldygwZGVnLDIwZGVnKSB0cmFuc2xhdGUzZCgwLDEwMCUsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2tldygwZGVnLDIwZGVnKSB0cmFuc2xhdGUzZCgwLDEwMCUsMCk7dHJhbnNmb3JtOnNrZXcoMGRlZywyMGRlZykgdHJhbnNsYXRlM2QoMCwxMDAlLDApfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctdmVyLWNyb3NzIC5sZy1pdGVtLmxnLWN1cnJlbnR7LW1vei10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMCwwKTstby10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMCwwKTstbXMtdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDAsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMCwwKTt0cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMCwwKTtvcGFjaXR5OjF9LmxnLWNzczMubGctc2xpZGUtc2tldy12ZXItY3Jvc3MgLmxnLWl0ZW0ubGctY3VycmVudCwubGctY3NzMy5sZy1zbGlkZS1za2V3LXZlci1jcm9zcyAubGctaXRlbS5sZy1uZXh0LXNsaWRlLC5sZy1jc3MzLmxnLXNsaWRlLXNrZXctdmVyLWNyb3NzIC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7LW1vei10cmFuc2l0aW9uOi1tb3otdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7LW8tdHJhbnNpdGlvbjotby10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctdmVyLWNyb3NzLXJldiAubGctaXRlbXtvcGFjaXR5OjB9LmxnLWNzczMubGctc2xpZGUtc2tldy12ZXItY3Jvc3MtcmV2IC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LW1vei10cmFuc2Zvcm06c2tldygwZGVnLC0yMGRlZykgdHJhbnNsYXRlM2QoMCwtMTAwJSwwKTstby10cmFuc2Zvcm06c2tldygwZGVnLC0yMGRlZykgdHJhbnNsYXRlM2QoMCwtMTAwJSwwKTstbXMtdHJhbnNmb3JtOnNrZXcoMGRlZywtMjBkZWcpIHRyYW5zbGF0ZTNkKDAsLTEwMCUsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2tldygwZGVnLC0yMGRlZykgdHJhbnNsYXRlM2QoMCwtMTAwJSwwKTt0cmFuc2Zvcm06c2tldygwZGVnLC0yMGRlZykgdHJhbnNsYXRlM2QoMCwtMTAwJSwwKX0ubGctY3NzMy5sZy1zbGlkZS1za2V3LXZlci1jcm9zcy1yZXYgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZXstbW96LXRyYW5zZm9ybTpza2V3KDBkZWcsLTIwZGVnKSB0cmFuc2xhdGUzZCgwLDEwMCUsMCk7LW8tdHJhbnNmb3JtOnNrZXcoMGRlZywtMjBkZWcpIHRyYW5zbGF0ZTNkKDAsMTAwJSwwKTstbXMtdHJhbnNmb3JtOnNrZXcoMGRlZywtMjBkZWcpIHRyYW5zbGF0ZTNkKDAsMTAwJSwwKTstd2Via2l0LXRyYW5zZm9ybTpza2V3KDBkZWcsLTIwZGVnKSB0cmFuc2xhdGUzZCgwLDEwMCUsMCk7dHJhbnNmb3JtOnNrZXcoMGRlZywtMjBkZWcpIHRyYW5zbGF0ZTNkKDAsMTAwJSwwKX0ubGctY3NzMy5sZy1zbGlkZS1za2V3LXZlci1jcm9zcy1yZXYgLmxnLWl0ZW0ubGctY3VycmVudHstbW96LXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwwLDApOy1vLXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwwLDApOy1tcy10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMCwwKTstd2Via2l0LXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwwLDApO3RyYW5zZm9ybTpza2V3KDBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MX0ubGctY3NzMy5sZy1zbGlkZS1za2V3LXZlci1jcm9zcy1yZXYgLmxnLWl0ZW0ubGctY3VycmVudCwubGctY3NzMy5sZy1zbGlkZS1za2V3LXZlci1jcm9zcy1yZXYgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwubGctY3NzMy5sZy1zbGlkZS1za2V3LXZlci1jcm9zcy1yZXYgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczstbW96LXRyYW5zaXRpb246LW1vei10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczstby10cmFuc2l0aW9uOi1vLXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzO3RyYW5zaXRpb246dHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHN9LmxnLWNzczMubGctbG9sbGlwb3AgLmxnLWl0ZW17b3BhY2l0eTowfS5sZy1jc3MzLmxnLWxvbGxpcG9wIC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMCwwKX0ubGctY3NzMy5sZy1sb2xsaXBvcCAubGctaXRlbS5sZy1uZXh0LXNsaWRley1tb3otdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZSguNSk7LW8tdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZSguNSk7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGUoLjUpOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZSguNSk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZSguNSl9LmxnLWNzczMubGctbG9sbGlwb3AgLmxnLWl0ZW0ubGctY3VycmVudHstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKTtvcGFjaXR5OjF9LmxnLWNzczMubGctbG9sbGlwb3AgLmxnLWl0ZW0ubGctY3VycmVudCwubGctY3NzMy5sZy1sb2xsaXBvcCAubGctaXRlbS5sZy1uZXh0LXNsaWRlLC5sZy1jc3MzLmxnLWxvbGxpcG9wIC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7LW1vei10cmFuc2l0aW9uOi1tb3otdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7LW8tdHJhbnNpdGlvbjotby10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzfS5sZy1jc3MzLmxnLWxvbGxpcG9wLXJldiAubGctaXRlbXtvcGFjaXR5OjB9LmxnLWNzczMubGctbG9sbGlwb3AtcmV2IC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LW1vei10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApIHNjYWxlKC41KTstby10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApIHNjYWxlKC41KTstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZSguNSk7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApIHNjYWxlKC41KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApIHNjYWxlKC41KX0ubGctY3NzMy5sZy1sb2xsaXBvcC1yZXYgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMCwwKX0ubGctY3NzMy5sZy1sb2xsaXBvcC1yZXYgLmxnLWl0ZW0ubGctY3VycmVudHstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKTtvcGFjaXR5OjF9LmxnLWNzczMubGctbG9sbGlwb3AtcmV2IC5sZy1pdGVtLmxnLWN1cnJlbnQsLmxnLWNzczMubGctbG9sbGlwb3AtcmV2IC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsLmxnLWNzczMubGctbG9sbGlwb3AtcmV2IC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7LW1vei10cmFuc2l0aW9uOi1tb3otdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7LW8tdHJhbnNpdGlvbjotby10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzfS5sZy1jc3MzLmxnLXJvdGF0ZSAubGctaXRlbXtvcGFjaXR5OjB9LmxnLWNzczMubGctcm90YXRlIC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LW1vei10cmFuc2Zvcm06cm90YXRlKC0zNjBkZWcpOy1vLXRyYW5zZm9ybTpyb3RhdGUoLTM2MGRlZyk7LW1zLXRyYW5zZm9ybTpyb3RhdGUoLTM2MGRlZyk7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC0zNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTM2MGRlZyl9LmxnLWNzczMubGctcm90YXRlIC5sZy1pdGVtLmxnLW5leHQtc2xpZGV7LW1vei10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7LW8tdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpOy1tcy10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfS5sZy1jc3MzLmxnLXJvdGF0ZSAubGctaXRlbS5sZy1jdXJyZW50ey1tb3otdHJhbnNmb3JtOnJvdGF0ZSgwKTstby10cmFuc2Zvcm06cm90YXRlKDApOy1tcy10cmFuc2Zvcm06cm90YXRlKDApOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApO29wYWNpdHk6MX0ubGctY3NzMy5sZy1yb3RhdGUgLmxnLWl0ZW0ubGctY3VycmVudCwubGctY3NzMy5sZy1yb3RhdGUgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwubGctY3NzMy5sZy1yb3RhdGUgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczstbW96LXRyYW5zaXRpb246LW1vei10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczstby10cmFuc2l0aW9uOi1vLXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzO3RyYW5zaXRpb246dHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHN9LmxnLWNzczMubGctcm90YXRlLXJldiAubGctaXRlbXtvcGFjaXR5OjB9LmxnLWNzczMubGctcm90YXRlLXJldiAubGctaXRlbS5sZy1wcmV2LXNsaWRley1tb3otdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpOy1vLXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTstbXMtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX0ubGctY3NzMy5sZy1yb3RhdGUtcmV2IC5sZy1pdGVtLmxnLW5leHQtc2xpZGV7LW1vei10cmFuc2Zvcm06cm90YXRlKC0zNjBkZWcpOy1vLXRyYW5zZm9ybTpyb3RhdGUoLTM2MGRlZyk7LW1zLXRyYW5zZm9ybTpyb3RhdGUoLTM2MGRlZyk7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC0zNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTM2MGRlZyl9LmxnLWNzczMubGctcm90YXRlLXJldiAubGctaXRlbS5sZy1jdXJyZW50ey1tb3otdHJhbnNmb3JtOnJvdGF0ZSgwKTstby10cmFuc2Zvcm06cm90YXRlKDApOy1tcy10cmFuc2Zvcm06cm90YXRlKDApOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApO29wYWNpdHk6MX0ubGctY3NzMy5sZy1yb3RhdGUtcmV2IC5sZy1pdGVtLmxnLWN1cnJlbnQsLmxnLWNzczMubGctcm90YXRlLXJldiAubGctaXRlbS5sZy1uZXh0LXNsaWRlLC5sZy1jc3MzLmxnLXJvdGF0ZS1yZXYgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczstbW96LXRyYW5zaXRpb246LW1vei10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczstby10cmFuc2l0aW9uOi1vLXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzO3RyYW5zaXRpb246dHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHN9LmxnLWNzczMubGctdHViZSAubGctaXRlbXtvcGFjaXR5OjB9LmxnLWNzczMubGctdHViZSAubGctaXRlbS5sZy1wcmV2LXNsaWRley1tb3otdHJhbnNmb3JtOnNjYWxlM2QoMSwwLDEpIHRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7LW8tdHJhbnNmb3JtOnNjYWxlM2QoMSwwLDEpIHRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7LW1zLXRyYW5zZm9ybTpzY2FsZTNkKDEsMCwxKSB0cmFuc2xhdGUzZCgtMTAwJSwwLDApOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMSwwLDEpIHRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7dHJhbnNmb3JtOnNjYWxlM2QoMSwwLDEpIHRyYW5zbGF0ZTNkKC0xMDAlLDAsMCl9LmxnLWNzczMubGctdHViZSAubGctaXRlbS5sZy1uZXh0LXNsaWRley1tb3otdHJhbnNmb3JtOnNjYWxlM2QoMSwwLDEpIHRyYW5zbGF0ZTNkKDEwMCUsMCwwKTstby10cmFuc2Zvcm06c2NhbGUzZCgxLDAsMSkgdHJhbnNsYXRlM2QoMTAwJSwwLDApOy1tcy10cmFuc2Zvcm06c2NhbGUzZCgxLDAsMSkgdHJhbnNsYXRlM2QoMTAwJSwwLDApOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMSwwLDEpIHRyYW5zbGF0ZTNkKDEwMCUsMCwwKTt0cmFuc2Zvcm06c2NhbGUzZCgxLDAsMSkgdHJhbnNsYXRlM2QoMTAwJSwwLDApfS5sZy1jc3MzLmxnLXR1YmUgLmxnLWl0ZW0ubGctY3VycmVudHstbW96LXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKSB0cmFuc2xhdGUzZCgwLDAsMCk7LW8tdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpIHRyYW5zbGF0ZTNkKDAsMCwwKTstbXMtdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpIHRyYW5zbGF0ZTNkKDAsMCwwKTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKSB0cmFuc2xhdGUzZCgwLDAsMCk7dHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpIHRyYW5zbGF0ZTNkKDAsMCwwKTtvcGFjaXR5OjF9LmxnLWNzczMubGctdHViZSAubGctaXRlbS5sZy1jdXJyZW50LC5sZy1jc3MzLmxnLXR1YmUgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwubGctY3NzMy5sZy10dWJlIC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7LW1vei10cmFuc2l0aW9uOi1tb3otdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7LW8tdHJhbnNpdGlvbjotby10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzfVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsInZhciBlc2NhcGUgPSByZXF1aXJlKFwiLi4vLi4vLi4vY3NzLWxvYWRlci9saWIvdXJsL2VzY2FwZS5qc1wiKTtcbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubGctc3ViLWh0bWwsLmxnLXRvb2xiYXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC40NSl9QGZvbnQtZmFjZXtmb250LWZhbWlseTpsZztzcmM6dXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuLi9mb250cy9sZy5lb3Q/bjF6MzczXCIpKSArIFwiKTtzcmM6dXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuLi9mb250cy9sZy5lb3RcIikpICsgXCI/I2llZml4bjF6MzczKSBmb3JtYXQoXFxcImVtYmVkZGVkLW9wZW50eXBlXFxcIiksdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuLi9mb250cy9sZy53b2ZmP24xejM3M1wiKSkgKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIiksdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuLi9mb250cy9sZy50dGY/bjF6MzczXCIpKSArIFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIiksdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuLi9mb250cy9sZy5zdmc/bjF6MzczXCIpKSArIFwiI2xnKSBmb3JtYXQoXFxcInN2Z1xcXCIpO2ZvbnQtd2VpZ2h0OjQwMDtmb250LXN0eWxlOm5vcm1hbH0ubGctaWNvbntmb250LWZhbWlseTpsZztzcGVhazpub25lO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0OjQwMDtmb250LXZhcmlhbnQ6bm9ybWFsO3RleHQtdHJhbnNmb3JtOm5vbmU7bGluZS1oZWlnaHQ6MTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZX0ubGctYWN0aW9ucyAubGctbmV4dCwubGctYWN0aW9ucyAubGctcHJldntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjQ1KTtib3JkZXItcmFkaXVzOjJweDtjb2xvcjojOTk5O2N1cnNvcjpwb2ludGVyO2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjIycHg7bWFyZ2luLXRvcDotMTBweDtwYWRkaW5nOjhweCAxMHB4IDlweDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO3otaW5kZXg6MTA4MDtib3JkZXI6bm9uZTtvdXRsaW5lOjB9LmxnLWFjdGlvbnMgLmxnLW5leHQuZGlzYWJsZWQsLmxnLWFjdGlvbnMgLmxnLXByZXYuZGlzYWJsZWR7cG9pbnRlci1ldmVudHM6bm9uZTtvcGFjaXR5Oi41fS5sZy1hY3Rpb25zIC5sZy1uZXh0OmhvdmVyLC5sZy1hY3Rpb25zIC5sZy1wcmV2OmhvdmVye2NvbG9yOiNGRkZ9LmxnLWFjdGlvbnMgLmxnLW5leHR7cmlnaHQ6MjBweH0ubGctYWN0aW9ucyAubGctbmV4dDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXEUwOTVcXFwifS5sZy1hY3Rpb25zIC5sZy1wcmV2e2xlZnQ6MjBweH0ubGctYWN0aW9ucyAubGctcHJldjphZnRlcntjb250ZW50OlxcXCJcXFxcRTA5NFxcXCJ9QC13ZWJraXQta2V5ZnJhbWVzIGxnLXJpZ2h0LWVuZHswJSwxMDAle2xlZnQ6MH01MCV7bGVmdDotMzBweH19QC1tb3ota2V5ZnJhbWVzIGxnLXJpZ2h0LWVuZHswJSwxMDAle2xlZnQ6MH01MCV7bGVmdDotMzBweH19QC1tcy1rZXlmcmFtZXMgbGctcmlnaHQtZW5kezAlLDEwMCV7bGVmdDowfTUwJXtsZWZ0Oi0zMHB4fX1Aa2V5ZnJhbWVzIGxnLXJpZ2h0LWVuZHswJSwxMDAle2xlZnQ6MH01MCV7bGVmdDotMzBweH19QC13ZWJraXQta2V5ZnJhbWVzIGxnLWxlZnQtZW5kezAlLDEwMCV7bGVmdDowfTUwJXtsZWZ0OjMwcHh9fUAtbW96LWtleWZyYW1lcyBsZy1sZWZ0LWVuZHswJSwxMDAle2xlZnQ6MH01MCV7bGVmdDozMHB4fX1ALW1zLWtleWZyYW1lcyBsZy1sZWZ0LWVuZHswJSwxMDAle2xlZnQ6MH01MCV7bGVmdDozMHB4fX1Aa2V5ZnJhbWVzIGxnLWxlZnQtZW5kezAlLDEwMCV7bGVmdDowfTUwJXtsZWZ0OjMwcHh9fS5sZy1vdXRlci5sZy1yaWdodC1lbmQgLmxnLW9iamVjdHstd2Via2l0LWFuaW1hdGlvbjpsZy1yaWdodC1lbmQgLjNzOy1vLWFuaW1hdGlvbjpsZy1yaWdodC1lbmQgLjNzO2FuaW1hdGlvbjpsZy1yaWdodC1lbmQgLjNzO3Bvc2l0aW9uOnJlbGF0aXZlfS5sZy1vdXRlci5sZy1sZWZ0LWVuZCAubGctb2JqZWN0ey13ZWJraXQtYW5pbWF0aW9uOmxnLWxlZnQtZW5kIC4zczstby1hbmltYXRpb246bGctbGVmdC1lbmQgLjNzO2FuaW1hdGlvbjpsZy1sZWZ0LWVuZCAuM3M7cG9zaXRpb246cmVsYXRpdmV9LmxnLXRvb2xiYXJ7ei1pbmRleDoxMDgyO2xlZnQ6MDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDt3aWR0aDoxMDAlfS5sZy10b29sYmFyIC5sZy1pY29ue2NvbG9yOiM5OTk7Y3Vyc29yOnBvaW50ZXI7ZmxvYXQ6cmlnaHQ7Zm9udC1zaXplOjI0cHg7aGVpZ2h0OjQ3cHg7bGluZS1oZWlnaHQ6MjdweDtwYWRkaW5nOjEwcHggMDt0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDo1MHB4O3RleHQtZGVjb3JhdGlvbjpub25lIWltcG9ydGFudDtvdXRsaW5lOjA7LXdlYmtpdC10cmFuc2l0aW9uOmNvbG9yIC4ycyBsaW5lYXI7LW8tdHJhbnNpdGlvbjpjb2xvciAuMnMgbGluZWFyO3RyYW5zaXRpb246Y29sb3IgLjJzIGxpbmVhcn0ubGctdG9vbGJhciAubGctaWNvbjpob3Zlcntjb2xvcjojRkZGfS5sZy10b29sYmFyIC5sZy1jbG9zZTphZnRlcntjb250ZW50OlxcXCJcXFxcRTA3MFxcXCJ9LmxnLXRvb2xiYXIgLmxnLWRvd25sb2FkOmFmdGVye2NvbnRlbnQ6XFxcIlxcXFxFMEYyXFxcIn0ubGctc3ViLWh0bWx7Ym90dG9tOjA7Y29sb3I6I0VFRTtmb250LXNpemU6MTZweDtsZWZ0OjA7cGFkZGluZzoxMHB4IDQwcHg7cG9zaXRpb246Zml4ZWQ7cmlnaHQ6MDt0ZXh0LWFsaWduOmNlbnRlcjt6LWluZGV4OjEwODB9LmxnLXN1Yi1odG1sIGg0e21hcmdpbjowO2ZvbnQtc2l6ZToxM3B4O2ZvbnQtd2VpZ2h0OjcwMH0ubGctc3ViLWh0bWwgcHtmb250LXNpemU6MTJweDttYXJnaW46NXB4IDAgMH0jbGctY291bnRlcntjb2xvcjojOTk5O2Rpc3BsYXk6aW5saW5lLWJsb2NrO2ZvbnQtc2l6ZToxNnB4O3BhZGRpbmctbGVmdDoyMHB4O3BhZGRpbmctdG9wOjEycHg7dmVydGljYWwtYWxpZ246bWlkZGxlfS5sZy1uZXh0LC5sZy1wcmV2LC5sZy10b29sYmFye29wYWNpdHk6MTstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gLjM1cyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4zNXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsY29sb3IgLjJzIGxpbmVhcjstbW96LXRyYW5zaXRpb246LW1vei10cmFuc2Zvcm0gLjM1cyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4zNXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsY29sb3IgLjJzIGxpbmVhcjstby10cmFuc2l0aW9uOi1vLXRyYW5zZm9ybSAuMzVzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjM1cyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxjb2xvciAuMnMgbGluZWFyO3RyYW5zaXRpb246dHJhbnNmb3JtIC4zNXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMzVzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLGNvbG9yIC4ycyBsaW5lYXJ9LmxnLWhpZGUtaXRlbXMgLmxnLXByZXZ7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMHB4LDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMHB4LDAsMCl9LmxnLWhpZGUtaXRlbXMgLmxnLW5leHR7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwcHgsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTBweCwwLDApfS5sZy1oaWRlLWl0ZW1zIC5sZy10b29sYmFye29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0xMHB4LDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC0xMHB4LDApfWJvZHk6bm90KC5sZy1mcm9tLWhhc2gpIC5sZy1vdXRlci5sZy1zdGFydC16b29tIC5sZy1vYmplY3R7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguNSwuNSwuNSk7dHJhbnNmb3JtOnNjYWxlM2QoLjUsLjUsLjUpO29wYWNpdHk6MDstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAyNTBtcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSFpbXBvcnRhbnQ7LW1vei10cmFuc2l0aW9uOi1tb3otdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMjUwbXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkhaW1wb3J0YW50Oy1vLXRyYW5zaXRpb246LW8tdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMjUwbXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkhaW1wb3J0YW50O3RyYW5zaXRpb246dHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMjUwbXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkhaW1wb3J0YW50Oy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjo1MCUgNTAlOy1tb3otdHJhbnNmb3JtLW9yaWdpbjo1MCUgNTAlOy1tcy10cmFuc2Zvcm0tb3JpZ2luOjUwJSA1MCU7dHJhbnNmb3JtLW9yaWdpbjo1MCUgNTAlfWJvZHk6bm90KC5sZy1mcm9tLWhhc2gpIC5sZy1vdXRlci5sZy1zdGFydC16b29tIC5sZy1pdGVtLmxnLWNvbXBsZXRlIC5sZy1vYmplY3R7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSk7dHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpO29wYWNpdHk6MX0ubGctb3V0ZXIgLmxnLXRodW1iLW91dGVye2JhY2tncm91bmQtY29sb3I6IzBEMEEwQTtib3R0b206MDtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO3otaW5kZXg6MTA4MDttYXgtaGVpZ2h0OjM1MHB4Oy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMDAlLDApOy13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAuMjVzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzOy1tb3otdHJhbnNpdGlvbjotbW96LXRyYW5zZm9ybSAuMjVzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzOy1vLXRyYW5zaXRpb246LW8tdHJhbnNmb3JtIC4yNXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjI1cyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwc30ubGctb3V0ZXIgLmxnLXRodW1iLW91dGVyLmxnLWdyYWIgLmxnLXRodW1iLWl0ZW17Y3Vyc29yOi13ZWJraXQtZ3JhYjtjdXJzb3I6LW1vei1ncmFiO2N1cnNvcjotby1ncmFiO2N1cnNvcjotbXMtZ3JhYjtjdXJzb3I6Z3JhYn0ubGctb3V0ZXIgLmxnLXRodW1iLW91dGVyLmxnLWdyYWJiaW5nIC5sZy10aHVtYi1pdGVte2N1cnNvcjptb3ZlO2N1cnNvcjotd2Via2l0LWdyYWJiaW5nO2N1cnNvcjotbW96LWdyYWJiaW5nO2N1cnNvcjotby1ncmFiYmluZztjdXJzb3I6LW1zLWdyYWJiaW5nO2N1cnNvcjpncmFiYmluZ30ubGctb3V0ZXIgLmxnLXRodW1iLW91dGVyLmxnLWRyYWdnaW5nIC5sZy10aHVtYnstd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246MHMhaW1wb3J0YW50O3RyYW5zaXRpb24tZHVyYXRpb246MHMhaW1wb3J0YW50fS5sZy1vdXRlci5sZy10aHVtYi1vcGVuIC5sZy10aHVtYi1vdXRlcnstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKX0ubGctb3V0ZXIgLmxnLXRodW1ie3BhZGRpbmc6MTBweCAwO2hlaWdodDoxMDAlO21hcmdpbi1ib3R0b206LTVweH0ubGctb3V0ZXIgLmxnLXRodW1iLWl0ZW17Y3Vyc29yOnBvaW50ZXI7ZmxvYXQ6bGVmdDtvdmVyZmxvdzpoaWRkZW47aGVpZ2h0OjEwMCU7Ym9yZGVyOjJweCBzb2xpZCAjRkZGO2JvcmRlci1yYWRpdXM6NHB4O21hcmdpbi1ib3R0b206NXB4fUBtZWRpYSAobWluLXdpZHRoOjEwMjVweCl7LmxnLW91dGVyIC5sZy10aHVtYi1pdGVtey13ZWJraXQtdHJhbnNpdGlvbjpib3JkZXItY29sb3IgLjI1cyBlYXNlOy1vLXRyYW5zaXRpb246Ym9yZGVyLWNvbG9yIC4yNXMgZWFzZTt0cmFuc2l0aW9uOmJvcmRlci1jb2xvciAuMjVzIGVhc2V9fS5sZy1vdXRlciAubGctdGh1bWItaXRlbS5hY3RpdmUsLmxnLW91dGVyIC5sZy10aHVtYi1pdGVtOmhvdmVye2JvcmRlci1jb2xvcjojYTkwNzA3fS5sZy1vdXRlciAubGctdGh1bWItaXRlbSBpbWd7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtvYmplY3QtZml0OmNvdmVyfS5sZy1vdXRlci5sZy1oYXMtdGh1bWIgLmxnLWl0ZW17cGFkZGluZy1ib3R0b206MTIwcHh9LmxnLW91dGVyLmxnLWNhbi10b2dnbGUgLmxnLWl0ZW17cGFkZGluZy1ib3R0b206MH0ubGctb3V0ZXIubGctcHVsbC1jYXB0aW9uLXVwIC5sZy1zdWItaHRtbHstd2Via2l0LXRyYW5zaXRpb246Ym90dG9tIC4yNXMgZWFzZTstby10cmFuc2l0aW9uOmJvdHRvbSAuMjVzIGVhc2U7dHJhbnNpdGlvbjpib3R0b20gLjI1cyBlYXNlfS5sZy1vdXRlci5sZy1wdWxsLWNhcHRpb24tdXAubGctdGh1bWItb3BlbiAubGctc3ViLWh0bWx7Ym90dG9tOjEwMHB4fS5sZy1vdXRlciAubGctdG9vZ2xlLXRodW1ie2JhY2tncm91bmQtY29sb3I6IzBEMEEwQTtib3JkZXItcmFkaXVzOjJweCAycHggMCAwO2NvbG9yOiM5OTk7Y3Vyc29yOnBvaW50ZXI7Zm9udC1zaXplOjI0cHg7aGVpZ2h0OjM5cHg7bGluZS1oZWlnaHQ6MjdweDtwYWRkaW5nOjVweCAwO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjIwcHg7dGV4dC1hbGlnbjpjZW50ZXI7dG9wOi0zOXB4O3dpZHRoOjUwcHh9LmxnLW91dGVyIC5sZy10b29nbGUtdGh1bWI6aG92ZXIsLmxnLW91dGVyLmxnLWRyb3Bkb3duLWFjdGl2ZSAjbGctc2hhcmV7Y29sb3I6I0ZGRn0ubGctb3V0ZXIgLmxnLXRvb2dsZS10aHVtYjphZnRlcntjb250ZW50OlxcXCJcXFxcRTFGRlxcXCJ9LmxnLW91dGVyIC5sZy12aWRlby1jb250e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTttYXgtd2lkdGg6MTE0MHB4O21heC1oZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO3BhZGRpbmc6MCA1cHh9LmxnLW91dGVyIC5sZy12aWRlb3t3aWR0aDoxMDAlO2hlaWdodDowO3BhZGRpbmctYm90dG9tOjU2LjI1JTtvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246cmVsYXRpdmV9LmxnLW91dGVyIC5sZy12aWRlbyAubGctb2JqZWN0e2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlIWltcG9ydGFudDtoZWlnaHQ6MTAwJSFpbXBvcnRhbnR9LmxnLW91dGVyIC5sZy12aWRlbyAubGctdmlkZW8tcGxheXt3aWR0aDo4NHB4O2hlaWdodDo1OXB4O3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6NTAlO3RvcDo1MCU7bWFyZ2luLWxlZnQ6LTQycHg7bWFyZ2luLXRvcDotMzBweDt6LWluZGV4OjEwODA7Y3Vyc29yOnBvaW50ZXJ9LmxnLW91dGVyIC5sZy1oYXMtaWZyYW1lIC5sZy12aWRlb3std2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzp0b3VjaDtvdmVyZmxvdzphdXRvfS5sZy1vdXRlciAubGctaGFzLXZpbWVvIC5sZy12aWRlby1wbGF5e2JhY2tncm91bmQ6dXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuLi9pbWcvdmltZW8tcGxheS5wbmdcIikpICsgXCIpIG5vLXJlcGVhdH0ubGctb3V0ZXIgLmxnLWhhcy12aW1lbzpob3ZlciAubGctdmlkZW8tcGxheXtiYWNrZ3JvdW5kOnVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vaW1nL3ZpbWVvLXBsYXkucG5nXCIpKSArIFwiKSAwIC01OHB4IG5vLXJlcGVhdH0ubGctb3V0ZXIgLmxnLWhhcy1odG1sNSAubGctdmlkZW8tcGxheXtiYWNrZ3JvdW5kOnVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vaW1nL3ZpZGVvLXBsYXkucG5nXCIpKSArIFwiKSBuby1yZXBlYXQ7aGVpZ2h0OjY0cHg7bWFyZ2luLWxlZnQ6LTMycHg7bWFyZ2luLXRvcDotMzJweDt3aWR0aDo2NHB4O29wYWNpdHk6Ljh9LmxnLW91dGVyIC5sZy1oYXMtaHRtbDU6aG92ZXIgLmxnLXZpZGVvLXBsYXl7b3BhY2l0eToxfS5sZy1vdXRlciAubGctaGFzLXlvdXR1YmUgLmxnLXZpZGVvLXBsYXl7YmFja2dyb3VuZDp1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4uL2ltZy95b3V0dWJlLXBsYXkucG5nXCIpKSArIFwiKSBuby1yZXBlYXR9LmxnLW91dGVyIC5sZy1oYXMteW91dHViZTpob3ZlciAubGctdmlkZW8tcGxheXtiYWNrZ3JvdW5kOnVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vaW1nL3lvdXR1YmUtcGxheS5wbmdcIikpICsgXCIpIDAgLTYwcHggbm8tcmVwZWF0fS5sZy1vdXRlciAubGctdmlkZW8tb2JqZWN0e3dpZHRoOjEwMCUhaW1wb3J0YW50O2hlaWdodDoxMDAlIWltcG9ydGFudDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjB9LmxnLW91dGVyIC5sZy1oYXMtdmlkZW8gLmxnLXZpZGVvLW9iamVjdHt2aXNpYmlsaXR5OmhpZGRlbn0ubGctb3V0ZXIgLmxnLWhhcy12aWRlby5sZy12aWRlby1wbGF5aW5nIC5sZy1vYmplY3QsLmxnLW91dGVyIC5sZy1oYXMtdmlkZW8ubGctdmlkZW8tcGxheWluZyAubGctdmlkZW8tcGxheXtkaXNwbGF5Om5vbmV9LmxnLW91dGVyIC5sZy1oYXMtdmlkZW8ubGctdmlkZW8tcGxheWluZyAubGctdmlkZW8tb2JqZWN0e3Zpc2liaWxpdHk6dmlzaWJsZX0ubGctcHJvZ3Jlc3MtYmFye2JhY2tncm91bmQtY29sb3I6IzMzMztoZWlnaHQ6NXB4O2xlZnQ6MDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDt3aWR0aDoxMDAlO3otaW5kZXg6MTA4MztvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2l0aW9uOm9wYWNpdHkgODBtcyBlYXNlIDBzOy1tb3otdHJhbnNpdGlvbjpvcGFjaXR5IDgwbXMgZWFzZSAwczstby10cmFuc2l0aW9uOm9wYWNpdHkgODBtcyBlYXNlIDBzO3RyYW5zaXRpb246b3BhY2l0eSA4MG1zIGVhc2UgMHN9LmxnLXByb2dyZXNzLWJhciAubGctcHJvZ3Jlc3N7YmFja2dyb3VuZC1jb2xvcjojYTkwNzA3O2hlaWdodDo1cHg7d2lkdGg6MH0ubGctcHJvZ3Jlc3MtYmFyLmxnLXN0YXJ0IC5sZy1wcm9ncmVzc3t3aWR0aDoxMDAlfS5sZy1zaG93LWF1dG9wbGF5IC5sZy1wcm9ncmVzcy1iYXJ7b3BhY2l0eToxfS5sZy1hdXRvcGxheS1idXR0b246YWZ0ZXJ7Y29udGVudDpcXFwiXFxcXEUwMURcXFwifS5sZy1zaG93LWF1dG9wbGF5IC5sZy1hdXRvcGxheS1idXR0b246YWZ0ZXJ7Y29udGVudDpcXFwiXFxcXEUwMUFcXFwifS5sZy1vdXRlci5sZy1jc3MzLmxnLXpvb20tZHJhZ2dpbmcgLmxnLWl0ZW0ubGctY29tcGxldGUubGctem9vbWFibGUgLmxnLWltYWdlLC5sZy1vdXRlci5sZy1jc3MzLmxnLXpvb20tZHJhZ2dpbmcgLmxnLWl0ZW0ubGctY29tcGxldGUubGctem9vbWFibGUgLmxnLWltZy13cmFwey13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjowczt0cmFuc2l0aW9uLWR1cmF0aW9uOjBzfS5sZy1vdXRlci5sZy11c2UtdHJhbnNpdGlvbi1mb3Item9vbSAubGctaXRlbS5sZy1jb21wbGV0ZS5sZy16b29tYWJsZSAubGctaW1nLXdyYXB7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIC4zcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwczstbW96LXRyYW5zaXRpb246LW1vei10cmFuc2Zvcm0gLjNzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzOy1vLXRyYW5zaXRpb246LW8tdHJhbnNmb3JtIC4zcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuM3MgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHN9LmxnLW91dGVyLmxnLXVzZS1sZWZ0LWZvci16b29tIC5sZy1pdGVtLmxnLWNvbXBsZXRlLmxnLXpvb21hYmxlIC5sZy1pbWctd3JhcHstd2Via2l0LXRyYW5zaXRpb246bGVmdCAuM3MgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsdG9wIC4zcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwczstbW96LXRyYW5zaXRpb246bGVmdCAuM3MgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsdG9wIC4zcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwczstby10cmFuc2l0aW9uOmxlZnQgLjNzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLHRvcCAuM3MgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHM7dHJhbnNpdGlvbjpsZWZ0IC4zcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyx0b3AgLjNzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzfS5sZy1vdXRlciAubGctaXRlbS5sZy1jb21wbGV0ZS5sZy16b29tYWJsZSAubGctaW1nLXdyYXB7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjstbW96LWJhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuO2JhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVufS5sZy1vdXRlciAubGctaXRlbS5sZy1jb21wbGV0ZS5sZy16b29tYWJsZSAubGctaW1hZ2V7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSk7dHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpOy13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAuM3MgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMTVzIWltcG9ydGFudDstbW96LXRyYW5zaXRpb246LW1vei10cmFuc2Zvcm0gLjNzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjE1cyFpbXBvcnRhbnQ7LW8tdHJhbnNpdGlvbjotby10cmFuc2Zvcm0gLjNzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjE1cyFpbXBvcnRhbnQ7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjNzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjE1cyFpbXBvcnRhbnQ7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjAgMDstbW96LXRyYW5zZm9ybS1vcmlnaW46MCAwOy1tcy10cmFuc2Zvcm0tb3JpZ2luOjAgMDt0cmFuc2Zvcm0tb3JpZ2luOjAgMDstd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuOy1tb3otYmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47YmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW59I2xnLXpvb20taW46YWZ0ZXJ7Y29udGVudDpcXFwiXFxcXEUzMTFcXFwifSNsZy1hY3R1YWwtc2l6ZXtmb250LXNpemU6MjBweH0jbGctYWN0dWFsLXNpemU6YWZ0ZXJ7Y29udGVudDpcXFwiXFxcXEUwMzNcXFwifSNsZy16b29tLW91dHtvcGFjaXR5Oi41O3BvaW50ZXItZXZlbnRzOm5vbmV9I2xnLXpvb20tb3V0OmFmdGVye2NvbnRlbnQ6XFxcIlxcXFxFMzEyXFxcIn0ubGctem9vbWVkICNsZy16b29tLW91dHtvcGFjaXR5OjE7cG9pbnRlci1ldmVudHM6YXV0b30ubGctb3V0ZXIgLmxnLXBhZ2VyLW91dGVye2JvdHRvbTo2MHB4O2xlZnQ6MDtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO3RleHQtYWxpZ246Y2VudGVyO3otaW5kZXg6MTA4MDtoZWlnaHQ6MTBweH0ubGctb3V0ZXIgLmxnLXBhZ2VyLW91dGVyLmxnLXBhZ2VyLWhvdmVyIC5sZy1wYWdlci1jb250e292ZXJmbG93OnZpc2libGV9LmxnLW91dGVyIC5sZy1wYWdlci1jb250e2N1cnNvcjpwb2ludGVyO2Rpc3BsYXk6aW5saW5lLWJsb2NrO292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjpyZWxhdGl2ZTt2ZXJ0aWNhbC1hbGlnbjp0b3A7bWFyZ2luOjAgNXB4fS5sZy1vdXRlciAubGctcGFnZXItY29udDpob3ZlciAubGctcGFnZXItdGh1bWItY29udHtvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCl9LmxnLW91dGVyIC5sZy1wYWdlci1jb250LmxnLXBhZ2VyLWFjdGl2ZSAubGctcGFnZXJ7Ym94LXNoYWRvdzowIDAgMCAycHggI2ZmZiBpbnNldH0ubGctb3V0ZXIgLmxnLXBhZ2VyLXRodW1iLWNvbnR7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOiNGRkY7Ym90dG9tOjEwMCU7aGVpZ2h0OjgzcHg7bGVmdDowO21hcmdpbi1ib3R0b206MjBweDttYXJnaW4tbGVmdDotNjBweDtvcGFjaXR5OjA7cGFkZGluZzo1cHg7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTIwcHg7Ym9yZGVyLXJhZGl1czozcHg7LXdlYmtpdC10cmFuc2l0aW9uOm9wYWNpdHkgLjE1cyBlYXNlIDBzLC13ZWJraXQtdHJhbnNmb3JtIC4xNXMgZWFzZSAwczstbW96LXRyYW5zaXRpb246b3BhY2l0eSAuMTVzIGVhc2UgMHMsLW1vei10cmFuc2Zvcm0gLjE1cyBlYXNlIDBzOy1vLXRyYW5zaXRpb246b3BhY2l0eSAuMTVzIGVhc2UgMHMsLW8tdHJhbnNmb3JtIC4xNXMgZWFzZSAwczt0cmFuc2l0aW9uOm9wYWNpdHkgLjE1cyBlYXNlIDBzLHRyYW5zZm9ybSAuMTVzIGVhc2UgMHM7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCw1cHgsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsNXB4LDApfS5sZy1vdXRlciAubGctcGFnZXItdGh1bWItY29udCBpbWd7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0ubGctb3V0ZXIgLmxnLXBhZ2Vye2JhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwuNSk7Ym9yZGVyLXJhZGl1czo1MCU7Ym94LXNoYWRvdzowIDAgMCA4cHggcmdiYSgyNTUsMjU1LDI1NSwuNykgaW5zZXQ7ZGlzcGxheTpibG9jaztoZWlnaHQ6MTJweDstd2Via2l0LXRyYW5zaXRpb246Ym94LXNoYWRvdyAuM3MgZWFzZSAwczstby10cmFuc2l0aW9uOmJveC1zaGFkb3cgLjNzIGVhc2UgMHM7dHJhbnNpdGlvbjpib3gtc2hhZG93IC4zcyBlYXNlIDBzO3dpZHRoOjEycHh9LmxnLW91dGVyIC5sZy1wYWdlcjpmb2N1cywubGctb3V0ZXIgLmxnLXBhZ2VyOmhvdmVye2JveC1zaGFkb3c6MCAwIDAgOHB4ICNmZmYgaW5zZXR9LmxnLW91dGVyIC5sZy1jYXJldHtib3JkZXItbGVmdDoxMHB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1yaWdodDoxMHB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci10b3A6MTBweCBkYXNoZWQ7Ym90dG9tOi0xMHB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO2hlaWdodDowO2xlZnQ6NTAlO21hcmdpbi1sZWZ0Oi01cHg7cG9zaXRpb246YWJzb2x1dGU7dmVydGljYWwtYWxpZ246bWlkZGxlO3dpZHRoOjB9LmxnLWZ1bGxzY3JlZW46YWZ0ZXJ7Y29udGVudDpcXFwiXFxcXEUyMENcXFwifS5sZy1mdWxsc2NyZWVuLW9uIC5sZy1mdWxsc2NyZWVuOmFmdGVye2NvbnRlbnQ6XFxcIlxcXFxFMjBEXFxcIn0ubGctb3V0ZXIgI2xnLWRyb3Bkb3duLW92ZXJsYXl7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4yNSk7Ym90dG9tOjA7Y3Vyc29yOmRlZmF1bHQ7bGVmdDowO3Bvc2l0aW9uOmZpeGVkO3JpZ2h0OjA7dG9wOjA7ei1pbmRleDoxMDgxO29wYWNpdHk6MDt2aXNpYmlsaXR5OmhpZGRlbjstd2Via2l0LXRyYW5zaXRpb246dmlzaWJpbGl0eSAwcyBsaW5lYXIgLjE4cyxvcGFjaXR5IC4xOHMgbGluZWFyIDBzOy1vLXRyYW5zaXRpb246dmlzaWJpbGl0eSAwcyBsaW5lYXIgLjE4cyxvcGFjaXR5IC4xOHMgbGluZWFyIDBzO3RyYW5zaXRpb246dmlzaWJpbGl0eSAwcyBsaW5lYXIgLjE4cyxvcGFjaXR5IC4xOHMgbGluZWFyIDBzfS5sZy1vdXRlci5sZy1kcm9wZG93bi1hY3RpdmUgI2xnLWRyb3Bkb3duLW92ZXJsYXksLmxnLW91dGVyLmxnLWRyb3Bkb3duLWFjdGl2ZSAubGctZHJvcGRvd257LXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OjBzO3RyYW5zaXRpb24tZGVsYXk6MHM7LW1vei10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApOy1vLXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7b3BhY2l0eToxO3Zpc2liaWxpdHk6dmlzaWJsZX0ubGctb3V0ZXIgLmxnLWRyb3Bkb3due2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItcmFkaXVzOjJweDtmb250LXNpemU6MTRweDtsaXN0LXN0eWxlLXR5cGU6bm9uZTttYXJnaW46MDtwYWRkaW5nOjEwcHggMDtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO3RleHQtYWxpZ246bGVmdDt0b3A6NTBweDtvcGFjaXR5OjA7dmlzaWJpbGl0eTpoaWRkZW47LW1vei10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCw1cHgsMCk7LW8tdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsNXB4LDApOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCw1cHgsMCk7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCw1cHgsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsNXB4LDApOy13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAuMThzIGxpbmVhciAwcyx2aXNpYmlsaXR5IDBzIGxpbmVhciAuNXMsb3BhY2l0eSAuMThzIGxpbmVhciAwczstbW96LXRyYW5zaXRpb246LW1vei10cmFuc2Zvcm0gLjE4cyBsaW5lYXIgMHMsdmlzaWJpbGl0eSAwcyBsaW5lYXIgLjVzLG9wYWNpdHkgLjE4cyBsaW5lYXIgMHM7LW8tdHJhbnNpdGlvbjotby10cmFuc2Zvcm0gLjE4cyBsaW5lYXIgMHMsdmlzaWJpbGl0eSAwcyBsaW5lYXIgLjVzLG9wYWNpdHkgLjE4cyBsaW5lYXIgMHM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjE4cyBsaW5lYXIgMHMsdmlzaWJpbGl0eSAwcyBsaW5lYXIgLjVzLG9wYWNpdHkgLjE4cyBsaW5lYXIgMHN9LmxnLW91dGVyIC5sZy1kcm9wZG93bjphZnRlcntjb250ZW50OlxcXCJcXFwiO2Rpc3BsYXk6YmxvY2s7aGVpZ2h0OjA7d2lkdGg6MDtwb3NpdGlvbjphYnNvbHV0ZTtib3JkZXI6OHB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1ib3R0b20tY29sb3I6I0ZGRjtyaWdodDoxNnB4O3RvcDotMTZweH0ubGctb3V0ZXIgLmxnLWRyb3Bkb3duPmxpOmxhc3QtY2hpbGR7bWFyZ2luLWJvdHRvbTowfS5sZy1vdXRlciAubGctZHJvcGRvd24+bGk6aG92ZXIgLmxnLWljb24sLmxnLW91dGVyIC5sZy1kcm9wZG93bj5saTpob3ZlciBhe2NvbG9yOiMzMzN9LmxnLW91dGVyIC5sZy1kcm9wZG93biBhe2NvbG9yOiMzMzM7ZGlzcGxheTpibG9jazt3aGl0ZS1zcGFjZTpwcmU7cGFkZGluZzo0cHggMTJweDtmb250LWZhbWlseTpcXFwiT3BlbiBTYW5zXFxcIixcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxMnB4fS5sZy1vdXRlciAubGctZHJvcGRvd24gYTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjA3KX0ubGctb3V0ZXIgLmxnLWRyb3Bkb3duIC5sZy1kcm9wZG93bi10ZXh0e2Rpc3BsYXk6aW5saW5lLWJsb2NrO2xpbmUtaGVpZ2h0OjE7bWFyZ2luLXRvcDotM3B4O3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0ubGctb3V0ZXIgLmxnLWRyb3Bkb3duIC5sZy1pY29ue2NvbG9yOiMzMzM7ZGlzcGxheTppbmxpbmUtYmxvY2s7ZmxvYXQ6bm9uZTtmb250LXNpemU6MjBweDtoZWlnaHQ6YXV0bztsaW5lLWhlaWdodDoxO21hcmdpbi1yaWdodDo4cHg7cGFkZGluZzowO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTt3aWR0aDphdXRvfS5sZy1vdXRlciwubGctb3V0ZXIgLmxnLC5sZy1vdXRlciAubGctaW5uZXJ7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0ubGctb3V0ZXIgI2xnLXNoYXJle3Bvc2l0aW9uOnJlbGF0aXZlfS5sZy1vdXRlciAjbGctc2hhcmU6YWZ0ZXJ7Y29udGVudDpcXFwiXFxcXEU4MERcXFwifS5sZy1vdXRlciAjbGctc2hhcmUtZmFjZWJvb2sgLmxnLWljb257Y29sb3I6IzNiNTk5OH0ubGctb3V0ZXIgI2xnLXNoYXJlLWZhY2Vib29rIC5sZy1pY29uOmFmdGVye2NvbnRlbnQ6XFxcIlxcXFxFOTAxXFxcIn0ubGctb3V0ZXIgI2xnLXNoYXJlLXR3aXR0ZXIgLmxnLWljb257Y29sb3I6IzAwYWNlZH0ubGctb3V0ZXIgI2xnLXNoYXJlLXR3aXR0ZXIgLmxnLWljb246YWZ0ZXJ7Y29udGVudDpcXFwiXFxcXEU5MDRcXFwifS5sZy1vdXRlciAjbGctc2hhcmUtZ29vZ2xlcGx1cyAubGctaWNvbntjb2xvcjojZGQ0YjM5fS5sZy1vdXRlciAjbGctc2hhcmUtZ29vZ2xlcGx1cyAubGctaWNvbjphZnRlcntjb250ZW50OlxcXCJcXFxcRTkwMlxcXCJ9LmxnLW91dGVyICNsZy1zaGFyZS1waW50ZXJlc3QgLmxnLWljb257Y29sb3I6I2NiMjAyN30ubGctb3V0ZXIgI2xnLXNoYXJlLXBpbnRlcmVzdCAubGctaWNvbjphZnRlcntjb250ZW50OlxcXCJcXFxcRTkwM1xcXCJ9LmxnLWdyb3VwOmFmdGVye2NvbnRlbnQ6XFxcIlxcXCI7ZGlzcGxheTp0YWJsZTtjbGVhcjpib3RofS5sZy1vdXRlcntwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7ei1pbmRleDoxMDUwO3RleHQtYWxpZ246bGVmdDtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2l0aW9uOm9wYWNpdHkgLjE1cyBlYXNlIDBzOy1vLXRyYW5zaXRpb246b3BhY2l0eSAuMTVzIGVhc2UgMHM7dHJhbnNpdGlvbjpvcGFjaXR5IC4xNXMgZWFzZSAwc30ubGctb3V0ZXIgKnstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDstbW96LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmxnLW91dGVyLmxnLXZpc2libGV7b3BhY2l0eToxfS5sZy1vdXRlci5sZy1jc3MzIC5sZy1pdGVtLmxnLWN1cnJlbnQsLmxnLW91dGVyLmxnLWNzczMgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwubGctb3V0ZXIubGctY3NzMyAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjppbmhlcml0IWltcG9ydGFudDt0cmFuc2l0aW9uLWR1cmF0aW9uOmluaGVyaXQhaW1wb3J0YW50Oy13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246aW5oZXJpdCFpbXBvcnRhbnQ7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246aW5oZXJpdCFpbXBvcnRhbnR9LmxnLW91dGVyLmxnLWNzczMubGctZHJhZ2dpbmcgLmxnLWl0ZW0ubGctY3VycmVudCwubGctb3V0ZXIubGctY3NzMy5sZy1kcmFnZ2luZyAubGctaXRlbS5sZy1uZXh0LXNsaWRlLC5sZy1vdXRlci5sZy1jc3MzLmxnLWRyYWdnaW5nIC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOjBzIWltcG9ydGFudDt0cmFuc2l0aW9uLWR1cmF0aW9uOjBzIWltcG9ydGFudDtvcGFjaXR5OjF9LmxnLW91dGVyLmxnLWdyYWIgaW1nLmxnLW9iamVjdHtjdXJzb3I6LXdlYmtpdC1ncmFiO2N1cnNvcjotbW96LWdyYWI7Y3Vyc29yOi1vLWdyYWI7Y3Vyc29yOi1tcy1ncmFiO2N1cnNvcjpncmFifS5sZy1vdXRlci5sZy1ncmFiYmluZyBpbWcubGctb2JqZWN0e2N1cnNvcjptb3ZlO2N1cnNvcjotd2Via2l0LWdyYWJiaW5nO2N1cnNvcjotbW96LWdyYWJiaW5nO2N1cnNvcjotby1ncmFiYmluZztjdXJzb3I6LW1zLWdyYWJiaW5nO2N1cnNvcjpncmFiYmluZ30ubGctb3V0ZXIgLmxne3Bvc2l0aW9uOnJlbGF0aXZlO292ZXJmbG93OmhpZGRlbjttYXJnaW4tbGVmdDphdXRvO21hcmdpbi1yaWdodDphdXRvO21heC13aWR0aDoxMDAlO21heC1oZWlnaHQ6MTAwJX0ubGctb3V0ZXIgLmxnLWlubmVye3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6MDt3aGl0ZS1zcGFjZTpub3dyYXB9LmxnLW91dGVyIC5sZy1pdGVte2JhY2tncm91bmQ6dXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuLi9pbWcvbG9hZGluZy5naWZcIikpICsgXCIpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9LmxnLW91dGVyLmxnLWNzcyAubGctY3VycmVudCwubGctb3V0ZXIubGctY3NzMyAubGctY3VycmVudCwubGctb3V0ZXIubGctY3NzMyAubGctbmV4dC1zbGlkZSwubGctb3V0ZXIubGctY3NzMyAubGctcHJldi1zbGlkZXtkaXNwbGF5OmlubGluZS1ibG9jayFpbXBvcnRhbnR9LmxnLW91dGVyIC5sZy1pbWctd3JhcCwubGctb3V0ZXIgLmxnLWl0ZW17ZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC1hbGlnbjpjZW50ZXI7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0ubGctb3V0ZXIgLmxnLWltZy13cmFwOmJlZm9yZSwubGctb3V0ZXIgLmxnLWl0ZW06YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXCI7ZGlzcGxheTppbmxpbmUtYmxvY2s7aGVpZ2h0OjUwJTt3aWR0aDoxcHg7bWFyZ2luLXJpZ2h0Oi0xcHh9LmxnLW91dGVyIC5sZy1pbWctd3JhcHtwb3NpdGlvbjphYnNvbHV0ZTtwYWRkaW5nOjAgNXB4O2xlZnQ6MDtyaWdodDowO3RvcDowO2JvdHRvbTowfS5sZy1vdXRlciAubGctaXRlbS5sZy1jb21wbGV0ZXtiYWNrZ3JvdW5kLWltYWdlOm5vbmV9LmxnLW91dGVyIC5sZy1pdGVtLmxnLWN1cnJlbnR7ei1pbmRleDoxMDYwfS5sZy1vdXRlciAubGctaW1hZ2V7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246bWlkZGxlO21heC13aWR0aDoxMDAlO21heC1oZWlnaHQ6MTAwJTt3aWR0aDphdXRvIWltcG9ydGFudDtoZWlnaHQ6YXV0byFpbXBvcnRhbnR9LmxnLW91dGVyLmxnLXNob3ctYWZ0ZXItbG9hZCAubGctaXRlbSAubGctb2JqZWN0LC5sZy1vdXRlci5sZy1zaG93LWFmdGVyLWxvYWQgLmxnLWl0ZW0gLmxnLXZpZGVvLXBsYXl7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNpdGlvbjpvcGFjaXR5IC4xNXMgZWFzZSAwczstby10cmFuc2l0aW9uOm9wYWNpdHkgLjE1cyBlYXNlIDBzO3RyYW5zaXRpb246b3BhY2l0eSAuMTVzIGVhc2UgMHN9LmxnLW91dGVyLmxnLXNob3ctYWZ0ZXItbG9hZCAubGctaXRlbS5sZy1jb21wbGV0ZSAubGctb2JqZWN0LC5sZy1vdXRlci5sZy1zaG93LWFmdGVyLWxvYWQgLmxnLWl0ZW0ubGctY29tcGxldGUgLmxnLXZpZGVvLXBsYXl7b3BhY2l0eToxfS5sZy1vdXRlciAubGctZW1wdHktaHRtbCwubGctb3V0ZXIubGctaGlkZS1kb3dubG9hZCAjbGctZG93bmxvYWR7ZGlzcGxheTpub25lfS5sZy1iYWNrZHJvcHtwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MDt6LWluZGV4OjEwNDA7YmFja2dyb3VuZC1jb2xvcjojMDAwO29wYWNpdHk6MDstd2Via2l0LXRyYW5zaXRpb246b3BhY2l0eSAuMTVzIGVhc2UgMHM7LW8tdHJhbnNpdGlvbjpvcGFjaXR5IC4xNXMgZWFzZSAwczt0cmFuc2l0aW9uOm9wYWNpdHkgLjE1cyBlYXNlIDBzfS5sZy1iYWNrZHJvcC5pbntvcGFjaXR5OjF9LmxnLWNzczMubGctbm8tdHJhbnMgLmxnLWN1cnJlbnQsLmxnLWNzczMubGctbm8tdHJhbnMgLmxnLW5leHQtc2xpZGUsLmxnLWNzczMubGctbm8tdHJhbnMgLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2l0aW9uOm5vbmUgMHMgZWFzZSAwcyFpbXBvcnRhbnQ7LW1vei10cmFuc2l0aW9uOm5vbmUgMHMgZWFzZSAwcyFpbXBvcnRhbnQ7LW8tdHJhbnNpdGlvbjpub25lIDBzIGVhc2UgMHMhaW1wb3J0YW50O3RyYW5zaXRpb246bm9uZSAwcyBlYXNlIDBzIWltcG9ydGFudH0ubGctY3NzMy5sZy11c2UtY3NzMyAubGctaXRlbSwubGctY3NzMy5sZy11c2UtbGVmdCAubGctaXRlbXstd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuOy1tb3otYmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47YmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW59LmxnLWNzczMubGctZmFkZSAubGctaXRlbXtvcGFjaXR5OjB9LmxnLWNzczMubGctZmFkZSAubGctaXRlbS5sZy1jdXJyZW50e29wYWNpdHk6MX0ubGctY3NzMy5sZy1mYWRlIC5sZy1pdGVtLmxnLWN1cnJlbnQsLmxnLWNzczMubGctZmFkZSAubGctaXRlbS5sZy1uZXh0LXNsaWRlLC5sZy1jc3MzLmxnLWZhZGUgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zaXRpb246b3BhY2l0eSAuMXMgZWFzZSAwczstbW96LXRyYW5zaXRpb246b3BhY2l0eSAuMXMgZWFzZSAwczstby10cmFuc2l0aW9uOm9wYWNpdHkgLjFzIGVhc2UgMHM7dHJhbnNpdGlvbjpvcGFjaXR5IC4xcyBlYXNlIDBzfS5sZy1jc3MzLmxnLXNsaWRlLmxnLXVzZS1jc3MzIC5sZy1pdGVte29wYWNpdHk6MH0ubGctY3NzMy5sZy1zbGlkZS5sZy11c2UtY3NzMyAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCl9LmxnLWNzczMubGctc2xpZGUubGctdXNlLWNzczMgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMCwwKX0ubGctY3NzMy5sZy1zbGlkZS5sZy11c2UtY3NzMyAubGctaXRlbS5sZy1jdXJyZW50ey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MX0ubGctY3NzMy5sZy1zbGlkZS5sZy11c2UtY3NzMyAubGctaXRlbS5sZy1jdXJyZW50LC5sZy1jc3MzLmxnLXNsaWRlLmxnLXVzZS1jc3MzIC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsLmxnLWNzczMubGctc2xpZGUubGctdXNlLWNzczMgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczstbW96LXRyYW5zaXRpb246LW1vei10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczstby10cmFuc2l0aW9uOi1vLXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzO3RyYW5zaXRpb246dHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHN9LmxnLWNzczMubGctc2xpZGUubGctdXNlLWxlZnQgLmxnLWl0ZW17b3BhY2l0eTowO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MH0ubGctY3NzMy5sZy1zbGlkZS5sZy11c2UtbGVmdCAubGctaXRlbS5sZy1wcmV2LXNsaWRle2xlZnQ6LTEwMCV9LmxnLWNzczMubGctc2xpZGUubGctdXNlLWxlZnQgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZXtsZWZ0OjEwMCV9LmxnLWNzczMubGctc2xpZGUubGctdXNlLWxlZnQgLmxnLWl0ZW0ubGctY3VycmVudHtsZWZ0OjA7b3BhY2l0eToxfS5sZy1jc3MzLmxnLXNsaWRlLmxnLXVzZS1sZWZ0IC5sZy1pdGVtLmxnLWN1cnJlbnQsLmxnLWNzczMubGctc2xpZGUubGctdXNlLWxlZnQgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwubGctY3NzMy5sZy1zbGlkZS5sZy11c2UtbGVmdCAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNpdGlvbjpsZWZ0IDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7LW1vei10cmFuc2l0aW9uOmxlZnQgMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczstby10cmFuc2l0aW9uOmxlZnQgMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczt0cmFuc2l0aW9uOmxlZnQgMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwc31cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVzY2FwZSh1cmwpIHtcbiAgICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHVybFxuICAgIH1cbiAgICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAgICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgICB9XG4gICAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAgIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gICAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpKSB7XG4gICAgICAgIHJldHVybiAnXCInICsgdXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJykgKyAnXCInXG4gICAgfVxuXG4gICAgcmV0dXJuIHVybFxufVxuIiwiLyohIGxnLWZ1bGxzY3JlZW4gLSB2MS4wLjEgLSAyMDE2LTA5LTMwXHJcbiogaHR0cDovL3NhY2hpbmNob29sdXIuZ2l0aHViLmlvL2xpZ2h0R2FsbGVyeVxyXG4qIENvcHlyaWdodCAoYykgMjAxNiBTYWNoaW4gTjsgTGljZW5zZWQgR1BMdjMgKi9cclxuXHJcbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlIHVubGVzcyBhbWRNb2R1bGVJZCBpcyBzZXRcbiAgICBkZWZpbmUoWydqcXVlcnknXSwgZnVuY3Rpb24gKGEwKSB7XG4gICAgICByZXR1cm4gKGZhY3RvcnkoYTApKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAvLyBOb2RlLiBEb2VzIG5vdCB3b3JrIHdpdGggc3RyaWN0IENvbW1vbkpTLCBidXRcbiAgICAvLyBvbmx5IENvbW1vbkpTLWxpa2UgZW52aXJvbm1lbnRzIHRoYXQgc3VwcG9ydCBtb2R1bGUuZXhwb3J0cyxcbiAgICAvLyBsaWtlIE5vZGUuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoJ2pxdWVyeScpKTtcbiAgfSBlbHNlIHtcbiAgICBmYWN0b3J5KGpRdWVyeSk7XG4gIH1cbn0odGhpcywgZnVuY3Rpb24gKCQpIHtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICBmdWxsU2NyZWVuOiB0cnVlXG4gICAgfTtcblxuICAgIHZhciBGdWxsc2NyZWVuID0gZnVuY3Rpb24oZWxlbWVudCkge1xuXG4gICAgICAgIC8vIGdldCBsaWdodEdhbGxlcnkgY29yZSBwbHVnaW4gZGF0YVxuICAgICAgICB0aGlzLmNvcmUgPSAkKGVsZW1lbnQpLmRhdGEoJ2xpZ2h0R2FsbGVyeScpO1xuXG4gICAgICAgIHRoaXMuJGVsID0gJChlbGVtZW50KTtcblxuICAgICAgICAvLyBleHRlbmQgbW9kdWxlIGRlZmFsdXQgc2V0dGluZ3Mgd2l0aCBsaWdodEdhbGxlcnkgY29yZSBzZXR0aW5nc1xuICAgICAgICB0aGlzLmNvcmUucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgdGhpcy5jb3JlLnMpO1xuXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBGdWxsc2NyZWVuLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBmdWxsU2NyZWVuID0gJyc7XG4gICAgICAgIGlmICh0aGlzLmNvcmUucy5mdWxsU2NyZWVuKSB7XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGZvciBmdWxsc2NyZWVuIGJyb3dzZXIgc3VwcG9ydFxuICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5mdWxsc2NyZWVuRW5hYmxlZCAmJiAhZG9jdW1lbnQud2Via2l0RnVsbHNjcmVlbkVuYWJsZWQgJiZcbiAgICAgICAgICAgICAgICAhZG9jdW1lbnQubW96RnVsbFNjcmVlbkVuYWJsZWQgJiYgIWRvY3VtZW50Lm1zRnVsbHNjcmVlbkVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZ1bGxTY3JlZW4gPSAnPHNwYW4gY2xhc3M9XCJsZy1mdWxsc2NyZWVuIGxnLWljb25cIj48L3NwYW4+JztcbiAgICAgICAgICAgICAgICB0aGlzLmNvcmUuJG91dGVyLmZpbmQoJy5sZy10b29sYmFyJykuYXBwZW5kKGZ1bGxTY3JlZW4pO1xuICAgICAgICAgICAgICAgIHRoaXMuZnVsbFNjcmVlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIEZ1bGxzY3JlZW4ucHJvdG90eXBlLnJlcXVlc3RGdWxsc2NyZWVuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBlbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgaWYgKGVsLnJlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgICBlbC5yZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgICAgICB9IGVsc2UgaWYgKGVsLm1zUmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAgIGVsLm1zUmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgfSBlbHNlIGlmIChlbC5tb3pSZXF1ZXN0RnVsbFNjcmVlbikge1xuICAgICAgICAgICAgZWwubW96UmVxdWVzdEZ1bGxTY3JlZW4oKTtcbiAgICAgICAgfSBlbHNlIGlmIChlbC53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgICAgICAgZWwud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBGdWxsc2NyZWVuLnByb3RvdHlwZS5leGl0RnVsbHNjcmVlbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQubXNFeGl0RnVsbHNjcmVlbikge1xuICAgICAgICAgICAgZG9jdW1lbnQubXNFeGl0RnVsbHNjcmVlbigpO1xuICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4pIHtcbiAgICAgICAgICAgIGRvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4oKTtcbiAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbikge1xuICAgICAgICAgICAgZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9HdWlkZS9BUEkvRE9NL1VzaW5nX2Z1bGxfc2NyZWVuX21vZGVcbiAgICBGdWxsc2NyZWVuLnByb3RvdHlwZS5mdWxsU2NyZWVuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2Z1bGxzY3JlZW5jaGFuZ2UubGcgd2Via2l0ZnVsbHNjcmVlbmNoYW5nZS5sZyBtb3pmdWxsc2NyZWVuY2hhbmdlLmxnIE1TRnVsbHNjcmVlbkNoYW5nZS5sZycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgX3RoaXMuY29yZS4kb3V0ZXIudG9nZ2xlQ2xhc3MoJ2xnLWZ1bGxzY3JlZW4tb24nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jb3JlLiRvdXRlci5maW5kKCcubGctZnVsbHNjcmVlbicpLm9uKCdjbGljay5sZycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5mdWxsc2NyZWVuRWxlbWVudCAmJlxuICAgICAgICAgICAgICAgICFkb2N1bWVudC5tb3pGdWxsU2NyZWVuRWxlbWVudCAmJiAhZG9jdW1lbnQud2Via2l0RnVsbHNjcmVlbkVsZW1lbnQgJiYgIWRvY3VtZW50Lm1zRnVsbHNjcmVlbkVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5leGl0RnVsbHNjcmVlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBGdWxsc2NyZWVuLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgLy8gZXhpdCBmcm9tIGZ1bGxzY3JlZW4gaWYgYWN0aXZhdGVkXG4gICAgICAgIHRoaXMuZXhpdEZ1bGxzY3JlZW4oKTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2Z1bGxzY3JlZW5jaGFuZ2UubGcgd2Via2l0ZnVsbHNjcmVlbmNoYW5nZS5sZyBtb3pmdWxsc2NyZWVuY2hhbmdlLmxnIE1TRnVsbHNjcmVlbkNoYW5nZS5sZycpO1xuICAgIH07XG5cbiAgICAkLmZuLmxpZ2h0R2FsbGVyeS5tb2R1bGVzLmZ1bGxzY3JlZW4gPSBGdWxsc2NyZWVuO1xuXG59KSgpO1xuXG59KSk7XG4iLCIvKiEgbGctdGh1bWJuYWlsIC0gdjEuMS4wIC0gMjAxNy0wOC0wOFxyXG4qIGh0dHA6Ly9zYWNoaW5jaG9vbHVyLmdpdGh1Yi5pby9saWdodEdhbGxlcnlcclxuKiBDb3B5cmlnaHQgKGMpIDIwMTcgU2FjaGluIE47IExpY2Vuc2VkIEdQTHYzICovXHJcblxyXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZSB1bmxlc3MgYW1kTW9kdWxlSWQgaXMgc2V0XG4gICAgZGVmaW5lKFsnanF1ZXJ5J10sIGZ1bmN0aW9uIChhMCkge1xuICAgICAgcmV0dXJuIChmYWN0b3J5KGEwKSk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgLy8gTm9kZS4gRG9lcyBub3Qgd29yayB3aXRoIHN0cmljdCBDb21tb25KUywgYnV0XG4gICAgLy8gb25seSBDb21tb25KUy1saWtlIGVudmlyb25tZW50cyB0aGF0IHN1cHBvcnQgbW9kdWxlLmV4cG9ydHMsXG4gICAgLy8gbGlrZSBOb2RlLlxuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSk7XG4gIH0gZWxzZSB7XG4gICAgZmFjdG9yeShqUXVlcnkpO1xuICB9XG59KHRoaXMsIGZ1bmN0aW9uICgkKSB7XG5cbihmdW5jdGlvbigpIHtcblxuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgdGh1bWJuYWlsOiB0cnVlLFxuXG4gICAgICAgIGFuaW1hdGVUaHVtYjogdHJ1ZSxcbiAgICAgICAgY3VycmVudFBhZ2VyUG9zaXRpb246ICdtaWRkbGUnLFxuXG4gICAgICAgIHRodW1iV2lkdGg6IDEwMCxcbiAgICAgICAgdGh1bWJIZWlnaHQ6ICc4MHB4JyxcbiAgICAgICAgdGh1bWJDb250SGVpZ2h0OiAxMDAsXG4gICAgICAgIHRodW1iTWFyZ2luOiA1LFxuXG4gICAgICAgIGV4VGh1bWJJbWFnZTogZmFsc2UsXG4gICAgICAgIHNob3dUaHVtYkJ5RGVmYXVsdDogdHJ1ZSxcbiAgICAgICAgdG9vZ2xlVGh1bWI6IHRydWUsXG4gICAgICAgIHB1bGxDYXB0aW9uVXA6IHRydWUsXG5cbiAgICAgICAgZW5hYmxlVGh1bWJEcmFnOiB0cnVlLFxuICAgICAgICBlbmFibGVUaHVtYlN3aXBlOiB0cnVlLFxuICAgICAgICBzd2lwZVRocmVzaG9sZDogNTAsXG5cbiAgICAgICAgbG9hZFlvdXR1YmVUaHVtYm5haWw6IHRydWUsXG4gICAgICAgIHlvdXR1YmVUaHVtYlNpemU6IDEsXG5cbiAgICAgICAgbG9hZFZpbWVvVGh1bWJuYWlsOiB0cnVlLFxuICAgICAgICB2aW1lb1RodW1iU2l6ZTogJ3RodW1ibmFpbF9zbWFsbCcsXG5cbiAgICAgICAgbG9hZERhaWx5bW90aW9uVGh1bWJuYWlsOiB0cnVlXG4gICAgfTtcblxuICAgIHZhciBUaHVtYm5haWwgPSBmdW5jdGlvbihlbGVtZW50KSB7XG5cbiAgICAgICAgLy8gZ2V0IGxpZ2h0R2FsbGVyeSBjb3JlIHBsdWdpbiBkYXRhXG4gICAgICAgIHRoaXMuY29yZSA9ICQoZWxlbWVudCkuZGF0YSgnbGlnaHRHYWxsZXJ5Jyk7XG5cbiAgICAgICAgLy8gZXh0ZW5kIG1vZHVsZSBkZWZhdWx0IHNldHRpbmdzIHdpdGggbGlnaHRHYWxsZXJ5IGNvcmUgc2V0dGluZ3NcbiAgICAgICAgdGhpcy5jb3JlLnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIHRoaXMuY29yZS5zKTtcblxuICAgICAgICB0aGlzLiRlbCA9ICQoZWxlbWVudCk7XG4gICAgICAgIHRoaXMuJHRodW1iT3V0ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLnRodW1iT3V0ZXJXaWR0aCA9IDA7XG4gICAgICAgIHRoaXMudGh1bWJUb3RhbFdpZHRoID0gKHRoaXMuY29yZS4kaXRlbXMubGVuZ3RoICogKHRoaXMuY29yZS5zLnRodW1iV2lkdGggKyB0aGlzLmNvcmUucy50aHVtYk1hcmdpbikpO1xuICAgICAgICB0aGlzLnRodW1iSW5kZXggPSB0aGlzLmNvcmUuaW5kZXg7XG5cbiAgICAgICAgaWYgKHRoaXMuY29yZS5zLmFuaW1hdGVUaHVtYikge1xuICAgICAgICAgICAgdGhpcy5jb3JlLnMudGh1bWJIZWlnaHQgPSAnMTAwJSc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaHVtYm5haWwgYW5pbWF0aW9uIHZhbHVlXG4gICAgICAgIHRoaXMubGVmdCA9IDA7XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFRodW1ibmFpbC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5jb3JlLnMudGh1bWJuYWlsICYmIHRoaXMuY29yZS4kaXRlbXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29yZS5zLnNob3dUaHVtYkJ5RGVmYXVsdCkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY29yZS4kb3V0ZXIuYWRkQ2xhc3MoJ2xnLXRodW1iLW9wZW4nKTtcbiAgICAgICAgICAgICAgICB9LCA3MDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5jb3JlLnMucHVsbENhcHRpb25VcCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29yZS4kb3V0ZXIuYWRkQ2xhc3MoJ2xnLXB1bGwtY2FwdGlvbi11cCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmJ1aWxkKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5jb3JlLnMuYW5pbWF0ZVRodW1iICYmIHRoaXMuY29yZS5kb0NzcygpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29yZS5zLmVuYWJsZVRodW1iRHJhZykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuYWJsZVRodW1iRHJhZygpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvcmUucy5lbmFibGVUaHVtYlN3aXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlVGh1bWJTd2lwZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMudGh1bWJDbGlja2FibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHVtYkNsaWNrYWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudG9vZ2xlKCk7XG4gICAgICAgICAgICB0aGlzLnRodW1ia2V5UHJlc3MoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBUaHVtYm5haWwucHJvdG90eXBlLmJ1aWxkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciB0aHVtYkxpc3QgPSAnJztcbiAgICAgICAgdmFyIHZpbWVvRXJyb3JUaHVtYlNpemUgPSAnJztcbiAgICAgICAgdmFyICR0aHVtYjtcbiAgICAgICAgdmFyIGh0bWwgPSAnPGRpdiBjbGFzcz1cImxnLXRodW1iLW91dGVyXCI+JyArXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cImxnLXRodW1iIGxnLWdyb3VwXCI+JyArXG4gICAgICAgICAgICAnPC9kaXY+JyArXG4gICAgICAgICAgICAnPC9kaXY+JztcblxuICAgICAgICBzd2l0Y2ggKHRoaXMuY29yZS5zLnZpbWVvVGh1bWJTaXplKSB7XG4gICAgICAgICAgICBjYXNlICd0aHVtYm5haWxfbGFyZ2UnOlxuICAgICAgICAgICAgICAgIHZpbWVvRXJyb3JUaHVtYlNpemUgPSAnNjQwJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3RodW1ibmFpbF9tZWRpdW0nOlxuICAgICAgICAgICAgICAgIHZpbWVvRXJyb3JUaHVtYlNpemUgPSAnMjAweDE1MCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0aHVtYm5haWxfc21hbGwnOlxuICAgICAgICAgICAgICAgIHZpbWVvRXJyb3JUaHVtYlNpemUgPSAnMTAweDc1JztcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLmNvcmUuJG91dGVyLmFkZENsYXNzKCdsZy1oYXMtdGh1bWInKTtcblxuICAgICAgICBfdGhpcy5jb3JlLiRvdXRlci5maW5kKCcubGcnKS5hcHBlbmQoaHRtbCk7XG5cbiAgICAgICAgX3RoaXMuJHRodW1iT3V0ZXIgPSBfdGhpcy5jb3JlLiRvdXRlci5maW5kKCcubGctdGh1bWItb3V0ZXInKTtcbiAgICAgICAgX3RoaXMudGh1bWJPdXRlcldpZHRoID0gX3RoaXMuJHRodW1iT3V0ZXIud2lkdGgoKTtcblxuICAgICAgICBpZiAoX3RoaXMuY29yZS5zLmFuaW1hdGVUaHVtYikge1xuICAgICAgICAgICAgX3RoaXMuY29yZS4kb3V0ZXIuZmluZCgnLmxnLXRodW1iJykuY3NzKHtcbiAgICAgICAgICAgICAgICB3aWR0aDogX3RoaXMudGh1bWJUb3RhbFdpZHRoICsgJ3B4JyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb3JlLnMuYW5pbWF0ZVRodW1iKSB7XG4gICAgICAgICAgICBfdGhpcy4kdGh1bWJPdXRlci5jc3MoJ2hlaWdodCcsIF90aGlzLmNvcmUucy50aHVtYkNvbnRIZWlnaHQgKyAncHgnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldFRodW1iKHNyYywgdGh1bWIsIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgaXNWaWRlbyA9IF90aGlzLmNvcmUuaXNWaWRlbyhzcmMsIGluZGV4KSB8fCB7fTtcbiAgICAgICAgICAgIHZhciB0aHVtYkltZztcbiAgICAgICAgICAgIHZhciB2aW1lb0lkID0gJyc7XG5cbiAgICAgICAgICAgIGlmIChpc1ZpZGVvLnlvdXR1YmUgfHwgaXNWaWRlby52aW1lbyB8fCBpc1ZpZGVvLmRhaWx5bW90aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzVmlkZW8ueW91dHViZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuY29yZS5zLmxvYWRZb3V0dWJlVGh1bWJuYWlsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHVtYkltZyA9ICcvL2ltZy55b3V0dWJlLmNvbS92aS8nICsgaXNWaWRlby55b3V0dWJlWzFdICsgJy8nICsgX3RoaXMuY29yZS5zLnlvdXR1YmVUaHVtYlNpemUgKyAnLmpwZyc7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHVtYkltZyA9IHRodW1iO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc1ZpZGVvLnZpbWVvKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5jb3JlLnMubG9hZFZpbWVvVGh1bWJuYWlsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHVtYkltZyA9ICcvL2kudmltZW9jZG4uY29tL3ZpZGVvL2Vycm9yXycgKyB2aW1lb0Vycm9yVGh1bWJTaXplICsgJy5qcGcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmltZW9JZCA9IGlzVmlkZW8udmltZW9bMV07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHVtYkltZyA9IHRodW1iO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc1ZpZGVvLmRhaWx5bW90aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5jb3JlLnMubG9hZERhaWx5bW90aW9uVGh1bWJuYWlsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHVtYkltZyA9ICcvL3d3dy5kYWlseW1vdGlvbi5jb20vdGh1bWJuYWlsL3ZpZGVvLycgKyBpc1ZpZGVvLmRhaWx5bW90aW9uWzFdO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGh1bWJJbWcgPSB0aHVtYjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGh1bWJJbWcgPSB0aHVtYjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGh1bWJMaXN0ICs9ICc8ZGl2IGRhdGEtdmltZW8taWQ9XCInICsgdmltZW9JZCArICdcIiBjbGFzcz1cImxnLXRodW1iLWl0ZW1cIiBzdHlsZT1cIndpZHRoOicgKyBfdGhpcy5jb3JlLnMudGh1bWJXaWR0aCArICdweDsgaGVpZ2h0OiAnICsgX3RoaXMuY29yZS5zLnRodW1iSGVpZ2h0ICsgJzsgbWFyZ2luLXJpZ2h0OiAnICsgX3RoaXMuY29yZS5zLnRodW1iTWFyZ2luICsgJ3B4XCI+PGltZyBzcmM9XCInICsgdGh1bWJJbWcgKyAnXCIgLz48L2Rpdj4nO1xuICAgICAgICAgICAgdmltZW9JZCA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF90aGlzLmNvcmUucy5keW5hbWljKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF90aGlzLmNvcmUucy5keW5hbWljRWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBnZXRUaHVtYihfdGhpcy5jb3JlLnMuZHluYW1pY0VsW2ldLnNyYywgX3RoaXMuY29yZS5zLmR5bmFtaWNFbFtpXS50aHVtYiwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdGhpcy5jb3JlLiRpdGVtcy5lYWNoKGZ1bmN0aW9uKGkpIHtcblxuICAgICAgICAgICAgICAgIGlmICghX3RoaXMuY29yZS5zLmV4VGh1bWJJbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICBnZXRUaHVtYigkKHRoaXMpLmF0dHIoJ2hyZWYnKSB8fCAkKHRoaXMpLmF0dHIoJ2RhdGEtc3JjJyksICQodGhpcykuZmluZCgnaW1nJykuYXR0cignc3JjJyksIGkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGdldFRodW1iKCQodGhpcykuYXR0cignaHJlZicpIHx8ICQodGhpcykuYXR0cignZGF0YS1zcmMnKSwgJCh0aGlzKS5hdHRyKF90aGlzLmNvcmUucy5leFRodW1iSW1hZ2UpLCBpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMuY29yZS4kb3V0ZXIuZmluZCgnLmxnLXRodW1iJykuaHRtbCh0aHVtYkxpc3QpO1xuXG4gICAgICAgICR0aHVtYiA9IF90aGlzLmNvcmUuJG91dGVyLmZpbmQoJy5sZy10aHVtYi1pdGVtJyk7XG5cbiAgICAgICAgLy8gTG9hZCB2aW1lbyB0aHVtYm5haWxzXG4gICAgICAgICR0aHVtYi5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciB2aW1lb1ZpZGVvSWQgPSAkdGhpcy5hdHRyKCdkYXRhLXZpbWVvLWlkJyk7XG5cbiAgICAgICAgICAgIGlmICh2aW1lb1ZpZGVvSWQpIHtcbiAgICAgICAgICAgICAgICAkLmdldEpTT04oJy8vd3d3LnZpbWVvLmNvbS9hcGkvdjIvdmlkZW8vJyArIHZpbWVvVmlkZW9JZCArICcuanNvbj9jYWxsYmFjaz0/Jywge1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6ICdqc29uJ1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMuZmluZCgnaW1nJykuYXR0cignc3JjJywgZGF0YVswXVtfdGhpcy5jb3JlLnMudmltZW9UaHVtYlNpemVdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gbWFuYWdlIGFjdGl2ZSBjbGFzcyBmb3IgdGh1bWJuYWlsXG4gICAgICAgICR0aHVtYi5lcShfdGhpcy5jb3JlLmluZGV4KS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIF90aGlzLmNvcmUuJGVsLm9uKCdvbkJlZm9yZVNsaWRlLmxnLnRtJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkdGh1bWIucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgJHRodW1iLmVxKF90aGlzLmNvcmUuaW5kZXgpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJHRodW1iLm9uKCdjbGljay5sZyB0b3VjaGVuZC5sZycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIF8kdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgLy8gSW4gSUU5IGFuZCBiZWxsb3cgdG91Y2ggZG9lcyBub3Qgc3VwcG9ydFxuICAgICAgICAgICAgICAgIC8vIEdvIHRvIHNsaWRlIGlmIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBjc3MgdHJhbnNpdGlvbnNcbiAgICAgICAgICAgICAgICBpZiAoKF90aGlzLnRodW1iQ2xpY2thYmxlICYmICFfdGhpcy5jb3JlLmxnQnVzeSkgfHwgIV90aGlzLmNvcmUuZG9Dc3MoKSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jb3JlLmluZGV4ID0gXyR0aGlzLmluZGV4KCk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNvcmUuc2xpZGUoX3RoaXMuY29yZS5pbmRleCwgZmFsc2UsIHRydWUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF90aGlzLmNvcmUuJGVsLm9uKCdvbkJlZm9yZVNsaWRlLmxnLnRtJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBfdGhpcy5hbmltYXRlVGh1bWIoX3RoaXMuY29yZS5pbmRleCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQod2luZG93KS5vbigncmVzaXplLmxnLnRodW1iIG9yaWVudGF0aW9uY2hhbmdlLmxnLnRodW1iJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFuaW1hdGVUaHVtYihfdGhpcy5jb3JlLmluZGV4KTtcbiAgICAgICAgICAgICAgICBfdGhpcy50aHVtYk91dGVyV2lkdGggPSBfdGhpcy4kdGh1bWJPdXRlci53aWR0aCgpO1xuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgVGh1bWJuYWlsLnByb3RvdHlwZS5zZXRUcmFuc2xhdGUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAvLyBqUXVlcnkgc3VwcG9ydHMgQXV0b21hdGljIENTUyBwcmVmaXhpbmcgc2luY2UgalF1ZXJ5IDEuOC4wXG4gICAgICAgIHRoaXMuY29yZS4kb3V0ZXIuZmluZCgnLmxnLXRodW1iJykuY3NzKHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKC0nICsgKHZhbHVlKSArICdweCwgMHB4LCAwcHgpJ1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgVGh1bWJuYWlsLnByb3RvdHlwZS5hbmltYXRlVGh1bWIgPSBmdW5jdGlvbihpbmRleCkge1xuICAgICAgICB2YXIgJHRodW1iID0gdGhpcy5jb3JlLiRvdXRlci5maW5kKCcubGctdGh1bWInKTtcbiAgICAgICAgaWYgKHRoaXMuY29yZS5zLmFuaW1hdGVUaHVtYikge1xuICAgICAgICAgICAgdmFyIHBvc2l0aW9uO1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmNvcmUucy5jdXJyZW50UGFnZXJQb3NpdGlvbikge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ21pZGRsZSc6XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gKHRoaXMudGh1bWJPdXRlcldpZHRoIC8gMikgLSAodGhpcy5jb3JlLnMudGh1bWJXaWR0aCAvIDIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gdGhpcy50aHVtYk91dGVyV2lkdGggLSB0aGlzLmNvcmUucy50aHVtYldpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sZWZ0ID0gKCh0aGlzLmNvcmUucy50aHVtYldpZHRoICsgdGhpcy5jb3JlLnMudGh1bWJNYXJnaW4pICogaW5kZXggLSAxKSAtIHBvc2l0aW9uO1xuICAgICAgICAgICAgaWYgKHRoaXMubGVmdCA+ICh0aGlzLnRodW1iVG90YWxXaWR0aCAtIHRoaXMudGh1bWJPdXRlcldpZHRoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubGVmdCA9IHRoaXMudGh1bWJUb3RhbFdpZHRoIC0gdGhpcy50aHVtYk91dGVyV2lkdGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmxlZnQgPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0ID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuY29yZS5sR2FsbGVyeU9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEkdGh1bWIuaGFzQ2xhc3MoJ29uJykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3JlLiRvdXRlci5maW5kKCcubGctdGh1bWInKS5jc3MoJ3RyYW5zaXRpb24tZHVyYXRpb24nLCB0aGlzLmNvcmUucy5zcGVlZCArICdtcycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jb3JlLmRvQ3NzKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgJHRodW1iLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogLXRoaXMubGVmdCArICdweCdcbiAgICAgICAgICAgICAgICAgICAgfSwgdGhpcy5jb3JlLnMuc3BlZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNvcmUuZG9Dc3MoKSkge1xuICAgICAgICAgICAgICAgICAgICAkdGh1bWIuY3NzKCdsZWZ0JywgLXRoaXMubGVmdCArICdweCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZXRUcmFuc2xhdGUodGhpcy5sZWZ0KTtcblxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIEVuYWJsZSB0aHVtYm5haWwgZHJhZ2dpbmcgYW5kIHN3aXBpbmdcbiAgICBUaHVtYm5haWwucHJvdG90eXBlLmVuYWJsZVRodW1iRHJhZyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBzdGFydENvb3JkcyA9IDA7XG4gICAgICAgIHZhciBlbmRDb29yZHMgPSAwO1xuICAgICAgICB2YXIgaXNEcmFnaW5nID0gZmFsc2U7XG4gICAgICAgIHZhciBpc01vdmVkID0gZmFsc2U7XG4gICAgICAgIHZhciB0ZW1wTGVmdCA9IDA7XG5cbiAgICAgICAgX3RoaXMuJHRodW1iT3V0ZXIuYWRkQ2xhc3MoJ2xnLWdyYWInKTtcblxuICAgICAgICBfdGhpcy5jb3JlLiRvdXRlci5maW5kKCcubGctdGh1bWInKS5vbignbW91c2Vkb3duLmxnLnRodW1iJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYgKF90aGlzLnRodW1iVG90YWxXaWR0aCA+IF90aGlzLnRodW1iT3V0ZXJXaWR0aCkge1xuICAgICAgICAgICAgICAgIC8vIGV4ZWN1dGUgb25seSBvbiAubGctb2JqZWN0XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHN0YXJ0Q29vcmRzID0gZS5wYWdlWDtcbiAgICAgICAgICAgICAgICBpc0RyYWdpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgLy8gKiogRml4IGZvciB3ZWJraXQgY3Vyc29yIGlzc3VlIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0yNjcyM1xuICAgICAgICAgICAgICAgIF90aGlzLmNvcmUuJG91dGVyLnNjcm9sbExlZnQgKz0gMTtcbiAgICAgICAgICAgICAgICBfdGhpcy5jb3JlLiRvdXRlci5zY3JvbGxMZWZ0IC09IDE7XG5cbiAgICAgICAgICAgICAgICAvLyAqXG4gICAgICAgICAgICAgICAgX3RoaXMudGh1bWJDbGlja2FibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBfdGhpcy4kdGh1bWJPdXRlci5yZW1vdmVDbGFzcygnbGctZ3JhYicpLmFkZENsYXNzKCdsZy1ncmFiYmluZycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKHdpbmRvdykub24oJ21vdXNlbW92ZS5sZy50aHVtYicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmIChpc0RyYWdpbmcpIHtcbiAgICAgICAgICAgICAgICB0ZW1wTGVmdCA9IF90aGlzLmxlZnQ7XG4gICAgICAgICAgICAgICAgaXNNb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgZW5kQ29vcmRzID0gZS5wYWdlWDtcblxuICAgICAgICAgICAgICAgIF90aGlzLiR0aHVtYk91dGVyLmFkZENsYXNzKCdsZy1kcmFnZ2luZycpO1xuXG4gICAgICAgICAgICAgICAgdGVtcExlZnQgPSB0ZW1wTGVmdCAtIChlbmRDb29yZHMgLSBzdGFydENvb3Jkcyk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGVtcExlZnQgPiAoX3RoaXMudGh1bWJUb3RhbFdpZHRoIC0gX3RoaXMudGh1bWJPdXRlcldpZHRoKSkge1xuICAgICAgICAgICAgICAgICAgICB0ZW1wTGVmdCA9IF90aGlzLnRodW1iVG90YWxXaWR0aCAtIF90aGlzLnRodW1iT3V0ZXJXaWR0aDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGVtcExlZnQgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBMZWZ0ID0gMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBtb3ZlIGN1cnJlbnQgc2xpZGVcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRUcmFuc2xhdGUodGVtcExlZnQpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQod2luZG93KS5vbignbW91c2V1cC5sZy50aHVtYicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKGlzTW92ZWQpIHtcbiAgICAgICAgICAgICAgICBpc01vdmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgX3RoaXMuJHRodW1iT3V0ZXIucmVtb3ZlQ2xhc3MoJ2xnLWRyYWdnaW5nJyk7XG5cbiAgICAgICAgICAgICAgICBfdGhpcy5sZWZ0ID0gdGVtcExlZnQ7XG5cbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoZW5kQ29vcmRzIC0gc3RhcnRDb29yZHMpIDwgX3RoaXMuY29yZS5zLnN3aXBlVGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnRodW1iQ2xpY2thYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudGh1bWJDbGlja2FibGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXNEcmFnaW5nKSB7XG4gICAgICAgICAgICAgICAgaXNEcmFnaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgX3RoaXMuJHRodW1iT3V0ZXIucmVtb3ZlQ2xhc3MoJ2xnLWdyYWJiaW5nJykuYWRkQ2xhc3MoJ2xnLWdyYWInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgVGh1bWJuYWlsLnByb3RvdHlwZS5lbmFibGVUaHVtYlN3aXBlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBzdGFydENvb3JkcyA9IDA7XG4gICAgICAgIHZhciBlbmRDb29yZHMgPSAwO1xuICAgICAgICB2YXIgaXNNb3ZlZCA9IGZhbHNlO1xuICAgICAgICB2YXIgdGVtcExlZnQgPSAwO1xuXG4gICAgICAgIF90aGlzLmNvcmUuJG91dGVyLmZpbmQoJy5sZy10aHVtYicpLm9uKCd0b3VjaHN0YXJ0LmxnJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYgKF90aGlzLnRodW1iVG90YWxXaWR0aCA+IF90aGlzLnRodW1iT3V0ZXJXaWR0aCkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBzdGFydENvb3JkcyA9IGUub3JpZ2luYWxFdmVudC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYO1xuICAgICAgICAgICAgICAgIF90aGlzLnRodW1iQ2xpY2thYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF90aGlzLmNvcmUuJG91dGVyLmZpbmQoJy5sZy10aHVtYicpLm9uKCd0b3VjaG1vdmUubGcnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMudGh1bWJUb3RhbFdpZHRoID4gX3RoaXMudGh1bWJPdXRlcldpZHRoKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGVuZENvb3JkcyA9IGUub3JpZ2luYWxFdmVudC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYO1xuICAgICAgICAgICAgICAgIGlzTW92ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgX3RoaXMuJHRodW1iT3V0ZXIuYWRkQ2xhc3MoJ2xnLWRyYWdnaW5nJyk7XG5cbiAgICAgICAgICAgICAgICB0ZW1wTGVmdCA9IF90aGlzLmxlZnQ7XG5cbiAgICAgICAgICAgICAgICB0ZW1wTGVmdCA9IHRlbXBMZWZ0IC0gKGVuZENvb3JkcyAtIHN0YXJ0Q29vcmRzKTtcblxuICAgICAgICAgICAgICAgIGlmICh0ZW1wTGVmdCA+IChfdGhpcy50aHVtYlRvdGFsV2lkdGggLSBfdGhpcy50aHVtYk91dGVyV2lkdGgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBMZWZ0ID0gX3RoaXMudGh1bWJUb3RhbFdpZHRoIC0gX3RoaXMudGh1bWJPdXRlcldpZHRoO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0ZW1wTGVmdCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcExlZnQgPSAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIG1vdmUgY3VycmVudCBzbGlkZVxuICAgICAgICAgICAgICAgIF90aGlzLnNldFRyYW5zbGF0ZSh0ZW1wTGVmdCk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgX3RoaXMuY29yZS4kb3V0ZXIuZmluZCgnLmxnLXRodW1iJykub24oJ3RvdWNoZW5kLmxnJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMudGh1bWJUb3RhbFdpZHRoID4gX3RoaXMudGh1bWJPdXRlcldpZHRoKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNNb3ZlZCkge1xuICAgICAgICAgICAgICAgICAgICBpc01vdmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLiR0aHVtYk91dGVyLnJlbW92ZUNsYXNzKCdsZy1kcmFnZ2luZycpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoZW5kQ29vcmRzIC0gc3RhcnRDb29yZHMpIDwgX3RoaXMuY29yZS5zLnN3aXBlVGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy50aHVtYkNsaWNrYWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5sZWZ0ID0gdGVtcExlZnQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudGh1bWJDbGlja2FibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudGh1bWJDbGlja2FibGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBUaHVtYm5haWwucHJvdG90eXBlLnRvb2dsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoX3RoaXMuY29yZS5zLnRvb2dsZVRodW1iKSB7XG4gICAgICAgICAgICBfdGhpcy5jb3JlLiRvdXRlci5hZGRDbGFzcygnbGctY2FuLXRvZ2dsZScpO1xuICAgICAgICAgICAgX3RoaXMuJHRodW1iT3V0ZXIuYXBwZW5kKCc8c3BhbiBjbGFzcz1cImxnLXRvb2dsZS10aHVtYiBsZy1pY29uXCI+PC9zcGFuPicpO1xuICAgICAgICAgICAgX3RoaXMuY29yZS4kb3V0ZXIuZmluZCgnLmxnLXRvb2dsZS10aHVtYicpLm9uKCdjbGljay5sZycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmNvcmUuJG91dGVyLnRvZ2dsZUNsYXNzKCdsZy10aHVtYi1vcGVuJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBUaHVtYm5haWwucHJvdG90eXBlLnRodW1ia2V5UHJlc3MgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdrZXlkb3duLmxnLnRodW1iJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzgpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgX3RoaXMuY29yZS4kb3V0ZXIuYWRkQ2xhc3MoJ2xnLXRodW1iLW9wZW4nKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSA0MCkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5jb3JlLiRvdXRlci5yZW1vdmVDbGFzcygnbGctdGh1bWItb3BlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgVGh1bWJuYWlsLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmNvcmUucy50aHVtYm5haWwgJiYgdGhpcy5jb3JlLiRpdGVtcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAkKHdpbmRvdykub2ZmKCdyZXNpemUubGcudGh1bWIgb3JpZW50YXRpb25jaGFuZ2UubGcudGh1bWIga2V5ZG93bi5sZy50aHVtYicpO1xuICAgICAgICAgICAgdGhpcy4kdGh1bWJPdXRlci5yZW1vdmUoKTtcbiAgICAgICAgICAgIHRoaXMuY29yZS4kb3V0ZXIucmVtb3ZlQ2xhc3MoJ2xnLWhhcy10aHVtYicpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgICQuZm4ubGlnaHRHYWxsZXJ5Lm1vZHVsZXMuVGh1bWJuYWlsID0gVGh1bWJuYWlsO1xuXG59KSgpO1xuXG59KSk7XG4iLCIvKiEgbGctem9vbSAtIHYxLjEuMCAtIDIwMTctMDgtMDhcclxuKiBodHRwOi8vc2FjaGluY2hvb2x1ci5naXRodWIuaW8vbGlnaHRHYWxsZXJ5XHJcbiogQ29weXJpZ2h0IChjKSAyMDE3IFNhY2hpbiBOOyBMaWNlbnNlZCBHUEx2MyAqL1xyXG5cclxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUgdW5sZXNzIGFtZE1vZHVsZUlkIGlzIHNldFxuICAgIGRlZmluZShbJ2pxdWVyeSddLCBmdW5jdGlvbiAoYTApIHtcbiAgICAgIHJldHVybiAoZmFjdG9yeShhMCkpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgIC8vIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMsIGJ1dFxuICAgIC8vIG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLFxuICAgIC8vIGxpa2UgTm9kZS5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JykpO1xuICB9IGVsc2Uge1xuICAgIGZhY3RvcnkoalF1ZXJ5KTtcbiAgfVxufSh0aGlzLCBmdW5jdGlvbiAoJCkge1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgZ2V0VXNlTGVmdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdXNlTGVmdCA9IGZhbHNlO1xuICAgICAgICB2YXIgaXNDaHJvbWUgPSBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9DaHJvbShlfGl1bSlcXC8oWzAtOV0rKVxcLi8pO1xuICAgICAgICBpZiAoaXNDaHJvbWUgJiYgcGFyc2VJbnQoaXNDaHJvbWVbMl0sIDEwKSA8IDU0KSB7XG4gICAgICAgICAgICB1c2VMZWZ0ID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1c2VMZWZ0O1xuICAgIH07XG5cbiAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgIHNjYWxlOiAxLFxuICAgICAgICB6b29tOiB0cnVlLFxuICAgICAgICBhY3R1YWxTaXplOiB0cnVlLFxuICAgICAgICBlbmFibGVab29tQWZ0ZXI6IDMwMCxcbiAgICAgICAgdXNlTGVmdEZvclpvb206IGdldFVzZUxlZnQoKVxuICAgIH07XG5cbiAgICB2YXIgWm9vbSA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcblxuICAgICAgICB0aGlzLmNvcmUgPSAkKGVsZW1lbnQpLmRhdGEoJ2xpZ2h0R2FsbGVyeScpO1xuXG4gICAgICAgIHRoaXMuY29yZS5zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCB0aGlzLmNvcmUucyk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29yZS5zLnpvb20gJiYgdGhpcy5jb3JlLmRvQ3NzKCkpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuXG4gICAgICAgICAgICAvLyBTdG9yZSB0aGUgem9vbWFibGUgdGltZW91dCB2YWx1ZSBqdXN0IHRvIGNsZWFyIGl0IHdoaWxlIGNsb3NpbmdcbiAgICAgICAgICAgIHRoaXMuem9vbWFibGV0aW1lb3V0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIFNldCB0aGUgaW5pdGlhbCB2YWx1ZSBjZW50ZXJcbiAgICAgICAgICAgIHRoaXMucGFnZVggPSAkKHdpbmRvdykud2lkdGgoKSAvIDI7XG4gICAgICAgICAgICB0aGlzLnBhZ2VZID0gKCQod2luZG93KS5oZWlnaHQoKSAvIDIpICsgJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFpvb20ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgem9vbUljb25zID0gJzxzcGFuIGlkPVwibGctem9vbS1pblwiIGNsYXNzPVwibGctaWNvblwiPjwvc3Bhbj48c3BhbiBpZD1cImxnLXpvb20tb3V0XCIgY2xhc3M9XCJsZy1pY29uXCI+PC9zcGFuPic7XG5cbiAgICAgICAgaWYgKF90aGlzLmNvcmUucy5hY3R1YWxTaXplKSB7XG4gICAgICAgICAgICB6b29tSWNvbnMgKz0gJzxzcGFuIGlkPVwibGctYWN0dWFsLXNpemVcIiBjbGFzcz1cImxnLWljb25cIj48L3NwYW4+JztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfdGhpcy5jb3JlLnMudXNlTGVmdEZvclpvb20pIHtcbiAgICAgICAgICAgIF90aGlzLmNvcmUuJG91dGVyLmFkZENsYXNzKCdsZy11c2UtbGVmdC1mb3Item9vbScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMuY29yZS4kb3V0ZXIuYWRkQ2xhc3MoJ2xnLXVzZS10cmFuc2l0aW9uLWZvci16b29tJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvcmUuJG91dGVyLmZpbmQoJy5sZy10b29sYmFyJykuYXBwZW5kKHpvb21JY29ucyk7XG5cbiAgICAgICAgLy8gQWRkIHpvb21hYmxlIGNsYXNzXG4gICAgICAgIF90aGlzLmNvcmUuJGVsLm9uKCdvblNsaWRlSXRlbUxvYWQubGcudG0uem9vbScsIGZ1bmN0aW9uKGV2ZW50LCBpbmRleCwgZGVsYXkpIHtcblxuICAgICAgICAgICAgLy8gZGVsYXkgd2lsbCBiZSAwIGV4Y2VwdCBmaXJzdCB0aW1lXG4gICAgICAgICAgICB2YXIgX3NwZWVkID0gX3RoaXMuY29yZS5zLmVuYWJsZVpvb21BZnRlciArIGRlbGF5O1xuXG4gICAgICAgICAgICAvLyBzZXQgX3NwZWVkIHZhbHVlIDAgaWYgZ2FsbGVyeSBvcGVuZWQgZnJvbSBkaXJlY3QgdXJsIGFuZCBpZiBpdCBpcyBmaXJzdCBzbGlkZVxuICAgICAgICAgICAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcygnbGctZnJvbS1oYXNoJykgJiYgZGVsYXkpIHtcblxuICAgICAgICAgICAgICAgIC8vIHdpbGwgZXhlY3V0ZSBvbmx5IG9uY2VcbiAgICAgICAgICAgICAgICBfc3BlZWQgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBsZy1mcm9tLWhhc2ggdG8gZW5hYmxlIHN0YXJ0aW5nIGFuaW1hdGlvbi5cbiAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2xnLWZyb20taGFzaCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfdGhpcy56b29tYWJsZXRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmNvcmUuJHNsaWRlLmVxKGluZGV4KS5hZGRDbGFzcygnbGctem9vbWFibGUnKTtcbiAgICAgICAgICAgIH0sIF9zcGVlZCArIDMwKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHNjYWxlID0gMTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBkZXNjIEltYWdlIHpvb21cbiAgICAgICAgICogVHJhbnNsYXRlIHRoZSB3cmFwIGFuZCBzY2FsZSB0aGUgaW1hZ2UgdG8gZ2V0IGJldHRlciB1c2VyIGV4cGVyaWVuY2VcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHNjYWxlVmFsIC0gWm9vbSBkZWNyZW1lbnQvaW5jcmVtZW50IHZhbHVlXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgem9vbSA9IGZ1bmN0aW9uKHNjYWxlVmFsKSB7XG5cbiAgICAgICAgICAgIHZhciAkaW1hZ2UgPSBfdGhpcy5jb3JlLiRvdXRlci5maW5kKCcubGctY3VycmVudCAubGctaW1hZ2UnKTtcbiAgICAgICAgICAgIHZhciBfeDtcbiAgICAgICAgICAgIHZhciBfeTtcblxuICAgICAgICAgICAgLy8gRmluZCBvZmZzZXQgbWFudWFsbHkgdG8gYXZvaWQgaXNzdWUgYWZ0ZXIgem9vbVxuICAgICAgICAgICAgdmFyIG9mZnNldFggPSAoJCh3aW5kb3cpLndpZHRoKCkgLSAkaW1hZ2UucHJvcCgnb2Zmc2V0V2lkdGgnKSkgLyAyO1xuICAgICAgICAgICAgdmFyIG9mZnNldFkgPSAoKCQod2luZG93KS5oZWlnaHQoKSAtICRpbWFnZS5wcm9wKCdvZmZzZXRIZWlnaHQnKSkgLyAyKSArICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuICAgICAgICAgICAgX3ggPSBfdGhpcy5wYWdlWCAtIG9mZnNldFg7XG4gICAgICAgICAgICBfeSA9IF90aGlzLnBhZ2VZIC0gb2Zmc2V0WTtcblxuICAgICAgICAgICAgdmFyIHggPSAoc2NhbGVWYWwgLSAxKSAqIChfeCk7XG4gICAgICAgICAgICB2YXIgeSA9IChzY2FsZVZhbCAtIDEpICogKF95KTtcblxuICAgICAgICAgICAgJGltYWdlLmNzcygndHJhbnNmb3JtJywgJ3NjYWxlM2QoJyArIHNjYWxlVmFsICsgJywgJyArIHNjYWxlVmFsICsgJywgMSknKS5hdHRyKCdkYXRhLXNjYWxlJywgc2NhbGVWYWwpO1xuXG4gICAgICAgICAgICBpZiAoX3RoaXMuY29yZS5zLnVzZUxlZnRGb3Jab29tKSB7XG4gICAgICAgICAgICAgICAgJGltYWdlLnBhcmVudCgpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IC14ICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAteSArICdweCdcbiAgICAgICAgICAgICAgICB9KS5hdHRyKCdkYXRhLXgnLCB4KS5hdHRyKCdkYXRhLXknLCB5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGltYWdlLnBhcmVudCgpLmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZTNkKC0nICsgeCArICdweCwgLScgKyB5ICsgJ3B4LCAwKScpLmF0dHIoJ2RhdGEteCcsIHgpLmF0dHIoJ2RhdGEteScsIHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBjYWxsU2NhbGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChzY2FsZSA+IDEpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5jb3JlLiRvdXRlci5hZGRDbGFzcygnbGctem9vbWVkJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF90aGlzLnJlc2V0Wm9vbSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2NhbGUgPCAxKSB7XG4gICAgICAgICAgICAgICAgc2NhbGUgPSAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB6b29tKHNjYWxlKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgYWN0dWFsU2l6ZSA9IGZ1bmN0aW9uKGV2ZW50LCAkaW1hZ2UsIGluZGV4LCBmcm9tSWNvbikge1xuICAgICAgICAgICAgdmFyIHcgPSAkaW1hZ2UucHJvcCgnb2Zmc2V0V2lkdGgnKTtcbiAgICAgICAgICAgIHZhciBudztcbiAgICAgICAgICAgIGlmIChfdGhpcy5jb3JlLnMuZHluYW1pYykge1xuICAgICAgICAgICAgICAgIG53ID0gX3RoaXMuY29yZS5zLmR5bmFtaWNFbFtpbmRleF0ud2lkdGggfHwgJGltYWdlWzBdLm5hdHVyYWxXaWR0aCB8fCB3O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBudyA9IF90aGlzLmNvcmUuJGl0ZW1zLmVxKGluZGV4KS5hdHRyKCdkYXRhLXdpZHRoJykgfHwgJGltYWdlWzBdLm5hdHVyYWxXaWR0aCB8fCB3O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgX3NjYWxlO1xuXG4gICAgICAgICAgICBpZiAoX3RoaXMuY29yZS4kb3V0ZXIuaGFzQ2xhc3MoJ2xnLXpvb21lZCcpKSB7XG4gICAgICAgICAgICAgICAgc2NhbGUgPSAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAobncgPiB3KSB7XG4gICAgICAgICAgICAgICAgICAgIF9zY2FsZSA9IG53IC8gdztcbiAgICAgICAgICAgICAgICAgICAgc2NhbGUgPSBfc2NhbGUgfHwgMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChmcm9tSWNvbikge1xuICAgICAgICAgICAgICAgIF90aGlzLnBhZ2VYID0gJCh3aW5kb3cpLndpZHRoKCkgLyAyO1xuICAgICAgICAgICAgICAgIF90aGlzLnBhZ2VZID0gKCQod2luZG93KS5oZWlnaHQoKSAvIDIpICsgJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5wYWdlWCA9IGV2ZW50LnBhZ2VYIHx8IGV2ZW50Lm9yaWdpbmFsRXZlbnQudGFyZ2V0VG91Y2hlc1swXS5wYWdlWDtcbiAgICAgICAgICAgICAgICBfdGhpcy5wYWdlWSA9IGV2ZW50LnBhZ2VZIHx8IGV2ZW50Lm9yaWdpbmFsRXZlbnQudGFyZ2V0VG91Y2hlc1swXS5wYWdlWTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FsbFNjYWxlKCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmNvcmUuJG91dGVyLnJlbW92ZUNsYXNzKCdsZy1ncmFiYmluZycpLmFkZENsYXNzKCdsZy1ncmFiJyk7XG4gICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHRhcHBlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIGV2ZW50IHRyaWdnZXJlZCBhZnRlciBhcHBlbmRpbmcgc2xpZGUgY29udGVudFxuICAgICAgICBfdGhpcy5jb3JlLiRlbC5vbignb25BZmVyQXBwZW5kU2xpZGUubGcudG0uem9vbScsIGZ1bmN0aW9uKGV2ZW50LCBpbmRleCkge1xuXG4gICAgICAgICAgICAvLyBHZXQgdGhlIGN1cnJlbnQgZWxlbWVudFxuICAgICAgICAgICAgdmFyICRpbWFnZSA9IF90aGlzLmNvcmUuJHNsaWRlLmVxKGluZGV4KS5maW5kKCcubGctaW1hZ2UnKTtcblxuICAgICAgICAgICAgJGltYWdlLm9uKCdkYmxjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgYWN0dWFsU2l6ZShldmVudCwgJGltYWdlLCBpbmRleCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJGltYWdlLm9uKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRhcHBlZCkge1xuICAgICAgICAgICAgICAgICAgICB0YXBwZWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFwcGVkID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGFwcGVkKTtcbiAgICAgICAgICAgICAgICAgICAgdGFwcGVkID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgYWN0dWFsU2l6ZShldmVudCwgJGltYWdlLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFVwZGF0ZSB6b29tIG9uIHJlc2l6ZSBhbmQgb3JpZW50YXRpb25jaGFuZ2VcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUubGcuem9vbSBzY3JvbGwubGcuem9vbSBvcmllbnRhdGlvbmNoYW5nZS5sZy56b29tJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBfdGhpcy5wYWdlWCA9ICQod2luZG93KS53aWR0aCgpIC8gMjtcbiAgICAgICAgICAgIF90aGlzLnBhZ2VZID0gKCQod2luZG93KS5oZWlnaHQoKSAvIDIpICsgJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgICAgICAgem9vbShzY2FsZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJyNsZy16b29tLW91dCcpLm9uKCdjbGljay5sZycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLmNvcmUuJG91dGVyLmZpbmQoJy5sZy1jdXJyZW50IC5sZy1pbWFnZScpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHNjYWxlIC09IF90aGlzLmNvcmUucy5zY2FsZTtcbiAgICAgICAgICAgICAgICBjYWxsU2NhbGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnI2xnLXpvb20taW4nKS5vbignY2xpY2subGcnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5jb3JlLiRvdXRlci5maW5kKCcubGctY3VycmVudCAubGctaW1hZ2UnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzY2FsZSArPSBfdGhpcy5jb3JlLnMuc2NhbGU7XG4gICAgICAgICAgICAgICAgY2FsbFNjYWxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJyNsZy1hY3R1YWwtc2l6ZScpLm9uKCdjbGljay5sZycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBhY3R1YWxTaXplKGV2ZW50LCBfdGhpcy5jb3JlLiRzbGlkZS5lcShfdGhpcy5jb3JlLmluZGV4KS5maW5kKCcubGctaW1hZ2UnKSwgX3RoaXMuY29yZS5pbmRleCwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFJlc2V0IHpvb20gb24gc2xpZGUgY2hhbmdlXG4gICAgICAgIF90aGlzLmNvcmUuJGVsLm9uKCdvbkJlZm9yZVNsaWRlLmxnLnRtJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzY2FsZSA9IDE7XG4gICAgICAgICAgICBfdGhpcy5yZXNldFpvb20oKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gRHJhZyBvcHRpb24gYWZ0ZXIgem9vbVxuICAgICAgICBfdGhpcy56b29tRHJhZygpO1xuXG4gICAgICAgIF90aGlzLnpvb21Td2lwZSgpO1xuXG4gICAgfTtcblxuICAgIC8vIFJlc2V0IHpvb20gZWZmZWN0XG4gICAgWm9vbS5wcm90b3R5cGUucmVzZXRab29tID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuY29yZS4kb3V0ZXIucmVtb3ZlQ2xhc3MoJ2xnLXpvb21lZCcpO1xuICAgICAgICB0aGlzLmNvcmUuJHNsaWRlLmZpbmQoJy5sZy1pbWctd3JhcCcpLnJlbW92ZUF0dHIoJ3N0eWxlIGRhdGEteCBkYXRhLXknKTtcbiAgICAgICAgdGhpcy5jb3JlLiRzbGlkZS5maW5kKCcubGctaW1hZ2UnKS5yZW1vdmVBdHRyKCdzdHlsZSBkYXRhLXNjYWxlJyk7XG5cbiAgICAgICAgLy8gUmVzZXQgcGFneCBwYWd5IHZhbHVlcyB0byBjZW50ZXJcbiAgICAgICAgdGhpcy5wYWdlWCA9ICQod2luZG93KS53aWR0aCgpIC8gMjtcbiAgICAgICAgdGhpcy5wYWdlWSA9ICgkKHdpbmRvdykuaGVpZ2h0KCkgLyAyKSArICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICB9O1xuXG4gICAgWm9vbS5wcm90b3R5cGUuem9vbVN3aXBlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBzdGFydENvb3JkcyA9IHt9O1xuICAgICAgICB2YXIgZW5kQ29vcmRzID0ge307XG4gICAgICAgIHZhciBpc01vdmVkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gQWxsb3cgeCBkaXJlY3Rpb24gZHJhZ1xuICAgICAgICB2YXIgYWxsb3dYID0gZmFsc2U7XG5cbiAgICAgICAgLy8gQWxsb3cgWSBkaXJlY3Rpb24gZHJhZ1xuICAgICAgICB2YXIgYWxsb3dZID0gZmFsc2U7XG5cbiAgICAgICAgX3RoaXMuY29yZS4kc2xpZGUub24oJ3RvdWNoc3RhcnQubGcnLCBmdW5jdGlvbihlKSB7XG5cbiAgICAgICAgICAgIGlmIChfdGhpcy5jb3JlLiRvdXRlci5oYXNDbGFzcygnbGctem9vbWVkJykpIHtcbiAgICAgICAgICAgICAgICB2YXIgJGltYWdlID0gX3RoaXMuY29yZS4kc2xpZGUuZXEoX3RoaXMuY29yZS5pbmRleCkuZmluZCgnLmxnLW9iamVjdCcpO1xuXG4gICAgICAgICAgICAgICAgYWxsb3dZID0gJGltYWdlLnByb3AoJ29mZnNldEhlaWdodCcpICogJGltYWdlLmF0dHIoJ2RhdGEtc2NhbGUnKSA+IF90aGlzLmNvcmUuJG91dGVyLmZpbmQoJy5sZycpLmhlaWdodCgpO1xuICAgICAgICAgICAgICAgIGFsbG93WCA9ICRpbWFnZS5wcm9wKCdvZmZzZXRXaWR0aCcpICogJGltYWdlLmF0dHIoJ2RhdGEtc2NhbGUnKSA+IF90aGlzLmNvcmUuJG91dGVyLmZpbmQoJy5sZycpLndpZHRoKCk7XG4gICAgICAgICAgICAgICAgaWYgKChhbGxvd1ggfHwgYWxsb3dZKSkge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0Q29vcmRzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogZS5vcmlnaW5hbEV2ZW50LnRhcmdldFRvdWNoZXNbMF0ucGFnZVgsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBlLm9yaWdpbmFsRXZlbnQudGFyZ2V0VG91Y2hlc1swXS5wYWdlWVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICBfdGhpcy5jb3JlLiRzbGlkZS5vbigndG91Y2htb3ZlLmxnJywgZnVuY3Rpb24oZSkge1xuXG4gICAgICAgICAgICBpZiAoX3RoaXMuY29yZS4kb3V0ZXIuaGFzQ2xhc3MoJ2xnLXpvb21lZCcpKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgXyRlbCA9IF90aGlzLmNvcmUuJHNsaWRlLmVxKF90aGlzLmNvcmUuaW5kZXgpLmZpbmQoJy5sZy1pbWctd3JhcCcpO1xuICAgICAgICAgICAgICAgIHZhciBkaXN0YW5jZVg7XG4gICAgICAgICAgICAgICAgdmFyIGRpc3RhbmNlWTtcblxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBpc01vdmVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIGVuZENvb3JkcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgeDogZS5vcmlnaW5hbEV2ZW50LnRhcmdldFRvdWNoZXNbMF0ucGFnZVgsXG4gICAgICAgICAgICAgICAgICAgIHk6IGUub3JpZ2luYWxFdmVudC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8vIHJlc2V0IG9wYWNpdHkgYW5kIHRyYW5zaXRpb24gZHVyYXRpb25cbiAgICAgICAgICAgICAgICBfdGhpcy5jb3JlLiRvdXRlci5hZGRDbGFzcygnbGctem9vbS1kcmFnZ2luZycpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGFsbG93WSkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZVkgPSAoLU1hdGguYWJzKF8kZWwuYXR0cignZGF0YS15JykpKSArIChlbmRDb29yZHMueSAtIHN0YXJ0Q29vcmRzLnkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlWSA9IC1NYXRoLmFicyhfJGVsLmF0dHIoJ2RhdGEteScpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoYWxsb3dYKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlWCA9ICgtTWF0aC5hYnMoXyRlbC5hdHRyKCdkYXRhLXgnKSkpICsgKGVuZENvb3Jkcy54IC0gc3RhcnRDb29yZHMueCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2VYID0gLU1hdGguYWJzKF8kZWwuYXR0cignZGF0YS14JykpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgoTWF0aC5hYnMoZW5kQ29vcmRzLnggLSBzdGFydENvb3Jkcy54KSA+IDE1KSB8fCAoTWF0aC5hYnMoZW5kQ29vcmRzLnkgLSBzdGFydENvb3Jkcy55KSA+IDE1KSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5jb3JlLnMudXNlTGVmdEZvclpvb20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8kZWwuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBkaXN0YW5jZVggKyAncHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogZGlzdGFuY2VZICsgJ3B4J1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfJGVsLmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZTNkKCcgKyBkaXN0YW5jZVggKyAncHgsICcgKyBkaXN0YW5jZVkgKyAncHgsIDApJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICBfdGhpcy5jb3JlLiRzbGlkZS5vbigndG91Y2hlbmQubGcnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5jb3JlLiRvdXRlci5oYXNDbGFzcygnbGctem9vbWVkJykpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNNb3ZlZCkge1xuICAgICAgICAgICAgICAgICAgICBpc01vdmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNvcmUuJG91dGVyLnJlbW92ZUNsYXNzKCdsZy16b29tLWRyYWdnaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnRvdWNoZW5kWm9vbShzdGFydENvb3JkcywgZW5kQ29vcmRzLCBhbGxvd1gsIGFsbG93WSk7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIFpvb20ucHJvdG90eXBlLnpvb21EcmFnID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHN0YXJ0Q29vcmRzID0ge307XG4gICAgICAgIHZhciBlbmRDb29yZHMgPSB7fTtcbiAgICAgICAgdmFyIGlzRHJhZ2luZyA9IGZhbHNlO1xuICAgICAgICB2YXIgaXNNb3ZlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIEFsbG93IHggZGlyZWN0aW9uIGRyYWdcbiAgICAgICAgdmFyIGFsbG93WCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIEFsbG93IFkgZGlyZWN0aW9uIGRyYWdcbiAgICAgICAgdmFyIGFsbG93WSA9IGZhbHNlO1xuXG4gICAgICAgIF90aGlzLmNvcmUuJHNsaWRlLm9uKCdtb3VzZWRvd24ubGcuem9vbScsIGZ1bmN0aW9uKGUpIHtcblxuICAgICAgICAgICAgLy8gZXhlY3V0ZSBvbmx5IG9uIC5sZy1vYmplY3RcbiAgICAgICAgICAgIHZhciAkaW1hZ2UgPSBfdGhpcy5jb3JlLiRzbGlkZS5lcShfdGhpcy5jb3JlLmluZGV4KS5maW5kKCcubGctb2JqZWN0Jyk7XG5cbiAgICAgICAgICAgIGFsbG93WSA9ICRpbWFnZS5wcm9wKCdvZmZzZXRIZWlnaHQnKSAqICRpbWFnZS5hdHRyKCdkYXRhLXNjYWxlJykgPiBfdGhpcy5jb3JlLiRvdXRlci5maW5kKCcubGcnKS5oZWlnaHQoKTtcbiAgICAgICAgICAgIGFsbG93WCA9ICRpbWFnZS5wcm9wKCdvZmZzZXRXaWR0aCcpICogJGltYWdlLmF0dHIoJ2RhdGEtc2NhbGUnKSA+IF90aGlzLmNvcmUuJG91dGVyLmZpbmQoJy5sZycpLndpZHRoKCk7XG5cbiAgICAgICAgICAgIGlmIChfdGhpcy5jb3JlLiRvdXRlci5oYXNDbGFzcygnbGctem9vbWVkJykpIHtcbiAgICAgICAgICAgICAgICBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2xnLW9iamVjdCcpICYmIChhbGxvd1ggfHwgYWxsb3dZKSkge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0Q29vcmRzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogZS5wYWdlWCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGUucGFnZVlcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICBpc0RyYWdpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICoqIEZpeCBmb3Igd2Via2l0IGN1cnNvciBpc3N1ZSBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MjY3MjNcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY29yZS4kb3V0ZXIuc2Nyb2xsTGVmdCArPSAxO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jb3JlLiRvdXRlci5zY3JvbGxMZWZ0IC09IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY29yZS4kb3V0ZXIucmVtb3ZlQ2xhc3MoJ2xnLWdyYWInKS5hZGRDbGFzcygnbGctZ3JhYmJpbmcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQod2luZG93KS5vbignbW91c2Vtb3ZlLmxnLnpvb20nLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoaXNEcmFnaW5nKSB7XG4gICAgICAgICAgICAgICAgdmFyIF8kZWwgPSBfdGhpcy5jb3JlLiRzbGlkZS5lcShfdGhpcy5jb3JlLmluZGV4KS5maW5kKCcubGctaW1nLXdyYXAnKTtcbiAgICAgICAgICAgICAgICB2YXIgZGlzdGFuY2VYO1xuICAgICAgICAgICAgICAgIHZhciBkaXN0YW5jZVk7XG5cbiAgICAgICAgICAgICAgICBpc01vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBlbmRDb29yZHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGUucGFnZVgsXG4gICAgICAgICAgICAgICAgICAgIHk6IGUucGFnZVlcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLy8gcmVzZXQgb3BhY2l0eSBhbmQgdHJhbnNpdGlvbiBkdXJhdGlvblxuICAgICAgICAgICAgICAgIF90aGlzLmNvcmUuJG91dGVyLmFkZENsYXNzKCdsZy16b29tLWRyYWdnaW5nJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYWxsb3dZKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlWSA9ICgtTWF0aC5hYnMoXyRlbC5hdHRyKCdkYXRhLXknKSkpICsgKGVuZENvb3Jkcy55IC0gc3RhcnRDb29yZHMueSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2VZID0gLU1hdGguYWJzKF8kZWwuYXR0cignZGF0YS15JykpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChhbGxvd1gpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2VYID0gKC1NYXRoLmFicyhfJGVsLmF0dHIoJ2RhdGEteCcpKSkgKyAoZW5kQ29vcmRzLnggLSBzdGFydENvb3Jkcy54KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZVggPSAtTWF0aC5hYnMoXyRlbC5hdHRyKCdkYXRhLXgnKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmNvcmUucy51c2VMZWZ0Rm9yWm9vbSkge1xuICAgICAgICAgICAgICAgICAgICBfJGVsLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBkaXN0YW5jZVggKyAncHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBkaXN0YW5jZVkgKyAncHgnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF8kZWwuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlM2QoJyArIGRpc3RhbmNlWCArICdweCwgJyArIGRpc3RhbmNlWSArICdweCwgMCknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQod2luZG93KS5vbignbW91c2V1cC5sZy56b29tJywgZnVuY3Rpb24oZSkge1xuXG4gICAgICAgICAgICBpZiAoaXNEcmFnaW5nKSB7XG4gICAgICAgICAgICAgICAgaXNEcmFnaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgX3RoaXMuY29yZS4kb3V0ZXIucmVtb3ZlQ2xhc3MoJ2xnLXpvb20tZHJhZ2dpbmcnKTtcblxuICAgICAgICAgICAgICAgIC8vIEZpeCBmb3IgY2hyb21lIG1vdXNlIG1vdmUgb24gY2xpY2tcbiAgICAgICAgICAgICAgICBpZiAoaXNNb3ZlZCAmJiAoKHN0YXJ0Q29vcmRzLnggIT09IGVuZENvb3Jkcy54KSB8fCAoc3RhcnRDb29yZHMueSAhPT0gZW5kQ29vcmRzLnkpKSkge1xuICAgICAgICAgICAgICAgICAgICBlbmRDb29yZHMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBlLnBhZ2VYLFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogZS5wYWdlWVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy50b3VjaGVuZFpvb20oc3RhcnRDb29yZHMsIGVuZENvb3JkcywgYWxsb3dYLCBhbGxvd1kpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaXNNb3ZlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfdGhpcy5jb3JlLiRvdXRlci5yZW1vdmVDbGFzcygnbGctZ3JhYmJpbmcnKS5hZGRDbGFzcygnbGctZ3JhYicpO1xuXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBab29tLnByb3RvdHlwZS50b3VjaGVuZFpvb20gPSBmdW5jdGlvbihzdGFydENvb3JkcywgZW5kQ29vcmRzLCBhbGxvd1gsIGFsbG93WSkge1xuXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBfJGVsID0gX3RoaXMuY29yZS4kc2xpZGUuZXEoX3RoaXMuY29yZS5pbmRleCkuZmluZCgnLmxnLWltZy13cmFwJyk7XG4gICAgICAgIHZhciAkaW1hZ2UgPSBfdGhpcy5jb3JlLiRzbGlkZS5lcShfdGhpcy5jb3JlLmluZGV4KS5maW5kKCcubGctb2JqZWN0Jyk7XG4gICAgICAgIHZhciBkaXN0YW5jZVggPSAoLU1hdGguYWJzKF8kZWwuYXR0cignZGF0YS14JykpKSArIChlbmRDb29yZHMueCAtIHN0YXJ0Q29vcmRzLngpO1xuICAgICAgICB2YXIgZGlzdGFuY2VZID0gKC1NYXRoLmFicyhfJGVsLmF0dHIoJ2RhdGEteScpKSkgKyAoZW5kQ29vcmRzLnkgLSBzdGFydENvb3Jkcy55KTtcbiAgICAgICAgdmFyIG1pblkgPSAoX3RoaXMuY29yZS4kb3V0ZXIuZmluZCgnLmxnJykuaGVpZ2h0KCkgLSAkaW1hZ2UucHJvcCgnb2Zmc2V0SGVpZ2h0JykpIC8gMjtcbiAgICAgICAgdmFyIG1heFkgPSBNYXRoLmFicygoJGltYWdlLnByb3AoJ29mZnNldEhlaWdodCcpICogTWF0aC5hYnMoJGltYWdlLmF0dHIoJ2RhdGEtc2NhbGUnKSkpIC0gX3RoaXMuY29yZS4kb3V0ZXIuZmluZCgnLmxnJykuaGVpZ2h0KCkgKyBtaW5ZKTtcbiAgICAgICAgdmFyIG1pblggPSAoX3RoaXMuY29yZS4kb3V0ZXIuZmluZCgnLmxnJykud2lkdGgoKSAtICRpbWFnZS5wcm9wKCdvZmZzZXRXaWR0aCcpKSAvIDI7XG4gICAgICAgIHZhciBtYXhYID0gTWF0aC5hYnMoKCRpbWFnZS5wcm9wKCdvZmZzZXRXaWR0aCcpICogTWF0aC5hYnMoJGltYWdlLmF0dHIoJ2RhdGEtc2NhbGUnKSkpIC0gX3RoaXMuY29yZS4kb3V0ZXIuZmluZCgnLmxnJykud2lkdGgoKSArIG1pblgpO1xuXG4gICAgICAgIGlmICgoTWF0aC5hYnMoZW5kQ29vcmRzLnggLSBzdGFydENvb3Jkcy54KSA+IDE1KSB8fCAoTWF0aC5hYnMoZW5kQ29vcmRzLnkgLSBzdGFydENvb3Jkcy55KSA+IDE1KSkge1xuICAgICAgICAgICAgaWYgKGFsbG93WSkge1xuICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZVkgPD0gLW1heFkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2VZID0gLW1heFk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkaXN0YW5jZVkgPj0gLW1pblkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2VZID0gLW1pblk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYWxsb3dYKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlWCA8PSAtbWF4WCkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZVggPSAtbWF4WDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRpc3RhbmNlWCA+PSAtbWluWCkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZVggPSAtbWluWDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhbGxvd1kpIHtcbiAgICAgICAgICAgICAgICBfJGVsLmF0dHIoJ2RhdGEteScsIE1hdGguYWJzKGRpc3RhbmNlWSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkaXN0YW5jZVkgPSAtTWF0aC5hYnMoXyRlbC5hdHRyKCdkYXRhLXknKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhbGxvd1gpIHtcbiAgICAgICAgICAgICAgICBfJGVsLmF0dHIoJ2RhdGEteCcsIE1hdGguYWJzKGRpc3RhbmNlWCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkaXN0YW5jZVggPSAtTWF0aC5hYnMoXyRlbC5hdHRyKCdkYXRhLXgnKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChfdGhpcy5jb3JlLnMudXNlTGVmdEZvclpvb20pIHtcbiAgICAgICAgICAgICAgICBfJGVsLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IGRpc3RhbmNlWCArICdweCcsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogZGlzdGFuY2VZICsgJ3B4J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfJGVsLmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZTNkKCcgKyBkaXN0YW5jZVggKyAncHgsICcgKyBkaXN0YW5jZVkgKyAncHgsIDApJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBab29tLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAvLyBVbmJpbmQgYWxsIGV2ZW50cyBhZGRlZCBieSBsaWdodEdhbGxlcnkgem9vbSBwbHVnaW5cbiAgICAgICAgX3RoaXMuY29yZS4kZWwub2ZmKCcubGcuem9vbScpO1xuICAgICAgICAkKHdpbmRvdykub2ZmKCcubGcuem9vbScpO1xuICAgICAgICBfdGhpcy5jb3JlLiRzbGlkZS5vZmYoJy5sZy56b29tJyk7XG4gICAgICAgIF90aGlzLmNvcmUuJGVsLm9mZignLmxnLnRtLnpvb20nKTtcbiAgICAgICAgX3RoaXMucmVzZXRab29tKCk7XG4gICAgICAgIGNsZWFyVGltZW91dChfdGhpcy56b29tYWJsZXRpbWVvdXQpO1xuICAgICAgICBfdGhpcy56b29tYWJsZXRpbWVvdXQgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgJC5mbi5saWdodEdhbGxlcnkubW9kdWxlcy56b29tID0gWm9vbTtcblxufSkoKTtcblxuXG59KSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvZm9udHMvbGcuZW90XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL2ZvbnRzL2xnLmVvdFwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9mb250cy9sZy5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvZm9udHMvbGcudHRmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL2ZvbnRzL2xnLndvZmZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvaW1nL2xvYWRpbmcuZ2lmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL2ltZy92aWRlby1wbGF5LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9pbWcvdmltZW8tcGxheS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvaW1nL3lvdXR1YmUtcGxheS5wbmdcIjsiLCIvKiEgbGlnaHRnYWxsZXJ5IC0gdjEuNi4xMSAtIDIwMTgtMDUtMjJcbiogaHR0cDovL3NhY2hpbmNob29sdXIuZ2l0aHViLmlvL2xpZ2h0R2FsbGVyeS9cbiogQ29weXJpZ2h0IChjKSAyMDE4IFNhY2hpbiBOOyBMaWNlbnNlZCBHUEx2MyAqL1xuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUgdW5sZXNzIGFtZE1vZHVsZUlkIGlzIHNldFxuICAgIGRlZmluZShbJ2pxdWVyeSddLCBmdW5jdGlvbiAoYTApIHtcbiAgICAgIHJldHVybiAoZmFjdG9yeShhMCkpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgLy8gTm9kZS4gRG9lcyBub3Qgd29yayB3aXRoIHN0cmljdCBDb21tb25KUywgYnV0XG4gICAgLy8gb25seSBDb21tb25KUy1saWtlIGVudmlyb25tZW50cyB0aGF0IHN1cHBvcnQgbW9kdWxlLmV4cG9ydHMsXG4gICAgLy8gbGlrZSBOb2RlLlxuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSk7XG4gIH0gZWxzZSB7XG4gICAgZmFjdG9yeShyb290W1wialF1ZXJ5XCJdKTtcbiAgfVxufSh0aGlzLCBmdW5jdGlvbiAoJCkge1xuXG4oZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIGRlZmF1bHRzID0ge1xuXG4gICAgICAgIG1vZGU6ICdsZy1zbGlkZScsXG5cbiAgICAgICAgLy8gRXggOiAnZWFzZSdcbiAgICAgICAgY3NzRWFzaW5nOiAnZWFzZScsXG5cbiAgICAgICAgLy8nZm9yIGpxdWVyeSBhbmltYXRpb24nXG4gICAgICAgIGVhc2luZzogJ2xpbmVhcicsXG4gICAgICAgIHNwZWVkOiA2MDAsXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBhZGRDbGFzczogJycsXG4gICAgICAgIHN0YXJ0Q2xhc3M6ICdsZy1zdGFydC16b29tJyxcbiAgICAgICAgYmFja2Ryb3BEdXJhdGlvbjogMTUwLFxuICAgICAgICBoaWRlQmFyc0RlbGF5OiA2MDAwLFxuXG4gICAgICAgIHVzZUxlZnQ6IGZhbHNlLFxuXG4gICAgICAgIGNsb3NhYmxlOiB0cnVlLFxuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICBlc2NLZXk6IHRydWUsXG4gICAgICAgIGtleVByZXNzOiB0cnVlLFxuICAgICAgICBjb250cm9sczogdHJ1ZSxcbiAgICAgICAgc2xpZGVFbmRBbmltYXRvaW46IHRydWUsXG4gICAgICAgIGhpZGVDb250cm9sT25FbmQ6IGZhbHNlLFxuICAgICAgICBtb3VzZXdoZWVsOiB0cnVlLFxuXG4gICAgICAgIGdldENhcHRpb25Gcm9tVGl0bGVPckFsdDogdHJ1ZSxcblxuICAgICAgICAvLyAubGctaXRlbSB8fCAnLmxnLXN1Yi1odG1sJ1xuICAgICAgICBhcHBlbmRTdWJIdG1sVG86ICcubGctc3ViLWh0bWwnLFxuXG4gICAgICAgIHN1Ykh0bWxTZWxlY3RvclJlbGF0aXZlOiBmYWxzZSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQGRlc2MgbnVtYmVyIG9mIHByZWxvYWQgc2xpZGVzXG4gICAgICAgICAqIHdpbGwgZXhpY3V0ZSBvbmx5IGFmdGVyIHRoZSBjdXJyZW50IHNsaWRlIGlzIGZ1bGx5IGxvYWRlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGV4IHlvdSBjbGlja2VkIG9uIDR0aCBpbWFnZSBhbmQgaWYgcHJlbG9hZCA9IDEgdGhlbiAzcmQgc2xpZGUgYW5kIDV0aFxuICAgICAgICAgKiBzbGlkZSB3aWxsIGJlIGxvYWRlZCBpbiB0aGUgYmFja2dyb3VuZCBhZnRlciB0aGUgNHRoIHNsaWRlIGlzIGZ1bGx5IGxvYWRlZC4uXG4gICAgICAgICAqIGlmIHByZWxvYWQgaXMgMiB0aGVuIDJuZCAzcmQgNXRoIDZ0aCBzbGlkZXMgd2lsbCBiZSBwcmVsb2FkZWQuLiAuLi4gLi4uXG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICBwcmVsb2FkOiAxLFxuICAgICAgICBzaG93QWZ0ZXJMb2FkOiB0cnVlLFxuICAgICAgICBzZWxlY3RvcjogJycsXG4gICAgICAgIHNlbGVjdFdpdGhpbjogJycsXG4gICAgICAgIG5leHRIdG1sOiAnJyxcbiAgICAgICAgcHJldkh0bWw6ICcnLFxuXG4gICAgICAgIC8vIDAsIDFcbiAgICAgICAgaW5kZXg6IGZhbHNlLFxuXG4gICAgICAgIGlmcmFtZU1heFdpZHRoOiAnMTAwJScsXG5cbiAgICAgICAgZG93bmxvYWQ6IHRydWUsXG4gICAgICAgIGNvdW50ZXI6IHRydWUsXG4gICAgICAgIGFwcGVuZENvdW50ZXJUbzogJy5sZy10b29sYmFyJyxcblxuICAgICAgICBzd2lwZVRocmVzaG9sZDogNTAsXG4gICAgICAgIGVuYWJsZVN3aXBlOiB0cnVlLFxuICAgICAgICBlbmFibGVEcmFnOiB0cnVlLFxuXG4gICAgICAgIGR5bmFtaWM6IGZhbHNlLFxuICAgICAgICBkeW5hbWljRWw6IFtdLFxuICAgICAgICBnYWxsZXJ5SWQ6IDFcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gUGx1Z2luKGVsZW1lbnQsIG9wdGlvbnMpIHtcblxuICAgICAgICAvLyBDdXJyZW50IGxpZ2h0R2FsbGVyeSBlbGVtZW50XG4gICAgICAgIHRoaXMuZWwgPSBlbGVtZW50O1xuXG4gICAgICAgIC8vIEN1cnJlbnQganF1ZXJ5IGVsZW1lbnRcbiAgICAgICAgdGhpcy4kZWwgPSAkKGVsZW1lbnQpO1xuXG4gICAgICAgIC8vIGxpZ2h0R2FsbGVyeSBzZXR0aW5nc1xuICAgICAgICB0aGlzLnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAgIC8vIFdoZW4gdXNpbmcgZHluYW1pYyBtb2RlLCBlbnN1cmUgZHluYW1pY0VsIGlzIGFuIGFycmF5XG4gICAgICAgIGlmICh0aGlzLnMuZHluYW1pYyAmJiB0aGlzLnMuZHluYW1pY0VsICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLnMuZHluYW1pY0VsLmNvbnN0cnVjdG9yID09PSBBcnJheSAmJiAhdGhpcy5zLmR5bmFtaWNFbC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93ICgnV2hlbiB1c2luZyBkeW5hbWljIG1vZGUsIHlvdSBtdXN0IGFsc28gZGVmaW5lIGR5bmFtaWNFbCBhcyBhbiBBcnJheS4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGxpZ2h0R2FsbGVyeSBtb2R1bGVzXG4gICAgICAgIHRoaXMubW9kdWxlcyA9IHt9O1xuXG4gICAgICAgIC8vIGZhbHNlIHdoZW4gbGlnaHRnYWxsZXJ5IGNvbXBsZXRlIGZpcnN0IHNsaWRlO1xuICAgICAgICB0aGlzLmxHYWxsZXJ5T24gPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmxnQnVzeSA9IGZhbHNlO1xuXG4gICAgICAgIC8vIFRpbWVvdXQgZnVuY3Rpb24gZm9yIGhpZGluZyBjb250cm9scztcbiAgICAgICAgdGhpcy5oaWRlQmFydGltZW91dCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIFRvIGRldGVybWluZSBicm93c2VyIHN1cHBvcnRzIGZvciB0b3VjaCBldmVudHM7XG4gICAgICAgIHRoaXMuaXNUb3VjaCA9ICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xuXG4gICAgICAgIC8vIERpc2FibGUgaGlkZUNvbnRyb2xPbkVuZCBpZiBzaWxkZUVuZEFuaW1hdGlvbiBpcyB0cnVlXG4gICAgICAgIGlmICh0aGlzLnMuc2xpZGVFbmRBbmltYXRvaW4pIHtcbiAgICAgICAgICAgIHRoaXMucy5oaWRlQ29udHJvbE9uRW5kID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBHYWxsZXJ5IGl0ZW1zXG4gICAgICAgIGlmICh0aGlzLnMuZHluYW1pYykge1xuICAgICAgICAgICAgdGhpcy4kaXRlbXMgPSB0aGlzLnMuZHluYW1pY0VsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMucy5zZWxlY3RvciA9PT0gJ3RoaXMnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kaXRlbXMgPSB0aGlzLiRlbDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zLnNlbGVjdG9yICE9PSAnJykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnMuc2VsZWN0V2l0aGluKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGl0ZW1zID0gJCh0aGlzLnMuc2VsZWN0V2l0aGluKS5maW5kKHRoaXMucy5zZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kaXRlbXMgPSB0aGlzLiRlbC5maW5kKCQodGhpcy5zLnNlbGVjdG9yKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRpdGVtcyA9IHRoaXMuJGVsLmNoaWxkcmVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyAubGctaXRlbVxuICAgICAgICB0aGlzLiRzbGlkZSA9ICcnO1xuXG4gICAgICAgIC8vIC5sZy1vdXRlclxuICAgICAgICB0aGlzLiRvdXRlciA9ICcnO1xuXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIFBsdWdpbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgLy8gcy5wcmVsb2FkIHNob3VsZCBub3QgYmUgbW9yZSB0aGFuICRpdGVtLmxlbmd0aFxuICAgICAgICBpZiAoX3RoaXMucy5wcmVsb2FkID4gX3RoaXMuJGl0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgX3RoaXMucy5wcmVsb2FkID0gX3RoaXMuJGl0ZW1zLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGR5bmFtaWMgb3B0aW9uIGlzIGVuYWJsZWQgZXhlY3V0ZSBpbW1lZGlhdGVseVxuICAgICAgICB2YXIgX2hhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcbiAgICAgICAgaWYgKF9oYXNoLmluZGV4T2YoJ2xnPScgKyB0aGlzLnMuZ2FsbGVyeUlkKSA+IDApIHtcblxuICAgICAgICAgICAgX3RoaXMuaW5kZXggPSBwYXJzZUludChfaGFzaC5zcGxpdCgnJnNsaWRlPScpWzFdLCAxMCk7XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnbGctZnJvbS1oYXNoJyk7XG4gICAgICAgICAgICBpZiAoISQoJ2JvZHknKS5oYXNDbGFzcygnbGctb24nKSkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmJ1aWxkKF90aGlzLmluZGV4KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnbGctb24nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfdGhpcy5zLmR5bmFtaWMpIHtcblxuICAgICAgICAgICAgX3RoaXMuJGVsLnRyaWdnZXIoJ29uQmVmb3JlT3Blbi5sZycpO1xuXG4gICAgICAgICAgICBfdGhpcy5pbmRleCA9IF90aGlzLnMuaW5kZXggfHwgMDtcblxuICAgICAgICAgICAgLy8gcHJldmVudCBhY2NpZGVudGFsIGRvdWJsZSBleGVjdXRpb25cbiAgICAgICAgICAgIGlmICghJCgnYm9keScpLmhhc0NsYXNzKCdsZy1vbicpKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYnVpbGQoX3RoaXMuaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2xnLW9uJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIC8vIFVzaW5nIGRpZmZlcmVudCBuYW1lc3BhY2UgZm9yIGNsaWNrIGJlY2F1c2UgY2xpY2sgZXZlbnQgc2hvdWxkIG5vdCB1bmJpbmQgaWYgc2VsZWN0b3IgaXMgc2FtZSBvYmplY3QoJ3RoaXMnKVxuICAgICAgICAgICAgX3RoaXMuJGl0ZW1zLm9uKCdjbGljay5sZ2N1c3RvbScsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgICAgICAgICAvLyBGb3IgSUU4XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcikge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF90aGlzLiRlbC50cmlnZ2VyKCdvbkJlZm9yZU9wZW4ubGcnKTtcblxuICAgICAgICAgICAgICAgIF90aGlzLmluZGV4ID0gX3RoaXMucy5pbmRleCB8fCBfdGhpcy4kaXRlbXMuaW5kZXgodGhpcyk7XG5cbiAgICAgICAgICAgICAgICAvLyBwcmV2ZW50IGFjY2lkZW50YWwgZG91YmxlIGV4ZWN1dGlvblxuICAgICAgICAgICAgICAgIGlmICghJCgnYm9keScpLmhhc0NsYXNzKCdsZy1vbicpKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmJ1aWxkKF90aGlzLmluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdsZy1vbicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgUGx1Z2luLnByb3RvdHlwZS5idWlsZCA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICBfdGhpcy5zdHJ1Y3R1cmUoKTtcblxuICAgICAgICAvLyBtb2R1bGUgY29uc3RydWN0b3JcbiAgICAgICAgJC5lYWNoKCQuZm4ubGlnaHRHYWxsZXJ5Lm1vZHVsZXMsIGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgX3RoaXMubW9kdWxlc1trZXldID0gbmV3ICQuZm4ubGlnaHRHYWxsZXJ5Lm1vZHVsZXNba2V5XShfdGhpcy5lbCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGluaXRpYXRlIHNsaWRlIGZ1bmN0aW9uXG4gICAgICAgIF90aGlzLnNsaWRlKGluZGV4LCBmYWxzZSwgZmFsc2UsIGZhbHNlKTtcblxuICAgICAgICBpZiAoX3RoaXMucy5rZXlQcmVzcykge1xuICAgICAgICAgICAgX3RoaXMua2V5UHJlc3MoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfdGhpcy4kaXRlbXMubGVuZ3RoID4gMSkge1xuXG4gICAgICAgICAgICBfdGhpcy5hcnJvdygpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmVuYWJsZURyYWcoKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5lbmFibGVTd2lwZSgpO1xuICAgICAgICAgICAgfSwgNTApO1xuXG4gICAgICAgICAgICBpZiAoX3RoaXMucy5tb3VzZXdoZWVsKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMubW91c2V3aGVlbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMuJHNsaWRlLm9uKCdjbGljay5sZycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLiRlbC50cmlnZ2VyKCdvblNsaWRlQ2xpY2subGcnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMuY291bnRlcigpO1xuXG4gICAgICAgIF90aGlzLmNsb3NlR2FsbGVyeSgpO1xuXG4gICAgICAgIF90aGlzLiRlbC50cmlnZ2VyKCdvbkFmdGVyT3Blbi5sZycpO1xuXG4gICAgICAgIC8vIEhpZGUgY29udHJvbGxlcnMgaWYgbW91c2UgZG9lc24ndCBtb3ZlIGZvciBzb21lIHBlcmlvZFxuICAgICAgICBfdGhpcy4kb3V0ZXIub24oJ21vdXNlbW92ZS5sZyBjbGljay5sZyB0b3VjaHN0YXJ0LmxnJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIF90aGlzLiRvdXRlci5yZW1vdmVDbGFzcygnbGctaGlkZS1pdGVtcycpO1xuXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoX3RoaXMuaGlkZUJhcnRpbWVvdXQpO1xuXG4gICAgICAgICAgICAvLyBUaW1lb3V0IHdpbGwgYmUgY2xlYXJlZCBvbiBlYWNoIHNsaWRlIG1vdmVtZW50IGFsc29cbiAgICAgICAgICAgIF90aGlzLmhpZGVCYXJ0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy4kb3V0ZXIuYWRkQ2xhc3MoJ2xnLWhpZGUtaXRlbXMnKTtcbiAgICAgICAgICAgIH0sIF90aGlzLnMuaGlkZUJhcnNEZWxheSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgX3RoaXMuJG91dGVyLnRyaWdnZXIoJ21vdXNlbW92ZS5sZycpO1xuXG4gICAgfTtcblxuICAgIFBsdWdpbi5wcm90b3R5cGUuc3RydWN0dXJlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBsaXN0ID0gJyc7XG4gICAgICAgIHZhciBjb250cm9scyA9ICcnO1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHZhciBzdWJIdG1sQ29udCA9ICcnO1xuICAgICAgICB2YXIgdGVtcGxhdGU7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgJCgnYm9keScpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImxnLWJhY2tkcm9wXCI+PC9kaXY+Jyk7XG4gICAgICAgICQoJy5sZy1iYWNrZHJvcCcpLmNzcygndHJhbnNpdGlvbi1kdXJhdGlvbicsIHRoaXMucy5iYWNrZHJvcER1cmF0aW9uICsgJ21zJyk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGdhbGxlcnkgaXRlbXNcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuJGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsaXN0ICs9ICc8ZGl2IGNsYXNzPVwibGctaXRlbVwiPjwvZGl2Pic7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcmVhdGUgY29udHJvbGxzXG4gICAgICAgIGlmICh0aGlzLnMuY29udHJvbHMgJiYgdGhpcy4kaXRlbXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgY29udHJvbHMgPSAnPGRpdiBjbGFzcz1cImxnLWFjdGlvbnNcIj4nICtcbiAgICAgICAgICAgICAgICAnPGJ1dHRvbiBjbGFzcz1cImxnLXByZXYgbGctaWNvblwiPicgKyB0aGlzLnMucHJldkh0bWwgKyAnPC9idXR0b24+JyArXG4gICAgICAgICAgICAgICAgJzxidXR0b24gY2xhc3M9XCJsZy1uZXh0IGxnLWljb25cIj4nICsgdGhpcy5zLm5leHRIdG1sICsgJzwvYnV0dG9uPicgK1xuICAgICAgICAgICAgICAgICc8L2Rpdj4nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucy5hcHBlbmRTdWJIdG1sVG8gPT09ICcubGctc3ViLWh0bWwnKSB7XG4gICAgICAgICAgICBzdWJIdG1sQ29udCA9ICc8ZGl2IGNsYXNzPVwibGctc3ViLWh0bWxcIj48L2Rpdj4nO1xuICAgICAgICB9XG5cbiAgICAgICAgdGVtcGxhdGUgPSAnPGRpdiBjbGFzcz1cImxnLW91dGVyICcgKyB0aGlzLnMuYWRkQ2xhc3MgKyAnICcgKyB0aGlzLnMuc3RhcnRDbGFzcyArICdcIj4nICtcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibGdcIiBzdHlsZT1cIndpZHRoOicgKyB0aGlzLnMud2lkdGggKyAnOyBoZWlnaHQ6JyArIHRoaXMucy5oZWlnaHQgKyAnXCI+JyArXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cImxnLWlubmVyXCI+JyArIGxpc3QgKyAnPC9kaXY+JyArXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cImxnLXRvb2xiYXIgbGctZ3JvdXBcIj4nICtcbiAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImxnLWNsb3NlIGxnLWljb25cIj48L3NwYW4+JyArXG4gICAgICAgICAgICAnPC9kaXY+JyArXG4gICAgICAgICAgICBjb250cm9scyArXG4gICAgICAgICAgICBzdWJIdG1sQ29udCArXG4gICAgICAgICAgICAnPC9kaXY+JyArXG4gICAgICAgICAgICAnPC9kaXY+JztcblxuICAgICAgICAkKCdib2R5JykuYXBwZW5kKHRlbXBsYXRlKTtcbiAgICAgICAgdGhpcy4kb3V0ZXIgPSAkKCcubGctb3V0ZXInKTtcbiAgICAgICAgdGhpcy4kc2xpZGUgPSB0aGlzLiRvdXRlci5maW5kKCcubGctaXRlbScpO1xuXG4gICAgICAgIGlmICh0aGlzLnMudXNlTGVmdCkge1xuICAgICAgICAgICAgdGhpcy4kb3V0ZXIuYWRkQ2xhc3MoJ2xnLXVzZS1sZWZ0Jyk7XG5cbiAgICAgICAgICAgIC8vIFNldCBtb2RlIGxnLXNsaWRlIGlmIHVzZSBsZWZ0IGlzIHRydWU7XG4gICAgICAgICAgICB0aGlzLnMubW9kZSA9ICdsZy1zbGlkZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRvdXRlci5hZGRDbGFzcygnbGctdXNlLWNzczMnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZvciBmaXhlZCBoZWlnaHQgZ2FsbGVyeVxuICAgICAgICBfdGhpcy5zZXRUb3AoKTtcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUubGcgb3JpZW50YXRpb25jaGFuZ2UubGcnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0VG9wKCk7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBhZGQgY2xhc3MgbGctY3VycmVudCB0byByZW1vdmUgaW5pdGlhbCB0cmFuc2l0aW9uXG4gICAgICAgIHRoaXMuJHNsaWRlLmVxKHRoaXMuaW5kZXgpLmFkZENsYXNzKCdsZy1jdXJyZW50Jyk7XG5cbiAgICAgICAgLy8gYWRkIENsYXNzIGZvciBjc3Mgc3VwcG9ydCBhbmQgdHJhbnNpdGlvbiBtb2RlXG4gICAgICAgIGlmICh0aGlzLmRvQ3NzKCkpIHtcbiAgICAgICAgICAgIHRoaXMuJG91dGVyLmFkZENsYXNzKCdsZy1jc3MzJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRvdXRlci5hZGRDbGFzcygnbGctY3NzJyk7XG5cbiAgICAgICAgICAgIC8vIFNldCBzcGVlZCAwIGJlY2F1c2Ugbm8gYW5pbWF0aW9uIHdpbGwgaGFwcGVuIGlmIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IGNzczNcbiAgICAgICAgICAgIHRoaXMucy5zcGVlZCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRvdXRlci5hZGRDbGFzcyh0aGlzLnMubW9kZSk7XG5cbiAgICAgICAgaWYgKHRoaXMucy5lbmFibGVEcmFnICYmIHRoaXMuJGl0ZW1zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMuJG91dGVyLmFkZENsYXNzKCdsZy1ncmFiJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zLnNob3dBZnRlckxvYWQpIHtcbiAgICAgICAgICAgIHRoaXMuJG91dGVyLmFkZENsYXNzKCdsZy1zaG93LWFmdGVyLWxvYWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRvQ3NzKCkpIHtcbiAgICAgICAgICAgIHZhciAkaW5uZXIgPSB0aGlzLiRvdXRlci5maW5kKCcubGctaW5uZXInKTtcbiAgICAgICAgICAgICRpbm5lci5jc3MoJ3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJywgdGhpcy5zLmNzc0Vhc2luZyk7XG4gICAgICAgICAgICAkaW5uZXIuY3NzKCd0cmFuc2l0aW9uLWR1cmF0aW9uJywgdGhpcy5zLnNwZWVkICsgJ21zJyk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnLmxnLWJhY2tkcm9wJykuYWRkQ2xhc3MoJ2luJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBfdGhpcy4kb3V0ZXIuYWRkQ2xhc3MoJ2xnLXZpc2libGUnKTtcbiAgICAgICAgfSwgdGhpcy5zLmJhY2tkcm9wRHVyYXRpb24pO1xuXG4gICAgICAgIGlmICh0aGlzLnMuZG93bmxvYWQpIHtcbiAgICAgICAgICAgIHRoaXMuJG91dGVyLmZpbmQoJy5sZy10b29sYmFyJykuYXBwZW5kKCc8YSBpZD1cImxnLWRvd25sb2FkXCIgdGFyZ2V0PVwiX2JsYW5rXCIgZG93bmxvYWQgY2xhc3M9XCJsZy1kb3dubG9hZCBsZy1pY29uXCI+PC9hPicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU3RvcmUgdGhlIGN1cnJlbnQgc2Nyb2xsIHRvcCB2YWx1ZSB0byBzY3JvbGwgYmFjayBhZnRlciBjbG9zaW5nIHRoZSBnYWxsZXJ5Li5cbiAgICAgICAgdGhpcy5wcmV2U2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG4gICAgfTtcblxuICAgIC8vIEZvciBmaXhlZCBoZWlnaHQgZ2FsbGVyeVxuICAgIFBsdWdpbi5wcm90b3R5cGUuc2V0VG9wID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLnMuaGVpZ2h0ICE9PSAnMTAwJScpIHtcbiAgICAgICAgICAgIHZhciB3SCA9ICQod2luZG93KS5oZWlnaHQoKTtcbiAgICAgICAgICAgIHZhciB0b3AgPSAod0ggLSBwYXJzZUludCh0aGlzLnMuaGVpZ2h0LCAxMCkpIC8gMjtcbiAgICAgICAgICAgIHZhciAkbEdhbGxlcnkgPSB0aGlzLiRvdXRlci5maW5kKCcubGcnKTtcbiAgICAgICAgICAgIGlmICh3SCA+PSBwYXJzZUludCh0aGlzLnMuaGVpZ2h0LCAxMCkpIHtcbiAgICAgICAgICAgICAgICAkbEdhbGxlcnkuY3NzKCd0b3AnLCB0b3AgKyAncHgnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGxHYWxsZXJ5LmNzcygndG9wJywgJzBweCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIEZpbmQgY3NzMyBzdXBwb3J0XG4gICAgUGx1Z2luLnByb3RvdHlwZS5kb0NzcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBjaGVjayBmb3IgY3NzIGFuaW1hdGlvbiBzdXBwb3J0XG4gICAgICAgIHZhciBzdXBwb3J0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgdHJhbnNpdGlvbiA9IFsndHJhbnNpdGlvbicsICdNb3pUcmFuc2l0aW9uJywgJ1dlYmtpdFRyYW5zaXRpb24nLCAnT1RyYW5zaXRpb24nLCAnbXNUcmFuc2l0aW9uJywgJ0todG1sVHJhbnNpdGlvbiddO1xuICAgICAgICAgICAgdmFyIHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdHJhbnNpdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0cmFuc2l0aW9uW2ldIGluIHJvb3Quc3R5bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChzdXBwb3J0KCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiAgQGRlc2MgQ2hlY2sgdGhlIGdpdmVuIHNyYyBpcyB2aWRlb1xuICAgICAqICBAcGFyYW0ge1N0cmluZ30gc3JjXG4gICAgICogIEByZXR1cm4ge09iamVjdH0gdmlkZW8gdHlwZVxuICAgICAqICBFeDp7IHlvdXR1YmUgIDogIFtcIi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9YzBhc0pnU3l4Y1lcIiwgXCJjMGFzSmdTeXhjWVwiXSB9XG4gICAgICovXG4gICAgUGx1Z2luLnByb3RvdHlwZS5pc1ZpZGVvID0gZnVuY3Rpb24oc3JjLCBpbmRleCkge1xuXG4gICAgICAgIHZhciBodG1sO1xuICAgICAgICBpZiAodGhpcy5zLmR5bmFtaWMpIHtcbiAgICAgICAgICAgIGh0bWwgPSB0aGlzLnMuZHluYW1pY0VsW2luZGV4XS5odG1sO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaHRtbCA9IHRoaXMuJGl0ZW1zLmVxKGluZGV4KS5hdHRyKCdkYXRhLWh0bWwnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICBpZihodG1sKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaHRtbDU6IHRydWVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdsaWdodEdhbGxlcnkgOi0gZGF0YS1zcmMgaXMgbm90IHB2b3ZpZGVkIG9uIHNsaWRlIGl0ZW0gJyArIChpbmRleCArIDEpICsgJy4gUGxlYXNlIG1ha2Ugc3VyZSB0aGUgc2VsZWN0b3IgcHJvcGVydHkgaXMgcHJvcGVybHkgY29uZmlndXJlZC4gTW9yZSBpbmZvIC0gaHR0cDovL3NhY2hpbmNob29sdXIuZ2l0aHViLmlvL2xpZ2h0R2FsbGVyeS9kZW1vcy9odG1sLW1hcmt1cC5odG1sJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHlvdXR1YmUgPSBzcmMubWF0Y2goL1xcL1xcLyg/Ond3d1xcLik/eW91dHUoPzpcXC5iZXxiZVxcLmNvbXxiZS1ub2Nvb2tpZVxcLmNvbSlcXC8oPzp3YXRjaFxcP3Y9fGVtYmVkXFwvKT8oW2EtejAtOVxcLVxcX1xcJV0rKS9pKTtcbiAgICAgICAgdmFyIHZpbWVvID0gc3JjLm1hdGNoKC9cXC9cXC8oPzp3d3dcXC4pP3ZpbWVvLmNvbVxcLyhbMC05YS16XFwtX10rKS9pKTtcbiAgICAgICAgdmFyIGRhaWx5bW90aW9uID0gc3JjLm1hdGNoKC9cXC9cXC8oPzp3d3dcXC4pP2RhaS5seVxcLyhbMC05YS16XFwtX10rKS9pKTtcbiAgICAgICAgdmFyIHZrID0gc3JjLm1hdGNoKC9cXC9cXC8oPzp3d3dcXC4pPyg/OnZrXFwuY29tfHZrb250YWt0ZVxcLnJ1KVxcLyg/OnZpZGVvX2V4dFxcLnBocFxcPykoLiopL2kpO1xuXG4gICAgICAgIGlmICh5b3V0dWJlKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHlvdXR1YmU6IHlvdXR1YmVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAodmltZW8pIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdmltZW86IHZpbWVvXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKGRhaWx5bW90aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGRhaWx5bW90aW9uOiBkYWlseW1vdGlvblxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmICh2aykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB2azogdmtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogIEBkZXNjIENyZWF0ZSBpbWFnZSBjb3VudGVyXG4gICAgICogIEV4OiAxLzEwXG4gICAgICovXG4gICAgUGx1Z2luLnByb3RvdHlwZS5jb3VudGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLnMuY291bnRlcikge1xuICAgICAgICAgICAgJCh0aGlzLnMuYXBwZW5kQ291bnRlclRvKS5hcHBlbmQoJzxkaXYgaWQ9XCJsZy1jb3VudGVyXCI+PHNwYW4gaWQ9XCJsZy1jb3VudGVyLWN1cnJlbnRcIj4nICsgKHBhcnNlSW50KHRoaXMuaW5kZXgsIDEwKSArIDEpICsgJzwvc3Bhbj4gLyA8c3BhbiBpZD1cImxnLWNvdW50ZXItYWxsXCI+JyArIHRoaXMuJGl0ZW1zLmxlbmd0aCArICc8L3NwYW4+PC9kaXY+Jyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogIEBkZXNjIGFkZCBzdWItaHRtbCBpbnRvIHRoZSBzbGlkZVxuICAgICAqICBAcGFyYW0ge051bWJlcn0gaW5kZXggLSBpbmRleCBvZiB0aGUgc2xpZGVcbiAgICAgKi9cbiAgICBQbHVnaW4ucHJvdG90eXBlLmFkZEh0bWwgPSBmdW5jdGlvbihpbmRleCkge1xuICAgICAgICB2YXIgc3ViSHRtbCA9IG51bGw7XG4gICAgICAgIHZhciBzdWJIdG1sVXJsO1xuICAgICAgICB2YXIgJGN1cnJlbnRFbGU7XG4gICAgICAgIGlmICh0aGlzLnMuZHluYW1pYykge1xuICAgICAgICAgICAgaWYgKHRoaXMucy5keW5hbWljRWxbaW5kZXhdLnN1Ykh0bWxVcmwpIHtcbiAgICAgICAgICAgICAgICBzdWJIdG1sVXJsID0gdGhpcy5zLmR5bmFtaWNFbFtpbmRleF0uc3ViSHRtbFVybDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3ViSHRtbCA9IHRoaXMucy5keW5hbWljRWxbaW5kZXhdLnN1Ykh0bWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkY3VycmVudEVsZSA9IHRoaXMuJGl0ZW1zLmVxKGluZGV4KTtcbiAgICAgICAgICAgIGlmICgkY3VycmVudEVsZS5hdHRyKCdkYXRhLXN1Yi1odG1sLXVybCcpKSB7XG4gICAgICAgICAgICAgICAgc3ViSHRtbFVybCA9ICRjdXJyZW50RWxlLmF0dHIoJ2RhdGEtc3ViLWh0bWwtdXJsJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN1Ykh0bWwgPSAkY3VycmVudEVsZS5hdHRyKCdkYXRhLXN1Yi1odG1sJyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucy5nZXRDYXB0aW9uRnJvbVRpdGxlT3JBbHQgJiYgIXN1Ykh0bWwpIHtcbiAgICAgICAgICAgICAgICAgICAgc3ViSHRtbCA9ICRjdXJyZW50RWxlLmF0dHIoJ3RpdGxlJykgfHwgJGN1cnJlbnRFbGUuZmluZCgnaW1nJykuZmlyc3QoKS5hdHRyKCdhbHQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXN1Ykh0bWxVcmwpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3ViSHRtbCAhPT0gJ3VuZGVmaW5lZCcgJiYgc3ViSHRtbCAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICAgICAgLy8gZ2V0IGZpcnN0IGxldHRlciBvZiBzdWJodG1sXG4gICAgICAgICAgICAgICAgLy8gaWYgZmlyc3QgbGV0dGVyIHN0YXJ0cyB3aXRoIC4gb3IgIyBnZXQgdGhlIGh0bWwgZm9ybSB0aGUgalF1ZXJ5IG9iamVjdFxuICAgICAgICAgICAgICAgIHZhciBmTCA9IHN1Ykh0bWwuc3Vic3RyaW5nKDAsIDEpO1xuICAgICAgICAgICAgICAgIGlmIChmTCA9PT0gJy4nIHx8IGZMID09PSAnIycpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucy5zdWJIdG1sU2VsZWN0b3JSZWxhdGl2ZSAmJiAhdGhpcy5zLmR5bmFtaWMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ykh0bWwgPSAkY3VycmVudEVsZS5maW5kKHN1Ykh0bWwpLmh0bWwoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ykh0bWwgPSAkKHN1Ykh0bWwpLmh0bWwoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3ViSHRtbCA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucy5hcHBlbmRTdWJIdG1sVG8gPT09ICcubGctc3ViLWh0bWwnKSB7XG5cbiAgICAgICAgICAgIGlmIChzdWJIdG1sVXJsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kb3V0ZXIuZmluZCh0aGlzLnMuYXBwZW5kU3ViSHRtbFRvKS5sb2FkKHN1Ykh0bWxVcmwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRvdXRlci5maW5kKHRoaXMucy5hcHBlbmRTdWJIdG1sVG8pLmh0bWwoc3ViSHRtbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKHN1Ykh0bWxVcmwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzbGlkZS5lcShpbmRleCkubG9hZChzdWJIdG1sVXJsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kc2xpZGUuZXEoaW5kZXgpLmFwcGVuZChzdWJIdG1sKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZCBsZy1lbXB0eS1odG1sIGNsYXNzIGlmIHRpdGxlIGRvZXNuJ3QgZXhpc3RcbiAgICAgICAgaWYgKHR5cGVvZiBzdWJIdG1sICE9PSAndW5kZWZpbmVkJyAmJiBzdWJIdG1sICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoc3ViSHRtbCA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRvdXRlci5maW5kKHRoaXMucy5hcHBlbmRTdWJIdG1sVG8pLmFkZENsYXNzKCdsZy1lbXB0eS1odG1sJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuJG91dGVyLmZpbmQodGhpcy5zLmFwcGVuZFN1Ykh0bWxUbykucmVtb3ZlQ2xhc3MoJ2xnLWVtcHR5LWh0bWwnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJGVsLnRyaWdnZXIoJ29uQWZ0ZXJBcHBlbmRTdWJIdG1sLmxnJywgW2luZGV4XSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqICBAZGVzYyBQcmVsb2FkIHNsaWRlc1xuICAgICAqICBAcGFyYW0ge051bWJlcn0gaW5kZXggLSBpbmRleCBvZiB0aGUgc2xpZGVcbiAgICAgKi9cbiAgICBQbHVnaW4ucHJvdG90eXBlLnByZWxvYWQgPSBmdW5jdGlvbihpbmRleCkge1xuICAgICAgICB2YXIgaSA9IDE7XG4gICAgICAgIHZhciBqID0gMTtcbiAgICAgICAgZm9yIChpID0gMTsgaSA8PSB0aGlzLnMucHJlbG9hZDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSA+PSB0aGlzLiRpdGVtcy5sZW5ndGggLSBpbmRleCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmxvYWRDb250ZW50KGluZGV4ICsgaSwgZmFsc2UsIDApO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChqID0gMTsgaiA8PSB0aGlzLnMucHJlbG9hZDsgaisrKSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggLSBqIDwgMCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmxvYWRDb250ZW50KGluZGV4IC0gaiwgZmFsc2UsIDApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqICBAZGVzYyBMb2FkIHNsaWRlIGNvbnRlbnQgaW50byBzbGlkZS5cbiAgICAgKiAgQHBhcmFtIHtOdW1iZXJ9IGluZGV4IC0gaW5kZXggb2YgdGhlIHNsaWRlLlxuICAgICAqICBAcGFyYW0ge0Jvb2xlYW59IHJlYyAtIGlmIHRydWUgY2FsbCBsb2FkY29udGVudCgpIGZ1bmN0aW9uIGFnYWluLlxuICAgICAqICBAcGFyYW0ge0Jvb2xlYW59IGRlbGF5IC0gZGVsYXkgZm9yIGFkZGluZyBjb21wbGV0ZSBjbGFzcy4gaXQgaXMgMCBleGNlcHQgZmlyc3QgdGltZS5cbiAgICAgKi9cbiAgICBQbHVnaW4ucHJvdG90eXBlLmxvYWRDb250ZW50ID0gZnVuY3Rpb24oaW5kZXgsIHJlYywgZGVsYXkpIHtcblxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgX2hhc1Bvc3RlciA9IGZhbHNlO1xuICAgICAgICB2YXIgXyRpbWc7XG4gICAgICAgIHZhciBfc3JjO1xuICAgICAgICB2YXIgX3Bvc3RlcjtcbiAgICAgICAgdmFyIF9zcmNzZXQ7XG4gICAgICAgIHZhciBfc2l6ZXM7XG4gICAgICAgIHZhciBfaHRtbDtcbiAgICAgICAgdmFyIGdldFJlc3BvbnNpdmVTcmMgPSBmdW5jdGlvbihzcmNJdG1zKSB7XG4gICAgICAgICAgICB2YXIgcnNXaWR0aCA9IFtdO1xuICAgICAgICAgICAgdmFyIHJzU3JjID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNyY0l0bXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgX19zcmMgPSBzcmNJdG1zW2ldLnNwbGl0KCcgJyk7XG5cbiAgICAgICAgICAgICAgICAvLyBNYW5hZ2UgZW1wdHkgc3BhY2VcbiAgICAgICAgICAgICAgICBpZiAoX19zcmNbMF0gPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIF9fc3JjLnNwbGljZSgwLCAxKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByc1NyYy5wdXNoKF9fc3JjWzBdKTtcbiAgICAgICAgICAgICAgICByc1dpZHRoLnB1c2goX19zcmNbMV0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJzV2lkdGgubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQocnNXaWR0aFtqXSwgMTApID4gd1dpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIF9zcmMgPSByc1NyY1tqXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChfdGhpcy5zLmR5bmFtaWMpIHtcblxuICAgICAgICAgICAgaWYgKF90aGlzLnMuZHluYW1pY0VsW2luZGV4XS5wb3N0ZXIpIHtcbiAgICAgICAgICAgICAgICBfaGFzUG9zdGVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBfcG9zdGVyID0gX3RoaXMucy5keW5hbWljRWxbaW5kZXhdLnBvc3RlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX2h0bWwgPSBfdGhpcy5zLmR5bmFtaWNFbFtpbmRleF0uaHRtbDtcbiAgICAgICAgICAgIF9zcmMgPSBfdGhpcy5zLmR5bmFtaWNFbFtpbmRleF0uc3JjO1xuXG4gICAgICAgICAgICBpZiAoX3RoaXMucy5keW5hbWljRWxbaW5kZXhdLnJlc3BvbnNpdmUpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3JjRHlJdG1zID0gX3RoaXMucy5keW5hbWljRWxbaW5kZXhdLnJlc3BvbnNpdmUuc3BsaXQoJywnKTtcbiAgICAgICAgICAgICAgICBnZXRSZXNwb25zaXZlU3JjKHNyY0R5SXRtcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF9zcmNzZXQgPSBfdGhpcy5zLmR5bmFtaWNFbFtpbmRleF0uc3Jjc2V0O1xuICAgICAgICAgICAgX3NpemVzID0gX3RoaXMucy5keW5hbWljRWxbaW5kZXhdLnNpemVzO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGlmIChfdGhpcy4kaXRlbXMuZXEoaW5kZXgpLmF0dHIoJ2RhdGEtcG9zdGVyJykpIHtcbiAgICAgICAgICAgICAgICBfaGFzUG9zdGVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBfcG9zdGVyID0gX3RoaXMuJGl0ZW1zLmVxKGluZGV4KS5hdHRyKCdkYXRhLXBvc3RlcicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfaHRtbCA9IF90aGlzLiRpdGVtcy5lcShpbmRleCkuYXR0cignZGF0YS1odG1sJyk7XG4gICAgICAgICAgICBfc3JjID0gX3RoaXMuJGl0ZW1zLmVxKGluZGV4KS5hdHRyKCdocmVmJykgfHwgX3RoaXMuJGl0ZW1zLmVxKGluZGV4KS5hdHRyKCdkYXRhLXNyYycpO1xuXG4gICAgICAgICAgICBpZiAoX3RoaXMuJGl0ZW1zLmVxKGluZGV4KS5hdHRyKCdkYXRhLXJlc3BvbnNpdmUnKSkge1xuICAgICAgICAgICAgICAgIHZhciBzcmNJdG1zID0gX3RoaXMuJGl0ZW1zLmVxKGluZGV4KS5hdHRyKCdkYXRhLXJlc3BvbnNpdmUnKS5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgICAgIGdldFJlc3BvbnNpdmVTcmMoc3JjSXRtcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF9zcmNzZXQgPSBfdGhpcy4kaXRlbXMuZXEoaW5kZXgpLmF0dHIoJ2RhdGEtc3Jjc2V0Jyk7XG4gICAgICAgICAgICBfc2l6ZXMgPSBfdGhpcy4kaXRlbXMuZXEoaW5kZXgpLmF0dHIoJ2RhdGEtc2l6ZXMnKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgLy9pZiAoX3NyYyB8fCBfc3Jjc2V0IHx8IF9zaXplcyB8fCBfcG9zdGVyKSB7XG5cbiAgICAgICAgdmFyIGlmcmFtZSA9IGZhbHNlO1xuICAgICAgICBpZiAoX3RoaXMucy5keW5hbWljKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMucy5keW5hbWljRWxbaW5kZXhdLmlmcmFtZSkge1xuICAgICAgICAgICAgICAgIGlmcmFtZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMuJGl0ZW1zLmVxKGluZGV4KS5hdHRyKCdkYXRhLWlmcmFtZScpID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgICAgICBpZnJhbWUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF9pc1ZpZGVvID0gX3RoaXMuaXNWaWRlbyhfc3JjLCBpbmRleCk7XG4gICAgICAgIGlmICghX3RoaXMuJHNsaWRlLmVxKGluZGV4KS5oYXNDbGFzcygnbGctbG9hZGVkJykpIHtcbiAgICAgICAgICAgIGlmIChpZnJhbWUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy4kc2xpZGUuZXEoaW5kZXgpLnByZXBlbmQoJzxkaXYgY2xhc3M9XCJsZy12aWRlby1jb250IGxnLWhhcy1pZnJhbWVcIiBzdHlsZT1cIm1heC13aWR0aDonICsgX3RoaXMucy5pZnJhbWVNYXhXaWR0aCArICdcIj48ZGl2IGNsYXNzPVwibGctdmlkZW9cIj48aWZyYW1lIGNsYXNzPVwibGctb2JqZWN0XCIgZnJhbWVib3JkZXI9XCIwXCIgc3JjPVwiJyArIF9zcmMgKyAnXCIgIGFsbG93ZnVsbHNjcmVlbj1cInRydWVcIj48L2lmcmFtZT48L2Rpdj48L2Rpdj4nKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoX2hhc1Bvc3Rlcikge1xuICAgICAgICAgICAgICAgIHZhciB2aWRlb0NsYXNzID0gJyc7XG4gICAgICAgICAgICAgICAgaWYgKF9pc1ZpZGVvICYmIF9pc1ZpZGVvLnlvdXR1YmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmlkZW9DbGFzcyA9ICdsZy1oYXMteW91dHViZSc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChfaXNWaWRlbyAmJiBfaXNWaWRlby52aW1lbykge1xuICAgICAgICAgICAgICAgICAgICB2aWRlb0NsYXNzID0gJ2xnLWhhcy12aW1lbyc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmlkZW9DbGFzcyA9ICdsZy1oYXMtaHRtbDUnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF90aGlzLiRzbGlkZS5lcShpbmRleCkucHJlcGVuZCgnPGRpdiBjbGFzcz1cImxnLXZpZGVvLWNvbnQgJyArIHZpZGVvQ2xhc3MgKyAnIFwiPjxkaXYgY2xhc3M9XCJsZy12aWRlb1wiPjxzcGFuIGNsYXNzPVwibGctdmlkZW8tcGxheVwiPjwvc3Bhbj48aW1nIGNsYXNzPVwibGctb2JqZWN0IGxnLWhhcy1wb3N0ZXJcIiBzcmM9XCInICsgX3Bvc3RlciArICdcIiAvPjwvZGl2PjwvZGl2PicpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKF9pc1ZpZGVvKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuJHNsaWRlLmVxKGluZGV4KS5wcmVwZW5kKCc8ZGl2IGNsYXNzPVwibGctdmlkZW8tY29udCBcIj48ZGl2IGNsYXNzPVwibGctdmlkZW9cIj48L2Rpdj48L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICBfdGhpcy4kZWwudHJpZ2dlcignaGFzVmlkZW8ubGcnLCBbaW5kZXgsIF9zcmMsIF9odG1sXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF90aGlzLiRzbGlkZS5lcShpbmRleCkucHJlcGVuZCgnPGRpdiBjbGFzcz1cImxnLWltZy13cmFwXCI+PGltZyBjbGFzcz1cImxnLW9iamVjdCBsZy1pbWFnZVwiIHNyYz1cIicgKyBfc3JjICsgJ1wiIC8+PC9kaXY+Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF90aGlzLiRlbC50cmlnZ2VyKCdvbkFmZXJBcHBlbmRTbGlkZS5sZycsIFtpbmRleF0pO1xuXG4gICAgICAgICAgICBfJGltZyA9IF90aGlzLiRzbGlkZS5lcShpbmRleCkuZmluZCgnLmxnLW9iamVjdCcpO1xuICAgICAgICAgICAgaWYgKF9zaXplcykge1xuICAgICAgICAgICAgICAgIF8kaW1nLmF0dHIoJ3NpemVzJywgX3NpemVzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKF9zcmNzZXQpIHtcbiAgICAgICAgICAgICAgICBfJGltZy5hdHRyKCdzcmNzZXQnLCBfc3Jjc2V0KTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBwaWN0dXJlZmlsbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50czogW18kaW1nWzBdXVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignbGlnaHRHYWxsZXJ5IDotIElmIHlvdSB3YW50IHNyY3NldCB0byBiZSBzdXBwb3J0ZWQgZm9yIG9sZGVyIGJyb3dzZXIgcGxlYXNlIGluY2x1ZGUgcGljdHVyZWZpbCB2ZXJzaW9uIDIgamF2YXNjcmlwdCBsaWJyYXJ5IGluIHlvdXIgZG9jdW1lbnQuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5zLmFwcGVuZFN1Ykh0bWxUbyAhPT0gJy5sZy1zdWItaHRtbCcpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGRIdG1sKGluZGV4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX3RoaXMuJHNsaWRlLmVxKGluZGV4KS5hZGRDbGFzcygnbGctbG9hZGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy4kc2xpZGUuZXEoaW5kZXgpLmZpbmQoJy5sZy1vYmplY3QnKS5vbignbG9hZC5sZyBlcnJvci5sZycsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAvLyBGb3IgZmlyc3QgdGltZSBhZGQgc29tZSBkZWxheSBmb3IgZGlzcGxheWluZyB0aGUgc3RhcnQgYW5pbWF0aW9uLlxuICAgICAgICAgICAgdmFyIF9zcGVlZCA9IDA7XG5cbiAgICAgICAgICAgIC8vIERvIG5vdCBjaGFuZ2UgdGhlIGRlbGF5IHZhbHVlIGJlY2F1c2UgaXQgaXMgcmVxdWlyZWQgZm9yIHpvb20gcGx1Z2luLlxuICAgICAgICAgICAgLy8gSWYgZ2FsbGVyeSBvcGVuZWQgZnJvbSBkaXJlY3QgdXJsIChoYXNoKSBzcGVlZCB2YWx1ZSBzaG91bGQgYmUgMFxuICAgICAgICAgICAgaWYgKGRlbGF5ICYmICEkKCdib2R5JykuaGFzQ2xhc3MoJ2xnLWZyb20taGFzaCcpKSB7XG4gICAgICAgICAgICAgICAgX3NwZWVkID0gZGVsYXk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuJHNsaWRlLmVxKGluZGV4KS5hZGRDbGFzcygnbGctY29tcGxldGUnKTtcbiAgICAgICAgICAgICAgICBfdGhpcy4kZWwudHJpZ2dlcignb25TbGlkZUl0ZW1Mb2FkLmxnJywgW2luZGV4LCBkZWxheSB8fCAwXSk7XG4gICAgICAgICAgICB9LCBfc3BlZWQpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEB0b2RvIGNoZWNrIGxvYWQgc3RhdGUgZm9yIGh0bWw1IHZpZGVvc1xuICAgICAgICBpZiAoX2lzVmlkZW8gJiYgX2lzVmlkZW8uaHRtbDUgJiYgIV9oYXNQb3N0ZXIpIHtcbiAgICAgICAgICAgIF90aGlzLiRzbGlkZS5lcShpbmRleCkuYWRkQ2xhc3MoJ2xnLWNvbXBsZXRlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVjID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoIV90aGlzLiRzbGlkZS5lcShpbmRleCkuaGFzQ2xhc3MoJ2xnLWNvbXBsZXRlJykpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy4kc2xpZGUuZXEoaW5kZXgpLmZpbmQoJy5sZy1vYmplY3QnKS5vbignbG9hZC5sZyBlcnJvci5sZycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5wcmVsb2FkKGluZGV4KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucHJlbG9hZChpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL31cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgKiAgIEBkZXNjIHNsaWRlIGZ1bmN0aW9uIGZvciBsaWdodGdhbGxlcnlcbiAgICAgICAgKiogU2xpZGUoKSBnZXRzIGNhbGwgb24gc3RhcnRcbiAgICAgICAgKiogKiogU2V0IGxnLm9uIHRydWUgb25jZSBzbGlkZSgpIGZ1bmN0aW9uIGdldHMgY2FsbGVkLlxuICAgICAgICAqKiBDYWxsIGxvYWRDb250ZW50KCkgb24gc2xpZGUoKSBmdW5jdGlvbiBpbnNpZGUgc2V0VGltZW91dFxuICAgICAgICAqKiAqKiBPbiBmaXJzdCBzbGlkZSB3ZSBkbyBub3Qgd2FudCBhbnkgYW5pbWF0aW9uIGxpa2Ugc2xpZGUgb2YgZmFkZVxuICAgICAgICAqKiAqKiBTbyBvbiBmaXJzdCBzbGlkZSggaWYgbGcub24gaWYgZmFsc2UgdGhhdCBpcyBmaXJzdCBzbGlkZSkgbG9hZENvbnRlbnQoKSBzaG91bGQgc3RhcnQgbG9hZGluZyBpbW1lZGlhdGVseVxuICAgICAgICAqKiAqKiBFbHNlIGxvYWRDb250ZW50KCkgc2hvdWxkIHdhaXQgZm9yIHRoZSB0cmFuc2l0aW9uIHRvIGNvbXBsZXRlLlxuICAgICAgICAqKiAqKiBTbyBzZXQgdGltZW91dCBzLnNwZWVkICsgNTBcbiAgICA8PT4gKiogbG9hZENvbnRlbnQoKSB3aWxsIGxvYWQgc2xpZGUgY29udGVudCBpbiB0byB0aGUgcGFydGljdWxhciBzbGlkZVxuICAgICAgICAqKiAqKiBJdCBoYXMgcmVjdXJzaW9uIChyZWMpIHBhcmFtZXRlci4gaWYgcmVjID09PSB0cnVlIGxvYWRDb250ZW50KCkgd2lsbCBjYWxsIHByZWxvYWQoKSBmdW5jdGlvbi5cbiAgICAgICAgKiogKiogcHJlbG9hZCB3aWxsIGV4ZWN1dGUgb25seSB3aGVuIHRoZSBwcmV2aW91cyBzbGlkZSBpcyBmdWxseSBsb2FkZWQgKGltYWdlcyBpZnJhbWUpXG4gICAgICAgICoqICoqIGF2b2lkIHNpbXVsdGFuZW91cyBpbWFnZSBsb2FkXG4gICAgPD0+ICoqIFByZWxvYWQoKSB3aWxsIGNoZWNrIGZvciBzLnByZWxvYWQgdmFsdWUgYW5kIGNhbGwgbG9hZENvbnRlbnQoKSBhZ2FpbiBhY2NvcmluZyB0byBwcmVsb2FkIHZhbHVlXG4gICAgICAgICoqIGxvYWRDb250ZW50KCkgIDw9PT09PiBQcmVsb2FkKCk7XG5cbiAgICAqICAgQHBhcmFtIHtOdW1iZXJ9IGluZGV4IC0gaW5kZXggb2YgdGhlIHNsaWRlXG4gICAgKiAgIEBwYXJhbSB7Qm9vbGVhbn0gZnJvbVRvdWNoIC0gdHJ1ZSBpZiBzbGlkZSBmdW5jdGlvbiBjYWxsZWQgdmlhIHRvdWNoIGV2ZW50IG9yIG1vdXNlIGRyYWdcbiAgICAqICAgQHBhcmFtIHtCb29sZWFufSBmcm9tVGh1bWIgLSB0cnVlIGlmIHNsaWRlIGZ1bmN0aW9uIGNhbGxlZCB2aWEgdGh1bWJuYWlsIGNsaWNrXG4gICAgKiAgIEBwYXJhbSB7U3RyaW5nfSBkaXJlY3Rpb24gLSBEaXJlY3Rpb24gb2YgdGhlIHNsaWRlKG5leHQvcHJldilcbiAgICAqL1xuICAgIFBsdWdpbi5wcm90b3R5cGUuc2xpZGUgPSBmdW5jdGlvbihpbmRleCwgZnJvbVRvdWNoLCBmcm9tVGh1bWIsIGRpcmVjdGlvbikge1xuXG4gICAgICAgIHZhciBfcHJldkluZGV4ID0gdGhpcy4kb3V0ZXIuZmluZCgnLmxnLWN1cnJlbnQnKS5pbmRleCgpO1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIC8vIFByZXZlbnQgaWYgbXVsdGlwbGUgY2FsbFxuICAgICAgICAvLyBSZXF1aXJlZCBmb3IgaHNoIHBsdWdpblxuICAgICAgICBpZiAoX3RoaXMubEdhbGxlcnlPbiAmJiAoX3ByZXZJbmRleCA9PT0gaW5kZXgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX2xlbmd0aCA9IHRoaXMuJHNsaWRlLmxlbmd0aDtcbiAgICAgICAgdmFyIF90aW1lID0gX3RoaXMubEdhbGxlcnlPbiA/IHRoaXMucy5zcGVlZCA6IDA7XG5cbiAgICAgICAgaWYgKCFfdGhpcy5sZ0J1c3kpIHtcblxuICAgICAgICAgICAgaWYgKHRoaXMucy5kb3dubG9hZCkge1xuICAgICAgICAgICAgICAgIHZhciBfc3JjO1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5zLmR5bmFtaWMpIHtcbiAgICAgICAgICAgICAgICAgICAgX3NyYyA9IF90aGlzLnMuZHluYW1pY0VsW2luZGV4XS5kb3dubG9hZFVybCAhPT0gZmFsc2UgJiYgKF90aGlzLnMuZHluYW1pY0VsW2luZGV4XS5kb3dubG9hZFVybCB8fCBfdGhpcy5zLmR5bmFtaWNFbFtpbmRleF0uc3JjKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfc3JjID0gX3RoaXMuJGl0ZW1zLmVxKGluZGV4KS5hdHRyKCdkYXRhLWRvd25sb2FkLXVybCcpICE9PSAnZmFsc2UnICYmIChfdGhpcy4kaXRlbXMuZXEoaW5kZXgpLmF0dHIoJ2RhdGEtZG93bmxvYWQtdXJsJykgfHwgX3RoaXMuJGl0ZW1zLmVxKGluZGV4KS5hdHRyKCdocmVmJykgfHwgX3RoaXMuJGl0ZW1zLmVxKGluZGV4KS5hdHRyKCdkYXRhLXNyYycpKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChfc3JjKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJyNsZy1kb3dubG9hZCcpLmF0dHIoJ2hyZWYnLCBfc3JjKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuJG91dGVyLnJlbW92ZUNsYXNzKCdsZy1oaWRlLWRvd25sb2FkJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuJG91dGVyLmFkZENsYXNzKCdsZy1oaWRlLWRvd25sb2FkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLiRlbC50cmlnZ2VyKCdvbkJlZm9yZVNsaWRlLmxnJywgW19wcmV2SW5kZXgsIGluZGV4LCBmcm9tVG91Y2gsIGZyb21UaHVtYl0pO1xuXG4gICAgICAgICAgICBfdGhpcy5sZ0J1c3kgPSB0cnVlO1xuXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoX3RoaXMuaGlkZUJhcnRpbWVvdXQpO1xuXG4gICAgICAgICAgICAvLyBBZGQgdGl0bGUgaWYgdGhpcy5zLmFwcGVuZFN1Ykh0bWxUbyA9PT0gbGctc3ViLWh0bWxcbiAgICAgICAgICAgIGlmICh0aGlzLnMuYXBwZW5kU3ViSHRtbFRvID09PSAnLmxnLXN1Yi1odG1sJykge1xuXG4gICAgICAgICAgICAgICAgLy8gd2FpdCBmb3Igc2xpZGUgYW5pbWF0aW9uIHRvIGNvbXBsZXRlXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYWRkSHRtbChpbmRleCk7XG4gICAgICAgICAgICAgICAgfSwgX3RpbWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmFycm93RGlzYWJsZShpbmRleCk7XG5cbiAgICAgICAgICAgIGlmICghZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4IDwgX3ByZXZJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSAncHJldic7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbmRleCA+IF9wcmV2SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gJ25leHQnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFmcm9tVG91Y2gpIHtcblxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBhbGwgdHJhbnNpdGlvbnNcbiAgICAgICAgICAgICAgICBfdGhpcy4kb3V0ZXIuYWRkQ2xhc3MoJ2xnLW5vLXRyYW5zJyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRzbGlkZS5yZW1vdmVDbGFzcygnbGctcHJldi1zbGlkZSBsZy1uZXh0LXNsaWRlJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAncHJldicpIHtcblxuICAgICAgICAgICAgICAgICAgICAvL3ByZXZzbGlkZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzbGlkZS5lcShpbmRleCkuYWRkQ2xhc3MoJ2xnLXByZXYtc2xpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2xpZGUuZXEoX3ByZXZJbmRleCkuYWRkQ2xhc3MoJ2xnLW5leHQtc2xpZGUnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIG5leHQgc2xpZGVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2xpZGUuZXEoaW5kZXgpLmFkZENsYXNzKCdsZy1uZXh0LXNsaWRlJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHNsaWRlLmVxKF9wcmV2SW5kZXgpLmFkZENsYXNzKCdsZy1wcmV2LXNsaWRlJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gZ2l2ZSA1MCBtcyBmb3IgYnJvd3NlciB0byBhZGQvcmVtb3ZlIGNsYXNzXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuJHNsaWRlLnJlbW92ZUNsYXNzKCdsZy1jdXJyZW50Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9fdGhpcy4kc2xpZGUuZXEoX3ByZXZJbmRleCkucmVtb3ZlQ2xhc3MoJ2xnLWN1cnJlbnQnKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuJHNsaWRlLmVxKGluZGV4KS5hZGRDbGFzcygnbGctY3VycmVudCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlc2V0IGFsbCB0cmFuc2l0aW9uc1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy4kb3V0ZXIucmVtb3ZlQ2xhc3MoJ2xnLW5vLXRyYW5zJyk7XG4gICAgICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuJHNsaWRlLnJlbW92ZUNsYXNzKCdsZy1wcmV2LXNsaWRlIGxnLWN1cnJlbnQgbGctbmV4dC1zbGlkZScpO1xuICAgICAgICAgICAgICAgIHZhciB0b3VjaFByZXY7XG4gICAgICAgICAgICAgICAgdmFyIHRvdWNoTmV4dDtcbiAgICAgICAgICAgICAgICBpZiAoX2xlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hQcmV2ID0gaW5kZXggLSAxO1xuICAgICAgICAgICAgICAgICAgICB0b3VjaE5leHQgPSBpbmRleCArIDE7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKChpbmRleCA9PT0gMCkgJiYgKF9wcmV2SW5kZXggPT09IF9sZW5ndGggLSAxKSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBuZXh0IHNsaWRlXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE5leHQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hQcmV2ID0gX2xlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoKGluZGV4ID09PSBfbGVuZ3RoIC0gMSkgJiYgKF9wcmV2SW5kZXggPT09IDApKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHByZXYgc2xpZGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoTmV4dCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaFByZXYgPSBfbGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hQcmV2ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hOZXh0ID0gMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAncHJldicpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuJHNsaWRlLmVxKHRvdWNoTmV4dCkuYWRkQ2xhc3MoJ2xnLW5leHQtc2xpZGUnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy4kc2xpZGUuZXEodG91Y2hQcmV2KS5hZGRDbGFzcygnbGctcHJldi1zbGlkZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF90aGlzLiRzbGlkZS5lcShpbmRleCkuYWRkQ2xhc3MoJ2xnLWN1cnJlbnQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKF90aGlzLmxHYWxsZXJ5T24pIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5sb2FkQ29udGVudChpbmRleCwgdHJ1ZSwgMCk7XG4gICAgICAgICAgICAgICAgfSwgdGhpcy5zLnNwZWVkICsgNTApO1xuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubGdCdXN5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLiRlbC50cmlnZ2VyKCdvbkFmdGVyU2xpZGUubGcnLCBbX3ByZXZJbmRleCwgaW5kZXgsIGZyb21Ub3VjaCwgZnJvbVRodW1iXSk7XG4gICAgICAgICAgICAgICAgfSwgdGhpcy5zLnNwZWVkKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5sb2FkQ29udGVudChpbmRleCwgdHJ1ZSwgX3RoaXMucy5iYWNrZHJvcER1cmF0aW9uKTtcblxuICAgICAgICAgICAgICAgIF90aGlzLmxnQnVzeSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIF90aGlzLiRlbC50cmlnZ2VyKCdvbkFmdGVyU2xpZGUubGcnLCBbX3ByZXZJbmRleCwgaW5kZXgsIGZyb21Ub3VjaCwgZnJvbVRodW1iXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF90aGlzLmxHYWxsZXJ5T24gPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zLmNvdW50ZXIpIHtcbiAgICAgICAgICAgICAgICAkKCcjbGctY291bnRlci1jdXJyZW50JykudGV4dChpbmRleCArIDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMuaW5kZXggPSBpbmRleDtcblxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiAgQGRlc2MgR28gdG8gbmV4dCBzbGlkZVxuICAgICAqICBAcGFyYW0ge0Jvb2xlYW59IGZyb21Ub3VjaCAtIHRydWUgaWYgc2xpZGUgZnVuY3Rpb24gY2FsbGVkIHZpYSB0b3VjaCBldmVudFxuICAgICAqL1xuICAgIFBsdWdpbi5wcm90b3R5cGUuZ29Ub05leHRTbGlkZSA9IGZ1bmN0aW9uKGZyb21Ub3VjaCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgX2xvb3AgPSBfdGhpcy5zLmxvb3A7XG4gICAgICAgIGlmIChmcm9tVG91Y2ggJiYgX3RoaXMuJHNsaWRlLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgICAgIF9sb29wID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIV90aGlzLmxnQnVzeSkge1xuICAgICAgICAgICAgaWYgKChfdGhpcy5pbmRleCArIDEpIDwgX3RoaXMuJHNsaWRlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmluZGV4Kys7XG4gICAgICAgICAgICAgICAgX3RoaXMuJGVsLnRyaWdnZXIoJ29uQmVmb3JlTmV4dFNsaWRlLmxnJywgW190aGlzLmluZGV4XSk7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2xpZGUoX3RoaXMuaW5kZXgsIGZyb21Ub3VjaCwgZmFsc2UsICduZXh0Jyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChfbG9vcCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5pbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLiRlbC50cmlnZ2VyKCdvbkJlZm9yZU5leHRTbGlkZS5sZycsIFtfdGhpcy5pbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zbGlkZShfdGhpcy5pbmRleCwgZnJvbVRvdWNoLCBmYWxzZSwgJ25leHQnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKF90aGlzLnMuc2xpZGVFbmRBbmltYXRvaW4gJiYgIWZyb21Ub3VjaCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy4kb3V0ZXIuYWRkQ2xhc3MoJ2xnLXJpZ2h0LWVuZCcpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuJG91dGVyLnJlbW92ZUNsYXNzKCdsZy1yaWdodC1lbmQnKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNDAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogIEBkZXNjIEdvIHRvIHByZXZpb3VzIHNsaWRlXG4gICAgICogIEBwYXJhbSB7Qm9vbGVhbn0gZnJvbVRvdWNoIC0gdHJ1ZSBpZiBzbGlkZSBmdW5jdGlvbiBjYWxsZWQgdmlhIHRvdWNoIGV2ZW50XG4gICAgICovXG4gICAgUGx1Z2luLnByb3RvdHlwZS5nb1RvUHJldlNsaWRlID0gZnVuY3Rpb24oZnJvbVRvdWNoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBfbG9vcCA9IF90aGlzLnMubG9vcDtcbiAgICAgICAgaWYgKGZyb21Ub3VjaCAmJiBfdGhpcy4kc2xpZGUubGVuZ3RoIDwgMykge1xuICAgICAgICAgICAgX2xvb3AgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghX3RoaXMubGdCdXN5KSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMuaW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuaW5kZXgtLTtcbiAgICAgICAgICAgICAgICBfdGhpcy4kZWwudHJpZ2dlcignb25CZWZvcmVQcmV2U2xpZGUubGcnLCBbX3RoaXMuaW5kZXgsIGZyb21Ub3VjaF0pO1xuICAgICAgICAgICAgICAgIF90aGlzLnNsaWRlKF90aGlzLmluZGV4LCBmcm9tVG91Y2gsIGZhbHNlLCAncHJldicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoX2xvb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuaW5kZXggPSBfdGhpcy4kaXRlbXMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuJGVsLnRyaWdnZXIoJ29uQmVmb3JlUHJldlNsaWRlLmxnJywgW190aGlzLmluZGV4LCBmcm9tVG91Y2hdKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2xpZGUoX3RoaXMuaW5kZXgsIGZyb21Ub3VjaCwgZmFsc2UsICdwcmV2Jyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChfdGhpcy5zLnNsaWRlRW5kQW5pbWF0b2luICYmICFmcm9tVG91Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuJG91dGVyLmFkZENsYXNzKCdsZy1sZWZ0LWVuZCcpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuJG91dGVyLnJlbW92ZUNsYXNzKCdsZy1sZWZ0LWVuZCcpO1xuICAgICAgICAgICAgICAgICAgICB9LCA0MDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBQbHVnaW4ucHJvdG90eXBlLmtleVByZXNzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLiRpdGVtcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAkKHdpbmRvdykub24oJ2tleXVwLmxnJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy4kaXRlbXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzNykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZ29Ub1ByZXZTbGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmdvVG9OZXh0U2xpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdrZXlkb3duLmxnJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYgKF90aGlzLnMuZXNjS2V5ID09PSB0cnVlICYmIGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgaWYgKCFfdGhpcy4kb3V0ZXIuaGFzQ2xhc3MoJ2xnLXRodW1iLW9wZW4nKSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuJG91dGVyLnJlbW92ZUNsYXNzKCdsZy10aHVtYi1vcGVuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgUGx1Z2luLnByb3RvdHlwZS5hcnJvdyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLiRvdXRlci5maW5kKCcubGctcHJldicpLm9uKCdjbGljay5sZycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgX3RoaXMuZ29Ub1ByZXZTbGlkZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRvdXRlci5maW5kKCcubGctbmV4dCcpLm9uKCdjbGljay5sZycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgX3RoaXMuZ29Ub05leHRTbGlkZSgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgUGx1Z2luLnByb3RvdHlwZS5hcnJvd0Rpc2FibGUgPSBmdW5jdGlvbihpbmRleCkge1xuXG4gICAgICAgIC8vIERpc2FibGUgYXJyb3dzIGlmIHMuaGlkZUNvbnRyb2xPbkVuZCBpcyB0cnVlXG4gICAgICAgIGlmICghdGhpcy5zLmxvb3AgJiYgdGhpcy5zLmhpZGVDb250cm9sT25FbmQpIHtcbiAgICAgICAgICAgIGlmICgoaW5kZXggKyAxKSA8IHRoaXMuJHNsaWRlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJG91dGVyLmZpbmQoJy5sZy1uZXh0JykucmVtb3ZlQXR0cignZGlzYWJsZWQnKS5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kb3V0ZXIuZmluZCgnLmxnLW5leHQnKS5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kb3V0ZXIuZmluZCgnLmxnLXByZXYnKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRvdXRlci5maW5kKCcubGctcHJldicpLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJykuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgUGx1Z2luLnByb3RvdHlwZS5zZXRUcmFuc2xhdGUgPSBmdW5jdGlvbigkZWwsIHhWYWx1ZSwgeVZhbHVlKSB7XG4gICAgICAgIC8vIGpRdWVyeSBzdXBwb3J0cyBBdXRvbWF0aWMgQ1NTIHByZWZpeGluZyBzaW5jZSBqUXVlcnkgMS44LjBcbiAgICAgICAgaWYgKHRoaXMucy51c2VMZWZ0KSB7XG4gICAgICAgICAgICAkZWwuY3NzKCdsZWZ0JywgeFZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRlbC5jc3Moe1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKCcgKyAoeFZhbHVlKSArICdweCwgJyArIHlWYWx1ZSArICdweCwgMHB4KSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFBsdWdpbi5wcm90b3R5cGUudG91Y2hNb3ZlID0gZnVuY3Rpb24oc3RhcnRDb29yZHMsIGVuZENvb3Jkcykge1xuXG4gICAgICAgIHZhciBkaXN0YW5jZSA9IGVuZENvb3JkcyAtIHN0YXJ0Q29vcmRzO1xuXG4gICAgICAgIGlmIChNYXRoLmFicyhkaXN0YW5jZSkgPiAxNSkge1xuICAgICAgICAgICAgLy8gcmVzZXQgb3BhY2l0eSBhbmQgdHJhbnNpdGlvbiBkdXJhdGlvblxuICAgICAgICAgICAgdGhpcy4kb3V0ZXIuYWRkQ2xhc3MoJ2xnLWRyYWdnaW5nJyk7XG5cbiAgICAgICAgICAgIC8vIG1vdmUgY3VycmVudCBzbGlkZVxuICAgICAgICAgICAgdGhpcy5zZXRUcmFuc2xhdGUodGhpcy4kc2xpZGUuZXEodGhpcy5pbmRleCksIGRpc3RhbmNlLCAwKTtcblxuICAgICAgICAgICAgLy8gbW92ZSBuZXh0IGFuZCBwcmV2IHNsaWRlIHdpdGggY3VycmVudCBzbGlkZVxuICAgICAgICAgICAgdGhpcy5zZXRUcmFuc2xhdGUoJCgnLmxnLXByZXYtc2xpZGUnKSwgLXRoaXMuJHNsaWRlLmVxKHRoaXMuaW5kZXgpLndpZHRoKCkgKyBkaXN0YW5jZSwgMCk7XG4gICAgICAgICAgICB0aGlzLnNldFRyYW5zbGF0ZSgkKCcubGctbmV4dC1zbGlkZScpLCB0aGlzLiRzbGlkZS5lcSh0aGlzLmluZGV4KS53aWR0aCgpICsgZGlzdGFuY2UsIDApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFBsdWdpbi5wcm90b3R5cGUudG91Y2hFbmQgPSBmdW5jdGlvbihkaXN0YW5jZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIC8vIGtlZXAgc2xpZGUgYW5pbWF0aW9uIGZvciBhbnkgbW9kZSB3aGlsZSBkcmFnZy9zd2lwZVxuICAgICAgICBpZiAoX3RoaXMucy5tb2RlICE9PSAnbGctc2xpZGUnKSB7XG4gICAgICAgICAgICBfdGhpcy4kb3V0ZXIuYWRkQ2xhc3MoJ2xnLXNsaWRlJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRzbGlkZS5ub3QoJy5sZy1jdXJyZW50LCAubGctcHJldi1zbGlkZSwgLmxnLW5leHQtc2xpZGUnKS5jc3MoJ29wYWNpdHknLCAnMCcpO1xuXG4gICAgICAgIC8vIHNldCB0cmFuc2l0aW9uIGR1cmF0aW9uXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBfdGhpcy4kb3V0ZXIucmVtb3ZlQ2xhc3MoJ2xnLWRyYWdnaW5nJyk7XG4gICAgICAgICAgICBpZiAoKGRpc3RhbmNlIDwgMCkgJiYgKE1hdGguYWJzKGRpc3RhbmNlKSA+IF90aGlzLnMuc3dpcGVUaHJlc2hvbGQpKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZ29Ub05leHRTbGlkZSh0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKGRpc3RhbmNlID4gMCkgJiYgKE1hdGguYWJzKGRpc3RhbmNlKSA+IF90aGlzLnMuc3dpcGVUaHJlc2hvbGQpKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZ29Ub1ByZXZTbGlkZSh0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMoZGlzdGFuY2UpIDwgNSkge1xuXG4gICAgICAgICAgICAgICAgLy8gVHJpZ2dlciBjbGljayBpZiBkaXN0YW5jZSBpcyBsZXNzIHRoYW4gNSBwaXhcbiAgICAgICAgICAgICAgICBfdGhpcy4kZWwudHJpZ2dlcignb25TbGlkZUNsaWNrLmxnJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF90aGlzLiRzbGlkZS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyByZW1vdmUgc2xpZGUgY2xhc3Mgb25jZSBkcmFnL3N3aXBlIGlzIGNvbXBsZXRlZCBpZiBtb2RlIGlzIG5vdCBzbGlkZVxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCFfdGhpcy4kb3V0ZXIuaGFzQ2xhc3MoJ2xnLWRyYWdnaW5nJykgJiYgX3RoaXMucy5tb2RlICE9PSAnbGctc2xpZGUnKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuJG91dGVyLnJlbW92ZUNsYXNzKCdsZy1zbGlkZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBfdGhpcy5zLnNwZWVkICsgMTAwKTtcblxuICAgIH07XG5cbiAgICBQbHVnaW4ucHJvdG90eXBlLmVuYWJsZVN3aXBlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBzdGFydENvb3JkcyA9IDA7XG4gICAgICAgIHZhciBlbmRDb29yZHMgPSAwO1xuICAgICAgICB2YXIgaXNNb3ZlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChfdGhpcy5zLmVuYWJsZVN3aXBlICYmIF90aGlzLmRvQ3NzKCkpIHtcblxuICAgICAgICAgICAgX3RoaXMuJHNsaWRlLm9uKCd0b3VjaHN0YXJ0LmxnJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGlmICghX3RoaXMuJG91dGVyLmhhc0NsYXNzKCdsZy16b29tZWQnKSAmJiAhX3RoaXMubGdCdXN5KSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubWFuYWdlU3dpcGVDbGFzcygpO1xuICAgICAgICAgICAgICAgICAgICBzdGFydENvb3JkcyA9IGUub3JpZ2luYWxFdmVudC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBfdGhpcy4kc2xpZGUub24oJ3RvdWNobW92ZS5sZycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIV90aGlzLiRvdXRlci5oYXNDbGFzcygnbGctem9vbWVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBlbmRDb29yZHMgPSBlLm9yaWdpbmFsRXZlbnQudGFyZ2V0VG91Y2hlc1swXS5wYWdlWDtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudG91Y2hNb3ZlKHN0YXJ0Q29vcmRzLCBlbmRDb29yZHMpO1xuICAgICAgICAgICAgICAgICAgICBpc01vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgX3RoaXMuJHNsaWRlLm9uKCd0b3VjaGVuZC5sZycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICghX3RoaXMuJG91dGVyLmhhc0NsYXNzKCdsZy16b29tZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNNb3ZlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNNb3ZlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudG91Y2hFbmQoZW5kQ29vcmRzIC0gc3RhcnRDb29yZHMpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuJGVsLnRyaWdnZXIoJ29uU2xpZGVDbGljay5sZycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBQbHVnaW4ucHJvdG90eXBlLmVuYWJsZURyYWcgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHN0YXJ0Q29vcmRzID0gMDtcbiAgICAgICAgdmFyIGVuZENvb3JkcyA9IDA7XG4gICAgICAgIHZhciBpc0RyYWdpbmcgPSBmYWxzZTtcbiAgICAgICAgdmFyIGlzTW92ZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKF90aGlzLnMuZW5hYmxlRHJhZyAmJiBfdGhpcy5kb0NzcygpKSB7XG4gICAgICAgICAgICBfdGhpcy4kc2xpZGUub24oJ21vdXNlZG93bi5sZycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIV90aGlzLiRvdXRlci5oYXNDbGFzcygnbGctem9vbWVkJykgJiYgIV90aGlzLmxnQnVzeSAmJiAhJChlLnRhcmdldCkudGV4dCgpLnRyaW0oKSkge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm1hbmFnZVN3aXBlQ2xhc3MoKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRDb29yZHMgPSBlLnBhZ2VYO1xuICAgICAgICAgICAgICAgICAgICBpc0RyYWdpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICoqIEZpeCBmb3Igd2Via2l0IGN1cnNvciBpc3N1ZSBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MjY3MjNcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuJG91dGVyLnNjcm9sbExlZnQgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuJG91dGVyLnNjcm9sbExlZnQgLT0gMTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAqXG5cbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuJG91dGVyLnJlbW92ZUNsYXNzKCdsZy1ncmFiJykuYWRkQ2xhc3MoJ2xnLWdyYWJiaW5nJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuJGVsLnRyaWdnZXIoJ29uRHJhZ3N0YXJ0LmxnJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQod2luZG93KS5vbignbW91c2Vtb3ZlLmxnJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGlmIChpc0RyYWdpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNNb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGVuZENvb3JkcyA9IGUucGFnZVg7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnRvdWNoTW92ZShzdGFydENvb3JkcywgZW5kQ29vcmRzKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuJGVsLnRyaWdnZXIoJ29uRHJhZ21vdmUubGcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCh3aW5kb3cpLm9uKCdtb3VzZXVwLmxnJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGlmIChpc01vdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzTW92ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudG91Y2hFbmQoZW5kQ29vcmRzIC0gc3RhcnRDb29yZHMpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy4kZWwudHJpZ2dlcignb25EcmFnZW5kLmxnJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgkKGUudGFyZ2V0KS5oYXNDbGFzcygnbGctb2JqZWN0JykgfHwgJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2xnLXZpZGVvLXBsYXknKSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy4kZWwudHJpZ2dlcignb25TbGlkZUNsaWNrLmxnJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gUHJldmVudCBleGVjdXRpb24gb24gY2xpY2tcbiAgICAgICAgICAgICAgICBpZiAoaXNEcmFnaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzRHJhZ2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy4kb3V0ZXIucmVtb3ZlQ2xhc3MoJ2xnLWdyYWJiaW5nJykuYWRkQ2xhc3MoJ2xnLWdyYWInKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG4gICAgfTtcblxuICAgIFBsdWdpbi5wcm90b3R5cGUubWFuYWdlU3dpcGVDbGFzcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgX3RvdWNoTmV4dCA9IHRoaXMuaW5kZXggKyAxO1xuICAgICAgICB2YXIgX3RvdWNoUHJldiA9IHRoaXMuaW5kZXggLSAxO1xuICAgICAgICBpZiAodGhpcy5zLmxvb3AgJiYgdGhpcy4kc2xpZGUubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICBfdG91Y2hQcmV2ID0gdGhpcy4kc2xpZGUubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbmRleCA9PT0gdGhpcy4kc2xpZGUubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIF90b3VjaE5leHQgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kc2xpZGUucmVtb3ZlQ2xhc3MoJ2xnLW5leHQtc2xpZGUgbGctcHJldi1zbGlkZScpO1xuICAgICAgICBpZiAoX3RvdWNoUHJldiA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLiRzbGlkZS5lcShfdG91Y2hQcmV2KS5hZGRDbGFzcygnbGctcHJldi1zbGlkZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kc2xpZGUuZXEoX3RvdWNoTmV4dCkuYWRkQ2xhc3MoJ2xnLW5leHQtc2xpZGUnKTtcbiAgICB9O1xuXG4gICAgUGx1Z2luLnByb3RvdHlwZS5tb3VzZXdoZWVsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIF90aGlzLiRvdXRlci5vbignbW91c2V3aGVlbC5sZycsIGZ1bmN0aW9uKGUpIHtcblxuICAgICAgICAgICAgaWYgKCFlLmRlbHRhWSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGUuZGVsdGFZID4gMCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmdvVG9QcmV2U2xpZGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZ29Ub05leHRTbGlkZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIFBsdWdpbi5wcm90b3R5cGUuY2xvc2VHYWxsZXJ5ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIG1vdXNlZG93biA9IGZhbHNlO1xuICAgICAgICB0aGlzLiRvdXRlci5maW5kKCcubGctY2xvc2UnKS5vbignY2xpY2subGcnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIF90aGlzLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKF90aGlzLnMuY2xvc2FibGUpIHtcblxuICAgICAgICAgICAgLy8gSWYgeW91IGRyYWcgdGhlIHNsaWRlIGFuZCByZWxlYXNlIG91dHNpZGUgZ2FsbGVyeSBnZXRzIGNsb3NlIG9uIGNocm9tZVxuICAgICAgICAgICAgLy8gZm9yIHByZXZlbnRpbmcgdGhpcyBjaGVjayBtb3VzZWRvd24gYW5kIG1vdXNldXAgaGFwcGVuZWQgb24gLmxnLWl0ZW0gb3IgbGctb3V0ZXJcbiAgICAgICAgICAgIF90aGlzLiRvdXRlci5vbignbW91c2Vkb3duLmxnJywgZnVuY3Rpb24oZSkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCQoZS50YXJnZXQpLmlzKCcubGctb3V0ZXInKSB8fCAkKGUudGFyZ2V0KS5pcygnLmxnLWl0ZW0gJykgfHwgJChlLnRhcmdldCkuaXMoJy5sZy1pbWctd3JhcCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vdXNlZG93biA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbW91c2Vkb3duID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgX3RoaXMuJG91dGVyLm9uKCdtb3VzZW1vdmUubGcnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBtb3VzZWRvd24gPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBfdGhpcy4kb3V0ZXIub24oJ21vdXNldXAubGcnLCBmdW5jdGlvbihlKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoJChlLnRhcmdldCkuaXMoJy5sZy1vdXRlcicpIHx8ICQoZS50YXJnZXQpLmlzKCcubGctaXRlbSAnKSB8fCAkKGUudGFyZ2V0KS5pcygnLmxnLWltZy13cmFwJykgJiYgbW91c2Vkb3duKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghX3RoaXMuJG91dGVyLmhhc0NsYXNzKCdsZy1kcmFnZ2luZycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBQbHVnaW4ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbihkKSB7XG5cbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICBpZiAoIWQpIHtcbiAgICAgICAgICAgIF90aGlzLiRlbC50cmlnZ2VyKCdvbkJlZm9yZUNsb3NlLmxnJyk7XG4gICAgICAgICAgICAkKHdpbmRvdykuc2Nyb2xsVG9wKF90aGlzLnByZXZTY3JvbGxUb3ApO1xuICAgICAgICB9XG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogaWYgZCBpcyBmYWxzZSBvciB1bmRlZmluZWQgZGVzdHJveSB3aWxsIG9ubHkgY2xvc2UgdGhlIGdhbGxlcnlcbiAgICAgICAgICogcGx1Z2lucyBpbnN0YW5jZSByZW1haW5zIHdpdGggdGhlIGVsZW1lbnRcbiAgICAgICAgICpcbiAgICAgICAgICogaWYgZCBpcyB0cnVlIGRlc3Ryb3kgd2lsbCBjb21wbGV0ZWx5IHJlbW92ZSB0aGUgcGx1Z2luXG4gICAgICAgICAqL1xuXG4gICAgICAgIGlmIChkKSB7XG4gICAgICAgICAgICBpZiAoIV90aGlzLnMuZHluYW1pYykge1xuICAgICAgICAgICAgICAgIC8vIG9ubHkgd2hlbiBub3QgdXNpbmcgZHluYW1pYyBtb2RlIGlzICRpdGVtcyBhIGpxdWVyeSBjb2xsZWN0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy4kaXRlbXMub2ZmKCdjbGljay5sZyBjbGljay5sZ2N1c3RvbScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkLnJlbW92ZURhdGEoX3RoaXMuZWwsICdsaWdodEdhbGxlcnknKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVuYmluZCBhbGwgZXZlbnRzIGFkZGVkIGJ5IGxpZ2h0R2FsbGVyeVxuICAgICAgICB0aGlzLiRlbC5vZmYoJy5sZy50bScpO1xuXG4gICAgICAgIC8vIERpc3Ryb3kgYWxsIGxpZ2h0R2FsbGVyeSBtb2R1bGVzXG4gICAgICAgICQuZWFjaCgkLmZuLmxpZ2h0R2FsbGVyeS5tb2R1bGVzLCBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5tb2R1bGVzW2tleV0pIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5tb2R1bGVzW2tleV0uZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmxHYWxsZXJ5T24gPSBmYWxzZTtcblxuICAgICAgICBjbGVhclRpbWVvdXQoX3RoaXMuaGlkZUJhcnRpbWVvdXQpO1xuICAgICAgICB0aGlzLmhpZGVCYXJ0aW1lb3V0ID0gZmFsc2U7XG4gICAgICAgICQod2luZG93KS5vZmYoJy5sZycpO1xuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2xnLW9uIGxnLWZyb20taGFzaCcpO1xuXG4gICAgICAgIGlmIChfdGhpcy4kb3V0ZXIpIHtcbiAgICAgICAgICAgIF90aGlzLiRvdXRlci5yZW1vdmVDbGFzcygnbGctdmlzaWJsZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnLmxnLWJhY2tkcm9wJykucmVtb3ZlQ2xhc3MoJ2luJyk7XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy4kb3V0ZXIpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy4kb3V0ZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJy5sZy1iYWNrZHJvcCcpLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICBpZiAoIWQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy4kZWwudHJpZ2dlcignb25DbG9zZUFmdGVyLmxnJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSwgX3RoaXMucy5iYWNrZHJvcER1cmF0aW9uICsgNTApO1xuICAgIH07XG5cbiAgICAkLmZuLmxpZ2h0R2FsbGVyeSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICghJC5kYXRhKHRoaXMsICdsaWdodEdhbGxlcnknKSkge1xuICAgICAgICAgICAgICAgICQuZGF0YSh0aGlzLCAnbGlnaHRHYWxsZXJ5JywgbmV3IFBsdWdpbih0aGlzLCBvcHRpb25zKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuZGF0YSgnbGlnaHRHYWxsZXJ5JykuaW5pdCgpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdsaWdodEdhbGxlcnkgaGFzIG5vdCBpbml0aWF0ZWQgcHJvcGVybHknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAkLmZuLmxpZ2h0R2FsbGVyeS5tb2R1bGVzID0ge307XG5cbn0pKCk7XG5cblxufSkpO1xuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50byArIFwiIFwiICsgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93LmpRdWVyeTsiXSwic291cmNlUm9vdCI6IiJ9