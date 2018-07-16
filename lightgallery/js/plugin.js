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

/***/ "./app/font/PhotographyIcons.eot?yjh1w7":
/*!**********************************************!*\
  !*** ./app/font/PhotographyIcons.eot?yjh1w7 ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/fonts/PhotographyIcons.eot";

/***/ }),

/***/ "./app/font/PhotographyIcons.svg?yjh1w7":
/*!**********************************************!*\
  !*** ./app/font/PhotographyIcons.svg?yjh1w7 ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/img/PhotographyIcons.svg";

/***/ }),

/***/ "./app/font/PhotographyIcons.ttf?yjh1w7":
/*!**********************************************!*\
  !*** ./app/font/PhotographyIcons.ttf?yjh1w7 ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/fonts/PhotographyIcons.ttf";

/***/ }),

/***/ "./app/font/PhotographyIcons.woff?yjh1w7":
/*!***********************************************!*\
  !*** ./app/font/PhotographyIcons.woff?yjh1w7 ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/fonts/PhotographyIcons.woff";

/***/ }),

/***/ "./app/font/photography.css":
/*!**********************************!*\
  !*** ./app/font/photography.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./photography.css */ "./node_modules/css-loader/index.js!./app/font/photography.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

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
/* harmony import */ var _lg_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lg-info */ "./app/lg-info.js");
__webpack_require__(/*! lightgallery */ "./node_modules/lightgallery/dist/js/lightgallery.js");
__webpack_require__(/*! lg-fullscreen */ "./node_modules/lg-fullscreen/dist/lg-fullscreen.js");
__webpack_require__(/*! lg-thumbnail */ "./node_modules/lg-thumbnail/dist/lg-thumbnail.js");
__webpack_require__(/*! lg-zoom */ "./node_modules/lg-zoom/dist/lg-zoom.js");



var LightGallery = (function () {
  'use strict';
  var images = [], $lg;

  var addImage = function (data) {
    images[data['index']] = data;
  };

  var open = function (elem, index) {
    $lg = $(elem);
    $lg.lightGallery({
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

  var lg = function () {
    return $lg;
  };

  return {
    addImage: addImage,
    open: open,
    lg: lg
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

/***/ "./app/lg-info.css":
/*!*************************!*\
  !*** ./app/lg-info.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader!./lg-info.css */ "./node_modules/css-loader/index.js!./app/lg-info.css");

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

/***/ "./app/lg-info.js":
/*!************************!*\
  !*** ./app/lg-info.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lg_info_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lg-info.css */ "./app/lg-info.css");
/* harmony import */ var _lg_info_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lg_info_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _font_photography_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./font/photography.css */ "./app/font/photography.css");
/* harmony import */ var _font_photography_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_font_photography_css__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__(/*! lightgallery */ "./node_modules/lightgallery/dist/js/lightgallery.js");



(function ($, window, document, undefined) {
  'use strict';

  var defaults = {
    info: true,
    showDescByDefault: false,
    showExifButton: true,
    exifFields: [
      'model',
      'lens',
      'iso_speed_ratings',
      'focal_length',
      'aperture',
      'exposure',
      'date_time_original',
      'artist',
      'copyright'
    ]
  };
  var exifTitles = {
    model: 'Camera Model',
    lens: 'Lens',
    iso_speed_ratings: 'ISO',
    focal_length: 'Focal Length',
    aperture: 'Aperture',
    exposure: 'Exposure Time',
    flash: 'Flash',
    metering_mode: 'Metering Mode',
    date_time_original: 'Date Taken',
    geolocation: 'Location Taken',
    direction: 'Heading',
    artist: 'Photographer',
    copyright: 'Copyright',
    filename: 'File Name'
  };

  var $descButton, $exifButton, $exifHtml;

  var Info = function (element) {
    // get lightGallery core plugin data
    this.core = $(element).data('lightGallery');

    this.$el = $(element);
    // extend module default settings with lightGallery core settings
    this.core.s = $.extend({}, defaults, this.core.s);

    this.init();

    return this;
  };

  Info.prototype.init = function () {
    if (!this.core.s.info) return;

    if (this.core.s.showExifButton) {
      $exifButton = $('<span id="lg-info-exif" class="lg-icon"></span>');
      $exifButton.on('click.lg', this.toggleExifState.bind(this));
      this.core.$outer.find('.lg-toolbar').append($exifButton);

      $exifHtml = $('<div class="lg-info-exif-html"></div>');
      this.core.$outer.find('.lg').append($exifHtml);

      LightGallery.lg().on('onAfterSlide.lg', this.updateExif.bind(this));
    }

    $descButton = $('<span id="lg-info-desc" class="lg-icon"></span>');
    $descButton.on('click.lg', this.toggleDescState.bind(this));
    this.core.$outer.find('.lg-toolbar').append($descButton);

    var state;
    if (this.core.s.showDescByDefault) {
      state = 'show';
    } else {
      state = 'hide';
    }
    this.setDescState(state);
    this.setExifState('hide');
  };

  Info.prototype.setDescState = function (state) {
    $descButton.removeClass('lg-info-state-show lg-info-state-hide');
    $descButton.addClass('lg-info-state-' + state);
    this.showDesc(state);
  };

  Info.prototype.setExifState = function (state) {
    $exifButton.removeClass('lg-info-state-show lg-info-state-hide');
    $exifButton.addClass('lg-info-state-' + state);
    this.showExif(state);
  };

  Info.prototype.getDescState = function () {
    var match = $descButton.attr('class').match(/\blg-info-state-(\w+)/);
    return match[1];
  };

  Info.prototype.getExifState = function () {
    var match = $exifButton.attr('class').match(/\blg-info-state-(\w+)/);
    return match[1];
  };

  Info.prototype.showDesc = function (state) {
    switch (state) {
      case 'show':
        $('.lg-sub-html').show();
        break;
      case 'hide':
        $('.lg-sub-html').hide();
        break;
    }
  };

  Info.prototype.showExif = function (state) {
    switch (state) {
      case 'show':
        $('.lg-info-exif-html').show();
        break;
      case 'hide':
        $('.lg-info-exif-html').hide();
        break;
    }
  };

  Info.prototype.toggleDescState = function () {
    var currentState = this.getDescState(),
      newState = '';

    switch (currentState) {
      case 'show':
        newState = 'hide';
        break;
      case 'hide':
        newState = 'show';
        break;
    }
    this.setDescState(newState);
  };

  Info.prototype.toggleExifState = function () {
    var currentState = this.getExifState(),
      newState = '';

    switch (currentState) {
      case 'show':
        newState = 'hide';
        break;
      case 'hide':
        newState = 'show';
        break;
    }
    this.setExifState(newState);
  };

  Info.prototype.updateExif = function (event, prevIndex, index) {
    var exif = this.core.s.dynamicEl[index].exif;
    var html = '<table><caption><span class="lg-icon"></span>Image Spec</caption>';

    for (var i = 0; i < this.core.s.exifFields.length; i++) {
      if (exif) {
        var field = this.core.s.exifFields[i];
        html += '<tr><th>' +
          '<span class="lg-icon lg-info-exif-html-' + field + '" title="' + (exifTitles[field] || field) + '"></span>' +
          '</th><td>' +
          (exif[field].clean || exif[field].raw) +
          '</td></tr>';
      }
    }

    html += '</table>';
    $exifHtml.append($(html));
  };

  /**
   * Destroy function must be defined.
   * lightgallery will automatically call your module destroy function
   * before destroying the gallery
   */
  Info.prototype.destroy = function () {
    console.log('info destroy called');
  };

  $.fn.lightGallery.modules.info = Info;
})(jQuery, window, document);


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

/***/ "./node_modules/css-loader/index.js!./app/font/photography.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader!./app/font/photography.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: 'PhotographyIcons';\n  src:  url(" + escape(__webpack_require__(/*! ./PhotographyIcons.eot?yjh1w7 */ "./app/font/PhotographyIcons.eot?yjh1w7")) + ");\n  src:  url(" + escape(__webpack_require__(/*! ./PhotographyIcons.eot?yjh1w7 */ "./app/font/PhotographyIcons.eot?yjh1w7")) + "#iefix) format('embedded-opentype'),\n    url(" + escape(__webpack_require__(/*! ./PhotographyIcons.ttf?yjh1w7 */ "./app/font/PhotographyIcons.ttf?yjh1w7")) + ") format('truetype'),\n    url(" + escape(__webpack_require__(/*! ./PhotographyIcons.woff?yjh1w7 */ "./app/font/PhotographyIcons.woff?yjh1w7")) + ") format('woff'),\n    url(" + escape(__webpack_require__(/*! ./PhotographyIcons.svg?yjh1w7 */ "./app/font/PhotographyIcons.svg?yjh1w7")) + "#PhotographyIcons) format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n\n[class^=\"icon-\"], [class*=\" icon-\"] {\n  /* use !important to prevent issues with browser extensions that change */\n  font-family: 'PhotographyIcons' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-photography_camera:before {\n  content: \"\\E900\";\n}\n.icon-photography_camera-back:before {\n  content: \"\\E901\";\n}\n.icon-photography_lens:before {\n  content: \"\\E902\";\n}\n.icon-photography_focal-length:before {\n  content: \"\\E903\";\n}\n.icon-photography_aperture:before {\n  content: \"\\E904\";\n}\n.icon-photography_aperture-black:before {\n  content: \"\\E905\";\n}\n.icon-photography_metering-mode-1:before {\n  content: \"\\E906\";\n}\n.icon-photography_metering-mode-2:before {\n  content: \"\\E907\";\n}\n.icon-photography_metering-mode-3:before {\n  content: \"\\E908\";\n}\n.icon-photography_metering-mode-4:before {\n  content: \"\\E909\";\n}\n.icon-photography_metering-mode-5:before {\n  content: \"\\E90A\";\n}\n.icon-photography_metering-mode-6:before {\n  content: \"\\E90B\";\n}\n.icon-photography_metering-mode-0:before {\n  content: \"\\E90C\";\n}\n.icon-photography_iso:before {\n  content: \"\\E90D\";\n}\n.icon-photography_exposure-time:before {\n  content: \"\\E90E\";\n}\n.icon-photography_flash-on:before {\n  content: \"\\E90F\";\n}\n.icon-photography_flash-off:before {\n  content: \"\\E910\";\n}\n.icon-photography_filters:before {\n  content: \"\\E911\";\n}\n.icon-photography_picture-with-text:before {\n  content: \"\\E912\";\n}\n.icon-photography_picture:before {\n  content: \"\\E913\";\n}\n.icon-photography_datetime:before {\n  content: \"\\E914\";\n}\n.icon-photography_author:before {\n  content: \"\\E915\";\n}\n.icon-photography_copyright:before {\n  content: \"\\E916\";\n}\n.icon-photography_geolocation:before {\n  content: \"\\E917\";\n}\n.icon-photography_map:before {\n  content: \"\\E918\";\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./app/lg-info.css":
/*!***************************************************!*\
  !*** ./node_modules/css-loader!./app/lg-info.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#lg-info-desc.lg-icon, #lg-info-exif.lg-icon, .lg-info-exif-html .lg-icon {\n  font-family: PhotographyIcons;\n  font-size: 20px;\n  font-style: normal;\n}\n#lg-info-desc.lg-info-state-show:before { content: \"\\E913\"; } /* photo  */\n#lg-info-desc.lg-info-state-hide:before { content: \"\\E912\"; } /* image-1 */\n#lg-info-exif.lg-info-state-show:before { content: \"\\E900\"; } /* camera */\n#lg-info-exif.lg-info-state-hide:before { content: \"\\E901\"; } /* photo-cameras */\n\n/*.lg-info-exif-html .lg-icon:before { content: \"\\f103\"; }*/\n.lg-info-exif-html td {\n  padding: 2px;\n  vertical-align: bottom;\n}\n.lg-info-exif-html .lg-icon { padding-right: 5px; }\n.lg-info-exif-html-model.lg-icon:before { content: \"\\E900\"; font-size: 32px; } /* camera */\n.lg-info-exif-html-lens.lg-icon:before { content: \"\\E902\"; font-size: 28px; } /* len-1 */\n.lg-info-exif-html-aperture.lg-icon:before { content: \"\\E904\"; } /* opeing-aperture */\n.lg-info-exif-html-iso_speed_ratings.lg-icon:before { content: \"\\E90D\"; } /* iso */\n.lg-info-exif-html-focal_length.lg-icon:before { content: \"\\E903\"; } /* len */\n.lg-info-exif-html-exposure.lg-icon:before { content: \"\\E90E\"; } /* stopwatch */\n.lg-info-exif-html-flash.lg-icon:before { content: \"\\E90F\"; } /* flash */\n.lg-info-exif-html-flash-off.lg-icon:before { content: \"\\E910\"; } /* flash */\n.lg-info-exif-html-metering_mode.lg-icon:before { content: \"\\E906\"; } /* picture-1 */\n.lg-info-exif-html-metering_mode-0.lg-icon:before { content: \"\\E90C\"; } /* picture-1 */\n.lg-info-exif-html-metering_mode-1.lg-icon:before { content: \"\\E906\"; } /* picture-1 */\n.lg-info-exif-html-metering_mode-2.lg-icon:before { content: \"\\E907\"; } /* picture-1 */\n.lg-info-exif-html-metering_mode-3.lg-icon:before { content: \"\\E908\"; } /* picture-1 */\n.lg-info-exif-html-metering_mode-4.lg-icon:before { content: \"\\E909\"; } /* picture-1 */\n.lg-info-exif-html-metering_mode-5.lg-icon:before { content: \"\\E90A\"; } /* picture-1 */\n.lg-info-exif-html-metering_mode-6.lg-icon:before { content: \"\\E90B\"; } /* picture-1 */\n.lg-info-exif-html-date_time_original.lg-icon:before { content: \"\\E914\"; } /* calendar */\n.lg-info-exif-html-artist.lg-icon:before { content: \"\\E915\"; } /* calendar */\n.lg-info-exif-html-copyright.lg-icon:before { content: \"\\E916\"; } /* calendar */\n.lg-info-exif-html-geolocation.lg-icon:before { content: \"\\E917\"; } /* globe */\n\n\n.lg-info-exif-html {\n  position: fixed;\n  z-index: 1081;\n  color: #eee;\n  font-size: 14px;\n  padding: 10px 10px;\n  right: 0;\n  top: 60px;\n  bottom: 60px;\n  width: 350px;\n  background-color: rgba(0, 0, 0, 0.75);\n}\n\n.lg-info-exif-html table caption {\n  text-align: left;\n}\n\n.lg-info-exif-html table th {\n  color: #999;\n  padding-right: 5px;\n}\n\n.lg-info-exif-html table td {\n  color: #ccc;\n  /*padding-right: 5px;*/\n}\n", ""]);

// exports


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2ZvbnQvUGhvdG9ncmFwaHlJY29ucy5lb3QiLCJ3ZWJwYWNrOi8vLy4vYXBwL2ZvbnQvUGhvdG9ncmFwaHlJY29ucy5zdmciLCJ3ZWJwYWNrOi8vLy4vYXBwL2ZvbnQvUGhvdG9ncmFwaHlJY29ucy50dGYiLCJ3ZWJwYWNrOi8vLy4vYXBwL2ZvbnQvUGhvdG9ncmFwaHlJY29ucy53b2ZmIiwid2VicGFjazovLy8uL2FwcC9mb250L3Bob3RvZ3JhcGh5LmNzcz9lMmU0Iiwid2VicGFjazovLy8uL2FwcC9pbml0aWFsaXplLmpzIiwid2VicGFjazovLy8uL2FwcC9sZy1pbmZvLmNzcz9hNDBhIiwid2VicGFjazovLy8uL2FwcC9sZy1pbmZvLmpzIiwid2VicGFjazovLy8uL2FwcC9zdHlsZXMuY3NzPzZhMjIiLCJ3ZWJwYWNrOi8vLy4vYXBwL2ZvbnQvcGhvdG9ncmFwaHkuY3NzIiwid2VicGFjazovLy8uL2FwcC9sZy1pbmZvLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGlnaHRnYWxsZXJ5L2Rpc3QvY3NzL2xnLXRyYW5zaXRpb25zLm1pbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpZ2h0Z2FsbGVyeS9kaXN0L2Nzcy9saWdodGdhbGxlcnkubWluLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL3VybC9lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xnLWZ1bGxzY3JlZW4vZGlzdC9sZy1mdWxsc2NyZWVuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sZy10aHVtYm5haWwvZGlzdC9sZy10aHVtYm5haWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xnLXpvb20vZGlzdC9sZy16b29tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saWdodGdhbGxlcnkvZGlzdC9mb250cy9sZy5lb3QiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpZ2h0Z2FsbGVyeS9kaXN0L2ZvbnRzL2xnLmVvdD9lZjUyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saWdodGdhbGxlcnkvZGlzdC9mb250cy9sZy5zdmciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpZ2h0Z2FsbGVyeS9kaXN0L2ZvbnRzL2xnLnR0ZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGlnaHRnYWxsZXJ5L2Rpc3QvZm9udHMvbGcud29mZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGlnaHRnYWxsZXJ5L2Rpc3QvaW1nL2xvYWRpbmcuZ2lmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saWdodGdhbGxlcnkvZGlzdC9pbWcvdmlkZW8tcGxheS5wbmciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpZ2h0Z2FsbGVyeS9kaXN0L2ltZy92aW1lby1wbGF5LnBuZyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGlnaHRnYWxsZXJ5L2Rpc3QvaW1nL3lvdXR1YmUtcGxheS5wbmciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpZ2h0Z2FsbGVyeS9kaXN0L2pzL2xpZ2h0Z2FsbGVyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cualF1ZXJ5XCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLHVFOzs7Ozs7Ozs7OztBQ0FBLHFFOzs7Ozs7Ozs7OztBQ0FBLHVFOzs7Ozs7Ozs7OztBQ0FBLHdFOzs7Ozs7Ozs7Ozs7QUNDQTs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOztBQUVBLFk7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7OztBQy9ERDs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOztBQUVBLFk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkI7O0FBRTdCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsbUNBQW1DO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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QUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLENBQUM7O0FBRUQsQ0FBQzs7Ozs7Ozs7Ozs7O0FDN2REO0FBQ0E7QUFDQSw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQUE7QUFDTCxHQUFHLFFBT0g7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLGlDQUFpQzs7QUFFakM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhOztBQUViLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtB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QTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWIsU0FBUzs7QUFFVDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLHdCQUF3QjtBQUMzQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtEQUErRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7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QUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUEsYUFBYTs7QUFFYjtBQUNBO0FBQ0EsYUFBYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7O0FBRWI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTs7QUFFQSxDQUFDOzs7QUFHRCxDQUFDOzs7Ozs7Ozs7Ozs7QUNoMUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBLG1CQUFtQiwyQkFBMkI7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7O0FBRUEsUUFBUSx1QkFBdUI7QUFDL0I7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7QUFFZCxrREFBa0Qsc0JBQXNCO0FBQ3hFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDO0FBQ3RDLEdBQUc7QUFDSDtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSwrQiIsImZpbGUiOiJqcy9wbHVnaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcInN0b3JhZ2UvcGx1Z2lucy9saWdodGdhbGxlcnkvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXBwL2luaXRpYWxpemUuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvZm9udHMvUGhvdG9ncmFwaHlJY29ucy5lb3RcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvaW1nL1Bob3RvZ3JhcGh5SWNvbnMuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL2ZvbnRzL1Bob3RvZ3JhcGh5SWNvbnMudHRmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL2ZvbnRzL1Bob3RvZ3JhcGh5SWNvbnMud29mZlwiOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3Bob3RvZ3JhcGh5LmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9waG90b2dyYXBoeS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3Bob3RvZ3JhcGh5LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInJlcXVpcmUoJ2xpZ2h0Z2FsbGVyeScpO1xucmVxdWlyZSgnbGctZnVsbHNjcmVlbicpO1xucmVxdWlyZSgnbGctdGh1bWJuYWlsJyk7XG5yZXF1aXJlKCdsZy16b29tJyk7XG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgJy4vbGctaW5mbyc7XG5cbnZhciBMaWdodEdhbGxlcnkgPSAoZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCc7XG4gIHZhciBpbWFnZXMgPSBbXSwgJGxnO1xuXG4gIHZhciBhZGRJbWFnZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgaW1hZ2VzW2RhdGFbJ2luZGV4J11dID0gZGF0YTtcbiAgfTtcblxuICB2YXIgb3BlbiA9IGZ1bmN0aW9uIChlbGVtLCBpbmRleCkge1xuICAgICRsZyA9ICQoZWxlbSk7XG4gICAgJGxnLmxpZ2h0R2FsbGVyeSh7XG4gICAgICBoaWRlQmFyc0RlbGF5OiAzMDAwLFxuICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgLy8gY29udHJvbHM6IGZhbHNlLFxuICAgICAgLy8gYXBwZW5kU3ViSHRtbFRvOiAnLmxnLWl0ZW0nLFxuICAgICAgZHluYW1pYzogdHJ1ZSxcbiAgICAgIGR5bmFtaWNFbDogaW1hZ2VzLFxuICAgICAgbW9kZTogJ2xnLWZhZGUnLFxuICAgICAgZG93bmxvYWQ6IHRydWUsXG4gICAgICAvLyBzaGFyZTogZmFsc2UsXG4gICAgICAvLyBoYXNoOiBmYWxzZSxcbiAgICAgIC8vIHBhZ2VyOiBmYWxzZSxcbiAgICAgIC8vIHNlbGVjdG9yOiAnYScsXG4gICAgICB0aHVtYm5haWw6IHRydWUsXG4gICAgICB0b2dnbGVUaHVtYjogdHJ1ZSxcbiAgICAgIHNob3dUaHVtYkJ5RGVmYXVsdDogZmFsc2UsXG4gICAgICB6b29tOiB0cnVlLFxuICAgICAgYWN0dWFsU2l6ZTogZmFsc2VcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgbGcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICRsZztcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGFkZEltYWdlOiBhZGRJbWFnZSxcbiAgICBvcGVuOiBvcGVuLFxuICAgIGxnOiBsZ1xuICB9O1xufSkoKTtcbndpbmRvdy5MaWdodEdhbGxlcnkgPSBMaWdodEdhbGxlcnk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGNsaWNrRXZlbnQgKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgaW5kZXggPSBwYXJzZUludCgkKGV2ZW50LnRhcmdldCkuYXR0cignZGF0YS1pbmRleCcpLCAxMCk7XG4gICAgTGlnaHRHYWxsZXJ5Lm9wZW4oZXZlbnQudGFyZ2V0LCBpbmRleCk7XG4gIH1cbiAgJChmdW5jdGlvbiAoKSB7XG4gICAgJCgnI2dyaWQgYScpLm9uKCdjbGljaycsIGNsaWNrRXZlbnQpO1xuXG4gICAgJCh3aW5kb3cpLm9uKCdrLWluZmluaXRlLWxvYWRlZCcsIGZ1bmN0aW9uIChldmVudCwgaHRtbCkge1xuICAgICAgJCgnI2dyaWQgYScpLm9mZignY2xpY2snLCBjbGlja0V2ZW50KTtcbiAgICAgICQoJyNncmlkIGEnKS5vbignY2xpY2snLCBjbGlja0V2ZW50KTtcbiAgICB9KTtcbiAgfSk7XG59KTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2xnLWluZm8uY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2xnLWluZm8uY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9sZy1pbmZvLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInJlcXVpcmUoJ2xpZ2h0Z2FsbGVyeScpO1xuaW1wb3J0ICcuL2xnLWluZm8uY3NzJztcbmltcG9ydCAnLi9mb250L3Bob3RvZ3JhcGh5LmNzcyc7XG5cbihmdW5jdGlvbiAoJCwgd2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgaW5mbzogdHJ1ZSxcbiAgICBzaG93RGVzY0J5RGVmYXVsdDogZmFsc2UsXG4gICAgc2hvd0V4aWZCdXR0b246IHRydWUsXG4gICAgZXhpZkZpZWxkczogW1xuICAgICAgJ21vZGVsJyxcbiAgICAgICdsZW5zJyxcbiAgICAgICdpc29fc3BlZWRfcmF0aW5ncycsXG4gICAgICAnZm9jYWxfbGVuZ3RoJyxcbiAgICAgICdhcGVydHVyZScsXG4gICAgICAnZXhwb3N1cmUnLFxuICAgICAgJ2RhdGVfdGltZV9vcmlnaW5hbCcsXG4gICAgICAnYXJ0aXN0JyxcbiAgICAgICdjb3B5cmlnaHQnXG4gICAgXVxuICB9O1xuICB2YXIgZXhpZlRpdGxlcyA9IHtcbiAgICBtb2RlbDogJ0NhbWVyYSBNb2RlbCcsXG4gICAgbGVuczogJ0xlbnMnLFxuICAgIGlzb19zcGVlZF9yYXRpbmdzOiAnSVNPJyxcbiAgICBmb2NhbF9sZW5ndGg6ICdGb2NhbCBMZW5ndGgnLFxuICAgIGFwZXJ0dXJlOiAnQXBlcnR1cmUnLFxuICAgIGV4cG9zdXJlOiAnRXhwb3N1cmUgVGltZScsXG4gICAgZmxhc2g6ICdGbGFzaCcsXG4gICAgbWV0ZXJpbmdfbW9kZTogJ01ldGVyaW5nIE1vZGUnLFxuICAgIGRhdGVfdGltZV9vcmlnaW5hbDogJ0RhdGUgVGFrZW4nLFxuICAgIGdlb2xvY2F0aW9uOiAnTG9jYXRpb24gVGFrZW4nLFxuICAgIGRpcmVjdGlvbjogJ0hlYWRpbmcnLFxuICAgIGFydGlzdDogJ1Bob3RvZ3JhcGhlcicsXG4gICAgY29weXJpZ2h0OiAnQ29weXJpZ2h0JyxcbiAgICBmaWxlbmFtZTogJ0ZpbGUgTmFtZSdcbiAgfTtcblxuICB2YXIgJGRlc2NCdXR0b24sICRleGlmQnV0dG9uLCAkZXhpZkh0bWw7XG5cbiAgdmFyIEluZm8gPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIC8vIGdldCBsaWdodEdhbGxlcnkgY29yZSBwbHVnaW4gZGF0YVxuICAgIHRoaXMuY29yZSA9ICQoZWxlbWVudCkuZGF0YSgnbGlnaHRHYWxsZXJ5Jyk7XG5cbiAgICB0aGlzLiRlbCA9ICQoZWxlbWVudCk7XG4gICAgLy8gZXh0ZW5kIG1vZHVsZSBkZWZhdWx0IHNldHRpbmdzIHdpdGggbGlnaHRHYWxsZXJ5IGNvcmUgc2V0dGluZ3NcbiAgICB0aGlzLmNvcmUucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgdGhpcy5jb3JlLnMpO1xuXG4gICAgdGhpcy5pbml0KCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBJbmZvLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5jb3JlLnMuaW5mbykgcmV0dXJuO1xuXG4gICAgaWYgKHRoaXMuY29yZS5zLnNob3dFeGlmQnV0dG9uKSB7XG4gICAgICAkZXhpZkJ1dHRvbiA9ICQoJzxzcGFuIGlkPVwibGctaW5mby1leGlmXCIgY2xhc3M9XCJsZy1pY29uXCI+PC9zcGFuPicpO1xuICAgICAgJGV4aWZCdXR0b24ub24oJ2NsaWNrLmxnJywgdGhpcy50b2dnbGVFeGlmU3RhdGUuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLmNvcmUuJG91dGVyLmZpbmQoJy5sZy10b29sYmFyJykuYXBwZW5kKCRleGlmQnV0dG9uKTtcblxuICAgICAgJGV4aWZIdG1sID0gJCgnPGRpdiBjbGFzcz1cImxnLWluZm8tZXhpZi1odG1sXCI+PC9kaXY+Jyk7XG4gICAgICB0aGlzLmNvcmUuJG91dGVyLmZpbmQoJy5sZycpLmFwcGVuZCgkZXhpZkh0bWwpO1xuXG4gICAgICBMaWdodEdhbGxlcnkubGcoKS5vbignb25BZnRlclNsaWRlLmxnJywgdGhpcy51cGRhdGVFeGlmLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgICRkZXNjQnV0dG9uID0gJCgnPHNwYW4gaWQ9XCJsZy1pbmZvLWRlc2NcIiBjbGFzcz1cImxnLWljb25cIj48L3NwYW4+Jyk7XG4gICAgJGRlc2NCdXR0b24ub24oJ2NsaWNrLmxnJywgdGhpcy50b2dnbGVEZXNjU3RhdGUuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5jb3JlLiRvdXRlci5maW5kKCcubGctdG9vbGJhcicpLmFwcGVuZCgkZGVzY0J1dHRvbik7XG5cbiAgICB2YXIgc3RhdGU7XG4gICAgaWYgKHRoaXMuY29yZS5zLnNob3dEZXNjQnlEZWZhdWx0KSB7XG4gICAgICBzdGF0ZSA9ICdzaG93JztcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUgPSAnaGlkZSc7XG4gICAgfVxuICAgIHRoaXMuc2V0RGVzY1N0YXRlKHN0YXRlKTtcbiAgICB0aGlzLnNldEV4aWZTdGF0ZSgnaGlkZScpO1xuICB9O1xuXG4gIEluZm8ucHJvdG90eXBlLnNldERlc2NTdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICRkZXNjQnV0dG9uLnJlbW92ZUNsYXNzKCdsZy1pbmZvLXN0YXRlLXNob3cgbGctaW5mby1zdGF0ZS1oaWRlJyk7XG4gICAgJGRlc2NCdXR0b24uYWRkQ2xhc3MoJ2xnLWluZm8tc3RhdGUtJyArIHN0YXRlKTtcbiAgICB0aGlzLnNob3dEZXNjKHN0YXRlKTtcbiAgfTtcblxuICBJbmZvLnByb3RvdHlwZS5zZXRFeGlmU3RhdGUgPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAkZXhpZkJ1dHRvbi5yZW1vdmVDbGFzcygnbGctaW5mby1zdGF0ZS1zaG93IGxnLWluZm8tc3RhdGUtaGlkZScpO1xuICAgICRleGlmQnV0dG9uLmFkZENsYXNzKCdsZy1pbmZvLXN0YXRlLScgKyBzdGF0ZSk7XG4gICAgdGhpcy5zaG93RXhpZihzdGF0ZSk7XG4gIH07XG5cbiAgSW5mby5wcm90b3R5cGUuZ2V0RGVzY1N0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBtYXRjaCA9ICRkZXNjQnV0dG9uLmF0dHIoJ2NsYXNzJykubWF0Y2goL1xcYmxnLWluZm8tc3RhdGUtKFxcdyspLyk7XG4gICAgcmV0dXJuIG1hdGNoWzFdO1xuICB9O1xuXG4gIEluZm8ucHJvdG90eXBlLmdldEV4aWZTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbWF0Y2ggPSAkZXhpZkJ1dHRvbi5hdHRyKCdjbGFzcycpLm1hdGNoKC9cXGJsZy1pbmZvLXN0YXRlLShcXHcrKS8pO1xuICAgIHJldHVybiBtYXRjaFsxXTtcbiAgfTtcblxuICBJbmZvLnByb3RvdHlwZS5zaG93RGVzYyA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgIGNhc2UgJ3Nob3cnOlxuICAgICAgICAkKCcubGctc3ViLWh0bWwnKS5zaG93KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnaGlkZSc6XG4gICAgICAgICQoJy5sZy1zdWItaHRtbCcpLmhpZGUoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9O1xuXG4gIEluZm8ucHJvdG90eXBlLnNob3dFeGlmID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgY2FzZSAnc2hvdyc6XG4gICAgICAgICQoJy5sZy1pbmZvLWV4aWYtaHRtbCcpLnNob3coKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdoaWRlJzpcbiAgICAgICAgJCgnLmxnLWluZm8tZXhpZi1odG1sJykuaGlkZSgpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH07XG5cbiAgSW5mby5wcm90b3R5cGUudG9nZ2xlRGVzY1N0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBjdXJyZW50U3RhdGUgPSB0aGlzLmdldERlc2NTdGF0ZSgpLFxuICAgICAgbmV3U3RhdGUgPSAnJztcblxuICAgIHN3aXRjaCAoY3VycmVudFN0YXRlKSB7XG4gICAgICBjYXNlICdzaG93JzpcbiAgICAgICAgbmV3U3RhdGUgPSAnaGlkZSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnaGlkZSc6XG4gICAgICAgIG5ld1N0YXRlID0gJ3Nob3cnO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgdGhpcy5zZXREZXNjU3RhdGUobmV3U3RhdGUpO1xuICB9O1xuXG4gIEluZm8ucHJvdG90eXBlLnRvZ2dsZUV4aWZTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY3VycmVudFN0YXRlID0gdGhpcy5nZXRFeGlmU3RhdGUoKSxcbiAgICAgIG5ld1N0YXRlID0gJyc7XG5cbiAgICBzd2l0Y2ggKGN1cnJlbnRTdGF0ZSkge1xuICAgICAgY2FzZSAnc2hvdyc6XG4gICAgICAgIG5ld1N0YXRlID0gJ2hpZGUnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2hpZGUnOlxuICAgICAgICBuZXdTdGF0ZSA9ICdzaG93JztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHRoaXMuc2V0RXhpZlN0YXRlKG5ld1N0YXRlKTtcbiAgfTtcblxuICBJbmZvLnByb3RvdHlwZS51cGRhdGVFeGlmID0gZnVuY3Rpb24gKGV2ZW50LCBwcmV2SW5kZXgsIGluZGV4KSB7XG4gICAgdmFyIGV4aWYgPSB0aGlzLmNvcmUucy5keW5hbWljRWxbaW5kZXhdLmV4aWY7XG4gICAgdmFyIGh0bWwgPSAnPHRhYmxlPjxjYXB0aW9uPjxzcGFuIGNsYXNzPVwibGctaWNvblwiPjwvc3Bhbj5JbWFnZSBTcGVjPC9jYXB0aW9uPic7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29yZS5zLmV4aWZGaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChleGlmKSB7XG4gICAgICAgIHZhciBmaWVsZCA9IHRoaXMuY29yZS5zLmV4aWZGaWVsZHNbaV07XG4gICAgICAgIGh0bWwgKz0gJzx0cj48dGg+JyArXG4gICAgICAgICAgJzxzcGFuIGNsYXNzPVwibGctaWNvbiBsZy1pbmZvLWV4aWYtaHRtbC0nICsgZmllbGQgKyAnXCIgdGl0bGU9XCInICsgKGV4aWZUaXRsZXNbZmllbGRdIHx8IGZpZWxkKSArICdcIj48L3NwYW4+JyArXG4gICAgICAgICAgJzwvdGg+PHRkPicgK1xuICAgICAgICAgIChleGlmW2ZpZWxkXS5jbGVhbiB8fCBleGlmW2ZpZWxkXS5yYXcpICtcbiAgICAgICAgICAnPC90ZD48L3RyPic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaHRtbCArPSAnPC90YWJsZT4nO1xuICAgICRleGlmSHRtbC5hcHBlbmQoJChodG1sKSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgZnVuY3Rpb24gbXVzdCBiZSBkZWZpbmVkLlxuICAgKiBsaWdodGdhbGxlcnkgd2lsbCBhdXRvbWF0aWNhbGx5IGNhbGwgeW91ciBtb2R1bGUgZGVzdHJveSBmdW5jdGlvblxuICAgKiBiZWZvcmUgZGVzdHJveWluZyB0aGUgZ2FsbGVyeVxuICAgKi9cbiAgSW5mby5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZygnaW5mbyBkZXN0cm95IGNhbGxlZCcpO1xuICB9O1xuXG4gICQuZm4ubGlnaHRHYWxsZXJ5Lm1vZHVsZXMuaW5mbyA9IEluZm87XG59KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGVzLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZXMuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZXMuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwidmFyIGVzY2FwZSA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvdXJsL2VzY2FwZS5qc1wiKTtcbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1Bob3RvZ3JhcGh5SWNvbnMnO1xcbiAgc3JjOiAgdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuL1Bob3RvZ3JhcGh5SWNvbnMuZW90P3lqaDF3N1wiKSkgKyBcIik7XFxuICBzcmM6ICB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4vUGhvdG9ncmFwaHlJY29ucy5lb3Q/eWpoMXc3XCIpKSArIFwiI2llZml4KSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuICAgIHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi9QaG90b2dyYXBoeUljb25zLnR0Zj95amgxdzdcIikpICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcXG4gICAgdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuL1Bob3RvZ3JhcGh5SWNvbnMud29mZj95amgxdzdcIikpICsgXCIpIGZvcm1hdCgnd29mZicpLFxcbiAgICB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4vUGhvdG9ncmFwaHlJY29ucy5zdmc/eWpoMXc3XCIpKSArIFwiI1Bob3RvZ3JhcGh5SWNvbnMpIGZvcm1hdCgnc3ZnJyk7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5bY2xhc3NePVxcXCJpY29uLVxcXCJdLCBbY2xhc3MqPVxcXCIgaWNvbi1cXFwiXSB7XFxuICAvKiB1c2UgIWltcG9ydGFudCB0byBwcmV2ZW50IGlzc3VlcyB3aXRoIGJyb3dzZXIgZXh0ZW5zaW9ucyB0aGF0IGNoYW5nZSAqL1xcbiAgZm9udC1mYW1pbHk6ICdQaG90b2dyYXBoeUljb25zJyAhaW1wb3J0YW50O1xcbiAgc3BlYWs6IG5vbmU7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcblxcbiAgLyogQmV0dGVyIEZvbnQgUmVuZGVyaW5nID09PT09PT09PT09ICovXFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxufVxcblxcbi5pY29uLXBob3RvZ3JhcGh5X2NhbWVyYTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFOTAwXFxcIjtcXG59XFxuLmljb24tcGhvdG9ncmFwaHlfY2FtZXJhLWJhY2s6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTkwMVxcXCI7XFxufVxcbi5pY29uLXBob3RvZ3JhcGh5X2xlbnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTkwMlxcXCI7XFxufVxcbi5pY29uLXBob3RvZ3JhcGh5X2ZvY2FsLWxlbmd0aDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFOTAzXFxcIjtcXG59XFxuLmljb24tcGhvdG9ncmFwaHlfYXBlcnR1cmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTkwNFxcXCI7XFxufVxcbi5pY29uLXBob3RvZ3JhcGh5X2FwZXJ0dXJlLWJsYWNrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU5MDVcXFwiO1xcbn1cXG4uaWNvbi1waG90b2dyYXBoeV9tZXRlcmluZy1tb2RlLTE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTkwNlxcXCI7XFxufVxcbi5pY29uLXBob3RvZ3JhcGh5X21ldGVyaW5nLW1vZGUtMjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFOTA3XFxcIjtcXG59XFxuLmljb24tcGhvdG9ncmFwaHlfbWV0ZXJpbmctbW9kZS0zOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU5MDhcXFwiO1xcbn1cXG4uaWNvbi1waG90b2dyYXBoeV9tZXRlcmluZy1tb2RlLTQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTkwOVxcXCI7XFxufVxcbi5pY29uLXBob3RvZ3JhcGh5X21ldGVyaW5nLW1vZGUtNTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFOTBBXFxcIjtcXG59XFxuLmljb24tcGhvdG9ncmFwaHlfbWV0ZXJpbmctbW9kZS02OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU5MEJcXFwiO1xcbn1cXG4uaWNvbi1waG90b2dyYXBoeV9tZXRlcmluZy1tb2RlLTA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTkwQ1xcXCI7XFxufVxcbi5pY29uLXBob3RvZ3JhcGh5X2lzbzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFOTBEXFxcIjtcXG59XFxuLmljb24tcGhvdG9ncmFwaHlfZXhwb3N1cmUtdGltZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFOTBFXFxcIjtcXG59XFxuLmljb24tcGhvdG9ncmFwaHlfZmxhc2gtb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTkwRlxcXCI7XFxufVxcbi5pY29uLXBob3RvZ3JhcGh5X2ZsYXNoLW9mZjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFOTEwXFxcIjtcXG59XFxuLmljb24tcGhvdG9ncmFwaHlfZmlsdGVyczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFOTExXFxcIjtcXG59XFxuLmljb24tcGhvdG9ncmFwaHlfcGljdHVyZS13aXRoLXRleHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTkxMlxcXCI7XFxufVxcbi5pY29uLXBob3RvZ3JhcGh5X3BpY3R1cmU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTkxM1xcXCI7XFxufVxcbi5pY29uLXBob3RvZ3JhcGh5X2RhdGV0aW1lOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU5MTRcXFwiO1xcbn1cXG4uaWNvbi1waG90b2dyYXBoeV9hdXRob3I6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTkxNVxcXCI7XFxufVxcbi5pY29uLXBob3RvZ3JhcGh5X2NvcHlyaWdodDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFOTE2XFxcIjtcXG59XFxuLmljb24tcGhvdG9ncmFwaHlfZ2VvbG9jYXRpb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTkxN1xcXCI7XFxufVxcbi5pY29uLXBob3RvZ3JhcGh5X21hcDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFOTE4XFxcIjtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIjbGctaW5mby1kZXNjLmxnLWljb24sICNsZy1pbmZvLWV4aWYubGctaWNvbiwgLmxnLWluZm8tZXhpZi1odG1sIC5sZy1pY29uIHtcXG4gIGZvbnQtZmFtaWx5OiBQaG90b2dyYXBoeUljb25zO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG4jbGctaW5mby1kZXNjLmxnLWluZm8tc3RhdGUtc2hvdzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEU5MTNcXFwiOyB9IC8qIHBob3RvICAqL1xcbiNsZy1pbmZvLWRlc2MubGctaW5mby1zdGF0ZS1oaWRlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRTkxMlxcXCI7IH0gLyogaW1hZ2UtMSAqL1xcbiNsZy1pbmZvLWV4aWYubGctaW5mby1zdGF0ZS1zaG93OmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRTkwMFxcXCI7IH0gLyogY2FtZXJhICovXFxuI2xnLWluZm8tZXhpZi5sZy1pbmZvLXN0YXRlLWhpZGU6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxFOTAxXFxcIjsgfSAvKiBwaG90by1jYW1lcmFzICovXFxuXFxuLyoubGctaW5mby1leGlmLWh0bWwgLmxnLWljb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxmMTAzXFxcIjsgfSovXFxuLmxnLWluZm8tZXhpZi1odG1sIHRkIHtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxufVxcbi5sZy1pbmZvLWV4aWYtaHRtbCAubGctaWNvbiB7IHBhZGRpbmctcmlnaHQ6IDVweDsgfVxcbi5sZy1pbmZvLWV4aWYtaHRtbC1tb2RlbC5sZy1pY29uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRTkwMFxcXCI7IGZvbnQtc2l6ZTogMzJweDsgfSAvKiBjYW1lcmEgKi9cXG4ubGctaW5mby1leGlmLWh0bWwtbGVucy5sZy1pY29uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRTkwMlxcXCI7IGZvbnQtc2l6ZTogMjhweDsgfSAvKiBsZW4tMSAqL1xcbi5sZy1pbmZvLWV4aWYtaHRtbC1hcGVydHVyZS5sZy1pY29uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRTkwNFxcXCI7IH0gLyogb3BlaW5nLWFwZXJ0dXJlICovXFxuLmxnLWluZm8tZXhpZi1odG1sLWlzb19zcGVlZF9yYXRpbmdzLmxnLWljb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxFOTBEXFxcIjsgfSAvKiBpc28gKi9cXG4ubGctaW5mby1leGlmLWh0bWwtZm9jYWxfbGVuZ3RoLmxnLWljb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxFOTAzXFxcIjsgfSAvKiBsZW4gKi9cXG4ubGctaW5mby1leGlmLWh0bWwtZXhwb3N1cmUubGctaWNvbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEU5MEVcXFwiOyB9IC8qIHN0b3B3YXRjaCAqL1xcbi5sZy1pbmZvLWV4aWYtaHRtbC1mbGFzaC5sZy1pY29uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRTkwRlxcXCI7IH0gLyogZmxhc2ggKi9cXG4ubGctaW5mby1leGlmLWh0bWwtZmxhc2gtb2ZmLmxnLWljb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxFOTEwXFxcIjsgfSAvKiBmbGFzaCAqL1xcbi5sZy1pbmZvLWV4aWYtaHRtbC1tZXRlcmluZ19tb2RlLmxnLWljb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxFOTA2XFxcIjsgfSAvKiBwaWN0dXJlLTEgKi9cXG4ubGctaW5mby1leGlmLWh0bWwtbWV0ZXJpbmdfbW9kZS0wLmxnLWljb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxFOTBDXFxcIjsgfSAvKiBwaWN0dXJlLTEgKi9cXG4ubGctaW5mby1leGlmLWh0bWwtbWV0ZXJpbmdfbW9kZS0xLmxnLWljb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxFOTA2XFxcIjsgfSAvKiBwaWN0dXJlLTEgKi9cXG4ubGctaW5mby1leGlmLWh0bWwtbWV0ZXJpbmdfbW9kZS0yLmxnLWljb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxFOTA3XFxcIjsgfSAvKiBwaWN0dXJlLTEgKi9cXG4ubGctaW5mby1leGlmLWh0bWwtbWV0ZXJpbmdfbW9kZS0zLmxnLWljb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxFOTA4XFxcIjsgfSAvKiBwaWN0dXJlLTEgKi9cXG4ubGctaW5mby1leGlmLWh0bWwtbWV0ZXJpbmdfbW9kZS00LmxnLWljb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxFOTA5XFxcIjsgfSAvKiBwaWN0dXJlLTEgKi9cXG4ubGctaW5mby1leGlmLWh0bWwtbWV0ZXJpbmdfbW9kZS01LmxnLWljb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxFOTBBXFxcIjsgfSAvKiBwaWN0dXJlLTEgKi9cXG4ubGctaW5mby1leGlmLWh0bWwtbWV0ZXJpbmdfbW9kZS02LmxnLWljb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxFOTBCXFxcIjsgfSAvKiBwaWN0dXJlLTEgKi9cXG4ubGctaW5mby1leGlmLWh0bWwtZGF0ZV90aW1lX29yaWdpbmFsLmxnLWljb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxFOTE0XFxcIjsgfSAvKiBjYWxlbmRhciAqL1xcbi5sZy1pbmZvLWV4aWYtaHRtbC1hcnRpc3QubGctaWNvbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEU5MTVcXFwiOyB9IC8qIGNhbGVuZGFyICovXFxuLmxnLWluZm8tZXhpZi1odG1sLWNvcHlyaWdodC5sZy1pY29uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRTkxNlxcXCI7IH0gLyogY2FsZW5kYXIgKi9cXG4ubGctaW5mby1leGlmLWh0bWwtZ2VvbG9jYXRpb24ubGctaWNvbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEU5MTdcXFwiOyB9IC8qIGdsb2JlICovXFxuXFxuXFxuLmxnLWluZm8tZXhpZi1odG1sIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDEwODE7XFxuICBjb2xvcjogI2VlZTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiA2MHB4O1xcbiAgYm90dG9tOiA2MHB4O1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG59XFxuXFxuLmxnLWluZm8tZXhpZi1odG1sIHRhYmxlIGNhcHRpb24ge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLmxnLWluZm8tZXhpZi1odG1sIHRhYmxlIHRoIHtcXG4gIGNvbG9yOiAjOTk5O1xcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcbn1cXG5cXG4ubGctaW5mby1leGlmLWh0bWwgdGFibGUgdGQge1xcbiAgY29sb3I6ICNjY2M7XFxuICAvKnBhZGRpbmctcmlnaHQ6IDVweDsqL1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcbmV4cG9ydHMuaShyZXF1aXJlKFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyFsaWdodGdhbGxlcnkvZGlzdC9jc3MvbGlnaHRnYWxsZXJ5Lm1pbi5jc3NcIiksIFwiXCIpO1xuZXhwb3J0cy5pKHJlcXVpcmUoXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIWxpZ2h0Z2FsbGVyeS9kaXN0L2Nzcy9sZy10cmFuc2l0aW9ucy5taW4uY3NzXCIpLCBcIlwiKTtcblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmxnLWNzczMubGctem9vbS1pbiAubGctaXRlbXtvcGFjaXR5OjB9LmxnLWNzczMubGctem9vbS1pbiAubGctaXRlbS5sZy1uZXh0LXNsaWRlLC5sZy1jc3MzLmxnLXpvb20taW4gLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEuMywxLjMsMS4zKTt0cmFuc2Zvcm06c2NhbGUzZCgxLjMsMS4zLDEuMyl9LmxnLWNzczMubGctem9vbS1pbiAubGctaXRlbS5sZy1jdXJyZW50ey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpO3RyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKTtvcGFjaXR5OjF9LmxnLWNzczMubGctem9vbS1pbiAubGctaXRlbS5sZy1jdXJyZW50LC5sZy1jc3MzLmxnLXpvb20taW4gLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwubGctY3NzMy5sZy16b29tLWluIC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwczstbW96LXRyYW5zaXRpb246LW1vei10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzOy1vLXRyYW5zaXRpb246LW8tdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHN9LmxnLWNzczMubGctem9vbS1pbi1iaWcgLmxnLWl0ZW17b3BhY2l0eTowfS5sZy1jc3MzLmxnLXpvb20taW4tYmlnIC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsLmxnLWNzczMubGctem9vbS1pbi1iaWcgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDIsMiwyKTt0cmFuc2Zvcm06c2NhbGUzZCgyLDIsMil9LmxnLWNzczMubGctem9vbS1pbi1iaWcgLmxnLWl0ZW0ubGctY3VycmVudHstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKTt0cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSk7b3BhY2l0eToxfS5sZy1jc3MzLmxnLXpvb20taW4tYmlnIC5sZy1pdGVtLmxnLWN1cnJlbnQsLmxnLWNzczMubGctem9vbS1pbi1iaWcgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwubGctY3NzMy5sZy16b29tLWluLWJpZyAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHM7LW1vei10cmFuc2l0aW9uOi1tb3otdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwczstby10cmFuc2l0aW9uOi1vLXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzfS5sZy1jc3MzLmxnLXpvb20tb3V0IC5sZy1pdGVte29wYWNpdHk6MH0ubGctY3NzMy5sZy16b29tLW91dCAubGctaXRlbS5sZy1uZXh0LXNsaWRlLC5sZy1jc3MzLmxnLXpvb20tb3V0IC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguNywuNywuNyk7dHJhbnNmb3JtOnNjYWxlM2QoLjcsLjcsLjcpfS5sZy1jc3MzLmxnLXpvb20tb3V0IC5sZy1pdGVtLmxnLWN1cnJlbnR7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSk7dHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpO29wYWNpdHk6MX0ubGctY3NzMy5sZy16b29tLW91dCAubGctaXRlbS5sZy1jdXJyZW50LC5sZy1jc3MzLmxnLXpvb20tb3V0IC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsLmxnLWNzczMubGctem9vbS1vdXQgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzOy1tb3otdHJhbnNpdGlvbjotbW96LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHM7LW8tdHJhbnNpdGlvbjotby10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzO3RyYW5zaXRpb246dHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwc30ubGctY3NzMy5sZy16b29tLW91dC1iaWcgLmxnLWl0ZW17b3BhY2l0eTowfS5sZy1jc3MzLmxnLXpvb20tb3V0LWJpZyAubGctaXRlbS5sZy1uZXh0LXNsaWRlLC5sZy1jc3MzLmxnLXpvb20tb3V0LWJpZyAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApO3RyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKX0ubGctY3NzMy5sZy16b29tLW91dC1iaWcgLmxnLWl0ZW0ubGctY3VycmVudHstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKTt0cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSk7b3BhY2l0eToxfS5sZy1jc3MzLmxnLXpvb20tb3V0LWJpZyAubGctaXRlbS5sZy1jdXJyZW50LC5sZy1jc3MzLmxnLXpvb20tb3V0LWJpZyAubGctaXRlbS5sZy1uZXh0LXNsaWRlLC5sZy1jc3MzLmxnLXpvb20tb3V0LWJpZyAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHM7LW1vei10cmFuc2l0aW9uOi1tb3otdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwczstby10cmFuc2l0aW9uOi1vLXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzfS5sZy1jc3MzLmxnLXpvb20tb3V0LWluIC5sZy1pdGVte29wYWNpdHk6MH0ubGctY3NzMy5sZy16b29tLW91dC1pbiAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApO3RyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKX0ubGctY3NzMy5sZy16b29tLW91dC1pbiAubGctaXRlbS5sZy1uZXh0LXNsaWRley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMiwyLDIpO3RyYW5zZm9ybTpzY2FsZTNkKDIsMiwyKX0ubGctY3NzMy5sZy16b29tLW91dC1pbiAubGctaXRlbS5sZy1jdXJyZW50ey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpO3RyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKTtvcGFjaXR5OjF9LmxnLWNzczMubGctem9vbS1vdXQtaW4gLmxnLWl0ZW0ubGctY3VycmVudCwubGctY3NzMy5sZy16b29tLW91dC1pbiAubGctaXRlbS5sZy1uZXh0LXNsaWRlLC5sZy1jc3MzLmxnLXpvb20tb3V0LWluIC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwczstbW96LXRyYW5zaXRpb246LW1vei10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzOy1vLXRyYW5zaXRpb246LW8tdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHN9LmxnLWNzczMubGctem9vbS1pbi1vdXQgLmxnLWl0ZW17b3BhY2l0eTowfS5sZy1jc3MzLmxnLXpvb20taW4tb3V0IC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgyLDIsMik7dHJhbnNmb3JtOnNjYWxlM2QoMiwyLDIpfS5sZy1jc3MzLmxnLXpvb20taW4tb3V0IC5sZy1pdGVtLmxnLW5leHQtc2xpZGV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCk7dHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApfS5sZy1jc3MzLmxnLXpvb20taW4tb3V0IC5sZy1pdGVtLmxnLWN1cnJlbnR7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSk7dHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpO29wYWNpdHk6MX0ubGctY3NzMy5sZy16b29tLWluLW91dCAubGctaXRlbS5sZy1jdXJyZW50LC5sZy1jc3MzLmxnLXpvb20taW4tb3V0IC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsLmxnLWNzczMubGctem9vbS1pbi1vdXQgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzOy1tb3otdHJhbnNpdGlvbjotbW96LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHM7LW8tdHJhbnNpdGlvbjotby10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzO3RyYW5zaXRpb246dHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwc30ubGctY3NzMy5sZy1zb2Z0LXpvb20gLmxnLWl0ZW17b3BhY2l0eTowfS5sZy1jc3MzLmxnLXNvZnQtem9vbSAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMS4xLDEuMSwxLjEpO3RyYW5zZm9ybTpzY2FsZTNkKDEuMSwxLjEsMS4xKX0ubGctY3NzMy5sZy1zb2Z0LXpvb20gLmxnLWl0ZW0ubGctbmV4dC1zbGlkZXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC45LC45LC45KTt0cmFuc2Zvcm06c2NhbGUzZCguOSwuOSwuOSl9LmxnLWNzczMubGctc29mdC16b29tIC5sZy1pdGVtLmxnLWN1cnJlbnR7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSk7dHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpO29wYWNpdHk6MX0ubGctY3NzMy5sZy1zb2Z0LXpvb20gLmxnLWl0ZW0ubGctY3VycmVudCwubGctY3NzMy5sZy1zb2Z0LXpvb20gLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwubGctY3NzMy5sZy1zb2Z0LXpvb20gLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzOy1tb3otdHJhbnNpdGlvbjotbW96LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHM7LW8tdHJhbnNpdGlvbjotby10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzO3RyYW5zaXRpb246dHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwc30ubGctY3NzMy5sZy1zY2FsZS11cCAubGctaXRlbXtvcGFjaXR5OjB9LmxnLWNzczMubGctc2NhbGUtdXAgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwubGctY3NzMy5sZy1zY2FsZS11cCAubGctaXRlbS5sZy1wcmV2LXNsaWRley1tb3otdHJhbnNmb3JtOnNjYWxlM2QoLjgsLjgsLjgpIHRyYW5zbGF0ZTNkKDAsMTAlLDApOy1vLXRyYW5zZm9ybTpzY2FsZTNkKC44LC44LC44KSB0cmFuc2xhdGUzZCgwLDEwJSwwKTstbXMtdHJhbnNmb3JtOnNjYWxlM2QoLjgsLjgsLjgpIHRyYW5zbGF0ZTNkKDAsMTAlLDApOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjgsLjgsLjgpIHRyYW5zbGF0ZTNkKDAsMTAlLDApO3RyYW5zZm9ybTpzY2FsZTNkKC44LC44LC44KSB0cmFuc2xhdGUzZCgwLDEwJSwwKX0ubGctY3NzMy5sZy1zY2FsZS11cCAubGctaXRlbS5sZy1jdXJyZW50ey1tb3otdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpIHRyYW5zbGF0ZTNkKDAsMCwwKTstby10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSkgdHJhbnNsYXRlM2QoMCwwLDApOy1tcy10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSkgdHJhbnNsYXRlM2QoMCwwLDApOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpIHRyYW5zbGF0ZTNkKDAsMCwwKTt0cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSkgdHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MX0ubGctY3NzMy5sZy1zY2FsZS11cCAubGctaXRlbS5sZy1jdXJyZW50LC5sZy1jc3MzLmxnLXNjYWxlLXVwIC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsLmxnLWNzczMubGctc2NhbGUtdXAgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzOy1tb3otdHJhbnNpdGlvbjotbW96LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHM7LW8tdHJhbnNpdGlvbjotby10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzO3RyYW5zaXRpb246dHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwc30ubGctY3NzMy5sZy1zbGlkZS1jaXJjdWxhciAubGctaXRlbXtvcGFjaXR5OjB9LmxnLWNzczMubGctc2xpZGUtY2lyY3VsYXIgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstbW96LXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgtMTAwJSwwLDApOy1vLXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgtMTAwJSwwLDApOy1tcy10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoLTEwMCUsMCwwKTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgtMTAwJSwwLDApO3RyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgtMTAwJSwwLDApfS5sZy1jc3MzLmxnLXNsaWRlLWNpcmN1bGFyIC5sZy1pdGVtLmxnLW5leHQtc2xpZGV7LW1vei10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoMTAwJSwwLDApOy1vLXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgxMDAlLDAsMCk7LW1zLXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgxMDAlLDAsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoMTAwJSwwLDApO3RyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgxMDAlLDAsMCl9LmxnLWNzczMubGctc2xpZGUtY2lyY3VsYXIgLmxnLWl0ZW0ubGctY3VycmVudHstbW96LXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKSB0cmFuc2xhdGUzZCgwLDAsMCk7LW8tdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpIHRyYW5zbGF0ZTNkKDAsMCwwKTstbXMtdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpIHRyYW5zbGF0ZTNkKDAsMCwwKTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKSB0cmFuc2xhdGUzZCgwLDAsMCk7dHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpIHRyYW5zbGF0ZTNkKDAsMCwwKTtvcGFjaXR5OjF9LmxnLWNzczMubGctc2xpZGUtY2lyY3VsYXIgLmxnLWl0ZW0ubGctY3VycmVudCwubGctY3NzMy5sZy1zbGlkZS1jaXJjdWxhciAubGctaXRlbS5sZy1uZXh0LXNsaWRlLC5sZy1jc3MzLmxnLXNsaWRlLWNpcmN1bGFyIC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwczstbW96LXRyYW5zaXRpb246LW1vei10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzOy1vLXRyYW5zaXRpb246LW8tdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHN9LmxnLWNzczMubGctc2xpZGUtY2lyY3VsYXItdXAgLmxnLWl0ZW17b3BhY2l0eTowfS5sZy1jc3MzLmxnLXNsaWRlLWNpcmN1bGFyLXVwIC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LW1vei10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoLTEwMCUsLTEwMCUsMCk7LW8tdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKC0xMDAlLC0xMDAlLDApOy1tcy10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoLTEwMCUsLTEwMCUsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoLTEwMCUsLTEwMCUsMCk7dHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKC0xMDAlLC0xMDAlLDApfS5sZy1jc3MzLmxnLXNsaWRlLWNpcmN1bGFyLXVwIC5sZy1pdGVtLmxnLW5leHQtc2xpZGV7LW1vei10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoMTAwJSwtMTAwJSwwKTstby10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoMTAwJSwtMTAwJSwwKTstbXMtdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKDEwMCUsLTEwMCUsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoMTAwJSwtMTAwJSwwKTt0cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoMTAwJSwtMTAwJSwwKX0ubGctY3NzMy5sZy1zbGlkZS1jaXJjdWxhci11cCAubGctaXRlbS5sZy1jdXJyZW50ey1tb3otdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpIHRyYW5zbGF0ZTNkKDAsMCwwKTstby10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSkgdHJhbnNsYXRlM2QoMCwwLDApOy1tcy10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSkgdHJhbnNsYXRlM2QoMCwwLDApOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpIHRyYW5zbGF0ZTNkKDAsMCwwKTt0cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSkgdHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MX0ubGctY3NzMy5sZy1zbGlkZS1jaXJjdWxhci11cCAubGctaXRlbS5sZy1jdXJyZW50LC5sZy1jc3MzLmxnLXNsaWRlLWNpcmN1bGFyLXVwIC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsLmxnLWNzczMubGctc2xpZGUtY2lyY3VsYXItdXAgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzOy1tb3otdHJhbnNpdGlvbjotbW96LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHM7LW8tdHJhbnNpdGlvbjotby10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzO3RyYW5zaXRpb246dHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwc30ubGctY3NzMy5sZy1zbGlkZS1jaXJjdWxhci1kb3duIC5sZy1pdGVte29wYWNpdHk6MH0ubGctY3NzMy5sZy1zbGlkZS1jaXJjdWxhci1kb3duIC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LW1vei10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoLTEwMCUsMTAwJSwwKTstby10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoLTEwMCUsMTAwJSwwKTstbXMtdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKC0xMDAlLDEwMCUsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoLTEwMCUsMTAwJSwwKTt0cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoLTEwMCUsMTAwJSwwKX0ubGctY3NzMy5sZy1zbGlkZS1jaXJjdWxhci1kb3duIC5sZy1pdGVtLmxnLW5leHQtc2xpZGV7LW1vei10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoMTAwJSwxMDAlLDApOy1vLXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgxMDAlLDEwMCUsMCk7LW1zLXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgxMDAlLDEwMCUsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoMTAwJSwxMDAlLDApO3RyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgxMDAlLDEwMCUsMCl9LmxnLWNzczMubGctc2xpZGUtY2lyY3VsYXItZG93biAubGctaXRlbS5sZy1jdXJyZW50ey1tb3otdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpIHRyYW5zbGF0ZTNkKDAsMCwwKTstby10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSkgdHJhbnNsYXRlM2QoMCwwLDApOy1tcy10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSkgdHJhbnNsYXRlM2QoMCwwLDApOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpIHRyYW5zbGF0ZTNkKDAsMCwwKTt0cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSkgdHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MX0ubGctY3NzMy5sZy1zbGlkZS1jaXJjdWxhci1kb3duIC5sZy1pdGVtLmxnLWN1cnJlbnQsLmxnLWNzczMubGctc2xpZGUtY2lyY3VsYXItZG93biAubGctaXRlbS5sZy1uZXh0LXNsaWRlLC5sZy1jc3MzLmxnLXNsaWRlLWNpcmN1bGFyLWRvd24gLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzOy1tb3otdHJhbnNpdGlvbjotbW96LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHM7LW8tdHJhbnNpdGlvbjotby10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzO3RyYW5zaXRpb246dHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwc30ubGctY3NzMy5sZy1zbGlkZS1jaXJjdWxhci12ZXJ0aWNhbCAubGctaXRlbXtvcGFjaXR5OjB9LmxnLWNzczMubGctc2xpZGUtY2lyY3VsYXItdmVydGljYWwgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstbW96LXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgwLC0xMDAlLDApOy1vLXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgwLC0xMDAlLDApOy1tcy10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoMCwtMTAwJSwwKTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgwLC0xMDAlLDApO3RyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgwLC0xMDAlLDApfS5sZy1jc3MzLmxnLXNsaWRlLWNpcmN1bGFyLXZlcnRpY2FsIC5sZy1pdGVtLmxnLW5leHQtc2xpZGV7LW1vei10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoMCwxMDAlLDApOy1vLXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgwLDEwMCUsMCk7LW1zLXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgwLDEwMCUsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoMCwxMDAlLDApO3RyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgwLDEwMCUsMCl9LmxnLWNzczMubGctc2xpZGUtY2lyY3VsYXItdmVydGljYWwgLmxnLWl0ZW0ubGctY3VycmVudHstbW96LXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKSB0cmFuc2xhdGUzZCgwLDAsMCk7LW8tdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpIHRyYW5zbGF0ZTNkKDAsMCwwKTstbXMtdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpIHRyYW5zbGF0ZTNkKDAsMCwwKTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKSB0cmFuc2xhdGUzZCgwLDAsMCk7dHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpIHRyYW5zbGF0ZTNkKDAsMCwwKTtvcGFjaXR5OjF9LmxnLWNzczMubGctc2xpZGUtY2lyY3VsYXItdmVydGljYWwgLmxnLWl0ZW0ubGctY3VycmVudCwubGctY3NzMy5sZy1zbGlkZS1jaXJjdWxhci12ZXJ0aWNhbCAubGctaXRlbS5sZy1uZXh0LXNsaWRlLC5sZy1jc3MzLmxnLXNsaWRlLWNpcmN1bGFyLXZlcnRpY2FsIC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwczstbW96LXRyYW5zaXRpb246LW1vei10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzOy1vLXRyYW5zaXRpb246LW8tdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHN9LmxnLWNzczMubGctc2xpZGUtY2lyY3VsYXItdmVydGljYWwtbGVmdCAubGctaXRlbXtvcGFjaXR5OjB9LmxnLWNzczMubGctc2xpZGUtY2lyY3VsYXItdmVydGljYWwtbGVmdCAubGctaXRlbS5sZy1wcmV2LXNsaWRley1tb3otdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKC0xMDAlLC0xMDAlLDApOy1vLXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgtMTAwJSwtMTAwJSwwKTstbXMtdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKC0xMDAlLC0xMDAlLDApOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKC0xMDAlLC0xMDAlLDApO3RyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgtMTAwJSwtMTAwJSwwKX0ubGctY3NzMy5sZy1zbGlkZS1jaXJjdWxhci12ZXJ0aWNhbC1sZWZ0IC5sZy1pdGVtLmxnLW5leHQtc2xpZGV7LW1vei10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoLTEwMCUsMTAwJSwwKTstby10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoLTEwMCUsMTAwJSwwKTstbXMtdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKC0xMDAlLDEwMCUsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoLTEwMCUsMTAwJSwwKTt0cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoLTEwMCUsMTAwJSwwKX0ubGctY3NzMy5sZy1zbGlkZS1jaXJjdWxhci12ZXJ0aWNhbC1sZWZ0IC5sZy1pdGVtLmxnLWN1cnJlbnR7LW1vei10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSkgdHJhbnNsYXRlM2QoMCwwLDApOy1vLXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKSB0cmFuc2xhdGUzZCgwLDAsMCk7LW1zLXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKSB0cmFuc2xhdGUzZCgwLDAsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSkgdHJhbnNsYXRlM2QoMCwwLDApO3RyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKSB0cmFuc2xhdGUzZCgwLDAsMCk7b3BhY2l0eToxfS5sZy1jc3MzLmxnLXNsaWRlLWNpcmN1bGFyLXZlcnRpY2FsLWxlZnQgLmxnLWl0ZW0ubGctY3VycmVudCwubGctY3NzMy5sZy1zbGlkZS1jaXJjdWxhci12ZXJ0aWNhbC1sZWZ0IC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsLmxnLWNzczMubGctc2xpZGUtY2lyY3VsYXItdmVydGljYWwtbGVmdCAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHM7LW1vei10cmFuc2l0aW9uOi1tb3otdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwczstby10cmFuc2l0aW9uOi1vLXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzfS5sZy1jc3MzLmxnLXNsaWRlLWNpcmN1bGFyLXZlcnRpY2FsLWRvd24gLmxnLWl0ZW17b3BhY2l0eTowfS5sZy1jc3MzLmxnLXNsaWRlLWNpcmN1bGFyLXZlcnRpY2FsLWRvd24gLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstbW96LXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgxMDAlLC0xMDAlLDApOy1vLXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgxMDAlLC0xMDAlLDApOy1tcy10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoMTAwJSwtMTAwJSwwKTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgxMDAlLC0xMDAlLDApO3RyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgxMDAlLC0xMDAlLDApfS5sZy1jc3MzLmxnLXNsaWRlLWNpcmN1bGFyLXZlcnRpY2FsLWRvd24gLmxnLWl0ZW0ubGctbmV4dC1zbGlkZXstbW96LXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgxMDAlLDEwMCUsMCk7LW8tdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKDEwMCUsMTAwJSwwKTstbXMtdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKDEwMCUsMTAwJSwwKTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgxMDAlLDEwMCUsMCk7dHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKDEwMCUsMTAwJSwwKX0ubGctY3NzMy5sZy1zbGlkZS1jaXJjdWxhci12ZXJ0aWNhbC1kb3duIC5sZy1pdGVtLmxnLWN1cnJlbnR7LW1vei10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSkgdHJhbnNsYXRlM2QoMCwwLDApOy1vLXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKSB0cmFuc2xhdGUzZCgwLDAsMCk7LW1zLXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKSB0cmFuc2xhdGUzZCgwLDAsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSkgdHJhbnNsYXRlM2QoMCwwLDApO3RyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKSB0cmFuc2xhdGUzZCgwLDAsMCk7b3BhY2l0eToxfS5sZy1jc3MzLmxnLXNsaWRlLWNpcmN1bGFyLXZlcnRpY2FsLWRvd24gLmxnLWl0ZW0ubGctY3VycmVudCwubGctY3NzMy5sZy1zbGlkZS1jaXJjdWxhci12ZXJ0aWNhbC1kb3duIC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsLmxnLWNzczMubGctc2xpZGUtY2lyY3VsYXItdmVydGljYWwtZG93biAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHM7LW1vei10cmFuc2l0aW9uOi1tb3otdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwczstby10cmFuc2l0aW9uOi1vLXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzfS5sZy1jc3MzLmxnLXNsaWRlLXZlcnRpY2FsIC5sZy1pdGVte29wYWNpdHk6MH0ubGctY3NzMy5sZy1zbGlkZS12ZXJ0aWNhbCAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwMCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwMCUsMCl9LmxnLWNzczMubGctc2xpZGUtdmVydGljYWwgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwMCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTAwJSwwKX0ubGctY3NzMy5sZy1zbGlkZS12ZXJ0aWNhbCAubGctaXRlbS5sZy1jdXJyZW50ey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MX0ubGctY3NzMy5sZy1zbGlkZS12ZXJ0aWNhbCAubGctaXRlbS5sZy1jdXJyZW50LC5sZy1jc3MzLmxnLXNsaWRlLXZlcnRpY2FsIC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsLmxnLWNzczMubGctc2xpZGUtdmVydGljYWwgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczstbW96LXRyYW5zaXRpb246LW1vei10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczstby10cmFuc2l0aW9uOi1vLXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzO3RyYW5zaXRpb246dHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHN9LmxnLWNzczMubGctc2xpZGUtdmVydGljYWwtZ3Jvd3RoIC5sZy1pdGVte29wYWNpdHk6MH0ubGctY3NzMy5sZy1zbGlkZS12ZXJ0aWNhbC1ncm93dGggLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstbW96LXRyYW5zZm9ybTpzY2FsZTNkKC41LC41LC41KSB0cmFuc2xhdGUzZCgwLC0xNTAlLDApOy1vLXRyYW5zZm9ybTpzY2FsZTNkKC41LC41LC41KSB0cmFuc2xhdGUzZCgwLC0xNTAlLDApOy1tcy10cmFuc2Zvcm06c2NhbGUzZCguNSwuNSwuNSkgdHJhbnNsYXRlM2QoMCwtMTUwJSwwKTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC41LC41LC41KSB0cmFuc2xhdGUzZCgwLC0xNTAlLDApO3RyYW5zZm9ybTpzY2FsZTNkKC41LC41LC41KSB0cmFuc2xhdGUzZCgwLC0xNTAlLDApfS5sZy1jc3MzLmxnLXNsaWRlLXZlcnRpY2FsLWdyb3d0aCAubGctaXRlbS5sZy1uZXh0LXNsaWRley1tb3otdHJhbnNmb3JtOnNjYWxlM2QoLjUsLjUsLjUpIHRyYW5zbGF0ZTNkKDAsMTUwJSwwKTstby10cmFuc2Zvcm06c2NhbGUzZCguNSwuNSwuNSkgdHJhbnNsYXRlM2QoMCwxNTAlLDApOy1tcy10cmFuc2Zvcm06c2NhbGUzZCguNSwuNSwuNSkgdHJhbnNsYXRlM2QoMCwxNTAlLDApOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjUsLjUsLjUpIHRyYW5zbGF0ZTNkKDAsMTUwJSwwKTt0cmFuc2Zvcm06c2NhbGUzZCguNSwuNSwuNSkgdHJhbnNsYXRlM2QoMCwxNTAlLDApfS5sZy1jc3MzLmxnLXNsaWRlLXZlcnRpY2FsLWdyb3d0aCAubGctaXRlbS5sZy1jdXJyZW50ey1tb3otdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpIHRyYW5zbGF0ZTNkKDAsMCwwKTstby10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSkgdHJhbnNsYXRlM2QoMCwwLDApOy1tcy10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSkgdHJhbnNsYXRlM2QoMCwwLDApOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpIHRyYW5zbGF0ZTNkKDAsMCwwKTt0cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSkgdHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MX0ubGctY3NzMy5sZy1zbGlkZS12ZXJ0aWNhbC1ncm93dGggLmxnLWl0ZW0ubGctY3VycmVudCwubGctY3NzMy5sZy1zbGlkZS12ZXJ0aWNhbC1ncm93dGggLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwubGctY3NzMy5sZy1zbGlkZS12ZXJ0aWNhbC1ncm93dGggLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczstbW96LXRyYW5zaXRpb246LW1vei10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczstby10cmFuc2l0aW9uOi1vLXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzO3RyYW5zaXRpb246dHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHN9LmxnLWNzczMubGctc2xpZGUtc2tldy1vbmx5IC5sZy1pdGVte29wYWNpdHk6MH0ubGctY3NzMy5sZy1zbGlkZS1za2V3LW9ubHkgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwubGctY3NzMy5sZy1zbGlkZS1za2V3LW9ubHkgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstbW96LXRyYW5zZm9ybTpza2V3KDEwZGVnLDBkZWcpOy1vLXRyYW5zZm9ybTpza2V3KDEwZGVnLDBkZWcpOy1tcy10cmFuc2Zvcm06c2tldygxMGRlZywwZGVnKTstd2Via2l0LXRyYW5zZm9ybTpza2V3KDEwZGVnLDBkZWcpO3RyYW5zZm9ybTpza2V3KDEwZGVnLDBkZWcpfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctb25seSAubGctaXRlbS5sZy1jdXJyZW50ey1tb3otdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKTstby10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpOy1tcy10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpOy13ZWJraXQtdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKTt0cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpO29wYWNpdHk6MX0ubGctY3NzMy5sZy1zbGlkZS1za2V3LW9ubHkgLmxnLWl0ZW0ubGctY3VycmVudCwubGctY3NzMy5sZy1zbGlkZS1za2V3LW9ubHkgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwubGctY3NzMy5sZy1zbGlkZS1za2V3LW9ubHkgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczstbW96LXRyYW5zaXRpb246LW1vei10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczstby10cmFuc2l0aW9uOi1vLXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzO3RyYW5zaXRpb246dHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHN9LmxnLWNzczMubGctc2xpZGUtc2tldy1vbmx5LXJldiAubGctaXRlbXtvcGFjaXR5OjB9LmxnLWNzczMubGctc2xpZGUtc2tldy1vbmx5LXJldiAubGctaXRlbS5sZy1uZXh0LXNsaWRlLC5sZy1jc3MzLmxnLXNsaWRlLXNrZXctb25seS1yZXYgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstbW96LXRyYW5zZm9ybTpza2V3KC0xMGRlZywwZGVnKTstby10cmFuc2Zvcm06c2tldygtMTBkZWcsMGRlZyk7LW1zLXRyYW5zZm9ybTpza2V3KC0xMGRlZywwZGVnKTstd2Via2l0LXRyYW5zZm9ybTpza2V3KC0xMGRlZywwZGVnKTt0cmFuc2Zvcm06c2tldygtMTBkZWcsMGRlZyl9LmxnLWNzczMubGctc2xpZGUtc2tldy1vbmx5LXJldiAubGctaXRlbS5sZy1jdXJyZW50ey1tb3otdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKTstby10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpOy1tcy10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpOy13ZWJraXQtdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKTt0cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpO29wYWNpdHk6MX0ubGctY3NzMy5sZy1zbGlkZS1za2V3LW9ubHktcmV2IC5sZy1pdGVtLmxnLWN1cnJlbnQsLmxnLWNzczMubGctc2xpZGUtc2tldy1vbmx5LXJldiAubGctaXRlbS5sZy1uZXh0LXNsaWRlLC5sZy1jc3MzLmxnLXNsaWRlLXNrZXctb25seS1yZXYgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczstbW96LXRyYW5zaXRpb246LW1vei10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczstby10cmFuc2l0aW9uOi1vLXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzO3RyYW5zaXRpb246dHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHN9LmxnLWNzczMubGctc2xpZGUtc2tldy1vbmx5LXkgLmxnLWl0ZW17b3BhY2l0eTowfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctb25seS15IC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsLmxnLWNzczMubGctc2xpZGUtc2tldy1vbmx5LXkgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstbW96LXRyYW5zZm9ybTpza2V3KDBkZWcsMTBkZWcpOy1vLXRyYW5zZm9ybTpza2V3KDBkZWcsMTBkZWcpOy1tcy10cmFuc2Zvcm06c2tldygwZGVnLDEwZGVnKTstd2Via2l0LXRyYW5zZm9ybTpza2V3KDBkZWcsMTBkZWcpO3RyYW5zZm9ybTpza2V3KDBkZWcsMTBkZWcpfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctb25seS15IC5sZy1pdGVtLmxnLWN1cnJlbnR7LW1vei10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpOy1vLXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZyk7LW1zLXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZyk7LXdlYmtpdC10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpO3RyYW5zZm9ybTpza2V3KDBkZWcsMGRlZyk7b3BhY2l0eToxfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctb25seS15IC5sZy1pdGVtLmxnLWN1cnJlbnQsLmxnLWNzczMubGctc2xpZGUtc2tldy1vbmx5LXkgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwubGctY3NzMy5sZy1zbGlkZS1za2V3LW9ubHkteSAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzOy1tb3otdHJhbnNpdGlvbjotbW96LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzOy1vLXRyYW5zaXRpb246LW8tdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwc30ubGctY3NzMy5sZy1zbGlkZS1za2V3LW9ubHkteS1yZXYgLmxnLWl0ZW17b3BhY2l0eTowfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctb25seS15LXJldiAubGctaXRlbS5sZy1uZXh0LXNsaWRlLC5sZy1jc3MzLmxnLXNsaWRlLXNrZXctb25seS15LXJldiAubGctaXRlbS5sZy1wcmV2LXNsaWRley1tb3otdHJhbnNmb3JtOnNrZXcoMGRlZywtMTBkZWcpOy1vLXRyYW5zZm9ybTpza2V3KDBkZWcsLTEwZGVnKTstbXMtdHJhbnNmb3JtOnNrZXcoMGRlZywtMTBkZWcpOy13ZWJraXQtdHJhbnNmb3JtOnNrZXcoMGRlZywtMTBkZWcpO3RyYW5zZm9ybTpza2V3KDBkZWcsLTEwZGVnKX0ubGctY3NzMy5sZy1zbGlkZS1za2V3LW9ubHkteS1yZXYgLmxnLWl0ZW0ubGctY3VycmVudHstbW96LXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZyk7LW8tdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKTstbXMtdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKTstd2Via2l0LXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZyk7dHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKTtvcGFjaXR5OjF9LmxnLWNzczMubGctc2xpZGUtc2tldy1vbmx5LXktcmV2IC5sZy1pdGVtLmxnLWN1cnJlbnQsLmxnLWNzczMubGctc2xpZGUtc2tldy1vbmx5LXktcmV2IC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsLmxnLWNzczMubGctc2xpZGUtc2tldy1vbmx5LXktcmV2IC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7LW1vei10cmFuc2l0aW9uOi1tb3otdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7LW8tdHJhbnNpdGlvbjotby10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXcgLmxnLWl0ZW17b3BhY2l0eTowfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXcgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstbW96LXRyYW5zZm9ybTpza2V3KDIwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7LW8tdHJhbnNmb3JtOnNrZXcoMjBkZWcsMGRlZykgdHJhbnNsYXRlM2QoLTEwMCUsMCwwKTstbXMtdHJhbnNmb3JtOnNrZXcoMjBkZWcsMGRlZykgdHJhbnNsYXRlM2QoLTEwMCUsMCwwKTstd2Via2l0LXRyYW5zZm9ybTpza2V3KDIwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7dHJhbnNmb3JtOnNrZXcoMjBkZWcsMGRlZykgdHJhbnNsYXRlM2QoLTEwMCUsMCwwKX0ubGctY3NzMy5sZy1zbGlkZS1za2V3IC5sZy1pdGVtLmxnLW5leHQtc2xpZGV7LW1vei10cmFuc2Zvcm06c2tldygyMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgxMDAlLDAsMCk7LW8tdHJhbnNmb3JtOnNrZXcoMjBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMTAwJSwwLDApOy1tcy10cmFuc2Zvcm06c2tldygyMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgxMDAlLDAsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2tldygyMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgxMDAlLDAsMCk7dHJhbnNmb3JtOnNrZXcoMjBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMTAwJSwwLDApfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXcgLmxnLWl0ZW0ubGctY3VycmVudHstbW96LXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwwLDApOy1vLXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwwLDApOy1tcy10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMCwwKTstd2Via2l0LXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwwLDApO3RyYW5zZm9ybTpza2V3KDBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MX0ubGctY3NzMy5sZy1zbGlkZS1za2V3IC5sZy1pdGVtLmxnLWN1cnJlbnQsLmxnLWNzczMubGctc2xpZGUtc2tldyAubGctaXRlbS5sZy1uZXh0LXNsaWRlLC5sZy1jc3MzLmxnLXNsaWRlLXNrZXcgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczstbW96LXRyYW5zaXRpb246LW1vei10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczstby10cmFuc2l0aW9uOi1vLXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzO3RyYW5zaXRpb246dHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHN9LmxnLWNzczMubGctc2xpZGUtc2tldy1yZXYgLmxnLWl0ZW17b3BhY2l0eTowfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctcmV2IC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LW1vei10cmFuc2Zvcm06c2tldygtMjBkZWcsMGRlZykgdHJhbnNsYXRlM2QoLTEwMCUsMCwwKTstby10cmFuc2Zvcm06c2tldygtMjBkZWcsMGRlZykgdHJhbnNsYXRlM2QoLTEwMCUsMCwwKTstbXMtdHJhbnNmb3JtOnNrZXcoLTIwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2tldygtMjBkZWcsMGRlZykgdHJhbnNsYXRlM2QoLTEwMCUsMCwwKTt0cmFuc2Zvcm06c2tldygtMjBkZWcsMGRlZykgdHJhbnNsYXRlM2QoLTEwMCUsMCwwKX0ubGctY3NzMy5sZy1zbGlkZS1za2V3LXJldiAubGctaXRlbS5sZy1uZXh0LXNsaWRley1tb3otdHJhbnNmb3JtOnNrZXcoLTIwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDEwMCUsMCwwKTstby10cmFuc2Zvcm06c2tldygtMjBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMTAwJSwwLDApOy1tcy10cmFuc2Zvcm06c2tldygtMjBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMTAwJSwwLDApOy13ZWJraXQtdHJhbnNmb3JtOnNrZXcoLTIwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDEwMCUsMCwwKTt0cmFuc2Zvcm06c2tldygtMjBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMTAwJSwwLDApfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctcmV2IC5sZy1pdGVtLmxnLWN1cnJlbnR7LW1vei10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMCwwKTstby10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMCwwKTstbXMtdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDAsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMCwwKTt0cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMCwwKTtvcGFjaXR5OjF9LmxnLWNzczMubGctc2xpZGUtc2tldy1yZXYgLmxnLWl0ZW0ubGctY3VycmVudCwubGctY3NzMy5sZy1zbGlkZS1za2V3LXJldiAubGctaXRlbS5sZy1uZXh0LXNsaWRlLC5sZy1jc3MzLmxnLXNsaWRlLXNrZXctcmV2IC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7LW1vei10cmFuc2l0aW9uOi1tb3otdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7LW8tdHJhbnNpdGlvbjotby10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctY3Jvc3MgLmxnLWl0ZW17b3BhY2l0eTowfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctY3Jvc3MgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstbW96LXRyYW5zZm9ybTpza2V3KDBkZWcsNjBkZWcpIHRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7LW8tdHJhbnNmb3JtOnNrZXcoMGRlZyw2MGRlZykgdHJhbnNsYXRlM2QoLTEwMCUsMCwwKTstbXMtdHJhbnNmb3JtOnNrZXcoMGRlZyw2MGRlZykgdHJhbnNsYXRlM2QoLTEwMCUsMCwwKTstd2Via2l0LXRyYW5zZm9ybTpza2V3KDBkZWcsNjBkZWcpIHRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7dHJhbnNmb3JtOnNrZXcoMGRlZyw2MGRlZykgdHJhbnNsYXRlM2QoLTEwMCUsMCwwKX0ubGctY3NzMy5sZy1zbGlkZS1za2V3LWNyb3NzIC5sZy1pdGVtLmxnLW5leHQtc2xpZGV7LW1vei10cmFuc2Zvcm06c2tldygwZGVnLDYwZGVnKSB0cmFuc2xhdGUzZCgxMDAlLDAsMCk7LW8tdHJhbnNmb3JtOnNrZXcoMGRlZyw2MGRlZykgdHJhbnNsYXRlM2QoMTAwJSwwLDApOy1tcy10cmFuc2Zvcm06c2tldygwZGVnLDYwZGVnKSB0cmFuc2xhdGUzZCgxMDAlLDAsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2tldygwZGVnLDYwZGVnKSB0cmFuc2xhdGUzZCgxMDAlLDAsMCk7dHJhbnNmb3JtOnNrZXcoMGRlZyw2MGRlZykgdHJhbnNsYXRlM2QoMTAwJSwwLDApfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctY3Jvc3MgLmxnLWl0ZW0ubGctY3VycmVudHstbW96LXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwwLDApOy1vLXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwwLDApOy1tcy10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMCwwKTstd2Via2l0LXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwwLDApO3RyYW5zZm9ybTpza2V3KDBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MX0ubGctY3NzMy5sZy1zbGlkZS1za2V3LWNyb3NzIC5sZy1pdGVtLmxnLWN1cnJlbnQsLmxnLWNzczMubGctc2xpZGUtc2tldy1jcm9zcyAubGctaXRlbS5sZy1uZXh0LXNsaWRlLC5sZy1jc3MzLmxnLXNsaWRlLXNrZXctY3Jvc3MgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczstbW96LXRyYW5zaXRpb246LW1vei10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczstby10cmFuc2l0aW9uOi1vLXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzO3RyYW5zaXRpb246dHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHN9LmxnLWNzczMubGctc2xpZGUtc2tldy1jcm9zcy1yZXYgLmxnLWl0ZW17b3BhY2l0eTowfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctY3Jvc3MtcmV2IC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LW1vei10cmFuc2Zvcm06c2tldygwZGVnLC02MGRlZykgdHJhbnNsYXRlM2QoLTEwMCUsMCwwKTstby10cmFuc2Zvcm06c2tldygwZGVnLC02MGRlZykgdHJhbnNsYXRlM2QoLTEwMCUsMCwwKTstbXMtdHJhbnNmb3JtOnNrZXcoMGRlZywtNjBkZWcpIHRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2tldygwZGVnLC02MGRlZykgdHJhbnNsYXRlM2QoLTEwMCUsMCwwKTt0cmFuc2Zvcm06c2tldygwZGVnLC02MGRlZykgdHJhbnNsYXRlM2QoLTEwMCUsMCwwKX0ubGctY3NzMy5sZy1zbGlkZS1za2V3LWNyb3NzLXJldiAubGctaXRlbS5sZy1uZXh0LXNsaWRley1tb3otdHJhbnNmb3JtOnNrZXcoMGRlZywtNjBkZWcpIHRyYW5zbGF0ZTNkKDEwMCUsMCwwKTstby10cmFuc2Zvcm06c2tldygwZGVnLC02MGRlZykgdHJhbnNsYXRlM2QoMTAwJSwwLDApOy1tcy10cmFuc2Zvcm06c2tldygwZGVnLC02MGRlZykgdHJhbnNsYXRlM2QoMTAwJSwwLDApOy13ZWJraXQtdHJhbnNmb3JtOnNrZXcoMGRlZywtNjBkZWcpIHRyYW5zbGF0ZTNkKDEwMCUsMCwwKTt0cmFuc2Zvcm06c2tldygwZGVnLC02MGRlZykgdHJhbnNsYXRlM2QoMTAwJSwwLDApfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctY3Jvc3MtcmV2IC5sZy1pdGVtLmxnLWN1cnJlbnR7LW1vei10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMCwwKTstby10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMCwwKTstbXMtdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDAsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMCwwKTt0cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMCwwKTtvcGFjaXR5OjF9LmxnLWNzczMubGctc2xpZGUtc2tldy1jcm9zcy1yZXYgLmxnLWl0ZW0ubGctY3VycmVudCwubGctY3NzMy5sZy1zbGlkZS1za2V3LWNyb3NzLXJldiAubGctaXRlbS5sZy1uZXh0LXNsaWRlLC5sZy1jc3MzLmxnLXNsaWRlLXNrZXctY3Jvc3MtcmV2IC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7LW1vei10cmFuc2l0aW9uOi1tb3otdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7LW8tdHJhbnNpdGlvbjotby10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctdmVyIC5sZy1pdGVte29wYWNpdHk6MH0ubGctY3NzMy5sZy1zbGlkZS1za2V3LXZlciAubGctaXRlbS5sZy1wcmV2LXNsaWRley1tb3otdHJhbnNmb3JtOnNrZXcoNjBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwtMTAwJSwwKTstby10cmFuc2Zvcm06c2tldyg2MGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLC0xMDAlLDApOy1tcy10cmFuc2Zvcm06c2tldyg2MGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLC0xMDAlLDApOy13ZWJraXQtdHJhbnNmb3JtOnNrZXcoNjBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwtMTAwJSwwKTt0cmFuc2Zvcm06c2tldyg2MGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLC0xMDAlLDApfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctdmVyIC5sZy1pdGVtLmxnLW5leHQtc2xpZGV7LW1vei10cmFuc2Zvcm06c2tldyg2MGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDEwMCUsMCk7LW8tdHJhbnNmb3JtOnNrZXcoNjBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwxMDAlLDApOy1tcy10cmFuc2Zvcm06c2tldyg2MGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDEwMCUsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2tldyg2MGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDEwMCUsMCk7dHJhbnNmb3JtOnNrZXcoNjBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwxMDAlLDApfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctdmVyIC5sZy1pdGVtLmxnLWN1cnJlbnR7LW1vei10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMCwwKTstby10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMCwwKTstbXMtdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDAsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMCwwKTt0cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMCwwKTtvcGFjaXR5OjF9LmxnLWNzczMubGctc2xpZGUtc2tldy12ZXIgLmxnLWl0ZW0ubGctY3VycmVudCwubGctY3NzMy5sZy1zbGlkZS1za2V3LXZlciAubGctaXRlbS5sZy1uZXh0LXNsaWRlLC5sZy1jc3MzLmxnLXNsaWRlLXNrZXctdmVyIC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7LW1vei10cmFuc2l0aW9uOi1tb3otdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7LW8tdHJhbnNpdGlvbjotby10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctdmVyLXJldiAubGctaXRlbXtvcGFjaXR5OjB9LmxnLWNzczMubGctc2xpZGUtc2tldy12ZXItcmV2IC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LW1vei10cmFuc2Zvcm06c2tldygtNjBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwtMTAwJSwwKTstby10cmFuc2Zvcm06c2tldygtNjBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwtMTAwJSwwKTstbXMtdHJhbnNmb3JtOnNrZXcoLTYwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsLTEwMCUsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2tldygtNjBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwtMTAwJSwwKTt0cmFuc2Zvcm06c2tldygtNjBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwtMTAwJSwwKX0ubGctY3NzMy5sZy1zbGlkZS1za2V3LXZlci1yZXYgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZXstbW96LXRyYW5zZm9ybTpza2V3KC02MGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDEwMCUsMCk7LW8tdHJhbnNmb3JtOnNrZXcoLTYwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMTAwJSwwKTstbXMtdHJhbnNmb3JtOnNrZXcoLTYwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMTAwJSwwKTstd2Via2l0LXRyYW5zZm9ybTpza2V3KC02MGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDEwMCUsMCk7dHJhbnNmb3JtOnNrZXcoLTYwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMTAwJSwwKX0ubGctY3NzMy5sZy1zbGlkZS1za2V3LXZlci1yZXYgLmxnLWl0ZW0ubGctY3VycmVudHstbW96LXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwwLDApOy1vLXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwwLDApOy1tcy10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMCwwKTstd2Via2l0LXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwwLDApO3RyYW5zZm9ybTpza2V3KDBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MX0ubGctY3NzMy5sZy1zbGlkZS1za2V3LXZlci1yZXYgLmxnLWl0ZW0ubGctY3VycmVudCwubGctY3NzMy5sZy1zbGlkZS1za2V3LXZlci1yZXYgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwubGctY3NzMy5sZy1zbGlkZS1za2V3LXZlci1yZXYgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczstbW96LXRyYW5zaXRpb246LW1vei10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczstby10cmFuc2l0aW9uOi1vLXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzO3RyYW5zaXRpb246dHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHN9LmxnLWNzczMubGctc2xpZGUtc2tldy12ZXItY3Jvc3MgLmxnLWl0ZW17b3BhY2l0eTowfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctdmVyLWNyb3NzIC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LW1vei10cmFuc2Zvcm06c2tldygwZGVnLDIwZGVnKSB0cmFuc2xhdGUzZCgwLC0xMDAlLDApOy1vLXRyYW5zZm9ybTpza2V3KDBkZWcsMjBkZWcpIHRyYW5zbGF0ZTNkKDAsLTEwMCUsMCk7LW1zLXRyYW5zZm9ybTpza2V3KDBkZWcsMjBkZWcpIHRyYW5zbGF0ZTNkKDAsLTEwMCUsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2tldygwZGVnLDIwZGVnKSB0cmFuc2xhdGUzZCgwLC0xMDAlLDApO3RyYW5zZm9ybTpza2V3KDBkZWcsMjBkZWcpIHRyYW5zbGF0ZTNkKDAsLTEwMCUsMCl9LmxnLWNzczMubGctc2xpZGUtc2tldy12ZXItY3Jvc3MgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZXstbW96LXRyYW5zZm9ybTpza2V3KDBkZWcsMjBkZWcpIHRyYW5zbGF0ZTNkKDAsMTAwJSwwKTstby10cmFuc2Zvcm06c2tldygwZGVnLDIwZGVnKSB0cmFuc2xhdGUzZCgwLDEwMCUsMCk7LW1zLXRyYW5zZm9ybTpza2V3KDBkZWcsMjBkZWcpIHRyYW5zbGF0ZTNkKDAsMTAwJSwwKTstd2Via2l0LXRyYW5zZm9ybTpza2V3KDBkZWcsMjBkZWcpIHRyYW5zbGF0ZTNkKDAsMTAwJSwwKTt0cmFuc2Zvcm06c2tldygwZGVnLDIwZGVnKSB0cmFuc2xhdGUzZCgwLDEwMCUsMCl9LmxnLWNzczMubGctc2xpZGUtc2tldy12ZXItY3Jvc3MgLmxnLWl0ZW0ubGctY3VycmVudHstbW96LXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwwLDApOy1vLXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwwLDApOy1tcy10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMCwwKTstd2Via2l0LXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwwLDApO3RyYW5zZm9ybTpza2V3KDBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MX0ubGctY3NzMy5sZy1zbGlkZS1za2V3LXZlci1jcm9zcyAubGctaXRlbS5sZy1jdXJyZW50LC5sZy1jc3MzLmxnLXNsaWRlLXNrZXctdmVyLWNyb3NzIC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsLmxnLWNzczMubGctc2xpZGUtc2tldy12ZXItY3Jvc3MgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczstbW96LXRyYW5zaXRpb246LW1vei10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczstby10cmFuc2l0aW9uOi1vLXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzO3RyYW5zaXRpb246dHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHN9LmxnLWNzczMubGctc2xpZGUtc2tldy12ZXItY3Jvc3MtcmV2IC5sZy1pdGVte29wYWNpdHk6MH0ubGctY3NzMy5sZy1zbGlkZS1za2V3LXZlci1jcm9zcy1yZXYgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstbW96LXRyYW5zZm9ybTpza2V3KDBkZWcsLTIwZGVnKSB0cmFuc2xhdGUzZCgwLC0xMDAlLDApOy1vLXRyYW5zZm9ybTpza2V3KDBkZWcsLTIwZGVnKSB0cmFuc2xhdGUzZCgwLC0xMDAlLDApOy1tcy10cmFuc2Zvcm06c2tldygwZGVnLC0yMGRlZykgdHJhbnNsYXRlM2QoMCwtMTAwJSwwKTstd2Via2l0LXRyYW5zZm9ybTpza2V3KDBkZWcsLTIwZGVnKSB0cmFuc2xhdGUzZCgwLC0xMDAlLDApO3RyYW5zZm9ybTpza2V3KDBkZWcsLTIwZGVnKSB0cmFuc2xhdGUzZCgwLC0xMDAlLDApfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctdmVyLWNyb3NzLXJldiAubGctaXRlbS5sZy1uZXh0LXNsaWRley1tb3otdHJhbnNmb3JtOnNrZXcoMGRlZywtMjBkZWcpIHRyYW5zbGF0ZTNkKDAsMTAwJSwwKTstby10cmFuc2Zvcm06c2tldygwZGVnLC0yMGRlZykgdHJhbnNsYXRlM2QoMCwxMDAlLDApOy1tcy10cmFuc2Zvcm06c2tldygwZGVnLC0yMGRlZykgdHJhbnNsYXRlM2QoMCwxMDAlLDApOy13ZWJraXQtdHJhbnNmb3JtOnNrZXcoMGRlZywtMjBkZWcpIHRyYW5zbGF0ZTNkKDAsMTAwJSwwKTt0cmFuc2Zvcm06c2tldygwZGVnLC0yMGRlZykgdHJhbnNsYXRlM2QoMCwxMDAlLDApfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctdmVyLWNyb3NzLXJldiAubGctaXRlbS5sZy1jdXJyZW50ey1tb3otdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDAsMCk7LW8tdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDAsMCk7LW1zLXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwwLDApOy13ZWJraXQtdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDAsMCk7dHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDAsMCk7b3BhY2l0eToxfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctdmVyLWNyb3NzLXJldiAubGctaXRlbS5sZy1jdXJyZW50LC5sZy1jc3MzLmxnLXNsaWRlLXNrZXctdmVyLWNyb3NzLXJldiAubGctaXRlbS5sZy1uZXh0LXNsaWRlLC5sZy1jc3MzLmxnLXNsaWRlLXNrZXctdmVyLWNyb3NzLXJldiAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzOy1tb3otdHJhbnNpdGlvbjotbW96LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzOy1vLXRyYW5zaXRpb246LW8tdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwc30ubGctY3NzMy5sZy1sb2xsaXBvcCAubGctaXRlbXtvcGFjaXR5OjB9LmxnLWNzczMubGctbG9sbGlwb3AgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwwLDApfS5sZy1jc3MzLmxnLWxvbGxpcG9wIC5sZy1pdGVtLmxnLW5leHQtc2xpZGV7LW1vei10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApIHNjYWxlKC41KTstby10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApIHNjYWxlKC41KTstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZSguNSk7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApIHNjYWxlKC41KTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApIHNjYWxlKC41KX0ubGctY3NzMy5sZy1sb2xsaXBvcCAubGctaXRlbS5sZy1jdXJyZW50ey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MX0ubGctY3NzMy5sZy1sb2xsaXBvcCAubGctaXRlbS5sZy1jdXJyZW50LC5sZy1jc3MzLmxnLWxvbGxpcG9wIC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsLmxnLWNzczMubGctbG9sbGlwb3AgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczstbW96LXRyYW5zaXRpb246LW1vei10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczstby10cmFuc2l0aW9uOi1vLXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzO3RyYW5zaXRpb246dHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHN9LmxnLWNzczMubGctbG9sbGlwb3AtcmV2IC5sZy1pdGVte29wYWNpdHk6MH0ubGctY3NzMy5sZy1sb2xsaXBvcC1yZXYgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstbW96LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGUoLjUpOy1vLXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGUoLjUpOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApIHNjYWxlKC41KTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGUoLjUpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGUoLjUpfS5sZy1jc3MzLmxnLWxvbGxpcG9wLXJldiAubGctaXRlbS5sZy1uZXh0LXNsaWRley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwwLDApfS5sZy1jc3MzLmxnLWxvbGxpcG9wLXJldiAubGctaXRlbS5sZy1jdXJyZW50ey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MX0ubGctY3NzMy5sZy1sb2xsaXBvcC1yZXYgLmxnLWl0ZW0ubGctY3VycmVudCwubGctY3NzMy5sZy1sb2xsaXBvcC1yZXYgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwubGctY3NzMy5sZy1sb2xsaXBvcC1yZXYgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczstbW96LXRyYW5zaXRpb246LW1vei10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczstby10cmFuc2l0aW9uOi1vLXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzO3RyYW5zaXRpb246dHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHN9LmxnLWNzczMubGctcm90YXRlIC5sZy1pdGVte29wYWNpdHk6MH0ubGctY3NzMy5sZy1yb3RhdGUgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstbW96LXRyYW5zZm9ybTpyb3RhdGUoLTM2MGRlZyk7LW8tdHJhbnNmb3JtOnJvdGF0ZSgtMzYwZGVnKTstbXMtdHJhbnNmb3JtOnJvdGF0ZSgtMzYwZGVnKTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtMzYwZGVnKX0ubGctY3NzMy5sZy1yb3RhdGUgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZXstbW96LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTstby10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7LW1zLXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9LmxnLWNzczMubGctcm90YXRlIC5sZy1pdGVtLmxnLWN1cnJlbnR7LW1vei10cmFuc2Zvcm06cm90YXRlKDApOy1vLXRyYW5zZm9ybTpyb3RhdGUoMCk7LW1zLXRyYW5zZm9ybTpyb3RhdGUoMCk7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCk7b3BhY2l0eToxfS5sZy1jc3MzLmxnLXJvdGF0ZSAubGctaXRlbS5sZy1jdXJyZW50LC5sZy1jc3MzLmxnLXJvdGF0ZSAubGctaXRlbS5sZy1uZXh0LXNsaWRlLC5sZy1jc3MzLmxnLXJvdGF0ZSAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzOy1tb3otdHJhbnNpdGlvbjotbW96LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzOy1vLXRyYW5zaXRpb246LW8tdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwc30ubGctY3NzMy5sZy1yb3RhdGUtcmV2IC5sZy1pdGVte29wYWNpdHk6MH0ubGctY3NzMy5sZy1yb3RhdGUtcmV2IC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LW1vei10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7LW8tdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpOy1tcy10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfS5sZy1jc3MzLmxnLXJvdGF0ZS1yZXYgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZXstbW96LXRyYW5zZm9ybTpyb3RhdGUoLTM2MGRlZyk7LW8tdHJhbnNmb3JtOnJvdGF0ZSgtMzYwZGVnKTstbXMtdHJhbnNmb3JtOnJvdGF0ZSgtMzYwZGVnKTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtMzYwZGVnKX0ubGctY3NzMy5sZy1yb3RhdGUtcmV2IC5sZy1pdGVtLmxnLWN1cnJlbnR7LW1vei10cmFuc2Zvcm06cm90YXRlKDApOy1vLXRyYW5zZm9ybTpyb3RhdGUoMCk7LW1zLXRyYW5zZm9ybTpyb3RhdGUoMCk7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCk7b3BhY2l0eToxfS5sZy1jc3MzLmxnLXJvdGF0ZS1yZXYgLmxnLWl0ZW0ubGctY3VycmVudCwubGctY3NzMy5sZy1yb3RhdGUtcmV2IC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsLmxnLWNzczMubGctcm90YXRlLXJldiAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzOy1tb3otdHJhbnNpdGlvbjotbW96LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzOy1vLXRyYW5zaXRpb246LW8tdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwc30ubGctY3NzMy5sZy10dWJlIC5sZy1pdGVte29wYWNpdHk6MH0ubGctY3NzMy5sZy10dWJlIC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LW1vei10cmFuc2Zvcm06c2NhbGUzZCgxLDAsMSkgdHJhbnNsYXRlM2QoLTEwMCUsMCwwKTstby10cmFuc2Zvcm06c2NhbGUzZCgxLDAsMSkgdHJhbnNsYXRlM2QoLTEwMCUsMCwwKTstbXMtdHJhbnNmb3JtOnNjYWxlM2QoMSwwLDEpIHRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLDAsMSkgdHJhbnNsYXRlM2QoLTEwMCUsMCwwKTt0cmFuc2Zvcm06c2NhbGUzZCgxLDAsMSkgdHJhbnNsYXRlM2QoLTEwMCUsMCwwKX0ubGctY3NzMy5sZy10dWJlIC5sZy1pdGVtLmxnLW5leHQtc2xpZGV7LW1vei10cmFuc2Zvcm06c2NhbGUzZCgxLDAsMSkgdHJhbnNsYXRlM2QoMTAwJSwwLDApOy1vLXRyYW5zZm9ybTpzY2FsZTNkKDEsMCwxKSB0cmFuc2xhdGUzZCgxMDAlLDAsMCk7LW1zLXRyYW5zZm9ybTpzY2FsZTNkKDEsMCwxKSB0cmFuc2xhdGUzZCgxMDAlLDAsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLDAsMSkgdHJhbnNsYXRlM2QoMTAwJSwwLDApO3RyYW5zZm9ybTpzY2FsZTNkKDEsMCwxKSB0cmFuc2xhdGUzZCgxMDAlLDAsMCl9LmxnLWNzczMubGctdHViZSAubGctaXRlbS5sZy1jdXJyZW50ey1tb3otdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpIHRyYW5zbGF0ZTNkKDAsMCwwKTstby10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSkgdHJhbnNsYXRlM2QoMCwwLDApOy1tcy10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSkgdHJhbnNsYXRlM2QoMCwwLDApOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpIHRyYW5zbGF0ZTNkKDAsMCwwKTt0cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSkgdHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MX0ubGctY3NzMy5sZy10dWJlIC5sZy1pdGVtLmxnLWN1cnJlbnQsLmxnLWNzczMubGctdHViZSAubGctaXRlbS5sZy1uZXh0LXNsaWRlLC5sZy1jc3MzLmxnLXR1YmUgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczstbW96LXRyYW5zaXRpb246LW1vei10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczstby10cmFuc2l0aW9uOi1vLXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzO3RyYW5zaXRpb246dHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHN9XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwidmFyIGVzY2FwZSA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jc3MtbG9hZGVyL2xpYi91cmwvZXNjYXBlLmpzXCIpO1xuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5sZy1zdWItaHRtbCwubGctdG9vbGJhcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjQ1KX1AZm9udC1mYWNle2ZvbnQtZmFtaWx5OmxnO3NyYzp1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4uL2ZvbnRzL2xnLmVvdD9uMXozNzNcIikpICsgXCIpO3NyYzp1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4uL2ZvbnRzL2xnLmVvdFwiKSkgKyBcIj8jaWVmaXhuMXozNzMpIGZvcm1hdChcXFwiZW1iZWRkZWQtb3BlbnR5cGVcXFwiKSx1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4uL2ZvbnRzL2xnLndvZmY/bjF6MzczXCIpKSArIFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKSx1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4uL2ZvbnRzL2xnLnR0Zj9uMXozNzNcIikpICsgXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKSx1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4uL2ZvbnRzL2xnLnN2Zz9uMXozNzNcIikpICsgXCIjbGcpIGZvcm1hdChcXFwic3ZnXFxcIik7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtc3R5bGU6bm9ybWFsfS5sZy1pY29ue2ZvbnQtZmFtaWx5OmxnO3NwZWFrOm5vbmU7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6NDAwO2ZvbnQtdmFyaWFudDpub3JtYWw7dGV4dC10cmFuc2Zvcm06bm9uZTtsaW5lLWhlaWdodDoxOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlfS5sZy1hY3Rpb25zIC5sZy1uZXh0LC5sZy1hY3Rpb25zIC5sZy1wcmV2e2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNDUpO2JvcmRlci1yYWRpdXM6MnB4O2NvbG9yOiM5OTk7Y3Vyc29yOnBvaW50ZXI7ZGlzcGxheTpibG9jaztmb250LXNpemU6MjJweDttYXJnaW4tdG9wOi0xMHB4O3BhZGRpbmc6OHB4IDEwcHggOXB4O3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7ei1pbmRleDoxMDgwO2JvcmRlcjpub25lO291dGxpbmU6MH0ubGctYWN0aW9ucyAubGctbmV4dC5kaXNhYmxlZCwubGctYWN0aW9ucyAubGctcHJldi5kaXNhYmxlZHtwb2ludGVyLWV2ZW50czpub25lO29wYWNpdHk6LjV9LmxnLWFjdGlvbnMgLmxnLW5leHQ6aG92ZXIsLmxnLWFjdGlvbnMgLmxnLXByZXY6aG92ZXJ7Y29sb3I6I0ZGRn0ubGctYWN0aW9ucyAubGctbmV4dHtyaWdodDoyMHB4fS5sZy1hY3Rpb25zIC5sZy1uZXh0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcRTA5NVxcXCJ9LmxnLWFjdGlvbnMgLmxnLXByZXZ7bGVmdDoyMHB4fS5sZy1hY3Rpb25zIC5sZy1wcmV2OmFmdGVye2NvbnRlbnQ6XFxcIlxcXFxFMDk0XFxcIn1ALXdlYmtpdC1rZXlmcmFtZXMgbGctcmlnaHQtZW5kezAlLDEwMCV7bGVmdDowfTUwJXtsZWZ0Oi0zMHB4fX1ALW1vei1rZXlmcmFtZXMgbGctcmlnaHQtZW5kezAlLDEwMCV7bGVmdDowfTUwJXtsZWZ0Oi0zMHB4fX1ALW1zLWtleWZyYW1lcyBsZy1yaWdodC1lbmR7MCUsMTAwJXtsZWZ0OjB9NTAle2xlZnQ6LTMwcHh9fUBrZXlmcmFtZXMgbGctcmlnaHQtZW5kezAlLDEwMCV7bGVmdDowfTUwJXtsZWZ0Oi0zMHB4fX1ALXdlYmtpdC1rZXlmcmFtZXMgbGctbGVmdC1lbmR7MCUsMTAwJXtsZWZ0OjB9NTAle2xlZnQ6MzBweH19QC1tb3ota2V5ZnJhbWVzIGxnLWxlZnQtZW5kezAlLDEwMCV7bGVmdDowfTUwJXtsZWZ0OjMwcHh9fUAtbXMta2V5ZnJhbWVzIGxnLWxlZnQtZW5kezAlLDEwMCV7bGVmdDowfTUwJXtsZWZ0OjMwcHh9fUBrZXlmcmFtZXMgbGctbGVmdC1lbmR7MCUsMTAwJXtsZWZ0OjB9NTAle2xlZnQ6MzBweH19LmxnLW91dGVyLmxnLXJpZ2h0LWVuZCAubGctb2JqZWN0ey13ZWJraXQtYW5pbWF0aW9uOmxnLXJpZ2h0LWVuZCAuM3M7LW8tYW5pbWF0aW9uOmxnLXJpZ2h0LWVuZCAuM3M7YW5pbWF0aW9uOmxnLXJpZ2h0LWVuZCAuM3M7cG9zaXRpb246cmVsYXRpdmV9LmxnLW91dGVyLmxnLWxlZnQtZW5kIC5sZy1vYmplY3R7LXdlYmtpdC1hbmltYXRpb246bGctbGVmdC1lbmQgLjNzOy1vLWFuaW1hdGlvbjpsZy1sZWZ0LWVuZCAuM3M7YW5pbWF0aW9uOmxnLWxlZnQtZW5kIC4zcztwb3NpdGlvbjpyZWxhdGl2ZX0ubGctdG9vbGJhcnt6LWluZGV4OjEwODI7bGVmdDowO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3dpZHRoOjEwMCV9LmxnLXRvb2xiYXIgLmxnLWljb257Y29sb3I6Izk5OTtjdXJzb3I6cG9pbnRlcjtmbG9hdDpyaWdodDtmb250LXNpemU6MjRweDtoZWlnaHQ6NDdweDtsaW5lLWhlaWdodDoyN3B4O3BhZGRpbmc6MTBweCAwO3RleHQtYWxpZ246Y2VudGVyO3dpZHRoOjUwcHg7dGV4dC1kZWNvcmF0aW9uOm5vbmUhaW1wb3J0YW50O291dGxpbmU6MDstd2Via2l0LXRyYW5zaXRpb246Y29sb3IgLjJzIGxpbmVhcjstby10cmFuc2l0aW9uOmNvbG9yIC4ycyBsaW5lYXI7dHJhbnNpdGlvbjpjb2xvciAuMnMgbGluZWFyfS5sZy10b29sYmFyIC5sZy1pY29uOmhvdmVye2NvbG9yOiNGRkZ9LmxnLXRvb2xiYXIgLmxnLWNsb3NlOmFmdGVye2NvbnRlbnQ6XFxcIlxcXFxFMDcwXFxcIn0ubGctdG9vbGJhciAubGctZG93bmxvYWQ6YWZ0ZXJ7Y29udGVudDpcXFwiXFxcXEUwRjJcXFwifS5sZy1zdWItaHRtbHtib3R0b206MDtjb2xvcjojRUVFO2ZvbnQtc2l6ZToxNnB4O2xlZnQ6MDtwYWRkaW5nOjEwcHggNDBweDtwb3NpdGlvbjpmaXhlZDtyaWdodDowO3RleHQtYWxpZ246Y2VudGVyO3otaW5kZXg6MTA4MH0ubGctc3ViLWh0bWwgaDR7bWFyZ2luOjA7Zm9udC1zaXplOjEzcHg7Zm9udC13ZWlnaHQ6NzAwfS5sZy1zdWItaHRtbCBwe2ZvbnQtc2l6ZToxMnB4O21hcmdpbjo1cHggMCAwfSNsZy1jb3VudGVye2NvbG9yOiM5OTk7ZGlzcGxheTppbmxpbmUtYmxvY2s7Zm9udC1zaXplOjE2cHg7cGFkZGluZy1sZWZ0OjIwcHg7cGFkZGluZy10b3A6MTJweDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9LmxnLW5leHQsLmxnLXByZXYsLmxnLXRvb2xiYXJ7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAuMzVzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjM1cyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxjb2xvciAuMnMgbGluZWFyOy1tb3otdHJhbnNpdGlvbjotbW96LXRyYW5zZm9ybSAuMzVzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjM1cyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxjb2xvciAuMnMgbGluZWFyOy1vLXRyYW5zaXRpb246LW8tdHJhbnNmb3JtIC4zNXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMzVzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLGNvbG9yIC4ycyBsaW5lYXI7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjM1cyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4zNXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsY29sb3IgLjJzIGxpbmVhcn0ubGctaGlkZS1pdGVtcyAubGctcHJldntvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwcHgsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwcHgsMCwwKX0ubGctaGlkZS1pdGVtcyAubGctbmV4dHtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTBweCwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMHB4LDAsMCl9LmxnLWhpZGUtaXRlbXMgLmxnLXRvb2xiYXJ7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwcHgsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsLTEwcHgsMCl9Ym9keTpub3QoLmxnLWZyb20taGFzaCkgLmxnLW91dGVyLmxnLXN0YXJ0LXpvb20gLmxnLW9iamVjdHstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC41LC41LC41KTt0cmFuc2Zvcm06c2NhbGUzZCguNSwuNSwuNSk7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDI1MG1zIGN1YmljLWJlemllcigwLDAsLjI1LDEpIWltcG9ydGFudDstbW96LXRyYW5zaXRpb246LW1vei10cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAyNTBtcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSFpbXBvcnRhbnQ7LW8tdHJhbnNpdGlvbjotby10cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAyNTBtcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSFpbXBvcnRhbnQ7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAyNTBtcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSFpbXBvcnRhbnQ7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjUwJSA1MCU7LW1vei10cmFuc2Zvcm0tb3JpZ2luOjUwJSA1MCU7LW1zLXRyYW5zZm9ybS1vcmlnaW46NTAlIDUwJTt0cmFuc2Zvcm0tb3JpZ2luOjUwJSA1MCV9Ym9keTpub3QoLmxnLWZyb20taGFzaCkgLmxnLW91dGVyLmxnLXN0YXJ0LXpvb20gLmxnLWl0ZW0ubGctY29tcGxldGUgLmxnLW9iamVjdHstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKTt0cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSk7b3BhY2l0eToxfS5sZy1vdXRlciAubGctdGh1bWItb3V0ZXJ7YmFja2dyb3VuZC1jb2xvcjojMEQwQTBBO2JvdHRvbTowO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7ei1pbmRleDoxMDgwO21heC1oZWlnaHQ6MzUwcHg7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMDAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwMCUsMCk7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIC4yNXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHM7LW1vei10cmFuc2l0aW9uOi1tb3otdHJhbnNmb3JtIC4yNXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHM7LW8tdHJhbnNpdGlvbjotby10cmFuc2Zvcm0gLjI1cyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMjVzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzfS5sZy1vdXRlciAubGctdGh1bWItb3V0ZXIubGctZ3JhYiAubGctdGh1bWItaXRlbXtjdXJzb3I6LXdlYmtpdC1ncmFiO2N1cnNvcjotbW96LWdyYWI7Y3Vyc29yOi1vLWdyYWI7Y3Vyc29yOi1tcy1ncmFiO2N1cnNvcjpncmFifS5sZy1vdXRlciAubGctdGh1bWItb3V0ZXIubGctZ3JhYmJpbmcgLmxnLXRodW1iLWl0ZW17Y3Vyc29yOm1vdmU7Y3Vyc29yOi13ZWJraXQtZ3JhYmJpbmc7Y3Vyc29yOi1tb3otZ3JhYmJpbmc7Y3Vyc29yOi1vLWdyYWJiaW5nO2N1cnNvcjotbXMtZ3JhYmJpbmc7Y3Vyc29yOmdyYWJiaW5nfS5sZy1vdXRlciAubGctdGh1bWItb3V0ZXIubGctZHJhZ2dpbmcgLmxnLXRodW1iey13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjowcyFpbXBvcnRhbnQ7dHJhbnNpdGlvbi1kdXJhdGlvbjowcyFpbXBvcnRhbnR9LmxnLW91dGVyLmxnLXRodW1iLW9wZW4gLmxnLXRodW1iLW91dGVyey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApfS5sZy1vdXRlciAubGctdGh1bWJ7cGFkZGluZzoxMHB4IDA7aGVpZ2h0OjEwMCU7bWFyZ2luLWJvdHRvbTotNXB4fS5sZy1vdXRlciAubGctdGh1bWItaXRlbXtjdXJzb3I6cG9pbnRlcjtmbG9hdDpsZWZ0O292ZXJmbG93OmhpZGRlbjtoZWlnaHQ6MTAwJTtib3JkZXI6MnB4IHNvbGlkICNGRkY7Ym9yZGVyLXJhZGl1czo0cHg7bWFyZ2luLWJvdHRvbTo1cHh9QG1lZGlhIChtaW4td2lkdGg6MTAyNXB4KXsubGctb3V0ZXIgLmxnLXRodW1iLWl0ZW17LXdlYmtpdC10cmFuc2l0aW9uOmJvcmRlci1jb2xvciAuMjVzIGVhc2U7LW8tdHJhbnNpdGlvbjpib3JkZXItY29sb3IgLjI1cyBlYXNlO3RyYW5zaXRpb246Ym9yZGVyLWNvbG9yIC4yNXMgZWFzZX19LmxnLW91dGVyIC5sZy10aHVtYi1pdGVtLmFjdGl2ZSwubGctb3V0ZXIgLmxnLXRodW1iLWl0ZW06aG92ZXJ7Ym9yZGVyLWNvbG9yOiNhOTA3MDd9LmxnLW91dGVyIC5sZy10aHVtYi1pdGVtIGltZ3t3aWR0aDoxMDAlO2hlaWdodDoxMDAlO29iamVjdC1maXQ6Y292ZXJ9LmxnLW91dGVyLmxnLWhhcy10aHVtYiAubGctaXRlbXtwYWRkaW5nLWJvdHRvbToxMjBweH0ubGctb3V0ZXIubGctY2FuLXRvZ2dsZSAubGctaXRlbXtwYWRkaW5nLWJvdHRvbTowfS5sZy1vdXRlci5sZy1wdWxsLWNhcHRpb24tdXAgLmxnLXN1Yi1odG1sey13ZWJraXQtdHJhbnNpdGlvbjpib3R0b20gLjI1cyBlYXNlOy1vLXRyYW5zaXRpb246Ym90dG9tIC4yNXMgZWFzZTt0cmFuc2l0aW9uOmJvdHRvbSAuMjVzIGVhc2V9LmxnLW91dGVyLmxnLXB1bGwtY2FwdGlvbi11cC5sZy10aHVtYi1vcGVuIC5sZy1zdWItaHRtbHtib3R0b206MTAwcHh9LmxnLW91dGVyIC5sZy10b29nbGUtdGh1bWJ7YmFja2dyb3VuZC1jb2xvcjojMEQwQTBBO2JvcmRlci1yYWRpdXM6MnB4IDJweCAwIDA7Y29sb3I6Izk5OTtjdXJzb3I6cG9pbnRlcjtmb250LXNpemU6MjRweDtoZWlnaHQ6MzlweDtsaW5lLWhlaWdodDoyN3B4O3BhZGRpbmc6NXB4IDA7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MjBweDt0ZXh0LWFsaWduOmNlbnRlcjt0b3A6LTM5cHg7d2lkdGg6NTBweH0ubGctb3V0ZXIgLmxnLXRvb2dsZS10aHVtYjpob3ZlciwubGctb3V0ZXIubGctZHJvcGRvd24tYWN0aXZlICNsZy1zaGFyZXtjb2xvcjojRkZGfS5sZy1vdXRlciAubGctdG9vZ2xlLXRodW1iOmFmdGVye2NvbnRlbnQ6XFxcIlxcXFxFMUZGXFxcIn0ubGctb3V0ZXIgLmxnLXZpZGVvLWNvbnR7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246bWlkZGxlO21heC13aWR0aDoxMTQwcHg7bWF4LWhlaWdodDoxMDAlO3dpZHRoOjEwMCU7cGFkZGluZzowIDVweH0ubGctb3V0ZXIgLmxnLXZpZGVve3dpZHRoOjEwMCU7aGVpZ2h0OjA7cGFkZGluZy1ib3R0b206NTYuMjUlO292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjpyZWxhdGl2ZX0ubGctb3V0ZXIgLmxnLXZpZGVvIC5sZy1vYmplY3R7ZGlzcGxheTppbmxpbmUtYmxvY2s7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3dpZHRoOjEwMCUhaW1wb3J0YW50O2hlaWdodDoxMDAlIWltcG9ydGFudH0ubGctb3V0ZXIgLmxnLXZpZGVvIC5sZy12aWRlby1wbGF5e3dpZHRoOjg0cHg7aGVpZ2h0OjU5cHg7cG9zaXRpb246YWJzb2x1dGU7bGVmdDo1MCU7dG9wOjUwJTttYXJnaW4tbGVmdDotNDJweDttYXJnaW4tdG9wOi0zMHB4O3otaW5kZXg6MTA4MDtjdXJzb3I6cG9pbnRlcn0ubGctb3V0ZXIgLmxnLWhhcy1pZnJhbWUgLmxnLXZpZGVvey13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNoO292ZXJmbG93OmF1dG99LmxnLW91dGVyIC5sZy1oYXMtdmltZW8gLmxnLXZpZGVvLXBsYXl7YmFja2dyb3VuZDp1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4uL2ltZy92aW1lby1wbGF5LnBuZ1wiKSkgKyBcIikgbm8tcmVwZWF0fS5sZy1vdXRlciAubGctaGFzLXZpbWVvOmhvdmVyIC5sZy12aWRlby1wbGF5e2JhY2tncm91bmQ6dXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuLi9pbWcvdmltZW8tcGxheS5wbmdcIikpICsgXCIpIDAgLTU4cHggbm8tcmVwZWF0fS5sZy1vdXRlciAubGctaGFzLWh0bWw1IC5sZy12aWRlby1wbGF5e2JhY2tncm91bmQ6dXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuLi9pbWcvdmlkZW8tcGxheS5wbmdcIikpICsgXCIpIG5vLXJlcGVhdDtoZWlnaHQ6NjRweDttYXJnaW4tbGVmdDotMzJweDttYXJnaW4tdG9wOi0zMnB4O3dpZHRoOjY0cHg7b3BhY2l0eTouOH0ubGctb3V0ZXIgLmxnLWhhcy1odG1sNTpob3ZlciAubGctdmlkZW8tcGxheXtvcGFjaXR5OjF9LmxnLW91dGVyIC5sZy1oYXMteW91dHViZSAubGctdmlkZW8tcGxheXtiYWNrZ3JvdW5kOnVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vaW1nL3lvdXR1YmUtcGxheS5wbmdcIikpICsgXCIpIG5vLXJlcGVhdH0ubGctb3V0ZXIgLmxnLWhhcy15b3V0dWJlOmhvdmVyIC5sZy12aWRlby1wbGF5e2JhY2tncm91bmQ6dXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuLi9pbWcveW91dHViZS1wbGF5LnBuZ1wiKSkgKyBcIikgMCAtNjBweCBuby1yZXBlYXR9LmxnLW91dGVyIC5sZy12aWRlby1vYmplY3R7d2lkdGg6MTAwJSFpbXBvcnRhbnQ7aGVpZ2h0OjEwMCUhaW1wb3J0YW50O3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MH0ubGctb3V0ZXIgLmxnLWhhcy12aWRlbyAubGctdmlkZW8tb2JqZWN0e3Zpc2liaWxpdHk6aGlkZGVufS5sZy1vdXRlciAubGctaGFzLXZpZGVvLmxnLXZpZGVvLXBsYXlpbmcgLmxnLW9iamVjdCwubGctb3V0ZXIgLmxnLWhhcy12aWRlby5sZy12aWRlby1wbGF5aW5nIC5sZy12aWRlby1wbGF5e2Rpc3BsYXk6bm9uZX0ubGctb3V0ZXIgLmxnLWhhcy12aWRlby5sZy12aWRlby1wbGF5aW5nIC5sZy12aWRlby1vYmplY3R7dmlzaWJpbGl0eTp2aXNpYmxlfS5sZy1wcm9ncmVzcy1iYXJ7YmFja2dyb3VuZC1jb2xvcjojMzMzO2hlaWdodDo1cHg7bGVmdDowO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3dpZHRoOjEwMCU7ei1pbmRleDoxMDgzO29wYWNpdHk6MDstd2Via2l0LXRyYW5zaXRpb246b3BhY2l0eSA4MG1zIGVhc2UgMHM7LW1vei10cmFuc2l0aW9uOm9wYWNpdHkgODBtcyBlYXNlIDBzOy1vLXRyYW5zaXRpb246b3BhY2l0eSA4MG1zIGVhc2UgMHM7dHJhbnNpdGlvbjpvcGFjaXR5IDgwbXMgZWFzZSAwc30ubGctcHJvZ3Jlc3MtYmFyIC5sZy1wcm9ncmVzc3tiYWNrZ3JvdW5kLWNvbG9yOiNhOTA3MDc7aGVpZ2h0OjVweDt3aWR0aDowfS5sZy1wcm9ncmVzcy1iYXIubGctc3RhcnQgLmxnLXByb2dyZXNze3dpZHRoOjEwMCV9LmxnLXNob3ctYXV0b3BsYXkgLmxnLXByb2dyZXNzLWJhcntvcGFjaXR5OjF9LmxnLWF1dG9wbGF5LWJ1dHRvbjphZnRlcntjb250ZW50OlxcXCJcXFxcRTAxRFxcXCJ9LmxnLXNob3ctYXV0b3BsYXkgLmxnLWF1dG9wbGF5LWJ1dHRvbjphZnRlcntjb250ZW50OlxcXCJcXFxcRTAxQVxcXCJ9LmxnLW91dGVyLmxnLWNzczMubGctem9vbS1kcmFnZ2luZyAubGctaXRlbS5sZy1jb21wbGV0ZS5sZy16b29tYWJsZSAubGctaW1hZ2UsLmxnLW91dGVyLmxnLWNzczMubGctem9vbS1kcmFnZ2luZyAubGctaXRlbS5sZy1jb21wbGV0ZS5sZy16b29tYWJsZSAubGctaW1nLXdyYXB7LXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOjBzO3RyYW5zaXRpb24tZHVyYXRpb246MHN9LmxnLW91dGVyLmxnLXVzZS10cmFuc2l0aW9uLWZvci16b29tIC5sZy1pdGVtLmxnLWNvbXBsZXRlLmxnLXpvb21hYmxlIC5sZy1pbWctd3JhcHstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gLjNzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzOy1tb3otdHJhbnNpdGlvbjotbW96LXRyYW5zZm9ybSAuM3MgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHM7LW8tdHJhbnNpdGlvbjotby10cmFuc2Zvcm0gLjNzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzO3RyYW5zaXRpb246dHJhbnNmb3JtIC4zcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwc30ubGctb3V0ZXIubGctdXNlLWxlZnQtZm9yLXpvb20gLmxnLWl0ZW0ubGctY29tcGxldGUubGctem9vbWFibGUgLmxnLWltZy13cmFwey13ZWJraXQtdHJhbnNpdGlvbjpsZWZ0IC4zcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyx0b3AgLjNzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzOy1tb3otdHJhbnNpdGlvbjpsZWZ0IC4zcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyx0b3AgLjNzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzOy1vLXRyYW5zaXRpb246bGVmdCAuM3MgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsdG9wIC4zcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwczt0cmFuc2l0aW9uOmxlZnQgLjNzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLHRvcCAuM3MgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHN9LmxnLW91dGVyIC5sZy1pdGVtLmxnLWNvbXBsZXRlLmxnLXpvb21hYmxlIC5sZy1pbWctd3JhcHstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKTstd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuOy1tb3otYmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47YmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW59LmxnLW91dGVyIC5sZy1pdGVtLmxnLWNvbXBsZXRlLmxnLXpvb21hYmxlIC5sZy1pbWFnZXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKTt0cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSk7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIC4zcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xNXMhaW1wb3J0YW50Oy1tb3otdHJhbnNpdGlvbjotbW96LXRyYW5zZm9ybSAuM3MgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMTVzIWltcG9ydGFudDstby10cmFuc2l0aW9uOi1vLXRyYW5zZm9ybSAuM3MgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMTVzIWltcG9ydGFudDt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuM3MgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMTVzIWltcG9ydGFudDstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46MCAwOy1tb3otdHJhbnNmb3JtLW9yaWdpbjowIDA7LW1zLXRyYW5zZm9ybS1vcmlnaW46MCAwO3RyYW5zZm9ybS1vcmlnaW46MCAwOy13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47LW1vei1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtiYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbn0jbGctem9vbS1pbjphZnRlcntjb250ZW50OlxcXCJcXFxcRTMxMVxcXCJ9I2xnLWFjdHVhbC1zaXple2ZvbnQtc2l6ZToyMHB4fSNsZy1hY3R1YWwtc2l6ZTphZnRlcntjb250ZW50OlxcXCJcXFxcRTAzM1xcXCJ9I2xnLXpvb20tb3V0e29wYWNpdHk6LjU7cG9pbnRlci1ldmVudHM6bm9uZX0jbGctem9vbS1vdXQ6YWZ0ZXJ7Y29udGVudDpcXFwiXFxcXEUzMTJcXFwifS5sZy16b29tZWQgI2xnLXpvb20tb3V0e29wYWNpdHk6MTtwb2ludGVyLWV2ZW50czphdXRvfS5sZy1vdXRlciAubGctcGFnZXItb3V0ZXJ7Ym90dG9tOjYwcHg7bGVmdDowO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7dGV4dC1hbGlnbjpjZW50ZXI7ei1pbmRleDoxMDgwO2hlaWdodDoxMHB4fS5sZy1vdXRlciAubGctcGFnZXItb3V0ZXIubGctcGFnZXItaG92ZXIgLmxnLXBhZ2VyLWNvbnR7b3ZlcmZsb3c6dmlzaWJsZX0ubGctb3V0ZXIgLmxnLXBhZ2VyLWNvbnR7Y3Vyc29yOnBvaW50ZXI7ZGlzcGxheTppbmxpbmUtYmxvY2s7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOnJlbGF0aXZlO3ZlcnRpY2FsLWFsaWduOnRvcDttYXJnaW46MCA1cHh9LmxnLW91dGVyIC5sZy1wYWdlci1jb250OmhvdmVyIC5sZy1wYWdlci10aHVtYi1jb250e29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKX0ubGctb3V0ZXIgLmxnLXBhZ2VyLWNvbnQubGctcGFnZXItYWN0aXZlIC5sZy1wYWdlcntib3gtc2hhZG93OjAgMCAwIDJweCAjZmZmIGluc2V0fS5sZy1vdXRlciAubGctcGFnZXItdGh1bWItY29udHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6I0ZGRjtib3R0b206MTAwJTtoZWlnaHQ6ODNweDtsZWZ0OjA7bWFyZ2luLWJvdHRvbToyMHB4O21hcmdpbi1sZWZ0Oi02MHB4O29wYWNpdHk6MDtwYWRkaW5nOjVweDtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMjBweDtib3JkZXItcmFkaXVzOjNweDstd2Via2l0LXRyYW5zaXRpb246b3BhY2l0eSAuMTVzIGVhc2UgMHMsLXdlYmtpdC10cmFuc2Zvcm0gLjE1cyBlYXNlIDBzOy1tb3otdHJhbnNpdGlvbjpvcGFjaXR5IC4xNXMgZWFzZSAwcywtbW96LXRyYW5zZm9ybSAuMTVzIGVhc2UgMHM7LW8tdHJhbnNpdGlvbjpvcGFjaXR5IC4xNXMgZWFzZSAwcywtby10cmFuc2Zvcm0gLjE1cyBlYXNlIDBzO3RyYW5zaXRpb246b3BhY2l0eSAuMTVzIGVhc2UgMHMsdHJhbnNmb3JtIC4xNXMgZWFzZSAwczstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDVweCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCw1cHgsMCl9LmxnLW91dGVyIC5sZy1wYWdlci10aHVtYi1jb250IGltZ3t3aWR0aDoxMDAlO2hlaWdodDoxMDAlfS5sZy1vdXRlciAubGctcGFnZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LC41KTtib3JkZXItcmFkaXVzOjUwJTtib3gtc2hhZG93OjAgMCAwIDhweCByZ2JhKDI1NSwyNTUsMjU1LC43KSBpbnNldDtkaXNwbGF5OmJsb2NrO2hlaWdodDoxMnB4Oy13ZWJraXQtdHJhbnNpdGlvbjpib3gtc2hhZG93IC4zcyBlYXNlIDBzOy1vLXRyYW5zaXRpb246Ym94LXNoYWRvdyAuM3MgZWFzZSAwczt0cmFuc2l0aW9uOmJveC1zaGFkb3cgLjNzIGVhc2UgMHM7d2lkdGg6MTJweH0ubGctb3V0ZXIgLmxnLXBhZ2VyOmZvY3VzLC5sZy1vdXRlciAubGctcGFnZXI6aG92ZXJ7Ym94LXNoYWRvdzowIDAgMCA4cHggI2ZmZiBpbnNldH0ubGctb3V0ZXIgLmxnLWNhcmV0e2JvcmRlci1sZWZ0OjEwcHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLXJpZ2h0OjEwcHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLXRvcDoxMHB4IGRhc2hlZDtib3R0b206LTEwcHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7aGVpZ2h0OjA7bGVmdDo1MCU7bWFyZ2luLWxlZnQ6LTVweDtwb3NpdGlvbjphYnNvbHV0ZTt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7d2lkdGg6MH0ubGctZnVsbHNjcmVlbjphZnRlcntjb250ZW50OlxcXCJcXFxcRTIwQ1xcXCJ9LmxnLWZ1bGxzY3JlZW4tb24gLmxnLWZ1bGxzY3JlZW46YWZ0ZXJ7Y29udGVudDpcXFwiXFxcXEUyMERcXFwifS5sZy1vdXRlciAjbGctZHJvcGRvd24tb3ZlcmxheXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjI1KTtib3R0b206MDtjdXJzb3I6ZGVmYXVsdDtsZWZ0OjA7cG9zaXRpb246Zml4ZWQ7cmlnaHQ6MDt0b3A6MDt6LWluZGV4OjEwODE7b3BhY2l0eTowO3Zpc2liaWxpdHk6aGlkZGVuOy13ZWJraXQtdHJhbnNpdGlvbjp2aXNpYmlsaXR5IDBzIGxpbmVhciAuMThzLG9wYWNpdHkgLjE4cyBsaW5lYXIgMHM7LW8tdHJhbnNpdGlvbjp2aXNpYmlsaXR5IDBzIGxpbmVhciAuMThzLG9wYWNpdHkgLjE4cyBsaW5lYXIgMHM7dHJhbnNpdGlvbjp2aXNpYmlsaXR5IDBzIGxpbmVhciAuMThzLG9wYWNpdHkgLjE4cyBsaW5lYXIgMHN9LmxnLW91dGVyLmxnLWRyb3Bkb3duLWFjdGl2ZSAjbGctZHJvcGRvd24tb3ZlcmxheSwubGctb3V0ZXIubGctZHJvcGRvd24tYWN0aXZlIC5sZy1kcm9wZG93bnstd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6MHM7dHJhbnNpdGlvbi1kZWxheTowczstbW96LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7LW8tdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKTstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKTtvcGFjaXR5OjE7dmlzaWJpbGl0eTp2aXNpYmxlfS5sZy1vdXRlciAubGctZHJvcGRvd257YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1yYWRpdXM6MnB4O2ZvbnQtc2l6ZToxNHB4O2xpc3Qtc3R5bGUtdHlwZTpub25lO21hcmdpbjowO3BhZGRpbmc6MTBweCAwO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7dGV4dC1hbGlnbjpsZWZ0O3RvcDo1MHB4O29wYWNpdHk6MDt2aXNpYmlsaXR5OmhpZGRlbjstbW96LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDVweCwwKTstby10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCw1cHgsMCk7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDVweCwwKTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDVweCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCw1cHgsMCk7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIC4xOHMgbGluZWFyIDBzLHZpc2liaWxpdHkgMHMgbGluZWFyIC41cyxvcGFjaXR5IC4xOHMgbGluZWFyIDBzOy1tb3otdHJhbnNpdGlvbjotbW96LXRyYW5zZm9ybSAuMThzIGxpbmVhciAwcyx2aXNpYmlsaXR5IDBzIGxpbmVhciAuNXMsb3BhY2l0eSAuMThzIGxpbmVhciAwczstby10cmFuc2l0aW9uOi1vLXRyYW5zZm9ybSAuMThzIGxpbmVhciAwcyx2aXNpYmlsaXR5IDBzIGxpbmVhciAuNXMsb3BhY2l0eSAuMThzIGxpbmVhciAwczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMThzIGxpbmVhciAwcyx2aXNpYmlsaXR5IDBzIGxpbmVhciAuNXMsb3BhY2l0eSAuMThzIGxpbmVhciAwc30ubGctb3V0ZXIgLmxnLWRyb3Bkb3duOmFmdGVye2NvbnRlbnQ6XFxcIlxcXCI7ZGlzcGxheTpibG9jaztoZWlnaHQ6MDt3aWR0aDowO3Bvc2l0aW9uOmFic29sdXRlO2JvcmRlcjo4cHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLWJvdHRvbS1jb2xvcjojRkZGO3JpZ2h0OjE2cHg7dG9wOi0xNnB4fS5sZy1vdXRlciAubGctZHJvcGRvd24+bGk6bGFzdC1jaGlsZHttYXJnaW4tYm90dG9tOjB9LmxnLW91dGVyIC5sZy1kcm9wZG93bj5saTpob3ZlciAubGctaWNvbiwubGctb3V0ZXIgLmxnLWRyb3Bkb3duPmxpOmhvdmVyIGF7Y29sb3I6IzMzM30ubGctb3V0ZXIgLmxnLWRyb3Bkb3duIGF7Y29sb3I6IzMzMztkaXNwbGF5OmJsb2NrO3doaXRlLXNwYWNlOnByZTtwYWRkaW5nOjRweCAxMnB4O2ZvbnQtZmFtaWx5OlxcXCJPcGVuIFNhbnNcXFwiLFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEycHh9LmxnLW91dGVyIC5sZy1kcm9wZG93biBhOmhvdmVye2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMDcpfS5sZy1vdXRlciAubGctZHJvcGRvd24gLmxnLWRyb3Bkb3duLXRleHR7ZGlzcGxheTppbmxpbmUtYmxvY2s7bGluZS1oZWlnaHQ6MTttYXJnaW4tdG9wOi0zcHg7dmVydGljYWwtYWxpZ246bWlkZGxlfS5sZy1vdXRlciAubGctZHJvcGRvd24gLmxnLWljb257Y29sb3I6IzMzMztkaXNwbGF5OmlubGluZS1ibG9jaztmbG9hdDpub25lO2ZvbnQtc2l6ZToyMHB4O2hlaWdodDphdXRvO2xpbmUtaGVpZ2h0OjE7bWFyZ2luLXJpZ2h0OjhweDtwYWRkaW5nOjA7dmVydGljYWwtYWxpZ246bWlkZGxlO3dpZHRoOmF1dG99LmxnLW91dGVyLC5sZy1vdXRlciAubGcsLmxnLW91dGVyIC5sZy1pbm5lcnt3aWR0aDoxMDAlO2hlaWdodDoxMDAlfS5sZy1vdXRlciAjbGctc2hhcmV7cG9zaXRpb246cmVsYXRpdmV9LmxnLW91dGVyICNsZy1zaGFyZTphZnRlcntjb250ZW50OlxcXCJcXFxcRTgwRFxcXCJ9LmxnLW91dGVyICNsZy1zaGFyZS1mYWNlYm9vayAubGctaWNvbntjb2xvcjojM2I1OTk4fS5sZy1vdXRlciAjbGctc2hhcmUtZmFjZWJvb2sgLmxnLWljb246YWZ0ZXJ7Y29udGVudDpcXFwiXFxcXEU5MDFcXFwifS5sZy1vdXRlciAjbGctc2hhcmUtdHdpdHRlciAubGctaWNvbntjb2xvcjojMDBhY2VkfS5sZy1vdXRlciAjbGctc2hhcmUtdHdpdHRlciAubGctaWNvbjphZnRlcntjb250ZW50OlxcXCJcXFxcRTkwNFxcXCJ9LmxnLW91dGVyICNsZy1zaGFyZS1nb29nbGVwbHVzIC5sZy1pY29ue2NvbG9yOiNkZDRiMzl9LmxnLW91dGVyICNsZy1zaGFyZS1nb29nbGVwbHVzIC5sZy1pY29uOmFmdGVye2NvbnRlbnQ6XFxcIlxcXFxFOTAyXFxcIn0ubGctb3V0ZXIgI2xnLXNoYXJlLXBpbnRlcmVzdCAubGctaWNvbntjb2xvcjojY2IyMDI3fS5sZy1vdXRlciAjbGctc2hhcmUtcGludGVyZXN0IC5sZy1pY29uOmFmdGVye2NvbnRlbnQ6XFxcIlxcXFxFOTAzXFxcIn0ubGctZ3JvdXA6YWZ0ZXJ7Y29udGVudDpcXFwiXFxcIjtkaXNwbGF5OnRhYmxlO2NsZWFyOmJvdGh9LmxnLW91dGVye3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDt6LWluZGV4OjEwNTA7dGV4dC1hbGlnbjpsZWZ0O29wYWNpdHk6MDstd2Via2l0LXRyYW5zaXRpb246b3BhY2l0eSAuMTVzIGVhc2UgMHM7LW8tdHJhbnNpdGlvbjpvcGFjaXR5IC4xNXMgZWFzZSAwczt0cmFuc2l0aW9uOm9wYWNpdHkgLjE1cyBlYXNlIDBzfS5sZy1vdXRlciAqey13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94Oy1tb3otYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubGctb3V0ZXIubGctdmlzaWJsZXtvcGFjaXR5OjF9LmxnLW91dGVyLmxnLWNzczMgLmxnLWl0ZW0ubGctY3VycmVudCwubGctb3V0ZXIubGctY3NzMyAubGctaXRlbS5sZy1uZXh0LXNsaWRlLC5sZy1vdXRlci5sZy1jc3MzIC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOmluaGVyaXQhaW1wb3J0YW50O3RyYW5zaXRpb24tZHVyYXRpb246aW5oZXJpdCFpbXBvcnRhbnQ7LXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjppbmhlcml0IWltcG9ydGFudDt0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjppbmhlcml0IWltcG9ydGFudH0ubGctb3V0ZXIubGctY3NzMy5sZy1kcmFnZ2luZyAubGctaXRlbS5sZy1jdXJyZW50LC5sZy1vdXRlci5sZy1jc3MzLmxnLWRyYWdnaW5nIC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsLmxnLW91dGVyLmxnLWNzczMubGctZHJhZ2dpbmcgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246MHMhaW1wb3J0YW50O3RyYW5zaXRpb24tZHVyYXRpb246MHMhaW1wb3J0YW50O29wYWNpdHk6MX0ubGctb3V0ZXIubGctZ3JhYiBpbWcubGctb2JqZWN0e2N1cnNvcjotd2Via2l0LWdyYWI7Y3Vyc29yOi1tb3otZ3JhYjtjdXJzb3I6LW8tZ3JhYjtjdXJzb3I6LW1zLWdyYWI7Y3Vyc29yOmdyYWJ9LmxnLW91dGVyLmxnLWdyYWJiaW5nIGltZy5sZy1vYmplY3R7Y3Vyc29yOm1vdmU7Y3Vyc29yOi13ZWJraXQtZ3JhYmJpbmc7Y3Vyc29yOi1tb3otZ3JhYmJpbmc7Y3Vyc29yOi1vLWdyYWJiaW5nO2N1cnNvcjotbXMtZ3JhYmJpbmc7Y3Vyc29yOmdyYWJiaW5nfS5sZy1vdXRlciAubGd7cG9zaXRpb246cmVsYXRpdmU7b3ZlcmZsb3c6aGlkZGVuO21hcmdpbi1sZWZ0OmF1dG87bWFyZ2luLXJpZ2h0OmF1dG87bWF4LXdpZHRoOjEwMCU7bWF4LWhlaWdodDoxMDAlfS5sZy1vdXRlciAubGctaW5uZXJ7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3RvcDowO3doaXRlLXNwYWNlOm5vd3JhcH0ubGctb3V0ZXIgLmxnLWl0ZW17YmFja2dyb3VuZDp1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4uL2ltZy9sb2FkaW5nLmdpZlwiKSkgKyBcIikgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7ZGlzcGxheTpub25lIWltcG9ydGFudH0ubGctb3V0ZXIubGctY3NzIC5sZy1jdXJyZW50LC5sZy1vdXRlci5sZy1jc3MzIC5sZy1jdXJyZW50LC5sZy1vdXRlci5sZy1jc3MzIC5sZy1uZXh0LXNsaWRlLC5sZy1vdXRlci5sZy1jc3MzIC5sZy1wcmV2LXNsaWRle2Rpc3BsYXk6aW5saW5lLWJsb2NrIWltcG9ydGFudH0ubGctb3V0ZXIgLmxnLWltZy13cmFwLC5sZy1vdXRlciAubGctaXRlbXtkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWFsaWduOmNlbnRlcjtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlfS5sZy1vdXRlciAubGctaW1nLXdyYXA6YmVmb3JlLC5sZy1vdXRlciAubGctaXRlbTpiZWZvcmV7Y29udGVudDpcXFwiXFxcIjtkaXNwbGF5OmlubGluZS1ibG9jaztoZWlnaHQ6NTAlO3dpZHRoOjFweDttYXJnaW4tcmlnaHQ6LTFweH0ubGctb3V0ZXIgLmxnLWltZy13cmFwe3Bvc2l0aW9uOmFic29sdXRlO3BhZGRpbmc6MCA1cHg7bGVmdDowO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjB9LmxnLW91dGVyIC5sZy1pdGVtLmxnLWNvbXBsZXRle2JhY2tncm91bmQtaW1hZ2U6bm9uZX0ubGctb3V0ZXIgLmxnLWl0ZW0ubGctY3VycmVudHt6LWluZGV4OjEwNjB9LmxnLW91dGVyIC5sZy1pbWFnZXtkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7bWF4LXdpZHRoOjEwMCU7bWF4LWhlaWdodDoxMDAlO3dpZHRoOmF1dG8haW1wb3J0YW50O2hlaWdodDphdXRvIWltcG9ydGFudH0ubGctb3V0ZXIubGctc2hvdy1hZnRlci1sb2FkIC5sZy1pdGVtIC5sZy1vYmplY3QsLmxnLW91dGVyLmxnLXNob3ctYWZ0ZXItbG9hZCAubGctaXRlbSAubGctdmlkZW8tcGxheXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2l0aW9uOm9wYWNpdHkgLjE1cyBlYXNlIDBzOy1vLXRyYW5zaXRpb246b3BhY2l0eSAuMTVzIGVhc2UgMHM7dHJhbnNpdGlvbjpvcGFjaXR5IC4xNXMgZWFzZSAwc30ubGctb3V0ZXIubGctc2hvdy1hZnRlci1sb2FkIC5sZy1pdGVtLmxnLWNvbXBsZXRlIC5sZy1vYmplY3QsLmxnLW91dGVyLmxnLXNob3ctYWZ0ZXItbG9hZCAubGctaXRlbS5sZy1jb21wbGV0ZSAubGctdmlkZW8tcGxheXtvcGFjaXR5OjF9LmxnLW91dGVyIC5sZy1lbXB0eS1odG1sLC5sZy1vdXRlci5sZy1oaWRlLWRvd25sb2FkICNsZy1kb3dubG9hZHtkaXNwbGF5Om5vbmV9LmxnLWJhY2tkcm9we3Bvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO3otaW5kZXg6MTA0MDtiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNpdGlvbjpvcGFjaXR5IC4xNXMgZWFzZSAwczstby10cmFuc2l0aW9uOm9wYWNpdHkgLjE1cyBlYXNlIDBzO3RyYW5zaXRpb246b3BhY2l0eSAuMTVzIGVhc2UgMHN9LmxnLWJhY2tkcm9wLmlue29wYWNpdHk6MX0ubGctY3NzMy5sZy1uby10cmFucyAubGctY3VycmVudCwubGctY3NzMy5sZy1uby10cmFucyAubGctbmV4dC1zbGlkZSwubGctY3NzMy5sZy1uby10cmFucyAubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zaXRpb246bm9uZSAwcyBlYXNlIDBzIWltcG9ydGFudDstbW96LXRyYW5zaXRpb246bm9uZSAwcyBlYXNlIDBzIWltcG9ydGFudDstby10cmFuc2l0aW9uOm5vbmUgMHMgZWFzZSAwcyFpbXBvcnRhbnQ7dHJhbnNpdGlvbjpub25lIDBzIGVhc2UgMHMhaW1wb3J0YW50fS5sZy1jc3MzLmxnLXVzZS1jc3MzIC5sZy1pdGVtLC5sZy1jc3MzLmxnLXVzZS1sZWZ0IC5sZy1pdGVtey13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47LW1vei1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtiYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbn0ubGctY3NzMy5sZy1mYWRlIC5sZy1pdGVte29wYWNpdHk6MH0ubGctY3NzMy5sZy1mYWRlIC5sZy1pdGVtLmxnLWN1cnJlbnR7b3BhY2l0eToxfS5sZy1jc3MzLmxnLWZhZGUgLmxnLWl0ZW0ubGctY3VycmVudCwubGctY3NzMy5sZy1mYWRlIC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsLmxnLWNzczMubGctZmFkZSAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNpdGlvbjpvcGFjaXR5IC4xcyBlYXNlIDBzOy1tb3otdHJhbnNpdGlvbjpvcGFjaXR5IC4xcyBlYXNlIDBzOy1vLXRyYW5zaXRpb246b3BhY2l0eSAuMXMgZWFzZSAwczt0cmFuc2l0aW9uOm9wYWNpdHkgLjFzIGVhc2UgMHN9LmxnLWNzczMubGctc2xpZGUubGctdXNlLWNzczMgLmxnLWl0ZW17b3BhY2l0eTowfS5sZy1jc3MzLmxnLXNsaWRlLmxnLXVzZS1jc3MzIC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMCwwKX0ubGctY3NzMy5sZy1zbGlkZS5sZy11c2UtY3NzMyAubGctaXRlbS5sZy1uZXh0LXNsaWRley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwwLDApfS5sZy1jc3MzLmxnLXNsaWRlLmxnLXVzZS1jc3MzIC5sZy1pdGVtLmxnLWN1cnJlbnR7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7b3BhY2l0eToxfS5sZy1jc3MzLmxnLXNsaWRlLmxnLXVzZS1jc3MzIC5sZy1pdGVtLmxnLWN1cnJlbnQsLmxnLWNzczMubGctc2xpZGUubGctdXNlLWNzczMgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwubGctY3NzMy5sZy1zbGlkZS5sZy11c2UtY3NzMyAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzOy1tb3otdHJhbnNpdGlvbjotbW96LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzOy1vLXRyYW5zaXRpb246LW8tdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwc30ubGctY3NzMy5sZy1zbGlkZS5sZy11c2UtbGVmdCAubGctaXRlbXtvcGFjaXR5OjA7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowfS5sZy1jc3MzLmxnLXNsaWRlLmxnLXVzZS1sZWZ0IC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7bGVmdDotMTAwJX0ubGctY3NzMy5sZy1zbGlkZS5sZy11c2UtbGVmdCAubGctaXRlbS5sZy1uZXh0LXNsaWRle2xlZnQ6MTAwJX0ubGctY3NzMy5sZy1zbGlkZS5sZy11c2UtbGVmdCAubGctaXRlbS5sZy1jdXJyZW50e2xlZnQ6MDtvcGFjaXR5OjF9LmxnLWNzczMubGctc2xpZGUubGctdXNlLWxlZnQgLmxnLWl0ZW0ubGctY3VycmVudCwubGctY3NzMy5sZy1zbGlkZS5sZy11c2UtbGVmdCAubGctaXRlbS5sZy1uZXh0LXNsaWRlLC5sZy1jc3MzLmxnLXNsaWRlLmxnLXVzZS1sZWZ0IC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2l0aW9uOmxlZnQgMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczstbW96LXRyYW5zaXRpb246bGVmdCAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzOy1vLXRyYW5zaXRpb246bGVmdCAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzO3RyYW5zaXRpb246bGVmdCAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzfVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXNjYXBlKHVybCkge1xuICAgIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gdXJsXG4gICAgfVxuICAgIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICAgIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgICAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICAgIH1cbiAgICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gICAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkpIHtcbiAgICAgICAgcmV0dXJuICdcIicgKyB1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSArICdcIidcbiAgICB9XG5cbiAgICByZXR1cm4gdXJsXG59XG4iLCIvKiEgbGctZnVsbHNjcmVlbiAtIHYxLjAuMSAtIDIwMTYtMDktMzBcclxuKiBodHRwOi8vc2FjaGluY2hvb2x1ci5naXRodWIuaW8vbGlnaHRHYWxsZXJ5XHJcbiogQ29weXJpZ2h0IChjKSAyMDE2IFNhY2hpbiBOOyBMaWNlbnNlZCBHUEx2MyAqL1xyXG5cclxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUgdW5sZXNzIGFtZE1vZHVsZUlkIGlzIHNldFxuICAgIGRlZmluZShbJ2pxdWVyeSddLCBmdW5jdGlvbiAoYTApIHtcbiAgICAgIHJldHVybiAoZmFjdG9yeShhMCkpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgIC8vIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMsIGJ1dFxuICAgIC8vIG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLFxuICAgIC8vIGxpa2UgTm9kZS5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JykpO1xuICB9IGVsc2Uge1xuICAgIGZhY3RvcnkoalF1ZXJ5KTtcbiAgfVxufSh0aGlzLCBmdW5jdGlvbiAoJCkge1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgIGZ1bGxTY3JlZW46IHRydWVcbiAgICB9O1xuXG4gICAgdmFyIEZ1bGxzY3JlZW4gPSBmdW5jdGlvbihlbGVtZW50KSB7XG5cbiAgICAgICAgLy8gZ2V0IGxpZ2h0R2FsbGVyeSBjb3JlIHBsdWdpbiBkYXRhXG4gICAgICAgIHRoaXMuY29yZSA9ICQoZWxlbWVudCkuZGF0YSgnbGlnaHRHYWxsZXJ5Jyk7XG5cbiAgICAgICAgdGhpcy4kZWwgPSAkKGVsZW1lbnQpO1xuXG4gICAgICAgIC8vIGV4dGVuZCBtb2R1bGUgZGVmYWx1dCBzZXR0aW5ncyB3aXRoIGxpZ2h0R2FsbGVyeSBjb3JlIHNldHRpbmdzXG4gICAgICAgIHRoaXMuY29yZS5zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCB0aGlzLmNvcmUucyk7XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEZ1bGxzY3JlZW4ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGZ1bGxTY3JlZW4gPSAnJztcbiAgICAgICAgaWYgKHRoaXMuY29yZS5zLmZ1bGxTY3JlZW4pIHtcblxuICAgICAgICAgICAgLy8gY2hlY2sgZm9yIGZ1bGxzY3JlZW4gYnJvd3NlciBzdXBwb3J0XG4gICAgICAgICAgICBpZiAoIWRvY3VtZW50LmZ1bGxzY3JlZW5FbmFibGVkICYmICFkb2N1bWVudC53ZWJraXRGdWxsc2NyZWVuRW5hYmxlZCAmJlxuICAgICAgICAgICAgICAgICFkb2N1bWVudC5tb3pGdWxsU2NyZWVuRW5hYmxlZCAmJiAhZG9jdW1lbnQubXNGdWxsc2NyZWVuRW5hYmxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZnVsbFNjcmVlbiA9ICc8c3BhbiBjbGFzcz1cImxnLWZ1bGxzY3JlZW4gbGctaWNvblwiPjwvc3Bhbj4nO1xuICAgICAgICAgICAgICAgIHRoaXMuY29yZS4kb3V0ZXIuZmluZCgnLmxnLXRvb2xiYXInKS5hcHBlbmQoZnVsbFNjcmVlbik7XG4gICAgICAgICAgICAgICAgdGhpcy5mdWxsU2NyZWVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgRnVsbHNjcmVlbi5wcm90b3R5cGUucmVxdWVzdEZ1bGxzY3JlZW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICBpZiAoZWwucmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAgIGVsLnJlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZWwubXNSZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgICAgICAgZWwubXNSZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgICAgICB9IGVsc2UgaWYgKGVsLm1velJlcXVlc3RGdWxsU2NyZWVuKSB7XG4gICAgICAgICAgICBlbC5tb3pSZXF1ZXN0RnVsbFNjcmVlbigpO1xuICAgICAgICB9IGVsc2UgaWYgKGVsLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgICBlbC53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEZ1bGxzY3JlZW4ucHJvdG90eXBlLmV4aXRGdWxsc2NyZWVuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5leGl0RnVsbHNjcmVlbikge1xuICAgICAgICAgICAgZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5tc0V4aXRGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5tc0V4aXRGdWxsc2NyZWVuKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbikge1xuICAgICAgICAgICAgZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbigpO1xuICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgICBkb2N1bWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbigpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0d1aWRlL0FQSS9ET00vVXNpbmdfZnVsbF9zY3JlZW5fbW9kZVxuICAgIEZ1bGxzY3JlZW4ucHJvdG90eXBlLmZ1bGxTY3JlZW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAkKGRvY3VtZW50KS5vbignZnVsbHNjcmVlbmNoYW5nZS5sZyB3ZWJraXRmdWxsc2NyZWVuY2hhbmdlLmxnIG1vemZ1bGxzY3JlZW5jaGFuZ2UubGcgTVNGdWxsc2NyZWVuQ2hhbmdlLmxnJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBfdGhpcy5jb3JlLiRvdXRlci50b2dnbGVDbGFzcygnbGctZnVsbHNjcmVlbi1vbicpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNvcmUuJG91dGVyLmZpbmQoJy5sZy1mdWxsc2NyZWVuJykub24oJ2NsaWNrLmxnJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoIWRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50ICYmXG4gICAgICAgICAgICAgICAgIWRvY3VtZW50Lm1vekZ1bGxTY3JlZW5FbGVtZW50ICYmICFkb2N1bWVudC53ZWJraXRGdWxsc2NyZWVuRWxlbWVudCAmJiAhZG9jdW1lbnQubXNGdWxsc2NyZWVuRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnJlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF90aGlzLmV4aXRGdWxsc2NyZWVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIEZ1bGxzY3JlZW4ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAvLyBleGl0IGZyb20gZnVsbHNjcmVlbiBpZiBhY3RpdmF0ZWRcbiAgICAgICAgdGhpcy5leGl0RnVsbHNjcmVlbigpO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9mZignZnVsbHNjcmVlbmNoYW5nZS5sZyB3ZWJraXRmdWxsc2NyZWVuY2hhbmdlLmxnIG1vemZ1bGxzY3JlZW5jaGFuZ2UubGcgTVNGdWxsc2NyZWVuQ2hhbmdlLmxnJyk7XG4gICAgfTtcblxuICAgICQuZm4ubGlnaHRHYWxsZXJ5Lm1vZHVsZXMuZnVsbHNjcmVlbiA9IEZ1bGxzY3JlZW47XG5cbn0pKCk7XG5cbn0pKTtcbiIsIi8qISBsZy10aHVtYm5haWwgLSB2MS4xLjAgLSAyMDE3LTA4LTA4XHJcbiogaHR0cDovL3NhY2hpbmNob29sdXIuZ2l0aHViLmlvL2xpZ2h0R2FsbGVyeVxyXG4qIENvcHlyaWdodCAoYykgMjAxNyBTYWNoaW4gTjsgTGljZW5zZWQgR1BMdjMgKi9cclxuXHJcbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlIHVubGVzcyBhbWRNb2R1bGVJZCBpcyBzZXRcbiAgICBkZWZpbmUoWydqcXVlcnknXSwgZnVuY3Rpb24gKGEwKSB7XG4gICAgICByZXR1cm4gKGZhY3RvcnkoYTApKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAvLyBOb2RlLiBEb2VzIG5vdCB3b3JrIHdpdGggc3RyaWN0IENvbW1vbkpTLCBidXRcbiAgICAvLyBvbmx5IENvbW1vbkpTLWxpa2UgZW52aXJvbm1lbnRzIHRoYXQgc3VwcG9ydCBtb2R1bGUuZXhwb3J0cyxcbiAgICAvLyBsaWtlIE5vZGUuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoJ2pxdWVyeScpKTtcbiAgfSBlbHNlIHtcbiAgICBmYWN0b3J5KGpRdWVyeSk7XG4gIH1cbn0odGhpcywgZnVuY3Rpb24gKCQpIHtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICB0aHVtYm5haWw6IHRydWUsXG5cbiAgICAgICAgYW5pbWF0ZVRodW1iOiB0cnVlLFxuICAgICAgICBjdXJyZW50UGFnZXJQb3NpdGlvbjogJ21pZGRsZScsXG5cbiAgICAgICAgdGh1bWJXaWR0aDogMTAwLFxuICAgICAgICB0aHVtYkhlaWdodDogJzgwcHgnLFxuICAgICAgICB0aHVtYkNvbnRIZWlnaHQ6IDEwMCxcbiAgICAgICAgdGh1bWJNYXJnaW46IDUsXG5cbiAgICAgICAgZXhUaHVtYkltYWdlOiBmYWxzZSxcbiAgICAgICAgc2hvd1RodW1iQnlEZWZhdWx0OiB0cnVlLFxuICAgICAgICB0b29nbGVUaHVtYjogdHJ1ZSxcbiAgICAgICAgcHVsbENhcHRpb25VcDogdHJ1ZSxcblxuICAgICAgICBlbmFibGVUaHVtYkRyYWc6IHRydWUsXG4gICAgICAgIGVuYWJsZVRodW1iU3dpcGU6IHRydWUsXG4gICAgICAgIHN3aXBlVGhyZXNob2xkOiA1MCxcblxuICAgICAgICBsb2FkWW91dHViZVRodW1ibmFpbDogdHJ1ZSxcbiAgICAgICAgeW91dHViZVRodW1iU2l6ZTogMSxcblxuICAgICAgICBsb2FkVmltZW9UaHVtYm5haWw6IHRydWUsXG4gICAgICAgIHZpbWVvVGh1bWJTaXplOiAndGh1bWJuYWlsX3NtYWxsJyxcblxuICAgICAgICBsb2FkRGFpbHltb3Rpb25UaHVtYm5haWw6IHRydWVcbiAgICB9O1xuXG4gICAgdmFyIFRodW1ibmFpbCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcblxuICAgICAgICAvLyBnZXQgbGlnaHRHYWxsZXJ5IGNvcmUgcGx1Z2luIGRhdGFcbiAgICAgICAgdGhpcy5jb3JlID0gJChlbGVtZW50KS5kYXRhKCdsaWdodEdhbGxlcnknKTtcblxuICAgICAgICAvLyBleHRlbmQgbW9kdWxlIGRlZmF1bHQgc2V0dGluZ3Mgd2l0aCBsaWdodEdhbGxlcnkgY29yZSBzZXR0aW5nc1xuICAgICAgICB0aGlzLmNvcmUucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgdGhpcy5jb3JlLnMpO1xuXG4gICAgICAgIHRoaXMuJGVsID0gJChlbGVtZW50KTtcbiAgICAgICAgdGhpcy4kdGh1bWJPdXRlciA9IG51bGw7XG4gICAgICAgIHRoaXMudGh1bWJPdXRlcldpZHRoID0gMDtcbiAgICAgICAgdGhpcy50aHVtYlRvdGFsV2lkdGggPSAodGhpcy5jb3JlLiRpdGVtcy5sZW5ndGggKiAodGhpcy5jb3JlLnMudGh1bWJXaWR0aCArIHRoaXMuY29yZS5zLnRodW1iTWFyZ2luKSk7XG4gICAgICAgIHRoaXMudGh1bWJJbmRleCA9IHRoaXMuY29yZS5pbmRleDtcblxuICAgICAgICBpZiAodGhpcy5jb3JlLnMuYW5pbWF0ZVRodW1iKSB7XG4gICAgICAgICAgICB0aGlzLmNvcmUucy50aHVtYkhlaWdodCA9ICcxMDAlJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRodW1ibmFpbCBhbmltYXRpb24gdmFsdWVcbiAgICAgICAgdGhpcy5sZWZ0ID0gMDtcblxuICAgICAgICB0aGlzLmluaXQoKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgVGh1bWJuYWlsLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmNvcmUucy50aHVtYm5haWwgJiYgdGhpcy5jb3JlLiRpdGVtcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb3JlLnMuc2hvd1RodW1iQnlEZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jb3JlLiRvdXRlci5hZGRDbGFzcygnbGctdGh1bWItb3BlbicpO1xuICAgICAgICAgICAgICAgIH0sIDcwMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmNvcmUucy5wdWxsQ2FwdGlvblVwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3JlLiRvdXRlci5hZGRDbGFzcygnbGctcHVsbC1jYXB0aW9uLXVwJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuYnVpbGQoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvcmUucy5hbmltYXRlVGh1bWIgJiYgdGhpcy5jb3JlLmRvQ3NzKCkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb3JlLnMuZW5hYmxlVGh1bWJEcmFnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlVGh1bWJEcmFnKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29yZS5zLmVuYWJsZVRodW1iU3dpcGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmFibGVUaHVtYlN3aXBlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy50aHVtYkNsaWNrYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRodW1iQ2xpY2thYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy50b29nbGUoKTtcbiAgICAgICAgICAgIHRoaXMudGh1bWJrZXlQcmVzcygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFRodW1ibmFpbC5wcm90b3R5cGUuYnVpbGQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHRodW1iTGlzdCA9ICcnO1xuICAgICAgICB2YXIgdmltZW9FcnJvclRodW1iU2l6ZSA9ICcnO1xuICAgICAgICB2YXIgJHRodW1iO1xuICAgICAgICB2YXIgaHRtbCA9ICc8ZGl2IGNsYXNzPVwibGctdGh1bWItb3V0ZXJcIj4nICtcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibGctdGh1bWIgbGctZ3JvdXBcIj4nICtcbiAgICAgICAgICAgICc8L2Rpdj4nICtcbiAgICAgICAgICAgICc8L2Rpdj4nO1xuXG4gICAgICAgIHN3aXRjaCAodGhpcy5jb3JlLnMudmltZW9UaHVtYlNpemUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3RodW1ibmFpbF9sYXJnZSc6XG4gICAgICAgICAgICAgICAgdmltZW9FcnJvclRodW1iU2l6ZSA9ICc2NDAnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndGh1bWJuYWlsX21lZGl1bSc6XG4gICAgICAgICAgICAgICAgdmltZW9FcnJvclRodW1iU2l6ZSA9ICcyMDB4MTUwJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3RodW1ibmFpbF9zbWFsbCc6XG4gICAgICAgICAgICAgICAgdmltZW9FcnJvclRodW1iU2l6ZSA9ICcxMDB4NzUnO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMuY29yZS4kb3V0ZXIuYWRkQ2xhc3MoJ2xnLWhhcy10aHVtYicpO1xuXG4gICAgICAgIF90aGlzLmNvcmUuJG91dGVyLmZpbmQoJy5sZycpLmFwcGVuZChodG1sKTtcblxuICAgICAgICBfdGhpcy4kdGh1bWJPdXRlciA9IF90aGlzLmNvcmUuJG91dGVyLmZpbmQoJy5sZy10aHVtYi1vdXRlcicpO1xuICAgICAgICBfdGhpcy50aHVtYk91dGVyV2lkdGggPSBfdGhpcy4kdGh1bWJPdXRlci53aWR0aCgpO1xuXG4gICAgICAgIGlmIChfdGhpcy5jb3JlLnMuYW5pbWF0ZVRodW1iKSB7XG4gICAgICAgICAgICBfdGhpcy5jb3JlLiRvdXRlci5maW5kKCcubGctdGh1bWInKS5jc3Moe1xuICAgICAgICAgICAgICAgIHdpZHRoOiBfdGhpcy50aHVtYlRvdGFsV2lkdGggKyAncHgnLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNvcmUucy5hbmltYXRlVGh1bWIpIHtcbiAgICAgICAgICAgIF90aGlzLiR0aHVtYk91dGVyLmNzcygnaGVpZ2h0JywgX3RoaXMuY29yZS5zLnRodW1iQ29udEhlaWdodCArICdweCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0VGh1bWIoc3JjLCB0aHVtYiwgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBpc1ZpZGVvID0gX3RoaXMuY29yZS5pc1ZpZGVvKHNyYywgaW5kZXgpIHx8IHt9O1xuICAgICAgICAgICAgdmFyIHRodW1iSW1nO1xuICAgICAgICAgICAgdmFyIHZpbWVvSWQgPSAnJztcblxuICAgICAgICAgICAgaWYgKGlzVmlkZW8ueW91dHViZSB8fCBpc1ZpZGVvLnZpbWVvIHx8IGlzVmlkZW8uZGFpbHltb3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNWaWRlby55b3V0dWJlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5jb3JlLnMubG9hZFlvdXR1YmVUaHVtYm5haWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRodW1iSW1nID0gJy8vaW1nLnlvdXR1YmUuY29tL3ZpLycgKyBpc1ZpZGVvLnlvdXR1YmVbMV0gKyAnLycgKyBfdGhpcy5jb3JlLnMueW91dHViZVRodW1iU2l6ZSArICcuanBnJztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRodW1iSW1nID0gdGh1bWI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzVmlkZW8udmltZW8pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmNvcmUucy5sb2FkVmltZW9UaHVtYm5haWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRodW1iSW1nID0gJy8vaS52aW1lb2Nkbi5jb20vdmlkZW8vZXJyb3JfJyArIHZpbWVvRXJyb3JUaHVtYlNpemUgKyAnLmpwZyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aW1lb0lkID0gaXNWaWRlby52aW1lb1sxXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRodW1iSW1nID0gdGh1bWI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzVmlkZW8uZGFpbHltb3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmNvcmUucy5sb2FkRGFpbHltb3Rpb25UaHVtYm5haWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRodW1iSW1nID0gJy8vd3d3LmRhaWx5bW90aW9uLmNvbS90aHVtYm5haWwvdmlkZW8vJyArIGlzVmlkZW8uZGFpbHltb3Rpb25bMV07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHVtYkltZyA9IHRodW1iO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHVtYkltZyA9IHRodW1iO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHVtYkxpc3QgKz0gJzxkaXYgZGF0YS12aW1lby1pZD1cIicgKyB2aW1lb0lkICsgJ1wiIGNsYXNzPVwibGctdGh1bWItaXRlbVwiIHN0eWxlPVwid2lkdGg6JyArIF90aGlzLmNvcmUucy50aHVtYldpZHRoICsgJ3B4OyBoZWlnaHQ6ICcgKyBfdGhpcy5jb3JlLnMudGh1bWJIZWlnaHQgKyAnOyBtYXJnaW4tcmlnaHQ6ICcgKyBfdGhpcy5jb3JlLnMudGh1bWJNYXJnaW4gKyAncHhcIj48aW1nIHNyYz1cIicgKyB0aHVtYkltZyArICdcIiAvPjwvZGl2Pic7XG4gICAgICAgICAgICB2aW1lb0lkID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX3RoaXMuY29yZS5zLmR5bmFtaWMpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX3RoaXMuY29yZS5zLmR5bmFtaWNFbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGdldFRodW1iKF90aGlzLmNvcmUucy5keW5hbWljRWxbaV0uc3JjLCBfdGhpcy5jb3JlLnMuZHluYW1pY0VsW2ldLnRodW1iLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLmNvcmUuJGl0ZW1zLmVhY2goZnVuY3Rpb24oaSkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCFfdGhpcy5jb3JlLnMuZXhUaHVtYkltYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGdldFRodW1iKCQodGhpcykuYXR0cignaHJlZicpIHx8ICQodGhpcykuYXR0cignZGF0YS1zcmMnKSwgJCh0aGlzKS5maW5kKCdpbWcnKS5hdHRyKCdzcmMnKSwgaSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0VGh1bWIoJCh0aGlzKS5hdHRyKCdocmVmJykgfHwgJCh0aGlzKS5hdHRyKCdkYXRhLXNyYycpLCAkKHRoaXMpLmF0dHIoX3RoaXMuY29yZS5zLmV4VGh1bWJJbWFnZSksIGkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy5jb3JlLiRvdXRlci5maW5kKCcubGctdGh1bWInKS5odG1sKHRodW1iTGlzdCk7XG5cbiAgICAgICAgJHRodW1iID0gX3RoaXMuY29yZS4kb3V0ZXIuZmluZCgnLmxnLXRodW1iLWl0ZW0nKTtcblxuICAgICAgICAvLyBMb2FkIHZpbWVvIHRodW1ibmFpbHNcbiAgICAgICAgJHRodW1iLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIHZpbWVvVmlkZW9JZCA9ICR0aGlzLmF0dHIoJ2RhdGEtdmltZW8taWQnKTtcblxuICAgICAgICAgICAgaWYgKHZpbWVvVmlkZW9JZCkge1xuICAgICAgICAgICAgICAgICQuZ2V0SlNPTignLy93d3cudmltZW8uY29tL2FwaS92Mi92aWRlby8nICsgdmltZW9WaWRlb0lkICsgJy5qc29uP2NhbGxiYWNrPT8nLCB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdDogJ2pzb24nXG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAkdGhpcy5maW5kKCdpbWcnKS5hdHRyKCdzcmMnLCBkYXRhWzBdW190aGlzLmNvcmUucy52aW1lb1RodW1iU2l6ZV0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBtYW5hZ2UgYWN0aXZlIGNsYXNzIGZvciB0aHVtYm5haWxcbiAgICAgICAgJHRodW1iLmVxKF90aGlzLmNvcmUuaW5kZXgpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgX3RoaXMuY29yZS4kZWwub24oJ29uQmVmb3JlU2xpZGUubGcudG0nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICR0aHVtYi5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAkdGh1bWIuZXEoX3RoaXMuY29yZS5pbmRleCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkdGh1bWIub24oJ2NsaWNrLmxnIHRvdWNoZW5kLmxnJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgXyR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBJbiBJRTkgYW5kIGJlbGxvdyB0b3VjaCBkb2VzIG5vdCBzdXBwb3J0XG4gICAgICAgICAgICAgICAgLy8gR28gdG8gc2xpZGUgaWYgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IGNzcyB0cmFuc2l0aW9uc1xuICAgICAgICAgICAgICAgIGlmICgoX3RoaXMudGh1bWJDbGlja2FibGUgJiYgIV90aGlzLmNvcmUubGdCdXN5KSB8fCAhX3RoaXMuY29yZS5kb0NzcygpKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNvcmUuaW5kZXggPSBfJHRoaXMuaW5kZXgoKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY29yZS5zbGlkZShfdGhpcy5jb3JlLmluZGV4LCBmYWxzZSwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgX3RoaXMuY29yZS4kZWwub24oJ29uQmVmb3JlU2xpZGUubGcudG0nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIF90aGlzLmFuaW1hdGVUaHVtYihfdGhpcy5jb3JlLmluZGV4KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUubGcudGh1bWIgb3JpZW50YXRpb25jaGFuZ2UubGcudGh1bWInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYW5pbWF0ZVRodW1iKF90aGlzLmNvcmUuaW5kZXgpO1xuICAgICAgICAgICAgICAgIF90aGlzLnRodW1iT3V0ZXJXaWR0aCA9IF90aGlzLiR0aHVtYk91dGVyLndpZHRoKCk7XG4gICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBUaHVtYm5haWwucHJvdG90eXBlLnNldFRyYW5zbGF0ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIC8vIGpRdWVyeSBzdXBwb3J0cyBBdXRvbWF0aWMgQ1NTIHByZWZpeGluZyBzaW5jZSBqUXVlcnkgMS44LjBcbiAgICAgICAgdGhpcy5jb3JlLiRvdXRlci5maW5kKCcubGctdGh1bWInKS5jc3Moe1xuICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoLScgKyAodmFsdWUpICsgJ3B4LCAwcHgsIDBweCknXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBUaHVtYm5haWwucHJvdG90eXBlLmFuaW1hdGVUaHVtYiA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgIHZhciAkdGh1bWIgPSB0aGlzLmNvcmUuJG91dGVyLmZpbmQoJy5sZy10aHVtYicpO1xuICAgICAgICBpZiAodGhpcy5jb3JlLnMuYW5pbWF0ZVRodW1iKSB7XG4gICAgICAgICAgICB2YXIgcG9zaXRpb247XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuY29yZS5zLmN1cnJlbnRQYWdlclBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gMDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbWlkZGxlJzpcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPSAodGhpcy50aHVtYk91dGVyV2lkdGggLyAyKSAtICh0aGlzLmNvcmUucy50aHVtYldpZHRoIC8gMik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPSB0aGlzLnRodW1iT3V0ZXJXaWR0aCAtIHRoaXMuY29yZS5zLnRodW1iV2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxlZnQgPSAoKHRoaXMuY29yZS5zLnRodW1iV2lkdGggKyB0aGlzLmNvcmUucy50aHVtYk1hcmdpbikgKiBpbmRleCAtIDEpIC0gcG9zaXRpb247XG4gICAgICAgICAgICBpZiAodGhpcy5sZWZ0ID4gKHRoaXMudGh1bWJUb3RhbFdpZHRoIC0gdGhpcy50aHVtYk91dGVyV2lkdGgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0ID0gdGhpcy50aHVtYlRvdGFsV2lkdGggLSB0aGlzLnRodW1iT3V0ZXJXaWR0aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMubGVmdCA8IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnQgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5jb3JlLmxHYWxsZXJ5T24pIHtcbiAgICAgICAgICAgICAgICBpZiAoISR0aHVtYi5oYXNDbGFzcygnb24nKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvcmUuJG91dGVyLmZpbmQoJy5sZy10aHVtYicpLmNzcygndHJhbnNpdGlvbi1kdXJhdGlvbicsIHRoaXMuY29yZS5zLnNwZWVkICsgJ21zJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNvcmUuZG9Dc3MoKSkge1xuICAgICAgICAgICAgICAgICAgICAkdGh1bWIuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtdGhpcy5sZWZ0ICsgJ3B4J1xuICAgICAgICAgICAgICAgICAgICB9LCB0aGlzLmNvcmUucy5zcGVlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY29yZS5kb0NzcygpKSB7XG4gICAgICAgICAgICAgICAgICAgICR0aHVtYi5jc3MoJ2xlZnQnLCAtdGhpcy5sZWZ0ICsgJ3B4Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNldFRyYW5zbGF0ZSh0aGlzLmxlZnQpO1xuXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gRW5hYmxlIHRodW1ibmFpbCBkcmFnZ2luZyBhbmQgc3dpcGluZ1xuICAgIFRodW1ibmFpbC5wcm90b3R5cGUuZW5hYmxlVGh1bWJEcmFnID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHN0YXJ0Q29vcmRzID0gMDtcbiAgICAgICAgdmFyIGVuZENvb3JkcyA9IDA7XG4gICAgICAgIHZhciBpc0RyYWdpbmcgPSBmYWxzZTtcbiAgICAgICAgdmFyIGlzTW92ZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIHRlbXBMZWZ0ID0gMDtcblxuICAgICAgICBfdGhpcy4kdGh1bWJPdXRlci5hZGRDbGFzcygnbGctZ3JhYicpO1xuXG4gICAgICAgIF90aGlzLmNvcmUuJG91dGVyLmZpbmQoJy5sZy10aHVtYicpLm9uKCdtb3VzZWRvd24ubGcudGh1bWInLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMudGh1bWJUb3RhbFdpZHRoID4gX3RoaXMudGh1bWJPdXRlcldpZHRoKSB7XG4gICAgICAgICAgICAgICAgLy8gZXhlY3V0ZSBvbmx5IG9uIC5sZy1vYmplY3RcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgc3RhcnRDb29yZHMgPSBlLnBhZ2VYO1xuICAgICAgICAgICAgICAgIGlzRHJhZ2luZyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAvLyAqKiBGaXggZm9yIHdlYmtpdCBjdXJzb3IgaXNzdWUgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTI2NzIzXG4gICAgICAgICAgICAgICAgX3RoaXMuY29yZS4kb3V0ZXIuc2Nyb2xsTGVmdCArPSAxO1xuICAgICAgICAgICAgICAgIF90aGlzLmNvcmUuJG91dGVyLnNjcm9sbExlZnQgLT0gMTtcblxuICAgICAgICAgICAgICAgIC8vICpcbiAgICAgICAgICAgICAgICBfdGhpcy50aHVtYkNsaWNrYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIF90aGlzLiR0aHVtYk91dGVyLnJlbW92ZUNsYXNzKCdsZy1ncmFiJykuYWRkQ2xhc3MoJ2xnLWdyYWJiaW5nJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQod2luZG93KS5vbignbW91c2Vtb3ZlLmxnLnRodW1iJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYgKGlzRHJhZ2luZykge1xuICAgICAgICAgICAgICAgIHRlbXBMZWZ0ID0gX3RoaXMubGVmdDtcbiAgICAgICAgICAgICAgICBpc01vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBlbmRDb29yZHMgPSBlLnBhZ2VYO1xuXG4gICAgICAgICAgICAgICAgX3RoaXMuJHRodW1iT3V0ZXIuYWRkQ2xhc3MoJ2xnLWRyYWdnaW5nJyk7XG5cbiAgICAgICAgICAgICAgICB0ZW1wTGVmdCA9IHRlbXBMZWZ0IC0gKGVuZENvb3JkcyAtIHN0YXJ0Q29vcmRzKTtcblxuICAgICAgICAgICAgICAgIGlmICh0ZW1wTGVmdCA+IChfdGhpcy50aHVtYlRvdGFsV2lkdGggLSBfdGhpcy50aHVtYk91dGVyV2lkdGgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBMZWZ0ID0gX3RoaXMudGh1bWJUb3RhbFdpZHRoIC0gX3RoaXMudGh1bWJPdXRlcldpZHRoO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0ZW1wTGVmdCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcExlZnQgPSAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIG1vdmUgY3VycmVudCBzbGlkZVxuICAgICAgICAgICAgICAgIF90aGlzLnNldFRyYW5zbGF0ZSh0ZW1wTGVmdCk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdtb3VzZXVwLmxnLnRodW1iJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoaXNNb3ZlZCkge1xuICAgICAgICAgICAgICAgIGlzTW92ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBfdGhpcy4kdGh1bWJPdXRlci5yZW1vdmVDbGFzcygnbGctZHJhZ2dpbmcnKTtcblxuICAgICAgICAgICAgICAgIF90aGlzLmxlZnQgPSB0ZW1wTGVmdDtcblxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhlbmRDb29yZHMgLSBzdGFydENvb3JkcykgPCBfdGhpcy5jb3JlLnMuc3dpcGVUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudGh1bWJDbGlja2FibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy50aHVtYkNsaWNrYWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpc0RyYWdpbmcpIHtcbiAgICAgICAgICAgICAgICBpc0RyYWdpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBfdGhpcy4kdGh1bWJPdXRlci5yZW1vdmVDbGFzcygnbGctZ3JhYmJpbmcnKS5hZGRDbGFzcygnbGctZ3JhYicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBUaHVtYm5haWwucHJvdG90eXBlLmVuYWJsZVRodW1iU3dpcGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHN0YXJ0Q29vcmRzID0gMDtcbiAgICAgICAgdmFyIGVuZENvb3JkcyA9IDA7XG4gICAgICAgIHZhciBpc01vdmVkID0gZmFsc2U7XG4gICAgICAgIHZhciB0ZW1wTGVmdCA9IDA7XG5cbiAgICAgICAgX3RoaXMuY29yZS4kb3V0ZXIuZmluZCgnLmxnLXRodW1iJykub24oJ3RvdWNoc3RhcnQubGcnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMudGh1bWJUb3RhbFdpZHRoID4gX3RoaXMudGh1bWJPdXRlcldpZHRoKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHN0YXJ0Q29vcmRzID0gZS5vcmlnaW5hbEV2ZW50LnRhcmdldFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgICAgICAgICAgX3RoaXMudGh1bWJDbGlja2FibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgX3RoaXMuY29yZS4kb3V0ZXIuZmluZCgnLmxnLXRodW1iJykub24oJ3RvdWNobW92ZS5sZycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy50aHVtYlRvdGFsV2lkdGggPiBfdGhpcy50aHVtYk91dGVyV2lkdGgpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZW5kQ29vcmRzID0gZS5vcmlnaW5hbEV2ZW50LnRhcmdldFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgICAgICAgICAgaXNNb3ZlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBfdGhpcy4kdGh1bWJPdXRlci5hZGRDbGFzcygnbGctZHJhZ2dpbmcnKTtcblxuICAgICAgICAgICAgICAgIHRlbXBMZWZ0ID0gX3RoaXMubGVmdDtcblxuICAgICAgICAgICAgICAgIHRlbXBMZWZ0ID0gdGVtcExlZnQgLSAoZW5kQ29vcmRzIC0gc3RhcnRDb29yZHMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRlbXBMZWZ0ID4gKF90aGlzLnRodW1iVG90YWxXaWR0aCAtIF90aGlzLnRodW1iT3V0ZXJXaWR0aCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcExlZnQgPSBfdGhpcy50aHVtYlRvdGFsV2lkdGggLSBfdGhpcy50aHVtYk91dGVyV2lkdGg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRlbXBMZWZ0IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB0ZW1wTGVmdCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gbW92ZSBjdXJyZW50IHNsaWRlXG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0VHJhbnNsYXRlKHRlbXBMZWZ0KTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBfdGhpcy5jb3JlLiRvdXRlci5maW5kKCcubGctdGh1bWInKS5vbigndG91Y2hlbmQubGcnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy50aHVtYlRvdGFsV2lkdGggPiBfdGhpcy50aHVtYk91dGVyV2lkdGgpIHtcblxuICAgICAgICAgICAgICAgIGlmIChpc01vdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzTW92ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuJHRodW1iT3V0ZXIucmVtb3ZlQ2xhc3MoJ2xnLWRyYWdnaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhlbmRDb29yZHMgLSBzdGFydENvb3JkcykgPCBfdGhpcy5jb3JlLnMuc3dpcGVUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnRodW1iQ2xpY2thYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmxlZnQgPSB0ZW1wTGVmdDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy50aHVtYkNsaWNrYWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy50aHVtYkNsaWNrYWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIFRodW1ibmFpbC5wcm90b3R5cGUudG9vZ2xlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChfdGhpcy5jb3JlLnMudG9vZ2xlVGh1bWIpIHtcbiAgICAgICAgICAgIF90aGlzLmNvcmUuJG91dGVyLmFkZENsYXNzKCdsZy1jYW4tdG9nZ2xlJyk7XG4gICAgICAgICAgICBfdGhpcy4kdGh1bWJPdXRlci5hcHBlbmQoJzxzcGFuIGNsYXNzPVwibGctdG9vZ2xlLXRodW1iIGxnLWljb25cIj48L3NwYW4+Jyk7XG4gICAgICAgICAgICBfdGhpcy5jb3JlLiRvdXRlci5maW5kKCcubGctdG9vZ2xlLXRodW1iJykub24oJ2NsaWNrLmxnJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuY29yZS4kb3V0ZXIudG9nZ2xlQ2xhc3MoJ2xnLXRodW1iLW9wZW4nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFRodW1ibmFpbC5wcm90b3R5cGUudGh1bWJrZXlQcmVzcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAkKHdpbmRvdykub24oJ2tleWRvd24ubGcudGh1bWInLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzOCkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5jb3JlLiRvdXRlci5hZGRDbGFzcygnbGctdGh1bWItb3BlbicpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDQwKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIF90aGlzLmNvcmUuJG91dGVyLnJlbW92ZUNsYXNzKCdsZy10aHVtYi1vcGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBUaHVtYm5haWwucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuY29yZS5zLnRodW1ibmFpbCAmJiB0aGlzLmNvcmUuJGl0ZW1zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICQod2luZG93KS5vZmYoJ3Jlc2l6ZS5sZy50aHVtYiBvcmllbnRhdGlvbmNoYW5nZS5sZy50aHVtYiBrZXlkb3duLmxnLnRodW1iJyk7XG4gICAgICAgICAgICB0aGlzLiR0aHVtYk91dGVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgdGhpcy5jb3JlLiRvdXRlci5yZW1vdmVDbGFzcygnbGctaGFzLXRodW1iJyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgJC5mbi5saWdodEdhbGxlcnkubW9kdWxlcy5UaHVtYm5haWwgPSBUaHVtYm5haWw7XG5cbn0pKCk7XG5cbn0pKTtcbiIsIi8qISBsZy16b29tIC0gdjEuMS4wIC0gMjAxNy0wOC0wOFxyXG4qIGh0dHA6Ly9zYWNoaW5jaG9vbHVyLmdpdGh1Yi5pby9saWdodEdhbGxlcnlcclxuKiBDb3B5cmlnaHQgKGMpIDIwMTcgU2FjaGluIE47IExpY2Vuc2VkIEdQTHYzICovXHJcblxyXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZSB1bmxlc3MgYW1kTW9kdWxlSWQgaXMgc2V0XG4gICAgZGVmaW5lKFsnanF1ZXJ5J10sIGZ1bmN0aW9uIChhMCkge1xuICAgICAgcmV0dXJuIChmYWN0b3J5KGEwKSk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgLy8gTm9kZS4gRG9lcyBub3Qgd29yayB3aXRoIHN0cmljdCBDb21tb25KUywgYnV0XG4gICAgLy8gb25seSBDb21tb25KUy1saWtlIGVudmlyb25tZW50cyB0aGF0IHN1cHBvcnQgbW9kdWxlLmV4cG9ydHMsXG4gICAgLy8gbGlrZSBOb2RlLlxuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSk7XG4gIH0gZWxzZSB7XG4gICAgZmFjdG9yeShqUXVlcnkpO1xuICB9XG59KHRoaXMsIGZ1bmN0aW9uICgkKSB7XG5cbihmdW5jdGlvbigpIHtcblxuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBnZXRVc2VMZWZ0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB1c2VMZWZ0ID0gZmFsc2U7XG4gICAgICAgIHZhciBpc0Nocm9tZSA9IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0Nocm9tKGV8aXVtKVxcLyhbMC05XSspXFwuLyk7XG4gICAgICAgIGlmIChpc0Nocm9tZSAmJiBwYXJzZUludChpc0Nocm9tZVsyXSwgMTApIDwgNTQpIHtcbiAgICAgICAgICAgIHVzZUxlZnQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVzZUxlZnQ7XG4gICAgfTtcblxuICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgc2NhbGU6IDEsXG4gICAgICAgIHpvb206IHRydWUsXG4gICAgICAgIGFjdHVhbFNpemU6IHRydWUsXG4gICAgICAgIGVuYWJsZVpvb21BZnRlcjogMzAwLFxuICAgICAgICB1c2VMZWZ0Rm9yWm9vbTogZ2V0VXNlTGVmdCgpXG4gICAgfTtcblxuICAgIHZhciBab29tID0gZnVuY3Rpb24oZWxlbWVudCkge1xuXG4gICAgICAgIHRoaXMuY29yZSA9ICQoZWxlbWVudCkuZGF0YSgnbGlnaHRHYWxsZXJ5Jyk7XG5cbiAgICAgICAgdGhpcy5jb3JlLnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIHRoaXMuY29yZS5zKTtcblxuICAgICAgICBpZiAodGhpcy5jb3JlLnMuem9vbSAmJiB0aGlzLmNvcmUuZG9Dc3MoKSkge1xuICAgICAgICAgICAgdGhpcy5pbml0KCk7XG5cbiAgICAgICAgICAgIC8vIFN0b3JlIHRoZSB6b29tYWJsZSB0aW1lb3V0IHZhbHVlIGp1c3QgdG8gY2xlYXIgaXQgd2hpbGUgY2xvc2luZ1xuICAgICAgICAgICAgdGhpcy56b29tYWJsZXRpbWVvdXQgPSBmYWxzZTtcblxuICAgICAgICAgICAgLy8gU2V0IHRoZSBpbml0aWFsIHZhbHVlIGNlbnRlclxuICAgICAgICAgICAgdGhpcy5wYWdlWCA9ICQod2luZG93KS53aWR0aCgpIC8gMjtcbiAgICAgICAgICAgIHRoaXMucGFnZVkgPSAoJCh3aW5kb3cpLmhlaWdodCgpIC8gMikgKyAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgWm9vbS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciB6b29tSWNvbnMgPSAnPHNwYW4gaWQ9XCJsZy16b29tLWluXCIgY2xhc3M9XCJsZy1pY29uXCI+PC9zcGFuPjxzcGFuIGlkPVwibGctem9vbS1vdXRcIiBjbGFzcz1cImxnLWljb25cIj48L3NwYW4+JztcblxuICAgICAgICBpZiAoX3RoaXMuY29yZS5zLmFjdHVhbFNpemUpIHtcbiAgICAgICAgICAgIHpvb21JY29ucyArPSAnPHNwYW4gaWQ9XCJsZy1hY3R1YWwtc2l6ZVwiIGNsYXNzPVwibGctaWNvblwiPjwvc3Bhbj4nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF90aGlzLmNvcmUucy51c2VMZWZ0Rm9yWm9vbSkge1xuICAgICAgICAgICAgX3RoaXMuY29yZS4kb3V0ZXIuYWRkQ2xhc3MoJ2xnLXVzZS1sZWZ0LWZvci16b29tJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdGhpcy5jb3JlLiRvdXRlci5hZGRDbGFzcygnbGctdXNlLXRyYW5zaXRpb24tZm9yLXpvb20nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29yZS4kb3V0ZXIuZmluZCgnLmxnLXRvb2xiYXInKS5hcHBlbmQoem9vbUljb25zKTtcblxuICAgICAgICAvLyBBZGQgem9vbWFibGUgY2xhc3NcbiAgICAgICAgX3RoaXMuY29yZS4kZWwub24oJ29uU2xpZGVJdGVtTG9hZC5sZy50bS56b29tJywgZnVuY3Rpb24oZXZlbnQsIGluZGV4LCBkZWxheSkge1xuXG4gICAgICAgICAgICAvLyBkZWxheSB3aWxsIGJlIDAgZXhjZXB0IGZpcnN0IHRpbWVcbiAgICAgICAgICAgIHZhciBfc3BlZWQgPSBfdGhpcy5jb3JlLnMuZW5hYmxlWm9vbUFmdGVyICsgZGVsYXk7XG5cbiAgICAgICAgICAgIC8vIHNldCBfc3BlZWQgdmFsdWUgMCBpZiBnYWxsZXJ5IG9wZW5lZCBmcm9tIGRpcmVjdCB1cmwgYW5kIGlmIGl0IGlzIGZpcnN0IHNsaWRlXG4gICAgICAgICAgICBpZiAoJCgnYm9keScpLmhhc0NsYXNzKCdsZy1mcm9tLWhhc2gnKSAmJiBkZWxheSkge1xuXG4gICAgICAgICAgICAgICAgLy8gd2lsbCBleGVjdXRlIG9ubHkgb25jZVxuICAgICAgICAgICAgICAgIF9zcGVlZCA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGxnLWZyb20taGFzaCB0byBlbmFibGUgc3RhcnRpbmcgYW5pbWF0aW9uLlxuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbGctZnJvbS1oYXNoJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF90aGlzLnpvb21hYmxldGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuY29yZS4kc2xpZGUuZXEoaW5kZXgpLmFkZENsYXNzKCdsZy16b29tYWJsZScpO1xuICAgICAgICAgICAgfSwgX3NwZWVkICsgMzApO1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgc2NhbGUgPSAxO1xuICAgICAgICAvKipcbiAgICAgICAgICogQGRlc2MgSW1hZ2Ugem9vbVxuICAgICAgICAgKiBUcmFuc2xhdGUgdGhlIHdyYXAgYW5kIHNjYWxlIHRoZSBpbWFnZSB0byBnZXQgYmV0dGVyIHVzZXIgZXhwZXJpZW5jZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gc2NhbGVWYWwgLSBab29tIGRlY3JlbWVudC9pbmNyZW1lbnQgdmFsdWVcbiAgICAgICAgICovXG4gICAgICAgIHZhciB6b29tID0gZnVuY3Rpb24oc2NhbGVWYWwpIHtcblxuICAgICAgICAgICAgdmFyICRpbWFnZSA9IF90aGlzLmNvcmUuJG91dGVyLmZpbmQoJy5sZy1jdXJyZW50IC5sZy1pbWFnZScpO1xuICAgICAgICAgICAgdmFyIF94O1xuICAgICAgICAgICAgdmFyIF95O1xuXG4gICAgICAgICAgICAvLyBGaW5kIG9mZnNldCBtYW51YWxseSB0byBhdm9pZCBpc3N1ZSBhZnRlciB6b29tXG4gICAgICAgICAgICB2YXIgb2Zmc2V0WCA9ICgkKHdpbmRvdykud2lkdGgoKSAtICRpbWFnZS5wcm9wKCdvZmZzZXRXaWR0aCcpKSAvIDI7XG4gICAgICAgICAgICB2YXIgb2Zmc2V0WSA9ICgoJCh3aW5kb3cpLmhlaWdodCgpIC0gJGltYWdlLnByb3AoJ29mZnNldEhlaWdodCcpKSAvIDIpICsgJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG4gICAgICAgICAgICBfeCA9IF90aGlzLnBhZ2VYIC0gb2Zmc2V0WDtcbiAgICAgICAgICAgIF95ID0gX3RoaXMucGFnZVkgLSBvZmZzZXRZO1xuXG4gICAgICAgICAgICB2YXIgeCA9IChzY2FsZVZhbCAtIDEpICogKF94KTtcbiAgICAgICAgICAgIHZhciB5ID0gKHNjYWxlVmFsIC0gMSkgKiAoX3kpO1xuXG4gICAgICAgICAgICAkaW1hZ2UuY3NzKCd0cmFuc2Zvcm0nLCAnc2NhbGUzZCgnICsgc2NhbGVWYWwgKyAnLCAnICsgc2NhbGVWYWwgKyAnLCAxKScpLmF0dHIoJ2RhdGEtc2NhbGUnLCBzY2FsZVZhbCk7XG5cbiAgICAgICAgICAgIGlmIChfdGhpcy5jb3JlLnMudXNlTGVmdEZvclpvb20pIHtcbiAgICAgICAgICAgICAgICAkaW1hZ2UucGFyZW50KCkuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLXggKyAncHgnLFxuICAgICAgICAgICAgICAgICAgICB0b3A6IC15ICsgJ3B4J1xuICAgICAgICAgICAgICAgIH0pLmF0dHIoJ2RhdGEteCcsIHgpLmF0dHIoJ2RhdGEteScsIHkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkaW1hZ2UucGFyZW50KCkuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlM2QoLScgKyB4ICsgJ3B4LCAtJyArIHkgKyAncHgsIDApJykuYXR0cignZGF0YS14JywgeCkuYXR0cignZGF0YS15JywgeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGNhbGxTY2FsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHNjYWxlID4gMSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmNvcmUuJG91dGVyLmFkZENsYXNzKCdsZy16b29tZWQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVzZXRab29tKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzY2FsZSA8IDEpIHtcbiAgICAgICAgICAgICAgICBzY2FsZSA9IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHpvb20oc2NhbGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBhY3R1YWxTaXplID0gZnVuY3Rpb24oZXZlbnQsICRpbWFnZSwgaW5kZXgsIGZyb21JY29uKSB7XG4gICAgICAgICAgICB2YXIgdyA9ICRpbWFnZS5wcm9wKCdvZmZzZXRXaWR0aCcpO1xuICAgICAgICAgICAgdmFyIG53O1xuICAgICAgICAgICAgaWYgKF90aGlzLmNvcmUucy5keW5hbWljKSB7XG4gICAgICAgICAgICAgICAgbncgPSBfdGhpcy5jb3JlLnMuZHluYW1pY0VsW2luZGV4XS53aWR0aCB8fCAkaW1hZ2VbMF0ubmF0dXJhbFdpZHRoIHx8IHc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG53ID0gX3RoaXMuY29yZS4kaXRlbXMuZXEoaW5kZXgpLmF0dHIoJ2RhdGEtd2lkdGgnKSB8fCAkaW1hZ2VbMF0ubmF0dXJhbFdpZHRoIHx8IHc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBfc2NhbGU7XG5cbiAgICAgICAgICAgIGlmIChfdGhpcy5jb3JlLiRvdXRlci5oYXNDbGFzcygnbGctem9vbWVkJykpIHtcbiAgICAgICAgICAgICAgICBzY2FsZSA9IDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChudyA+IHcpIHtcbiAgICAgICAgICAgICAgICAgICAgX3NjYWxlID0gbncgLyB3O1xuICAgICAgICAgICAgICAgICAgICBzY2FsZSA9IF9zY2FsZSB8fCAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGZyb21JY29uKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucGFnZVggPSAkKHdpbmRvdykud2lkdGgoKSAvIDI7XG4gICAgICAgICAgICAgICAgX3RoaXMucGFnZVkgPSAoJCh3aW5kb3cpLmhlaWdodCgpIC8gMikgKyAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF90aGlzLnBhZ2VYID0gZXZlbnQucGFnZVggfHwgZXZlbnQub3JpZ2luYWxFdmVudC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYO1xuICAgICAgICAgICAgICAgIF90aGlzLnBhZ2VZID0gZXZlbnQucGFnZVkgfHwgZXZlbnQub3JpZ2luYWxFdmVudC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYWxsU2NhbGUoKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuY29yZS4kb3V0ZXIucmVtb3ZlQ2xhc3MoJ2xnLWdyYWJiaW5nJykuYWRkQ2xhc3MoJ2xnLWdyYWInKTtcbiAgICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgdGFwcGVkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gZXZlbnQgdHJpZ2dlcmVkIGFmdGVyIGFwcGVuZGluZyBzbGlkZSBjb250ZW50XG4gICAgICAgIF90aGlzLmNvcmUuJGVsLm9uKCdvbkFmZXJBcHBlbmRTbGlkZS5sZy50bS56b29tJywgZnVuY3Rpb24oZXZlbnQsIGluZGV4KSB7XG5cbiAgICAgICAgICAgIC8vIEdldCB0aGUgY3VycmVudCBlbGVtZW50XG4gICAgICAgICAgICB2YXIgJGltYWdlID0gX3RoaXMuY29yZS4kc2xpZGUuZXEoaW5kZXgpLmZpbmQoJy5sZy1pbWFnZScpO1xuXG4gICAgICAgICAgICAkaW1hZ2Uub24oJ2RibGNsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBhY3R1YWxTaXplKGV2ZW50LCAkaW1hZ2UsIGluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkaW1hZ2Uub24oJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgIGlmICghdGFwcGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcHBlZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXBwZWQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0YXBwZWQpO1xuICAgICAgICAgICAgICAgICAgICB0YXBwZWQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBhY3R1YWxTaXplKGV2ZW50LCAkaW1hZ2UsIGluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVXBkYXRlIHpvb20gb24gcmVzaXplIGFuZCBvcmllbnRhdGlvbmNoYW5nZVxuICAgICAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZS5sZy56b29tIHNjcm9sbC5sZy56b29tIG9yaWVudGF0aW9uY2hhbmdlLmxnLnpvb20nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIF90aGlzLnBhZ2VYID0gJCh3aW5kb3cpLndpZHRoKCkgLyAyO1xuICAgICAgICAgICAgX3RoaXMucGFnZVkgPSAoJCh3aW5kb3cpLmhlaWdodCgpIC8gMikgKyAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICAgICAgICB6b29tKHNjYWxlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnI2xnLXpvb20tb3V0Jykub24oJ2NsaWNrLmxnJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMuY29yZS4kb3V0ZXIuZmluZCgnLmxnLWN1cnJlbnQgLmxnLWltYWdlJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc2NhbGUgLT0gX3RoaXMuY29yZS5zLnNjYWxlO1xuICAgICAgICAgICAgICAgIGNhbGxTY2FsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcjbGctem9vbS1pbicpLm9uKCdjbGljay5sZycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLmNvcmUuJG91dGVyLmZpbmQoJy5sZy1jdXJyZW50IC5sZy1pbWFnZScpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHNjYWxlICs9IF90aGlzLmNvcmUucy5zY2FsZTtcbiAgICAgICAgICAgICAgICBjYWxsU2NhbGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnI2xnLWFjdHVhbC1zaXplJykub24oJ2NsaWNrLmxnJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGFjdHVhbFNpemUoZXZlbnQsIF90aGlzLmNvcmUuJHNsaWRlLmVxKF90aGlzLmNvcmUuaW5kZXgpLmZpbmQoJy5sZy1pbWFnZScpLCBfdGhpcy5jb3JlLmluZGV4LCB0cnVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gUmVzZXQgem9vbSBvbiBzbGlkZSBjaGFuZ2VcbiAgICAgICAgX3RoaXMuY29yZS4kZWwub24oJ29uQmVmb3JlU2xpZGUubGcudG0nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNjYWxlID0gMTtcbiAgICAgICAgICAgIF90aGlzLnJlc2V0Wm9vbSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBEcmFnIG9wdGlvbiBhZnRlciB6b29tXG4gICAgICAgIF90aGlzLnpvb21EcmFnKCk7XG5cbiAgICAgICAgX3RoaXMuem9vbVN3aXBlKCk7XG5cbiAgICB9O1xuXG4gICAgLy8gUmVzZXQgem9vbSBlZmZlY3RcbiAgICBab29tLnByb3RvdHlwZS5yZXNldFpvb20gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5jb3JlLiRvdXRlci5yZW1vdmVDbGFzcygnbGctem9vbWVkJyk7XG4gICAgICAgIHRoaXMuY29yZS4kc2xpZGUuZmluZCgnLmxnLWltZy13cmFwJykucmVtb3ZlQXR0cignc3R5bGUgZGF0YS14IGRhdGEteScpO1xuICAgICAgICB0aGlzLmNvcmUuJHNsaWRlLmZpbmQoJy5sZy1pbWFnZScpLnJlbW92ZUF0dHIoJ3N0eWxlIGRhdGEtc2NhbGUnKTtcblxuICAgICAgICAvLyBSZXNldCBwYWd4IHBhZ3kgdmFsdWVzIHRvIGNlbnRlclxuICAgICAgICB0aGlzLnBhZ2VYID0gJCh3aW5kb3cpLndpZHRoKCkgLyAyO1xuICAgICAgICB0aGlzLnBhZ2VZID0gKCQod2luZG93KS5oZWlnaHQoKSAvIDIpICsgJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgIH07XG5cbiAgICBab29tLnByb3RvdHlwZS56b29tU3dpcGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHN0YXJ0Q29vcmRzID0ge307XG4gICAgICAgIHZhciBlbmRDb29yZHMgPSB7fTtcbiAgICAgICAgdmFyIGlzTW92ZWQgPSBmYWxzZTtcblxuICAgICAgICAvLyBBbGxvdyB4IGRpcmVjdGlvbiBkcmFnXG4gICAgICAgIHZhciBhbGxvd1ggPSBmYWxzZTtcblxuICAgICAgICAvLyBBbGxvdyBZIGRpcmVjdGlvbiBkcmFnXG4gICAgICAgIHZhciBhbGxvd1kgPSBmYWxzZTtcblxuICAgICAgICBfdGhpcy5jb3JlLiRzbGlkZS5vbigndG91Y2hzdGFydC5sZycsIGZ1bmN0aW9uKGUpIHtcblxuICAgICAgICAgICAgaWYgKF90aGlzLmNvcmUuJG91dGVyLmhhc0NsYXNzKCdsZy16b29tZWQnKSkge1xuICAgICAgICAgICAgICAgIHZhciAkaW1hZ2UgPSBfdGhpcy5jb3JlLiRzbGlkZS5lcShfdGhpcy5jb3JlLmluZGV4KS5maW5kKCcubGctb2JqZWN0Jyk7XG5cbiAgICAgICAgICAgICAgICBhbGxvd1kgPSAkaW1hZ2UucHJvcCgnb2Zmc2V0SGVpZ2h0JykgKiAkaW1hZ2UuYXR0cignZGF0YS1zY2FsZScpID4gX3RoaXMuY29yZS4kb3V0ZXIuZmluZCgnLmxnJykuaGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgYWxsb3dYID0gJGltYWdlLnByb3AoJ29mZnNldFdpZHRoJykgKiAkaW1hZ2UuYXR0cignZGF0YS1zY2FsZScpID4gX3RoaXMuY29yZS4kb3V0ZXIuZmluZCgnLmxnJykud2lkdGgoKTtcbiAgICAgICAgICAgICAgICBpZiAoKGFsbG93WCB8fCBhbGxvd1kpKSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRDb29yZHMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBlLm9yaWdpbmFsRXZlbnQudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGUub3JpZ2luYWxFdmVudC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIF90aGlzLmNvcmUuJHNsaWRlLm9uKCd0b3VjaG1vdmUubGcnLCBmdW5jdGlvbihlKSB7XG5cbiAgICAgICAgICAgIGlmIChfdGhpcy5jb3JlLiRvdXRlci5oYXNDbGFzcygnbGctem9vbWVkJykpIHtcblxuICAgICAgICAgICAgICAgIHZhciBfJGVsID0gX3RoaXMuY29yZS4kc2xpZGUuZXEoX3RoaXMuY29yZS5pbmRleCkuZmluZCgnLmxnLWltZy13cmFwJyk7XG4gICAgICAgICAgICAgICAgdmFyIGRpc3RhbmNlWDtcbiAgICAgICAgICAgICAgICB2YXIgZGlzdGFuY2VZO1xuXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGlzTW92ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgZW5kQ29vcmRzID0ge1xuICAgICAgICAgICAgICAgICAgICB4OiBlLm9yaWdpbmFsRXZlbnQudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCxcbiAgICAgICAgICAgICAgICAgICAgeTogZS5vcmlnaW5hbEV2ZW50LnRhcmdldFRvdWNoZXNbMF0ucGFnZVlcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLy8gcmVzZXQgb3BhY2l0eSBhbmQgdHJhbnNpdGlvbiBkdXJhdGlvblxuICAgICAgICAgICAgICAgIF90aGlzLmNvcmUuJG91dGVyLmFkZENsYXNzKCdsZy16b29tLWRyYWdnaW5nJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYWxsb3dZKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlWSA9ICgtTWF0aC5hYnMoXyRlbC5hdHRyKCdkYXRhLXknKSkpICsgKGVuZENvb3Jkcy55IC0gc3RhcnRDb29yZHMueSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2VZID0gLU1hdGguYWJzKF8kZWwuYXR0cignZGF0YS15JykpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChhbGxvd1gpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2VYID0gKC1NYXRoLmFicyhfJGVsLmF0dHIoJ2RhdGEteCcpKSkgKyAoZW5kQ29vcmRzLnggLSBzdGFydENvb3Jkcy54KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZVggPSAtTWF0aC5hYnMoXyRlbC5hdHRyKCdkYXRhLXgnKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKChNYXRoLmFicyhlbmRDb29yZHMueCAtIHN0YXJ0Q29vcmRzLngpID4gMTUpIHx8IChNYXRoLmFicyhlbmRDb29yZHMueSAtIHN0YXJ0Q29vcmRzLnkpID4gMTUpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmNvcmUucy51c2VMZWZ0Rm9yWm9vbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXyRlbC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGRpc3RhbmNlWCArICdweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBkaXN0YW5jZVkgKyAncHgnXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8kZWwuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlM2QoJyArIGRpc3RhbmNlWCArICdweCwgJyArIGRpc3RhbmNlWSArICdweCwgMCknKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIF90aGlzLmNvcmUuJHNsaWRlLm9uKCd0b3VjaGVuZC5sZycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLmNvcmUuJG91dGVyLmhhc0NsYXNzKCdsZy16b29tZWQnKSkge1xuICAgICAgICAgICAgICAgIGlmIChpc01vdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzTW92ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY29yZS4kb3V0ZXIucmVtb3ZlQ2xhc3MoJ2xnLXpvb20tZHJhZ2dpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudG91Y2hlbmRab29tKHN0YXJ0Q29vcmRzLCBlbmRDb29yZHMsIGFsbG93WCwgYWxsb3dZKTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgWm9vbS5wcm90b3R5cGUuem9vbURyYWcgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgc3RhcnRDb29yZHMgPSB7fTtcbiAgICAgICAgdmFyIGVuZENvb3JkcyA9IHt9O1xuICAgICAgICB2YXIgaXNEcmFnaW5nID0gZmFsc2U7XG4gICAgICAgIHZhciBpc01vdmVkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gQWxsb3cgeCBkaXJlY3Rpb24gZHJhZ1xuICAgICAgICB2YXIgYWxsb3dYID0gZmFsc2U7XG5cbiAgICAgICAgLy8gQWxsb3cgWSBkaXJlY3Rpb24gZHJhZ1xuICAgICAgICB2YXIgYWxsb3dZID0gZmFsc2U7XG5cbiAgICAgICAgX3RoaXMuY29yZS4kc2xpZGUub24oJ21vdXNlZG93bi5sZy56b29tJywgZnVuY3Rpb24oZSkge1xuXG4gICAgICAgICAgICAvLyBleGVjdXRlIG9ubHkgb24gLmxnLW9iamVjdFxuICAgICAgICAgICAgdmFyICRpbWFnZSA9IF90aGlzLmNvcmUuJHNsaWRlLmVxKF90aGlzLmNvcmUuaW5kZXgpLmZpbmQoJy5sZy1vYmplY3QnKTtcblxuICAgICAgICAgICAgYWxsb3dZID0gJGltYWdlLnByb3AoJ29mZnNldEhlaWdodCcpICogJGltYWdlLmF0dHIoJ2RhdGEtc2NhbGUnKSA+IF90aGlzLmNvcmUuJG91dGVyLmZpbmQoJy5sZycpLmhlaWdodCgpO1xuICAgICAgICAgICAgYWxsb3dYID0gJGltYWdlLnByb3AoJ29mZnNldFdpZHRoJykgKiAkaW1hZ2UuYXR0cignZGF0YS1zY2FsZScpID4gX3RoaXMuY29yZS4kb3V0ZXIuZmluZCgnLmxnJykud2lkdGgoKTtcblxuICAgICAgICAgICAgaWYgKF90aGlzLmNvcmUuJG91dGVyLmhhc0NsYXNzKCdsZy16b29tZWQnKSkge1xuICAgICAgICAgICAgICAgIGlmICgkKGUudGFyZ2V0KS5oYXNDbGFzcygnbGctb2JqZWN0JykgJiYgKGFsbG93WCB8fCBhbGxvd1kpKSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRDb29yZHMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBlLnBhZ2VYLFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogZS5wYWdlWVxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIGlzRHJhZ2luZyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gKiogRml4IGZvciB3ZWJraXQgY3Vyc29yIGlzc3VlIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0yNjcyM1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jb3JlLiRvdXRlci5zY3JvbGxMZWZ0ICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNvcmUuJG91dGVyLnNjcm9sbExlZnQgLT0gMTtcblxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jb3JlLiRvdXRlci5yZW1vdmVDbGFzcygnbGctZ3JhYicpLmFkZENsYXNzKCdsZy1ncmFiYmluZycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdtb3VzZW1vdmUubGcuem9vbScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmIChpc0RyYWdpbmcpIHtcbiAgICAgICAgICAgICAgICB2YXIgXyRlbCA9IF90aGlzLmNvcmUuJHNsaWRlLmVxKF90aGlzLmNvcmUuaW5kZXgpLmZpbmQoJy5sZy1pbWctd3JhcCcpO1xuICAgICAgICAgICAgICAgIHZhciBkaXN0YW5jZVg7XG4gICAgICAgICAgICAgICAgdmFyIGRpc3RhbmNlWTtcblxuICAgICAgICAgICAgICAgIGlzTW92ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGVuZENvb3JkcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgeDogZS5wYWdlWCxcbiAgICAgICAgICAgICAgICAgICAgeTogZS5wYWdlWVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAvLyByZXNldCBvcGFjaXR5IGFuZCB0cmFuc2l0aW9uIGR1cmF0aW9uXG4gICAgICAgICAgICAgICAgX3RoaXMuY29yZS4kb3V0ZXIuYWRkQ2xhc3MoJ2xnLXpvb20tZHJhZ2dpbmcnKTtcblxuICAgICAgICAgICAgICAgIGlmIChhbGxvd1kpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2VZID0gKC1NYXRoLmFicyhfJGVsLmF0dHIoJ2RhdGEteScpKSkgKyAoZW5kQ29vcmRzLnkgLSBzdGFydENvb3Jkcy55KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZVkgPSAtTWF0aC5hYnMoXyRlbC5hdHRyKCdkYXRhLXknKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGFsbG93WCkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZVggPSAoLU1hdGguYWJzKF8kZWwuYXR0cignZGF0YS14JykpKSArIChlbmRDb29yZHMueCAtIHN0YXJ0Q29vcmRzLngpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlWCA9IC1NYXRoLmFicyhfJGVsLmF0dHIoJ2RhdGEteCcpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuY29yZS5zLnVzZUxlZnRGb3Jab29tKSB7XG4gICAgICAgICAgICAgICAgICAgIF8kZWwuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGRpc3RhbmNlWCArICdweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IGRpc3RhbmNlWSArICdweCdcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgXyRlbC5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUzZCgnICsgZGlzdGFuY2VYICsgJ3B4LCAnICsgZGlzdGFuY2VZICsgJ3B4LCAwKScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdtb3VzZXVwLmxnLnpvb20nLCBmdW5jdGlvbihlKSB7XG5cbiAgICAgICAgICAgIGlmIChpc0RyYWdpbmcpIHtcbiAgICAgICAgICAgICAgICBpc0RyYWdpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBfdGhpcy5jb3JlLiRvdXRlci5yZW1vdmVDbGFzcygnbGctem9vbS1kcmFnZ2luZycpO1xuXG4gICAgICAgICAgICAgICAgLy8gRml4IGZvciBjaHJvbWUgbW91c2UgbW92ZSBvbiBjbGlja1xuICAgICAgICAgICAgICAgIGlmIChpc01vdmVkICYmICgoc3RhcnRDb29yZHMueCAhPT0gZW5kQ29vcmRzLngpIHx8IChzdGFydENvb3Jkcy55ICE9PSBlbmRDb29yZHMueSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZENvb3JkcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGUucGFnZVgsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBlLnBhZ2VZXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnRvdWNoZW5kWm9vbShzdGFydENvb3JkcywgZW5kQ29vcmRzLCBhbGxvd1gsIGFsbG93WSk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpc01vdmVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF90aGlzLmNvcmUuJG91dGVyLnJlbW92ZUNsYXNzKCdsZy1ncmFiYmluZycpLmFkZENsYXNzKCdsZy1ncmFiJyk7XG5cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIFpvb20ucHJvdG90eXBlLnRvdWNoZW5kWm9vbSA9IGZ1bmN0aW9uKHN0YXJ0Q29vcmRzLCBlbmRDb29yZHMsIGFsbG93WCwgYWxsb3dZKSB7XG5cbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIF8kZWwgPSBfdGhpcy5jb3JlLiRzbGlkZS5lcShfdGhpcy5jb3JlLmluZGV4KS5maW5kKCcubGctaW1nLXdyYXAnKTtcbiAgICAgICAgdmFyICRpbWFnZSA9IF90aGlzLmNvcmUuJHNsaWRlLmVxKF90aGlzLmNvcmUuaW5kZXgpLmZpbmQoJy5sZy1vYmplY3QnKTtcbiAgICAgICAgdmFyIGRpc3RhbmNlWCA9ICgtTWF0aC5hYnMoXyRlbC5hdHRyKCdkYXRhLXgnKSkpICsgKGVuZENvb3Jkcy54IC0gc3RhcnRDb29yZHMueCk7XG4gICAgICAgIHZhciBkaXN0YW5jZVkgPSAoLU1hdGguYWJzKF8kZWwuYXR0cignZGF0YS15JykpKSArIChlbmRDb29yZHMueSAtIHN0YXJ0Q29vcmRzLnkpO1xuICAgICAgICB2YXIgbWluWSA9IChfdGhpcy5jb3JlLiRvdXRlci5maW5kKCcubGcnKS5oZWlnaHQoKSAtICRpbWFnZS5wcm9wKCdvZmZzZXRIZWlnaHQnKSkgLyAyO1xuICAgICAgICB2YXIgbWF4WSA9IE1hdGguYWJzKCgkaW1hZ2UucHJvcCgnb2Zmc2V0SGVpZ2h0JykgKiBNYXRoLmFicygkaW1hZ2UuYXR0cignZGF0YS1zY2FsZScpKSkgLSBfdGhpcy5jb3JlLiRvdXRlci5maW5kKCcubGcnKS5oZWlnaHQoKSArIG1pblkpO1xuICAgICAgICB2YXIgbWluWCA9IChfdGhpcy5jb3JlLiRvdXRlci5maW5kKCcubGcnKS53aWR0aCgpIC0gJGltYWdlLnByb3AoJ29mZnNldFdpZHRoJykpIC8gMjtcbiAgICAgICAgdmFyIG1heFggPSBNYXRoLmFicygoJGltYWdlLnByb3AoJ29mZnNldFdpZHRoJykgKiBNYXRoLmFicygkaW1hZ2UuYXR0cignZGF0YS1zY2FsZScpKSkgLSBfdGhpcy5jb3JlLiRvdXRlci5maW5kKCcubGcnKS53aWR0aCgpICsgbWluWCk7XG5cbiAgICAgICAgaWYgKChNYXRoLmFicyhlbmRDb29yZHMueCAtIHN0YXJ0Q29vcmRzLngpID4gMTUpIHx8IChNYXRoLmFicyhlbmRDb29yZHMueSAtIHN0YXJ0Q29vcmRzLnkpID4gMTUpKSB7XG4gICAgICAgICAgICBpZiAoYWxsb3dZKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlWSA8PSAtbWF4WSkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZVkgPSAtbWF4WTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRpc3RhbmNlWSA+PSAtbWluWSkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZVkgPSAtbWluWTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhbGxvd1gpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2VYIDw9IC1tYXhYKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlWCA9IC1tYXhYO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlzdGFuY2VYID49IC1taW5YKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlWCA9IC1taW5YO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGFsbG93WSkge1xuICAgICAgICAgICAgICAgIF8kZWwuYXR0cignZGF0YS15JywgTWF0aC5hYnMoZGlzdGFuY2VZKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRpc3RhbmNlWSA9IC1NYXRoLmFicyhfJGVsLmF0dHIoJ2RhdGEteScpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGFsbG93WCkge1xuICAgICAgICAgICAgICAgIF8kZWwuYXR0cignZGF0YS14JywgTWF0aC5hYnMoZGlzdGFuY2VYKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRpc3RhbmNlWCA9IC1NYXRoLmFicyhfJGVsLmF0dHIoJ2RhdGEteCcpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKF90aGlzLmNvcmUucy51c2VMZWZ0Rm9yWm9vbSkge1xuICAgICAgICAgICAgICAgIF8kZWwuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogZGlzdGFuY2VYICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBkaXN0YW5jZVkgKyAncHgnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF8kZWwuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlM2QoJyArIGRpc3RhbmNlWCArICdweCwgJyArIGRpc3RhbmNlWSArICdweCwgMCknKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfTtcblxuICAgIFpvb20ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIC8vIFVuYmluZCBhbGwgZXZlbnRzIGFkZGVkIGJ5IGxpZ2h0R2FsbGVyeSB6b29tIHBsdWdpblxuICAgICAgICBfdGhpcy5jb3JlLiRlbC5vZmYoJy5sZy56b29tJyk7XG4gICAgICAgICQod2luZG93KS5vZmYoJy5sZy56b29tJyk7XG4gICAgICAgIF90aGlzLmNvcmUuJHNsaWRlLm9mZignLmxnLnpvb20nKTtcbiAgICAgICAgX3RoaXMuY29yZS4kZWwub2ZmKCcubGcudG0uem9vbScpO1xuICAgICAgICBfdGhpcy5yZXNldFpvb20oKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KF90aGlzLnpvb21hYmxldGltZW91dCk7XG4gICAgICAgIF90aGlzLnpvb21hYmxldGltZW91dCA9IGZhbHNlO1xuICAgIH07XG5cbiAgICAkLmZuLmxpZ2h0R2FsbGVyeS5tb2R1bGVzLnpvb20gPSBab29tO1xuXG59KSgpO1xuXG5cbn0pKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9mb250cy9sZy5lb3RcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvZm9udHMvbGcuZW90XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL2ZvbnRzL2xnLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9mb250cy9sZy50dGZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvZm9udHMvbGcud29mZlwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9pbWcvbG9hZGluZy5naWZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvaW1nL3ZpZGVvLXBsYXkucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL2ltZy92aW1lby1wbGF5LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9pbWcveW91dHViZS1wbGF5LnBuZ1wiOyIsIi8qISBsaWdodGdhbGxlcnkgLSB2MS42LjExIC0gMjAxOC0wNS0yMlxuKiBodHRwOi8vc2FjaGluY2hvb2x1ci5naXRodWIuaW8vbGlnaHRHYWxsZXJ5L1xuKiBDb3B5cmlnaHQgKGMpIDIwMTggU2FjaGluIE47IExpY2Vuc2VkIEdQTHYzICovXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZSB1bmxlc3MgYW1kTW9kdWxlSWQgaXMgc2V0XG4gICAgZGVmaW5lKFsnanF1ZXJ5J10sIGZ1bmN0aW9uIChhMCkge1xuICAgICAgcmV0dXJuIChmYWN0b3J5KGEwKSk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAvLyBOb2RlLiBEb2VzIG5vdCB3b3JrIHdpdGggc3RyaWN0IENvbW1vbkpTLCBidXRcbiAgICAvLyBvbmx5IENvbW1vbkpTLWxpa2UgZW52aXJvbm1lbnRzIHRoYXQgc3VwcG9ydCBtb2R1bGUuZXhwb3J0cyxcbiAgICAvLyBsaWtlIE5vZGUuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoJ2pxdWVyeScpKTtcbiAgfSBlbHNlIHtcbiAgICBmYWN0b3J5KHJvb3RbXCJqUXVlcnlcIl0pO1xuICB9XG59KHRoaXMsIGZ1bmN0aW9uICgkKSB7XG5cbihmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgZGVmYXVsdHMgPSB7XG5cbiAgICAgICAgbW9kZTogJ2xnLXNsaWRlJyxcblxuICAgICAgICAvLyBFeCA6ICdlYXNlJ1xuICAgICAgICBjc3NFYXNpbmc6ICdlYXNlJyxcblxuICAgICAgICAvLydmb3IganF1ZXJ5IGFuaW1hdGlvbidcbiAgICAgICAgZWFzaW5nOiAnbGluZWFyJyxcbiAgICAgICAgc3BlZWQ6IDYwMCxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGFkZENsYXNzOiAnJyxcbiAgICAgICAgc3RhcnRDbGFzczogJ2xnLXN0YXJ0LXpvb20nLFxuICAgICAgICBiYWNrZHJvcER1cmF0aW9uOiAxNTAsXG4gICAgICAgIGhpZGVCYXJzRGVsYXk6IDYwMDAsXG5cbiAgICAgICAgdXNlTGVmdDogZmFsc2UsXG5cbiAgICAgICAgY2xvc2FibGU6IHRydWUsXG4gICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgIGVzY0tleTogdHJ1ZSxcbiAgICAgICAga2V5UHJlc3M6IHRydWUsXG4gICAgICAgIGNvbnRyb2xzOiB0cnVlLFxuICAgICAgICBzbGlkZUVuZEFuaW1hdG9pbjogdHJ1ZSxcbiAgICAgICAgaGlkZUNvbnRyb2xPbkVuZDogZmFsc2UsXG4gICAgICAgIG1vdXNld2hlZWw6IHRydWUsXG5cbiAgICAgICAgZ2V0Q2FwdGlvbkZyb21UaXRsZU9yQWx0OiB0cnVlLFxuXG4gICAgICAgIC8vIC5sZy1pdGVtIHx8ICcubGctc3ViLWh0bWwnXG4gICAgICAgIGFwcGVuZFN1Ykh0bWxUbzogJy5sZy1zdWItaHRtbCcsXG5cbiAgICAgICAgc3ViSHRtbFNlbGVjdG9yUmVsYXRpdmU6IGZhbHNlLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAZGVzYyBudW1iZXIgb2YgcHJlbG9hZCBzbGlkZXNcbiAgICAgICAgICogd2lsbCBleGljdXRlIG9ubHkgYWZ0ZXIgdGhlIGN1cnJlbnQgc2xpZGUgaXMgZnVsbHkgbG9hZGVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXggeW91IGNsaWNrZWQgb24gNHRoIGltYWdlIGFuZCBpZiBwcmVsb2FkID0gMSB0aGVuIDNyZCBzbGlkZSBhbmQgNXRoXG4gICAgICAgICAqIHNsaWRlIHdpbGwgYmUgbG9hZGVkIGluIHRoZSBiYWNrZ3JvdW5kIGFmdGVyIHRoZSA0dGggc2xpZGUgaXMgZnVsbHkgbG9hZGVkLi5cbiAgICAgICAgICogaWYgcHJlbG9hZCBpcyAyIHRoZW4gMm5kIDNyZCA1dGggNnRoIHNsaWRlcyB3aWxsIGJlIHByZWxvYWRlZC4uIC4uLiAuLi5cbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIHByZWxvYWQ6IDEsXG4gICAgICAgIHNob3dBZnRlckxvYWQ6IHRydWUsXG4gICAgICAgIHNlbGVjdG9yOiAnJyxcbiAgICAgICAgc2VsZWN0V2l0aGluOiAnJyxcbiAgICAgICAgbmV4dEh0bWw6ICcnLFxuICAgICAgICBwcmV2SHRtbDogJycsXG5cbiAgICAgICAgLy8gMCwgMVxuICAgICAgICBpbmRleDogZmFsc2UsXG5cbiAgICAgICAgaWZyYW1lTWF4V2lkdGg6ICcxMDAlJyxcblxuICAgICAgICBkb3dubG9hZDogdHJ1ZSxcbiAgICAgICAgY291bnRlcjogdHJ1ZSxcbiAgICAgICAgYXBwZW5kQ291bnRlclRvOiAnLmxnLXRvb2xiYXInLFxuXG4gICAgICAgIHN3aXBlVGhyZXNob2xkOiA1MCxcbiAgICAgICAgZW5hYmxlU3dpcGU6IHRydWUsXG4gICAgICAgIGVuYWJsZURyYWc6IHRydWUsXG5cbiAgICAgICAgZHluYW1pYzogZmFsc2UsXG4gICAgICAgIGR5bmFtaWNFbDogW10sXG4gICAgICAgIGdhbGxlcnlJZDogMVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBQbHVnaW4oZWxlbWVudCwgb3B0aW9ucykge1xuXG4gICAgICAgIC8vIEN1cnJlbnQgbGlnaHRHYWxsZXJ5IGVsZW1lbnRcbiAgICAgICAgdGhpcy5lbCA9IGVsZW1lbnQ7XG5cbiAgICAgICAgLy8gQ3VycmVudCBqcXVlcnkgZWxlbWVudFxuICAgICAgICB0aGlzLiRlbCA9ICQoZWxlbWVudCk7XG5cbiAgICAgICAgLy8gbGlnaHRHYWxsZXJ5IHNldHRpbmdzXG4gICAgICAgIHRoaXMucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgICAgLy8gV2hlbiB1c2luZyBkeW5hbWljIG1vZGUsIGVuc3VyZSBkeW5hbWljRWwgaXMgYW4gYXJyYXlcbiAgICAgICAgaWYgKHRoaXMucy5keW5hbWljICYmIHRoaXMucy5keW5hbWljRWwgIT09ICd1bmRlZmluZWQnICYmIHRoaXMucy5keW5hbWljRWwuY29uc3RydWN0b3IgPT09IEFycmF5ICYmICF0aGlzLnMuZHluYW1pY0VsLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgKCdXaGVuIHVzaW5nIGR5bmFtaWMgbW9kZSwgeW91IG11c3QgYWxzbyBkZWZpbmUgZHluYW1pY0VsIGFzIGFuIEFycmF5LicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbGlnaHRHYWxsZXJ5IG1vZHVsZXNcbiAgICAgICAgdGhpcy5tb2R1bGVzID0ge307XG5cbiAgICAgICAgLy8gZmFsc2Ugd2hlbiBsaWdodGdhbGxlcnkgY29tcGxldGUgZmlyc3Qgc2xpZGU7XG4gICAgICAgIHRoaXMubEdhbGxlcnlPbiA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMubGdCdXN5ID0gZmFsc2U7XG5cbiAgICAgICAgLy8gVGltZW91dCBmdW5jdGlvbiBmb3IgaGlkaW5nIGNvbnRyb2xzO1xuICAgICAgICB0aGlzLmhpZGVCYXJ0aW1lb3V0ID0gZmFsc2U7XG5cbiAgICAgICAgLy8gVG8gZGV0ZXJtaW5lIGJyb3dzZXIgc3VwcG9ydHMgZm9yIHRvdWNoIGV2ZW50cztcbiAgICAgICAgdGhpcy5pc1RvdWNoID0gKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XG5cbiAgICAgICAgLy8gRGlzYWJsZSBoaWRlQ29udHJvbE9uRW5kIGlmIHNpbGRlRW5kQW5pbWF0aW9uIGlzIHRydWVcbiAgICAgICAgaWYgKHRoaXMucy5zbGlkZUVuZEFuaW1hdG9pbikge1xuICAgICAgICAgICAgdGhpcy5zLmhpZGVDb250cm9sT25FbmQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEdhbGxlcnkgaXRlbXNcbiAgICAgICAgaWYgKHRoaXMucy5keW5hbWljKSB7XG4gICAgICAgICAgICB0aGlzLiRpdGVtcyA9IHRoaXMucy5keW5hbWljRWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zLnNlbGVjdG9yID09PSAndGhpcycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRpdGVtcyA9IHRoaXMuJGVsO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnMuc2VsZWN0b3IgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucy5zZWxlY3RXaXRoaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kaXRlbXMgPSAkKHRoaXMucy5zZWxlY3RXaXRoaW4pLmZpbmQodGhpcy5zLnNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRpdGVtcyA9IHRoaXMuJGVsLmZpbmQoJCh0aGlzLnMuc2VsZWN0b3IpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuJGl0ZW1zID0gdGhpcy4kZWwuY2hpbGRyZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC5sZy1pdGVtXG4gICAgICAgIHRoaXMuJHNsaWRlID0gJyc7XG5cbiAgICAgICAgLy8gLmxnLW91dGVyXG4gICAgICAgIHRoaXMuJG91dGVyID0gJyc7XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgUGx1Z2luLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAvLyBzLnByZWxvYWQgc2hvdWxkIG5vdCBiZSBtb3JlIHRoYW4gJGl0ZW0ubGVuZ3RoXG4gICAgICAgIGlmIChfdGhpcy5zLnByZWxvYWQgPiBfdGhpcy4kaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBfdGhpcy5zLnByZWxvYWQgPSBfdGhpcy4kaXRlbXMubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgZHluYW1pYyBvcHRpb24gaXMgZW5hYmxlZCBleGVjdXRlIGltbWVkaWF0ZWx5XG4gICAgICAgIHZhciBfaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuICAgICAgICBpZiAoX2hhc2guaW5kZXhPZignbGc9JyArIHRoaXMucy5nYWxsZXJ5SWQpID4gMCkge1xuXG4gICAgICAgICAgICBfdGhpcy5pbmRleCA9IHBhcnNlSW50KF9oYXNoLnNwbGl0KCcmc2xpZGU9JylbMV0sIDEwKTtcblxuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdsZy1mcm9tLWhhc2gnKTtcbiAgICAgICAgICAgIGlmICghJCgnYm9keScpLmhhc0NsYXNzKCdsZy1vbicpKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYnVpbGQoX3RoaXMuaW5kZXgpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdsZy1vbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF90aGlzLnMuZHluYW1pYykge1xuXG4gICAgICAgICAgICBfdGhpcy4kZWwudHJpZ2dlcignb25CZWZvcmVPcGVuLmxnJyk7XG5cbiAgICAgICAgICAgIF90aGlzLmluZGV4ID0gX3RoaXMucy5pbmRleCB8fCAwO1xuXG4gICAgICAgICAgICAvLyBwcmV2ZW50IGFjY2lkZW50YWwgZG91YmxlIGV4ZWN1dGlvblxuICAgICAgICAgICAgaWYgKCEkKCdib2R5JykuaGFzQ2xhc3MoJ2xnLW9uJykpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5idWlsZChfdGhpcy5pbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnbGctb24nKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgLy8gVXNpbmcgZGlmZmVyZW50IG5hbWVzcGFjZSBmb3IgY2xpY2sgYmVjYXVzZSBjbGljayBldmVudCBzaG91bGQgbm90IHVuYmluZCBpZiBzZWxlY3RvciBpcyBzYW1lIG9iamVjdCgndGhpcycpXG4gICAgICAgICAgICBfdGhpcy4kaXRlbXMub24oJ2NsaWNrLmxnY3VzdG9tJywgZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICAgICAgICAgIC8vIEZvciBJRThcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX3RoaXMuJGVsLnRyaWdnZXIoJ29uQmVmb3JlT3Blbi5sZycpO1xuXG4gICAgICAgICAgICAgICAgX3RoaXMuaW5kZXggPSBfdGhpcy5zLmluZGV4IHx8IF90aGlzLiRpdGVtcy5pbmRleCh0aGlzKTtcblxuICAgICAgICAgICAgICAgIC8vIHByZXZlbnQgYWNjaWRlbnRhbCBkb3VibGUgZXhlY3V0aW9uXG4gICAgICAgICAgICAgICAgaWYgKCEkKCdib2R5JykuaGFzQ2xhc3MoJ2xnLW9uJykpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYnVpbGQoX3RoaXMuaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2xnLW9uJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBQbHVnaW4ucHJvdG90eXBlLmJ1aWxkID0gZnVuY3Rpb24oaW5kZXgpIHtcblxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIF90aGlzLnN0cnVjdHVyZSgpO1xuXG4gICAgICAgIC8vIG1vZHVsZSBjb25zdHJ1Y3RvclxuICAgICAgICAkLmVhY2goJC5mbi5saWdodEdhbGxlcnkubW9kdWxlcywgZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICBfdGhpcy5tb2R1bGVzW2tleV0gPSBuZXcgJC5mbi5saWdodEdhbGxlcnkubW9kdWxlc1trZXldKF90aGlzLmVsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gaW5pdGlhdGUgc2xpZGUgZnVuY3Rpb25cbiAgICAgICAgX3RoaXMuc2xpZGUoaW5kZXgsIGZhbHNlLCBmYWxzZSwgZmFsc2UpO1xuXG4gICAgICAgIGlmIChfdGhpcy5zLmtleVByZXNzKSB7XG4gICAgICAgICAgICBfdGhpcy5rZXlQcmVzcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF90aGlzLiRpdGVtcy5sZW5ndGggPiAxKSB7XG5cbiAgICAgICAgICAgIF90aGlzLmFycm93KCk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZW5hYmxlRHJhZygpO1xuICAgICAgICAgICAgICAgIF90aGlzLmVuYWJsZVN3aXBlKCk7XG4gICAgICAgICAgICB9LCA1MCk7XG5cbiAgICAgICAgICAgIGlmIChfdGhpcy5zLm1vdXNld2hlZWwpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5tb3VzZXdoZWVsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdGhpcy4kc2xpZGUub24oJ2NsaWNrLmxnJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuJGVsLnRyaWdnZXIoJ29uU2xpZGVDbGljay5sZycpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy5jb3VudGVyKCk7XG5cbiAgICAgICAgX3RoaXMuY2xvc2VHYWxsZXJ5KCk7XG5cbiAgICAgICAgX3RoaXMuJGVsLnRyaWdnZXIoJ29uQWZ0ZXJPcGVuLmxnJyk7XG5cbiAgICAgICAgLy8gSGlkZSBjb250cm9sbGVycyBpZiBtb3VzZSBkb2Vzbid0IG1vdmUgZm9yIHNvbWUgcGVyaW9kXG4gICAgICAgIF90aGlzLiRvdXRlci5vbignbW91c2Vtb3ZlLmxnIGNsaWNrLmxnIHRvdWNoc3RhcnQubGcnLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgX3RoaXMuJG91dGVyLnJlbW92ZUNsYXNzKCdsZy1oaWRlLWl0ZW1zJyk7XG5cbiAgICAgICAgICAgIGNsZWFyVGltZW91dChfdGhpcy5oaWRlQmFydGltZW91dCk7XG5cbiAgICAgICAgICAgIC8vIFRpbWVvdXQgd2lsbCBiZSBjbGVhcmVkIG9uIGVhY2ggc2xpZGUgbW92ZW1lbnQgYWxzb1xuICAgICAgICAgICAgX3RoaXMuaGlkZUJhcnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLiRvdXRlci5hZGRDbGFzcygnbGctaGlkZS1pdGVtcycpO1xuICAgICAgICAgICAgfSwgX3RoaXMucy5oaWRlQmFyc0RlbGF5KTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBfdGhpcy4kb3V0ZXIudHJpZ2dlcignbW91c2Vtb3ZlLmxnJyk7XG5cbiAgICB9O1xuXG4gICAgUGx1Z2luLnByb3RvdHlwZS5zdHJ1Y3R1cmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGxpc3QgPSAnJztcbiAgICAgICAgdmFyIGNvbnRyb2xzID0gJyc7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIHN1Ykh0bWxDb250ID0gJyc7XG4gICAgICAgIHZhciB0ZW1wbGF0ZTtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAkKCdib2R5JykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwibGctYmFja2Ryb3BcIj48L2Rpdj4nKTtcbiAgICAgICAgJCgnLmxnLWJhY2tkcm9wJykuY3NzKCd0cmFuc2l0aW9uLWR1cmF0aW9uJywgdGhpcy5zLmJhY2tkcm9wRHVyYXRpb24gKyAnbXMnKTtcblxuICAgICAgICAvLyBDcmVhdGUgZ2FsbGVyeSBpdGVtc1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy4kaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxpc3QgKz0gJzxkaXYgY2xhc3M9XCJsZy1pdGVtXCI+PC9kaXY+JztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyZWF0ZSBjb250cm9sbHNcbiAgICAgICAgaWYgKHRoaXMucy5jb250cm9scyAmJiB0aGlzLiRpdGVtcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBjb250cm9scyA9ICc8ZGl2IGNsYXNzPVwibGctYWN0aW9uc1wiPicgK1xuICAgICAgICAgICAgICAgICc8YnV0dG9uIGNsYXNzPVwibGctcHJldiBsZy1pY29uXCI+JyArIHRoaXMucy5wcmV2SHRtbCArICc8L2J1dHRvbj4nICtcbiAgICAgICAgICAgICAgICAnPGJ1dHRvbiBjbGFzcz1cImxnLW5leHQgbGctaWNvblwiPicgKyB0aGlzLnMubmV4dEh0bWwgKyAnPC9idXR0b24+JyArXG4gICAgICAgICAgICAgICAgJzwvZGl2Pic7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zLmFwcGVuZFN1Ykh0bWxUbyA9PT0gJy5sZy1zdWItaHRtbCcpIHtcbiAgICAgICAgICAgIHN1Ykh0bWxDb250ID0gJzxkaXYgY2xhc3M9XCJsZy1zdWItaHRtbFwiPjwvZGl2Pic7XG4gICAgICAgIH1cblxuICAgICAgICB0ZW1wbGF0ZSA9ICc8ZGl2IGNsYXNzPVwibGctb3V0ZXIgJyArIHRoaXMucy5hZGRDbGFzcyArICcgJyArIHRoaXMucy5zdGFydENsYXNzICsgJ1wiPicgK1xuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJsZ1wiIHN0eWxlPVwid2lkdGg6JyArIHRoaXMucy53aWR0aCArICc7IGhlaWdodDonICsgdGhpcy5zLmhlaWdodCArICdcIj4nICtcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibGctaW5uZXJcIj4nICsgbGlzdCArICc8L2Rpdj4nICtcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibGctdG9vbGJhciBsZy1ncm91cFwiPicgK1xuICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwibGctY2xvc2UgbGctaWNvblwiPjwvc3Bhbj4nICtcbiAgICAgICAgICAgICc8L2Rpdj4nICtcbiAgICAgICAgICAgIGNvbnRyb2xzICtcbiAgICAgICAgICAgIHN1Ykh0bWxDb250ICtcbiAgICAgICAgICAgICc8L2Rpdj4nICtcbiAgICAgICAgICAgICc8L2Rpdj4nO1xuXG4gICAgICAgICQoJ2JvZHknKS5hcHBlbmQodGVtcGxhdGUpO1xuICAgICAgICB0aGlzLiRvdXRlciA9ICQoJy5sZy1vdXRlcicpO1xuICAgICAgICB0aGlzLiRzbGlkZSA9IHRoaXMuJG91dGVyLmZpbmQoJy5sZy1pdGVtJyk7XG5cbiAgICAgICAgaWYgKHRoaXMucy51c2VMZWZ0KSB7XG4gICAgICAgICAgICB0aGlzLiRvdXRlci5hZGRDbGFzcygnbGctdXNlLWxlZnQnKTtcblxuICAgICAgICAgICAgLy8gU2V0IG1vZGUgbGctc2xpZGUgaWYgdXNlIGxlZnQgaXMgdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucy5tb2RlID0gJ2xnLXNsaWRlJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJG91dGVyLmFkZENsYXNzKCdsZy11c2UtY3NzMycpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRm9yIGZpeGVkIGhlaWdodCBnYWxsZXJ5XG4gICAgICAgIF90aGlzLnNldFRvcCgpO1xuICAgICAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZS5sZyBvcmllbnRhdGlvbmNoYW5nZS5sZycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRUb3AoKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGFkZCBjbGFzcyBsZy1jdXJyZW50IHRvIHJlbW92ZSBpbml0aWFsIHRyYW5zaXRpb25cbiAgICAgICAgdGhpcy4kc2xpZGUuZXEodGhpcy5pbmRleCkuYWRkQ2xhc3MoJ2xnLWN1cnJlbnQnKTtcblxuICAgICAgICAvLyBhZGQgQ2xhc3MgZm9yIGNzcyBzdXBwb3J0IGFuZCB0cmFuc2l0aW9uIG1vZGVcbiAgICAgICAgaWYgKHRoaXMuZG9Dc3MoKSkge1xuICAgICAgICAgICAgdGhpcy4kb3V0ZXIuYWRkQ2xhc3MoJ2xnLWNzczMnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJG91dGVyLmFkZENsYXNzKCdsZy1jc3MnKTtcblxuICAgICAgICAgICAgLy8gU2V0IHNwZWVkIDAgYmVjYXVzZSBubyBhbmltYXRpb24gd2lsbCBoYXBwZW4gaWYgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgY3NzM1xuICAgICAgICAgICAgdGhpcy5zLnNwZWVkID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJG91dGVyLmFkZENsYXNzKHRoaXMucy5tb2RlKTtcblxuICAgICAgICBpZiAodGhpcy5zLmVuYWJsZURyYWcgJiYgdGhpcy4kaXRlbXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhpcy4kb3V0ZXIuYWRkQ2xhc3MoJ2xnLWdyYWInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnMuc2hvd0FmdGVyTG9hZCkge1xuICAgICAgICAgICAgdGhpcy4kb3V0ZXIuYWRkQ2xhc3MoJ2xnLXNob3ctYWZ0ZXItbG9hZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZG9Dc3MoKSkge1xuICAgICAgICAgICAgdmFyICRpbm5lciA9IHRoaXMuJG91dGVyLmZpbmQoJy5sZy1pbm5lcicpO1xuICAgICAgICAgICAgJGlubmVyLmNzcygndHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nLCB0aGlzLnMuY3NzRWFzaW5nKTtcbiAgICAgICAgICAgICRpbm5lci5jc3MoJ3RyYW5zaXRpb24tZHVyYXRpb24nLCB0aGlzLnMuc3BlZWQgKyAnbXMnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCcubGctYmFja2Ryb3AnKS5hZGRDbGFzcygnaW4nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIF90aGlzLiRvdXRlci5hZGRDbGFzcygnbGctdmlzaWJsZScpO1xuICAgICAgICB9LCB0aGlzLnMuYmFja2Ryb3BEdXJhdGlvbik7XG5cbiAgICAgICAgaWYgKHRoaXMucy5kb3dubG9hZCkge1xuICAgICAgICAgICAgdGhpcy4kb3V0ZXIuZmluZCgnLmxnLXRvb2xiYXInKS5hcHBlbmQoJzxhIGlkPVwibGctZG93bmxvYWRcIiB0YXJnZXQ9XCJfYmxhbmtcIiBkb3dubG9hZCBjbGFzcz1cImxnLWRvd25sb2FkIGxnLWljb25cIj48L2E+Jyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTdG9yZSB0aGUgY3VycmVudCBzY3JvbGwgdG9wIHZhbHVlIHRvIHNjcm9sbCBiYWNrIGFmdGVyIGNsb3NpbmcgdGhlIGdhbGxlcnkuLlxuICAgICAgICB0aGlzLnByZXZTY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cbiAgICB9O1xuXG4gICAgLy8gRm9yIGZpeGVkIGhlaWdodCBnYWxsZXJ5XG4gICAgUGx1Z2luLnByb3RvdHlwZS5zZXRUb3AgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMucy5oZWlnaHQgIT09ICcxMDAlJykge1xuICAgICAgICAgICAgdmFyIHdIID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuICAgICAgICAgICAgdmFyIHRvcCA9ICh3SCAtIHBhcnNlSW50KHRoaXMucy5oZWlnaHQsIDEwKSkgLyAyO1xuICAgICAgICAgICAgdmFyICRsR2FsbGVyeSA9IHRoaXMuJG91dGVyLmZpbmQoJy5sZycpO1xuICAgICAgICAgICAgaWYgKHdIID49IHBhcnNlSW50KHRoaXMucy5oZWlnaHQsIDEwKSkge1xuICAgICAgICAgICAgICAgICRsR2FsbGVyeS5jc3MoJ3RvcCcsIHRvcCArICdweCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkbEdhbGxlcnkuY3NzKCd0b3AnLCAnMHB4Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gRmluZCBjc3MzIHN1cHBvcnRcbiAgICBQbHVnaW4ucHJvdG90eXBlLmRvQ3NzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIGNoZWNrIGZvciBjc3MgYW5pbWF0aW9uIHN1cHBvcnRcbiAgICAgICAgdmFyIHN1cHBvcnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciB0cmFuc2l0aW9uID0gWyd0cmFuc2l0aW9uJywgJ01velRyYW5zaXRpb24nLCAnV2Via2l0VHJhbnNpdGlvbicsICdPVHJhbnNpdGlvbicsICdtc1RyYW5zaXRpb24nLCAnS2h0bWxUcmFuc2l0aW9uJ107XG4gICAgICAgICAgICB2YXIgcm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0cmFuc2l0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRyYW5zaXRpb25baV0gaW4gcm9vdC5zdHlsZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHN1cHBvcnQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqICBAZGVzYyBDaGVjayB0aGUgZ2l2ZW4gc3JjIGlzIHZpZGVvXG4gICAgICogIEBwYXJhbSB7U3RyaW5nfSBzcmNcbiAgICAgKiAgQHJldHVybiB7T2JqZWN0fSB2aWRlbyB0eXBlXG4gICAgICogIEV4OnsgeW91dHViZSAgOiAgW1wiLy93d3cueW91dHViZS5jb20vd2F0Y2g/dj1jMGFzSmdTeXhjWVwiLCBcImMwYXNKZ1N5eGNZXCJdIH1cbiAgICAgKi9cbiAgICBQbHVnaW4ucHJvdG90eXBlLmlzVmlkZW8gPSBmdW5jdGlvbihzcmMsIGluZGV4KSB7XG5cbiAgICAgICAgdmFyIGh0bWw7XG4gICAgICAgIGlmICh0aGlzLnMuZHluYW1pYykge1xuICAgICAgICAgICAgaHRtbCA9IHRoaXMucy5keW5hbWljRWxbaW5kZXhdLmh0bWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBodG1sID0gdGhpcy4kaXRlbXMuZXEoaW5kZXgpLmF0dHIoJ2RhdGEtaHRtbCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIGlmKGh0bWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBodG1sNTogdHJ1ZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2xpZ2h0R2FsbGVyeSA6LSBkYXRhLXNyYyBpcyBub3QgcHZvdmlkZWQgb24gc2xpZGUgaXRlbSAnICsgKGluZGV4ICsgMSkgKyAnLiBQbGVhc2UgbWFrZSBzdXJlIHRoZSBzZWxlY3RvciBwcm9wZXJ0eSBpcyBwcm9wZXJseSBjb25maWd1cmVkLiBNb3JlIGluZm8gLSBodHRwOi8vc2FjaGluY2hvb2x1ci5naXRodWIuaW8vbGlnaHRHYWxsZXJ5L2RlbW9zL2h0bWwtbWFya3VwLmh0bWwnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgeW91dHViZSA9IHNyYy5tYXRjaCgvXFwvXFwvKD86d3d3XFwuKT95b3V0dSg/OlxcLmJlfGJlXFwuY29tfGJlLW5vY29va2llXFwuY29tKVxcLyg/OndhdGNoXFw/dj18ZW1iZWRcXC8pPyhbYS16MC05XFwtXFxfXFwlXSspL2kpO1xuICAgICAgICB2YXIgdmltZW8gPSBzcmMubWF0Y2goL1xcL1xcLyg/Ond3d1xcLik/dmltZW8uY29tXFwvKFswLTlhLXpcXC1fXSspL2kpO1xuICAgICAgICB2YXIgZGFpbHltb3Rpb24gPSBzcmMubWF0Y2goL1xcL1xcLyg/Ond3d1xcLik/ZGFpLmx5XFwvKFswLTlhLXpcXC1fXSspL2kpO1xuICAgICAgICB2YXIgdmsgPSBzcmMubWF0Y2goL1xcL1xcLyg/Ond3d1xcLik/KD86dmtcXC5jb218dmtvbnRha3RlXFwucnUpXFwvKD86dmlkZW9fZXh0XFwucGhwXFw/KSguKikvaSk7XG5cbiAgICAgICAgaWYgKHlvdXR1YmUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgeW91dHViZTogeW91dHViZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmICh2aW1lbykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB2aW1lbzogdmltZW9cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAoZGFpbHltb3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZGFpbHltb3Rpb246IGRhaWx5bW90aW9uXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKHZrKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZrOiB2a1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiAgQGRlc2MgQ3JlYXRlIGltYWdlIGNvdW50ZXJcbiAgICAgKiAgRXg6IDEvMTBcbiAgICAgKi9cbiAgICBQbHVnaW4ucHJvdG90eXBlLmNvdW50ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMucy5jb3VudGVyKSB7XG4gICAgICAgICAgICAkKHRoaXMucy5hcHBlbmRDb3VudGVyVG8pLmFwcGVuZCgnPGRpdiBpZD1cImxnLWNvdW50ZXJcIj48c3BhbiBpZD1cImxnLWNvdW50ZXItY3VycmVudFwiPicgKyAocGFyc2VJbnQodGhpcy5pbmRleCwgMTApICsgMSkgKyAnPC9zcGFuPiAvIDxzcGFuIGlkPVwibGctY291bnRlci1hbGxcIj4nICsgdGhpcy4kaXRlbXMubGVuZ3RoICsgJzwvc3Bhbj48L2Rpdj4nKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiAgQGRlc2MgYWRkIHN1Yi1odG1sIGludG8gdGhlIHNsaWRlXG4gICAgICogIEBwYXJhbSB7TnVtYmVyfSBpbmRleCAtIGluZGV4IG9mIHRoZSBzbGlkZVxuICAgICAqL1xuICAgIFBsdWdpbi5wcm90b3R5cGUuYWRkSHRtbCA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgIHZhciBzdWJIdG1sID0gbnVsbDtcbiAgICAgICAgdmFyIHN1Ykh0bWxVcmw7XG4gICAgICAgIHZhciAkY3VycmVudEVsZTtcbiAgICAgICAgaWYgKHRoaXMucy5keW5hbWljKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zLmR5bmFtaWNFbFtpbmRleF0uc3ViSHRtbFVybCkge1xuICAgICAgICAgICAgICAgIHN1Ykh0bWxVcmwgPSB0aGlzLnMuZHluYW1pY0VsW2luZGV4XS5zdWJIdG1sVXJsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdWJIdG1sID0gdGhpcy5zLmR5bmFtaWNFbFtpbmRleF0uc3ViSHRtbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRjdXJyZW50RWxlID0gdGhpcy4kaXRlbXMuZXEoaW5kZXgpO1xuICAgICAgICAgICAgaWYgKCRjdXJyZW50RWxlLmF0dHIoJ2RhdGEtc3ViLWh0bWwtdXJsJykpIHtcbiAgICAgICAgICAgICAgICBzdWJIdG1sVXJsID0gJGN1cnJlbnRFbGUuYXR0cignZGF0YS1zdWItaHRtbC11cmwnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3ViSHRtbCA9ICRjdXJyZW50RWxlLmF0dHIoJ2RhdGEtc3ViLWh0bWwnKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zLmdldENhcHRpb25Gcm9tVGl0bGVPckFsdCAmJiAhc3ViSHRtbCkge1xuICAgICAgICAgICAgICAgICAgICBzdWJIdG1sID0gJGN1cnJlbnRFbGUuYXR0cigndGl0bGUnKSB8fCAkY3VycmVudEVsZS5maW5kKCdpbWcnKS5maXJzdCgpLmF0dHIoJ2FsdCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc3ViSHRtbFVybCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdWJIdG1sICE9PSAndW5kZWZpbmVkJyAmJiBzdWJIdG1sICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBnZXQgZmlyc3QgbGV0dGVyIG9mIHN1Ymh0bWxcbiAgICAgICAgICAgICAgICAvLyBpZiBmaXJzdCBsZXR0ZXIgc3RhcnRzIHdpdGggLiBvciAjIGdldCB0aGUgaHRtbCBmb3JtIHRoZSBqUXVlcnkgb2JqZWN0XG4gICAgICAgICAgICAgICAgdmFyIGZMID0gc3ViSHRtbC5zdWJzdHJpbmcoMCwgMSk7XG4gICAgICAgICAgICAgICAgaWYgKGZMID09PSAnLicgfHwgZkwgPT09ICcjJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zLnN1Ykh0bWxTZWxlY3RvclJlbGF0aXZlICYmICF0aGlzLnMuZHluYW1pYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ViSHRtbCA9ICRjdXJyZW50RWxlLmZpbmQoc3ViSHRtbCkuaHRtbCgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ViSHRtbCA9ICQoc3ViSHRtbCkuaHRtbCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdWJIdG1sID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zLmFwcGVuZFN1Ykh0bWxUbyA9PT0gJy5sZy1zdWItaHRtbCcpIHtcblxuICAgICAgICAgICAgaWYgKHN1Ykh0bWxVcmwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRvdXRlci5maW5kKHRoaXMucy5hcHBlbmRTdWJIdG1sVG8pLmxvYWQoc3ViSHRtbFVybCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuJG91dGVyLmZpbmQodGhpcy5zLmFwcGVuZFN1Ykh0bWxUbykuaHRtbChzdWJIdG1sKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpZiAoc3ViSHRtbFVybCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHNsaWRlLmVxKGluZGV4KS5sb2FkKHN1Ykh0bWxVcmwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzbGlkZS5lcShpbmRleCkuYXBwZW5kKHN1Ykh0bWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIGxnLWVtcHR5LWh0bWwgY2xhc3MgaWYgdGl0bGUgZG9lc24ndCBleGlzdFxuICAgICAgICBpZiAodHlwZW9mIHN1Ykh0bWwgIT09ICd1bmRlZmluZWQnICYmIHN1Ykh0bWwgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChzdWJIdG1sID09PSAnJykge1xuICAgICAgICAgICAgICAgIHRoaXMuJG91dGVyLmZpbmQodGhpcy5zLmFwcGVuZFN1Ykh0bWxUbykuYWRkQ2xhc3MoJ2xnLWVtcHR5LWh0bWwnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kb3V0ZXIuZmluZCh0aGlzLnMuYXBwZW5kU3ViSHRtbFRvKS5yZW1vdmVDbGFzcygnbGctZW1wdHktaHRtbCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kZWwudHJpZ2dlcignb25BZnRlckFwcGVuZFN1Ykh0bWwubGcnLCBbaW5kZXhdKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogIEBkZXNjIFByZWxvYWQgc2xpZGVzXG4gICAgICogIEBwYXJhbSB7TnVtYmVyfSBpbmRleCAtIGluZGV4IG9mIHRoZSBzbGlkZVxuICAgICAqL1xuICAgIFBsdWdpbi5wcm90b3R5cGUucHJlbG9hZCA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgIHZhciBpID0gMTtcbiAgICAgICAgdmFyIGogPSAxO1xuICAgICAgICBmb3IgKGkgPSAxOyBpIDw9IHRoaXMucy5wcmVsb2FkOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpID49IHRoaXMuJGl0ZW1zLmxlbmd0aCAtIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubG9hZENvbnRlbnQoaW5kZXggKyBpLCBmYWxzZSwgMCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGogPSAxOyBqIDw9IHRoaXMucy5wcmVsb2FkOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChpbmRleCAtIGogPCAwKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubG9hZENvbnRlbnQoaW5kZXggLSBqLCBmYWxzZSwgMCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogIEBkZXNjIExvYWQgc2xpZGUgY29udGVudCBpbnRvIHNsaWRlLlxuICAgICAqICBAcGFyYW0ge051bWJlcn0gaW5kZXggLSBpbmRleCBvZiB0aGUgc2xpZGUuXG4gICAgICogIEBwYXJhbSB7Qm9vbGVhbn0gcmVjIC0gaWYgdHJ1ZSBjYWxsIGxvYWRjb250ZW50KCkgZnVuY3Rpb24gYWdhaW4uXG4gICAgICogIEBwYXJhbSB7Qm9vbGVhbn0gZGVsYXkgLSBkZWxheSBmb3IgYWRkaW5nIGNvbXBsZXRlIGNsYXNzLiBpdCBpcyAwIGV4Y2VwdCBmaXJzdCB0aW1lLlxuICAgICAqL1xuICAgIFBsdWdpbi5wcm90b3R5cGUubG9hZENvbnRlbnQgPSBmdW5jdGlvbihpbmRleCwgcmVjLCBkZWxheSkge1xuXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBfaGFzUG9zdGVyID0gZmFsc2U7XG4gICAgICAgIHZhciBfJGltZztcbiAgICAgICAgdmFyIF9zcmM7XG4gICAgICAgIHZhciBfcG9zdGVyO1xuICAgICAgICB2YXIgX3NyY3NldDtcbiAgICAgICAgdmFyIF9zaXplcztcbiAgICAgICAgdmFyIF9odG1sO1xuICAgICAgICB2YXIgZ2V0UmVzcG9uc2l2ZVNyYyA9IGZ1bmN0aW9uKHNyY0l0bXMpIHtcbiAgICAgICAgICAgIHZhciByc1dpZHRoID0gW107XG4gICAgICAgICAgICB2YXIgcnNTcmMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3JjSXRtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBfX3NyYyA9IHNyY0l0bXNbaV0uc3BsaXQoJyAnKTtcblxuICAgICAgICAgICAgICAgIC8vIE1hbmFnZSBlbXB0eSBzcGFjZVxuICAgICAgICAgICAgICAgIGlmIChfX3NyY1swXSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgX19zcmMuc3BsaWNlKDAsIDEpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJzU3JjLnB1c2goX19zcmNbMF0pO1xuICAgICAgICAgICAgICAgIHJzV2lkdGgucHVzaChfX3NyY1sxXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciB3V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcnNXaWR0aC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChyc1dpZHRoW2pdLCAxMCkgPiB3V2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3NyYyA9IHJzU3JjW2pdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKF90aGlzLnMuZHluYW1pYykge1xuXG4gICAgICAgICAgICBpZiAoX3RoaXMucy5keW5hbWljRWxbaW5kZXhdLnBvc3Rlcikge1xuICAgICAgICAgICAgICAgIF9oYXNQb3N0ZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIF9wb3N0ZXIgPSBfdGhpcy5zLmR5bmFtaWNFbFtpbmRleF0ucG9zdGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfaHRtbCA9IF90aGlzLnMuZHluYW1pY0VsW2luZGV4XS5odG1sO1xuICAgICAgICAgICAgX3NyYyA9IF90aGlzLnMuZHluYW1pY0VsW2luZGV4XS5zcmM7XG5cbiAgICAgICAgICAgIGlmIChfdGhpcy5zLmR5bmFtaWNFbFtpbmRleF0ucmVzcG9uc2l2ZSkge1xuICAgICAgICAgICAgICAgIHZhciBzcmNEeUl0bXMgPSBfdGhpcy5zLmR5bmFtaWNFbFtpbmRleF0ucmVzcG9uc2l2ZS5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgICAgIGdldFJlc3BvbnNpdmVTcmMoc3JjRHlJdG1zKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX3NyY3NldCA9IF90aGlzLnMuZHluYW1pY0VsW2luZGV4XS5zcmNzZXQ7XG4gICAgICAgICAgICBfc2l6ZXMgPSBfdGhpcy5zLmR5bmFtaWNFbFtpbmRleF0uc2l6ZXM7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKF90aGlzLiRpdGVtcy5lcShpbmRleCkuYXR0cignZGF0YS1wb3N0ZXInKSkge1xuICAgICAgICAgICAgICAgIF9oYXNQb3N0ZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIF9wb3N0ZXIgPSBfdGhpcy4kaXRlbXMuZXEoaW5kZXgpLmF0dHIoJ2RhdGEtcG9zdGVyJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF9odG1sID0gX3RoaXMuJGl0ZW1zLmVxKGluZGV4KS5hdHRyKCdkYXRhLWh0bWwnKTtcbiAgICAgICAgICAgIF9zcmMgPSBfdGhpcy4kaXRlbXMuZXEoaW5kZXgpLmF0dHIoJ2hyZWYnKSB8fCBfdGhpcy4kaXRlbXMuZXEoaW5kZXgpLmF0dHIoJ2RhdGEtc3JjJyk7XG5cbiAgICAgICAgICAgIGlmIChfdGhpcy4kaXRlbXMuZXEoaW5kZXgpLmF0dHIoJ2RhdGEtcmVzcG9uc2l2ZScpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNyY0l0bXMgPSBfdGhpcy4kaXRlbXMuZXEoaW5kZXgpLmF0dHIoJ2RhdGEtcmVzcG9uc2l2ZScpLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICAgICAgZ2V0UmVzcG9uc2l2ZVNyYyhzcmNJdG1zKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX3NyY3NldCA9IF90aGlzLiRpdGVtcy5lcShpbmRleCkuYXR0cignZGF0YS1zcmNzZXQnKTtcbiAgICAgICAgICAgIF9zaXplcyA9IF90aGlzLiRpdGVtcy5lcShpbmRleCkuYXR0cignZGF0YS1zaXplcycpO1xuXG4gICAgICAgIH1cblxuICAgICAgICAvL2lmIChfc3JjIHx8IF9zcmNzZXQgfHwgX3NpemVzIHx8IF9wb3N0ZXIpIHtcblxuICAgICAgICB2YXIgaWZyYW1lID0gZmFsc2U7XG4gICAgICAgIGlmIChfdGhpcy5zLmR5bmFtaWMpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5zLmR5bmFtaWNFbFtpbmRleF0uaWZyYW1lKSB7XG4gICAgICAgICAgICAgICAgaWZyYW1lID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy4kaXRlbXMuZXEoaW5kZXgpLmF0dHIoJ2RhdGEtaWZyYW1lJykgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgICAgIGlmcmFtZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX2lzVmlkZW8gPSBfdGhpcy5pc1ZpZGVvKF9zcmMsIGluZGV4KTtcbiAgICAgICAgaWYgKCFfdGhpcy4kc2xpZGUuZXEoaW5kZXgpLmhhc0NsYXNzKCdsZy1sb2FkZWQnKSkge1xuICAgICAgICAgICAgaWYgKGlmcmFtZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLiRzbGlkZS5lcShpbmRleCkucHJlcGVuZCgnPGRpdiBjbGFzcz1cImxnLXZpZGVvLWNvbnQgbGctaGFzLWlmcmFtZVwiIHN0eWxlPVwibWF4LXdpZHRoOicgKyBfdGhpcy5zLmlmcmFtZU1heFdpZHRoICsgJ1wiPjxkaXYgY2xhc3M9XCJsZy12aWRlb1wiPjxpZnJhbWUgY2xhc3M9XCJsZy1vYmplY3RcIiBmcmFtZWJvcmRlcj1cIjBcIiBzcmM9XCInICsgX3NyYyArICdcIiAgYWxsb3dmdWxsc2NyZWVuPVwidHJ1ZVwiPjwvaWZyYW1lPjwvZGl2PjwvZGl2PicpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChfaGFzUG9zdGVyKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZpZGVvQ2xhc3MgPSAnJztcbiAgICAgICAgICAgICAgICBpZiAoX2lzVmlkZW8gJiYgX2lzVmlkZW8ueW91dHViZSkge1xuICAgICAgICAgICAgICAgICAgICB2aWRlb0NsYXNzID0gJ2xnLWhhcy15b3V0dWJlJztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKF9pc1ZpZGVvICYmIF9pc1ZpZGVvLnZpbWVvKSB7XG4gICAgICAgICAgICAgICAgICAgIHZpZGVvQ2xhc3MgPSAnbGctaGFzLXZpbWVvJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2aWRlb0NsYXNzID0gJ2xnLWhhcy1odG1sNSc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX3RoaXMuJHNsaWRlLmVxKGluZGV4KS5wcmVwZW5kKCc8ZGl2IGNsYXNzPVwibGctdmlkZW8tY29udCAnICsgdmlkZW9DbGFzcyArICcgXCI+PGRpdiBjbGFzcz1cImxnLXZpZGVvXCI+PHNwYW4gY2xhc3M9XCJsZy12aWRlby1wbGF5XCI+PC9zcGFuPjxpbWcgY2xhc3M9XCJsZy1vYmplY3QgbGctaGFzLXBvc3RlclwiIHNyYz1cIicgKyBfcG9zdGVyICsgJ1wiIC8+PC9kaXY+PC9kaXY+Jyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoX2lzVmlkZW8pIHtcbiAgICAgICAgICAgICAgICBfdGhpcy4kc2xpZGUuZXEoaW5kZXgpLnByZXBlbmQoJzxkaXYgY2xhc3M9XCJsZy12aWRlby1jb250IFwiPjxkaXYgY2xhc3M9XCJsZy12aWRlb1wiPjwvZGl2PjwvZGl2PicpO1xuICAgICAgICAgICAgICAgIF90aGlzLiRlbC50cmlnZ2VyKCdoYXNWaWRlby5sZycsIFtpbmRleCwgX3NyYywgX2h0bWxdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuJHNsaWRlLmVxKGluZGV4KS5wcmVwZW5kKCc8ZGl2IGNsYXNzPVwibGctaW1nLXdyYXBcIj48aW1nIGNsYXNzPVwibGctb2JqZWN0IGxnLWltYWdlXCIgc3JjPVwiJyArIF9zcmMgKyAnXCIgLz48L2Rpdj4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX3RoaXMuJGVsLnRyaWdnZXIoJ29uQWZlckFwcGVuZFNsaWRlLmxnJywgW2luZGV4XSk7XG5cbiAgICAgICAgICAgIF8kaW1nID0gX3RoaXMuJHNsaWRlLmVxKGluZGV4KS5maW5kKCcubGctb2JqZWN0Jyk7XG4gICAgICAgICAgICBpZiAoX3NpemVzKSB7XG4gICAgICAgICAgICAgICAgXyRpbWcuYXR0cignc2l6ZXMnLCBfc2l6ZXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoX3NyY3NldCkge1xuICAgICAgICAgICAgICAgIF8kaW1nLmF0dHIoJ3NyY3NldCcsIF9zcmNzZXQpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHBpY3R1cmVmaWxsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzOiBbXyRpbWdbMF1dXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdsaWdodEdhbGxlcnkgOi0gSWYgeW91IHdhbnQgc3Jjc2V0IHRvIGJlIHN1cHBvcnRlZCBmb3Igb2xkZXIgYnJvd3NlciBwbGVhc2UgaW5jbHVkZSBwaWN0dXJlZmlsIHZlcnNpb24gMiBqYXZhc2NyaXB0IGxpYnJhcnkgaW4geW91ciBkb2N1bWVudC4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnMuYXBwZW5kU3ViSHRtbFRvICE9PSAnLmxnLXN1Yi1odG1sJykge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkZEh0bWwoaW5kZXgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfdGhpcy4kc2xpZGUuZXEoaW5kZXgpLmFkZENsYXNzKCdsZy1sb2FkZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLiRzbGlkZS5lcShpbmRleCkuZmluZCgnLmxnLW9iamVjdCcpLm9uKCdsb2FkLmxnIGVycm9yLmxnJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIC8vIEZvciBmaXJzdCB0aW1lIGFkZCBzb21lIGRlbGF5IGZvciBkaXNwbGF5aW5nIHRoZSBzdGFydCBhbmltYXRpb24uXG4gICAgICAgICAgICB2YXIgX3NwZWVkID0gMDtcblxuICAgICAgICAgICAgLy8gRG8gbm90IGNoYW5nZSB0aGUgZGVsYXkgdmFsdWUgYmVjYXVzZSBpdCBpcyByZXF1aXJlZCBmb3Igem9vbSBwbHVnaW4uXG4gICAgICAgICAgICAvLyBJZiBnYWxsZXJ5IG9wZW5lZCBmcm9tIGRpcmVjdCB1cmwgKGhhc2gpIHNwZWVkIHZhbHVlIHNob3VsZCBiZSAwXG4gICAgICAgICAgICBpZiAoZGVsYXkgJiYgISQoJ2JvZHknKS5oYXNDbGFzcygnbGctZnJvbS1oYXNoJykpIHtcbiAgICAgICAgICAgICAgICBfc3BlZWQgPSBkZWxheTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy4kc2xpZGUuZXEoaW5kZXgpLmFkZENsYXNzKCdsZy1jb21wbGV0ZScpO1xuICAgICAgICAgICAgICAgIF90aGlzLiRlbC50cmlnZ2VyKCdvblNsaWRlSXRlbUxvYWQubGcnLCBbaW5kZXgsIGRlbGF5IHx8IDBdKTtcbiAgICAgICAgICAgIH0sIF9zcGVlZCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQHRvZG8gY2hlY2sgbG9hZCBzdGF0ZSBmb3IgaHRtbDUgdmlkZW9zXG4gICAgICAgIGlmIChfaXNWaWRlbyAmJiBfaXNWaWRlby5odG1sNSAmJiAhX2hhc1Bvc3Rlcikge1xuICAgICAgICAgICAgX3RoaXMuJHNsaWRlLmVxKGluZGV4KS5hZGRDbGFzcygnbGctY29tcGxldGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZWMgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmICghX3RoaXMuJHNsaWRlLmVxKGluZGV4KS5oYXNDbGFzcygnbGctY29tcGxldGUnKSkge1xuICAgICAgICAgICAgICAgIF90aGlzLiRzbGlkZS5lcShpbmRleCkuZmluZCgnLmxnLW9iamVjdCcpLm9uKCdsb2FkLmxnIGVycm9yLmxnJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnByZWxvYWQoaW5kZXgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5wcmVsb2FkKGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAqICAgQGRlc2Mgc2xpZGUgZnVuY3Rpb24gZm9yIGxpZ2h0Z2FsbGVyeVxuICAgICAgICAqKiBTbGlkZSgpIGdldHMgY2FsbCBvbiBzdGFydFxuICAgICAgICAqKiAqKiBTZXQgbGcub24gdHJ1ZSBvbmNlIHNsaWRlKCkgZnVuY3Rpb24gZ2V0cyBjYWxsZWQuXG4gICAgICAgICoqIENhbGwgbG9hZENvbnRlbnQoKSBvbiBzbGlkZSgpIGZ1bmN0aW9uIGluc2lkZSBzZXRUaW1lb3V0XG4gICAgICAgICoqICoqIE9uIGZpcnN0IHNsaWRlIHdlIGRvIG5vdCB3YW50IGFueSBhbmltYXRpb24gbGlrZSBzbGlkZSBvZiBmYWRlXG4gICAgICAgICoqICoqIFNvIG9uIGZpcnN0IHNsaWRlKCBpZiBsZy5vbiBpZiBmYWxzZSB0aGF0IGlzIGZpcnN0IHNsaWRlKSBsb2FkQ29udGVudCgpIHNob3VsZCBzdGFydCBsb2FkaW5nIGltbWVkaWF0ZWx5XG4gICAgICAgICoqICoqIEVsc2UgbG9hZENvbnRlbnQoKSBzaG91bGQgd2FpdCBmb3IgdGhlIHRyYW5zaXRpb24gdG8gY29tcGxldGUuXG4gICAgICAgICoqICoqIFNvIHNldCB0aW1lb3V0IHMuc3BlZWQgKyA1MFxuICAgIDw9PiAqKiBsb2FkQ29udGVudCgpIHdpbGwgbG9hZCBzbGlkZSBjb250ZW50IGluIHRvIHRoZSBwYXJ0aWN1bGFyIHNsaWRlXG4gICAgICAgICoqICoqIEl0IGhhcyByZWN1cnNpb24gKHJlYykgcGFyYW1ldGVyLiBpZiByZWMgPT09IHRydWUgbG9hZENvbnRlbnQoKSB3aWxsIGNhbGwgcHJlbG9hZCgpIGZ1bmN0aW9uLlxuICAgICAgICAqKiAqKiBwcmVsb2FkIHdpbGwgZXhlY3V0ZSBvbmx5IHdoZW4gdGhlIHByZXZpb3VzIHNsaWRlIGlzIGZ1bGx5IGxvYWRlZCAoaW1hZ2VzIGlmcmFtZSlcbiAgICAgICAgKiogKiogYXZvaWQgc2ltdWx0YW5lb3VzIGltYWdlIGxvYWRcbiAgICA8PT4gKiogUHJlbG9hZCgpIHdpbGwgY2hlY2sgZm9yIHMucHJlbG9hZCB2YWx1ZSBhbmQgY2FsbCBsb2FkQ29udGVudCgpIGFnYWluIGFjY29yaW5nIHRvIHByZWxvYWQgdmFsdWVcbiAgICAgICAgKiogbG9hZENvbnRlbnQoKSAgPD09PT0+IFByZWxvYWQoKTtcblxuICAgICogICBAcGFyYW0ge051bWJlcn0gaW5kZXggLSBpbmRleCBvZiB0aGUgc2xpZGVcbiAgICAqICAgQHBhcmFtIHtCb29sZWFufSBmcm9tVG91Y2ggLSB0cnVlIGlmIHNsaWRlIGZ1bmN0aW9uIGNhbGxlZCB2aWEgdG91Y2ggZXZlbnQgb3IgbW91c2UgZHJhZ1xuICAgICogICBAcGFyYW0ge0Jvb2xlYW59IGZyb21UaHVtYiAtIHRydWUgaWYgc2xpZGUgZnVuY3Rpb24gY2FsbGVkIHZpYSB0aHVtYm5haWwgY2xpY2tcbiAgICAqICAgQHBhcmFtIHtTdHJpbmd9IGRpcmVjdGlvbiAtIERpcmVjdGlvbiBvZiB0aGUgc2xpZGUobmV4dC9wcmV2KVxuICAgICovXG4gICAgUGx1Z2luLnByb3RvdHlwZS5zbGlkZSA9IGZ1bmN0aW9uKGluZGV4LCBmcm9tVG91Y2gsIGZyb21UaHVtYiwgZGlyZWN0aW9uKSB7XG5cbiAgICAgICAgdmFyIF9wcmV2SW5kZXggPSB0aGlzLiRvdXRlci5maW5kKCcubGctY3VycmVudCcpLmluZGV4KCk7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgLy8gUHJldmVudCBpZiBtdWx0aXBsZSBjYWxsXG4gICAgICAgIC8vIFJlcXVpcmVkIGZvciBoc2ggcGx1Z2luXG4gICAgICAgIGlmIChfdGhpcy5sR2FsbGVyeU9uICYmIChfcHJldkluZGV4ID09PSBpbmRleCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfbGVuZ3RoID0gdGhpcy4kc2xpZGUubGVuZ3RoO1xuICAgICAgICB2YXIgX3RpbWUgPSBfdGhpcy5sR2FsbGVyeU9uID8gdGhpcy5zLnNwZWVkIDogMDtcblxuICAgICAgICBpZiAoIV90aGlzLmxnQnVzeSkge1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zLmRvd25sb2FkKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9zcmM7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLnMuZHluYW1pYykge1xuICAgICAgICAgICAgICAgICAgICBfc3JjID0gX3RoaXMucy5keW5hbWljRWxbaW5kZXhdLmRvd25sb2FkVXJsICE9PSBmYWxzZSAmJiAoX3RoaXMucy5keW5hbWljRWxbaW5kZXhdLmRvd25sb2FkVXJsIHx8IF90aGlzLnMuZHluYW1pY0VsW2luZGV4XS5zcmMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF9zcmMgPSBfdGhpcy4kaXRlbXMuZXEoaW5kZXgpLmF0dHIoJ2RhdGEtZG93bmxvYWQtdXJsJykgIT09ICdmYWxzZScgJiYgKF90aGlzLiRpdGVtcy5lcShpbmRleCkuYXR0cignZGF0YS1kb3dubG9hZC11cmwnKSB8fCBfdGhpcy4kaXRlbXMuZXEoaW5kZXgpLmF0dHIoJ2hyZWYnKSB8fCBfdGhpcy4kaXRlbXMuZXEoaW5kZXgpLmF0dHIoJ2RhdGEtc3JjJykpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKF9zcmMpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnI2xnLWRvd25sb2FkJykuYXR0cignaHJlZicsIF9zcmMpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy4kb3V0ZXIucmVtb3ZlQ2xhc3MoJ2xnLWhpZGUtZG93bmxvYWQnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy4kb3V0ZXIuYWRkQ2xhc3MoJ2xnLWhpZGUtZG93bmxvYWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuJGVsLnRyaWdnZXIoJ29uQmVmb3JlU2xpZGUubGcnLCBbX3ByZXZJbmRleCwgaW5kZXgsIGZyb21Ub3VjaCwgZnJvbVRodW1iXSk7XG5cbiAgICAgICAgICAgIF90aGlzLmxnQnVzeSA9IHRydWU7XG5cbiAgICAgICAgICAgIGNsZWFyVGltZW91dChfdGhpcy5oaWRlQmFydGltZW91dCk7XG5cbiAgICAgICAgICAgIC8vIEFkZCB0aXRsZSBpZiB0aGlzLnMuYXBwZW5kU3ViSHRtbFRvID09PSBsZy1zdWItaHRtbFxuICAgICAgICAgICAgaWYgKHRoaXMucy5hcHBlbmRTdWJIdG1sVG8gPT09ICcubGctc3ViLWh0bWwnKSB7XG5cbiAgICAgICAgICAgICAgICAvLyB3YWl0IGZvciBzbGlkZSBhbmltYXRpb24gdG8gY29tcGxldGVcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hZGRIdG1sKGluZGV4KTtcbiAgICAgICAgICAgICAgICB9LCBfdGltZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuYXJyb3dEaXNhYmxlKGluZGV4KTtcblxuICAgICAgICAgICAgaWYgKCFkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPCBfcHJldkluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9ICdwcmV2JztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID4gX3ByZXZJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSAnbmV4dCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWZyb21Ub3VjaCkge1xuXG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGFsbCB0cmFuc2l0aW9uc1xuICAgICAgICAgICAgICAgIF90aGlzLiRvdXRlci5hZGRDbGFzcygnbGctbm8tdHJhbnMnKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuJHNsaWRlLnJlbW92ZUNsYXNzKCdsZy1wcmV2LXNsaWRlIGxnLW5leHQtc2xpZGUnKTtcblxuICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdwcmV2Jykge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vcHJldnNsaWRlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHNsaWRlLmVxKGluZGV4KS5hZGRDbGFzcygnbGctcHJldi1zbGlkZScpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzbGlkZS5lcShfcHJldkluZGV4KS5hZGRDbGFzcygnbGctbmV4dC1zbGlkZScpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBzbGlkZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzbGlkZS5lcShpbmRleCkuYWRkQ2xhc3MoJ2xnLW5leHQtc2xpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2xpZGUuZXEoX3ByZXZJbmRleCkuYWRkQ2xhc3MoJ2xnLXByZXYtc2xpZGUnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBnaXZlIDUwIG1zIGZvciBicm93c2VyIHRvIGFkZC9yZW1vdmUgY2xhc3NcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy4kc2xpZGUucmVtb3ZlQ2xhc3MoJ2xnLWN1cnJlbnQnKTtcblxuICAgICAgICAgICAgICAgICAgICAvL190aGlzLiRzbGlkZS5lcShfcHJldkluZGV4KS5yZW1vdmVDbGFzcygnbGctY3VycmVudCcpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy4kc2xpZGUuZXEoaW5kZXgpLmFkZENsYXNzKCdsZy1jdXJyZW50Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gcmVzZXQgYWxsIHRyYW5zaXRpb25zXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLiRvdXRlci5yZW1vdmVDbGFzcygnbGctbm8tdHJhbnMnKTtcbiAgICAgICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgdGhpcy4kc2xpZGUucmVtb3ZlQ2xhc3MoJ2xnLXByZXYtc2xpZGUgbGctY3VycmVudCBsZy1uZXh0LXNsaWRlJyk7XG4gICAgICAgICAgICAgICAgdmFyIHRvdWNoUHJldjtcbiAgICAgICAgICAgICAgICB2YXIgdG91Y2hOZXh0O1xuICAgICAgICAgICAgICAgIGlmIChfbGVuZ3RoID4gMikge1xuICAgICAgICAgICAgICAgICAgICB0b3VjaFByZXYgPSBpbmRleCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIHRvdWNoTmV4dCA9IGluZGV4ICsgMTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoKGluZGV4ID09PSAwKSAmJiAoX3ByZXZJbmRleCA9PT0gX2xlbmd0aCAtIDEpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5leHQgc2xpZGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoTmV4dCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaFByZXYgPSBfbGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICgoaW5kZXggPT09IF9sZW5ndGggLSAxKSAmJiAoX3ByZXZJbmRleCA9PT0gMCkpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJldiBzbGlkZVxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hOZXh0ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoUHJldiA9IF9sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0b3VjaFByZXYgPSAwO1xuICAgICAgICAgICAgICAgICAgICB0b3VjaE5leHQgPSAxO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdwcmV2Jykge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy4kc2xpZGUuZXEodG91Y2hOZXh0KS5hZGRDbGFzcygnbGctbmV4dC1zbGlkZScpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLiRzbGlkZS5lcSh0b3VjaFByZXYpLmFkZENsYXNzKCdsZy1wcmV2LXNsaWRlJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX3RoaXMuJHNsaWRlLmVxKGluZGV4KS5hZGRDbGFzcygnbGctY3VycmVudCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoX3RoaXMubEdhbGxlcnlPbikge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmxvYWRDb250ZW50KGluZGV4LCB0cnVlLCAwKTtcbiAgICAgICAgICAgICAgICB9LCB0aGlzLnMuc3BlZWQgKyA1MCk7XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5sZ0J1c3kgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuJGVsLnRyaWdnZXIoJ29uQWZ0ZXJTbGlkZS5sZycsIFtfcHJldkluZGV4LCBpbmRleCwgZnJvbVRvdWNoLCBmcm9tVGh1bWJdKTtcbiAgICAgICAgICAgICAgICB9LCB0aGlzLnMuc3BlZWQpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF90aGlzLmxvYWRDb250ZW50KGluZGV4LCB0cnVlLCBfdGhpcy5zLmJhY2tkcm9wRHVyYXRpb24pO1xuXG4gICAgICAgICAgICAgICAgX3RoaXMubGdCdXN5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgX3RoaXMuJGVsLnRyaWdnZXIoJ29uQWZ0ZXJTbGlkZS5sZycsIFtfcHJldkluZGV4LCBpbmRleCwgZnJvbVRvdWNoLCBmcm9tVGh1bWJdKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX3RoaXMubEdhbGxlcnlPbiA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnMuY291bnRlcikge1xuICAgICAgICAgICAgICAgICQoJyNsZy1jb3VudGVyLWN1cnJlbnQnKS50ZXh0KGluZGV4ICsgMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBfdGhpcy5pbmRleCA9IGluZGV4O1xuXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqICBAZGVzYyBHbyB0byBuZXh0IHNsaWRlXG4gICAgICogIEBwYXJhbSB7Qm9vbGVhbn0gZnJvbVRvdWNoIC0gdHJ1ZSBpZiBzbGlkZSBmdW5jdGlvbiBjYWxsZWQgdmlhIHRvdWNoIGV2ZW50XG4gICAgICovXG4gICAgUGx1Z2luLnByb3RvdHlwZS5nb1RvTmV4dFNsaWRlID0gZnVuY3Rpb24oZnJvbVRvdWNoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBfbG9vcCA9IF90aGlzLnMubG9vcDtcbiAgICAgICAgaWYgKGZyb21Ub3VjaCAmJiBfdGhpcy4kc2xpZGUubGVuZ3RoIDwgMykge1xuICAgICAgICAgICAgX2xvb3AgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghX3RoaXMubGdCdXN5KSB7XG4gICAgICAgICAgICBpZiAoKF90aGlzLmluZGV4ICsgMSkgPCBfdGhpcy4kc2xpZGUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuaW5kZXgrKztcbiAgICAgICAgICAgICAgICBfdGhpcy4kZWwudHJpZ2dlcignb25CZWZvcmVOZXh0U2xpZGUubGcnLCBbX3RoaXMuaW5kZXhdKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5zbGlkZShfdGhpcy5pbmRleCwgZnJvbVRvdWNoLCBmYWxzZSwgJ25leHQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKF9sb29wKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuJGVsLnRyaWdnZXIoJ29uQmVmb3JlTmV4dFNsaWRlLmxnJywgW190aGlzLmluZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNsaWRlKF90aGlzLmluZGV4LCBmcm9tVG91Y2gsIGZhbHNlLCAnbmV4dCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoX3RoaXMucy5zbGlkZUVuZEFuaW1hdG9pbiAmJiAhZnJvbVRvdWNoKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLiRvdXRlci5hZGRDbGFzcygnbGctcmlnaHQtZW5kJyk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy4kb3V0ZXIucmVtb3ZlQ2xhc3MoJ2xnLXJpZ2h0LWVuZCcpO1xuICAgICAgICAgICAgICAgICAgICB9LCA0MDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiAgQGRlc2MgR28gdG8gcHJldmlvdXMgc2xpZGVcbiAgICAgKiAgQHBhcmFtIHtCb29sZWFufSBmcm9tVG91Y2ggLSB0cnVlIGlmIHNsaWRlIGZ1bmN0aW9uIGNhbGxlZCB2aWEgdG91Y2ggZXZlbnRcbiAgICAgKi9cbiAgICBQbHVnaW4ucHJvdG90eXBlLmdvVG9QcmV2U2xpZGUgPSBmdW5jdGlvbihmcm9tVG91Y2gpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIF9sb29wID0gX3RoaXMucy5sb29wO1xuICAgICAgICBpZiAoZnJvbVRvdWNoICYmIF90aGlzLiRzbGlkZS5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgICBfbG9vcCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFfdGhpcy5sZ0J1c3kpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5pbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5pbmRleC0tO1xuICAgICAgICAgICAgICAgIF90aGlzLiRlbC50cmlnZ2VyKCdvbkJlZm9yZVByZXZTbGlkZS5sZycsIFtfdGhpcy5pbmRleCwgZnJvbVRvdWNoXSk7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2xpZGUoX3RoaXMuaW5kZXgsIGZyb21Ub3VjaCwgZmFsc2UsICdwcmV2Jyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChfbG9vcCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5pbmRleCA9IF90aGlzLiRpdGVtcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy4kZWwudHJpZ2dlcignb25CZWZvcmVQcmV2U2xpZGUubGcnLCBbX3RoaXMuaW5kZXgsIGZyb21Ub3VjaF0pO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zbGlkZShfdGhpcy5pbmRleCwgZnJvbVRvdWNoLCBmYWxzZSwgJ3ByZXYnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKF90aGlzLnMuc2xpZGVFbmRBbmltYXRvaW4gJiYgIWZyb21Ub3VjaCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy4kb3V0ZXIuYWRkQ2xhc3MoJ2xnLWxlZnQtZW5kJyk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy4kb3V0ZXIucmVtb3ZlQ2xhc3MoJ2xnLWxlZnQtZW5kJyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDQwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIFBsdWdpbi5wcm90b3R5cGUua2V5UHJlc3MgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuJGl0ZW1zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICQod2luZG93KS5vbigna2V5dXAubGcnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLiRpdGVtcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDM3KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5nb1RvUHJldlNsaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzOSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZ29Ub05leHRTbGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAkKHdpbmRvdykub24oJ2tleWRvd24ubGcnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMucy5lc2NLZXkgPT09IHRydWUgJiYgZS5rZXlDb2RlID09PSAyNykge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBpZiAoIV90aGlzLiRvdXRlci5oYXNDbGFzcygnbGctdGh1bWItb3BlbicpKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy4kb3V0ZXIucmVtb3ZlQ2xhc3MoJ2xnLXRodW1iLW9wZW4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBQbHVnaW4ucHJvdG90eXBlLmFycm93ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuJG91dGVyLmZpbmQoJy5sZy1wcmV2Jykub24oJ2NsaWNrLmxnJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBfdGhpcy5nb1RvUHJldlNsaWRlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJG91dGVyLmZpbmQoJy5sZy1uZXh0Jykub24oJ2NsaWNrLmxnJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBfdGhpcy5nb1RvTmV4dFNsaWRlKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBQbHVnaW4ucHJvdG90eXBlLmFycm93RGlzYWJsZSA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cbiAgICAgICAgLy8gRGlzYWJsZSBhcnJvd3MgaWYgcy5oaWRlQ29udHJvbE9uRW5kIGlzIHRydWVcbiAgICAgICAgaWYgKCF0aGlzLnMubG9vcCAmJiB0aGlzLnMuaGlkZUNvbnRyb2xPbkVuZCkge1xuICAgICAgICAgICAgaWYgKChpbmRleCArIDEpIDwgdGhpcy4kc2xpZGUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kb3V0ZXIuZmluZCgnLmxnLW5leHQnKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRvdXRlci5maW5kKCcubGctbmV4dCcpLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJykuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRvdXRlci5maW5kKCcubGctcHJldicpLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJykucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuJG91dGVyLmZpbmQoJy5sZy1wcmV2JykuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBQbHVnaW4ucHJvdG90eXBlLnNldFRyYW5zbGF0ZSA9IGZ1bmN0aW9uKCRlbCwgeFZhbHVlLCB5VmFsdWUpIHtcbiAgICAgICAgLy8galF1ZXJ5IHN1cHBvcnRzIEF1dG9tYXRpYyBDU1MgcHJlZml4aW5nIHNpbmNlIGpRdWVyeSAxLjguMFxuICAgICAgICBpZiAodGhpcy5zLnVzZUxlZnQpIHtcbiAgICAgICAgICAgICRlbC5jc3MoJ2xlZnQnLCB4VmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGVsLmNzcyh7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoJyArICh4VmFsdWUpICsgJ3B4LCAnICsgeVZhbHVlICsgJ3B4LCAwcHgpJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgUGx1Z2luLnByb3RvdHlwZS50b3VjaE1vdmUgPSBmdW5jdGlvbihzdGFydENvb3JkcywgZW5kQ29vcmRzKSB7XG5cbiAgICAgICAgdmFyIGRpc3RhbmNlID0gZW5kQ29vcmRzIC0gc3RhcnRDb29yZHM7XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKGRpc3RhbmNlKSA+IDE1KSB7XG4gICAgICAgICAgICAvLyByZXNldCBvcGFjaXR5IGFuZCB0cmFuc2l0aW9uIGR1cmF0aW9uXG4gICAgICAgICAgICB0aGlzLiRvdXRlci5hZGRDbGFzcygnbGctZHJhZ2dpbmcnKTtcblxuICAgICAgICAgICAgLy8gbW92ZSBjdXJyZW50IHNsaWRlXG4gICAgICAgICAgICB0aGlzLnNldFRyYW5zbGF0ZSh0aGlzLiRzbGlkZS5lcSh0aGlzLmluZGV4KSwgZGlzdGFuY2UsIDApO1xuXG4gICAgICAgICAgICAvLyBtb3ZlIG5leHQgYW5kIHByZXYgc2xpZGUgd2l0aCBjdXJyZW50IHNsaWRlXG4gICAgICAgICAgICB0aGlzLnNldFRyYW5zbGF0ZSgkKCcubGctcHJldi1zbGlkZScpLCAtdGhpcy4kc2xpZGUuZXEodGhpcy5pbmRleCkud2lkdGgoKSArIGRpc3RhbmNlLCAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0VHJhbnNsYXRlKCQoJy5sZy1uZXh0LXNsaWRlJyksIHRoaXMuJHNsaWRlLmVxKHRoaXMuaW5kZXgpLndpZHRoKCkgKyBkaXN0YW5jZSwgMCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgUGx1Z2luLnByb3RvdHlwZS50b3VjaEVuZCA9IGZ1bmN0aW9uKGRpc3RhbmNlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgLy8ga2VlcCBzbGlkZSBhbmltYXRpb24gZm9yIGFueSBtb2RlIHdoaWxlIGRyYWdnL3N3aXBlXG4gICAgICAgIGlmIChfdGhpcy5zLm1vZGUgIT09ICdsZy1zbGlkZScpIHtcbiAgICAgICAgICAgIF90aGlzLiRvdXRlci5hZGRDbGFzcygnbGctc2xpZGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJHNsaWRlLm5vdCgnLmxnLWN1cnJlbnQsIC5sZy1wcmV2LXNsaWRlLCAubGctbmV4dC1zbGlkZScpLmNzcygnb3BhY2l0eScsICcwJyk7XG5cbiAgICAgICAgLy8gc2V0IHRyYW5zaXRpb24gZHVyYXRpb25cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIF90aGlzLiRvdXRlci5yZW1vdmVDbGFzcygnbGctZHJhZ2dpbmcnKTtcbiAgICAgICAgICAgIGlmICgoZGlzdGFuY2UgPCAwKSAmJiAoTWF0aC5hYnMoZGlzdGFuY2UpID4gX3RoaXMucy5zd2lwZVRocmVzaG9sZCkpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5nb1RvTmV4dFNsaWRlKHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgoZGlzdGFuY2UgPiAwKSAmJiAoTWF0aC5hYnMoZGlzdGFuY2UpID4gX3RoaXMucy5zd2lwZVRocmVzaG9sZCkpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5nb1RvUHJldlNsaWRlKHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChNYXRoLmFicyhkaXN0YW5jZSkgPCA1KSB7XG5cbiAgICAgICAgICAgICAgICAvLyBUcmlnZ2VyIGNsaWNrIGlmIGRpc3RhbmNlIGlzIGxlc3MgdGhhbiA1IHBpeFxuICAgICAgICAgICAgICAgIF90aGlzLiRlbC50cmlnZ2VyKCdvblNsaWRlQ2xpY2subGcnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX3RoaXMuJHNsaWRlLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHJlbW92ZSBzbGlkZSBjbGFzcyBvbmNlIGRyYWcvc3dpcGUgaXMgY29tcGxldGVkIGlmIG1vZGUgaXMgbm90IHNsaWRlXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoIV90aGlzLiRvdXRlci5oYXNDbGFzcygnbGctZHJhZ2dpbmcnKSAmJiBfdGhpcy5zLm1vZGUgIT09ICdsZy1zbGlkZScpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy4kb3V0ZXIucmVtb3ZlQ2xhc3MoJ2xnLXNsaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIF90aGlzLnMuc3BlZWQgKyAxMDApO1xuXG4gICAgfTtcblxuICAgIFBsdWdpbi5wcm90b3R5cGUuZW5hYmxlU3dpcGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHN0YXJ0Q29vcmRzID0gMDtcbiAgICAgICAgdmFyIGVuZENvb3JkcyA9IDA7XG4gICAgICAgIHZhciBpc01vdmVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKF90aGlzLnMuZW5hYmxlU3dpcGUgJiYgX3RoaXMuZG9Dc3MoKSkge1xuXG4gICAgICAgICAgICBfdGhpcy4kc2xpZGUub24oJ3RvdWNoc3RhcnQubGcnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFfdGhpcy4kb3V0ZXIuaGFzQ2xhc3MoJ2xnLXpvb21lZCcpICYmICFfdGhpcy5sZ0J1c3kpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5tYW5hZ2VTd2lwZUNsYXNzKCk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0Q29vcmRzID0gZS5vcmlnaW5hbEV2ZW50LnRhcmdldFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIF90aGlzLiRzbGlkZS5vbigndG91Y2htb3ZlLmxnJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGlmICghX3RoaXMuJG91dGVyLmhhc0NsYXNzKCdsZy16b29tZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGVuZENvb3JkcyA9IGUub3JpZ2luYWxFdmVudC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy50b3VjaE1vdmUoc3RhcnRDb29yZHMsIGVuZENvb3Jkcyk7XG4gICAgICAgICAgICAgICAgICAgIGlzTW92ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBfdGhpcy4kc2xpZGUub24oJ3RvdWNoZW5kLmxnJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFfdGhpcy4kb3V0ZXIuaGFzQ2xhc3MoJ2xnLXpvb21lZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc01vdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc01vdmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy50b3VjaEVuZChlbmRDb29yZHMgLSBzdGFydENvb3Jkcyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy4kZWwudHJpZ2dlcignb25TbGlkZUNsaWNrLmxnJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFBsdWdpbi5wcm90b3R5cGUuZW5hYmxlRHJhZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgc3RhcnRDb29yZHMgPSAwO1xuICAgICAgICB2YXIgZW5kQ29vcmRzID0gMDtcbiAgICAgICAgdmFyIGlzRHJhZ2luZyA9IGZhbHNlO1xuICAgICAgICB2YXIgaXNNb3ZlZCA9IGZhbHNlO1xuICAgICAgICBpZiAoX3RoaXMucy5lbmFibGVEcmFnICYmIF90aGlzLmRvQ3NzKCkpIHtcbiAgICAgICAgICAgIF90aGlzLiRzbGlkZS5vbignbW91c2Vkb3duLmxnJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGlmICghX3RoaXMuJG91dGVyLmhhc0NsYXNzKCdsZy16b29tZWQnKSAmJiAhX3RoaXMubGdCdXN5ICYmICEkKGUudGFyZ2V0KS50ZXh0KCkudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubWFuYWdlU3dpcGVDbGFzcygpO1xuICAgICAgICAgICAgICAgICAgICBzdGFydENvb3JkcyA9IGUucGFnZVg7XG4gICAgICAgICAgICAgICAgICAgIGlzRHJhZ2luZyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gKiogRml4IGZvciB3ZWJraXQgY3Vyc29yIGlzc3VlIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0yNjcyM1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy4kb3V0ZXIuc2Nyb2xsTGVmdCArPSAxO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy4kb3V0ZXIuc2Nyb2xsTGVmdCAtPSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICpcblxuICAgICAgICAgICAgICAgICAgICBfdGhpcy4kb3V0ZXIucmVtb3ZlQ2xhc3MoJ2xnLWdyYWInKS5hZGRDbGFzcygnbGctZ3JhYmJpbmcnKTtcblxuICAgICAgICAgICAgICAgICAgICBfdGhpcy4kZWwudHJpZ2dlcignb25EcmFnc3RhcnQubGcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCh3aW5kb3cpLm9uKCdtb3VzZW1vdmUubGcnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzRHJhZ2luZykge1xuICAgICAgICAgICAgICAgICAgICBpc01vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZW5kQ29vcmRzID0gZS5wYWdlWDtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudG91Y2hNb3ZlKHN0YXJ0Q29vcmRzLCBlbmRDb29yZHMpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy4kZWwudHJpZ2dlcignb25EcmFnbW92ZS5sZycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKHdpbmRvdykub24oJ21vdXNldXAubGcnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzTW92ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNNb3ZlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy50b3VjaEVuZChlbmRDb29yZHMgLSBzdGFydENvb3Jkcyk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLiRlbC50cmlnZ2VyKCdvbkRyYWdlbmQubGcnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKCdsZy1vYmplY3QnKSB8fCAkKGUudGFyZ2V0KS5oYXNDbGFzcygnbGctdmlkZW8tcGxheScpKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLiRlbC50cmlnZ2VyKCdvblNsaWRlQ2xpY2subGcnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBQcmV2ZW50IGV4ZWN1dGlvbiBvbiBjbGlja1xuICAgICAgICAgICAgICAgIGlmIChpc0RyYWdpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNEcmFnaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLiRvdXRlci5yZW1vdmVDbGFzcygnbGctZ3JhYmJpbmcnKS5hZGRDbGFzcygnbGctZ3JhYicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgUGx1Z2luLnByb3RvdHlwZS5tYW5hZ2VTd2lwZUNsYXNzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfdG91Y2hOZXh0ID0gdGhpcy5pbmRleCArIDE7XG4gICAgICAgIHZhciBfdG91Y2hQcmV2ID0gdGhpcy5pbmRleCAtIDE7XG4gICAgICAgIGlmICh0aGlzLnMubG9vcCAmJiB0aGlzLiRzbGlkZS5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIF90b3VjaFByZXYgPSB0aGlzLiRzbGlkZS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmluZGV4ID09PSB0aGlzLiRzbGlkZS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgX3RvdWNoTmV4dCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRzbGlkZS5yZW1vdmVDbGFzcygnbGctbmV4dC1zbGlkZSBsZy1wcmV2LXNsaWRlJyk7XG4gICAgICAgIGlmIChfdG91Y2hQcmV2ID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuJHNsaWRlLmVxKF90b3VjaFByZXYpLmFkZENsYXNzKCdsZy1wcmV2LXNsaWRlJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRzbGlkZS5lcShfdG91Y2hOZXh0KS5hZGRDbGFzcygnbGctbmV4dC1zbGlkZScpO1xuICAgIH07XG5cbiAgICBQbHVnaW4ucHJvdG90eXBlLm1vdXNld2hlZWwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgX3RoaXMuJG91dGVyLm9uKCdtb3VzZXdoZWVsLmxnJywgZnVuY3Rpb24oZSkge1xuXG4gICAgICAgICAgICBpZiAoIWUuZGVsdGFZKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZS5kZWx0YVkgPiAwKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZ29Ub1ByZXZTbGlkZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5nb1RvTmV4dFNsaWRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgUGx1Z2luLnByb3RvdHlwZS5jbG9zZUdhbGxlcnkgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgbW91c2Vkb3duID0gZmFsc2U7XG4gICAgICAgIHRoaXMuJG91dGVyLmZpbmQoJy5sZy1jbG9zZScpLm9uKCdjbGljay5sZycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgX3RoaXMuZGVzdHJveSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoX3RoaXMucy5jbG9zYWJsZSkge1xuXG4gICAgICAgICAgICAvLyBJZiB5b3UgZHJhZyB0aGUgc2xpZGUgYW5kIHJlbGVhc2Ugb3V0c2lkZSBnYWxsZXJ5IGdldHMgY2xvc2Ugb24gY2hyb21lXG4gICAgICAgICAgICAvLyBmb3IgcHJldmVudGluZyB0aGlzIGNoZWNrIG1vdXNlZG93biBhbmQgbW91c2V1cCBoYXBwZW5lZCBvbiAubGctaXRlbSBvciBsZy1vdXRlclxuICAgICAgICAgICAgX3RoaXMuJG91dGVyLm9uKCdtb3VzZWRvd24ubGcnLCBmdW5jdGlvbihlKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoJChlLnRhcmdldCkuaXMoJy5sZy1vdXRlcicpIHx8ICQoZS50YXJnZXQpLmlzKCcubGctaXRlbSAnKSB8fCAkKGUudGFyZ2V0KS5pcygnLmxnLWltZy13cmFwJykpIHtcbiAgICAgICAgICAgICAgICAgICAgbW91c2Vkb3duID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtb3VzZWRvd24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBfdGhpcy4kb3V0ZXIub24oJ21vdXNlbW92ZS5sZycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIG1vdXNlZG93biA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIF90aGlzLiRvdXRlci5vbignbW91c2V1cC5sZycsIGZ1bmN0aW9uKGUpIHtcblxuICAgICAgICAgICAgICAgIGlmICgkKGUudGFyZ2V0KS5pcygnLmxnLW91dGVyJykgfHwgJChlLnRhcmdldCkuaXMoJy5sZy1pdGVtICcpIHx8ICQoZS50YXJnZXQpLmlzKCcubGctaW1nLXdyYXAnKSAmJiBtb3VzZWRvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfdGhpcy4kb3V0ZXIuaGFzQ2xhc3MoJ2xnLWRyYWdnaW5nJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFBsdWdpbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKGQpIHtcblxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIGlmICghZCkge1xuICAgICAgICAgICAgX3RoaXMuJGVsLnRyaWdnZXIoJ29uQmVmb3JlQ2xvc2UubGcnKTtcbiAgICAgICAgICAgICQod2luZG93KS5zY3JvbGxUb3AoX3RoaXMucHJldlNjcm9sbFRvcCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBpZiBkIGlzIGZhbHNlIG9yIHVuZGVmaW5lZCBkZXN0cm95IHdpbGwgb25seSBjbG9zZSB0aGUgZ2FsbGVyeVxuICAgICAgICAgKiBwbHVnaW5zIGluc3RhbmNlIHJlbWFpbnMgd2l0aCB0aGUgZWxlbWVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBpZiBkIGlzIHRydWUgZGVzdHJveSB3aWxsIGNvbXBsZXRlbHkgcmVtb3ZlIHRoZSBwbHVnaW5cbiAgICAgICAgICovXG5cbiAgICAgICAgaWYgKGQpIHtcbiAgICAgICAgICAgIGlmICghX3RoaXMucy5keW5hbWljKSB7XG4gICAgICAgICAgICAgICAgLy8gb25seSB3aGVuIG5vdCB1c2luZyBkeW5hbWljIG1vZGUgaXMgJGl0ZW1zIGEganF1ZXJ5IGNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgICB0aGlzLiRpdGVtcy5vZmYoJ2NsaWNrLmxnIGNsaWNrLmxnY3VzdG9tJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQucmVtb3ZlRGF0YShfdGhpcy5lbCwgJ2xpZ2h0R2FsbGVyeScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVW5iaW5kIGFsbCBldmVudHMgYWRkZWQgYnkgbGlnaHRHYWxsZXJ5XG4gICAgICAgIHRoaXMuJGVsLm9mZignLmxnLnRtJyk7XG5cbiAgICAgICAgLy8gRGlzdHJveSBhbGwgbGlnaHRHYWxsZXJ5IG1vZHVsZXNcbiAgICAgICAgJC5lYWNoKCQuZm4ubGlnaHRHYWxsZXJ5Lm1vZHVsZXMsIGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgaWYgKF90aGlzLm1vZHVsZXNba2V5XSkge1xuICAgICAgICAgICAgICAgIF90aGlzLm1vZHVsZXNba2V5XS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubEdhbGxlcnlPbiA9IGZhbHNlO1xuXG4gICAgICAgIGNsZWFyVGltZW91dChfdGhpcy5oaWRlQmFydGltZW91dCk7XG4gICAgICAgIHRoaXMuaGlkZUJhcnRpbWVvdXQgPSBmYWxzZTtcbiAgICAgICAgJCh3aW5kb3cpLm9mZignLmxnJyk7XG4gICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbGctb24gbGctZnJvbS1oYXNoJyk7XG5cbiAgICAgICAgaWYgKF90aGlzLiRvdXRlcikge1xuICAgICAgICAgICAgX3RoaXMuJG91dGVyLnJlbW92ZUNsYXNzKCdsZy12aXNpYmxlJyk7XG4gICAgICAgIH1cblxuICAgICAgICAkKCcubGctYmFja2Ryb3AnKS5yZW1vdmVDbGFzcygnaW4nKTtcblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLiRvdXRlcikge1xuICAgICAgICAgICAgICAgIF90aGlzLiRvdXRlci5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJCgnLmxnLWJhY2tkcm9wJykucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIGlmICghZCkge1xuICAgICAgICAgICAgICAgIF90aGlzLiRlbC50cmlnZ2VyKCdvbkNsb3NlQWZ0ZXIubGcnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LCBfdGhpcy5zLmJhY2tkcm9wRHVyYXRpb24gKyA1MCk7XG4gICAgfTtcblxuICAgICQuZm4ubGlnaHRHYWxsZXJ5ID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCEkLmRhdGEodGhpcywgJ2xpZ2h0R2FsbGVyeScpKSB7XG4gICAgICAgICAgICAgICAgJC5kYXRhKHRoaXMsICdsaWdodEdhbGxlcnknLCBuZXcgUGx1Z2luKHRoaXMsIG9wdGlvbnMpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5kYXRhKCdsaWdodEdhbGxlcnknKS5pbml0KCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2xpZ2h0R2FsbGVyeSBoYXMgbm90IGluaXRpYXRlZCBwcm9wZXJseScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgICQuZm4ubGlnaHRHYWxsZXJ5Lm1vZHVsZXMgPSB7fTtcblxufSkoKTtcblxuXG59KSk7XG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cualF1ZXJ5OyJdLCJzb3VyY2VSb290IjoiIn0=