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
      'geolocation',
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
    direction: 'Direction of Shot',
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
    var exif = this.core.s.dynamicEl[index].exif,
      gloc = this.core.s.dynamicEl[index].geolocation;
    var html = '<table><caption><span class="lg-icon"></span>Image Spec</caption>';

    if (exif) {
      if (exif['date_time_original']['clean'] === undefined) {
        var dto = exif['date_time_original']['raw'].replace(':', '-').replace(':', '-');
        exif['date_time_original']['clean'] = new Date(dto).toLocaleString();
      }
      for (var i = 0; i < this.core.s.exifFields.length; i++) {
        var field = this.core.s.exifFields[i];
        if (field === 'geolocation') {
          if (gloc) {
            var lat = parseFloat(gloc['latitude']);
            var lon = parseFloat(gloc['longitude']);
            var dir = '';
            if (gloc['direction']) {
              dir = ', ' + gloc['direction'].clean;
            }
            html += '<tr><th>' +
              '<span class="lg-icon lg-info-exif-html-' + field + '" title="' + (exifTitles[field] || field) + '"></span>' +
              '</th><td>' +
              '<span class="lg-info-exif-geolocation">' +
              lat.toFixed(5) + ', ' + lon.toFixed(5) + dir +
              '</span></td></tr>' +
              '<tr class="lg-info-exif-geolocation-map"><th></th><td>' +
              'MAP' +
              '</td></tr>';
          }
        } else {
          html += '<tr><th>' +
            '<span class="lg-icon lg-info-exif-html-' + field + '" title="' + (exifTitles[field] || field) + '"></span>' +
            '</th><td>' +
            (exif[field].clean || exif[field].raw) +
            '</td></tr>';
        }
      }
    }

    html += '</table>';
    $exifHtml.html($(html));
    $('.lg-info-exif-geolocation').on('click', this.toggleGeolocationMap.bind(this));
  };

  Info.prototype.toggleGeolocationMap = function (event) {
    $('.lg-info-exif-geolocation-map').toggle();
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
exports.push([module.i, "#lg-info-desc.lg-icon, #lg-info-exif.lg-icon, .lg-info-exif-html .lg-icon {\n  font-family: PhotographyIcons;\n  font-size: 20px;\n  font-style: normal;\n}\n#lg-info-desc.lg-info-state-show:before { content: \"\\E913\"; } /* photo  */\n#lg-info-desc.lg-info-state-hide:before { content: \"\\E912\"; } /* image-1 */\n#lg-info-exif.lg-info-state-show:before { content: \"\\E900\"; } /* camera */\n#lg-info-exif.lg-info-state-hide:before { content: \"\\E901\"; } /* photo-cameras */\n\n/*.lg-info-exif-html .lg-icon:before { content: \"\\f103\"; }*/\n.lg-info-exif-html td {\n  padding: 2px;\n  vertical-align: bottom;\n}\n.lg-info-exif-html .lg-icon { padding-right: 5px; }\n.lg-info-exif-html-model.lg-icon:before { content: \"\\E900\"; font-size: 32px; } /* camera */\n.lg-info-exif-html-lens.lg-icon:before { content: \"\\E902\"; font-size: 28px; } /* len-1 */\n.lg-info-exif-html-aperture.lg-icon:before { content: \"\\E904\"; } /* opeing-aperture */\n.lg-info-exif-html-iso_speed_ratings.lg-icon:before { content: \"\\E90D\"; } /* iso */\n.lg-info-exif-html-focal_length.lg-icon:before { content: \"\\E903\"; } /* len */\n.lg-info-exif-html-exposure.lg-icon:before { content: \"\\E90E\"; } /* stopwatch */\n.lg-info-exif-html-flash.lg-icon:before { content: \"\\E90F\"; } /* flash */\n.lg-info-exif-html-flash-off.lg-icon:before { content: \"\\E910\"; } /* flash */\n.lg-info-exif-html-metering_mode.lg-icon:before { content: \"\\E906\"; } /* picture-1 */\n.lg-info-exif-html-metering_mode-0.lg-icon:before { content: \"\\E90C\"; } /* picture-1 */\n.lg-info-exif-html-metering_mode-1.lg-icon:before { content: \"\\E906\"; } /* picture-1 */\n.lg-info-exif-html-metering_mode-2.lg-icon:before { content: \"\\E907\"; } /* picture-1 */\n.lg-info-exif-html-metering_mode-3.lg-icon:before { content: \"\\E908\"; } /* picture-1 */\n.lg-info-exif-html-metering_mode-4.lg-icon:before { content: \"\\E909\"; } /* picture-1 */\n.lg-info-exif-html-metering_mode-5.lg-icon:before { content: \"\\E90A\"; } /* picture-1 */\n.lg-info-exif-html-metering_mode-6.lg-icon:before { content: \"\\E90B\"; } /* picture-1 */\n.lg-info-exif-html-date_time_original.lg-icon:before { content: \"\\E914\"; } /* calendar */\n.lg-info-exif-html-artist.lg-icon:before { content: \"\\E915\"; } /* calendar */\n.lg-info-exif-html-copyright.lg-icon:before { content: \"\\E916\"; } /* calendar */\n.lg-info-exif-html-geolocation.lg-icon:before { content: \"\\E917\"; } /* globe */\n\n.lg-info-exif-geolocation {\n  cursor: pointer;\n  border-bottom: 1px dashed #ccc;\n}\n.lg-info-exif-geolocation-map {\n  display: none;\n}\n.lg-info-exif-html {\n  position: fixed;\n  z-index: 1081;\n  color: #eee;\n  font-size: 14px;\n  padding: 10px 10px;\n  right: 0;\n  top: 60px;\n  bottom: 60px;\n  width: 350px;\n  background-color: rgba(0, 0, 0, 0.75);\n}\n\n.lg-info-exif-html table caption {\n  text-align: left;\n}\n\n.lg-info-exif-html table th {\n  color: #999;\n  padding-right: 5px;\n}\n\n.lg-info-exif-html table td {\n  color: #ccc;\n  /*padding-right: 5px;*/\n}\n", ""]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2ZvbnQvUGhvdG9ncmFwaHlJY29ucy5lb3QiLCJ3ZWJwYWNrOi8vLy4vYXBwL2ZvbnQvUGhvdG9ncmFwaHlJY29ucy5zdmciLCJ3ZWJwYWNrOi8vLy4vYXBwL2ZvbnQvUGhvdG9ncmFwaHlJY29ucy50dGYiLCJ3ZWJwYWNrOi8vLy4vYXBwL2ZvbnQvUGhvdG9ncmFwaHlJY29ucy53b2ZmIiwid2VicGFjazovLy8uL2FwcC9mb250L3Bob3RvZ3JhcGh5LmNzcz9lMmU0Iiwid2VicGFjazovLy8uL2FwcC9pbml0aWFsaXplLmpzIiwid2VicGFjazovLy8uL2FwcC9sZy1pbmZvLmNzcz9hNDBhIiwid2VicGFjazovLy8uL2FwcC9sZy1pbmZvLmpzIiwid2VicGFjazovLy8uL2FwcC9zdHlsZXMuY3NzPzZhMjIiLCJ3ZWJwYWNrOi8vLy4vYXBwL2ZvbnQvcGhvdG9ncmFwaHkuY3NzIiwid2VicGFjazovLy8uL2FwcC9sZy1pbmZvLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGlnaHRnYWxsZXJ5L2Rpc3QvY3NzL2xnLXRyYW5zaXRpb25zLm1pbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpZ2h0Z2FsbGVyeS9kaXN0L2Nzcy9saWdodGdhbGxlcnkubWluLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL3VybC9lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xnLWZ1bGxzY3JlZW4vZGlzdC9sZy1mdWxsc2NyZWVuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sZy10aHVtYm5haWwvZGlzdC9sZy10aHVtYm5haWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xnLXpvb20vZGlzdC9sZy16b29tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saWdodGdhbGxlcnkvZGlzdC9mb250cy9sZy5lb3QiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpZ2h0Z2FsbGVyeS9kaXN0L2ZvbnRzL2xnLmVvdD9lZjUyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saWdodGdhbGxlcnkvZGlzdC9mb250cy9sZy5zdmciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpZ2h0Z2FsbGVyeS9kaXN0L2ZvbnRzL2xnLnR0ZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGlnaHRnYWxsZXJ5L2Rpc3QvZm9udHMvbGcud29mZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGlnaHRnYWxsZXJ5L2Rpc3QvaW1nL2xvYWRpbmcuZ2lmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saWdodGdhbGxlcnkvZGlzdC9pbWcvdmlkZW8tcGxheS5wbmciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpZ2h0Z2FsbGVyeS9kaXN0L2ltZy92aW1lby1wbGF5LnBuZyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGlnaHRnYWxsZXJ5L2Rpc3QvaW1nL3lvdXR1YmUtcGxheS5wbmciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpZ2h0Z2FsbGVyeS9kaXN0L2pzL2xpZ2h0Z2FsbGVyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5kb3cualF1ZXJ5XCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLHVFOzs7Ozs7Ozs7OztBQ0FBLHFFOzs7Ozs7Ozs7OztBQ0FBLHVFOzs7Ozs7Ozs7OztBQ0FBLHdFOzs7Ozs7Ozs7Ozs7QUNDQTs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOztBQUVBLFk7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7OztBQy9ERDs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOztBQUVBLFk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2Qjs7QUFFN0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtQ0FBbUM7QUFDeEQ7QUFDQTtBQUNB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Q2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLENBQUM7O0FBRUQsQ0FBQzs7Ozs7Ozs7Ozs7O0FDN2REO0FBQ0E7QUFDQSw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQUE7QUFDTCxHQUFHLFFBT0g7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLGlDQUFpQzs7QUFFakM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhOztBQUViLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLENBQUM7OztBQUdELENBQUM7Ozs7Ozs7Ozs7OztBQzlnQkQseUQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEsaUU7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUFBO0FBQ0wsR0FBRyxRQU9IO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDRCQUE0Qjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWIsU0FBUzs7QUFFVDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLHdCQUF3QjtBQUMzQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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O0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUEsYUFBYTs7QUFFYjtBQUNBO0FBQ0EsYUFBYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7O0FBRWI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTs7QUFFQSxDQUFDOzs7QUFHRCxDQUFDOzs7Ozs7Ozs7Ozs7QUNoMUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBLG1CQUFtQiwyQkFBMkI7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7O0FBRUEsUUFBUSx1QkFBdUI7QUFDL0I7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7QUFFZCxrREFBa0Qsc0JBQXNCO0FBQ3hFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDO0FBQ3RDLEdBQUc7QUFDSDtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSwrQiIsImZpbGUiOiJqcy9wbHVnaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcInN0b3JhZ2UvcGx1Z2lucy9saWdodGdhbGxlcnkvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXBwL2luaXRpYWxpemUuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvZm9udHMvUGhvdG9ncmFwaHlJY29ucy5lb3RcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvaW1nL1Bob3RvZ3JhcGh5SWNvbnMuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL2ZvbnRzL1Bob3RvZ3JhcGh5SWNvbnMudHRmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL2ZvbnRzL1Bob3RvZ3JhcGh5SWNvbnMud29mZlwiOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3Bob3RvZ3JhcGh5LmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9waG90b2dyYXBoeS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3Bob3RvZ3JhcGh5LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInJlcXVpcmUoJ2xpZ2h0Z2FsbGVyeScpO1xucmVxdWlyZSgnbGctZnVsbHNjcmVlbicpO1xucmVxdWlyZSgnbGctdGh1bWJuYWlsJyk7XG5yZXF1aXJlKCdsZy16b29tJyk7XG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgJy4vbGctaW5mbyc7XG5cbnZhciBMaWdodEdhbGxlcnkgPSAoZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCc7XG4gIHZhciBpbWFnZXMgPSBbXSwgJGxnO1xuXG4gIHZhciBhZGRJbWFnZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgaW1hZ2VzW2RhdGFbJ2luZGV4J11dID0gZGF0YTtcbiAgfTtcblxuICB2YXIgb3BlbiA9IGZ1bmN0aW9uIChlbGVtLCBpbmRleCkge1xuICAgICRsZyA9ICQoZWxlbSk7XG4gICAgJGxnLmxpZ2h0R2FsbGVyeSh7XG4gICAgICBoaWRlQmFyc0RlbGF5OiAzMDAwLFxuICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgLy8gY29udHJvbHM6IGZhbHNlLFxuICAgICAgLy8gYXBwZW5kU3ViSHRtbFRvOiAnLmxnLWl0ZW0nLFxuICAgICAgZHluYW1pYzogdHJ1ZSxcbiAgICAgIGR5bmFtaWNFbDogaW1hZ2VzLFxuICAgICAgbW9kZTogJ2xnLWZhZGUnLFxuICAgICAgZG93bmxvYWQ6IHRydWUsXG4gICAgICAvLyBzaGFyZTogZmFsc2UsXG4gICAgICAvLyBoYXNoOiBmYWxzZSxcbiAgICAgIC8vIHBhZ2VyOiBmYWxzZSxcbiAgICAgIC8vIHNlbGVjdG9yOiAnYScsXG4gICAgICB0aHVtYm5haWw6IHRydWUsXG4gICAgICB0b2dnbGVUaHVtYjogdHJ1ZSxcbiAgICAgIHNob3dUaHVtYkJ5RGVmYXVsdDogZmFsc2UsXG4gICAgICB6b29tOiB0cnVlLFxuICAgICAgYWN0dWFsU2l6ZTogZmFsc2VcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgbGcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICRsZztcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGFkZEltYWdlOiBhZGRJbWFnZSxcbiAgICBvcGVuOiBvcGVuLFxuICAgIGxnOiBsZ1xuICB9O1xufSkoKTtcbndpbmRvdy5MaWdodEdhbGxlcnkgPSBMaWdodEdhbGxlcnk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGNsaWNrRXZlbnQgKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgaW5kZXggPSBwYXJzZUludCgkKGV2ZW50LnRhcmdldCkuYXR0cignZGF0YS1pbmRleCcpLCAxMCk7XG4gICAgTGlnaHRHYWxsZXJ5Lm9wZW4oZXZlbnQudGFyZ2V0LCBpbmRleCk7XG4gIH1cbiAgJChmdW5jdGlvbiAoKSB7XG4gICAgJCgnI2dyaWQgYScpLm9uKCdjbGljaycsIGNsaWNrRXZlbnQpO1xuXG4gICAgJCh3aW5kb3cpLm9uKCdrLWluZmluaXRlLWxvYWRlZCcsIGZ1bmN0aW9uIChldmVudCwgaHRtbCkge1xuICAgICAgJCgnI2dyaWQgYScpLm9mZignY2xpY2snLCBjbGlja0V2ZW50KTtcbiAgICAgICQoJyNncmlkIGEnKS5vbignY2xpY2snLCBjbGlja0V2ZW50KTtcbiAgICB9KTtcbiAgfSk7XG59KTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2xnLWluZm8uY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2xnLWluZm8uY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9sZy1pbmZvLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInJlcXVpcmUoJ2xpZ2h0Z2FsbGVyeScpO1xuaW1wb3J0ICcuL2xnLWluZm8uY3NzJztcbmltcG9ydCAnLi9mb250L3Bob3RvZ3JhcGh5LmNzcyc7XG5cbihmdW5jdGlvbiAoJCwgd2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgaW5mbzogdHJ1ZSxcbiAgICBzaG93RGVzY0J5RGVmYXVsdDogZmFsc2UsXG4gICAgc2hvd0V4aWZCdXR0b246IHRydWUsXG4gICAgZXhpZkZpZWxkczogW1xuICAgICAgJ21vZGVsJyxcbiAgICAgICdsZW5zJyxcbiAgICAgICdpc29fc3BlZWRfcmF0aW5ncycsXG4gICAgICAnZm9jYWxfbGVuZ3RoJyxcbiAgICAgICdhcGVydHVyZScsXG4gICAgICAnZXhwb3N1cmUnLFxuICAgICAgJ2RhdGVfdGltZV9vcmlnaW5hbCcsXG4gICAgICAnZ2VvbG9jYXRpb24nLFxuICAgICAgJ2FydGlzdCcsXG4gICAgICAnY29weXJpZ2h0J1xuICAgIF1cbiAgfTtcbiAgdmFyIGV4aWZUaXRsZXMgPSB7XG4gICAgbW9kZWw6ICdDYW1lcmEgTW9kZWwnLFxuICAgIGxlbnM6ICdMZW5zJyxcbiAgICBpc29fc3BlZWRfcmF0aW5nczogJ0lTTycsXG4gICAgZm9jYWxfbGVuZ3RoOiAnRm9jYWwgTGVuZ3RoJyxcbiAgICBhcGVydHVyZTogJ0FwZXJ0dXJlJyxcbiAgICBleHBvc3VyZTogJ0V4cG9zdXJlIFRpbWUnLFxuICAgIGZsYXNoOiAnRmxhc2gnLFxuICAgIG1ldGVyaW5nX21vZGU6ICdNZXRlcmluZyBNb2RlJyxcbiAgICBkYXRlX3RpbWVfb3JpZ2luYWw6ICdEYXRlIFRha2VuJyxcbiAgICBnZW9sb2NhdGlvbjogJ0xvY2F0aW9uIFRha2VuJyxcbiAgICBkaXJlY3Rpb246ICdEaXJlY3Rpb24gb2YgU2hvdCcsXG4gICAgYXJ0aXN0OiAnUGhvdG9ncmFwaGVyJyxcbiAgICBjb3B5cmlnaHQ6ICdDb3B5cmlnaHQnLFxuICAgIGZpbGVuYW1lOiAnRmlsZSBOYW1lJ1xuICB9O1xuXG4gIHZhciAkZGVzY0J1dHRvbiwgJGV4aWZCdXR0b24sICRleGlmSHRtbDtcblxuICB2YXIgSW5mbyA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgLy8gZ2V0IGxpZ2h0R2FsbGVyeSBjb3JlIHBsdWdpbiBkYXRhXG4gICAgdGhpcy5jb3JlID0gJChlbGVtZW50KS5kYXRhKCdsaWdodEdhbGxlcnknKTtcblxuICAgIHRoaXMuJGVsID0gJChlbGVtZW50KTtcbiAgICAvLyBleHRlbmQgbW9kdWxlIGRlZmF1bHQgc2V0dGluZ3Mgd2l0aCBsaWdodEdhbGxlcnkgY29yZSBzZXR0aW5nc1xuICAgIHRoaXMuY29yZS5zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCB0aGlzLmNvcmUucyk7XG5cbiAgICB0aGlzLmluaXQoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEluZm8ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLmNvcmUucy5pbmZvKSByZXR1cm47XG5cbiAgICBpZiAodGhpcy5jb3JlLnMuc2hvd0V4aWZCdXR0b24pIHtcbiAgICAgICRleGlmQnV0dG9uID0gJCgnPHNwYW4gaWQ9XCJsZy1pbmZvLWV4aWZcIiBjbGFzcz1cImxnLWljb25cIj48L3NwYW4+Jyk7XG4gICAgICAkZXhpZkJ1dHRvbi5vbignY2xpY2subGcnLCB0aGlzLnRvZ2dsZUV4aWZTdGF0ZS5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuY29yZS4kb3V0ZXIuZmluZCgnLmxnLXRvb2xiYXInKS5hcHBlbmQoJGV4aWZCdXR0b24pO1xuXG4gICAgICAkZXhpZkh0bWwgPSAkKCc8ZGl2IGNsYXNzPVwibGctaW5mby1leGlmLWh0bWxcIj48L2Rpdj4nKTtcbiAgICAgIHRoaXMuY29yZS4kb3V0ZXIuZmluZCgnLmxnJykuYXBwZW5kKCRleGlmSHRtbCk7XG5cbiAgICAgIExpZ2h0R2FsbGVyeS5sZygpLm9uKCdvbkFmdGVyU2xpZGUubGcnLCB0aGlzLnVwZGF0ZUV4aWYuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgJGRlc2NCdXR0b24gPSAkKCc8c3BhbiBpZD1cImxnLWluZm8tZGVzY1wiIGNsYXNzPVwibGctaWNvblwiPjwvc3Bhbj4nKTtcbiAgICAkZGVzY0J1dHRvbi5vbignY2xpY2subGcnLCB0aGlzLnRvZ2dsZURlc2NTdGF0ZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmNvcmUuJG91dGVyLmZpbmQoJy5sZy10b29sYmFyJykuYXBwZW5kKCRkZXNjQnV0dG9uKTtcblxuICAgIHZhciBzdGF0ZTtcbiAgICBpZiAodGhpcy5jb3JlLnMuc2hvd0Rlc2NCeURlZmF1bHQpIHtcbiAgICAgIHN0YXRlID0gJ3Nob3cnO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZSA9ICdoaWRlJztcbiAgICB9XG4gICAgdGhpcy5zZXREZXNjU3RhdGUoc3RhdGUpO1xuICAgIHRoaXMuc2V0RXhpZlN0YXRlKCdoaWRlJyk7XG4gIH07XG5cbiAgSW5mby5wcm90b3R5cGUuc2V0RGVzY1N0YXRlID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgJGRlc2NCdXR0b24ucmVtb3ZlQ2xhc3MoJ2xnLWluZm8tc3RhdGUtc2hvdyBsZy1pbmZvLXN0YXRlLWhpZGUnKTtcbiAgICAkZGVzY0J1dHRvbi5hZGRDbGFzcygnbGctaW5mby1zdGF0ZS0nICsgc3RhdGUpO1xuICAgIHRoaXMuc2hvd0Rlc2Moc3RhdGUpO1xuICB9O1xuXG4gIEluZm8ucHJvdG90eXBlLnNldEV4aWZTdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICRleGlmQnV0dG9uLnJlbW92ZUNsYXNzKCdsZy1pbmZvLXN0YXRlLXNob3cgbGctaW5mby1zdGF0ZS1oaWRlJyk7XG4gICAgJGV4aWZCdXR0b24uYWRkQ2xhc3MoJ2xnLWluZm8tc3RhdGUtJyArIHN0YXRlKTtcbiAgICB0aGlzLnNob3dFeGlmKHN0YXRlKTtcbiAgfTtcblxuICBJbmZvLnByb3RvdHlwZS5nZXREZXNjU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG1hdGNoID0gJGRlc2NCdXR0b24uYXR0cignY2xhc3MnKS5tYXRjaCgvXFxibGctaW5mby1zdGF0ZS0oXFx3KykvKTtcbiAgICByZXR1cm4gbWF0Y2hbMV07XG4gIH07XG5cbiAgSW5mby5wcm90b3R5cGUuZ2V0RXhpZlN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBtYXRjaCA9ICRleGlmQnV0dG9uLmF0dHIoJ2NsYXNzJykubWF0Y2goL1xcYmxnLWluZm8tc3RhdGUtKFxcdyspLyk7XG4gICAgcmV0dXJuIG1hdGNoWzFdO1xuICB9O1xuXG4gIEluZm8ucHJvdG90eXBlLnNob3dEZXNjID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgY2FzZSAnc2hvdyc6XG4gICAgICAgICQoJy5sZy1zdWItaHRtbCcpLnNob3coKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdoaWRlJzpcbiAgICAgICAgJCgnLmxnLXN1Yi1odG1sJykuaGlkZSgpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH07XG5cbiAgSW5mby5wcm90b3R5cGUuc2hvd0V4aWYgPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICBjYXNlICdzaG93JzpcbiAgICAgICAgJCgnLmxnLWluZm8tZXhpZi1odG1sJykuc2hvdygpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2hpZGUnOlxuICAgICAgICAkKCcubGctaW5mby1leGlmLWh0bWwnKS5oaWRlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfTtcblxuICBJbmZvLnByb3RvdHlwZS50b2dnbGVEZXNjU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGN1cnJlbnRTdGF0ZSA9IHRoaXMuZ2V0RGVzY1N0YXRlKCksXG4gICAgICBuZXdTdGF0ZSA9ICcnO1xuXG4gICAgc3dpdGNoIChjdXJyZW50U3RhdGUpIHtcbiAgICAgIGNhc2UgJ3Nob3cnOlxuICAgICAgICBuZXdTdGF0ZSA9ICdoaWRlJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdoaWRlJzpcbiAgICAgICAgbmV3U3RhdGUgPSAnc2hvdyc7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLnNldERlc2NTdGF0ZShuZXdTdGF0ZSk7XG4gIH07XG5cbiAgSW5mby5wcm90b3R5cGUudG9nZ2xlRXhpZlN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBjdXJyZW50U3RhdGUgPSB0aGlzLmdldEV4aWZTdGF0ZSgpLFxuICAgICAgbmV3U3RhdGUgPSAnJztcblxuICAgIHN3aXRjaCAoY3VycmVudFN0YXRlKSB7XG4gICAgICBjYXNlICdzaG93JzpcbiAgICAgICAgbmV3U3RhdGUgPSAnaGlkZSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnaGlkZSc6XG4gICAgICAgIG5ld1N0YXRlID0gJ3Nob3cnO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgdGhpcy5zZXRFeGlmU3RhdGUobmV3U3RhdGUpO1xuICB9O1xuXG4gIEluZm8ucHJvdG90eXBlLnVwZGF0ZUV4aWYgPSBmdW5jdGlvbiAoZXZlbnQsIHByZXZJbmRleCwgaW5kZXgpIHtcbiAgICB2YXIgZXhpZiA9IHRoaXMuY29yZS5zLmR5bmFtaWNFbFtpbmRleF0uZXhpZixcbiAgICAgIGdsb2MgPSB0aGlzLmNvcmUucy5keW5hbWljRWxbaW5kZXhdLmdlb2xvY2F0aW9uO1xuICAgIHZhciBodG1sID0gJzx0YWJsZT48Y2FwdGlvbj48c3BhbiBjbGFzcz1cImxnLWljb25cIj48L3NwYW4+SW1hZ2UgU3BlYzwvY2FwdGlvbj4nO1xuXG4gICAgaWYgKGV4aWYpIHtcbiAgICAgIGlmIChleGlmWydkYXRlX3RpbWVfb3JpZ2luYWwnXVsnY2xlYW4nXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBkdG8gPSBleGlmWydkYXRlX3RpbWVfb3JpZ2luYWwnXVsncmF3J10ucmVwbGFjZSgnOicsICctJykucmVwbGFjZSgnOicsICctJyk7XG4gICAgICAgIGV4aWZbJ2RhdGVfdGltZV9vcmlnaW5hbCddWydjbGVhbiddID0gbmV3IERhdGUoZHRvKS50b0xvY2FsZVN0cmluZygpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvcmUucy5leGlmRmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBmaWVsZCA9IHRoaXMuY29yZS5zLmV4aWZGaWVsZHNbaV07XG4gICAgICAgIGlmIChmaWVsZCA9PT0gJ2dlb2xvY2F0aW9uJykge1xuICAgICAgICAgIGlmIChnbG9jKSB7XG4gICAgICAgICAgICB2YXIgbGF0ID0gcGFyc2VGbG9hdChnbG9jWydsYXRpdHVkZSddKTtcbiAgICAgICAgICAgIHZhciBsb24gPSBwYXJzZUZsb2F0KGdsb2NbJ2xvbmdpdHVkZSddKTtcbiAgICAgICAgICAgIHZhciBkaXIgPSAnJztcbiAgICAgICAgICAgIGlmIChnbG9jWydkaXJlY3Rpb24nXSkge1xuICAgICAgICAgICAgICBkaXIgPSAnLCAnICsgZ2xvY1snZGlyZWN0aW9uJ10uY2xlYW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBodG1sICs9ICc8dHI+PHRoPicgK1xuICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJsZy1pY29uIGxnLWluZm8tZXhpZi1odG1sLScgKyBmaWVsZCArICdcIiB0aXRsZT1cIicgKyAoZXhpZlRpdGxlc1tmaWVsZF0gfHwgZmllbGQpICsgJ1wiPjwvc3Bhbj4nICtcbiAgICAgICAgICAgICAgJzwvdGg+PHRkPicgK1xuICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJsZy1pbmZvLWV4aWYtZ2VvbG9jYXRpb25cIj4nICtcbiAgICAgICAgICAgICAgbGF0LnRvRml4ZWQoNSkgKyAnLCAnICsgbG9uLnRvRml4ZWQoNSkgKyBkaXIgK1xuICAgICAgICAgICAgICAnPC9zcGFuPjwvdGQ+PC90cj4nICtcbiAgICAgICAgICAgICAgJzx0ciBjbGFzcz1cImxnLWluZm8tZXhpZi1nZW9sb2NhdGlvbi1tYXBcIj48dGg+PC90aD48dGQ+JyArXG4gICAgICAgICAgICAgICdNQVAnICtcbiAgICAgICAgICAgICAgJzwvdGQ+PC90cj4nO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBodG1sICs9ICc8dHI+PHRoPicgK1xuICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwibGctaWNvbiBsZy1pbmZvLWV4aWYtaHRtbC0nICsgZmllbGQgKyAnXCIgdGl0bGU9XCInICsgKGV4aWZUaXRsZXNbZmllbGRdIHx8IGZpZWxkKSArICdcIj48L3NwYW4+JyArXG4gICAgICAgICAgICAnPC90aD48dGQ+JyArXG4gICAgICAgICAgICAoZXhpZltmaWVsZF0uY2xlYW4gfHwgZXhpZltmaWVsZF0ucmF3KSArXG4gICAgICAgICAgICAnPC90ZD48L3RyPic7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBodG1sICs9ICc8L3RhYmxlPic7XG4gICAgJGV4aWZIdG1sLmh0bWwoJChodG1sKSk7XG4gICAgJCgnLmxnLWluZm8tZXhpZi1nZW9sb2NhdGlvbicpLm9uKCdjbGljaycsIHRoaXMudG9nZ2xlR2VvbG9jYXRpb25NYXAuYmluZCh0aGlzKSk7XG4gIH07XG5cbiAgSW5mby5wcm90b3R5cGUudG9nZ2xlR2VvbG9jYXRpb25NYXAgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAkKCcubGctaW5mby1leGlmLWdlb2xvY2F0aW9uLW1hcCcpLnRvZ2dsZSgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEZXN0cm95IGZ1bmN0aW9uIG11c3QgYmUgZGVmaW5lZC5cbiAgICogbGlnaHRnYWxsZXJ5IHdpbGwgYXV0b21hdGljYWxseSBjYWxsIHlvdXIgbW9kdWxlIGRlc3Ryb3kgZnVuY3Rpb25cbiAgICogYmVmb3JlIGRlc3Ryb3lpbmcgdGhlIGdhbGxlcnlcbiAgICovXG4gIEluZm8ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coJ2luZm8gZGVzdHJveSBjYWxsZWQnKTtcbiAgfTtcblxuICAkLmZuLmxpZ2h0R2FsbGVyeS5tb2R1bGVzLmluZm8gPSBJbmZvO1xufSkoalF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50KTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlcy5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGVzLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGVzLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciBlc2NhcGUgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL3VybC9lc2NhcGUuanNcIik7XG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdQaG90b2dyYXBoeUljb25zJztcXG4gIHNyYzogIHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi9QaG90b2dyYXBoeUljb25zLmVvdD95amgxdzdcIikpICsgXCIpO1xcbiAgc3JjOiAgdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuL1Bob3RvZ3JhcGh5SWNvbnMuZW90P3lqaDF3N1wiKSkgKyBcIiNpZWZpeCkgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcbiAgICB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4vUGhvdG9ncmFwaHlJY29ucy50dGY/eWpoMXc3XCIpKSArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyksXFxuICAgIHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi9QaG90b2dyYXBoeUljb25zLndvZmY/eWpoMXc3XCIpKSArIFwiKSBmb3JtYXQoJ3dvZmYnKSxcXG4gICAgdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuL1Bob3RvZ3JhcGh5SWNvbnMuc3ZnP3lqaDF3N1wiKSkgKyBcIiNQaG90b2dyYXBoeUljb25zKSBmb3JtYXQoJ3N2ZycpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuW2NsYXNzXj1cXFwiaWNvbi1cXFwiXSwgW2NsYXNzKj1cXFwiIGljb24tXFxcIl0ge1xcbiAgLyogdXNlICFpbXBvcnRhbnQgdG8gcHJldmVudCBpc3N1ZXMgd2l0aCBicm93c2VyIGV4dGVuc2lvbnMgdGhhdCBjaGFuZ2UgKi9cXG4gIGZvbnQtZmFtaWx5OiAnUGhvdG9ncmFwaHlJY29ucycgIWltcG9ydGFudDtcXG4gIHNwZWFrOiBub25lO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICBsaW5lLWhlaWdodDogMTtcXG5cXG4gIC8qIEJldHRlciBGb250IFJlbmRlcmluZyA9PT09PT09PT09PSAqL1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbn1cXG5cXG4uaWNvbi1waG90b2dyYXBoeV9jYW1lcmE6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTkwMFxcXCI7XFxufVxcbi5pY29uLXBob3RvZ3JhcGh5X2NhbWVyYS1iYWNrOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU5MDFcXFwiO1xcbn1cXG4uaWNvbi1waG90b2dyYXBoeV9sZW5zOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU5MDJcXFwiO1xcbn1cXG4uaWNvbi1waG90b2dyYXBoeV9mb2NhbC1sZW5ndGg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTkwM1xcXCI7XFxufVxcbi5pY29uLXBob3RvZ3JhcGh5X2FwZXJ0dXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU5MDRcXFwiO1xcbn1cXG4uaWNvbi1waG90b2dyYXBoeV9hcGVydHVyZS1ibGFjazpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFOTA1XFxcIjtcXG59XFxuLmljb24tcGhvdG9ncmFwaHlfbWV0ZXJpbmctbW9kZS0xOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU5MDZcXFwiO1xcbn1cXG4uaWNvbi1waG90b2dyYXBoeV9tZXRlcmluZy1tb2RlLTI6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTkwN1xcXCI7XFxufVxcbi5pY29uLXBob3RvZ3JhcGh5X21ldGVyaW5nLW1vZGUtMzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFOTA4XFxcIjtcXG59XFxuLmljb24tcGhvdG9ncmFwaHlfbWV0ZXJpbmctbW9kZS00OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU5MDlcXFwiO1xcbn1cXG4uaWNvbi1waG90b2dyYXBoeV9tZXRlcmluZy1tb2RlLTU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTkwQVxcXCI7XFxufVxcbi5pY29uLXBob3RvZ3JhcGh5X21ldGVyaW5nLW1vZGUtNjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFOTBCXFxcIjtcXG59XFxuLmljb24tcGhvdG9ncmFwaHlfbWV0ZXJpbmctbW9kZS0wOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU5MENcXFwiO1xcbn1cXG4uaWNvbi1waG90b2dyYXBoeV9pc286YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTkwRFxcXCI7XFxufVxcbi5pY29uLXBob3RvZ3JhcGh5X2V4cG9zdXJlLXRpbWU6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTkwRVxcXCI7XFxufVxcbi5pY29uLXBob3RvZ3JhcGh5X2ZsYXNoLW9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU5MEZcXFwiO1xcbn1cXG4uaWNvbi1waG90b2dyYXBoeV9mbGFzaC1vZmY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTkxMFxcXCI7XFxufVxcbi5pY29uLXBob3RvZ3JhcGh5X2ZpbHRlcnM6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTkxMVxcXCI7XFxufVxcbi5pY29uLXBob3RvZ3JhcGh5X3BpY3R1cmUtd2l0aC10ZXh0OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU5MTJcXFwiO1xcbn1cXG4uaWNvbi1waG90b2dyYXBoeV9waWN0dXJlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU5MTNcXFwiO1xcbn1cXG4uaWNvbi1waG90b2dyYXBoeV9kYXRldGltZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFOTE0XFxcIjtcXG59XFxuLmljb24tcGhvdG9ncmFwaHlfYXV0aG9yOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU5MTVcXFwiO1xcbn1cXG4uaWNvbi1waG90b2dyYXBoeV9jb3B5cmlnaHQ6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTkxNlxcXCI7XFxufVxcbi5pY29uLXBob3RvZ3JhcGh5X2dlb2xvY2F0aW9uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU5MTdcXFwiO1xcbn1cXG4uaWNvbi1waG90b2dyYXBoeV9tYXA6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTkxOFxcXCI7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiI2xnLWluZm8tZGVzYy5sZy1pY29uLCAjbGctaW5mby1leGlmLmxnLWljb24sIC5sZy1pbmZvLWV4aWYtaHRtbCAubGctaWNvbiB7XFxuICBmb250LWZhbWlseTogUGhvdG9ncmFwaHlJY29ucztcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuI2xnLWluZm8tZGVzYy5sZy1pbmZvLXN0YXRlLXNob3c6YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxFOTEzXFxcIjsgfSAvKiBwaG90byAgKi9cXG4jbGctaW5mby1kZXNjLmxnLWluZm8tc3RhdGUtaGlkZTpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEU5MTJcXFwiOyB9IC8qIGltYWdlLTEgKi9cXG4jbGctaW5mby1leGlmLmxnLWluZm8tc3RhdGUtc2hvdzpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEU5MDBcXFwiOyB9IC8qIGNhbWVyYSAqL1xcbiNsZy1pbmZvLWV4aWYubGctaW5mby1zdGF0ZS1oaWRlOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRTkwMVxcXCI7IH0gLyogcGhvdG8tY2FtZXJhcyAqL1xcblxcbi8qLmxnLWluZm8tZXhpZi1odG1sIC5sZy1pY29uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcZjEwM1xcXCI7IH0qL1xcbi5sZy1pbmZvLWV4aWYtaHRtbCB0ZCB7XFxuICBwYWRkaW5nOiAycHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcbn1cXG4ubGctaW5mby1leGlmLWh0bWwgLmxnLWljb24geyBwYWRkaW5nLXJpZ2h0OiA1cHg7IH1cXG4ubGctaW5mby1leGlmLWh0bWwtbW9kZWwubGctaWNvbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEU5MDBcXFwiOyBmb250LXNpemU6IDMycHg7IH0gLyogY2FtZXJhICovXFxuLmxnLWluZm8tZXhpZi1odG1sLWxlbnMubGctaWNvbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEU5MDJcXFwiOyBmb250LXNpemU6IDI4cHg7IH0gLyogbGVuLTEgKi9cXG4ubGctaW5mby1leGlmLWh0bWwtYXBlcnR1cmUubGctaWNvbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEU5MDRcXFwiOyB9IC8qIG9wZWluZy1hcGVydHVyZSAqL1xcbi5sZy1pbmZvLWV4aWYtaHRtbC1pc29fc3BlZWRfcmF0aW5ncy5sZy1pY29uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRTkwRFxcXCI7IH0gLyogaXNvICovXFxuLmxnLWluZm8tZXhpZi1odG1sLWZvY2FsX2xlbmd0aC5sZy1pY29uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRTkwM1xcXCI7IH0gLyogbGVuICovXFxuLmxnLWluZm8tZXhpZi1odG1sLWV4cG9zdXJlLmxnLWljb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxFOTBFXFxcIjsgfSAvKiBzdG9wd2F0Y2ggKi9cXG4ubGctaW5mby1leGlmLWh0bWwtZmxhc2gubGctaWNvbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEU5MEZcXFwiOyB9IC8qIGZsYXNoICovXFxuLmxnLWluZm8tZXhpZi1odG1sLWZsYXNoLW9mZi5sZy1pY29uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRTkxMFxcXCI7IH0gLyogZmxhc2ggKi9cXG4ubGctaW5mby1leGlmLWh0bWwtbWV0ZXJpbmdfbW9kZS5sZy1pY29uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRTkwNlxcXCI7IH0gLyogcGljdHVyZS0xICovXFxuLmxnLWluZm8tZXhpZi1odG1sLW1ldGVyaW5nX21vZGUtMC5sZy1pY29uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRTkwQ1xcXCI7IH0gLyogcGljdHVyZS0xICovXFxuLmxnLWluZm8tZXhpZi1odG1sLW1ldGVyaW5nX21vZGUtMS5sZy1pY29uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRTkwNlxcXCI7IH0gLyogcGljdHVyZS0xICovXFxuLmxnLWluZm8tZXhpZi1odG1sLW1ldGVyaW5nX21vZGUtMi5sZy1pY29uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRTkwN1xcXCI7IH0gLyogcGljdHVyZS0xICovXFxuLmxnLWluZm8tZXhpZi1odG1sLW1ldGVyaW5nX21vZGUtMy5sZy1pY29uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRTkwOFxcXCI7IH0gLyogcGljdHVyZS0xICovXFxuLmxnLWluZm8tZXhpZi1odG1sLW1ldGVyaW5nX21vZGUtNC5sZy1pY29uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRTkwOVxcXCI7IH0gLyogcGljdHVyZS0xICovXFxuLmxnLWluZm8tZXhpZi1odG1sLW1ldGVyaW5nX21vZGUtNS5sZy1pY29uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRTkwQVxcXCI7IH0gLyogcGljdHVyZS0xICovXFxuLmxnLWluZm8tZXhpZi1odG1sLW1ldGVyaW5nX21vZGUtNi5sZy1pY29uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRTkwQlxcXCI7IH0gLyogcGljdHVyZS0xICovXFxuLmxnLWluZm8tZXhpZi1odG1sLWRhdGVfdGltZV9vcmlnaW5hbC5sZy1pY29uOmJlZm9yZSB7IGNvbnRlbnQ6IFxcXCJcXFxcRTkxNFxcXCI7IH0gLyogY2FsZW5kYXIgKi9cXG4ubGctaW5mby1leGlmLWh0bWwtYXJ0aXN0LmxnLWljb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxFOTE1XFxcIjsgfSAvKiBjYWxlbmRhciAqL1xcbi5sZy1pbmZvLWV4aWYtaHRtbC1jb3B5cmlnaHQubGctaWNvbjpiZWZvcmUgeyBjb250ZW50OiBcXFwiXFxcXEU5MTZcXFwiOyB9IC8qIGNhbGVuZGFyICovXFxuLmxnLWluZm8tZXhpZi1odG1sLWdlb2xvY2F0aW9uLmxnLWljb246YmVmb3JlIHsgY29udGVudDogXFxcIlxcXFxFOTE3XFxcIjsgfSAvKiBnbG9iZSAqL1xcblxcbi5sZy1pbmZvLWV4aWYtZ2VvbG9jYXRpb24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjY2NjO1xcbn1cXG4ubGctaW5mby1leGlmLWdlb2xvY2F0aW9uLW1hcCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ubGctaW5mby1leGlmLWh0bWwge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTA4MTtcXG4gIGNvbG9yOiAjZWVlO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgcGFkZGluZzogMTBweCAxMHB4O1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDYwcHg7XFxuICBib3R0b206IDYwcHg7XFxuICB3aWR0aDogMzUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbn1cXG5cXG4ubGctaW5mby1leGlmLWh0bWwgdGFibGUgY2FwdGlvbiB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4ubGctaW5mby1leGlmLWh0bWwgdGFibGUgdGgge1xcbiAgY29sb3I6ICM5OTk7XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxufVxcblxcbi5sZy1pbmZvLWV4aWYtaHRtbCB0YWJsZSB0ZCB7XFxuICBjb2xvcjogI2NjYztcXG4gIC8qcGFkZGluZy1yaWdodDogNXB4OyovXFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuZXhwb3J0cy5pKHJlcXVpcmUoXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIWxpZ2h0Z2FsbGVyeS9kaXN0L2Nzcy9saWdodGdhbGxlcnkubWluLmNzc1wiKSwgXCJcIik7XG5leHBvcnRzLmkocmVxdWlyZShcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhbGlnaHRnYWxsZXJ5L2Rpc3QvY3NzL2xnLXRyYW5zaXRpb25zLm1pbi5jc3NcIiksIFwiXCIpO1xuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubGctY3NzMy5sZy16b29tLWluIC5sZy1pdGVte29wYWNpdHk6MH0ubGctY3NzMy5sZy16b29tLWluIC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsLmxnLWNzczMubGctem9vbS1pbiAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMS4zLDEuMywxLjMpO3RyYW5zZm9ybTpzY2FsZTNkKDEuMywxLjMsMS4zKX0ubGctY3NzMy5sZy16b29tLWluIC5sZy1pdGVtLmxnLWN1cnJlbnR7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSk7dHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpO29wYWNpdHk6MX0ubGctY3NzMy5sZy16b29tLWluIC5sZy1pdGVtLmxnLWN1cnJlbnQsLmxnLWNzczMubGctem9vbS1pbiAubGctaXRlbS5sZy1uZXh0LXNsaWRlLC5sZy1jc3MzLmxnLXpvb20taW4gLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzOy1tb3otdHJhbnNpdGlvbjotbW96LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHM7LW8tdHJhbnNpdGlvbjotby10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzO3RyYW5zaXRpb246dHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwc30ubGctY3NzMy5sZy16b29tLWluLWJpZyAubGctaXRlbXtvcGFjaXR5OjB9LmxnLWNzczMubGctem9vbS1pbi1iaWcgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwubGctY3NzMy5sZy16b29tLWluLWJpZyAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMiwyLDIpO3RyYW5zZm9ybTpzY2FsZTNkKDIsMiwyKX0ubGctY3NzMy5sZy16b29tLWluLWJpZyAubGctaXRlbS5sZy1jdXJyZW50ey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpO3RyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKTtvcGFjaXR5OjF9LmxnLWNzczMubGctem9vbS1pbi1iaWcgLmxnLWl0ZW0ubGctY3VycmVudCwubGctY3NzMy5sZy16b29tLWluLWJpZyAubGctaXRlbS5sZy1uZXh0LXNsaWRlLC5sZy1jc3MzLmxnLXpvb20taW4tYmlnIC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwczstbW96LXRyYW5zaXRpb246LW1vei10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzOy1vLXRyYW5zaXRpb246LW8tdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHN9LmxnLWNzczMubGctem9vbS1vdXQgLmxnLWl0ZW17b3BhY2l0eTowfS5sZy1jc3MzLmxnLXpvb20tb3V0IC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsLmxnLWNzczMubGctem9vbS1vdXQgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKC43LC43LC43KTt0cmFuc2Zvcm06c2NhbGUzZCguNywuNywuNyl9LmxnLWNzczMubGctem9vbS1vdXQgLmxnLWl0ZW0ubGctY3VycmVudHstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKTt0cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSk7b3BhY2l0eToxfS5sZy1jc3MzLmxnLXpvb20tb3V0IC5sZy1pdGVtLmxnLWN1cnJlbnQsLmxnLWNzczMubGctem9vbS1vdXQgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwubGctY3NzMy5sZy16b29tLW91dCAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHM7LW1vei10cmFuc2l0aW9uOi1tb3otdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwczstby10cmFuc2l0aW9uOi1vLXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzfS5sZy1jc3MzLmxnLXpvb20tb3V0LWJpZyAubGctaXRlbXtvcGFjaXR5OjB9LmxnLWNzczMubGctem9vbS1vdXQtYmlnIC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsLmxnLWNzczMubGctem9vbS1vdXQtYmlnIC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCk7dHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApfS5sZy1jc3MzLmxnLXpvb20tb3V0LWJpZyAubGctaXRlbS5sZy1jdXJyZW50ey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpO3RyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKTtvcGFjaXR5OjF9LmxnLWNzczMubGctem9vbS1vdXQtYmlnIC5sZy1pdGVtLmxnLWN1cnJlbnQsLmxnLWNzczMubGctem9vbS1vdXQtYmlnIC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsLmxnLWNzczMubGctem9vbS1vdXQtYmlnIC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwczstbW96LXRyYW5zaXRpb246LW1vei10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzOy1vLXRyYW5zaXRpb246LW8tdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHN9LmxnLWNzczMubGctem9vbS1vdXQtaW4gLmxnLWl0ZW17b3BhY2l0eTowfS5sZy1jc3MzLmxnLXpvb20tb3V0LWluIC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCk7dHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApfS5sZy1jc3MzLmxnLXpvb20tb3V0LWluIC5sZy1pdGVtLmxnLW5leHQtc2xpZGV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgyLDIsMik7dHJhbnNmb3JtOnNjYWxlM2QoMiwyLDIpfS5sZy1jc3MzLmxnLXpvb20tb3V0LWluIC5sZy1pdGVtLmxnLWN1cnJlbnR7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSk7dHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpO29wYWNpdHk6MX0ubGctY3NzMy5sZy16b29tLW91dC1pbiAubGctaXRlbS5sZy1jdXJyZW50LC5sZy1jc3MzLmxnLXpvb20tb3V0LWluIC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsLmxnLWNzczMubGctem9vbS1vdXQtaW4gLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzOy1tb3otdHJhbnNpdGlvbjotbW96LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHM7LW8tdHJhbnNpdGlvbjotby10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzO3RyYW5zaXRpb246dHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwc30ubGctY3NzMy5sZy16b29tLWluLW91dCAubGctaXRlbXtvcGFjaXR5OjB9LmxnLWNzczMubGctem9vbS1pbi1vdXQgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDIsMiwyKTt0cmFuc2Zvcm06c2NhbGUzZCgyLDIsMil9LmxnLWNzczMubGctem9vbS1pbi1vdXQgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKTt0cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCl9LmxnLWNzczMubGctem9vbS1pbi1vdXQgLmxnLWl0ZW0ubGctY3VycmVudHstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKTt0cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSk7b3BhY2l0eToxfS5sZy1jc3MzLmxnLXpvb20taW4tb3V0IC5sZy1pdGVtLmxnLWN1cnJlbnQsLmxnLWNzczMubGctem9vbS1pbi1vdXQgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwubGctY3NzMy5sZy16b29tLWluLW91dCAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHM7LW1vei10cmFuc2l0aW9uOi1tb3otdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwczstby10cmFuc2l0aW9uOi1vLXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzfS5sZy1jc3MzLmxnLXNvZnQtem9vbSAubGctaXRlbXtvcGFjaXR5OjB9LmxnLWNzczMubGctc29mdC16b29tIC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLjEsMS4xLDEuMSk7dHJhbnNmb3JtOnNjYWxlM2QoMS4xLDEuMSwxLjEpfS5sZy1jc3MzLmxnLXNvZnQtem9vbSAubGctaXRlbS5sZy1uZXh0LXNsaWRley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjksLjksLjkpO3RyYW5zZm9ybTpzY2FsZTNkKC45LC45LC45KX0ubGctY3NzMy5sZy1zb2Z0LXpvb20gLmxnLWl0ZW0ubGctY3VycmVudHstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKTt0cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSk7b3BhY2l0eToxfS5sZy1jc3MzLmxnLXNvZnQtem9vbSAubGctaXRlbS5sZy1jdXJyZW50LC5sZy1jc3MzLmxnLXNvZnQtem9vbSAubGctaXRlbS5sZy1uZXh0LXNsaWRlLC5sZy1jc3MzLmxnLXNvZnQtem9vbSAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHM7LW1vei10cmFuc2l0aW9uOi1tb3otdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwczstby10cmFuc2l0aW9uOi1vLXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzfS5sZy1jc3MzLmxnLXNjYWxlLXVwIC5sZy1pdGVte29wYWNpdHk6MH0ubGctY3NzMy5sZy1zY2FsZS11cCAubGctaXRlbS5sZy1uZXh0LXNsaWRlLC5sZy1jc3MzLmxnLXNjYWxlLXVwIC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LW1vei10cmFuc2Zvcm06c2NhbGUzZCguOCwuOCwuOCkgdHJhbnNsYXRlM2QoMCwxMCUsMCk7LW8tdHJhbnNmb3JtOnNjYWxlM2QoLjgsLjgsLjgpIHRyYW5zbGF0ZTNkKDAsMTAlLDApOy1tcy10cmFuc2Zvcm06c2NhbGUzZCguOCwuOCwuOCkgdHJhbnNsYXRlM2QoMCwxMCUsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguOCwuOCwuOCkgdHJhbnNsYXRlM2QoMCwxMCUsMCk7dHJhbnNmb3JtOnNjYWxlM2QoLjgsLjgsLjgpIHRyYW5zbGF0ZTNkKDAsMTAlLDApfS5sZy1jc3MzLmxnLXNjYWxlLXVwIC5sZy1pdGVtLmxnLWN1cnJlbnR7LW1vei10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSkgdHJhbnNsYXRlM2QoMCwwLDApOy1vLXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKSB0cmFuc2xhdGUzZCgwLDAsMCk7LW1zLXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKSB0cmFuc2xhdGUzZCgwLDAsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSkgdHJhbnNsYXRlM2QoMCwwLDApO3RyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKSB0cmFuc2xhdGUzZCgwLDAsMCk7b3BhY2l0eToxfS5sZy1jc3MzLmxnLXNjYWxlLXVwIC5sZy1pdGVtLmxnLWN1cnJlbnQsLmxnLWNzczMubGctc2NhbGUtdXAgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwubGctY3NzMy5sZy1zY2FsZS11cCAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHM7LW1vei10cmFuc2l0aW9uOi1tb3otdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwczstby10cmFuc2l0aW9uOi1vLXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzfS5sZy1jc3MzLmxnLXNsaWRlLWNpcmN1bGFyIC5sZy1pdGVte29wYWNpdHk6MH0ubGctY3NzMy5sZy1zbGlkZS1jaXJjdWxhciAubGctaXRlbS5sZy1wcmV2LXNsaWRley1tb3otdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7LW8tdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7LW1zLXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgtMTAwJSwwLDApOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7dHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKC0xMDAlLDAsMCl9LmxnLWNzczMubGctc2xpZGUtY2lyY3VsYXIgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZXstbW96LXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgxMDAlLDAsMCk7LW8tdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKDEwMCUsMCwwKTstbXMtdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKDEwMCUsMCwwKTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgxMDAlLDAsMCk7dHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKDEwMCUsMCwwKX0ubGctY3NzMy5sZy1zbGlkZS1jaXJjdWxhciAubGctaXRlbS5sZy1jdXJyZW50ey1tb3otdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpIHRyYW5zbGF0ZTNkKDAsMCwwKTstby10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSkgdHJhbnNsYXRlM2QoMCwwLDApOy1tcy10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSkgdHJhbnNsYXRlM2QoMCwwLDApOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpIHRyYW5zbGF0ZTNkKDAsMCwwKTt0cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSkgdHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MX0ubGctY3NzMy5sZy1zbGlkZS1jaXJjdWxhciAubGctaXRlbS5sZy1jdXJyZW50LC5sZy1jc3MzLmxnLXNsaWRlLWNpcmN1bGFyIC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsLmxnLWNzczMubGctc2xpZGUtY2lyY3VsYXIgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzOy1tb3otdHJhbnNpdGlvbjotbW96LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHM7LW8tdHJhbnNpdGlvbjotby10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzO3RyYW5zaXRpb246dHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwc30ubGctY3NzMy5sZy1zbGlkZS1jaXJjdWxhci11cCAubGctaXRlbXtvcGFjaXR5OjB9LmxnLWNzczMubGctc2xpZGUtY2lyY3VsYXItdXAgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstbW96LXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgtMTAwJSwtMTAwJSwwKTstby10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoLTEwMCUsLTEwMCUsMCk7LW1zLXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgtMTAwJSwtMTAwJSwwKTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgtMTAwJSwtMTAwJSwwKTt0cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoLTEwMCUsLTEwMCUsMCl9LmxnLWNzczMubGctc2xpZGUtY2lyY3VsYXItdXAgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZXstbW96LXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgxMDAlLC0xMDAlLDApOy1vLXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgxMDAlLC0xMDAlLDApOy1tcy10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoMTAwJSwtMTAwJSwwKTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgxMDAlLC0xMDAlLDApO3RyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgxMDAlLC0xMDAlLDApfS5sZy1jc3MzLmxnLXNsaWRlLWNpcmN1bGFyLXVwIC5sZy1pdGVtLmxnLWN1cnJlbnR7LW1vei10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSkgdHJhbnNsYXRlM2QoMCwwLDApOy1vLXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKSB0cmFuc2xhdGUzZCgwLDAsMCk7LW1zLXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKSB0cmFuc2xhdGUzZCgwLDAsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSkgdHJhbnNsYXRlM2QoMCwwLDApO3RyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKSB0cmFuc2xhdGUzZCgwLDAsMCk7b3BhY2l0eToxfS5sZy1jc3MzLmxnLXNsaWRlLWNpcmN1bGFyLXVwIC5sZy1pdGVtLmxnLWN1cnJlbnQsLmxnLWNzczMubGctc2xpZGUtY2lyY3VsYXItdXAgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwubGctY3NzMy5sZy1zbGlkZS1jaXJjdWxhci11cCAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHM7LW1vei10cmFuc2l0aW9uOi1tb3otdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwczstby10cmFuc2l0aW9uOi1vLXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzfS5sZy1jc3MzLmxnLXNsaWRlLWNpcmN1bGFyLWRvd24gLmxnLWl0ZW17b3BhY2l0eTowfS5sZy1jc3MzLmxnLXNsaWRlLWNpcmN1bGFyLWRvd24gLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstbW96LXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgtMTAwJSwxMDAlLDApOy1vLXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgtMTAwJSwxMDAlLDApOy1tcy10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoLTEwMCUsMTAwJSwwKTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgtMTAwJSwxMDAlLDApO3RyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgtMTAwJSwxMDAlLDApfS5sZy1jc3MzLmxnLXNsaWRlLWNpcmN1bGFyLWRvd24gLmxnLWl0ZW0ubGctbmV4dC1zbGlkZXstbW96LXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgxMDAlLDEwMCUsMCk7LW8tdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKDEwMCUsMTAwJSwwKTstbXMtdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKDEwMCUsMTAwJSwwKTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgxMDAlLDEwMCUsMCk7dHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKDEwMCUsMTAwJSwwKX0ubGctY3NzMy5sZy1zbGlkZS1jaXJjdWxhci1kb3duIC5sZy1pdGVtLmxnLWN1cnJlbnR7LW1vei10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSkgdHJhbnNsYXRlM2QoMCwwLDApOy1vLXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKSB0cmFuc2xhdGUzZCgwLDAsMCk7LW1zLXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKSB0cmFuc2xhdGUzZCgwLDAsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSkgdHJhbnNsYXRlM2QoMCwwLDApO3RyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKSB0cmFuc2xhdGUzZCgwLDAsMCk7b3BhY2l0eToxfS5sZy1jc3MzLmxnLXNsaWRlLWNpcmN1bGFyLWRvd24gLmxnLWl0ZW0ubGctY3VycmVudCwubGctY3NzMy5sZy1zbGlkZS1jaXJjdWxhci1kb3duIC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsLmxnLWNzczMubGctc2xpZGUtY2lyY3VsYXItZG93biAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHM7LW1vei10cmFuc2l0aW9uOi1tb3otdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwczstby10cmFuc2l0aW9uOi1vLXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzfS5sZy1jc3MzLmxnLXNsaWRlLWNpcmN1bGFyLXZlcnRpY2FsIC5sZy1pdGVte29wYWNpdHk6MH0ubGctY3NzMy5sZy1zbGlkZS1jaXJjdWxhci12ZXJ0aWNhbCAubGctaXRlbS5sZy1wcmV2LXNsaWRley1tb3otdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKDAsLTEwMCUsMCk7LW8tdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKDAsLTEwMCUsMCk7LW1zLXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgwLC0xMDAlLDApOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKDAsLTEwMCUsMCk7dHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKDAsLTEwMCUsMCl9LmxnLWNzczMubGctc2xpZGUtY2lyY3VsYXItdmVydGljYWwgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZXstbW96LXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgwLDEwMCUsMCk7LW8tdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKDAsMTAwJSwwKTstbXMtdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKDAsMTAwJSwwKTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgwLDEwMCUsMCk7dHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKDAsMTAwJSwwKX0ubGctY3NzMy5sZy1zbGlkZS1jaXJjdWxhci12ZXJ0aWNhbCAubGctaXRlbS5sZy1jdXJyZW50ey1tb3otdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpIHRyYW5zbGF0ZTNkKDAsMCwwKTstby10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSkgdHJhbnNsYXRlM2QoMCwwLDApOy1tcy10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSkgdHJhbnNsYXRlM2QoMCwwLDApOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpIHRyYW5zbGF0ZTNkKDAsMCwwKTt0cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSkgdHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MX0ubGctY3NzMy5sZy1zbGlkZS1jaXJjdWxhci12ZXJ0aWNhbCAubGctaXRlbS5sZy1jdXJyZW50LC5sZy1jc3MzLmxnLXNsaWRlLWNpcmN1bGFyLXZlcnRpY2FsIC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsLmxnLWNzczMubGctc2xpZGUtY2lyY3VsYXItdmVydGljYWwgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzOy1tb3otdHJhbnNpdGlvbjotbW96LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHM7LW8tdHJhbnNpdGlvbjotby10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzO3RyYW5zaXRpb246dHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwc30ubGctY3NzMy5sZy1zbGlkZS1jaXJjdWxhci12ZXJ0aWNhbC1sZWZ0IC5sZy1pdGVte29wYWNpdHk6MH0ubGctY3NzMy5sZy1zbGlkZS1jaXJjdWxhci12ZXJ0aWNhbC1sZWZ0IC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LW1vei10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoLTEwMCUsLTEwMCUsMCk7LW8tdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKC0xMDAlLC0xMDAlLDApOy1tcy10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoLTEwMCUsLTEwMCUsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoLTEwMCUsLTEwMCUsMCk7dHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKC0xMDAlLC0xMDAlLDApfS5sZy1jc3MzLmxnLXNsaWRlLWNpcmN1bGFyLXZlcnRpY2FsLWxlZnQgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZXstbW96LXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgtMTAwJSwxMDAlLDApOy1vLXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgtMTAwJSwxMDAlLDApOy1tcy10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoLTEwMCUsMTAwJSwwKTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgtMTAwJSwxMDAlLDApO3RyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgtMTAwJSwxMDAlLDApfS5sZy1jc3MzLmxnLXNsaWRlLWNpcmN1bGFyLXZlcnRpY2FsLWxlZnQgLmxnLWl0ZW0ubGctY3VycmVudHstbW96LXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKSB0cmFuc2xhdGUzZCgwLDAsMCk7LW8tdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpIHRyYW5zbGF0ZTNkKDAsMCwwKTstbXMtdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpIHRyYW5zbGF0ZTNkKDAsMCwwKTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKSB0cmFuc2xhdGUzZCgwLDAsMCk7dHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpIHRyYW5zbGF0ZTNkKDAsMCwwKTtvcGFjaXR5OjF9LmxnLWNzczMubGctc2xpZGUtY2lyY3VsYXItdmVydGljYWwtbGVmdCAubGctaXRlbS5sZy1jdXJyZW50LC5sZy1jc3MzLmxnLXNsaWRlLWNpcmN1bGFyLXZlcnRpY2FsLWxlZnQgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwubGctY3NzMy5sZy1zbGlkZS1jaXJjdWxhci12ZXJ0aWNhbC1sZWZ0IC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwczstbW96LXRyYW5zaXRpb246LW1vei10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzOy1vLXRyYW5zaXRpb246LW8tdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHN9LmxnLWNzczMubGctc2xpZGUtY2lyY3VsYXItdmVydGljYWwtZG93biAubGctaXRlbXtvcGFjaXR5OjB9LmxnLWNzczMubGctc2xpZGUtY2lyY3VsYXItdmVydGljYWwtZG93biAubGctaXRlbS5sZy1wcmV2LXNsaWRley1tb3otdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKDEwMCUsLTEwMCUsMCk7LW8tdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKDEwMCUsLTEwMCUsMCk7LW1zLXRyYW5zZm9ybTpzY2FsZTNkKDAsMCwwKSB0cmFuc2xhdGUzZCgxMDAlLC0xMDAlLDApOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKDEwMCUsLTEwMCUsMCk7dHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKDEwMCUsLTEwMCUsMCl9LmxnLWNzczMubGctc2xpZGUtY2lyY3VsYXItdmVydGljYWwtZG93biAubGctaXRlbS5sZy1uZXh0LXNsaWRley1tb3otdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKDEwMCUsMTAwJSwwKTstby10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoMTAwJSwxMDAlLDApOy1tcy10cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoMTAwJSwxMDAlLDApOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApIHRyYW5zbGF0ZTNkKDEwMCUsMTAwJSwwKTt0cmFuc2Zvcm06c2NhbGUzZCgwLDAsMCkgdHJhbnNsYXRlM2QoMTAwJSwxMDAlLDApfS5sZy1jc3MzLmxnLXNsaWRlLWNpcmN1bGFyLXZlcnRpY2FsLWRvd24gLmxnLWl0ZW0ubGctY3VycmVudHstbW96LXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKSB0cmFuc2xhdGUzZCgwLDAsMCk7LW8tdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpIHRyYW5zbGF0ZTNkKDAsMCwwKTstbXMtdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpIHRyYW5zbGF0ZTNkKDAsMCwwKTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKSB0cmFuc2xhdGUzZCgwLDAsMCk7dHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpIHRyYW5zbGF0ZTNkKDAsMCwwKTtvcGFjaXR5OjF9LmxnLWNzczMubGctc2xpZGUtY2lyY3VsYXItdmVydGljYWwtZG93biAubGctaXRlbS5sZy1jdXJyZW50LC5sZy1jc3MzLmxnLXNsaWRlLWNpcmN1bGFyLXZlcnRpY2FsLWRvd24gLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwubGctY3NzMy5sZy1zbGlkZS1jaXJjdWxhci12ZXJ0aWNhbC1kb3duIC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwczstbW96LXRyYW5zaXRpb246LW1vei10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAxcyBlYXNlIDBzOy1vLXRyYW5zaXRpb246LW8tdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMXMgZWFzZSAwczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDFzIGVhc2UgMHN9LmxnLWNzczMubGctc2xpZGUtdmVydGljYWwgLmxnLWl0ZW17b3BhY2l0eTowfS5sZy1jc3MzLmxnLXNsaWRlLXZlcnRpY2FsIC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTAwJSwwKX0ubGctY3NzMy5sZy1zbGlkZS12ZXJ0aWNhbCAubGctaXRlbS5sZy1uZXh0LXNsaWRley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTAwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwxMDAlLDApfS5sZy1jc3MzLmxnLXNsaWRlLXZlcnRpY2FsIC5sZy1pdGVtLmxnLWN1cnJlbnR7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7b3BhY2l0eToxfS5sZy1jc3MzLmxnLXNsaWRlLXZlcnRpY2FsIC5sZy1pdGVtLmxnLWN1cnJlbnQsLmxnLWNzczMubGctc2xpZGUtdmVydGljYWwgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwubGctY3NzMy5sZy1zbGlkZS12ZXJ0aWNhbCAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzOy1tb3otdHJhbnNpdGlvbjotbW96LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzOy1vLXRyYW5zaXRpb246LW8tdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwc30ubGctY3NzMy5sZy1zbGlkZS12ZXJ0aWNhbC1ncm93dGggLmxnLWl0ZW17b3BhY2l0eTowfS5sZy1jc3MzLmxnLXNsaWRlLXZlcnRpY2FsLWdyb3d0aCAubGctaXRlbS5sZy1wcmV2LXNsaWRley1tb3otdHJhbnNmb3JtOnNjYWxlM2QoLjUsLjUsLjUpIHRyYW5zbGF0ZTNkKDAsLTE1MCUsMCk7LW8tdHJhbnNmb3JtOnNjYWxlM2QoLjUsLjUsLjUpIHRyYW5zbGF0ZTNkKDAsLTE1MCUsMCk7LW1zLXRyYW5zZm9ybTpzY2FsZTNkKC41LC41LC41KSB0cmFuc2xhdGUzZCgwLC0xNTAlLDApOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjUsLjUsLjUpIHRyYW5zbGF0ZTNkKDAsLTE1MCUsMCk7dHJhbnNmb3JtOnNjYWxlM2QoLjUsLjUsLjUpIHRyYW5zbGF0ZTNkKDAsLTE1MCUsMCl9LmxnLWNzczMubGctc2xpZGUtdmVydGljYWwtZ3Jvd3RoIC5sZy1pdGVtLmxnLW5leHQtc2xpZGV7LW1vei10cmFuc2Zvcm06c2NhbGUzZCguNSwuNSwuNSkgdHJhbnNsYXRlM2QoMCwxNTAlLDApOy1vLXRyYW5zZm9ybTpzY2FsZTNkKC41LC41LC41KSB0cmFuc2xhdGUzZCgwLDE1MCUsMCk7LW1zLXRyYW5zZm9ybTpzY2FsZTNkKC41LC41LC41KSB0cmFuc2xhdGUzZCgwLDE1MCUsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCguNSwuNSwuNSkgdHJhbnNsYXRlM2QoMCwxNTAlLDApO3RyYW5zZm9ybTpzY2FsZTNkKC41LC41LC41KSB0cmFuc2xhdGUzZCgwLDE1MCUsMCl9LmxnLWNzczMubGctc2xpZGUtdmVydGljYWwtZ3Jvd3RoIC5sZy1pdGVtLmxnLWN1cnJlbnR7LW1vei10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSkgdHJhbnNsYXRlM2QoMCwwLDApOy1vLXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKSB0cmFuc2xhdGUzZCgwLDAsMCk7LW1zLXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKSB0cmFuc2xhdGUzZCgwLDAsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSkgdHJhbnNsYXRlM2QoMCwwLDApO3RyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKSB0cmFuc2xhdGUzZCgwLDAsMCk7b3BhY2l0eToxfS5sZy1jc3MzLmxnLXNsaWRlLXZlcnRpY2FsLWdyb3d0aCAubGctaXRlbS5sZy1jdXJyZW50LC5sZy1jc3MzLmxnLXNsaWRlLXZlcnRpY2FsLWdyb3d0aCAubGctaXRlbS5sZy1uZXh0LXNsaWRlLC5sZy1jc3MzLmxnLXNsaWRlLXZlcnRpY2FsLWdyb3d0aCAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzOy1tb3otdHJhbnNpdGlvbjotbW96LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzOy1vLXRyYW5zaXRpb246LW8tdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwc30ubGctY3NzMy5sZy1zbGlkZS1za2V3LW9ubHkgLmxnLWl0ZW17b3BhY2l0eTowfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctb25seSAubGctaXRlbS5sZy1uZXh0LXNsaWRlLC5sZy1jc3MzLmxnLXNsaWRlLXNrZXctb25seSAubGctaXRlbS5sZy1wcmV2LXNsaWRley1tb3otdHJhbnNmb3JtOnNrZXcoMTBkZWcsMGRlZyk7LW8tdHJhbnNmb3JtOnNrZXcoMTBkZWcsMGRlZyk7LW1zLXRyYW5zZm9ybTpza2V3KDEwZGVnLDBkZWcpOy13ZWJraXQtdHJhbnNmb3JtOnNrZXcoMTBkZWcsMGRlZyk7dHJhbnNmb3JtOnNrZXcoMTBkZWcsMGRlZyl9LmxnLWNzczMubGctc2xpZGUtc2tldy1vbmx5IC5sZy1pdGVtLmxnLWN1cnJlbnR7LW1vei10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpOy1vLXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZyk7LW1zLXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZyk7LXdlYmtpdC10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpO3RyYW5zZm9ybTpza2V3KDBkZWcsMGRlZyk7b3BhY2l0eToxfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctb25seSAubGctaXRlbS5sZy1jdXJyZW50LC5sZy1jc3MzLmxnLXNsaWRlLXNrZXctb25seSAubGctaXRlbS5sZy1uZXh0LXNsaWRlLC5sZy1jc3MzLmxnLXNsaWRlLXNrZXctb25seSAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzOy1tb3otdHJhbnNpdGlvbjotbW96LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzOy1vLXRyYW5zaXRpb246LW8tdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwc30ubGctY3NzMy5sZy1zbGlkZS1za2V3LW9ubHktcmV2IC5sZy1pdGVte29wYWNpdHk6MH0ubGctY3NzMy5sZy1zbGlkZS1za2V3LW9ubHktcmV2IC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsLmxnLWNzczMubGctc2xpZGUtc2tldy1vbmx5LXJldiAubGctaXRlbS5sZy1wcmV2LXNsaWRley1tb3otdHJhbnNmb3JtOnNrZXcoLTEwZGVnLDBkZWcpOy1vLXRyYW5zZm9ybTpza2V3KC0xMGRlZywwZGVnKTstbXMtdHJhbnNmb3JtOnNrZXcoLTEwZGVnLDBkZWcpOy13ZWJraXQtdHJhbnNmb3JtOnNrZXcoLTEwZGVnLDBkZWcpO3RyYW5zZm9ybTpza2V3KC0xMGRlZywwZGVnKX0ubGctY3NzMy5sZy1zbGlkZS1za2V3LW9ubHktcmV2IC5sZy1pdGVtLmxnLWN1cnJlbnR7LW1vei10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpOy1vLXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZyk7LW1zLXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZyk7LXdlYmtpdC10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpO3RyYW5zZm9ybTpza2V3KDBkZWcsMGRlZyk7b3BhY2l0eToxfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctb25seS1yZXYgLmxnLWl0ZW0ubGctY3VycmVudCwubGctY3NzMy5sZy1zbGlkZS1za2V3LW9ubHktcmV2IC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsLmxnLWNzczMubGctc2xpZGUtc2tldy1vbmx5LXJldiAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzOy1tb3otdHJhbnNpdGlvbjotbW96LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzOy1vLXRyYW5zaXRpb246LW8tdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwc30ubGctY3NzMy5sZy1zbGlkZS1za2V3LW9ubHkteSAubGctaXRlbXtvcGFjaXR5OjB9LmxnLWNzczMubGctc2xpZGUtc2tldy1vbmx5LXkgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwubGctY3NzMy5sZy1zbGlkZS1za2V3LW9ubHkteSAubGctaXRlbS5sZy1wcmV2LXNsaWRley1tb3otdHJhbnNmb3JtOnNrZXcoMGRlZywxMGRlZyk7LW8tdHJhbnNmb3JtOnNrZXcoMGRlZywxMGRlZyk7LW1zLXRyYW5zZm9ybTpza2V3KDBkZWcsMTBkZWcpOy13ZWJraXQtdHJhbnNmb3JtOnNrZXcoMGRlZywxMGRlZyk7dHJhbnNmb3JtOnNrZXcoMGRlZywxMGRlZyl9LmxnLWNzczMubGctc2xpZGUtc2tldy1vbmx5LXkgLmxnLWl0ZW0ubGctY3VycmVudHstbW96LXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZyk7LW8tdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKTstbXMtdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKTstd2Via2l0LXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZyk7dHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKTtvcGFjaXR5OjF9LmxnLWNzczMubGctc2xpZGUtc2tldy1vbmx5LXkgLmxnLWl0ZW0ubGctY3VycmVudCwubGctY3NzMy5sZy1zbGlkZS1za2V3LW9ubHkteSAubGctaXRlbS5sZy1uZXh0LXNsaWRlLC5sZy1jc3MzLmxnLXNsaWRlLXNrZXctb25seS15IC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7LW1vei10cmFuc2l0aW9uOi1tb3otdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7LW8tdHJhbnNpdGlvbjotby10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctb25seS15LXJldiAubGctaXRlbXtvcGFjaXR5OjB9LmxnLWNzczMubGctc2xpZGUtc2tldy1vbmx5LXktcmV2IC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsLmxnLWNzczMubGctc2xpZGUtc2tldy1vbmx5LXktcmV2IC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LW1vei10cmFuc2Zvcm06c2tldygwZGVnLC0xMGRlZyk7LW8tdHJhbnNmb3JtOnNrZXcoMGRlZywtMTBkZWcpOy1tcy10cmFuc2Zvcm06c2tldygwZGVnLC0xMGRlZyk7LXdlYmtpdC10cmFuc2Zvcm06c2tldygwZGVnLC0xMGRlZyk7dHJhbnNmb3JtOnNrZXcoMGRlZywtMTBkZWcpfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctb25seS15LXJldiAubGctaXRlbS5sZy1jdXJyZW50ey1tb3otdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKTstby10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpOy1tcy10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpOy13ZWJraXQtdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKTt0cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpO29wYWNpdHk6MX0ubGctY3NzMy5sZy1zbGlkZS1za2V3LW9ubHkteS1yZXYgLmxnLWl0ZW0ubGctY3VycmVudCwubGctY3NzMy5sZy1zbGlkZS1za2V3LW9ubHkteS1yZXYgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwubGctY3NzMy5sZy1zbGlkZS1za2V3LW9ubHkteS1yZXYgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczstbW96LXRyYW5zaXRpb246LW1vei10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczstby10cmFuc2l0aW9uOi1vLXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzO3RyYW5zaXRpb246dHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHN9LmxnLWNzczMubGctc2xpZGUtc2tldyAubGctaXRlbXtvcGFjaXR5OjB9LmxnLWNzczMubGctc2xpZGUtc2tldyAubGctaXRlbS5sZy1wcmV2LXNsaWRley1tb3otdHJhbnNmb3JtOnNrZXcoMjBkZWcsMGRlZykgdHJhbnNsYXRlM2QoLTEwMCUsMCwwKTstby10cmFuc2Zvcm06c2tldygyMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgtMTAwJSwwLDApOy1tcy10cmFuc2Zvcm06c2tldygyMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgtMTAwJSwwLDApOy13ZWJraXQtdHJhbnNmb3JtOnNrZXcoMjBkZWcsMGRlZykgdHJhbnNsYXRlM2QoLTEwMCUsMCwwKTt0cmFuc2Zvcm06c2tldygyMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgtMTAwJSwwLDApfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXcgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZXstbW96LXRyYW5zZm9ybTpza2V3KDIwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDEwMCUsMCwwKTstby10cmFuc2Zvcm06c2tldygyMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgxMDAlLDAsMCk7LW1zLXRyYW5zZm9ybTpza2V3KDIwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDEwMCUsMCwwKTstd2Via2l0LXRyYW5zZm9ybTpza2V3KDIwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDEwMCUsMCwwKTt0cmFuc2Zvcm06c2tldygyMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgxMDAlLDAsMCl9LmxnLWNzczMubGctc2xpZGUtc2tldyAubGctaXRlbS5sZy1jdXJyZW50ey1tb3otdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDAsMCk7LW8tdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDAsMCk7LW1zLXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwwLDApOy13ZWJraXQtdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDAsMCk7dHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDAsMCk7b3BhY2l0eToxfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXcgLmxnLWl0ZW0ubGctY3VycmVudCwubGctY3NzMy5sZy1zbGlkZS1za2V3IC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsLmxnLWNzczMubGctc2xpZGUtc2tldyAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzOy1tb3otdHJhbnNpdGlvbjotbW96LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzOy1vLXRyYW5zaXRpb246LW8tdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwc30ubGctY3NzMy5sZy1zbGlkZS1za2V3LXJldiAubGctaXRlbXtvcGFjaXR5OjB9LmxnLWNzczMubGctc2xpZGUtc2tldy1yZXYgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstbW96LXRyYW5zZm9ybTpza2V3KC0yMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgtMTAwJSwwLDApOy1vLXRyYW5zZm9ybTpza2V3KC0yMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgtMTAwJSwwLDApOy1tcy10cmFuc2Zvcm06c2tldygtMjBkZWcsMGRlZykgdHJhbnNsYXRlM2QoLTEwMCUsMCwwKTstd2Via2l0LXRyYW5zZm9ybTpza2V3KC0yMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgtMTAwJSwwLDApO3RyYW5zZm9ybTpza2V3KC0yMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgtMTAwJSwwLDApfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctcmV2IC5sZy1pdGVtLmxnLW5leHQtc2xpZGV7LW1vei10cmFuc2Zvcm06c2tldygtMjBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMTAwJSwwLDApOy1vLXRyYW5zZm9ybTpza2V3KC0yMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgxMDAlLDAsMCk7LW1zLXRyYW5zZm9ybTpza2V3KC0yMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgxMDAlLDAsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2tldygtMjBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMTAwJSwwLDApO3RyYW5zZm9ybTpza2V3KC0yMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgxMDAlLDAsMCl9LmxnLWNzczMubGctc2xpZGUtc2tldy1yZXYgLmxnLWl0ZW0ubGctY3VycmVudHstbW96LXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwwLDApOy1vLXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwwLDApOy1tcy10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMCwwKTstd2Via2l0LXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwwLDApO3RyYW5zZm9ybTpza2V3KDBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MX0ubGctY3NzMy5sZy1zbGlkZS1za2V3LXJldiAubGctaXRlbS5sZy1jdXJyZW50LC5sZy1jc3MzLmxnLXNsaWRlLXNrZXctcmV2IC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsLmxnLWNzczMubGctc2xpZGUtc2tldy1yZXYgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczstbW96LXRyYW5zaXRpb246LW1vei10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczstby10cmFuc2l0aW9uOi1vLXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzO3RyYW5zaXRpb246dHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHN9LmxnLWNzczMubGctc2xpZGUtc2tldy1jcm9zcyAubGctaXRlbXtvcGFjaXR5OjB9LmxnLWNzczMubGctc2xpZGUtc2tldy1jcm9zcyAubGctaXRlbS5sZy1wcmV2LXNsaWRley1tb3otdHJhbnNmb3JtOnNrZXcoMGRlZyw2MGRlZykgdHJhbnNsYXRlM2QoLTEwMCUsMCwwKTstby10cmFuc2Zvcm06c2tldygwZGVnLDYwZGVnKSB0cmFuc2xhdGUzZCgtMTAwJSwwLDApOy1tcy10cmFuc2Zvcm06c2tldygwZGVnLDYwZGVnKSB0cmFuc2xhdGUzZCgtMTAwJSwwLDApOy13ZWJraXQtdHJhbnNmb3JtOnNrZXcoMGRlZyw2MGRlZykgdHJhbnNsYXRlM2QoLTEwMCUsMCwwKTt0cmFuc2Zvcm06c2tldygwZGVnLDYwZGVnKSB0cmFuc2xhdGUzZCgtMTAwJSwwLDApfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctY3Jvc3MgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZXstbW96LXRyYW5zZm9ybTpza2V3KDBkZWcsNjBkZWcpIHRyYW5zbGF0ZTNkKDEwMCUsMCwwKTstby10cmFuc2Zvcm06c2tldygwZGVnLDYwZGVnKSB0cmFuc2xhdGUzZCgxMDAlLDAsMCk7LW1zLXRyYW5zZm9ybTpza2V3KDBkZWcsNjBkZWcpIHRyYW5zbGF0ZTNkKDEwMCUsMCwwKTstd2Via2l0LXRyYW5zZm9ybTpza2V3KDBkZWcsNjBkZWcpIHRyYW5zbGF0ZTNkKDEwMCUsMCwwKTt0cmFuc2Zvcm06c2tldygwZGVnLDYwZGVnKSB0cmFuc2xhdGUzZCgxMDAlLDAsMCl9LmxnLWNzczMubGctc2xpZGUtc2tldy1jcm9zcyAubGctaXRlbS5sZy1jdXJyZW50ey1tb3otdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDAsMCk7LW8tdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDAsMCk7LW1zLXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwwLDApOy13ZWJraXQtdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDAsMCk7dHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDAsMCk7b3BhY2l0eToxfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctY3Jvc3MgLmxnLWl0ZW0ubGctY3VycmVudCwubGctY3NzMy5sZy1zbGlkZS1za2V3LWNyb3NzIC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsLmxnLWNzczMubGctc2xpZGUtc2tldy1jcm9zcyAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzOy1tb3otdHJhbnNpdGlvbjotbW96LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzOy1vLXRyYW5zaXRpb246LW8tdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwc30ubGctY3NzMy5sZy1zbGlkZS1za2V3LWNyb3NzLXJldiAubGctaXRlbXtvcGFjaXR5OjB9LmxnLWNzczMubGctc2xpZGUtc2tldy1jcm9zcy1yZXYgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstbW96LXRyYW5zZm9ybTpza2V3KDBkZWcsLTYwZGVnKSB0cmFuc2xhdGUzZCgtMTAwJSwwLDApOy1vLXRyYW5zZm9ybTpza2V3KDBkZWcsLTYwZGVnKSB0cmFuc2xhdGUzZCgtMTAwJSwwLDApOy1tcy10cmFuc2Zvcm06c2tldygwZGVnLC02MGRlZykgdHJhbnNsYXRlM2QoLTEwMCUsMCwwKTstd2Via2l0LXRyYW5zZm9ybTpza2V3KDBkZWcsLTYwZGVnKSB0cmFuc2xhdGUzZCgtMTAwJSwwLDApO3RyYW5zZm9ybTpza2V3KDBkZWcsLTYwZGVnKSB0cmFuc2xhdGUzZCgtMTAwJSwwLDApfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctY3Jvc3MtcmV2IC5sZy1pdGVtLmxnLW5leHQtc2xpZGV7LW1vei10cmFuc2Zvcm06c2tldygwZGVnLC02MGRlZykgdHJhbnNsYXRlM2QoMTAwJSwwLDApOy1vLXRyYW5zZm9ybTpza2V3KDBkZWcsLTYwZGVnKSB0cmFuc2xhdGUzZCgxMDAlLDAsMCk7LW1zLXRyYW5zZm9ybTpza2V3KDBkZWcsLTYwZGVnKSB0cmFuc2xhdGUzZCgxMDAlLDAsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2tldygwZGVnLC02MGRlZykgdHJhbnNsYXRlM2QoMTAwJSwwLDApO3RyYW5zZm9ybTpza2V3KDBkZWcsLTYwZGVnKSB0cmFuc2xhdGUzZCgxMDAlLDAsMCl9LmxnLWNzczMubGctc2xpZGUtc2tldy1jcm9zcy1yZXYgLmxnLWl0ZW0ubGctY3VycmVudHstbW96LXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwwLDApOy1vLXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwwLDApOy1tcy10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMCwwKTstd2Via2l0LXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwwLDApO3RyYW5zZm9ybTpza2V3KDBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MX0ubGctY3NzMy5sZy1zbGlkZS1za2V3LWNyb3NzLXJldiAubGctaXRlbS5sZy1jdXJyZW50LC5sZy1jc3MzLmxnLXNsaWRlLXNrZXctY3Jvc3MtcmV2IC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsLmxnLWNzczMubGctc2xpZGUtc2tldy1jcm9zcy1yZXYgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczstbW96LXRyYW5zaXRpb246LW1vei10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczstby10cmFuc2l0aW9uOi1vLXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzO3RyYW5zaXRpb246dHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHN9LmxnLWNzczMubGctc2xpZGUtc2tldy12ZXIgLmxnLWl0ZW17b3BhY2l0eTowfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctdmVyIC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LW1vei10cmFuc2Zvcm06c2tldyg2MGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLC0xMDAlLDApOy1vLXRyYW5zZm9ybTpza2V3KDYwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsLTEwMCUsMCk7LW1zLXRyYW5zZm9ybTpza2V3KDYwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsLTEwMCUsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2tldyg2MGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLC0xMDAlLDApO3RyYW5zZm9ybTpza2V3KDYwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsLTEwMCUsMCl9LmxnLWNzczMubGctc2xpZGUtc2tldy12ZXIgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZXstbW96LXRyYW5zZm9ybTpza2V3KDYwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMTAwJSwwKTstby10cmFuc2Zvcm06c2tldyg2MGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDEwMCUsMCk7LW1zLXRyYW5zZm9ybTpza2V3KDYwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMTAwJSwwKTstd2Via2l0LXRyYW5zZm9ybTpza2V3KDYwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMTAwJSwwKTt0cmFuc2Zvcm06c2tldyg2MGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDEwMCUsMCl9LmxnLWNzczMubGctc2xpZGUtc2tldy12ZXIgLmxnLWl0ZW0ubGctY3VycmVudHstbW96LXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwwLDApOy1vLXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwwLDApOy1tcy10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMCwwKTstd2Via2l0LXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwwLDApO3RyYW5zZm9ybTpza2V3KDBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MX0ubGctY3NzMy5sZy1zbGlkZS1za2V3LXZlciAubGctaXRlbS5sZy1jdXJyZW50LC5sZy1jc3MzLmxnLXNsaWRlLXNrZXctdmVyIC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsLmxnLWNzczMubGctc2xpZGUtc2tldy12ZXIgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczstbW96LXRyYW5zaXRpb246LW1vei10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczstby10cmFuc2l0aW9uOi1vLXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzO3RyYW5zaXRpb246dHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHN9LmxnLWNzczMubGctc2xpZGUtc2tldy12ZXItcmV2IC5sZy1pdGVte29wYWNpdHk6MH0ubGctY3NzMy5sZy1zbGlkZS1za2V3LXZlci1yZXYgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstbW96LXRyYW5zZm9ybTpza2V3KC02MGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLC0xMDAlLDApOy1vLXRyYW5zZm9ybTpza2V3KC02MGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLC0xMDAlLDApOy1tcy10cmFuc2Zvcm06c2tldygtNjBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwtMTAwJSwwKTstd2Via2l0LXRyYW5zZm9ybTpza2V3KC02MGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLC0xMDAlLDApO3RyYW5zZm9ybTpza2V3KC02MGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLC0xMDAlLDApfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctdmVyLXJldiAubGctaXRlbS5sZy1uZXh0LXNsaWRley1tb3otdHJhbnNmb3JtOnNrZXcoLTYwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMTAwJSwwKTstby10cmFuc2Zvcm06c2tldygtNjBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwxMDAlLDApOy1tcy10cmFuc2Zvcm06c2tldygtNjBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwxMDAlLDApOy13ZWJraXQtdHJhbnNmb3JtOnNrZXcoLTYwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMTAwJSwwKTt0cmFuc2Zvcm06c2tldygtNjBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwxMDAlLDApfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctdmVyLXJldiAubGctaXRlbS5sZy1jdXJyZW50ey1tb3otdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDAsMCk7LW8tdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDAsMCk7LW1zLXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwwLDApOy13ZWJraXQtdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDAsMCk7dHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDAsMCk7b3BhY2l0eToxfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctdmVyLXJldiAubGctaXRlbS5sZy1jdXJyZW50LC5sZy1jc3MzLmxnLXNsaWRlLXNrZXctdmVyLXJldiAubGctaXRlbS5sZy1uZXh0LXNsaWRlLC5sZy1jc3MzLmxnLXNsaWRlLXNrZXctdmVyLXJldiAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzOy1tb3otdHJhbnNpdGlvbjotbW96LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzOy1vLXRyYW5zaXRpb246LW8tdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwc30ubGctY3NzMy5sZy1zbGlkZS1za2V3LXZlci1jcm9zcyAubGctaXRlbXtvcGFjaXR5OjB9LmxnLWNzczMubGctc2xpZGUtc2tldy12ZXItY3Jvc3MgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstbW96LXRyYW5zZm9ybTpza2V3KDBkZWcsMjBkZWcpIHRyYW5zbGF0ZTNkKDAsLTEwMCUsMCk7LW8tdHJhbnNmb3JtOnNrZXcoMGRlZywyMGRlZykgdHJhbnNsYXRlM2QoMCwtMTAwJSwwKTstbXMtdHJhbnNmb3JtOnNrZXcoMGRlZywyMGRlZykgdHJhbnNsYXRlM2QoMCwtMTAwJSwwKTstd2Via2l0LXRyYW5zZm9ybTpza2V3KDBkZWcsMjBkZWcpIHRyYW5zbGF0ZTNkKDAsLTEwMCUsMCk7dHJhbnNmb3JtOnNrZXcoMGRlZywyMGRlZykgdHJhbnNsYXRlM2QoMCwtMTAwJSwwKX0ubGctY3NzMy5sZy1zbGlkZS1za2V3LXZlci1jcm9zcyAubGctaXRlbS5sZy1uZXh0LXNsaWRley1tb3otdHJhbnNmb3JtOnNrZXcoMGRlZywyMGRlZykgdHJhbnNsYXRlM2QoMCwxMDAlLDApOy1vLXRyYW5zZm9ybTpza2V3KDBkZWcsMjBkZWcpIHRyYW5zbGF0ZTNkKDAsMTAwJSwwKTstbXMtdHJhbnNmb3JtOnNrZXcoMGRlZywyMGRlZykgdHJhbnNsYXRlM2QoMCwxMDAlLDApOy13ZWJraXQtdHJhbnNmb3JtOnNrZXcoMGRlZywyMGRlZykgdHJhbnNsYXRlM2QoMCwxMDAlLDApO3RyYW5zZm9ybTpza2V3KDBkZWcsMjBkZWcpIHRyYW5zbGF0ZTNkKDAsMTAwJSwwKX0ubGctY3NzMy5sZy1zbGlkZS1za2V3LXZlci1jcm9zcyAubGctaXRlbS5sZy1jdXJyZW50ey1tb3otdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDAsMCk7LW8tdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDAsMCk7LW1zLXRyYW5zZm9ybTpza2V3KDBkZWcsMGRlZykgdHJhbnNsYXRlM2QoMCwwLDApOy13ZWJraXQtdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDAsMCk7dHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDAsMCk7b3BhY2l0eToxfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctdmVyLWNyb3NzIC5sZy1pdGVtLmxnLWN1cnJlbnQsLmxnLWNzczMubGctc2xpZGUtc2tldy12ZXItY3Jvc3MgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwubGctY3NzMy5sZy1zbGlkZS1za2V3LXZlci1jcm9zcyAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzOy1tb3otdHJhbnNpdGlvbjotbW96LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzOy1vLXRyYW5zaXRpb246LW8tdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwc30ubGctY3NzMy5sZy1zbGlkZS1za2V3LXZlci1jcm9zcy1yZXYgLmxnLWl0ZW17b3BhY2l0eTowfS5sZy1jc3MzLmxnLXNsaWRlLXNrZXctdmVyLWNyb3NzLXJldiAubGctaXRlbS5sZy1wcmV2LXNsaWRley1tb3otdHJhbnNmb3JtOnNrZXcoMGRlZywtMjBkZWcpIHRyYW5zbGF0ZTNkKDAsLTEwMCUsMCk7LW8tdHJhbnNmb3JtOnNrZXcoMGRlZywtMjBkZWcpIHRyYW5zbGF0ZTNkKDAsLTEwMCUsMCk7LW1zLXRyYW5zZm9ybTpza2V3KDBkZWcsLTIwZGVnKSB0cmFuc2xhdGUzZCgwLC0xMDAlLDApOy13ZWJraXQtdHJhbnNmb3JtOnNrZXcoMGRlZywtMjBkZWcpIHRyYW5zbGF0ZTNkKDAsLTEwMCUsMCk7dHJhbnNmb3JtOnNrZXcoMGRlZywtMjBkZWcpIHRyYW5zbGF0ZTNkKDAsLTEwMCUsMCl9LmxnLWNzczMubGctc2xpZGUtc2tldy12ZXItY3Jvc3MtcmV2IC5sZy1pdGVtLmxnLW5leHQtc2xpZGV7LW1vei10cmFuc2Zvcm06c2tldygwZGVnLC0yMGRlZykgdHJhbnNsYXRlM2QoMCwxMDAlLDApOy1vLXRyYW5zZm9ybTpza2V3KDBkZWcsLTIwZGVnKSB0cmFuc2xhdGUzZCgwLDEwMCUsMCk7LW1zLXRyYW5zZm9ybTpza2V3KDBkZWcsLTIwZGVnKSB0cmFuc2xhdGUzZCgwLDEwMCUsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2tldygwZGVnLC0yMGRlZykgdHJhbnNsYXRlM2QoMCwxMDAlLDApO3RyYW5zZm9ybTpza2V3KDBkZWcsLTIwZGVnKSB0cmFuc2xhdGUzZCgwLDEwMCUsMCl9LmxnLWNzczMubGctc2xpZGUtc2tldy12ZXItY3Jvc3MtcmV2IC5sZy1pdGVtLmxnLWN1cnJlbnR7LW1vei10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMCwwKTstby10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMCwwKTstbXMtdHJhbnNmb3JtOnNrZXcoMGRlZywwZGVnKSB0cmFuc2xhdGUzZCgwLDAsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMCwwKTt0cmFuc2Zvcm06c2tldygwZGVnLDBkZWcpIHRyYW5zbGF0ZTNkKDAsMCwwKTtvcGFjaXR5OjF9LmxnLWNzczMubGctc2xpZGUtc2tldy12ZXItY3Jvc3MtcmV2IC5sZy1pdGVtLmxnLWN1cnJlbnQsLmxnLWNzczMubGctc2xpZGUtc2tldy12ZXItY3Jvc3MtcmV2IC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsLmxnLWNzczMubGctc2xpZGUtc2tldy12ZXItY3Jvc3MtcmV2IC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7LW1vei10cmFuc2l0aW9uOi1tb3otdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7LW8tdHJhbnNpdGlvbjotby10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzfS5sZy1jc3MzLmxnLWxvbGxpcG9wIC5sZy1pdGVte29wYWNpdHk6MH0ubGctY3NzMy5sZy1sb2xsaXBvcCAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCl9LmxnLWNzczMubGctbG9sbGlwb3AgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZXstbW96LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGUoLjUpOy1vLXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGUoLjUpOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApIHNjYWxlKC41KTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGUoLjUpO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGUoLjUpfS5sZy1jc3MzLmxnLWxvbGxpcG9wIC5sZy1pdGVtLmxnLWN1cnJlbnR7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7b3BhY2l0eToxfS5sZy1jc3MzLmxnLWxvbGxpcG9wIC5sZy1pdGVtLmxnLWN1cnJlbnQsLmxnLWNzczMubGctbG9sbGlwb3AgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwubGctY3NzMy5sZy1sb2xsaXBvcCAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzOy1tb3otdHJhbnNpdGlvbjotbW96LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzOy1vLXRyYW5zaXRpb246LW8tdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwc30ubGctY3NzMy5sZy1sb2xsaXBvcC1yZXYgLmxnLWl0ZW17b3BhY2l0eTowfS5sZy1jc3MzLmxnLWxvbGxpcG9wLXJldiAubGctaXRlbS5sZy1wcmV2LXNsaWRley1tb3otdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZSguNSk7LW8tdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZSguNSk7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCkgc2NhbGUoLjUpOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZSguNSk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKSBzY2FsZSguNSl9LmxnLWNzczMubGctbG9sbGlwb3AtcmV2IC5sZy1pdGVtLmxnLW5leHQtc2xpZGV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCl9LmxnLWNzczMubGctbG9sbGlwb3AtcmV2IC5sZy1pdGVtLmxnLWN1cnJlbnR7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7b3BhY2l0eToxfS5sZy1jc3MzLmxnLWxvbGxpcG9wLXJldiAubGctaXRlbS5sZy1jdXJyZW50LC5sZy1jc3MzLmxnLWxvbGxpcG9wLXJldiAubGctaXRlbS5sZy1uZXh0LXNsaWRlLC5sZy1jc3MzLmxnLWxvbGxpcG9wLXJldiAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzOy1tb3otdHJhbnNpdGlvbjotbW96LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzOy1vLXRyYW5zaXRpb246LW8tdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwc30ubGctY3NzMy5sZy1yb3RhdGUgLmxnLWl0ZW17b3BhY2l0eTowfS5sZy1jc3MzLmxnLXJvdGF0ZSAubGctaXRlbS5sZy1wcmV2LXNsaWRley1tb3otdHJhbnNmb3JtOnJvdGF0ZSgtMzYwZGVnKTstby10cmFuc2Zvcm06cm90YXRlKC0zNjBkZWcpOy1tcy10cmFuc2Zvcm06cm90YXRlKC0zNjBkZWcpOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKC0zNjBkZWcpfS5sZy1jc3MzLmxnLXJvdGF0ZSAubGctaXRlbS5sZy1uZXh0LXNsaWRley1tb3otdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpOy1vLXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTstbXMtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX0ubGctY3NzMy5sZy1yb3RhdGUgLmxnLWl0ZW0ubGctY3VycmVudHstbW96LXRyYW5zZm9ybTpyb3RhdGUoMCk7LW8tdHJhbnNmb3JtOnJvdGF0ZSgwKTstbXMtdHJhbnNmb3JtOnJvdGF0ZSgwKTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgwKTtvcGFjaXR5OjF9LmxnLWNzczMubGctcm90YXRlIC5sZy1pdGVtLmxnLWN1cnJlbnQsLmxnLWNzczMubGctcm90YXRlIC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsLmxnLWNzczMubGctcm90YXRlIC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7LW1vei10cmFuc2l0aW9uOi1tb3otdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7LW8tdHJhbnNpdGlvbjotby10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzfS5sZy1jc3MzLmxnLXJvdGF0ZS1yZXYgLmxnLWl0ZW17b3BhY2l0eTowfS5sZy1jc3MzLmxnLXJvdGF0ZS1yZXYgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstbW96LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTstby10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7LW1zLXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9LmxnLWNzczMubGctcm90YXRlLXJldiAubGctaXRlbS5sZy1uZXh0LXNsaWRley1tb3otdHJhbnNmb3JtOnJvdGF0ZSgtMzYwZGVnKTstby10cmFuc2Zvcm06cm90YXRlKC0zNjBkZWcpOy1tcy10cmFuc2Zvcm06cm90YXRlKC0zNjBkZWcpOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKC0zNjBkZWcpfS5sZy1jc3MzLmxnLXJvdGF0ZS1yZXYgLmxnLWl0ZW0ubGctY3VycmVudHstbW96LXRyYW5zZm9ybTpyb3RhdGUoMCk7LW8tdHJhbnNmb3JtOnJvdGF0ZSgwKTstbXMtdHJhbnNmb3JtOnJvdGF0ZSgwKTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgwKTtvcGFjaXR5OjF9LmxnLWNzczMubGctcm90YXRlLXJldiAubGctaXRlbS5sZy1jdXJyZW50LC5sZy1jc3MzLmxnLXJvdGF0ZS1yZXYgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwubGctY3NzMy5sZy1yb3RhdGUtcmV2IC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7LW1vei10cmFuc2l0aW9uOi1tb3otdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7LW8tdHJhbnNpdGlvbjotby10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzfS5sZy1jc3MzLmxnLXR1YmUgLmxnLWl0ZW17b3BhY2l0eTowfS5sZy1jc3MzLmxnLXR1YmUgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstbW96LXRyYW5zZm9ybTpzY2FsZTNkKDEsMCwxKSB0cmFuc2xhdGUzZCgtMTAwJSwwLDApOy1vLXRyYW5zZm9ybTpzY2FsZTNkKDEsMCwxKSB0cmFuc2xhdGUzZCgtMTAwJSwwLDApOy1tcy10cmFuc2Zvcm06c2NhbGUzZCgxLDAsMSkgdHJhbnNsYXRlM2QoLTEwMCUsMCwwKTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEsMCwxKSB0cmFuc2xhdGUzZCgtMTAwJSwwLDApO3RyYW5zZm9ybTpzY2FsZTNkKDEsMCwxKSB0cmFuc2xhdGUzZCgtMTAwJSwwLDApfS5sZy1jc3MzLmxnLXR1YmUgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZXstbW96LXRyYW5zZm9ybTpzY2FsZTNkKDEsMCwxKSB0cmFuc2xhdGUzZCgxMDAlLDAsMCk7LW8tdHJhbnNmb3JtOnNjYWxlM2QoMSwwLDEpIHRyYW5zbGF0ZTNkKDEwMCUsMCwwKTstbXMtdHJhbnNmb3JtOnNjYWxlM2QoMSwwLDEpIHRyYW5zbGF0ZTNkKDEwMCUsMCwwKTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZTNkKDEsMCwxKSB0cmFuc2xhdGUzZCgxMDAlLDAsMCk7dHJhbnNmb3JtOnNjYWxlM2QoMSwwLDEpIHRyYW5zbGF0ZTNkKDEwMCUsMCwwKX0ubGctY3NzMy5sZy10dWJlIC5sZy1pdGVtLmxnLWN1cnJlbnR7LW1vei10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSkgdHJhbnNsYXRlM2QoMCwwLDApOy1vLXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKSB0cmFuc2xhdGUzZCgwLDAsMCk7LW1zLXRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKSB0cmFuc2xhdGUzZCgwLDAsMCk7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUzZCgxLDEsMSkgdHJhbnNsYXRlM2QoMCwwLDApO3RyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKSB0cmFuc2xhdGUzZCgwLDAsMCk7b3BhY2l0eToxfS5sZy1jc3MzLmxnLXR1YmUgLmxnLWl0ZW0ubGctY3VycmVudCwubGctY3NzMy5sZy10dWJlIC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsLmxnLWNzczMubGctdHViZSAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzOy1tb3otdHJhbnNpdGlvbjotbW96LXRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzOy1vLXRyYW5zaXRpb246LW8tdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwc31cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJ2YXIgZXNjYXBlID0gcmVxdWlyZShcIi4uLy4uLy4uL2Nzcy1sb2FkZXIvbGliL3VybC9lc2NhcGUuanNcIik7XG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmxnLXN1Yi1odG1sLC5sZy10b29sYmFye2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNDUpfUBmb250LWZhY2V7Zm9udC1mYW1pbHk6bGc7c3JjOnVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vZm9udHMvbGcuZW90P24xejM3M1wiKSkgKyBcIik7c3JjOnVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vZm9udHMvbGcuZW90XCIpKSArIFwiPyNpZWZpeG4xejM3MykgZm9ybWF0KFxcXCJlbWJlZGRlZC1vcGVudHlwZVxcXCIpLHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vZm9udHMvbGcud29mZj9uMXozNzNcIikpICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpLHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vZm9udHMvbGcudHRmP24xejM3M1wiKSkgKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpLHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vZm9udHMvbGcuc3ZnP24xejM3M1wiKSkgKyBcIiNsZykgZm9ybWF0KFxcXCJzdmdcXFwiKTtmb250LXdlaWdodDo0MDA7Zm9udC1zdHlsZTpub3JtYWx9LmxnLWljb257Zm9udC1mYW1pbHk6bGc7c3BlYWs6bm9uZTtmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDo0MDA7Zm9udC12YXJpYW50Om5vcm1hbDt0ZXh0LXRyYW5zZm9ybTpub25lO2xpbmUtaGVpZ2h0OjE7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGV9LmxnLWFjdGlvbnMgLmxnLW5leHQsLmxnLWFjdGlvbnMgLmxnLXByZXZ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC40NSk7Ym9yZGVyLXJhZGl1czoycHg7Y29sb3I6Izk5OTtjdXJzb3I6cG9pbnRlcjtkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZToyMnB4O21hcmdpbi10b3A6LTEwcHg7cGFkZGluZzo4cHggMTBweCA5cHg7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTt6LWluZGV4OjEwODA7Ym9yZGVyOm5vbmU7b3V0bGluZTowfS5sZy1hY3Rpb25zIC5sZy1uZXh0LmRpc2FibGVkLC5sZy1hY3Rpb25zIC5sZy1wcmV2LmRpc2FibGVke3BvaW50ZXItZXZlbnRzOm5vbmU7b3BhY2l0eTouNX0ubGctYWN0aW9ucyAubGctbmV4dDpob3ZlciwubGctYWN0aW9ucyAubGctcHJldjpob3Zlcntjb2xvcjojRkZGfS5sZy1hY3Rpb25zIC5sZy1uZXh0e3JpZ2h0OjIwcHh9LmxnLWFjdGlvbnMgLmxnLW5leHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxFMDk1XFxcIn0ubGctYWN0aW9ucyAubGctcHJldntsZWZ0OjIwcHh9LmxnLWFjdGlvbnMgLmxnLXByZXY6YWZ0ZXJ7Y29udGVudDpcXFwiXFxcXEUwOTRcXFwifUAtd2Via2l0LWtleWZyYW1lcyBsZy1yaWdodC1lbmR7MCUsMTAwJXtsZWZ0OjB9NTAle2xlZnQ6LTMwcHh9fUAtbW96LWtleWZyYW1lcyBsZy1yaWdodC1lbmR7MCUsMTAwJXtsZWZ0OjB9NTAle2xlZnQ6LTMwcHh9fUAtbXMta2V5ZnJhbWVzIGxnLXJpZ2h0LWVuZHswJSwxMDAle2xlZnQ6MH01MCV7bGVmdDotMzBweH19QGtleWZyYW1lcyBsZy1yaWdodC1lbmR7MCUsMTAwJXtsZWZ0OjB9NTAle2xlZnQ6LTMwcHh9fUAtd2Via2l0LWtleWZyYW1lcyBsZy1sZWZ0LWVuZHswJSwxMDAle2xlZnQ6MH01MCV7bGVmdDozMHB4fX1ALW1vei1rZXlmcmFtZXMgbGctbGVmdC1lbmR7MCUsMTAwJXtsZWZ0OjB9NTAle2xlZnQ6MzBweH19QC1tcy1rZXlmcmFtZXMgbGctbGVmdC1lbmR7MCUsMTAwJXtsZWZ0OjB9NTAle2xlZnQ6MzBweH19QGtleWZyYW1lcyBsZy1sZWZ0LWVuZHswJSwxMDAle2xlZnQ6MH01MCV7bGVmdDozMHB4fX0ubGctb3V0ZXIubGctcmlnaHQtZW5kIC5sZy1vYmplY3R7LXdlYmtpdC1hbmltYXRpb246bGctcmlnaHQtZW5kIC4zczstby1hbmltYXRpb246bGctcmlnaHQtZW5kIC4zczthbmltYXRpb246bGctcmlnaHQtZW5kIC4zcztwb3NpdGlvbjpyZWxhdGl2ZX0ubGctb3V0ZXIubGctbGVmdC1lbmQgLmxnLW9iamVjdHstd2Via2l0LWFuaW1hdGlvbjpsZy1sZWZ0LWVuZCAuM3M7LW8tYW5pbWF0aW9uOmxnLWxlZnQtZW5kIC4zczthbmltYXRpb246bGctbGVmdC1lbmQgLjNzO3Bvc2l0aW9uOnJlbGF0aXZlfS5sZy10b29sYmFye3otaW5kZXg6MTA4MjtsZWZ0OjA7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7d2lkdGg6MTAwJX0ubGctdG9vbGJhciAubGctaWNvbntjb2xvcjojOTk5O2N1cnNvcjpwb2ludGVyO2Zsb2F0OnJpZ2h0O2ZvbnQtc2l6ZToyNHB4O2hlaWdodDo0N3B4O2xpbmUtaGVpZ2h0OjI3cHg7cGFkZGluZzoxMHB4IDA7dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6NTBweDt0ZXh0LWRlY29yYXRpb246bm9uZSFpbXBvcnRhbnQ7b3V0bGluZTowOy13ZWJraXQtdHJhbnNpdGlvbjpjb2xvciAuMnMgbGluZWFyOy1vLXRyYW5zaXRpb246Y29sb3IgLjJzIGxpbmVhcjt0cmFuc2l0aW9uOmNvbG9yIC4ycyBsaW5lYXJ9LmxnLXRvb2xiYXIgLmxnLWljb246aG92ZXJ7Y29sb3I6I0ZGRn0ubGctdG9vbGJhciAubGctY2xvc2U6YWZ0ZXJ7Y29udGVudDpcXFwiXFxcXEUwNzBcXFwifS5sZy10b29sYmFyIC5sZy1kb3dubG9hZDphZnRlcntjb250ZW50OlxcXCJcXFxcRTBGMlxcXCJ9LmxnLXN1Yi1odG1se2JvdHRvbTowO2NvbG9yOiNFRUU7Zm9udC1zaXplOjE2cHg7bGVmdDowO3BhZGRpbmc6MTBweCA0MHB4O3Bvc2l0aW9uOmZpeGVkO3JpZ2h0OjA7dGV4dC1hbGlnbjpjZW50ZXI7ei1pbmRleDoxMDgwfS5sZy1zdWItaHRtbCBoNHttYXJnaW46MDtmb250LXNpemU6MTNweDtmb250LXdlaWdodDo3MDB9LmxnLXN1Yi1odG1sIHB7Zm9udC1zaXplOjEycHg7bWFyZ2luOjVweCAwIDB9I2xnLWNvdW50ZXJ7Y29sb3I6Izk5OTtkaXNwbGF5OmlubGluZS1ibG9jaztmb250LXNpemU6MTZweDtwYWRkaW5nLWxlZnQ6MjBweDtwYWRkaW5nLXRvcDoxMnB4O3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0ubGctbmV4dCwubGctcHJldiwubGctdG9vbGJhcntvcGFjaXR5OjE7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIC4zNXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMzVzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLGNvbG9yIC4ycyBsaW5lYXI7LW1vei10cmFuc2l0aW9uOi1tb3otdHJhbnNmb3JtIC4zNXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMzVzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLGNvbG9yIC4ycyBsaW5lYXI7LW8tdHJhbnNpdGlvbjotby10cmFuc2Zvcm0gLjM1cyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4zNXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsY29sb3IgLjJzIGxpbmVhcjt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMzVzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjM1cyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxjb2xvciAuMnMgbGluZWFyfS5sZy1oaWRlLWl0ZW1zIC5sZy1wcmV2e29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTBweCwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTBweCwwLDApfS5sZy1oaWRlLWl0ZW1zIC5sZy1uZXh0e29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMHB4LDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwcHgsMCwwKX0ubGctaGlkZS1pdGVtcyAubGctdG9vbGJhcntvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTBweCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtMTBweCwwKX1ib2R5Om5vdCgubGctZnJvbS1oYXNoKSAubGctb3V0ZXIubGctc3RhcnQtem9vbSAubGctb2JqZWN0ey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoLjUsLjUsLjUpO3RyYW5zZm9ybTpzY2FsZTNkKC41LC41LC41KTtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgMjUwbXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkhaW1wb3J0YW50Oy1tb3otdHJhbnNpdGlvbjotbW96LXRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDI1MG1zIGN1YmljLWJlemllcigwLDAsLjI1LDEpIWltcG9ydGFudDstby10cmFuc2l0aW9uOi1vLXRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDI1MG1zIGN1YmljLWJlemllcigwLDAsLjI1LDEpIWltcG9ydGFudDt0cmFuc2l0aW9uOnRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IDI1MG1zIGN1YmljLWJlemllcigwLDAsLjI1LDEpIWltcG9ydGFudDstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46NTAlIDUwJTstbW96LXRyYW5zZm9ybS1vcmlnaW46NTAlIDUwJTstbXMtdHJhbnNmb3JtLW9yaWdpbjo1MCUgNTAlO3RyYW5zZm9ybS1vcmlnaW46NTAlIDUwJX1ib2R5Om5vdCgubGctZnJvbS1oYXNoKSAubGctb3V0ZXIubGctc3RhcnQtem9vbSAubGctaXRlbS5sZy1jb21wbGV0ZSAubGctb2JqZWN0ey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpO3RyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKTtvcGFjaXR5OjF9LmxnLW91dGVyIC5sZy10aHVtYi1vdXRlcntiYWNrZ3JvdW5kLWNvbG9yOiMwRDBBMEE7Ym90dG9tOjA7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJTt6LWluZGV4OjEwODA7bWF4LWhlaWdodDozNTBweDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDEwMCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMTAwJSwwKTstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gLjI1cyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwczstbW96LXRyYW5zaXRpb246LW1vei10cmFuc2Zvcm0gLjI1cyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwczstby10cmFuc2l0aW9uOi1vLXRyYW5zZm9ybSAuMjVzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzO3RyYW5zaXRpb246dHJhbnNmb3JtIC4yNXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHN9LmxnLW91dGVyIC5sZy10aHVtYi1vdXRlci5sZy1ncmFiIC5sZy10aHVtYi1pdGVte2N1cnNvcjotd2Via2l0LWdyYWI7Y3Vyc29yOi1tb3otZ3JhYjtjdXJzb3I6LW8tZ3JhYjtjdXJzb3I6LW1zLWdyYWI7Y3Vyc29yOmdyYWJ9LmxnLW91dGVyIC5sZy10aHVtYi1vdXRlci5sZy1ncmFiYmluZyAubGctdGh1bWItaXRlbXtjdXJzb3I6bW92ZTtjdXJzb3I6LXdlYmtpdC1ncmFiYmluZztjdXJzb3I6LW1vei1ncmFiYmluZztjdXJzb3I6LW8tZ3JhYmJpbmc7Y3Vyc29yOi1tcy1ncmFiYmluZztjdXJzb3I6Z3JhYmJpbmd9LmxnLW91dGVyIC5sZy10aHVtYi1vdXRlci5sZy1kcmFnZ2luZyAubGctdGh1bWJ7LXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOjBzIWltcG9ydGFudDt0cmFuc2l0aW9uLWR1cmF0aW9uOjBzIWltcG9ydGFudH0ubGctb3V0ZXIubGctdGh1bWItb3BlbiAubGctdGh1bWItb3V0ZXJ7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCl9LmxnLW91dGVyIC5sZy10aHVtYntwYWRkaW5nOjEwcHggMDtoZWlnaHQ6MTAwJTttYXJnaW4tYm90dG9tOi01cHh9LmxnLW91dGVyIC5sZy10aHVtYi1pdGVte2N1cnNvcjpwb2ludGVyO2Zsb2F0OmxlZnQ7b3ZlcmZsb3c6aGlkZGVuO2hlaWdodDoxMDAlO2JvcmRlcjoycHggc29saWQgI0ZGRjtib3JkZXItcmFkaXVzOjRweDttYXJnaW4tYm90dG9tOjVweH1AbWVkaWEgKG1pbi13aWR0aDoxMDI1cHgpey5sZy1vdXRlciAubGctdGh1bWItaXRlbXstd2Via2l0LXRyYW5zaXRpb246Ym9yZGVyLWNvbG9yIC4yNXMgZWFzZTstby10cmFuc2l0aW9uOmJvcmRlci1jb2xvciAuMjVzIGVhc2U7dHJhbnNpdGlvbjpib3JkZXItY29sb3IgLjI1cyBlYXNlfX0ubGctb3V0ZXIgLmxnLXRodW1iLWl0ZW0uYWN0aXZlLC5sZy1vdXRlciAubGctdGh1bWItaXRlbTpob3Zlcntib3JkZXItY29sb3I6I2E5MDcwN30ubGctb3V0ZXIgLmxnLXRodW1iLWl0ZW0gaW1ne3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7b2JqZWN0LWZpdDpjb3Zlcn0ubGctb3V0ZXIubGctaGFzLXRodW1iIC5sZy1pdGVte3BhZGRpbmctYm90dG9tOjEyMHB4fS5sZy1vdXRlci5sZy1jYW4tdG9nZ2xlIC5sZy1pdGVte3BhZGRpbmctYm90dG9tOjB9LmxnLW91dGVyLmxnLXB1bGwtY2FwdGlvbi11cCAubGctc3ViLWh0bWx7LXdlYmtpdC10cmFuc2l0aW9uOmJvdHRvbSAuMjVzIGVhc2U7LW8tdHJhbnNpdGlvbjpib3R0b20gLjI1cyBlYXNlO3RyYW5zaXRpb246Ym90dG9tIC4yNXMgZWFzZX0ubGctb3V0ZXIubGctcHVsbC1jYXB0aW9uLXVwLmxnLXRodW1iLW9wZW4gLmxnLXN1Yi1odG1se2JvdHRvbToxMDBweH0ubGctb3V0ZXIgLmxnLXRvb2dsZS10aHVtYntiYWNrZ3JvdW5kLWNvbG9yOiMwRDBBMEE7Ym9yZGVyLXJhZGl1czoycHggMnB4IDAgMDtjb2xvcjojOTk5O2N1cnNvcjpwb2ludGVyO2ZvbnQtc2l6ZToyNHB4O2hlaWdodDozOXB4O2xpbmUtaGVpZ2h0OjI3cHg7cGFkZGluZzo1cHggMDtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDoyMHB4O3RleHQtYWxpZ246Y2VudGVyO3RvcDotMzlweDt3aWR0aDo1MHB4fS5sZy1vdXRlciAubGctdG9vZ2xlLXRodW1iOmhvdmVyLC5sZy1vdXRlci5sZy1kcm9wZG93bi1hY3RpdmUgI2xnLXNoYXJle2NvbG9yOiNGRkZ9LmxnLW91dGVyIC5sZy10b29nbGUtdGh1bWI6YWZ0ZXJ7Y29udGVudDpcXFwiXFxcXEUxRkZcXFwifS5sZy1vdXRlciAubGctdmlkZW8tY29udHtkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7bWF4LXdpZHRoOjExNDBweDttYXgtaGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtwYWRkaW5nOjAgNXB4fS5sZy1vdXRlciAubGctdmlkZW97d2lkdGg6MTAwJTtoZWlnaHQ6MDtwYWRkaW5nLWJvdHRvbTo1Ni4yNSU7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOnJlbGF0aXZlfS5sZy1vdXRlciAubGctdmlkZW8gLmxnLW9iamVjdHtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7d2lkdGg6MTAwJSFpbXBvcnRhbnQ7aGVpZ2h0OjEwMCUhaW1wb3J0YW50fS5sZy1vdXRlciAubGctdmlkZW8gLmxnLXZpZGVvLXBsYXl7d2lkdGg6ODRweDtoZWlnaHQ6NTlweDtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjUwJTt0b3A6NTAlO21hcmdpbi1sZWZ0Oi00MnB4O21hcmdpbi10b3A6LTMwcHg7ei1pbmRleDoxMDgwO2N1cnNvcjpwb2ludGVyfS5sZy1vdXRlciAubGctaGFzLWlmcmFtZSAubGctdmlkZW97LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2g7b3ZlcmZsb3c6YXV0b30ubGctb3V0ZXIgLmxnLWhhcy12aW1lbyAubGctdmlkZW8tcGxheXtiYWNrZ3JvdW5kOnVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vaW1nL3ZpbWVvLXBsYXkucG5nXCIpKSArIFwiKSBuby1yZXBlYXR9LmxnLW91dGVyIC5sZy1oYXMtdmltZW86aG92ZXIgLmxnLXZpZGVvLXBsYXl7YmFja2dyb3VuZDp1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4uL2ltZy92aW1lby1wbGF5LnBuZ1wiKSkgKyBcIikgMCAtNThweCBuby1yZXBlYXR9LmxnLW91dGVyIC5sZy1oYXMtaHRtbDUgLmxnLXZpZGVvLXBsYXl7YmFja2dyb3VuZDp1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4uL2ltZy92aWRlby1wbGF5LnBuZ1wiKSkgKyBcIikgbm8tcmVwZWF0O2hlaWdodDo2NHB4O21hcmdpbi1sZWZ0Oi0zMnB4O21hcmdpbi10b3A6LTMycHg7d2lkdGg6NjRweDtvcGFjaXR5Oi44fS5sZy1vdXRlciAubGctaGFzLWh0bWw1OmhvdmVyIC5sZy12aWRlby1wbGF5e29wYWNpdHk6MX0ubGctb3V0ZXIgLmxnLWhhcy15b3V0dWJlIC5sZy12aWRlby1wbGF5e2JhY2tncm91bmQ6dXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuLi9pbWcveW91dHViZS1wbGF5LnBuZ1wiKSkgKyBcIikgbm8tcmVwZWF0fS5sZy1vdXRlciAubGctaGFzLXlvdXR1YmU6aG92ZXIgLmxnLXZpZGVvLXBsYXl7YmFja2dyb3VuZDp1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4uL2ltZy95b3V0dWJlLXBsYXkucG5nXCIpKSArIFwiKSAwIC02MHB4IG5vLXJlcGVhdH0ubGctb3V0ZXIgLmxnLXZpZGVvLW9iamVjdHt3aWR0aDoxMDAlIWltcG9ydGFudDtoZWlnaHQ6MTAwJSFpbXBvcnRhbnQ7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowfS5sZy1vdXRlciAubGctaGFzLXZpZGVvIC5sZy12aWRlby1vYmplY3R7dmlzaWJpbGl0eTpoaWRkZW59LmxnLW91dGVyIC5sZy1oYXMtdmlkZW8ubGctdmlkZW8tcGxheWluZyAubGctb2JqZWN0LC5sZy1vdXRlciAubGctaGFzLXZpZGVvLmxnLXZpZGVvLXBsYXlpbmcgLmxnLXZpZGVvLXBsYXl7ZGlzcGxheTpub25lfS5sZy1vdXRlciAubGctaGFzLXZpZGVvLmxnLXZpZGVvLXBsYXlpbmcgLmxnLXZpZGVvLW9iamVjdHt2aXNpYmlsaXR5OnZpc2libGV9LmxnLXByb2dyZXNzLWJhcntiYWNrZ3JvdW5kLWNvbG9yOiMzMzM7aGVpZ2h0OjVweDtsZWZ0OjA7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7d2lkdGg6MTAwJTt6LWluZGV4OjEwODM7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNpdGlvbjpvcGFjaXR5IDgwbXMgZWFzZSAwczstbW96LXRyYW5zaXRpb246b3BhY2l0eSA4MG1zIGVhc2UgMHM7LW8tdHJhbnNpdGlvbjpvcGFjaXR5IDgwbXMgZWFzZSAwczt0cmFuc2l0aW9uOm9wYWNpdHkgODBtcyBlYXNlIDBzfS5sZy1wcm9ncmVzcy1iYXIgLmxnLXByb2dyZXNze2JhY2tncm91bmQtY29sb3I6I2E5MDcwNztoZWlnaHQ6NXB4O3dpZHRoOjB9LmxnLXByb2dyZXNzLWJhci5sZy1zdGFydCAubGctcHJvZ3Jlc3N7d2lkdGg6MTAwJX0ubGctc2hvdy1hdXRvcGxheSAubGctcHJvZ3Jlc3MtYmFye29wYWNpdHk6MX0ubGctYXV0b3BsYXktYnV0dG9uOmFmdGVye2NvbnRlbnQ6XFxcIlxcXFxFMDFEXFxcIn0ubGctc2hvdy1hdXRvcGxheSAubGctYXV0b3BsYXktYnV0dG9uOmFmdGVye2NvbnRlbnQ6XFxcIlxcXFxFMDFBXFxcIn0ubGctb3V0ZXIubGctY3NzMy5sZy16b29tLWRyYWdnaW5nIC5sZy1pdGVtLmxnLWNvbXBsZXRlLmxnLXpvb21hYmxlIC5sZy1pbWFnZSwubGctb3V0ZXIubGctY3NzMy5sZy16b29tLWRyYWdnaW5nIC5sZy1pdGVtLmxnLWNvbXBsZXRlLmxnLXpvb21hYmxlIC5sZy1pbWctd3JhcHstd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246MHM7dHJhbnNpdGlvbi1kdXJhdGlvbjowc30ubGctb3V0ZXIubGctdXNlLXRyYW5zaXRpb24tZm9yLXpvb20gLmxnLWl0ZW0ubGctY29tcGxldGUubGctem9vbWFibGUgLmxnLWltZy13cmFwey13ZWJraXQtdHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAuM3MgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHM7LW1vei10cmFuc2l0aW9uOi1tb3otdHJhbnNmb3JtIC4zcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwczstby10cmFuc2l0aW9uOi1vLXRyYW5zZm9ybSAuM3MgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHM7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjNzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzfS5sZy1vdXRlci5sZy11c2UtbGVmdC1mb3Item9vbSAubGctaXRlbS5sZy1jb21wbGV0ZS5sZy16b29tYWJsZSAubGctaW1nLXdyYXB7LXdlYmtpdC10cmFuc2l0aW9uOmxlZnQgLjNzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLHRvcCAuM3MgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHM7LW1vei10cmFuc2l0aW9uOmxlZnQgLjNzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLHRvcCAuM3MgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHM7LW8tdHJhbnNpdGlvbjpsZWZ0IC4zcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyx0b3AgLjNzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzO3RyYW5zaXRpb246bGVmdCAuM3MgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsdG9wIC4zcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwc30ubGctb3V0ZXIgLmxnLWl0ZW0ubGctY29tcGxldGUubGctem9vbWFibGUgLmxnLWltZy13cmFwey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApOy13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47LW1vei1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtiYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbn0ubGctb3V0ZXIgLmxnLWl0ZW0ubGctY29tcGxldGUubGctem9vbWFibGUgLmxnLWltYWdley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlM2QoMSwxLDEpO3RyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKTstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gLjNzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjE1cyFpbXBvcnRhbnQ7LW1vei10cmFuc2l0aW9uOi1tb3otdHJhbnNmb3JtIC4zcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xNXMhaW1wb3J0YW50Oy1vLXRyYW5zaXRpb246LW8tdHJhbnNmb3JtIC4zcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xNXMhaW1wb3J0YW50O3RyYW5zaXRpb246dHJhbnNmb3JtIC4zcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xNXMhaW1wb3J0YW50Oy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjowIDA7LW1vei10cmFuc2Zvcm0tb3JpZ2luOjAgMDstbXMtdHJhbnNmb3JtLW9yaWdpbjowIDA7dHJhbnNmb3JtLW9yaWdpbjowIDA7LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjstbW96LWJhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuO2JhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVufSNsZy16b29tLWluOmFmdGVye2NvbnRlbnQ6XFxcIlxcXFxFMzExXFxcIn0jbGctYWN0dWFsLXNpemV7Zm9udC1zaXplOjIwcHh9I2xnLWFjdHVhbC1zaXplOmFmdGVye2NvbnRlbnQ6XFxcIlxcXFxFMDMzXFxcIn0jbGctem9vbS1vdXR7b3BhY2l0eTouNTtwb2ludGVyLWV2ZW50czpub25lfSNsZy16b29tLW91dDphZnRlcntjb250ZW50OlxcXCJcXFxcRTMxMlxcXCJ9LmxnLXpvb21lZCAjbGctem9vbS1vdXR7b3BhY2l0eToxO3BvaW50ZXItZXZlbnRzOmF1dG99LmxnLW91dGVyIC5sZy1wYWdlci1vdXRlcntib3R0b206NjBweDtsZWZ0OjA7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDt0ZXh0LWFsaWduOmNlbnRlcjt6LWluZGV4OjEwODA7aGVpZ2h0OjEwcHh9LmxnLW91dGVyIC5sZy1wYWdlci1vdXRlci5sZy1wYWdlci1ob3ZlciAubGctcGFnZXItY29udHtvdmVyZmxvdzp2aXNpYmxlfS5sZy1vdXRlciAubGctcGFnZXItY29udHtjdXJzb3I6cG9pbnRlcjtkaXNwbGF5OmlubGluZS1ibG9jaztvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246cmVsYXRpdmU7dmVydGljYWwtYWxpZ246dG9wO21hcmdpbjowIDVweH0ubGctb3V0ZXIgLmxnLXBhZ2VyLWNvbnQ6aG92ZXIgLmxnLXBhZ2VyLXRodW1iLWNvbnR7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApfS5sZy1vdXRlciAubGctcGFnZXItY29udC5sZy1wYWdlci1hY3RpdmUgLmxnLXBhZ2Vye2JveC1zaGFkb3c6MCAwIDAgMnB4ICNmZmYgaW5zZXR9LmxnLW91dGVyIC5sZy1wYWdlci10aHVtYi1jb250e2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb2xvcjojRkZGO2JvdHRvbToxMDAlO2hlaWdodDo4M3B4O2xlZnQ6MDttYXJnaW4tYm90dG9tOjIwcHg7bWFyZ2luLWxlZnQ6LTYwcHg7b3BhY2l0eTowO3BhZGRpbmc6NXB4O3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEyMHB4O2JvcmRlci1yYWRpdXM6M3B4Oy13ZWJraXQtdHJhbnNpdGlvbjpvcGFjaXR5IC4xNXMgZWFzZSAwcywtd2Via2l0LXRyYW5zZm9ybSAuMTVzIGVhc2UgMHM7LW1vei10cmFuc2l0aW9uOm9wYWNpdHkgLjE1cyBlYXNlIDBzLC1tb3otdHJhbnNmb3JtIC4xNXMgZWFzZSAwczstby10cmFuc2l0aW9uOm9wYWNpdHkgLjE1cyBlYXNlIDBzLC1vLXRyYW5zZm9ybSAuMTVzIGVhc2UgMHM7dHJhbnNpdGlvbjpvcGFjaXR5IC4xNXMgZWFzZSAwcyx0cmFuc2Zvcm0gLjE1cyBlYXNlIDBzOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsNXB4LDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDVweCwwKX0ubGctb3V0ZXIgLmxnLXBhZ2VyLXRodW1iLWNvbnQgaW1ne3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9LmxnLW91dGVyIC5sZy1wYWdlcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsLjUpO2JvcmRlci1yYWRpdXM6NTAlO2JveC1zaGFkb3c6MCAwIDAgOHB4IHJnYmEoMjU1LDI1NSwyNTUsLjcpIGluc2V0O2Rpc3BsYXk6YmxvY2s7aGVpZ2h0OjEycHg7LXdlYmtpdC10cmFuc2l0aW9uOmJveC1zaGFkb3cgLjNzIGVhc2UgMHM7LW8tdHJhbnNpdGlvbjpib3gtc2hhZG93IC4zcyBlYXNlIDBzO3RyYW5zaXRpb246Ym94LXNoYWRvdyAuM3MgZWFzZSAwczt3aWR0aDoxMnB4fS5sZy1vdXRlciAubGctcGFnZXI6Zm9jdXMsLmxnLW91dGVyIC5sZy1wYWdlcjpob3Zlcntib3gtc2hhZG93OjAgMCAwIDhweCAjZmZmIGluc2V0fS5sZy1vdXRlciAubGctY2FyZXR7Ym9yZGVyLWxlZnQ6MTBweCBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItcmlnaHQ6MTBweCBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItdG9wOjEwcHggZGFzaGVkO2JvdHRvbTotMTBweDtkaXNwbGF5OmlubGluZS1ibG9jaztoZWlnaHQ6MDtsZWZ0OjUwJTttYXJnaW4tbGVmdDotNXB4O3Bvc2l0aW9uOmFic29sdXRlO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTt3aWR0aDowfS5sZy1mdWxsc2NyZWVuOmFmdGVye2NvbnRlbnQ6XFxcIlxcXFxFMjBDXFxcIn0ubGctZnVsbHNjcmVlbi1vbiAubGctZnVsbHNjcmVlbjphZnRlcntjb250ZW50OlxcXCJcXFxcRTIwRFxcXCJ9LmxnLW91dGVyICNsZy1kcm9wZG93bi1vdmVybGF5e2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMjUpO2JvdHRvbTowO2N1cnNvcjpkZWZhdWx0O2xlZnQ6MDtwb3NpdGlvbjpmaXhlZDtyaWdodDowO3RvcDowO3otaW5kZXg6MTA4MTtvcGFjaXR5OjA7dmlzaWJpbGl0eTpoaWRkZW47LXdlYmtpdC10cmFuc2l0aW9uOnZpc2liaWxpdHkgMHMgbGluZWFyIC4xOHMsb3BhY2l0eSAuMThzIGxpbmVhciAwczstby10cmFuc2l0aW9uOnZpc2liaWxpdHkgMHMgbGluZWFyIC4xOHMsb3BhY2l0eSAuMThzIGxpbmVhciAwczt0cmFuc2l0aW9uOnZpc2liaWxpdHkgMHMgbGluZWFyIC4xOHMsb3BhY2l0eSAuMThzIGxpbmVhciAwc30ubGctb3V0ZXIubGctZHJvcGRvd24tYWN0aXZlICNsZy1kcm9wZG93bi1vdmVybGF5LC5sZy1vdXRlci5sZy1kcm9wZG93bi1hY3RpdmUgLmxnLWRyb3Bkb3duey13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTowczt0cmFuc2l0aW9uLWRlbGF5OjBzOy1tb3otdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKTstby10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MTt2aXNpYmlsaXR5OnZpc2libGV9LmxnLW91dGVyIC5sZy1kcm9wZG93bntiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLXJhZGl1czoycHg7Zm9udC1zaXplOjE0cHg7bGlzdC1zdHlsZS10eXBlOm5vbmU7bWFyZ2luOjA7cGFkZGluZzoxMHB4IDA7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDt0ZXh0LWFsaWduOmxlZnQ7dG9wOjUwcHg7b3BhY2l0eTowO3Zpc2liaWxpdHk6aGlkZGVuOy1tb3otdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsNXB4LDApOy1vLXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDVweCwwKTstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsNXB4LDApOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsNXB4LDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDVweCwwKTstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gLjE4cyBsaW5lYXIgMHMsdmlzaWJpbGl0eSAwcyBsaW5lYXIgLjVzLG9wYWNpdHkgLjE4cyBsaW5lYXIgMHM7LW1vei10cmFuc2l0aW9uOi1tb3otdHJhbnNmb3JtIC4xOHMgbGluZWFyIDBzLHZpc2liaWxpdHkgMHMgbGluZWFyIC41cyxvcGFjaXR5IC4xOHMgbGluZWFyIDBzOy1vLXRyYW5zaXRpb246LW8tdHJhbnNmb3JtIC4xOHMgbGluZWFyIDBzLHZpc2liaWxpdHkgMHMgbGluZWFyIC41cyxvcGFjaXR5IC4xOHMgbGluZWFyIDBzO3RyYW5zaXRpb246dHJhbnNmb3JtIC4xOHMgbGluZWFyIDBzLHZpc2liaWxpdHkgMHMgbGluZWFyIC41cyxvcGFjaXR5IC4xOHMgbGluZWFyIDBzfS5sZy1vdXRlciAubGctZHJvcGRvd246YWZ0ZXJ7Y29udGVudDpcXFwiXFxcIjtkaXNwbGF5OmJsb2NrO2hlaWdodDowO3dpZHRoOjA7cG9zaXRpb246YWJzb2x1dGU7Ym9yZGVyOjhweCBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItYm90dG9tLWNvbG9yOiNGRkY7cmlnaHQ6MTZweDt0b3A6LTE2cHh9LmxnLW91dGVyIC5sZy1kcm9wZG93bj5saTpsYXN0LWNoaWxke21hcmdpbi1ib3R0b206MH0ubGctb3V0ZXIgLmxnLWRyb3Bkb3duPmxpOmhvdmVyIC5sZy1pY29uLC5sZy1vdXRlciAubGctZHJvcGRvd24+bGk6aG92ZXIgYXtjb2xvcjojMzMzfS5sZy1vdXRlciAubGctZHJvcGRvd24gYXtjb2xvcjojMzMzO2Rpc3BsYXk6YmxvY2s7d2hpdGUtc3BhY2U6cHJlO3BhZGRpbmc6NHB4IDEycHg7Zm9udC1mYW1pbHk6XFxcIk9wZW4gU2Fuc1xcXCIsXFxcIkhlbHZldGljYSBOZXVlXFxcIixIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtmb250LXNpemU6MTJweH0ubGctb3V0ZXIgLmxnLWRyb3Bkb3duIGE6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4wNyl9LmxnLW91dGVyIC5sZy1kcm9wZG93biAubGctZHJvcGRvd24tdGV4dHtkaXNwbGF5OmlubGluZS1ibG9jaztsaW5lLWhlaWdodDoxO21hcmdpbi10b3A6LTNweDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9LmxnLW91dGVyIC5sZy1kcm9wZG93biAubGctaWNvbntjb2xvcjojMzMzO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2Zsb2F0Om5vbmU7Zm9udC1zaXplOjIwcHg7aGVpZ2h0OmF1dG87bGluZS1oZWlnaHQ6MTttYXJnaW4tcmlnaHQ6OHB4O3BhZGRpbmc6MDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7d2lkdGg6YXV0b30ubGctb3V0ZXIsLmxnLW91dGVyIC5sZywubGctb3V0ZXIgLmxnLWlubmVye3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9LmxnLW91dGVyICNsZy1zaGFyZXtwb3NpdGlvbjpyZWxhdGl2ZX0ubGctb3V0ZXIgI2xnLXNoYXJlOmFmdGVye2NvbnRlbnQ6XFxcIlxcXFxFODBEXFxcIn0ubGctb3V0ZXIgI2xnLXNoYXJlLWZhY2Vib29rIC5sZy1pY29ue2NvbG9yOiMzYjU5OTh9LmxnLW91dGVyICNsZy1zaGFyZS1mYWNlYm9vayAubGctaWNvbjphZnRlcntjb250ZW50OlxcXCJcXFxcRTkwMVxcXCJ9LmxnLW91dGVyICNsZy1zaGFyZS10d2l0dGVyIC5sZy1pY29ue2NvbG9yOiMwMGFjZWR9LmxnLW91dGVyICNsZy1zaGFyZS10d2l0dGVyIC5sZy1pY29uOmFmdGVye2NvbnRlbnQ6XFxcIlxcXFxFOTA0XFxcIn0ubGctb3V0ZXIgI2xnLXNoYXJlLWdvb2dsZXBsdXMgLmxnLWljb257Y29sb3I6I2RkNGIzOX0ubGctb3V0ZXIgI2xnLXNoYXJlLWdvb2dsZXBsdXMgLmxnLWljb246YWZ0ZXJ7Y29udGVudDpcXFwiXFxcXEU5MDJcXFwifS5sZy1vdXRlciAjbGctc2hhcmUtcGludGVyZXN0IC5sZy1pY29ue2NvbG9yOiNjYjIwMjd9LmxnLW91dGVyICNsZy1zaGFyZS1waW50ZXJlc3QgLmxnLWljb246YWZ0ZXJ7Y29udGVudDpcXFwiXFxcXEU5MDNcXFwifS5sZy1ncm91cDphZnRlcntjb250ZW50OlxcXCJcXFwiO2Rpc3BsYXk6dGFibGU7Y2xlYXI6Ym90aH0ubGctb3V0ZXJ7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3otaW5kZXg6MTA1MDt0ZXh0LWFsaWduOmxlZnQ7b3BhY2l0eTowOy13ZWJraXQtdHJhbnNpdGlvbjpvcGFjaXR5IC4xNXMgZWFzZSAwczstby10cmFuc2l0aW9uOm9wYWNpdHkgLjE1cyBlYXNlIDBzO3RyYW5zaXRpb246b3BhY2l0eSAuMTVzIGVhc2UgMHN9LmxnLW91dGVyICp7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7LW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fS5sZy1vdXRlci5sZy12aXNpYmxle29wYWNpdHk6MX0ubGctb3V0ZXIubGctY3NzMyAubGctaXRlbS5sZy1jdXJyZW50LC5sZy1vdXRlci5sZy1jc3MzIC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsLmxnLW91dGVyLmxnLWNzczMgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246aW5oZXJpdCFpbXBvcnRhbnQ7dHJhbnNpdGlvbi1kdXJhdGlvbjppbmhlcml0IWltcG9ydGFudDstd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmluaGVyaXQhaW1wb3J0YW50O3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmluaGVyaXQhaW1wb3J0YW50fS5sZy1vdXRlci5sZy1jc3MzLmxnLWRyYWdnaW5nIC5sZy1pdGVtLmxnLWN1cnJlbnQsLmxnLW91dGVyLmxnLWNzczMubGctZHJhZ2dpbmcgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwubGctb3V0ZXIubGctY3NzMy5sZy1kcmFnZ2luZyAubGctaXRlbS5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjowcyFpbXBvcnRhbnQ7dHJhbnNpdGlvbi1kdXJhdGlvbjowcyFpbXBvcnRhbnQ7b3BhY2l0eToxfS5sZy1vdXRlci5sZy1ncmFiIGltZy5sZy1vYmplY3R7Y3Vyc29yOi13ZWJraXQtZ3JhYjtjdXJzb3I6LW1vei1ncmFiO2N1cnNvcjotby1ncmFiO2N1cnNvcjotbXMtZ3JhYjtjdXJzb3I6Z3JhYn0ubGctb3V0ZXIubGctZ3JhYmJpbmcgaW1nLmxnLW9iamVjdHtjdXJzb3I6bW92ZTtjdXJzb3I6LXdlYmtpdC1ncmFiYmluZztjdXJzb3I6LW1vei1ncmFiYmluZztjdXJzb3I6LW8tZ3JhYmJpbmc7Y3Vyc29yOi1tcy1ncmFiYmluZztjdXJzb3I6Z3JhYmJpbmd9LmxnLW91dGVyIC5sZ3twb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzpoaWRkZW47bWFyZ2luLWxlZnQ6YXV0bzttYXJnaW4tcmlnaHQ6YXV0bzttYXgtd2lkdGg6MTAwJTttYXgtaGVpZ2h0OjEwMCV9LmxnLW91dGVyIC5sZy1pbm5lcntwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dG9wOjA7d2hpdGUtc3BhY2U6bm93cmFwfS5sZy1vdXRlciAubGctaXRlbXtiYWNrZ3JvdW5kOnVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vaW1nL2xvYWRpbmcuZ2lmXCIpKSArIFwiKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fS5sZy1vdXRlci5sZy1jc3MgLmxnLWN1cnJlbnQsLmxnLW91dGVyLmxnLWNzczMgLmxnLWN1cnJlbnQsLmxnLW91dGVyLmxnLWNzczMgLmxnLW5leHQtc2xpZGUsLmxnLW91dGVyLmxnLWNzczMgLmxnLXByZXYtc2xpZGV7ZGlzcGxheTppbmxpbmUtYmxvY2shaW1wb3J0YW50fS5sZy1vdXRlciAubGctaW1nLXdyYXAsLmxnLW91dGVyIC5sZy1pdGVte2Rpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtYWxpZ246Y2VudGVyO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCV9LmxnLW91dGVyIC5sZy1pbWctd3JhcDpiZWZvcmUsLmxnLW91dGVyIC5sZy1pdGVtOmJlZm9yZXtjb250ZW50OlxcXCJcXFwiO2Rpc3BsYXk6aW5saW5lLWJsb2NrO2hlaWdodDo1MCU7d2lkdGg6MXB4O21hcmdpbi1yaWdodDotMXB4fS5sZy1vdXRlciAubGctaW1nLXdyYXB7cG9zaXRpb246YWJzb2x1dGU7cGFkZGluZzowIDVweDtsZWZ0OjA7cmlnaHQ6MDt0b3A6MDtib3R0b206MH0ubGctb3V0ZXIgLmxnLWl0ZW0ubGctY29tcGxldGV7YmFja2dyb3VuZC1pbWFnZTpub25lfS5sZy1vdXRlciAubGctaXRlbS5sZy1jdXJyZW50e3otaW5kZXg6MTA2MH0ubGctb3V0ZXIgLmxnLWltYWdle2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTttYXgtd2lkdGg6MTAwJTttYXgtaGVpZ2h0OjEwMCU7d2lkdGg6YXV0byFpbXBvcnRhbnQ7aGVpZ2h0OmF1dG8haW1wb3J0YW50fS5sZy1vdXRlci5sZy1zaG93LWFmdGVyLWxvYWQgLmxnLWl0ZW0gLmxnLW9iamVjdCwubGctb3V0ZXIubGctc2hvdy1hZnRlci1sb2FkIC5sZy1pdGVtIC5sZy12aWRlby1wbGF5e29wYWNpdHk6MDstd2Via2l0LXRyYW5zaXRpb246b3BhY2l0eSAuMTVzIGVhc2UgMHM7LW8tdHJhbnNpdGlvbjpvcGFjaXR5IC4xNXMgZWFzZSAwczt0cmFuc2l0aW9uOm9wYWNpdHkgLjE1cyBlYXNlIDBzfS5sZy1vdXRlci5sZy1zaG93LWFmdGVyLWxvYWQgLmxnLWl0ZW0ubGctY29tcGxldGUgLmxnLW9iamVjdCwubGctb3V0ZXIubGctc2hvdy1hZnRlci1sb2FkIC5sZy1pdGVtLmxnLWNvbXBsZXRlIC5sZy12aWRlby1wbGF5e29wYWNpdHk6MX0ubGctb3V0ZXIgLmxnLWVtcHR5LWh0bWwsLmxnLW91dGVyLmxnLWhpZGUtZG93bmxvYWQgI2xnLWRvd25sb2Fke2Rpc3BsYXk6bm9uZX0ubGctYmFja2Ryb3B7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7ei1pbmRleDoxMDQwO2JhY2tncm91bmQtY29sb3I6IzAwMDtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2l0aW9uOm9wYWNpdHkgLjE1cyBlYXNlIDBzOy1vLXRyYW5zaXRpb246b3BhY2l0eSAuMTVzIGVhc2UgMHM7dHJhbnNpdGlvbjpvcGFjaXR5IC4xNXMgZWFzZSAwc30ubGctYmFja2Ryb3AuaW57b3BhY2l0eToxfS5sZy1jc3MzLmxnLW5vLXRyYW5zIC5sZy1jdXJyZW50LC5sZy1jc3MzLmxnLW5vLXRyYW5zIC5sZy1uZXh0LXNsaWRlLC5sZy1jc3MzLmxnLW5vLXRyYW5zIC5sZy1wcmV2LXNsaWRley13ZWJraXQtdHJhbnNpdGlvbjpub25lIDBzIGVhc2UgMHMhaW1wb3J0YW50Oy1tb3otdHJhbnNpdGlvbjpub25lIDBzIGVhc2UgMHMhaW1wb3J0YW50Oy1vLXRyYW5zaXRpb246bm9uZSAwcyBlYXNlIDBzIWltcG9ydGFudDt0cmFuc2l0aW9uOm5vbmUgMHMgZWFzZSAwcyFpbXBvcnRhbnR9LmxnLWNzczMubGctdXNlLWNzczMgLmxnLWl0ZW0sLmxnLWNzczMubGctdXNlLWxlZnQgLmxnLWl0ZW17LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjstbW96LWJhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuO2JhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVufS5sZy1jc3MzLmxnLWZhZGUgLmxnLWl0ZW17b3BhY2l0eTowfS5sZy1jc3MzLmxnLWZhZGUgLmxnLWl0ZW0ubGctY3VycmVudHtvcGFjaXR5OjF9LmxnLWNzczMubGctZmFkZSAubGctaXRlbS5sZy1jdXJyZW50LC5sZy1jc3MzLmxnLWZhZGUgLmxnLWl0ZW0ubGctbmV4dC1zbGlkZSwubGctY3NzMy5sZy1mYWRlIC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2l0aW9uOm9wYWNpdHkgLjFzIGVhc2UgMHM7LW1vei10cmFuc2l0aW9uOm9wYWNpdHkgLjFzIGVhc2UgMHM7LW8tdHJhbnNpdGlvbjpvcGFjaXR5IC4xcyBlYXNlIDBzO3RyYW5zaXRpb246b3BhY2l0eSAuMXMgZWFzZSAwc30ubGctY3NzMy5sZy1zbGlkZS5sZy11c2UtY3NzMyAubGctaXRlbXtvcGFjaXR5OjB9LmxnLWNzczMubGctc2xpZGUubGctdXNlLWNzczMgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwwLDApfS5sZy1jc3MzLmxnLXNsaWRlLmxnLXVzZS1jc3MzIC5sZy1pdGVtLmxnLW5leHQtc2xpZGV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCl9LmxnLWNzczMubGctc2xpZGUubGctdXNlLWNzczMgLmxnLWl0ZW0ubGctY3VycmVudHstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKTtvcGFjaXR5OjF9LmxnLWNzczMubGctc2xpZGUubGctdXNlLWNzczMgLmxnLWl0ZW0ubGctY3VycmVudCwubGctY3NzMy5sZy1zbGlkZS5sZy11c2UtY3NzMyAubGctaXRlbS5sZy1uZXh0LXNsaWRlLC5sZy1jc3MzLmxnLXNsaWRlLmxnLXVzZS1jc3MzIC5sZy1pdGVtLmxnLXByZXYtc2xpZGV7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7LW1vei10cmFuc2l0aW9uOi1tb3otdHJhbnNmb3JtIDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7LW8tdHJhbnNpdGlvbjotby10cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKDAsMCwuMjUsMSkgMHMsb3BhY2l0eSAuMXMgZWFzZSAwczt0cmFuc2l0aW9uOnRyYW5zZm9ybSAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzfS5sZy1jc3MzLmxnLXNsaWRlLmxnLXVzZS1sZWZ0IC5sZy1pdGVte29wYWNpdHk6MDtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjB9LmxnLWNzczMubGctc2xpZGUubGctdXNlLWxlZnQgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXtsZWZ0Oi0xMDAlfS5sZy1jc3MzLmxnLXNsaWRlLmxnLXVzZS1sZWZ0IC5sZy1pdGVtLmxnLW5leHQtc2xpZGV7bGVmdDoxMDAlfS5sZy1jc3MzLmxnLXNsaWRlLmxnLXVzZS1sZWZ0IC5sZy1pdGVtLmxnLWN1cnJlbnR7bGVmdDowO29wYWNpdHk6MX0ubGctY3NzMy5sZy1zbGlkZS5sZy11c2UtbGVmdCAubGctaXRlbS5sZy1jdXJyZW50LC5sZy1jc3MzLmxnLXNsaWRlLmxnLXVzZS1sZWZ0IC5sZy1pdGVtLmxnLW5leHQtc2xpZGUsLmxnLWNzczMubGctc2xpZGUubGctdXNlLWxlZnQgLmxnLWl0ZW0ubGctcHJldi1zbGlkZXstd2Via2l0LXRyYW5zaXRpb246bGVmdCAxcyBjdWJpYy1iZXppZXIoMCwwLC4yNSwxKSAwcyxvcGFjaXR5IC4xcyBlYXNlIDBzOy1tb3otdHJhbnNpdGlvbjpsZWZ0IDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7LW8tdHJhbnNpdGlvbjpsZWZ0IDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHM7dHJhbnNpdGlvbjpsZWZ0IDFzIGN1YmljLWJlemllcigwLDAsLjI1LDEpIDBzLG9wYWNpdHkgLjFzIGVhc2UgMHN9XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlc2NhcGUodXJsKSB7XG4gICAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB1cmxcbiAgICB9XG4gICAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gICAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gICAgfVxuICAgIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICAgIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSkge1xuICAgICAgICByZXR1cm4gJ1wiJyArIHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpICsgJ1wiJ1xuICAgIH1cblxuICAgIHJldHVybiB1cmxcbn1cbiIsIi8qISBsZy1mdWxsc2NyZWVuIC0gdjEuMC4xIC0gMjAxNi0wOS0zMFxyXG4qIGh0dHA6Ly9zYWNoaW5jaG9vbHVyLmdpdGh1Yi5pby9saWdodEdhbGxlcnlcclxuKiBDb3B5cmlnaHQgKGMpIDIwMTYgU2FjaGluIE47IExpY2Vuc2VkIEdQTHYzICovXHJcblxyXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZSB1bmxlc3MgYW1kTW9kdWxlSWQgaXMgc2V0XG4gICAgZGVmaW5lKFsnanF1ZXJ5J10sIGZ1bmN0aW9uIChhMCkge1xuICAgICAgcmV0dXJuIChmYWN0b3J5KGEwKSk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgLy8gTm9kZS4gRG9lcyBub3Qgd29yayB3aXRoIHN0cmljdCBDb21tb25KUywgYnV0XG4gICAgLy8gb25seSBDb21tb25KUy1saWtlIGVudmlyb25tZW50cyB0aGF0IHN1cHBvcnQgbW9kdWxlLmV4cG9ydHMsXG4gICAgLy8gbGlrZSBOb2RlLlxuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSk7XG4gIH0gZWxzZSB7XG4gICAgZmFjdG9yeShqUXVlcnkpO1xuICB9XG59KHRoaXMsIGZ1bmN0aW9uICgkKSB7XG5cbihmdW5jdGlvbigpIHtcblxuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgZnVsbFNjcmVlbjogdHJ1ZVxuICAgIH07XG5cbiAgICB2YXIgRnVsbHNjcmVlbiA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcblxuICAgICAgICAvLyBnZXQgbGlnaHRHYWxsZXJ5IGNvcmUgcGx1Z2luIGRhdGFcbiAgICAgICAgdGhpcy5jb3JlID0gJChlbGVtZW50KS5kYXRhKCdsaWdodEdhbGxlcnknKTtcblxuICAgICAgICB0aGlzLiRlbCA9ICQoZWxlbWVudCk7XG5cbiAgICAgICAgLy8gZXh0ZW5kIG1vZHVsZSBkZWZhbHV0IHNldHRpbmdzIHdpdGggbGlnaHRHYWxsZXJ5IGNvcmUgc2V0dGluZ3NcbiAgICAgICAgdGhpcy5jb3JlLnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIHRoaXMuY29yZS5zKTtcblxuICAgICAgICB0aGlzLmluaXQoKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgRnVsbHNjcmVlbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZnVsbFNjcmVlbiA9ICcnO1xuICAgICAgICBpZiAodGhpcy5jb3JlLnMuZnVsbFNjcmVlbikge1xuXG4gICAgICAgICAgICAvLyBjaGVjayBmb3IgZnVsbHNjcmVlbiBicm93c2VyIHN1cHBvcnRcbiAgICAgICAgICAgIGlmICghZG9jdW1lbnQuZnVsbHNjcmVlbkVuYWJsZWQgJiYgIWRvY3VtZW50LndlYmtpdEZ1bGxzY3JlZW5FbmFibGVkICYmXG4gICAgICAgICAgICAgICAgIWRvY3VtZW50Lm1vekZ1bGxTY3JlZW5FbmFibGVkICYmICFkb2N1bWVudC5tc0Z1bGxzY3JlZW5FbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmdWxsU2NyZWVuID0gJzxzcGFuIGNsYXNzPVwibGctZnVsbHNjcmVlbiBsZy1pY29uXCI+PC9zcGFuPic7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3JlLiRvdXRlci5maW5kKCcubGctdG9vbGJhcicpLmFwcGVuZChmdWxsU2NyZWVuKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZ1bGxTY3JlZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBGdWxsc2NyZWVuLnByb3RvdHlwZS5yZXF1ZXN0RnVsbHNjcmVlbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIGlmIChlbC5yZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgICAgICAgZWwucmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgfSBlbHNlIGlmIChlbC5tc1JlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgICBlbC5tc1JlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZWwubW96UmVxdWVzdEZ1bGxTY3JlZW4pIHtcbiAgICAgICAgICAgIGVsLm1velJlcXVlc3RGdWxsU2NyZWVuKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZWwud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAgIGVsLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgRnVsbHNjcmVlbi5wcm90b3R5cGUuZXhpdEZ1bGxzY3JlZW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5leGl0RnVsbHNjcmVlbigpO1xuICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50Lm1zRXhpdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAgIGRvY3VtZW50Lm1zRXhpdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAgIGRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvR3VpZGUvQVBJL0RPTS9Vc2luZ19mdWxsX3NjcmVlbl9tb2RlXG4gICAgRnVsbHNjcmVlbi5wcm90b3R5cGUuZnVsbFNjcmVlbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdmdWxsc2NyZWVuY2hhbmdlLmxnIHdlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UubGcgbW96ZnVsbHNjcmVlbmNoYW5nZS5sZyBNU0Z1bGxzY3JlZW5DaGFuZ2UubGcnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIF90aGlzLmNvcmUuJG91dGVyLnRvZ2dsZUNsYXNzKCdsZy1mdWxsc2NyZWVuLW9uJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY29yZS4kb3V0ZXIuZmluZCgnLmxnLWZ1bGxzY3JlZW4nKS5vbignY2xpY2subGcnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICghZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQgJiZcbiAgICAgICAgICAgICAgICAhZG9jdW1lbnQubW96RnVsbFNjcmVlbkVsZW1lbnQgJiYgIWRvY3VtZW50LndlYmtpdEZ1bGxzY3JlZW5FbGVtZW50ICYmICFkb2N1bWVudC5tc0Z1bGxzY3JlZW5FbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVxdWVzdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZXhpdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgRnVsbHNjcmVlbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIC8vIGV4aXQgZnJvbSBmdWxsc2NyZWVuIGlmIGFjdGl2YXRlZFxuICAgICAgICB0aGlzLmV4aXRGdWxsc2NyZWVuKCk7XG5cbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCdmdWxsc2NyZWVuY2hhbmdlLmxnIHdlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UubGcgbW96ZnVsbHNjcmVlbmNoYW5nZS5sZyBNU0Z1bGxzY3JlZW5DaGFuZ2UubGcnKTtcbiAgICB9O1xuXG4gICAgJC5mbi5saWdodEdhbGxlcnkubW9kdWxlcy5mdWxsc2NyZWVuID0gRnVsbHNjcmVlbjtcblxufSkoKTtcblxufSkpO1xuIiwiLyohIGxnLXRodW1ibmFpbCAtIHYxLjEuMCAtIDIwMTctMDgtMDhcclxuKiBodHRwOi8vc2FjaGluY2hvb2x1ci5naXRodWIuaW8vbGlnaHRHYWxsZXJ5XHJcbiogQ29weXJpZ2h0IChjKSAyMDE3IFNhY2hpbiBOOyBMaWNlbnNlZCBHUEx2MyAqL1xyXG5cclxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUgdW5sZXNzIGFtZE1vZHVsZUlkIGlzIHNldFxuICAgIGRlZmluZShbJ2pxdWVyeSddLCBmdW5jdGlvbiAoYTApIHtcbiAgICAgIHJldHVybiAoZmFjdG9yeShhMCkpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgIC8vIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMsIGJ1dFxuICAgIC8vIG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLFxuICAgIC8vIGxpa2UgTm9kZS5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JykpO1xuICB9IGVsc2Uge1xuICAgIGZhY3RvcnkoalF1ZXJ5KTtcbiAgfVxufSh0aGlzLCBmdW5jdGlvbiAoJCkge1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgIHRodW1ibmFpbDogdHJ1ZSxcblxuICAgICAgICBhbmltYXRlVGh1bWI6IHRydWUsXG4gICAgICAgIGN1cnJlbnRQYWdlclBvc2l0aW9uOiAnbWlkZGxlJyxcblxuICAgICAgICB0aHVtYldpZHRoOiAxMDAsXG4gICAgICAgIHRodW1iSGVpZ2h0OiAnODBweCcsXG4gICAgICAgIHRodW1iQ29udEhlaWdodDogMTAwLFxuICAgICAgICB0aHVtYk1hcmdpbjogNSxcblxuICAgICAgICBleFRodW1iSW1hZ2U6IGZhbHNlLFxuICAgICAgICBzaG93VGh1bWJCeURlZmF1bHQ6IHRydWUsXG4gICAgICAgIHRvb2dsZVRodW1iOiB0cnVlLFxuICAgICAgICBwdWxsQ2FwdGlvblVwOiB0cnVlLFxuXG4gICAgICAgIGVuYWJsZVRodW1iRHJhZzogdHJ1ZSxcbiAgICAgICAgZW5hYmxlVGh1bWJTd2lwZTogdHJ1ZSxcbiAgICAgICAgc3dpcGVUaHJlc2hvbGQ6IDUwLFxuXG4gICAgICAgIGxvYWRZb3V0dWJlVGh1bWJuYWlsOiB0cnVlLFxuICAgICAgICB5b3V0dWJlVGh1bWJTaXplOiAxLFxuXG4gICAgICAgIGxvYWRWaW1lb1RodW1ibmFpbDogdHJ1ZSxcbiAgICAgICAgdmltZW9UaHVtYlNpemU6ICd0aHVtYm5haWxfc21hbGwnLFxuXG4gICAgICAgIGxvYWREYWlseW1vdGlvblRodW1ibmFpbDogdHJ1ZVxuICAgIH07XG5cbiAgICB2YXIgVGh1bWJuYWlsID0gZnVuY3Rpb24oZWxlbWVudCkge1xuXG4gICAgICAgIC8vIGdldCBsaWdodEdhbGxlcnkgY29yZSBwbHVnaW4gZGF0YVxuICAgICAgICB0aGlzLmNvcmUgPSAkKGVsZW1lbnQpLmRhdGEoJ2xpZ2h0R2FsbGVyeScpO1xuXG4gICAgICAgIC8vIGV4dGVuZCBtb2R1bGUgZGVmYXVsdCBzZXR0aW5ncyB3aXRoIGxpZ2h0R2FsbGVyeSBjb3JlIHNldHRpbmdzXG4gICAgICAgIHRoaXMuY29yZS5zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCB0aGlzLmNvcmUucyk7XG5cbiAgICAgICAgdGhpcy4kZWwgPSAkKGVsZW1lbnQpO1xuICAgICAgICB0aGlzLiR0aHVtYk91dGVyID0gbnVsbDtcbiAgICAgICAgdGhpcy50aHVtYk91dGVyV2lkdGggPSAwO1xuICAgICAgICB0aGlzLnRodW1iVG90YWxXaWR0aCA9ICh0aGlzLmNvcmUuJGl0ZW1zLmxlbmd0aCAqICh0aGlzLmNvcmUucy50aHVtYldpZHRoICsgdGhpcy5jb3JlLnMudGh1bWJNYXJnaW4pKTtcbiAgICAgICAgdGhpcy50aHVtYkluZGV4ID0gdGhpcy5jb3JlLmluZGV4O1xuXG4gICAgICAgIGlmICh0aGlzLmNvcmUucy5hbmltYXRlVGh1bWIpIHtcbiAgICAgICAgICAgIHRoaXMuY29yZS5zLnRodW1iSGVpZ2h0ID0gJzEwMCUnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGh1bWJuYWlsIGFuaW1hdGlvbiB2YWx1ZVxuICAgICAgICB0aGlzLmxlZnQgPSAwO1xuXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBUaHVtYm5haWwucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuY29yZS5zLnRodW1ibmFpbCAmJiB0aGlzLmNvcmUuJGl0ZW1zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvcmUucy5zaG93VGh1bWJCeURlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNvcmUuJG91dGVyLmFkZENsYXNzKCdsZy10aHVtYi1vcGVuJyk7XG4gICAgICAgICAgICAgICAgfSwgNzAwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuY29yZS5zLnB1bGxDYXB0aW9uVXApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvcmUuJG91dGVyLmFkZENsYXNzKCdsZy1wdWxsLWNhcHRpb24tdXAnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5idWlsZCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY29yZS5zLmFuaW1hdGVUaHVtYiAmJiB0aGlzLmNvcmUuZG9Dc3MoKSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvcmUucy5lbmFibGVUaHVtYkRyYWcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmFibGVUaHVtYkRyYWcoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb3JlLnMuZW5hYmxlVGh1bWJTd2lwZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuYWJsZVRodW1iU3dpcGUoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnRodW1iQ2xpY2thYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGh1bWJDbGlja2FibGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnRvb2dsZSgpO1xuICAgICAgICAgICAgdGhpcy50aHVtYmtleVByZXNzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgVGh1bWJuYWlsLnByb3RvdHlwZS5idWlsZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgdGh1bWJMaXN0ID0gJyc7XG4gICAgICAgIHZhciB2aW1lb0Vycm9yVGh1bWJTaXplID0gJyc7XG4gICAgICAgIHZhciAkdGh1bWI7XG4gICAgICAgIHZhciBodG1sID0gJzxkaXYgY2xhc3M9XCJsZy10aHVtYi1vdXRlclwiPicgK1xuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJsZy10aHVtYiBsZy1ncm91cFwiPicgK1xuICAgICAgICAgICAgJzwvZGl2PicgK1xuICAgICAgICAgICAgJzwvZGl2Pic7XG5cbiAgICAgICAgc3dpdGNoICh0aGlzLmNvcmUucy52aW1lb1RodW1iU2l6ZSkge1xuICAgICAgICAgICAgY2FzZSAndGh1bWJuYWlsX2xhcmdlJzpcbiAgICAgICAgICAgICAgICB2aW1lb0Vycm9yVGh1bWJTaXplID0gJzY0MCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0aHVtYm5haWxfbWVkaXVtJzpcbiAgICAgICAgICAgICAgICB2aW1lb0Vycm9yVGh1bWJTaXplID0gJzIwMHgxNTAnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndGh1bWJuYWlsX3NtYWxsJzpcbiAgICAgICAgICAgICAgICB2aW1lb0Vycm9yVGh1bWJTaXplID0gJzEwMHg3NSc7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy5jb3JlLiRvdXRlci5hZGRDbGFzcygnbGctaGFzLXRodW1iJyk7XG5cbiAgICAgICAgX3RoaXMuY29yZS4kb3V0ZXIuZmluZCgnLmxnJykuYXBwZW5kKGh0bWwpO1xuXG4gICAgICAgIF90aGlzLiR0aHVtYk91dGVyID0gX3RoaXMuY29yZS4kb3V0ZXIuZmluZCgnLmxnLXRodW1iLW91dGVyJyk7XG4gICAgICAgIF90aGlzLnRodW1iT3V0ZXJXaWR0aCA9IF90aGlzLiR0aHVtYk91dGVyLndpZHRoKCk7XG5cbiAgICAgICAgaWYgKF90aGlzLmNvcmUucy5hbmltYXRlVGh1bWIpIHtcbiAgICAgICAgICAgIF90aGlzLmNvcmUuJG91dGVyLmZpbmQoJy5sZy10aHVtYicpLmNzcyh7XG4gICAgICAgICAgICAgICAgd2lkdGg6IF90aGlzLnRodW1iVG90YWxXaWR0aCArICdweCcsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY29yZS5zLmFuaW1hdGVUaHVtYikge1xuICAgICAgICAgICAgX3RoaXMuJHRodW1iT3V0ZXIuY3NzKCdoZWlnaHQnLCBfdGhpcy5jb3JlLnMudGh1bWJDb250SGVpZ2h0ICsgJ3B4Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRUaHVtYihzcmMsIHRodW1iLCBpbmRleCkge1xuICAgICAgICAgICAgdmFyIGlzVmlkZW8gPSBfdGhpcy5jb3JlLmlzVmlkZW8oc3JjLCBpbmRleCkgfHwge307XG4gICAgICAgICAgICB2YXIgdGh1bWJJbWc7XG4gICAgICAgICAgICB2YXIgdmltZW9JZCA9ICcnO1xuXG4gICAgICAgICAgICBpZiAoaXNWaWRlby55b3V0dWJlIHx8IGlzVmlkZW8udmltZW8gfHwgaXNWaWRlby5kYWlseW1vdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChpc1ZpZGVvLnlvdXR1YmUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmNvcmUucy5sb2FkWW91dHViZVRodW1ibmFpbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGh1bWJJbWcgPSAnLy9pbWcueW91dHViZS5jb20vdmkvJyArIGlzVmlkZW8ueW91dHViZVsxXSArICcvJyArIF90aGlzLmNvcmUucy55b3V0dWJlVGh1bWJTaXplICsgJy5qcGcnO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGh1bWJJbWcgPSB0aHVtYjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNWaWRlby52aW1lbykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuY29yZS5zLmxvYWRWaW1lb1RodW1ibmFpbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGh1bWJJbWcgPSAnLy9pLnZpbWVvY2RuLmNvbS92aWRlby9lcnJvcl8nICsgdmltZW9FcnJvclRodW1iU2l6ZSArICcuanBnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpbWVvSWQgPSBpc1ZpZGVvLnZpbWVvWzFdO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGh1bWJJbWcgPSB0aHVtYjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNWaWRlby5kYWlseW1vdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuY29yZS5zLmxvYWREYWlseW1vdGlvblRodW1ibmFpbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGh1bWJJbWcgPSAnLy93d3cuZGFpbHltb3Rpb24uY29tL3RodW1ibmFpbC92aWRlby8nICsgaXNWaWRlby5kYWlseW1vdGlvblsxXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRodW1iSW1nID0gdGh1bWI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRodW1iSW1nID0gdGh1bWI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRodW1iTGlzdCArPSAnPGRpdiBkYXRhLXZpbWVvLWlkPVwiJyArIHZpbWVvSWQgKyAnXCIgY2xhc3M9XCJsZy10aHVtYi1pdGVtXCIgc3R5bGU9XCJ3aWR0aDonICsgX3RoaXMuY29yZS5zLnRodW1iV2lkdGggKyAncHg7IGhlaWdodDogJyArIF90aGlzLmNvcmUucy50aHVtYkhlaWdodCArICc7IG1hcmdpbi1yaWdodDogJyArIF90aGlzLmNvcmUucy50aHVtYk1hcmdpbiArICdweFwiPjxpbWcgc3JjPVwiJyArIHRodW1iSW1nICsgJ1wiIC8+PC9kaXY+JztcbiAgICAgICAgICAgIHZpbWVvSWQgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfdGhpcy5jb3JlLnMuZHluYW1pYykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfdGhpcy5jb3JlLnMuZHluYW1pY0VsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZ2V0VGh1bWIoX3RoaXMuY29yZS5zLmR5bmFtaWNFbFtpXS5zcmMsIF90aGlzLmNvcmUucy5keW5hbWljRWxbaV0udGh1bWIsIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMuY29yZS4kaXRlbXMuZWFjaChmdW5jdGlvbihpKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIV90aGlzLmNvcmUucy5leFRodW1iSW1hZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0VGh1bWIoJCh0aGlzKS5hdHRyKCdocmVmJykgfHwgJCh0aGlzKS5hdHRyKCdkYXRhLXNyYycpLCAkKHRoaXMpLmZpbmQoJ2ltZycpLmF0dHIoJ3NyYycpLCBpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBnZXRUaHVtYigkKHRoaXMpLmF0dHIoJ2hyZWYnKSB8fCAkKHRoaXMpLmF0dHIoJ2RhdGEtc3JjJyksICQodGhpcykuYXR0cihfdGhpcy5jb3JlLnMuZXhUaHVtYkltYWdlKSwgaSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLmNvcmUuJG91dGVyLmZpbmQoJy5sZy10aHVtYicpLmh0bWwodGh1bWJMaXN0KTtcblxuICAgICAgICAkdGh1bWIgPSBfdGhpcy5jb3JlLiRvdXRlci5maW5kKCcubGctdGh1bWItaXRlbScpO1xuXG4gICAgICAgIC8vIExvYWQgdmltZW8gdGh1bWJuYWlsc1xuICAgICAgICAkdGh1bWIuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgdmltZW9WaWRlb0lkID0gJHRoaXMuYXR0cignZGF0YS12aW1lby1pZCcpO1xuXG4gICAgICAgICAgICBpZiAodmltZW9WaWRlb0lkKSB7XG4gICAgICAgICAgICAgICAgJC5nZXRKU09OKCcvL3d3dy52aW1lby5jb20vYXBpL3YyL3ZpZGVvLycgKyB2aW1lb1ZpZGVvSWQgKyAnLmpzb24/Y2FsbGJhY2s9PycsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiAnanNvbidcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICR0aGlzLmZpbmQoJ2ltZycpLmF0dHIoJ3NyYycsIGRhdGFbMF1bX3RoaXMuY29yZS5zLnZpbWVvVGh1bWJTaXplXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIG1hbmFnZSBhY3RpdmUgY2xhc3MgZm9yIHRodW1ibmFpbFxuICAgICAgICAkdGh1bWIuZXEoX3RoaXMuY29yZS5pbmRleCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICBfdGhpcy5jb3JlLiRlbC5vbignb25CZWZvcmVTbGlkZS5sZy50bScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJHRodW1iLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICR0aHVtYi5lcShfdGhpcy5jb3JlLmluZGV4KS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICR0aHVtYi5vbignY2xpY2subGcgdG91Y2hlbmQubGcnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBfJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIC8vIEluIElFOSBhbmQgYmVsbG93IHRvdWNoIGRvZXMgbm90IHN1cHBvcnRcbiAgICAgICAgICAgICAgICAvLyBHbyB0byBzbGlkZSBpZiBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgY3NzIHRyYW5zaXRpb25zXG4gICAgICAgICAgICAgICAgaWYgKChfdGhpcy50aHVtYkNsaWNrYWJsZSAmJiAhX3RoaXMuY29yZS5sZ0J1c3kpIHx8ICFfdGhpcy5jb3JlLmRvQ3NzKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY29yZS5pbmRleCA9IF8kdGhpcy5pbmRleCgpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jb3JlLnNsaWRlKF90aGlzLmNvcmUuaW5kZXgsIGZhbHNlLCB0cnVlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICB9KTtcblxuICAgICAgICBfdGhpcy5jb3JlLiRlbC5vbignb25CZWZvcmVTbGlkZS5sZy50bScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgX3RoaXMuYW5pbWF0ZVRodW1iKF90aGlzLmNvcmUuaW5kZXgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZS5sZy50aHVtYiBvcmllbnRhdGlvbmNoYW5nZS5sZy50aHVtYicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hbmltYXRlVGh1bWIoX3RoaXMuY29yZS5pbmRleCk7XG4gICAgICAgICAgICAgICAgX3RoaXMudGh1bWJPdXRlcldpZHRoID0gX3RoaXMuJHRodW1iT3V0ZXIud2lkdGgoKTtcbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIFRodW1ibmFpbC5wcm90b3R5cGUuc2V0VHJhbnNsYXRlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgLy8galF1ZXJ5IHN1cHBvcnRzIEF1dG9tYXRpYyBDU1MgcHJlZml4aW5nIHNpbmNlIGpRdWVyeSAxLjguMFxuICAgICAgICB0aGlzLmNvcmUuJG91dGVyLmZpbmQoJy5sZy10aHVtYicpLmNzcyh7XG4gICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgtJyArICh2YWx1ZSkgKyAncHgsIDBweCwgMHB4KSdcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIFRodW1ibmFpbC5wcm90b3R5cGUuYW5pbWF0ZVRodW1iID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgdmFyICR0aHVtYiA9IHRoaXMuY29yZS4kb3V0ZXIuZmluZCgnLmxnLXRodW1iJyk7XG4gICAgICAgIGlmICh0aGlzLmNvcmUucy5hbmltYXRlVGh1bWIpIHtcbiAgICAgICAgICAgIHZhciBwb3NpdGlvbjtcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5jb3JlLnMuY3VycmVudFBhZ2VyUG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPSAwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdtaWRkbGUnOlxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA9ICh0aGlzLnRodW1iT3V0ZXJXaWR0aCAvIDIpIC0gKHRoaXMuY29yZS5zLnRodW1iV2lkdGggLyAyKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHRoaXMudGh1bWJPdXRlcldpZHRoIC0gdGhpcy5jb3JlLnMudGh1bWJXaWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubGVmdCA9ICgodGhpcy5jb3JlLnMudGh1bWJXaWR0aCArIHRoaXMuY29yZS5zLnRodW1iTWFyZ2luKSAqIGluZGV4IC0gMSkgLSBwb3NpdGlvbjtcbiAgICAgICAgICAgIGlmICh0aGlzLmxlZnQgPiAodGhpcy50aHVtYlRvdGFsV2lkdGggLSB0aGlzLnRodW1iT3V0ZXJXaWR0aCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnQgPSB0aGlzLnRodW1iVG90YWxXaWR0aCAtIHRoaXMudGh1bWJPdXRlcldpZHRoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5sZWZ0IDwgMCkge1xuICAgICAgICAgICAgICAgIHRoaXMubGVmdCA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmNvcmUubEdhbGxlcnlPbikge1xuICAgICAgICAgICAgICAgIGlmICghJHRodW1iLmhhc0NsYXNzKCdvbicpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29yZS4kb3V0ZXIuZmluZCgnLmxnLXRodW1iJykuY3NzKCd0cmFuc2l0aW9uLWR1cmF0aW9uJywgdGhpcy5jb3JlLnMuc3BlZWQgKyAnbXMnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY29yZS5kb0NzcygpKSB7XG4gICAgICAgICAgICAgICAgICAgICR0aHVtYi5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC10aGlzLmxlZnQgKyAncHgnXG4gICAgICAgICAgICAgICAgICAgIH0sIHRoaXMuY29yZS5zLnNwZWVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jb3JlLmRvQ3NzKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgJHRodW1iLmNzcygnbGVmdCcsIC10aGlzLmxlZnQgKyAncHgnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2V0VHJhbnNsYXRlKHRoaXMubGVmdCk7XG5cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBFbmFibGUgdGh1bWJuYWlsIGRyYWdnaW5nIGFuZCBzd2lwaW5nXG4gICAgVGh1bWJuYWlsLnByb3RvdHlwZS5lbmFibGVUaHVtYkRyYWcgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgc3RhcnRDb29yZHMgPSAwO1xuICAgICAgICB2YXIgZW5kQ29vcmRzID0gMDtcbiAgICAgICAgdmFyIGlzRHJhZ2luZyA9IGZhbHNlO1xuICAgICAgICB2YXIgaXNNb3ZlZCA9IGZhbHNlO1xuICAgICAgICB2YXIgdGVtcExlZnQgPSAwO1xuXG4gICAgICAgIF90aGlzLiR0aHVtYk91dGVyLmFkZENsYXNzKCdsZy1ncmFiJyk7XG5cbiAgICAgICAgX3RoaXMuY29yZS4kb3V0ZXIuZmluZCgnLmxnLXRodW1iJykub24oJ21vdXNlZG93bi5sZy50aHVtYicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy50aHVtYlRvdGFsV2lkdGggPiBfdGhpcy50aHVtYk91dGVyV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAvLyBleGVjdXRlIG9ubHkgb24gLmxnLW9iamVjdFxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBzdGFydENvb3JkcyA9IGUucGFnZVg7XG4gICAgICAgICAgICAgICAgaXNEcmFnaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIC8vICoqIEZpeCBmb3Igd2Via2l0IGN1cnNvciBpc3N1ZSBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MjY3MjNcbiAgICAgICAgICAgICAgICBfdGhpcy5jb3JlLiRvdXRlci5zY3JvbGxMZWZ0ICs9IDE7XG4gICAgICAgICAgICAgICAgX3RoaXMuY29yZS4kb3V0ZXIuc2Nyb2xsTGVmdCAtPSAxO1xuXG4gICAgICAgICAgICAgICAgLy8gKlxuICAgICAgICAgICAgICAgIF90aGlzLnRodW1iQ2xpY2thYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgX3RoaXMuJHRodW1iT3V0ZXIucmVtb3ZlQ2xhc3MoJ2xnLWdyYWInKS5hZGRDbGFzcygnbGctZ3JhYmJpbmcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdtb3VzZW1vdmUubGcudGh1bWInLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoaXNEcmFnaW5nKSB7XG4gICAgICAgICAgICAgICAgdGVtcExlZnQgPSBfdGhpcy5sZWZ0O1xuICAgICAgICAgICAgICAgIGlzTW92ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGVuZENvb3JkcyA9IGUucGFnZVg7XG5cbiAgICAgICAgICAgICAgICBfdGhpcy4kdGh1bWJPdXRlci5hZGRDbGFzcygnbGctZHJhZ2dpbmcnKTtcblxuICAgICAgICAgICAgICAgIHRlbXBMZWZ0ID0gdGVtcExlZnQgLSAoZW5kQ29vcmRzIC0gc3RhcnRDb29yZHMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRlbXBMZWZ0ID4gKF90aGlzLnRodW1iVG90YWxXaWR0aCAtIF90aGlzLnRodW1iT3V0ZXJXaWR0aCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcExlZnQgPSBfdGhpcy50aHVtYlRvdGFsV2lkdGggLSBfdGhpcy50aHVtYk91dGVyV2lkdGg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRlbXBMZWZ0IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB0ZW1wTGVmdCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gbW92ZSBjdXJyZW50IHNsaWRlXG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0VHJhbnNsYXRlKHRlbXBMZWZ0KTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKHdpbmRvdykub24oJ21vdXNldXAubGcudGh1bWInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChpc01vdmVkKSB7XG4gICAgICAgICAgICAgICAgaXNNb3ZlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIF90aGlzLiR0aHVtYk91dGVyLnJlbW92ZUNsYXNzKCdsZy1kcmFnZ2luZycpO1xuXG4gICAgICAgICAgICAgICAgX3RoaXMubGVmdCA9IHRlbXBMZWZ0O1xuXG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGVuZENvb3JkcyAtIHN0YXJ0Q29vcmRzKSA8IF90aGlzLmNvcmUucy5zd2lwZVRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy50aHVtYkNsaWNrYWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF90aGlzLnRodW1iQ2xpY2thYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlzRHJhZ2luZykge1xuICAgICAgICAgICAgICAgIGlzRHJhZ2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIF90aGlzLiR0aHVtYk91dGVyLnJlbW92ZUNsYXNzKCdsZy1ncmFiYmluZycpLmFkZENsYXNzKCdsZy1ncmFiJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIFRodW1ibmFpbC5wcm90b3R5cGUuZW5hYmxlVGh1bWJTd2lwZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgc3RhcnRDb29yZHMgPSAwO1xuICAgICAgICB2YXIgZW5kQ29vcmRzID0gMDtcbiAgICAgICAgdmFyIGlzTW92ZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIHRlbXBMZWZ0ID0gMDtcblxuICAgICAgICBfdGhpcy5jb3JlLiRvdXRlci5maW5kKCcubGctdGh1bWInKS5vbigndG91Y2hzdGFydC5sZycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy50aHVtYlRvdGFsV2lkdGggPiBfdGhpcy50aHVtYk91dGVyV2lkdGgpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgc3RhcnRDb29yZHMgPSBlLm9yaWdpbmFsRXZlbnQudGFyZ2V0VG91Y2hlc1swXS5wYWdlWDtcbiAgICAgICAgICAgICAgICBfdGhpcy50aHVtYkNsaWNrYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBfdGhpcy5jb3JlLiRvdXRlci5maW5kKCcubGctdGh1bWInKS5vbigndG91Y2htb3ZlLmxnJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYgKF90aGlzLnRodW1iVG90YWxXaWR0aCA+IF90aGlzLnRodW1iT3V0ZXJXaWR0aCkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBlbmRDb29yZHMgPSBlLm9yaWdpbmFsRXZlbnQudGFyZ2V0VG91Y2hlc1swXS5wYWdlWDtcbiAgICAgICAgICAgICAgICBpc01vdmVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIF90aGlzLiR0aHVtYk91dGVyLmFkZENsYXNzKCdsZy1kcmFnZ2luZycpO1xuXG4gICAgICAgICAgICAgICAgdGVtcExlZnQgPSBfdGhpcy5sZWZ0O1xuXG4gICAgICAgICAgICAgICAgdGVtcExlZnQgPSB0ZW1wTGVmdCAtIChlbmRDb29yZHMgLSBzdGFydENvb3Jkcyk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGVtcExlZnQgPiAoX3RoaXMudGh1bWJUb3RhbFdpZHRoIC0gX3RoaXMudGh1bWJPdXRlcldpZHRoKSkge1xuICAgICAgICAgICAgICAgICAgICB0ZW1wTGVmdCA9IF90aGlzLnRodW1iVG90YWxXaWR0aCAtIF90aGlzLnRodW1iT3V0ZXJXaWR0aDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGVtcExlZnQgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBMZWZ0ID0gMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBtb3ZlIGN1cnJlbnQgc2xpZGVcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRUcmFuc2xhdGUodGVtcExlZnQpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF90aGlzLmNvcmUuJG91dGVyLmZpbmQoJy5sZy10aHVtYicpLm9uKCd0b3VjaGVuZC5sZycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLnRodW1iVG90YWxXaWR0aCA+IF90aGlzLnRodW1iT3V0ZXJXaWR0aCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKGlzTW92ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNNb3ZlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy4kdGh1bWJPdXRlci5yZW1vdmVDbGFzcygnbGctZHJhZ2dpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGVuZENvb3JkcyAtIHN0YXJ0Q29vcmRzKSA8IF90aGlzLmNvcmUucy5zd2lwZVRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudGh1bWJDbGlja2FibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubGVmdCA9IHRlbXBMZWZ0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnRodW1iQ2xpY2thYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF90aGlzLnRodW1iQ2xpY2thYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgVGh1bWJuYWlsLnByb3RvdHlwZS50b29nbGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKF90aGlzLmNvcmUucy50b29nbGVUaHVtYikge1xuICAgICAgICAgICAgX3RoaXMuY29yZS4kb3V0ZXIuYWRkQ2xhc3MoJ2xnLWNhbi10b2dnbGUnKTtcbiAgICAgICAgICAgIF90aGlzLiR0aHVtYk91dGVyLmFwcGVuZCgnPHNwYW4gY2xhc3M9XCJsZy10b29nbGUtdGh1bWIgbGctaWNvblwiPjwvc3Bhbj4nKTtcbiAgICAgICAgICAgIF90aGlzLmNvcmUuJG91dGVyLmZpbmQoJy5sZy10b29nbGUtdGh1bWInKS5vbignY2xpY2subGcnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5jb3JlLiRvdXRlci50b2dnbGVDbGFzcygnbGctdGh1bWItb3BlbicpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgVGh1bWJuYWlsLnByb3RvdHlwZS50aHVtYmtleVByZXNzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICQod2luZG93KS5vbigna2V5ZG93bi5sZy50aHVtYicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDM4KSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIF90aGlzLmNvcmUuJG91dGVyLmFkZENsYXNzKCdsZy10aHVtYi1vcGVuJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gNDApIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgX3RoaXMuY29yZS4kb3V0ZXIucmVtb3ZlQ2xhc3MoJ2xnLXRodW1iLW9wZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIFRodW1ibmFpbC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5jb3JlLnMudGh1bWJuYWlsICYmIHRoaXMuY29yZS4kaXRlbXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgJCh3aW5kb3cpLm9mZigncmVzaXplLmxnLnRodW1iIG9yaWVudGF0aW9uY2hhbmdlLmxnLnRodW1iIGtleWRvd24ubGcudGh1bWInKTtcbiAgICAgICAgICAgIHRoaXMuJHRodW1iT3V0ZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLmNvcmUuJG91dGVyLnJlbW92ZUNsYXNzKCdsZy1oYXMtdGh1bWInKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAkLmZuLmxpZ2h0R2FsbGVyeS5tb2R1bGVzLlRodW1ibmFpbCA9IFRodW1ibmFpbDtcblxufSkoKTtcblxufSkpO1xuIiwiLyohIGxnLXpvb20gLSB2MS4xLjAgLSAyMDE3LTA4LTA4XHJcbiogaHR0cDovL3NhY2hpbmNob29sdXIuZ2l0aHViLmlvL2xpZ2h0R2FsbGVyeVxyXG4qIENvcHlyaWdodCAoYykgMjAxNyBTYWNoaW4gTjsgTGljZW5zZWQgR1BMdjMgKi9cclxuXHJcbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlIHVubGVzcyBhbWRNb2R1bGVJZCBpcyBzZXRcbiAgICBkZWZpbmUoWydqcXVlcnknXSwgZnVuY3Rpb24gKGEwKSB7XG4gICAgICByZXR1cm4gKGZhY3RvcnkoYTApKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAvLyBOb2RlLiBEb2VzIG5vdCB3b3JrIHdpdGggc3RyaWN0IENvbW1vbkpTLCBidXRcbiAgICAvLyBvbmx5IENvbW1vbkpTLWxpa2UgZW52aXJvbm1lbnRzIHRoYXQgc3VwcG9ydCBtb2R1bGUuZXhwb3J0cyxcbiAgICAvLyBsaWtlIE5vZGUuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoJ2pxdWVyeScpKTtcbiAgfSBlbHNlIHtcbiAgICBmYWN0b3J5KGpRdWVyeSk7XG4gIH1cbn0odGhpcywgZnVuY3Rpb24gKCQpIHtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIGdldFVzZUxlZnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHVzZUxlZnQgPSBmYWxzZTtcbiAgICAgICAgdmFyIGlzQ2hyb21lID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQ2hyb20oZXxpdW0pXFwvKFswLTldKylcXC4vKTtcbiAgICAgICAgaWYgKGlzQ2hyb21lICYmIHBhcnNlSW50KGlzQ2hyb21lWzJdLCAxMCkgPCA1NCkge1xuICAgICAgICAgICAgdXNlTGVmdCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdXNlTGVmdDtcbiAgICB9O1xuXG4gICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICBzY2FsZTogMSxcbiAgICAgICAgem9vbTogdHJ1ZSxcbiAgICAgICAgYWN0dWFsU2l6ZTogdHJ1ZSxcbiAgICAgICAgZW5hYmxlWm9vbUFmdGVyOiAzMDAsXG4gICAgICAgIHVzZUxlZnRGb3Jab29tOiBnZXRVc2VMZWZ0KClcbiAgICB9O1xuXG4gICAgdmFyIFpvb20gPSBmdW5jdGlvbihlbGVtZW50KSB7XG5cbiAgICAgICAgdGhpcy5jb3JlID0gJChlbGVtZW50KS5kYXRhKCdsaWdodEdhbGxlcnknKTtcblxuICAgICAgICB0aGlzLmNvcmUucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgdGhpcy5jb3JlLnMpO1xuXG4gICAgICAgIGlmICh0aGlzLmNvcmUucy56b29tICYmIHRoaXMuY29yZS5kb0NzcygpKSB7XG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcblxuICAgICAgICAgICAgLy8gU3RvcmUgdGhlIHpvb21hYmxlIHRpbWVvdXQgdmFsdWUganVzdCB0byBjbGVhciBpdCB3aGlsZSBjbG9zaW5nXG4gICAgICAgICAgICB0aGlzLnpvb21hYmxldGltZW91dCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAvLyBTZXQgdGhlIGluaXRpYWwgdmFsdWUgY2VudGVyXG4gICAgICAgICAgICB0aGlzLnBhZ2VYID0gJCh3aW5kb3cpLndpZHRoKCkgLyAyO1xuICAgICAgICAgICAgdGhpcy5wYWdlWSA9ICgkKHdpbmRvdykuaGVpZ2h0KCkgLyAyKSArICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBab29tLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHpvb21JY29ucyA9ICc8c3BhbiBpZD1cImxnLXpvb20taW5cIiBjbGFzcz1cImxnLWljb25cIj48L3NwYW4+PHNwYW4gaWQ9XCJsZy16b29tLW91dFwiIGNsYXNzPVwibGctaWNvblwiPjwvc3Bhbj4nO1xuXG4gICAgICAgIGlmIChfdGhpcy5jb3JlLnMuYWN0dWFsU2l6ZSkge1xuICAgICAgICAgICAgem9vbUljb25zICs9ICc8c3BhbiBpZD1cImxnLWFjdHVhbC1zaXplXCIgY2xhc3M9XCJsZy1pY29uXCI+PC9zcGFuPic7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX3RoaXMuY29yZS5zLnVzZUxlZnRGb3Jab29tKSB7XG4gICAgICAgICAgICBfdGhpcy5jb3JlLiRvdXRlci5hZGRDbGFzcygnbGctdXNlLWxlZnQtZm9yLXpvb20nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLmNvcmUuJG91dGVyLmFkZENsYXNzKCdsZy11c2UtdHJhbnNpdGlvbi1mb3Item9vbScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb3JlLiRvdXRlci5maW5kKCcubGctdG9vbGJhcicpLmFwcGVuZCh6b29tSWNvbnMpO1xuXG4gICAgICAgIC8vIEFkZCB6b29tYWJsZSBjbGFzc1xuICAgICAgICBfdGhpcy5jb3JlLiRlbC5vbignb25TbGlkZUl0ZW1Mb2FkLmxnLnRtLnpvb20nLCBmdW5jdGlvbihldmVudCwgaW5kZXgsIGRlbGF5KSB7XG5cbiAgICAgICAgICAgIC8vIGRlbGF5IHdpbGwgYmUgMCBleGNlcHQgZmlyc3QgdGltZVxuICAgICAgICAgICAgdmFyIF9zcGVlZCA9IF90aGlzLmNvcmUucy5lbmFibGVab29tQWZ0ZXIgKyBkZWxheTtcblxuICAgICAgICAgICAgLy8gc2V0IF9zcGVlZCB2YWx1ZSAwIGlmIGdhbGxlcnkgb3BlbmVkIGZyb20gZGlyZWN0IHVybCBhbmQgaWYgaXQgaXMgZmlyc3Qgc2xpZGVcbiAgICAgICAgICAgIGlmICgkKCdib2R5JykuaGFzQ2xhc3MoJ2xnLWZyb20taGFzaCcpICYmIGRlbGF5KSB7XG5cbiAgICAgICAgICAgICAgICAvLyB3aWxsIGV4ZWN1dGUgb25seSBvbmNlXG4gICAgICAgICAgICAgICAgX3NwZWVkID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgbGctZnJvbS1oYXNoIHRvIGVuYWJsZSBzdGFydGluZyBhbmltYXRpb24uXG4gICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdsZy1mcm9tLWhhc2gnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX3RoaXMuem9vbWFibGV0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5jb3JlLiRzbGlkZS5lcShpbmRleCkuYWRkQ2xhc3MoJ2xnLXpvb21hYmxlJyk7XG4gICAgICAgICAgICB9LCBfc3BlZWQgKyAzMCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBzY2FsZSA9IDE7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAZGVzYyBJbWFnZSB6b29tXG4gICAgICAgICAqIFRyYW5zbGF0ZSB0aGUgd3JhcCBhbmQgc2NhbGUgdGhlIGltYWdlIHRvIGdldCBiZXR0ZXIgdXNlciBleHBlcmllbmNlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzY2FsZVZhbCAtIFpvb20gZGVjcmVtZW50L2luY3JlbWVudCB2YWx1ZVxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIHpvb20gPSBmdW5jdGlvbihzY2FsZVZhbCkge1xuXG4gICAgICAgICAgICB2YXIgJGltYWdlID0gX3RoaXMuY29yZS4kb3V0ZXIuZmluZCgnLmxnLWN1cnJlbnQgLmxnLWltYWdlJyk7XG4gICAgICAgICAgICB2YXIgX3g7XG4gICAgICAgICAgICB2YXIgX3k7XG5cbiAgICAgICAgICAgIC8vIEZpbmQgb2Zmc2V0IG1hbnVhbGx5IHRvIGF2b2lkIGlzc3VlIGFmdGVyIHpvb21cbiAgICAgICAgICAgIHZhciBvZmZzZXRYID0gKCQod2luZG93KS53aWR0aCgpIC0gJGltYWdlLnByb3AoJ29mZnNldFdpZHRoJykpIC8gMjtcbiAgICAgICAgICAgIHZhciBvZmZzZXRZID0gKCgkKHdpbmRvdykuaGVpZ2h0KCkgLSAkaW1hZ2UucHJvcCgnb2Zmc2V0SGVpZ2h0JykpIC8gMikgKyAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cbiAgICAgICAgICAgIF94ID0gX3RoaXMucGFnZVggLSBvZmZzZXRYO1xuICAgICAgICAgICAgX3kgPSBfdGhpcy5wYWdlWSAtIG9mZnNldFk7XG5cbiAgICAgICAgICAgIHZhciB4ID0gKHNjYWxlVmFsIC0gMSkgKiAoX3gpO1xuICAgICAgICAgICAgdmFyIHkgPSAoc2NhbGVWYWwgLSAxKSAqIChfeSk7XG5cbiAgICAgICAgICAgICRpbWFnZS5jc3MoJ3RyYW5zZm9ybScsICdzY2FsZTNkKCcgKyBzY2FsZVZhbCArICcsICcgKyBzY2FsZVZhbCArICcsIDEpJykuYXR0cignZGF0YS1zY2FsZScsIHNjYWxlVmFsKTtcblxuICAgICAgICAgICAgaWYgKF90aGlzLmNvcmUucy51c2VMZWZ0Rm9yWm9vbSkge1xuICAgICAgICAgICAgICAgICRpbWFnZS5wYXJlbnQoKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAteCArICdweCcsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogLXkgKyAncHgnXG4gICAgICAgICAgICAgICAgfSkuYXR0cignZGF0YS14JywgeCkuYXR0cignZGF0YS15JywgeSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRpbWFnZS5wYXJlbnQoKS5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUzZCgtJyArIHggKyAncHgsIC0nICsgeSArICdweCwgMCknKS5hdHRyKCdkYXRhLXgnLCB4KS5hdHRyKCdkYXRhLXknLCB5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgY2FsbFNjYWxlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoc2NhbGUgPiAxKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuY29yZS4kb3V0ZXIuYWRkQ2xhc3MoJ2xnLXpvb21lZCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZXNldFpvb20oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNjYWxlIDwgMSkge1xuICAgICAgICAgICAgICAgIHNjYWxlID0gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgem9vbShzY2FsZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGFjdHVhbFNpemUgPSBmdW5jdGlvbihldmVudCwgJGltYWdlLCBpbmRleCwgZnJvbUljb24pIHtcbiAgICAgICAgICAgIHZhciB3ID0gJGltYWdlLnByb3AoJ29mZnNldFdpZHRoJyk7XG4gICAgICAgICAgICB2YXIgbnc7XG4gICAgICAgICAgICBpZiAoX3RoaXMuY29yZS5zLmR5bmFtaWMpIHtcbiAgICAgICAgICAgICAgICBudyA9IF90aGlzLmNvcmUucy5keW5hbWljRWxbaW5kZXhdLndpZHRoIHx8ICRpbWFnZVswXS5uYXR1cmFsV2lkdGggfHwgdztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbncgPSBfdGhpcy5jb3JlLiRpdGVtcy5lcShpbmRleCkuYXR0cignZGF0YS13aWR0aCcpIHx8ICRpbWFnZVswXS5uYXR1cmFsV2lkdGggfHwgdztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIF9zY2FsZTtcblxuICAgICAgICAgICAgaWYgKF90aGlzLmNvcmUuJG91dGVyLmhhc0NsYXNzKCdsZy16b29tZWQnKSkge1xuICAgICAgICAgICAgICAgIHNjYWxlID0gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKG53ID4gdykge1xuICAgICAgICAgICAgICAgICAgICBfc2NhbGUgPSBudyAvIHc7XG4gICAgICAgICAgICAgICAgICAgIHNjYWxlID0gX3NjYWxlIHx8IDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZnJvbUljb24pIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5wYWdlWCA9ICQod2luZG93KS53aWR0aCgpIC8gMjtcbiAgICAgICAgICAgICAgICBfdGhpcy5wYWdlWSA9ICgkKHdpbmRvdykuaGVpZ2h0KCkgLyAyKSArICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucGFnZVggPSBldmVudC5wYWdlWCB8fCBldmVudC5vcmlnaW5hbEV2ZW50LnRhcmdldFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgICAgICAgICAgX3RoaXMucGFnZVkgPSBldmVudC5wYWdlWSB8fCBldmVudC5vcmlnaW5hbEV2ZW50LnRhcmdldFRvdWNoZXNbMF0ucGFnZVk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhbGxTY2FsZSgpO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5jb3JlLiRvdXRlci5yZW1vdmVDbGFzcygnbGctZ3JhYmJpbmcnKS5hZGRDbGFzcygnbGctZ3JhYicpO1xuICAgICAgICAgICAgfSwgMTApO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciB0YXBwZWQgPSBmYWxzZTtcblxuICAgICAgICAvLyBldmVudCB0cmlnZ2VyZWQgYWZ0ZXIgYXBwZW5kaW5nIHNsaWRlIGNvbnRlbnRcbiAgICAgICAgX3RoaXMuY29yZS4kZWwub24oJ29uQWZlckFwcGVuZFNsaWRlLmxnLnRtLnpvb20nLCBmdW5jdGlvbihldmVudCwgaW5kZXgpIHtcblxuICAgICAgICAgICAgLy8gR2V0IHRoZSBjdXJyZW50IGVsZW1lbnRcbiAgICAgICAgICAgIHZhciAkaW1hZ2UgPSBfdGhpcy5jb3JlLiRzbGlkZS5lcShpbmRleCkuZmluZCgnLmxnLWltYWdlJyk7XG5cbiAgICAgICAgICAgICRpbWFnZS5vbignZGJsY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgIGFjdHVhbFNpemUoZXZlbnQsICRpbWFnZSwgaW5kZXgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICRpbWFnZS5vbigndG91Y2hzdGFydCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0YXBwZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFwcGVkID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcHBlZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRhcHBlZCk7XG4gICAgICAgICAgICAgICAgICAgIHRhcHBlZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGFjdHVhbFNpemUoZXZlbnQsICRpbWFnZSwgaW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBVcGRhdGUgem9vbSBvbiByZXNpemUgYW5kIG9yaWVudGF0aW9uY2hhbmdlXG4gICAgICAgICQod2luZG93KS5vbigncmVzaXplLmxnLnpvb20gc2Nyb2xsLmxnLnpvb20gb3JpZW50YXRpb25jaGFuZ2UubGcuem9vbScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgX3RoaXMucGFnZVggPSAkKHdpbmRvdykud2lkdGgoKSAvIDI7XG4gICAgICAgICAgICBfdGhpcy5wYWdlWSA9ICgkKHdpbmRvdykuaGVpZ2h0KCkgLyAyKSArICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgICAgICAgIHpvb20oc2NhbGUpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcjbGctem9vbS1vdXQnKS5vbignY2xpY2subGcnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5jb3JlLiRvdXRlci5maW5kKCcubGctY3VycmVudCAubGctaW1hZ2UnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzY2FsZSAtPSBfdGhpcy5jb3JlLnMuc2NhbGU7XG4gICAgICAgICAgICAgICAgY2FsbFNjYWxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJyNsZy16b29tLWluJykub24oJ2NsaWNrLmxnJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMuY29yZS4kb3V0ZXIuZmluZCgnLmxnLWN1cnJlbnQgLmxnLWltYWdlJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc2NhbGUgKz0gX3RoaXMuY29yZS5zLnNjYWxlO1xuICAgICAgICAgICAgICAgIGNhbGxTY2FsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcjbGctYWN0dWFsLXNpemUnKS5vbignY2xpY2subGcnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgYWN0dWFsU2l6ZShldmVudCwgX3RoaXMuY29yZS4kc2xpZGUuZXEoX3RoaXMuY29yZS5pbmRleCkuZmluZCgnLmxnLWltYWdlJyksIF90aGlzLmNvcmUuaW5kZXgsIHRydWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBSZXNldCB6b29tIG9uIHNsaWRlIGNoYW5nZVxuICAgICAgICBfdGhpcy5jb3JlLiRlbC5vbignb25CZWZvcmVTbGlkZS5sZy50bScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2NhbGUgPSAxO1xuICAgICAgICAgICAgX3RoaXMucmVzZXRab29tKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIERyYWcgb3B0aW9uIGFmdGVyIHpvb21cbiAgICAgICAgX3RoaXMuem9vbURyYWcoKTtcblxuICAgICAgICBfdGhpcy56b29tU3dpcGUoKTtcblxuICAgIH07XG5cbiAgICAvLyBSZXNldCB6b29tIGVmZmVjdFxuICAgIFpvb20ucHJvdG90eXBlLnJlc2V0Wm9vbSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmNvcmUuJG91dGVyLnJlbW92ZUNsYXNzKCdsZy16b29tZWQnKTtcbiAgICAgICAgdGhpcy5jb3JlLiRzbGlkZS5maW5kKCcubGctaW1nLXdyYXAnKS5yZW1vdmVBdHRyKCdzdHlsZSBkYXRhLXggZGF0YS15Jyk7XG4gICAgICAgIHRoaXMuY29yZS4kc2xpZGUuZmluZCgnLmxnLWltYWdlJykucmVtb3ZlQXR0cignc3R5bGUgZGF0YS1zY2FsZScpO1xuXG4gICAgICAgIC8vIFJlc2V0IHBhZ3ggcGFneSB2YWx1ZXMgdG8gY2VudGVyXG4gICAgICAgIHRoaXMucGFnZVggPSAkKHdpbmRvdykud2lkdGgoKSAvIDI7XG4gICAgICAgIHRoaXMucGFnZVkgPSAoJCh3aW5kb3cpLmhlaWdodCgpIC8gMikgKyAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgfTtcblxuICAgIFpvb20ucHJvdG90eXBlLnpvb21Td2lwZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgc3RhcnRDb29yZHMgPSB7fTtcbiAgICAgICAgdmFyIGVuZENvb3JkcyA9IHt9O1xuICAgICAgICB2YXIgaXNNb3ZlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIEFsbG93IHggZGlyZWN0aW9uIGRyYWdcbiAgICAgICAgdmFyIGFsbG93WCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIEFsbG93IFkgZGlyZWN0aW9uIGRyYWdcbiAgICAgICAgdmFyIGFsbG93WSA9IGZhbHNlO1xuXG4gICAgICAgIF90aGlzLmNvcmUuJHNsaWRlLm9uKCd0b3VjaHN0YXJ0LmxnJywgZnVuY3Rpb24oZSkge1xuXG4gICAgICAgICAgICBpZiAoX3RoaXMuY29yZS4kb3V0ZXIuaGFzQ2xhc3MoJ2xnLXpvb21lZCcpKSB7XG4gICAgICAgICAgICAgICAgdmFyICRpbWFnZSA9IF90aGlzLmNvcmUuJHNsaWRlLmVxKF90aGlzLmNvcmUuaW5kZXgpLmZpbmQoJy5sZy1vYmplY3QnKTtcblxuICAgICAgICAgICAgICAgIGFsbG93WSA9ICRpbWFnZS5wcm9wKCdvZmZzZXRIZWlnaHQnKSAqICRpbWFnZS5hdHRyKCdkYXRhLXNjYWxlJykgPiBfdGhpcy5jb3JlLiRvdXRlci5maW5kKCcubGcnKS5oZWlnaHQoKTtcbiAgICAgICAgICAgICAgICBhbGxvd1ggPSAkaW1hZ2UucHJvcCgnb2Zmc2V0V2lkdGgnKSAqICRpbWFnZS5hdHRyKCdkYXRhLXNjYWxlJykgPiBfdGhpcy5jb3JlLiRvdXRlci5maW5kKCcubGcnKS53aWR0aCgpO1xuICAgICAgICAgICAgICAgIGlmICgoYWxsb3dYIHx8IGFsbG93WSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBzdGFydENvb3JkcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGUub3JpZ2luYWxFdmVudC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYLFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogZS5vcmlnaW5hbEV2ZW50LnRhcmdldFRvdWNoZXNbMF0ucGFnZVlcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgX3RoaXMuY29yZS4kc2xpZGUub24oJ3RvdWNobW92ZS5sZycsIGZ1bmN0aW9uKGUpIHtcblxuICAgICAgICAgICAgaWYgKF90aGlzLmNvcmUuJG91dGVyLmhhc0NsYXNzKCdsZy16b29tZWQnKSkge1xuXG4gICAgICAgICAgICAgICAgdmFyIF8kZWwgPSBfdGhpcy5jb3JlLiRzbGlkZS5lcShfdGhpcy5jb3JlLmluZGV4KS5maW5kKCcubGctaW1nLXdyYXAnKTtcbiAgICAgICAgICAgICAgICB2YXIgZGlzdGFuY2VYO1xuICAgICAgICAgICAgICAgIHZhciBkaXN0YW5jZVk7XG5cbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgaXNNb3ZlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBlbmRDb29yZHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGUub3JpZ2luYWxFdmVudC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYLFxuICAgICAgICAgICAgICAgICAgICB5OiBlLm9yaWdpbmFsRXZlbnQudGFyZ2V0VG91Y2hlc1swXS5wYWdlWVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAvLyByZXNldCBvcGFjaXR5IGFuZCB0cmFuc2l0aW9uIGR1cmF0aW9uXG4gICAgICAgICAgICAgICAgX3RoaXMuY29yZS4kb3V0ZXIuYWRkQ2xhc3MoJ2xnLXpvb20tZHJhZ2dpbmcnKTtcblxuICAgICAgICAgICAgICAgIGlmIChhbGxvd1kpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2VZID0gKC1NYXRoLmFicyhfJGVsLmF0dHIoJ2RhdGEteScpKSkgKyAoZW5kQ29vcmRzLnkgLSBzdGFydENvb3Jkcy55KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZVkgPSAtTWF0aC5hYnMoXyRlbC5hdHRyKCdkYXRhLXknKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGFsbG93WCkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZVggPSAoLU1hdGguYWJzKF8kZWwuYXR0cignZGF0YS14JykpKSArIChlbmRDb29yZHMueCAtIHN0YXJ0Q29vcmRzLngpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlWCA9IC1NYXRoLmFicyhfJGVsLmF0dHIoJ2RhdGEteCcpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoKE1hdGguYWJzKGVuZENvb3Jkcy54IC0gc3RhcnRDb29yZHMueCkgPiAxNSkgfHwgKE1hdGguYWJzKGVuZENvb3Jkcy55IC0gc3RhcnRDb29yZHMueSkgPiAxNSkpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuY29yZS5zLnVzZUxlZnRGb3Jab29tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfJGVsLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogZGlzdGFuY2VYICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IGRpc3RhbmNlWSArICdweCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgXyRlbC5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUzZCgnICsgZGlzdGFuY2VYICsgJ3B4LCAnICsgZGlzdGFuY2VZICsgJ3B4LCAwKScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgX3RoaXMuY29yZS4kc2xpZGUub24oJ3RvdWNoZW5kLmxnJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMuY29yZS4kb3V0ZXIuaGFzQ2xhc3MoJ2xnLXpvb21lZCcpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzTW92ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNNb3ZlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jb3JlLiRvdXRlci5yZW1vdmVDbGFzcygnbGctem9vbS1kcmFnZ2luZycpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy50b3VjaGVuZFpvb20oc3RhcnRDb29yZHMsIGVuZENvb3JkcywgYWxsb3dYLCBhbGxvd1kpO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBab29tLnByb3RvdHlwZS56b29tRHJhZyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBzdGFydENvb3JkcyA9IHt9O1xuICAgICAgICB2YXIgZW5kQ29vcmRzID0ge307XG4gICAgICAgIHZhciBpc0RyYWdpbmcgPSBmYWxzZTtcbiAgICAgICAgdmFyIGlzTW92ZWQgPSBmYWxzZTtcblxuICAgICAgICAvLyBBbGxvdyB4IGRpcmVjdGlvbiBkcmFnXG4gICAgICAgIHZhciBhbGxvd1ggPSBmYWxzZTtcblxuICAgICAgICAvLyBBbGxvdyBZIGRpcmVjdGlvbiBkcmFnXG4gICAgICAgIHZhciBhbGxvd1kgPSBmYWxzZTtcblxuICAgICAgICBfdGhpcy5jb3JlLiRzbGlkZS5vbignbW91c2Vkb3duLmxnLnpvb20nLCBmdW5jdGlvbihlKSB7XG5cbiAgICAgICAgICAgIC8vIGV4ZWN1dGUgb25seSBvbiAubGctb2JqZWN0XG4gICAgICAgICAgICB2YXIgJGltYWdlID0gX3RoaXMuY29yZS4kc2xpZGUuZXEoX3RoaXMuY29yZS5pbmRleCkuZmluZCgnLmxnLW9iamVjdCcpO1xuXG4gICAgICAgICAgICBhbGxvd1kgPSAkaW1hZ2UucHJvcCgnb2Zmc2V0SGVpZ2h0JykgKiAkaW1hZ2UuYXR0cignZGF0YS1zY2FsZScpID4gX3RoaXMuY29yZS4kb3V0ZXIuZmluZCgnLmxnJykuaGVpZ2h0KCk7XG4gICAgICAgICAgICBhbGxvd1ggPSAkaW1hZ2UucHJvcCgnb2Zmc2V0V2lkdGgnKSAqICRpbWFnZS5hdHRyKCdkYXRhLXNjYWxlJykgPiBfdGhpcy5jb3JlLiRvdXRlci5maW5kKCcubGcnKS53aWR0aCgpO1xuXG4gICAgICAgICAgICBpZiAoX3RoaXMuY29yZS4kb3V0ZXIuaGFzQ2xhc3MoJ2xnLXpvb21lZCcpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKCdsZy1vYmplY3QnKSAmJiAoYWxsb3dYIHx8IGFsbG93WSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBzdGFydENvb3JkcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGUucGFnZVgsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBlLnBhZ2VZXG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgaXNEcmFnaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAqKiBGaXggZm9yIHdlYmtpdCBjdXJzb3IgaXNzdWUgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTI2NzIzXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNvcmUuJG91dGVyLnNjcm9sbExlZnQgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY29yZS4kb3V0ZXIuc2Nyb2xsTGVmdCAtPSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNvcmUuJG91dGVyLnJlbW92ZUNsYXNzKCdsZy1ncmFiJykuYWRkQ2xhc3MoJ2xnLWdyYWJiaW5nJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKHdpbmRvdykub24oJ21vdXNlbW92ZS5sZy56b29tJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYgKGlzRHJhZ2luZykge1xuICAgICAgICAgICAgICAgIHZhciBfJGVsID0gX3RoaXMuY29yZS4kc2xpZGUuZXEoX3RoaXMuY29yZS5pbmRleCkuZmluZCgnLmxnLWltZy13cmFwJyk7XG4gICAgICAgICAgICAgICAgdmFyIGRpc3RhbmNlWDtcbiAgICAgICAgICAgICAgICB2YXIgZGlzdGFuY2VZO1xuXG4gICAgICAgICAgICAgICAgaXNNb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgZW5kQ29vcmRzID0ge1xuICAgICAgICAgICAgICAgICAgICB4OiBlLnBhZ2VYLFxuICAgICAgICAgICAgICAgICAgICB5OiBlLnBhZ2VZXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8vIHJlc2V0IG9wYWNpdHkgYW5kIHRyYW5zaXRpb24gZHVyYXRpb25cbiAgICAgICAgICAgICAgICBfdGhpcy5jb3JlLiRvdXRlci5hZGRDbGFzcygnbGctem9vbS1kcmFnZ2luZycpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGFsbG93WSkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZVkgPSAoLU1hdGguYWJzKF8kZWwuYXR0cignZGF0YS15JykpKSArIChlbmRDb29yZHMueSAtIHN0YXJ0Q29vcmRzLnkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlWSA9IC1NYXRoLmFicyhfJGVsLmF0dHIoJ2RhdGEteScpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoYWxsb3dYKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlWCA9ICgtTWF0aC5hYnMoXyRlbC5hdHRyKCdkYXRhLXgnKSkpICsgKGVuZENvb3Jkcy54IC0gc3RhcnRDb29yZHMueCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2VYID0gLU1hdGguYWJzKF8kZWwuYXR0cignZGF0YS14JykpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5jb3JlLnMudXNlTGVmdEZvclpvb20pIHtcbiAgICAgICAgICAgICAgICAgICAgXyRlbC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogZGlzdGFuY2VYICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogZGlzdGFuY2VZICsgJ3B4J1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfJGVsLmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZTNkKCcgKyBkaXN0YW5jZVggKyAncHgsICcgKyBkaXN0YW5jZVkgKyAncHgsIDApJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKHdpbmRvdykub24oJ21vdXNldXAubGcuem9vbScsIGZ1bmN0aW9uKGUpIHtcblxuICAgICAgICAgICAgaWYgKGlzRHJhZ2luZykge1xuICAgICAgICAgICAgICAgIGlzRHJhZ2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIF90aGlzLmNvcmUuJG91dGVyLnJlbW92ZUNsYXNzKCdsZy16b29tLWRyYWdnaW5nJyk7XG5cbiAgICAgICAgICAgICAgICAvLyBGaXggZm9yIGNocm9tZSBtb3VzZSBtb3ZlIG9uIGNsaWNrXG4gICAgICAgICAgICAgICAgaWYgKGlzTW92ZWQgJiYgKChzdGFydENvb3Jkcy54ICE9PSBlbmRDb29yZHMueCkgfHwgKHN0YXJ0Q29vcmRzLnkgIT09IGVuZENvb3Jkcy55KSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZW5kQ29vcmRzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogZS5wYWdlWCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGUucGFnZVlcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudG91Y2hlbmRab29tKHN0YXJ0Q29vcmRzLCBlbmRDb29yZHMsIGFsbG93WCwgYWxsb3dZKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlzTW92ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX3RoaXMuY29yZS4kb3V0ZXIucmVtb3ZlQ2xhc3MoJ2xnLWdyYWJiaW5nJykuYWRkQ2xhc3MoJ2xnLWdyYWInKTtcblxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgWm9vbS5wcm90b3R5cGUudG91Y2hlbmRab29tID0gZnVuY3Rpb24oc3RhcnRDb29yZHMsIGVuZENvb3JkcywgYWxsb3dYLCBhbGxvd1kpIHtcblxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgXyRlbCA9IF90aGlzLmNvcmUuJHNsaWRlLmVxKF90aGlzLmNvcmUuaW5kZXgpLmZpbmQoJy5sZy1pbWctd3JhcCcpO1xuICAgICAgICB2YXIgJGltYWdlID0gX3RoaXMuY29yZS4kc2xpZGUuZXEoX3RoaXMuY29yZS5pbmRleCkuZmluZCgnLmxnLW9iamVjdCcpO1xuICAgICAgICB2YXIgZGlzdGFuY2VYID0gKC1NYXRoLmFicyhfJGVsLmF0dHIoJ2RhdGEteCcpKSkgKyAoZW5kQ29vcmRzLnggLSBzdGFydENvb3Jkcy54KTtcbiAgICAgICAgdmFyIGRpc3RhbmNlWSA9ICgtTWF0aC5hYnMoXyRlbC5hdHRyKCdkYXRhLXknKSkpICsgKGVuZENvb3Jkcy55IC0gc3RhcnRDb29yZHMueSk7XG4gICAgICAgIHZhciBtaW5ZID0gKF90aGlzLmNvcmUuJG91dGVyLmZpbmQoJy5sZycpLmhlaWdodCgpIC0gJGltYWdlLnByb3AoJ29mZnNldEhlaWdodCcpKSAvIDI7XG4gICAgICAgIHZhciBtYXhZID0gTWF0aC5hYnMoKCRpbWFnZS5wcm9wKCdvZmZzZXRIZWlnaHQnKSAqIE1hdGguYWJzKCRpbWFnZS5hdHRyKCdkYXRhLXNjYWxlJykpKSAtIF90aGlzLmNvcmUuJG91dGVyLmZpbmQoJy5sZycpLmhlaWdodCgpICsgbWluWSk7XG4gICAgICAgIHZhciBtaW5YID0gKF90aGlzLmNvcmUuJG91dGVyLmZpbmQoJy5sZycpLndpZHRoKCkgLSAkaW1hZ2UucHJvcCgnb2Zmc2V0V2lkdGgnKSkgLyAyO1xuICAgICAgICB2YXIgbWF4WCA9IE1hdGguYWJzKCgkaW1hZ2UucHJvcCgnb2Zmc2V0V2lkdGgnKSAqIE1hdGguYWJzKCRpbWFnZS5hdHRyKCdkYXRhLXNjYWxlJykpKSAtIF90aGlzLmNvcmUuJG91dGVyLmZpbmQoJy5sZycpLndpZHRoKCkgKyBtaW5YKTtcblxuICAgICAgICBpZiAoKE1hdGguYWJzKGVuZENvb3Jkcy54IC0gc3RhcnRDb29yZHMueCkgPiAxNSkgfHwgKE1hdGguYWJzKGVuZENvb3Jkcy55IC0gc3RhcnRDb29yZHMueSkgPiAxNSkpIHtcbiAgICAgICAgICAgIGlmIChhbGxvd1kpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2VZIDw9IC1tYXhZKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlWSA9IC1tYXhZO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlzdGFuY2VZID49IC1taW5ZKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlWSA9IC1taW5ZO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGFsbG93WCkge1xuICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZVggPD0gLW1heFgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2VYID0gLW1heFg7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkaXN0YW5jZVggPj0gLW1pblgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2VYID0gLW1pblg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYWxsb3dZKSB7XG4gICAgICAgICAgICAgICAgXyRlbC5hdHRyKCdkYXRhLXknLCBNYXRoLmFicyhkaXN0YW5jZVkpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGlzdGFuY2VZID0gLU1hdGguYWJzKF8kZWwuYXR0cignZGF0YS15JykpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYWxsb3dYKSB7XG4gICAgICAgICAgICAgICAgXyRlbC5hdHRyKCdkYXRhLXgnLCBNYXRoLmFicyhkaXN0YW5jZVgpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGlzdGFuY2VYID0gLU1hdGguYWJzKF8kZWwuYXR0cignZGF0YS14JykpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoX3RoaXMuY29yZS5zLnVzZUxlZnRGb3Jab29tKSB7XG4gICAgICAgICAgICAgICAgXyRlbC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBkaXN0YW5jZVggKyAncHgnLFxuICAgICAgICAgICAgICAgICAgICB0b3A6IGRpc3RhbmNlWSArICdweCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgXyRlbC5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUzZCgnICsgZGlzdGFuY2VYICsgJ3B4LCAnICsgZGlzdGFuY2VZICsgJ3B4LCAwKScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgWm9vbS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgLy8gVW5iaW5kIGFsbCBldmVudHMgYWRkZWQgYnkgbGlnaHRHYWxsZXJ5IHpvb20gcGx1Z2luXG4gICAgICAgIF90aGlzLmNvcmUuJGVsLm9mZignLmxnLnpvb20nKTtcbiAgICAgICAgJCh3aW5kb3cpLm9mZignLmxnLnpvb20nKTtcbiAgICAgICAgX3RoaXMuY29yZS4kc2xpZGUub2ZmKCcubGcuem9vbScpO1xuICAgICAgICBfdGhpcy5jb3JlLiRlbC5vZmYoJy5sZy50bS56b29tJyk7XG4gICAgICAgIF90aGlzLnJlc2V0Wm9vbSgpO1xuICAgICAgICBjbGVhclRpbWVvdXQoX3RoaXMuem9vbWFibGV0aW1lb3V0KTtcbiAgICAgICAgX3RoaXMuem9vbWFibGV0aW1lb3V0ID0gZmFsc2U7XG4gICAgfTtcblxuICAgICQuZm4ubGlnaHRHYWxsZXJ5Lm1vZHVsZXMuem9vbSA9IFpvb207XG5cbn0pKCk7XG5cblxufSkpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL2ZvbnRzL2xnLmVvdFwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9mb250cy9sZy5lb3RcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvZm9udHMvbGcuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL2ZvbnRzL2xnLnR0ZlwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9mb250cy9sZy53b2ZmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL2ltZy9sb2FkaW5nLmdpZlwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9pbWcvdmlkZW8tcGxheS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvaW1nL3ZpbWVvLXBsYXkucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL2ltZy95b3V0dWJlLXBsYXkucG5nXCI7IiwiLyohIGxpZ2h0Z2FsbGVyeSAtIHYxLjYuMTEgLSAyMDE4LTA1LTIyXG4qIGh0dHA6Ly9zYWNoaW5jaG9vbHVyLmdpdGh1Yi5pby9saWdodEdhbGxlcnkvXG4qIENvcHlyaWdodCAoYykgMjAxOCBTYWNoaW4gTjsgTGljZW5zZWQgR1BMdjMgKi9cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlIHVubGVzcyBhbWRNb2R1bGVJZCBpcyBzZXRcbiAgICBkZWZpbmUoWydqcXVlcnknXSwgZnVuY3Rpb24gKGEwKSB7XG4gICAgICByZXR1cm4gKGZhY3RvcnkoYTApKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgIC8vIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMsIGJ1dFxuICAgIC8vIG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLFxuICAgIC8vIGxpa2UgTm9kZS5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JykpO1xuICB9IGVsc2Uge1xuICAgIGZhY3Rvcnkocm9vdFtcImpRdWVyeVwiXSk7XG4gIH1cbn0odGhpcywgZnVuY3Rpb24gKCQpIHtcblxuKGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBkZWZhdWx0cyA9IHtcblxuICAgICAgICBtb2RlOiAnbGctc2xpZGUnLFxuXG4gICAgICAgIC8vIEV4IDogJ2Vhc2UnXG4gICAgICAgIGNzc0Vhc2luZzogJ2Vhc2UnLFxuXG4gICAgICAgIC8vJ2ZvciBqcXVlcnkgYW5pbWF0aW9uJ1xuICAgICAgICBlYXNpbmc6ICdsaW5lYXInLFxuICAgICAgICBzcGVlZDogNjAwLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgYWRkQ2xhc3M6ICcnLFxuICAgICAgICBzdGFydENsYXNzOiAnbGctc3RhcnQtem9vbScsXG4gICAgICAgIGJhY2tkcm9wRHVyYXRpb246IDE1MCxcbiAgICAgICAgaGlkZUJhcnNEZWxheTogNjAwMCxcblxuICAgICAgICB1c2VMZWZ0OiBmYWxzZSxcblxuICAgICAgICBjbG9zYWJsZTogdHJ1ZSxcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgZXNjS2V5OiB0cnVlLFxuICAgICAgICBrZXlQcmVzczogdHJ1ZSxcbiAgICAgICAgY29udHJvbHM6IHRydWUsXG4gICAgICAgIHNsaWRlRW5kQW5pbWF0b2luOiB0cnVlLFxuICAgICAgICBoaWRlQ29udHJvbE9uRW5kOiBmYWxzZSxcbiAgICAgICAgbW91c2V3aGVlbDogdHJ1ZSxcblxuICAgICAgICBnZXRDYXB0aW9uRnJvbVRpdGxlT3JBbHQ6IHRydWUsXG5cbiAgICAgICAgLy8gLmxnLWl0ZW0gfHwgJy5sZy1zdWItaHRtbCdcbiAgICAgICAgYXBwZW5kU3ViSHRtbFRvOiAnLmxnLXN1Yi1odG1sJyxcblxuICAgICAgICBzdWJIdG1sU2VsZWN0b3JSZWxhdGl2ZTogZmFsc2UsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBkZXNjIG51bWJlciBvZiBwcmVsb2FkIHNsaWRlc1xuICAgICAgICAgKiB3aWxsIGV4aWN1dGUgb25seSBhZnRlciB0aGUgY3VycmVudCBzbGlkZSBpcyBmdWxseSBsb2FkZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBleCB5b3UgY2xpY2tlZCBvbiA0dGggaW1hZ2UgYW5kIGlmIHByZWxvYWQgPSAxIHRoZW4gM3JkIHNsaWRlIGFuZCA1dGhcbiAgICAgICAgICogc2xpZGUgd2lsbCBiZSBsb2FkZWQgaW4gdGhlIGJhY2tncm91bmQgYWZ0ZXIgdGhlIDR0aCBzbGlkZSBpcyBmdWxseSBsb2FkZWQuLlxuICAgICAgICAgKiBpZiBwcmVsb2FkIGlzIDIgdGhlbiAybmQgM3JkIDV0aCA2dGggc2xpZGVzIHdpbGwgYmUgcHJlbG9hZGVkLi4gLi4uIC4uLlxuICAgICAgICAgKlxuICAgICAgICAgKi9cbiAgICAgICAgcHJlbG9hZDogMSxcbiAgICAgICAgc2hvd0FmdGVyTG9hZDogdHJ1ZSxcbiAgICAgICAgc2VsZWN0b3I6ICcnLFxuICAgICAgICBzZWxlY3RXaXRoaW46ICcnLFxuICAgICAgICBuZXh0SHRtbDogJycsXG4gICAgICAgIHByZXZIdG1sOiAnJyxcblxuICAgICAgICAvLyAwLCAxXG4gICAgICAgIGluZGV4OiBmYWxzZSxcblxuICAgICAgICBpZnJhbWVNYXhXaWR0aDogJzEwMCUnLFxuXG4gICAgICAgIGRvd25sb2FkOiB0cnVlLFxuICAgICAgICBjb3VudGVyOiB0cnVlLFxuICAgICAgICBhcHBlbmRDb3VudGVyVG86ICcubGctdG9vbGJhcicsXG5cbiAgICAgICAgc3dpcGVUaHJlc2hvbGQ6IDUwLFxuICAgICAgICBlbmFibGVTd2lwZTogdHJ1ZSxcbiAgICAgICAgZW5hYmxlRHJhZzogdHJ1ZSxcblxuICAgICAgICBkeW5hbWljOiBmYWxzZSxcbiAgICAgICAgZHluYW1pY0VsOiBbXSxcbiAgICAgICAgZ2FsbGVyeUlkOiAxXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIFBsdWdpbihlbGVtZW50LCBvcHRpb25zKSB7XG5cbiAgICAgICAgLy8gQ3VycmVudCBsaWdodEdhbGxlcnkgZWxlbWVudFxuICAgICAgICB0aGlzLmVsID0gZWxlbWVudDtcblxuICAgICAgICAvLyBDdXJyZW50IGpxdWVyeSBlbGVtZW50XG4gICAgICAgIHRoaXMuJGVsID0gJChlbGVtZW50KTtcblxuICAgICAgICAvLyBsaWdodEdhbGxlcnkgc2V0dGluZ3NcbiAgICAgICAgdGhpcy5zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgICAvLyBXaGVuIHVzaW5nIGR5bmFtaWMgbW9kZSwgZW5zdXJlIGR5bmFtaWNFbCBpcyBhbiBhcnJheVxuICAgICAgICBpZiAodGhpcy5zLmR5bmFtaWMgJiYgdGhpcy5zLmR5bmFtaWNFbCAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5zLmR5bmFtaWNFbC5jb25zdHJ1Y3RvciA9PT0gQXJyYXkgJiYgIXRoaXMucy5keW5hbWljRWwubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyAoJ1doZW4gdXNpbmcgZHluYW1pYyBtb2RlLCB5b3UgbXVzdCBhbHNvIGRlZmluZSBkeW5hbWljRWwgYXMgYW4gQXJyYXkuJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBsaWdodEdhbGxlcnkgbW9kdWxlc1xuICAgICAgICB0aGlzLm1vZHVsZXMgPSB7fTtcblxuICAgICAgICAvLyBmYWxzZSB3aGVuIGxpZ2h0Z2FsbGVyeSBjb21wbGV0ZSBmaXJzdCBzbGlkZTtcbiAgICAgICAgdGhpcy5sR2FsbGVyeU9uID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5sZ0J1c3kgPSBmYWxzZTtcblxuICAgICAgICAvLyBUaW1lb3V0IGZ1bmN0aW9uIGZvciBoaWRpbmcgY29udHJvbHM7XG4gICAgICAgIHRoaXMuaGlkZUJhcnRpbWVvdXQgPSBmYWxzZTtcblxuICAgICAgICAvLyBUbyBkZXRlcm1pbmUgYnJvd3NlciBzdXBwb3J0cyBmb3IgdG91Y2ggZXZlbnRzO1xuICAgICAgICB0aGlzLmlzVG91Y2ggPSAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcblxuICAgICAgICAvLyBEaXNhYmxlIGhpZGVDb250cm9sT25FbmQgaWYgc2lsZGVFbmRBbmltYXRpb24gaXMgdHJ1ZVxuICAgICAgICBpZiAodGhpcy5zLnNsaWRlRW5kQW5pbWF0b2luKSB7XG4gICAgICAgICAgICB0aGlzLnMuaGlkZUNvbnRyb2xPbkVuZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gR2FsbGVyeSBpdGVtc1xuICAgICAgICBpZiAodGhpcy5zLmR5bmFtaWMpIHtcbiAgICAgICAgICAgIHRoaXMuJGl0ZW1zID0gdGhpcy5zLmR5bmFtaWNFbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnMuc2VsZWN0b3IgPT09ICd0aGlzJykge1xuICAgICAgICAgICAgICAgIHRoaXMuJGl0ZW1zID0gdGhpcy4kZWw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucy5zZWxlY3RvciAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zLnNlbGVjdFdpdGhpbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRpdGVtcyA9ICQodGhpcy5zLnNlbGVjdFdpdGhpbikuZmluZCh0aGlzLnMuc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGl0ZW1zID0gdGhpcy4kZWwuZmluZCgkKHRoaXMucy5zZWxlY3RvcikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kaXRlbXMgPSB0aGlzLiRlbC5jaGlsZHJlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gLmxnLWl0ZW1cbiAgICAgICAgdGhpcy4kc2xpZGUgPSAnJztcblxuICAgICAgICAvLyAubGctb3V0ZXJcbiAgICAgICAgdGhpcy4kb3V0ZXIgPSAnJztcblxuICAgICAgICB0aGlzLmluaXQoKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBQbHVnaW4ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIC8vIHMucHJlbG9hZCBzaG91bGQgbm90IGJlIG1vcmUgdGhhbiAkaXRlbS5sZW5ndGhcbiAgICAgICAgaWYgKF90aGlzLnMucHJlbG9hZCA+IF90aGlzLiRpdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIF90aGlzLnMucHJlbG9hZCA9IF90aGlzLiRpdGVtcy5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBkeW5hbWljIG9wdGlvbiBpcyBlbmFibGVkIGV4ZWN1dGUgaW1tZWRpYXRlbHlcbiAgICAgICAgdmFyIF9oYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG4gICAgICAgIGlmIChfaGFzaC5pbmRleE9mKCdsZz0nICsgdGhpcy5zLmdhbGxlcnlJZCkgPiAwKSB7XG5cbiAgICAgICAgICAgIF90aGlzLmluZGV4ID0gcGFyc2VJbnQoX2hhc2guc3BsaXQoJyZzbGlkZT0nKVsxXSwgMTApO1xuXG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2xnLWZyb20taGFzaCcpO1xuICAgICAgICAgICAgaWYgKCEkKCdib2R5JykuaGFzQ2xhc3MoJ2xnLW9uJykpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5idWlsZChfdGhpcy5pbmRleCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2xnLW9uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX3RoaXMucy5keW5hbWljKSB7XG5cbiAgICAgICAgICAgIF90aGlzLiRlbC50cmlnZ2VyKCdvbkJlZm9yZU9wZW4ubGcnKTtcblxuICAgICAgICAgICAgX3RoaXMuaW5kZXggPSBfdGhpcy5zLmluZGV4IHx8IDA7XG5cbiAgICAgICAgICAgIC8vIHByZXZlbnQgYWNjaWRlbnRhbCBkb3VibGUgZXhlY3V0aW9uXG4gICAgICAgICAgICBpZiAoISQoJ2JvZHknKS5oYXNDbGFzcygnbGctb24nKSkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmJ1aWxkKF90aGlzLmluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdsZy1vbicpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAvLyBVc2luZyBkaWZmZXJlbnQgbmFtZXNwYWNlIGZvciBjbGljayBiZWNhdXNlIGNsaWNrIGV2ZW50IHNob3VsZCBub3QgdW5iaW5kIGlmIHNlbGVjdG9yIGlzIHNhbWUgb2JqZWN0KCd0aGlzJylcbiAgICAgICAgICAgIF90aGlzLiRpdGVtcy5vbignY2xpY2subGdjdXN0b20nLCBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgICAgICAgICAgLy8gRm9yIElFOFxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBfdGhpcy4kZWwudHJpZ2dlcignb25CZWZvcmVPcGVuLmxnJyk7XG5cbiAgICAgICAgICAgICAgICBfdGhpcy5pbmRleCA9IF90aGlzLnMuaW5kZXggfHwgX3RoaXMuJGl0ZW1zLmluZGV4KHRoaXMpO1xuXG4gICAgICAgICAgICAgICAgLy8gcHJldmVudCBhY2NpZGVudGFsIGRvdWJsZSBleGVjdXRpb25cbiAgICAgICAgICAgICAgICBpZiAoISQoJ2JvZHknKS5oYXNDbGFzcygnbGctb24nKSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5idWlsZChfdGhpcy5pbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnbGctb24nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFBsdWdpbi5wcm90b3R5cGUuYnVpbGQgPSBmdW5jdGlvbihpbmRleCkge1xuXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgX3RoaXMuc3RydWN0dXJlKCk7XG5cbiAgICAgICAgLy8gbW9kdWxlIGNvbnN0cnVjdG9yXG4gICAgICAgICQuZWFjaCgkLmZuLmxpZ2h0R2FsbGVyeS5tb2R1bGVzLCBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIF90aGlzLm1vZHVsZXNba2V5XSA9IG5ldyAkLmZuLmxpZ2h0R2FsbGVyeS5tb2R1bGVzW2tleV0oX3RoaXMuZWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBpbml0aWF0ZSBzbGlkZSBmdW5jdGlvblxuICAgICAgICBfdGhpcy5zbGlkZShpbmRleCwgZmFsc2UsIGZhbHNlLCBmYWxzZSk7XG5cbiAgICAgICAgaWYgKF90aGlzLnMua2V5UHJlc3MpIHtcbiAgICAgICAgICAgIF90aGlzLmtleVByZXNzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX3RoaXMuJGl0ZW1zLmxlbmd0aCA+IDEpIHtcblxuICAgICAgICAgICAgX3RoaXMuYXJyb3coKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5lbmFibGVEcmFnKCk7XG4gICAgICAgICAgICAgICAgX3RoaXMuZW5hYmxlU3dpcGUoKTtcbiAgICAgICAgICAgIH0sIDUwKTtcblxuICAgICAgICAgICAgaWYgKF90aGlzLnMubW91c2V3aGVlbCkge1xuICAgICAgICAgICAgICAgIF90aGlzLm1vdXNld2hlZWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLiRzbGlkZS5vbignY2xpY2subGcnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy4kZWwudHJpZ2dlcignb25TbGlkZUNsaWNrLmxnJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLmNvdW50ZXIoKTtcblxuICAgICAgICBfdGhpcy5jbG9zZUdhbGxlcnkoKTtcblxuICAgICAgICBfdGhpcy4kZWwudHJpZ2dlcignb25BZnRlck9wZW4ubGcnKTtcblxuICAgICAgICAvLyBIaWRlIGNvbnRyb2xsZXJzIGlmIG1vdXNlIGRvZXNuJ3QgbW92ZSBmb3Igc29tZSBwZXJpb2RcbiAgICAgICAgX3RoaXMuJG91dGVyLm9uKCdtb3VzZW1vdmUubGcgY2xpY2subGcgdG91Y2hzdGFydC5sZycsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBfdGhpcy4kb3V0ZXIucmVtb3ZlQ2xhc3MoJ2xnLWhpZGUtaXRlbXMnKTtcblxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF90aGlzLmhpZGVCYXJ0aW1lb3V0KTtcblxuICAgICAgICAgICAgLy8gVGltZW91dCB3aWxsIGJlIGNsZWFyZWQgb24gZWFjaCBzbGlkZSBtb3ZlbWVudCBhbHNvXG4gICAgICAgICAgICBfdGhpcy5oaWRlQmFydGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuJG91dGVyLmFkZENsYXNzKCdsZy1oaWRlLWl0ZW1zJyk7XG4gICAgICAgICAgICB9LCBfdGhpcy5zLmhpZGVCYXJzRGVsYXkpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIF90aGlzLiRvdXRlci50cmlnZ2VyKCdtb3VzZW1vdmUubGcnKTtcblxuICAgIH07XG5cbiAgICBQbHVnaW4ucHJvdG90eXBlLnN0cnVjdHVyZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbGlzdCA9ICcnO1xuICAgICAgICB2YXIgY29udHJvbHMgPSAnJztcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgc3ViSHRtbENvbnQgPSAnJztcbiAgICAgICAgdmFyIHRlbXBsYXRlO1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICQoJ2JvZHknKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJsZy1iYWNrZHJvcFwiPjwvZGl2PicpO1xuICAgICAgICAkKCcubGctYmFja2Ryb3AnKS5jc3MoJ3RyYW5zaXRpb24tZHVyYXRpb24nLCB0aGlzLnMuYmFja2Ryb3BEdXJhdGlvbiArICdtcycpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBnYWxsZXJ5IGl0ZW1zXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLiRpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGlzdCArPSAnPGRpdiBjbGFzcz1cImxnLWl0ZW1cIj48L2Rpdj4nO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ3JlYXRlIGNvbnRyb2xsc1xuICAgICAgICBpZiAodGhpcy5zLmNvbnRyb2xzICYmIHRoaXMuJGl0ZW1zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGNvbnRyb2xzID0gJzxkaXYgY2xhc3M9XCJsZy1hY3Rpb25zXCI+JyArXG4gICAgICAgICAgICAgICAgJzxidXR0b24gY2xhc3M9XCJsZy1wcmV2IGxnLWljb25cIj4nICsgdGhpcy5zLnByZXZIdG1sICsgJzwvYnV0dG9uPicgK1xuICAgICAgICAgICAgICAgICc8YnV0dG9uIGNsYXNzPVwibGctbmV4dCBsZy1pY29uXCI+JyArIHRoaXMucy5uZXh0SHRtbCArICc8L2J1dHRvbj4nICtcbiAgICAgICAgICAgICAgICAnPC9kaXY+JztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnMuYXBwZW5kU3ViSHRtbFRvID09PSAnLmxnLXN1Yi1odG1sJykge1xuICAgICAgICAgICAgc3ViSHRtbENvbnQgPSAnPGRpdiBjbGFzcz1cImxnLXN1Yi1odG1sXCI+PC9kaXY+JztcbiAgICAgICAgfVxuXG4gICAgICAgIHRlbXBsYXRlID0gJzxkaXYgY2xhc3M9XCJsZy1vdXRlciAnICsgdGhpcy5zLmFkZENsYXNzICsgJyAnICsgdGhpcy5zLnN0YXJ0Q2xhc3MgKyAnXCI+JyArXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cImxnXCIgc3R5bGU9XCJ3aWR0aDonICsgdGhpcy5zLndpZHRoICsgJzsgaGVpZ2h0OicgKyB0aGlzLnMuaGVpZ2h0ICsgJ1wiPicgK1xuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJsZy1pbm5lclwiPicgKyBsaXN0ICsgJzwvZGl2PicgK1xuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJsZy10b29sYmFyIGxnLWdyb3VwXCI+JyArXG4gICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJsZy1jbG9zZSBsZy1pY29uXCI+PC9zcGFuPicgK1xuICAgICAgICAgICAgJzwvZGl2PicgK1xuICAgICAgICAgICAgY29udHJvbHMgK1xuICAgICAgICAgICAgc3ViSHRtbENvbnQgK1xuICAgICAgICAgICAgJzwvZGl2PicgK1xuICAgICAgICAgICAgJzwvZGl2Pic7XG5cbiAgICAgICAgJCgnYm9keScpLmFwcGVuZCh0ZW1wbGF0ZSk7XG4gICAgICAgIHRoaXMuJG91dGVyID0gJCgnLmxnLW91dGVyJyk7XG4gICAgICAgIHRoaXMuJHNsaWRlID0gdGhpcy4kb3V0ZXIuZmluZCgnLmxnLWl0ZW0nKTtcblxuICAgICAgICBpZiAodGhpcy5zLnVzZUxlZnQpIHtcbiAgICAgICAgICAgIHRoaXMuJG91dGVyLmFkZENsYXNzKCdsZy11c2UtbGVmdCcpO1xuXG4gICAgICAgICAgICAvLyBTZXQgbW9kZSBsZy1zbGlkZSBpZiB1c2UgbGVmdCBpcyB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zLm1vZGUgPSAnbGctc2xpZGUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kb3V0ZXIuYWRkQ2xhc3MoJ2xnLXVzZS1jc3MzJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGb3IgZml4ZWQgaGVpZ2h0IGdhbGxlcnlcbiAgICAgICAgX3RoaXMuc2V0VG9wKCk7XG4gICAgICAgICQod2luZG93KS5vbigncmVzaXplLmxnIG9yaWVudGF0aW9uY2hhbmdlLmxnJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnNldFRvcCgpO1xuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gYWRkIGNsYXNzIGxnLWN1cnJlbnQgdG8gcmVtb3ZlIGluaXRpYWwgdHJhbnNpdGlvblxuICAgICAgICB0aGlzLiRzbGlkZS5lcSh0aGlzLmluZGV4KS5hZGRDbGFzcygnbGctY3VycmVudCcpO1xuXG4gICAgICAgIC8vIGFkZCBDbGFzcyBmb3IgY3NzIHN1cHBvcnQgYW5kIHRyYW5zaXRpb24gbW9kZVxuICAgICAgICBpZiAodGhpcy5kb0NzcygpKSB7XG4gICAgICAgICAgICB0aGlzLiRvdXRlci5hZGRDbGFzcygnbGctY3NzMycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kb3V0ZXIuYWRkQ2xhc3MoJ2xnLWNzcycpO1xuXG4gICAgICAgICAgICAvLyBTZXQgc3BlZWQgMCBiZWNhdXNlIG5vIGFuaW1hdGlvbiB3aWxsIGhhcHBlbiBpZiBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBjc3MzXG4gICAgICAgICAgICB0aGlzLnMuc3BlZWQgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kb3V0ZXIuYWRkQ2xhc3ModGhpcy5zLm1vZGUpO1xuXG4gICAgICAgIGlmICh0aGlzLnMuZW5hYmxlRHJhZyAmJiB0aGlzLiRpdGVtcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0aGlzLiRvdXRlci5hZGRDbGFzcygnbGctZ3JhYicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucy5zaG93QWZ0ZXJMb2FkKSB7XG4gICAgICAgICAgICB0aGlzLiRvdXRlci5hZGRDbGFzcygnbGctc2hvdy1hZnRlci1sb2FkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kb0NzcygpKSB7XG4gICAgICAgICAgICB2YXIgJGlubmVyID0gdGhpcy4kb3V0ZXIuZmluZCgnLmxnLWlubmVyJyk7XG4gICAgICAgICAgICAkaW5uZXIuY3NzKCd0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbicsIHRoaXMucy5jc3NFYXNpbmcpO1xuICAgICAgICAgICAgJGlubmVyLmNzcygndHJhbnNpdGlvbi1kdXJhdGlvbicsIHRoaXMucy5zcGVlZCArICdtcycpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoJy5sZy1iYWNrZHJvcCcpLmFkZENsYXNzKCdpbicpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgX3RoaXMuJG91dGVyLmFkZENsYXNzKCdsZy12aXNpYmxlJyk7XG4gICAgICAgIH0sIHRoaXMucy5iYWNrZHJvcER1cmF0aW9uKTtcblxuICAgICAgICBpZiAodGhpcy5zLmRvd25sb2FkKSB7XG4gICAgICAgICAgICB0aGlzLiRvdXRlci5maW5kKCcubGctdG9vbGJhcicpLmFwcGVuZCgnPGEgaWQ9XCJsZy1kb3dubG9hZFwiIHRhcmdldD1cIl9ibGFua1wiIGRvd25sb2FkIGNsYXNzPVwibGctZG93bmxvYWQgbGctaWNvblwiPjwvYT4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFN0b3JlIHRoZSBjdXJyZW50IHNjcm9sbCB0b3AgdmFsdWUgdG8gc2Nyb2xsIGJhY2sgYWZ0ZXIgY2xvc2luZyB0aGUgZ2FsbGVyeS4uXG4gICAgICAgIHRoaXMucHJldlNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuICAgIH07XG5cbiAgICAvLyBGb3IgZml4ZWQgaGVpZ2h0IGdhbGxlcnlcbiAgICBQbHVnaW4ucHJvdG90eXBlLnNldFRvcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5zLmhlaWdodCAhPT0gJzEwMCUnKSB7XG4gICAgICAgICAgICB2YXIgd0ggPSAkKHdpbmRvdykuaGVpZ2h0KCk7XG4gICAgICAgICAgICB2YXIgdG9wID0gKHdIIC0gcGFyc2VJbnQodGhpcy5zLmhlaWdodCwgMTApKSAvIDI7XG4gICAgICAgICAgICB2YXIgJGxHYWxsZXJ5ID0gdGhpcy4kb3V0ZXIuZmluZCgnLmxnJyk7XG4gICAgICAgICAgICBpZiAod0ggPj0gcGFyc2VJbnQodGhpcy5zLmhlaWdodCwgMTApKSB7XG4gICAgICAgICAgICAgICAgJGxHYWxsZXJ5LmNzcygndG9wJywgdG9wICsgJ3B4Jyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRsR2FsbGVyeS5jc3MoJ3RvcCcsICcwcHgnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBGaW5kIGNzczMgc3VwcG9ydFxuICAgIFBsdWdpbi5wcm90b3R5cGUuZG9Dc3MgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gY2hlY2sgZm9yIGNzcyBhbmltYXRpb24gc3VwcG9ydFxuICAgICAgICB2YXIgc3VwcG9ydCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHRyYW5zaXRpb24gPSBbJ3RyYW5zaXRpb24nLCAnTW96VHJhbnNpdGlvbicsICdXZWJraXRUcmFuc2l0aW9uJywgJ09UcmFuc2l0aW9uJywgJ21zVHJhbnNpdGlvbicsICdLaHRtbFRyYW5zaXRpb24nXTtcbiAgICAgICAgICAgIHZhciByb290ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRyYW5zaXRpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodHJhbnNpdGlvbltpXSBpbiByb290LnN0eWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoc3VwcG9ydCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogIEBkZXNjIENoZWNrIHRoZSBnaXZlbiBzcmMgaXMgdmlkZW9cbiAgICAgKiAgQHBhcmFtIHtTdHJpbmd9IHNyY1xuICAgICAqICBAcmV0dXJuIHtPYmplY3R9IHZpZGVvIHR5cGVcbiAgICAgKiAgRXg6eyB5b3V0dWJlICA6ICBbXCIvL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWMwYXNKZ1N5eGNZXCIsIFwiYzBhc0pnU3l4Y1lcIl0gfVxuICAgICAqL1xuICAgIFBsdWdpbi5wcm90b3R5cGUuaXNWaWRlbyA9IGZ1bmN0aW9uKHNyYywgaW5kZXgpIHtcblxuICAgICAgICB2YXIgaHRtbDtcbiAgICAgICAgaWYgKHRoaXMucy5keW5hbWljKSB7XG4gICAgICAgICAgICBodG1sID0gdGhpcy5zLmR5bmFtaWNFbFtpbmRleF0uaHRtbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGh0bWwgPSB0aGlzLiRpdGVtcy5lcShpbmRleCkuYXR0cignZGF0YS1odG1sJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgaWYoaHRtbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGh0bWw1OiB0cnVlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignbGlnaHRHYWxsZXJ5IDotIGRhdGEtc3JjIGlzIG5vdCBwdm92aWRlZCBvbiBzbGlkZSBpdGVtICcgKyAoaW5kZXggKyAxKSArICcuIFBsZWFzZSBtYWtlIHN1cmUgdGhlIHNlbGVjdG9yIHByb3BlcnR5IGlzIHByb3Blcmx5IGNvbmZpZ3VyZWQuIE1vcmUgaW5mbyAtIGh0dHA6Ly9zYWNoaW5jaG9vbHVyLmdpdGh1Yi5pby9saWdodEdhbGxlcnkvZGVtb3MvaHRtbC1tYXJrdXAuaHRtbCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB5b3V0dWJlID0gc3JjLm1hdGNoKC9cXC9cXC8oPzp3d3dcXC4pP3lvdXR1KD86XFwuYmV8YmVcXC5jb218YmUtbm9jb29raWVcXC5jb20pXFwvKD86d2F0Y2hcXD92PXxlbWJlZFxcLyk/KFthLXowLTlcXC1cXF9cXCVdKykvaSk7XG4gICAgICAgIHZhciB2aW1lbyA9IHNyYy5tYXRjaCgvXFwvXFwvKD86d3d3XFwuKT92aW1lby5jb21cXC8oWzAtOWEtelxcLV9dKykvaSk7XG4gICAgICAgIHZhciBkYWlseW1vdGlvbiA9IHNyYy5tYXRjaCgvXFwvXFwvKD86d3d3XFwuKT9kYWkubHlcXC8oWzAtOWEtelxcLV9dKykvaSk7XG4gICAgICAgIHZhciB2ayA9IHNyYy5tYXRjaCgvXFwvXFwvKD86d3d3XFwuKT8oPzp2a1xcLmNvbXx2a29udGFrdGVcXC5ydSlcXC8oPzp2aWRlb19leHRcXC5waHBcXD8pKC4qKS9pKTtcblxuICAgICAgICBpZiAoeW91dHViZSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB5b3V0dWJlOiB5b3V0dWJlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKHZpbWVvKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZpbWVvOiB2aW1lb1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChkYWlseW1vdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkYWlseW1vdGlvbjogZGFpbHltb3Rpb25cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAodmspIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdms6IHZrXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqICBAZGVzYyBDcmVhdGUgaW1hZ2UgY291bnRlclxuICAgICAqICBFeDogMS8xMFxuICAgICAqL1xuICAgIFBsdWdpbi5wcm90b3R5cGUuY291bnRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5zLmNvdW50ZXIpIHtcbiAgICAgICAgICAgICQodGhpcy5zLmFwcGVuZENvdW50ZXJUbykuYXBwZW5kKCc8ZGl2IGlkPVwibGctY291bnRlclwiPjxzcGFuIGlkPVwibGctY291bnRlci1jdXJyZW50XCI+JyArIChwYXJzZUludCh0aGlzLmluZGV4LCAxMCkgKyAxKSArICc8L3NwYW4+IC8gPHNwYW4gaWQ9XCJsZy1jb3VudGVyLWFsbFwiPicgKyB0aGlzLiRpdGVtcy5sZW5ndGggKyAnPC9zcGFuPjwvZGl2PicpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqICBAZGVzYyBhZGQgc3ViLWh0bWwgaW50byB0aGUgc2xpZGVcbiAgICAgKiAgQHBhcmFtIHtOdW1iZXJ9IGluZGV4IC0gaW5kZXggb2YgdGhlIHNsaWRlXG4gICAgICovXG4gICAgUGx1Z2luLnByb3RvdHlwZS5hZGRIdG1sID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgdmFyIHN1Ykh0bWwgPSBudWxsO1xuICAgICAgICB2YXIgc3ViSHRtbFVybDtcbiAgICAgICAgdmFyICRjdXJyZW50RWxlO1xuICAgICAgICBpZiAodGhpcy5zLmR5bmFtaWMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnMuZHluYW1pY0VsW2luZGV4XS5zdWJIdG1sVXJsKSB7XG4gICAgICAgICAgICAgICAgc3ViSHRtbFVybCA9IHRoaXMucy5keW5hbWljRWxbaW5kZXhdLnN1Ykh0bWxVcmw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN1Ykh0bWwgPSB0aGlzLnMuZHluYW1pY0VsW2luZGV4XS5zdWJIdG1sO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGN1cnJlbnRFbGUgPSB0aGlzLiRpdGVtcy5lcShpbmRleCk7XG4gICAgICAgICAgICBpZiAoJGN1cnJlbnRFbGUuYXR0cignZGF0YS1zdWItaHRtbC11cmwnKSkge1xuICAgICAgICAgICAgICAgIHN1Ykh0bWxVcmwgPSAkY3VycmVudEVsZS5hdHRyKCdkYXRhLXN1Yi1odG1sLXVybCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdWJIdG1sID0gJGN1cnJlbnRFbGUuYXR0cignZGF0YS1zdWItaHRtbCcpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnMuZ2V0Q2FwdGlvbkZyb21UaXRsZU9yQWx0ICYmICFzdWJIdG1sKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Ykh0bWwgPSAkY3VycmVudEVsZS5hdHRyKCd0aXRsZScpIHx8ICRjdXJyZW50RWxlLmZpbmQoJ2ltZycpLmZpcnN0KCkuYXR0cignYWx0Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzdWJIdG1sVXJsKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHN1Ykh0bWwgIT09ICd1bmRlZmluZWQnICYmIHN1Ykh0bWwgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgICAgIC8vIGdldCBmaXJzdCBsZXR0ZXIgb2Ygc3ViaHRtbFxuICAgICAgICAgICAgICAgIC8vIGlmIGZpcnN0IGxldHRlciBzdGFydHMgd2l0aCAuIG9yICMgZ2V0IHRoZSBodG1sIGZvcm0gdGhlIGpRdWVyeSBvYmplY3RcbiAgICAgICAgICAgICAgICB2YXIgZkwgPSBzdWJIdG1sLnN1YnN0cmluZygwLCAxKTtcbiAgICAgICAgICAgICAgICBpZiAoZkwgPT09ICcuJyB8fCBmTCA9PT0gJyMnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnMuc3ViSHRtbFNlbGVjdG9yUmVsYXRpdmUgJiYgIXRoaXMucy5keW5hbWljKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJIdG1sID0gJGN1cnJlbnRFbGUuZmluZChzdWJIdG1sKS5odG1sKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJIdG1sID0gJChzdWJIdG1sKS5odG1sKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN1Ykh0bWwgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnMuYXBwZW5kU3ViSHRtbFRvID09PSAnLmxnLXN1Yi1odG1sJykge1xuXG4gICAgICAgICAgICBpZiAoc3ViSHRtbFVybCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJG91dGVyLmZpbmQodGhpcy5zLmFwcGVuZFN1Ykh0bWxUbykubG9hZChzdWJIdG1sVXJsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kb3V0ZXIuZmluZCh0aGlzLnMuYXBwZW5kU3ViSHRtbFRvKS5odG1sKHN1Ykh0bWwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGlmIChzdWJIdG1sVXJsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kc2xpZGUuZXEoaW5kZXgpLmxvYWQoc3ViSHRtbFVybCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuJHNsaWRlLmVxKGluZGV4KS5hcHBlbmQoc3ViSHRtbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgbGctZW1wdHktaHRtbCBjbGFzcyBpZiB0aXRsZSBkb2Vzbid0IGV4aXN0XG4gICAgICAgIGlmICh0eXBlb2Ygc3ViSHRtbCAhPT0gJ3VuZGVmaW5lZCcgJiYgc3ViSHRtbCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHN1Ykh0bWwgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kb3V0ZXIuZmluZCh0aGlzLnMuYXBwZW5kU3ViSHRtbFRvKS5hZGRDbGFzcygnbGctZW1wdHktaHRtbCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRvdXRlci5maW5kKHRoaXMucy5hcHBlbmRTdWJIdG1sVG8pLnJlbW92ZUNsYXNzKCdsZy1lbXB0eS1odG1sJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRlbC50cmlnZ2VyKCdvbkFmdGVyQXBwZW5kU3ViSHRtbC5sZycsIFtpbmRleF0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiAgQGRlc2MgUHJlbG9hZCBzbGlkZXNcbiAgICAgKiAgQHBhcmFtIHtOdW1iZXJ9IGluZGV4IC0gaW5kZXggb2YgdGhlIHNsaWRlXG4gICAgICovXG4gICAgUGx1Z2luLnByb3RvdHlwZS5wcmVsb2FkID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgdmFyIGkgPSAxO1xuICAgICAgICB2YXIgaiA9IDE7XG4gICAgICAgIGZvciAoaSA9IDE7IGkgPD0gdGhpcy5zLnByZWxvYWQ7IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgPj0gdGhpcy4kaXRlbXMubGVuZ3RoIC0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5sb2FkQ29udGVudChpbmRleCArIGksIGZhbHNlLCAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaiA9IDE7IGogPD0gdGhpcy5zLnByZWxvYWQ7IGorKykge1xuICAgICAgICAgICAgaWYgKGluZGV4IC0gaiA8IDApIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5sb2FkQ29udGVudChpbmRleCAtIGosIGZhbHNlLCAwKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiAgQGRlc2MgTG9hZCBzbGlkZSBjb250ZW50IGludG8gc2xpZGUuXG4gICAgICogIEBwYXJhbSB7TnVtYmVyfSBpbmRleCAtIGluZGV4IG9mIHRoZSBzbGlkZS5cbiAgICAgKiAgQHBhcmFtIHtCb29sZWFufSByZWMgLSBpZiB0cnVlIGNhbGwgbG9hZGNvbnRlbnQoKSBmdW5jdGlvbiBhZ2Fpbi5cbiAgICAgKiAgQHBhcmFtIHtCb29sZWFufSBkZWxheSAtIGRlbGF5IGZvciBhZGRpbmcgY29tcGxldGUgY2xhc3MuIGl0IGlzIDAgZXhjZXB0IGZpcnN0IHRpbWUuXG4gICAgICovXG4gICAgUGx1Z2luLnByb3RvdHlwZS5sb2FkQ29udGVudCA9IGZ1bmN0aW9uKGluZGV4LCByZWMsIGRlbGF5KSB7XG5cbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIF9oYXNQb3N0ZXIgPSBmYWxzZTtcbiAgICAgICAgdmFyIF8kaW1nO1xuICAgICAgICB2YXIgX3NyYztcbiAgICAgICAgdmFyIF9wb3N0ZXI7XG4gICAgICAgIHZhciBfc3Jjc2V0O1xuICAgICAgICB2YXIgX3NpemVzO1xuICAgICAgICB2YXIgX2h0bWw7XG4gICAgICAgIHZhciBnZXRSZXNwb25zaXZlU3JjID0gZnVuY3Rpb24oc3JjSXRtcykge1xuICAgICAgICAgICAgdmFyIHJzV2lkdGggPSBbXTtcbiAgICAgICAgICAgIHZhciByc1NyYyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzcmNJdG1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9fc3JjID0gc3JjSXRtc1tpXS5zcGxpdCgnICcpO1xuXG4gICAgICAgICAgICAgICAgLy8gTWFuYWdlIGVtcHR5IHNwYWNlXG4gICAgICAgICAgICAgICAgaWYgKF9fc3JjWzBdID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBfX3NyYy5zcGxpY2UoMCwgMSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcnNTcmMucHVzaChfX3NyY1swXSk7XG4gICAgICAgICAgICAgICAgcnNXaWR0aC5wdXNoKF9fc3JjWzFdKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHdXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCByc1dpZHRoLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KHJzV2lkdGhbal0sIDEwKSA+IHdXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICBfc3JjID0gcnNTcmNbal07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoX3RoaXMucy5keW5hbWljKSB7XG5cbiAgICAgICAgICAgIGlmIChfdGhpcy5zLmR5bmFtaWNFbFtpbmRleF0ucG9zdGVyKSB7XG4gICAgICAgICAgICAgICAgX2hhc1Bvc3RlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgX3Bvc3RlciA9IF90aGlzLnMuZHluYW1pY0VsW2luZGV4XS5wb3N0ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF9odG1sID0gX3RoaXMucy5keW5hbWljRWxbaW5kZXhdLmh0bWw7XG4gICAgICAgICAgICBfc3JjID0gX3RoaXMucy5keW5hbWljRWxbaW5kZXhdLnNyYztcblxuICAgICAgICAgICAgaWYgKF90aGlzLnMuZHluYW1pY0VsW2luZGV4XS5yZXNwb25zaXZlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNyY0R5SXRtcyA9IF90aGlzLnMuZHluYW1pY0VsW2luZGV4XS5yZXNwb25zaXZlLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICAgICAgZ2V0UmVzcG9uc2l2ZVNyYyhzcmNEeUl0bXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfc3Jjc2V0ID0gX3RoaXMucy5keW5hbWljRWxbaW5kZXhdLnNyY3NldDtcbiAgICAgICAgICAgIF9zaXplcyA9IF90aGlzLnMuZHluYW1pY0VsW2luZGV4XS5zaXplcztcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpZiAoX3RoaXMuJGl0ZW1zLmVxKGluZGV4KS5hdHRyKCdkYXRhLXBvc3RlcicpKSB7XG4gICAgICAgICAgICAgICAgX2hhc1Bvc3RlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgX3Bvc3RlciA9IF90aGlzLiRpdGVtcy5lcShpbmRleCkuYXR0cignZGF0YS1wb3N0ZXInKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX2h0bWwgPSBfdGhpcy4kaXRlbXMuZXEoaW5kZXgpLmF0dHIoJ2RhdGEtaHRtbCcpO1xuICAgICAgICAgICAgX3NyYyA9IF90aGlzLiRpdGVtcy5lcShpbmRleCkuYXR0cignaHJlZicpIHx8IF90aGlzLiRpdGVtcy5lcShpbmRleCkuYXR0cignZGF0YS1zcmMnKTtcblxuICAgICAgICAgICAgaWYgKF90aGlzLiRpdGVtcy5lcShpbmRleCkuYXR0cignZGF0YS1yZXNwb25zaXZlJykpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3JjSXRtcyA9IF90aGlzLiRpdGVtcy5lcShpbmRleCkuYXR0cignZGF0YS1yZXNwb25zaXZlJykuc3BsaXQoJywnKTtcbiAgICAgICAgICAgICAgICBnZXRSZXNwb25zaXZlU3JjKHNyY0l0bXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfc3Jjc2V0ID0gX3RoaXMuJGl0ZW1zLmVxKGluZGV4KS5hdHRyKCdkYXRhLXNyY3NldCcpO1xuICAgICAgICAgICAgX3NpemVzID0gX3RoaXMuJGl0ZW1zLmVxKGluZGV4KS5hdHRyKCdkYXRhLXNpemVzJyk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vaWYgKF9zcmMgfHwgX3NyY3NldCB8fCBfc2l6ZXMgfHwgX3Bvc3Rlcikge1xuXG4gICAgICAgIHZhciBpZnJhbWUgPSBmYWxzZTtcbiAgICAgICAgaWYgKF90aGlzLnMuZHluYW1pYykge1xuICAgICAgICAgICAgaWYgKF90aGlzLnMuZHluYW1pY0VsW2luZGV4XS5pZnJhbWUpIHtcbiAgICAgICAgICAgICAgICBpZnJhbWUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKF90aGlzLiRpdGVtcy5lcShpbmRleCkuYXR0cignZGF0YS1pZnJhbWUnKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICAgICAgaWZyYW1lID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfaXNWaWRlbyA9IF90aGlzLmlzVmlkZW8oX3NyYywgaW5kZXgpO1xuICAgICAgICBpZiAoIV90aGlzLiRzbGlkZS5lcShpbmRleCkuaGFzQ2xhc3MoJ2xnLWxvYWRlZCcpKSB7XG4gICAgICAgICAgICBpZiAoaWZyYW1lKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuJHNsaWRlLmVxKGluZGV4KS5wcmVwZW5kKCc8ZGl2IGNsYXNzPVwibGctdmlkZW8tY29udCBsZy1oYXMtaWZyYW1lXCIgc3R5bGU9XCJtYXgtd2lkdGg6JyArIF90aGlzLnMuaWZyYW1lTWF4V2lkdGggKyAnXCI+PGRpdiBjbGFzcz1cImxnLXZpZGVvXCI+PGlmcmFtZSBjbGFzcz1cImxnLW9iamVjdFwiIGZyYW1lYm9yZGVyPVwiMFwiIHNyYz1cIicgKyBfc3JjICsgJ1wiICBhbGxvd2Z1bGxzY3JlZW49XCJ0cnVlXCI+PC9pZnJhbWU+PC9kaXY+PC9kaXY+Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKF9oYXNQb3N0ZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmlkZW9DbGFzcyA9ICcnO1xuICAgICAgICAgICAgICAgIGlmIChfaXNWaWRlbyAmJiBfaXNWaWRlby55b3V0dWJlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZpZGVvQ2xhc3MgPSAnbGctaGFzLXlvdXR1YmUnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoX2lzVmlkZW8gJiYgX2lzVmlkZW8udmltZW8pIHtcbiAgICAgICAgICAgICAgICAgICAgdmlkZW9DbGFzcyA9ICdsZy1oYXMtdmltZW8nO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZpZGVvQ2xhc3MgPSAnbGctaGFzLWh0bWw1JztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBfdGhpcy4kc2xpZGUuZXEoaW5kZXgpLnByZXBlbmQoJzxkaXYgY2xhc3M9XCJsZy12aWRlby1jb250ICcgKyB2aWRlb0NsYXNzICsgJyBcIj48ZGl2IGNsYXNzPVwibGctdmlkZW9cIj48c3BhbiBjbGFzcz1cImxnLXZpZGVvLXBsYXlcIj48L3NwYW4+PGltZyBjbGFzcz1cImxnLW9iamVjdCBsZy1oYXMtcG9zdGVyXCIgc3JjPVwiJyArIF9wb3N0ZXIgKyAnXCIgLz48L2Rpdj48L2Rpdj4nKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChfaXNWaWRlbykge1xuICAgICAgICAgICAgICAgIF90aGlzLiRzbGlkZS5lcShpbmRleCkucHJlcGVuZCgnPGRpdiBjbGFzcz1cImxnLXZpZGVvLWNvbnQgXCI+PGRpdiBjbGFzcz1cImxnLXZpZGVvXCI+PC9kaXY+PC9kaXY+Jyk7XG4gICAgICAgICAgICAgICAgX3RoaXMuJGVsLnRyaWdnZXIoJ2hhc1ZpZGVvLmxnJywgW2luZGV4LCBfc3JjLCBfaHRtbF0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy4kc2xpZGUuZXEoaW5kZXgpLnByZXBlbmQoJzxkaXYgY2xhc3M9XCJsZy1pbWctd3JhcFwiPjxpbWcgY2xhc3M9XCJsZy1vYmplY3QgbGctaW1hZ2VcIiBzcmM9XCInICsgX3NyYyArICdcIiAvPjwvZGl2PicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfdGhpcy4kZWwudHJpZ2dlcignb25BZmVyQXBwZW5kU2xpZGUubGcnLCBbaW5kZXhdKTtcblxuICAgICAgICAgICAgXyRpbWcgPSBfdGhpcy4kc2xpZGUuZXEoaW5kZXgpLmZpbmQoJy5sZy1vYmplY3QnKTtcbiAgICAgICAgICAgIGlmIChfc2l6ZXMpIHtcbiAgICAgICAgICAgICAgICBfJGltZy5hdHRyKCdzaXplcycsIF9zaXplcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChfc3Jjc2V0KSB7XG4gICAgICAgICAgICAgICAgXyRpbWcuYXR0cignc3Jjc2V0JywgX3NyY3NldCk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcGljdHVyZWZpbGwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHM6IFtfJGltZ1swXV1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ2xpZ2h0R2FsbGVyeSA6LSBJZiB5b3Ugd2FudCBzcmNzZXQgdG8gYmUgc3VwcG9ydGVkIGZvciBvbGRlciBicm93c2VyIHBsZWFzZSBpbmNsdWRlIHBpY3R1cmVmaWwgdmVyc2lvbiAyIGphdmFzY3JpcHQgbGlicmFyeSBpbiB5b3VyIGRvY3VtZW50LicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMucy5hcHBlbmRTdWJIdG1sVG8gIT09ICcubGctc3ViLWh0bWwnKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRkSHRtbChpbmRleCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF90aGlzLiRzbGlkZS5lcShpbmRleCkuYWRkQ2xhc3MoJ2xnLWxvYWRlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMuJHNsaWRlLmVxKGluZGV4KS5maW5kKCcubGctb2JqZWN0Jykub24oJ2xvYWQubGcgZXJyb3IubGcnLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgLy8gRm9yIGZpcnN0IHRpbWUgYWRkIHNvbWUgZGVsYXkgZm9yIGRpc3BsYXlpbmcgdGhlIHN0YXJ0IGFuaW1hdGlvbi5cbiAgICAgICAgICAgIHZhciBfc3BlZWQgPSAwO1xuXG4gICAgICAgICAgICAvLyBEbyBub3QgY2hhbmdlIHRoZSBkZWxheSB2YWx1ZSBiZWNhdXNlIGl0IGlzIHJlcXVpcmVkIGZvciB6b29tIHBsdWdpbi5cbiAgICAgICAgICAgIC8vIElmIGdhbGxlcnkgb3BlbmVkIGZyb20gZGlyZWN0IHVybCAoaGFzaCkgc3BlZWQgdmFsdWUgc2hvdWxkIGJlIDBcbiAgICAgICAgICAgIGlmIChkZWxheSAmJiAhJCgnYm9keScpLmhhc0NsYXNzKCdsZy1mcm9tLWhhc2gnKSkge1xuICAgICAgICAgICAgICAgIF9zcGVlZCA9IGRlbGF5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLiRzbGlkZS5lcShpbmRleCkuYWRkQ2xhc3MoJ2xnLWNvbXBsZXRlJyk7XG4gICAgICAgICAgICAgICAgX3RoaXMuJGVsLnRyaWdnZXIoJ29uU2xpZGVJdGVtTG9hZC5sZycsIFtpbmRleCwgZGVsYXkgfHwgMF0pO1xuICAgICAgICAgICAgfSwgX3NwZWVkKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBAdG9kbyBjaGVjayBsb2FkIHN0YXRlIGZvciBodG1sNSB2aWRlb3NcbiAgICAgICAgaWYgKF9pc1ZpZGVvICYmIF9pc1ZpZGVvLmh0bWw1ICYmICFfaGFzUG9zdGVyKSB7XG4gICAgICAgICAgICBfdGhpcy4kc2xpZGUuZXEoaW5kZXgpLmFkZENsYXNzKCdsZy1jb21wbGV0ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlYyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKCFfdGhpcy4kc2xpZGUuZXEoaW5kZXgpLmhhc0NsYXNzKCdsZy1jb21wbGV0ZScpKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuJHNsaWRlLmVxKGluZGV4KS5maW5kKCcubGctb2JqZWN0Jykub24oJ2xvYWQubGcgZXJyb3IubGcnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucHJlbG9hZChpbmRleCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF90aGlzLnByZWxvYWQoaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy99XG4gICAgfTtcblxuICAgIC8qKlxuICAgICogICBAZGVzYyBzbGlkZSBmdW5jdGlvbiBmb3IgbGlnaHRnYWxsZXJ5XG4gICAgICAgICoqIFNsaWRlKCkgZ2V0cyBjYWxsIG9uIHN0YXJ0XG4gICAgICAgICoqICoqIFNldCBsZy5vbiB0cnVlIG9uY2Ugc2xpZGUoKSBmdW5jdGlvbiBnZXRzIGNhbGxlZC5cbiAgICAgICAgKiogQ2FsbCBsb2FkQ29udGVudCgpIG9uIHNsaWRlKCkgZnVuY3Rpb24gaW5zaWRlIHNldFRpbWVvdXRcbiAgICAgICAgKiogKiogT24gZmlyc3Qgc2xpZGUgd2UgZG8gbm90IHdhbnQgYW55IGFuaW1hdGlvbiBsaWtlIHNsaWRlIG9mIGZhZGVcbiAgICAgICAgKiogKiogU28gb24gZmlyc3Qgc2xpZGUoIGlmIGxnLm9uIGlmIGZhbHNlIHRoYXQgaXMgZmlyc3Qgc2xpZGUpIGxvYWRDb250ZW50KCkgc2hvdWxkIHN0YXJ0IGxvYWRpbmcgaW1tZWRpYXRlbHlcbiAgICAgICAgKiogKiogRWxzZSBsb2FkQ29udGVudCgpIHNob3VsZCB3YWl0IGZvciB0aGUgdHJhbnNpdGlvbiB0byBjb21wbGV0ZS5cbiAgICAgICAgKiogKiogU28gc2V0IHRpbWVvdXQgcy5zcGVlZCArIDUwXG4gICAgPD0+ICoqIGxvYWRDb250ZW50KCkgd2lsbCBsb2FkIHNsaWRlIGNvbnRlbnQgaW4gdG8gdGhlIHBhcnRpY3VsYXIgc2xpZGVcbiAgICAgICAgKiogKiogSXQgaGFzIHJlY3Vyc2lvbiAocmVjKSBwYXJhbWV0ZXIuIGlmIHJlYyA9PT0gdHJ1ZSBsb2FkQ29udGVudCgpIHdpbGwgY2FsbCBwcmVsb2FkKCkgZnVuY3Rpb24uXG4gICAgICAgICoqICoqIHByZWxvYWQgd2lsbCBleGVjdXRlIG9ubHkgd2hlbiB0aGUgcHJldmlvdXMgc2xpZGUgaXMgZnVsbHkgbG9hZGVkIChpbWFnZXMgaWZyYW1lKVxuICAgICAgICAqKiAqKiBhdm9pZCBzaW11bHRhbmVvdXMgaW1hZ2UgbG9hZFxuICAgIDw9PiAqKiBQcmVsb2FkKCkgd2lsbCBjaGVjayBmb3Igcy5wcmVsb2FkIHZhbHVlIGFuZCBjYWxsIGxvYWRDb250ZW50KCkgYWdhaW4gYWNjb3JpbmcgdG8gcHJlbG9hZCB2YWx1ZVxuICAgICAgICAqKiBsb2FkQ29udGVudCgpICA8PT09PT4gUHJlbG9hZCgpO1xuXG4gICAgKiAgIEBwYXJhbSB7TnVtYmVyfSBpbmRleCAtIGluZGV4IG9mIHRoZSBzbGlkZVxuICAgICogICBAcGFyYW0ge0Jvb2xlYW59IGZyb21Ub3VjaCAtIHRydWUgaWYgc2xpZGUgZnVuY3Rpb24gY2FsbGVkIHZpYSB0b3VjaCBldmVudCBvciBtb3VzZSBkcmFnXG4gICAgKiAgIEBwYXJhbSB7Qm9vbGVhbn0gZnJvbVRodW1iIC0gdHJ1ZSBpZiBzbGlkZSBmdW5jdGlvbiBjYWxsZWQgdmlhIHRodW1ibmFpbCBjbGlja1xuICAgICogICBAcGFyYW0ge1N0cmluZ30gZGlyZWN0aW9uIC0gRGlyZWN0aW9uIG9mIHRoZSBzbGlkZShuZXh0L3ByZXYpXG4gICAgKi9cbiAgICBQbHVnaW4ucHJvdG90eXBlLnNsaWRlID0gZnVuY3Rpb24oaW5kZXgsIGZyb21Ub3VjaCwgZnJvbVRodW1iLCBkaXJlY3Rpb24pIHtcblxuICAgICAgICB2YXIgX3ByZXZJbmRleCA9IHRoaXMuJG91dGVyLmZpbmQoJy5sZy1jdXJyZW50JykuaW5kZXgoKTtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAvLyBQcmV2ZW50IGlmIG11bHRpcGxlIGNhbGxcbiAgICAgICAgLy8gUmVxdWlyZWQgZm9yIGhzaCBwbHVnaW5cbiAgICAgICAgaWYgKF90aGlzLmxHYWxsZXJ5T24gJiYgKF9wcmV2SW5kZXggPT09IGluZGV4KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF9sZW5ndGggPSB0aGlzLiRzbGlkZS5sZW5ndGg7XG4gICAgICAgIHZhciBfdGltZSA9IF90aGlzLmxHYWxsZXJ5T24gPyB0aGlzLnMuc3BlZWQgOiAwO1xuXG4gICAgICAgIGlmICghX3RoaXMubGdCdXN5KSB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnMuZG93bmxvYWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3NyYztcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMucy5keW5hbWljKSB7XG4gICAgICAgICAgICAgICAgICAgIF9zcmMgPSBfdGhpcy5zLmR5bmFtaWNFbFtpbmRleF0uZG93bmxvYWRVcmwgIT09IGZhbHNlICYmIChfdGhpcy5zLmR5bmFtaWNFbFtpbmRleF0uZG93bmxvYWRVcmwgfHwgX3RoaXMucy5keW5hbWljRWxbaW5kZXhdLnNyYyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgX3NyYyA9IF90aGlzLiRpdGVtcy5lcShpbmRleCkuYXR0cignZGF0YS1kb3dubG9hZC11cmwnKSAhPT0gJ2ZhbHNlJyAmJiAoX3RoaXMuJGl0ZW1zLmVxKGluZGV4KS5hdHRyKCdkYXRhLWRvd25sb2FkLXVybCcpIHx8IF90aGlzLiRpdGVtcy5lcShpbmRleCkuYXR0cignaHJlZicpIHx8IF90aGlzLiRpdGVtcy5lcShpbmRleCkuYXR0cignZGF0YS1zcmMnKSk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoX3NyYykge1xuICAgICAgICAgICAgICAgICAgICAkKCcjbGctZG93bmxvYWQnKS5hdHRyKCdocmVmJywgX3NyYyk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLiRvdXRlci5yZW1vdmVDbGFzcygnbGctaGlkZS1kb3dubG9hZCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLiRvdXRlci5hZGRDbGFzcygnbGctaGlkZS1kb3dubG9hZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy4kZWwudHJpZ2dlcignb25CZWZvcmVTbGlkZS5sZycsIFtfcHJldkluZGV4LCBpbmRleCwgZnJvbVRvdWNoLCBmcm9tVGh1bWJdKTtcblxuICAgICAgICAgICAgX3RoaXMubGdCdXN5ID0gdHJ1ZTtcblxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF90aGlzLmhpZGVCYXJ0aW1lb3V0KTtcblxuICAgICAgICAgICAgLy8gQWRkIHRpdGxlIGlmIHRoaXMucy5hcHBlbmRTdWJIdG1sVG8gPT09IGxnLXN1Yi1odG1sXG4gICAgICAgICAgICBpZiAodGhpcy5zLmFwcGVuZFN1Ykh0bWxUbyA9PT0gJy5sZy1zdWItaHRtbCcpIHtcblxuICAgICAgICAgICAgICAgIC8vIHdhaXQgZm9yIHNsaWRlIGFuaW1hdGlvbiB0byBjb21wbGV0ZVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmFkZEh0bWwoaW5kZXgpO1xuICAgICAgICAgICAgICAgIH0sIF90aW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5hcnJvd0Rpc2FibGUoaW5kZXgpO1xuXG4gICAgICAgICAgICBpZiAoIWRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IF9wcmV2SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gJ3ByZXYnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPiBfcHJldkluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9ICduZXh0JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghZnJvbVRvdWNoKSB7XG5cbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgYWxsIHRyYW5zaXRpb25zXG4gICAgICAgICAgICAgICAgX3RoaXMuJG91dGVyLmFkZENsYXNzKCdsZy1uby10cmFucycpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy4kc2xpZGUucmVtb3ZlQ2xhc3MoJ2xnLXByZXYtc2xpZGUgbGctbmV4dC1zbGlkZScpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3ByZXYnKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9wcmV2c2xpZGVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2xpZGUuZXEoaW5kZXgpLmFkZENsYXNzKCdsZy1wcmV2LXNsaWRlJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHNsaWRlLmVxKF9wcmV2SW5kZXgpLmFkZENsYXNzKCdsZy1uZXh0LXNsaWRlJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBuZXh0IHNsaWRlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHNsaWRlLmVxKGluZGV4KS5hZGRDbGFzcygnbGctbmV4dC1zbGlkZScpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzbGlkZS5lcShfcHJldkluZGV4KS5hZGRDbGFzcygnbGctcHJldi1zbGlkZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGdpdmUgNTAgbXMgZm9yIGJyb3dzZXIgdG8gYWRkL3JlbW92ZSBjbGFzc1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLiRzbGlkZS5yZW1vdmVDbGFzcygnbGctY3VycmVudCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vX3RoaXMuJHNsaWRlLmVxKF9wcmV2SW5kZXgpLnJlbW92ZUNsYXNzKCdsZy1jdXJyZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLiRzbGlkZS5lcShpbmRleCkuYWRkQ2xhc3MoJ2xnLWN1cnJlbnQnKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyByZXNldCBhbGwgdHJhbnNpdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuJG91dGVyLnJlbW92ZUNsYXNzKCdsZy1uby10cmFucycpO1xuICAgICAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRzbGlkZS5yZW1vdmVDbGFzcygnbGctcHJldi1zbGlkZSBsZy1jdXJyZW50IGxnLW5leHQtc2xpZGUnKTtcbiAgICAgICAgICAgICAgICB2YXIgdG91Y2hQcmV2O1xuICAgICAgICAgICAgICAgIHZhciB0b3VjaE5leHQ7XG4gICAgICAgICAgICAgICAgaWYgKF9sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvdWNoUHJldiA9IGluZGV4IC0gMTtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hOZXh0ID0gaW5kZXggKyAxO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICgoaW5kZXggPT09IDApICYmIChfcHJldkluZGV4ID09PSBfbGVuZ3RoIC0gMSkpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBzbGlkZVxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hOZXh0ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoUHJldiA9IF9sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKChpbmRleCA9PT0gX2xlbmd0aCAtIDEpICYmIChfcHJldkluZGV4ID09PSAwKSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwcmV2IHNsaWRlXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE5leHQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hQcmV2ID0gX2xlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRvdWNoUHJldiA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRvdWNoTmV4dCA9IDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3ByZXYnKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLiRzbGlkZS5lcSh0b3VjaE5leHQpLmFkZENsYXNzKCdsZy1uZXh0LXNsaWRlJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuJHNsaWRlLmVxKHRvdWNoUHJldikuYWRkQ2xhc3MoJ2xnLXByZXYtc2xpZGUnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBfdGhpcy4kc2xpZGUuZXEoaW5kZXgpLmFkZENsYXNzKCdsZy1jdXJyZW50Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChfdGhpcy5sR2FsbGVyeU9uKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubG9hZENvbnRlbnQoaW5kZXgsIHRydWUsIDApO1xuICAgICAgICAgICAgICAgIH0sIHRoaXMucy5zcGVlZCArIDUwKTtcblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmxnQnVzeSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy4kZWwudHJpZ2dlcignb25BZnRlclNsaWRlLmxnJywgW19wcmV2SW5kZXgsIGluZGV4LCBmcm9tVG91Y2gsIGZyb21UaHVtYl0pO1xuICAgICAgICAgICAgICAgIH0sIHRoaXMucy5zcGVlZCk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX3RoaXMubG9hZENvbnRlbnQoaW5kZXgsIHRydWUsIF90aGlzLnMuYmFja2Ryb3BEdXJhdGlvbik7XG5cbiAgICAgICAgICAgICAgICBfdGhpcy5sZ0J1c3kgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBfdGhpcy4kZWwudHJpZ2dlcignb25BZnRlclNsaWRlLmxnJywgW19wcmV2SW5kZXgsIGluZGV4LCBmcm9tVG91Y2gsIGZyb21UaHVtYl0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfdGhpcy5sR2FsbGVyeU9uID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKHRoaXMucy5jb3VudGVyKSB7XG4gICAgICAgICAgICAgICAgJCgnI2xnLWNvdW50ZXItY3VycmVudCcpLnRleHQoaW5kZXggKyAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIF90aGlzLmluZGV4ID0gaW5kZXg7XG5cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogIEBkZXNjIEdvIHRvIG5leHQgc2xpZGVcbiAgICAgKiAgQHBhcmFtIHtCb29sZWFufSBmcm9tVG91Y2ggLSB0cnVlIGlmIHNsaWRlIGZ1bmN0aW9uIGNhbGxlZCB2aWEgdG91Y2ggZXZlbnRcbiAgICAgKi9cbiAgICBQbHVnaW4ucHJvdG90eXBlLmdvVG9OZXh0U2xpZGUgPSBmdW5jdGlvbihmcm9tVG91Y2gpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIF9sb29wID0gX3RoaXMucy5sb29wO1xuICAgICAgICBpZiAoZnJvbVRvdWNoICYmIF90aGlzLiRzbGlkZS5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgICBfbG9vcCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFfdGhpcy5sZ0J1c3kpIHtcbiAgICAgICAgICAgIGlmICgoX3RoaXMuaW5kZXggKyAxKSA8IF90aGlzLiRzbGlkZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5pbmRleCsrO1xuICAgICAgICAgICAgICAgIF90aGlzLiRlbC50cmlnZ2VyKCdvbkJlZm9yZU5leHRTbGlkZS5sZycsIFtfdGhpcy5pbmRleF0pO1xuICAgICAgICAgICAgICAgIF90aGlzLnNsaWRlKF90aGlzLmluZGV4LCBmcm9tVG91Y2gsIGZhbHNlLCAnbmV4dCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoX2xvb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuaW5kZXggPSAwO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy4kZWwudHJpZ2dlcignb25CZWZvcmVOZXh0U2xpZGUubGcnLCBbX3RoaXMuaW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2xpZGUoX3RoaXMuaW5kZXgsIGZyb21Ub3VjaCwgZmFsc2UsICduZXh0Jyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChfdGhpcy5zLnNsaWRlRW5kQW5pbWF0b2luICYmICFmcm9tVG91Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuJG91dGVyLmFkZENsYXNzKCdsZy1yaWdodC1lbmQnKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLiRvdXRlci5yZW1vdmVDbGFzcygnbGctcmlnaHQtZW5kJyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDQwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqICBAZGVzYyBHbyB0byBwcmV2aW91cyBzbGlkZVxuICAgICAqICBAcGFyYW0ge0Jvb2xlYW59IGZyb21Ub3VjaCAtIHRydWUgaWYgc2xpZGUgZnVuY3Rpb24gY2FsbGVkIHZpYSB0b3VjaCBldmVudFxuICAgICAqL1xuICAgIFBsdWdpbi5wcm90b3R5cGUuZ29Ub1ByZXZTbGlkZSA9IGZ1bmN0aW9uKGZyb21Ub3VjaCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgX2xvb3AgPSBfdGhpcy5zLmxvb3A7XG4gICAgICAgIGlmIChmcm9tVG91Y2ggJiYgX3RoaXMuJHNsaWRlLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgICAgIF9sb29wID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIV90aGlzLmxnQnVzeSkge1xuICAgICAgICAgICAgaWYgKF90aGlzLmluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmluZGV4LS07XG4gICAgICAgICAgICAgICAgX3RoaXMuJGVsLnRyaWdnZXIoJ29uQmVmb3JlUHJldlNsaWRlLmxnJywgW190aGlzLmluZGV4LCBmcm9tVG91Y2hdKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5zbGlkZShfdGhpcy5pbmRleCwgZnJvbVRvdWNoLCBmYWxzZSwgJ3ByZXYnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKF9sb29wKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmluZGV4ID0gX3RoaXMuJGl0ZW1zLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLiRlbC50cmlnZ2VyKCdvbkJlZm9yZVByZXZTbGlkZS5sZycsIFtfdGhpcy5pbmRleCwgZnJvbVRvdWNoXSk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNsaWRlKF90aGlzLmluZGV4LCBmcm9tVG91Y2gsIGZhbHNlLCAncHJldicpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoX3RoaXMucy5zbGlkZUVuZEFuaW1hdG9pbiAmJiAhZnJvbVRvdWNoKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLiRvdXRlci5hZGRDbGFzcygnbGctbGVmdC1lbmQnKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLiRvdXRlci5yZW1vdmVDbGFzcygnbGctbGVmdC1lbmQnKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNDAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgUGx1Z2luLnByb3RvdHlwZS5rZXlQcmVzcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy4kaXRlbXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgJCh3aW5kb3cpLm9uKCdrZXl1cC5sZycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuJGl0ZW1zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmdvVG9QcmV2U2xpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDM5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5nb1RvTmV4dFNsaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgICQod2luZG93KS5vbigna2V5ZG93bi5sZycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5zLmVzY0tleSA9PT0gdHJ1ZSAmJiBlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGlmICghX3RoaXMuJG91dGVyLmhhc0NsYXNzKCdsZy10aHVtYi1vcGVuJykpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLiRvdXRlci5yZW1vdmVDbGFzcygnbGctdGh1bWItb3BlbicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIFBsdWdpbi5wcm90b3R5cGUuYXJyb3cgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy4kb3V0ZXIuZmluZCgnLmxnLXByZXYnKS5vbignY2xpY2subGcnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIF90aGlzLmdvVG9QcmV2U2xpZGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kb3V0ZXIuZmluZCgnLmxnLW5leHQnKS5vbignY2xpY2subGcnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIF90aGlzLmdvVG9OZXh0U2xpZGUoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIFBsdWdpbi5wcm90b3R5cGUuYXJyb3dEaXNhYmxlID0gZnVuY3Rpb24oaW5kZXgpIHtcblxuICAgICAgICAvLyBEaXNhYmxlIGFycm93cyBpZiBzLmhpZGVDb250cm9sT25FbmQgaXMgdHJ1ZVxuICAgICAgICBpZiAoIXRoaXMucy5sb29wICYmIHRoaXMucy5oaWRlQ29udHJvbE9uRW5kKSB7XG4gICAgICAgICAgICBpZiAoKGluZGV4ICsgMSkgPCB0aGlzLiRzbGlkZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRvdXRlci5maW5kKCcubGctbmV4dCcpLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJykucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuJG91dGVyLmZpbmQoJy5sZy1uZXh0JykuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJG91dGVyLmZpbmQoJy5sZy1wcmV2JykucmVtb3ZlQXR0cignZGlzYWJsZWQnKS5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kb3V0ZXIuZmluZCgnLmxnLXByZXYnKS5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIFBsdWdpbi5wcm90b3R5cGUuc2V0VHJhbnNsYXRlID0gZnVuY3Rpb24oJGVsLCB4VmFsdWUsIHlWYWx1ZSkge1xuICAgICAgICAvLyBqUXVlcnkgc3VwcG9ydHMgQXV0b21hdGljIENTUyBwcmVmaXhpbmcgc2luY2UgalF1ZXJ5IDEuOC4wXG4gICAgICAgIGlmICh0aGlzLnMudXNlTGVmdCkge1xuICAgICAgICAgICAgJGVsLmNzcygnbGVmdCcsIHhWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkZWwuY3NzKHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgnICsgKHhWYWx1ZSkgKyAncHgsICcgKyB5VmFsdWUgKyAncHgsIDBweCknXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBQbHVnaW4ucHJvdG90eXBlLnRvdWNoTW92ZSA9IGZ1bmN0aW9uKHN0YXJ0Q29vcmRzLCBlbmRDb29yZHMpIHtcblxuICAgICAgICB2YXIgZGlzdGFuY2UgPSBlbmRDb29yZHMgLSBzdGFydENvb3JkcztcblxuICAgICAgICBpZiAoTWF0aC5hYnMoZGlzdGFuY2UpID4gMTUpIHtcbiAgICAgICAgICAgIC8vIHJlc2V0IG9wYWNpdHkgYW5kIHRyYW5zaXRpb24gZHVyYXRpb25cbiAgICAgICAgICAgIHRoaXMuJG91dGVyLmFkZENsYXNzKCdsZy1kcmFnZ2luZycpO1xuXG4gICAgICAgICAgICAvLyBtb3ZlIGN1cnJlbnQgc2xpZGVcbiAgICAgICAgICAgIHRoaXMuc2V0VHJhbnNsYXRlKHRoaXMuJHNsaWRlLmVxKHRoaXMuaW5kZXgpLCBkaXN0YW5jZSwgMCk7XG5cbiAgICAgICAgICAgIC8vIG1vdmUgbmV4dCBhbmQgcHJldiBzbGlkZSB3aXRoIGN1cnJlbnQgc2xpZGVcbiAgICAgICAgICAgIHRoaXMuc2V0VHJhbnNsYXRlKCQoJy5sZy1wcmV2LXNsaWRlJyksIC10aGlzLiRzbGlkZS5lcSh0aGlzLmluZGV4KS53aWR0aCgpICsgZGlzdGFuY2UsIDApO1xuICAgICAgICAgICAgdGhpcy5zZXRUcmFuc2xhdGUoJCgnLmxnLW5leHQtc2xpZGUnKSwgdGhpcy4kc2xpZGUuZXEodGhpcy5pbmRleCkud2lkdGgoKSArIGRpc3RhbmNlLCAwKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBQbHVnaW4ucHJvdG90eXBlLnRvdWNoRW5kID0gZnVuY3Rpb24oZGlzdGFuY2UpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAvLyBrZWVwIHNsaWRlIGFuaW1hdGlvbiBmb3IgYW55IG1vZGUgd2hpbGUgZHJhZ2cvc3dpcGVcbiAgICAgICAgaWYgKF90aGlzLnMubW9kZSAhPT0gJ2xnLXNsaWRlJykge1xuICAgICAgICAgICAgX3RoaXMuJG91dGVyLmFkZENsYXNzKCdsZy1zbGlkZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kc2xpZGUubm90KCcubGctY3VycmVudCwgLmxnLXByZXYtc2xpZGUsIC5sZy1uZXh0LXNsaWRlJykuY3NzKCdvcGFjaXR5JywgJzAnKTtcblxuICAgICAgICAvLyBzZXQgdHJhbnNpdGlvbiBkdXJhdGlvblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgX3RoaXMuJG91dGVyLnJlbW92ZUNsYXNzKCdsZy1kcmFnZ2luZycpO1xuICAgICAgICAgICAgaWYgKChkaXN0YW5jZSA8IDApICYmIChNYXRoLmFicyhkaXN0YW5jZSkgPiBfdGhpcy5zLnN3aXBlVGhyZXNob2xkKSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmdvVG9OZXh0U2xpZGUodHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKChkaXN0YW5jZSA+IDApICYmIChNYXRoLmFicyhkaXN0YW5jZSkgPiBfdGhpcy5zLnN3aXBlVGhyZXNob2xkKSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmdvVG9QcmV2U2xpZGUodHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKE1hdGguYWJzKGRpc3RhbmNlKSA8IDUpIHtcblxuICAgICAgICAgICAgICAgIC8vIFRyaWdnZXIgY2xpY2sgaWYgZGlzdGFuY2UgaXMgbGVzcyB0aGFuIDUgcGl4XG4gICAgICAgICAgICAgICAgX3RoaXMuJGVsLnRyaWdnZXIoJ29uU2xpZGVDbGljay5sZycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfdGhpcy4kc2xpZGUucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gcmVtb3ZlIHNsaWRlIGNsYXNzIG9uY2UgZHJhZy9zd2lwZSBpcyBjb21wbGV0ZWQgaWYgbW9kZSBpcyBub3Qgc2xpZGVcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICghX3RoaXMuJG91dGVyLmhhc0NsYXNzKCdsZy1kcmFnZ2luZycpICYmIF90aGlzLnMubW9kZSAhPT0gJ2xnLXNsaWRlJykge1xuICAgICAgICAgICAgICAgIF90aGlzLiRvdXRlci5yZW1vdmVDbGFzcygnbGctc2xpZGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgX3RoaXMucy5zcGVlZCArIDEwMCk7XG5cbiAgICB9O1xuXG4gICAgUGx1Z2luLnByb3RvdHlwZS5lbmFibGVTd2lwZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgc3RhcnRDb29yZHMgPSAwO1xuICAgICAgICB2YXIgZW5kQ29vcmRzID0gMDtcbiAgICAgICAgdmFyIGlzTW92ZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoX3RoaXMucy5lbmFibGVTd2lwZSAmJiBfdGhpcy5kb0NzcygpKSB7XG5cbiAgICAgICAgICAgIF90aGlzLiRzbGlkZS5vbigndG91Y2hzdGFydC5sZycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIV90aGlzLiRvdXRlci5oYXNDbGFzcygnbGctem9vbWVkJykgJiYgIV90aGlzLmxnQnVzeSkge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm1hbmFnZVN3aXBlQ2xhc3MoKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRDb29yZHMgPSBlLm9yaWdpbmFsRXZlbnQudGFyZ2V0VG91Y2hlc1swXS5wYWdlWDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgX3RoaXMuJHNsaWRlLm9uKCd0b3VjaG1vdmUubGcnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFfdGhpcy4kb3V0ZXIuaGFzQ2xhc3MoJ2xnLXpvb21lZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgZW5kQ29vcmRzID0gZS5vcmlnaW5hbEV2ZW50LnRhcmdldFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnRvdWNoTW92ZShzdGFydENvb3JkcywgZW5kQ29vcmRzKTtcbiAgICAgICAgICAgICAgICAgICAgaXNNb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIF90aGlzLiRzbGlkZS5vbigndG91Y2hlbmQubGcnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoIV90aGlzLiRvdXRlci5oYXNDbGFzcygnbGctem9vbWVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTW92ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTW92ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnRvdWNoRW5kKGVuZENvb3JkcyAtIHN0YXJ0Q29vcmRzKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLiRlbC50cmlnZ2VyKCdvblNsaWRlQ2xpY2subGcnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgUGx1Z2luLnByb3RvdHlwZS5lbmFibGVEcmFnID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBzdGFydENvb3JkcyA9IDA7XG4gICAgICAgIHZhciBlbmRDb29yZHMgPSAwO1xuICAgICAgICB2YXIgaXNEcmFnaW5nID0gZmFsc2U7XG4gICAgICAgIHZhciBpc01vdmVkID0gZmFsc2U7XG4gICAgICAgIGlmIChfdGhpcy5zLmVuYWJsZURyYWcgJiYgX3RoaXMuZG9Dc3MoKSkge1xuICAgICAgICAgICAgX3RoaXMuJHNsaWRlLm9uKCdtb3VzZWRvd24ubGcnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFfdGhpcy4kb3V0ZXIuaGFzQ2xhc3MoJ2xnLXpvb21lZCcpICYmICFfdGhpcy5sZ0J1c3kgJiYgISQoZS50YXJnZXQpLnRleHQoKS50cmltKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5tYW5hZ2VTd2lwZUNsYXNzKCk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0Q29vcmRzID0gZS5wYWdlWDtcbiAgICAgICAgICAgICAgICAgICAgaXNEcmFnaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAqKiBGaXggZm9yIHdlYmtpdCBjdXJzb3IgaXNzdWUgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTI2NzIzXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLiRvdXRlci5zY3JvbGxMZWZ0ICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLiRvdXRlci5zY3JvbGxMZWZ0IC09IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gKlxuXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLiRvdXRlci5yZW1vdmVDbGFzcygnbGctZ3JhYicpLmFkZENsYXNzKCdsZy1ncmFiYmluZycpO1xuXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLiRlbC50cmlnZ2VyKCdvbkRyYWdzdGFydC5sZycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKHdpbmRvdykub24oJ21vdXNlbW92ZS5sZycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNEcmFnaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzTW92ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBlbmRDb29yZHMgPSBlLnBhZ2VYO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy50b3VjaE1vdmUoc3RhcnRDb29yZHMsIGVuZENvb3Jkcyk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLiRlbC50cmlnZ2VyKCdvbkRyYWdtb3ZlLmxnJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQod2luZG93KS5vbignbW91c2V1cC5sZycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNNb3ZlZCkge1xuICAgICAgICAgICAgICAgICAgICBpc01vdmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnRvdWNoRW5kKGVuZENvb3JkcyAtIHN0YXJ0Q29vcmRzKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuJGVsLnRyaWdnZXIoJ29uRHJhZ2VuZC5sZycpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ2xnLW9iamVjdCcpIHx8ICQoZS50YXJnZXQpLmhhc0NsYXNzKCdsZy12aWRlby1wbGF5JykpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuJGVsLnRyaWdnZXIoJ29uU2xpZGVDbGljay5sZycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgZXhlY3V0aW9uIG9uIGNsaWNrXG4gICAgICAgICAgICAgICAgaWYgKGlzRHJhZ2luZykge1xuICAgICAgICAgICAgICAgICAgICBpc0RyYWdpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuJG91dGVyLnJlbW92ZUNsYXNzKCdsZy1ncmFiYmluZycpLmFkZENsYXNzKCdsZy1ncmFiJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBQbHVnaW4ucHJvdG90eXBlLm1hbmFnZVN3aXBlQ2xhc3MgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF90b3VjaE5leHQgPSB0aGlzLmluZGV4ICsgMTtcbiAgICAgICAgdmFyIF90b3VjaFByZXYgPSB0aGlzLmluZGV4IC0gMTtcbiAgICAgICAgaWYgKHRoaXMucy5sb29wICYmIHRoaXMuJHNsaWRlLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgX3RvdWNoUHJldiA9IHRoaXMuJHNsaWRlLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW5kZXggPT09IHRoaXMuJHNsaWRlLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBfdG91Y2hOZXh0ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJHNsaWRlLnJlbW92ZUNsYXNzKCdsZy1uZXh0LXNsaWRlIGxnLXByZXYtc2xpZGUnKTtcbiAgICAgICAgaWYgKF90b3VjaFByZXYgPiAtMSkge1xuICAgICAgICAgICAgdGhpcy4kc2xpZGUuZXEoX3RvdWNoUHJldikuYWRkQ2xhc3MoJ2xnLXByZXYtc2xpZGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJHNsaWRlLmVxKF90b3VjaE5leHQpLmFkZENsYXNzKCdsZy1uZXh0LXNsaWRlJyk7XG4gICAgfTtcblxuICAgIFBsdWdpbi5wcm90b3R5cGUubW91c2V3aGVlbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBfdGhpcy4kb3V0ZXIub24oJ21vdXNld2hlZWwubGcnLCBmdW5jdGlvbihlKSB7XG5cbiAgICAgICAgICAgIGlmICghZS5kZWx0YVkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlLmRlbHRhWSA+IDApIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5nb1RvUHJldlNsaWRlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF90aGlzLmdvVG9OZXh0U2xpZGUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBQbHVnaW4ucHJvdG90eXBlLmNsb3NlR2FsbGVyeSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBtb3VzZWRvd24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy4kb3V0ZXIuZmluZCgnLmxnLWNsb3NlJykub24oJ2NsaWNrLmxnJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBfdGhpcy5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChfdGhpcy5zLmNsb3NhYmxlKSB7XG5cbiAgICAgICAgICAgIC8vIElmIHlvdSBkcmFnIHRoZSBzbGlkZSBhbmQgcmVsZWFzZSBvdXRzaWRlIGdhbGxlcnkgZ2V0cyBjbG9zZSBvbiBjaHJvbWVcbiAgICAgICAgICAgIC8vIGZvciBwcmV2ZW50aW5nIHRoaXMgY2hlY2sgbW91c2Vkb3duIGFuZCBtb3VzZXVwIGhhcHBlbmVkIG9uIC5sZy1pdGVtIG9yIGxnLW91dGVyXG4gICAgICAgICAgICBfdGhpcy4kb3V0ZXIub24oJ21vdXNlZG93bi5sZycsIGZ1bmN0aW9uKGUpIHtcblxuICAgICAgICAgICAgICAgIGlmICgkKGUudGFyZ2V0KS5pcygnLmxnLW91dGVyJykgfHwgJChlLnRhcmdldCkuaXMoJy5sZy1pdGVtICcpIHx8ICQoZS50YXJnZXQpLmlzKCcubGctaW1nLXdyYXAnKSkge1xuICAgICAgICAgICAgICAgICAgICBtb3VzZWRvd24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1vdXNlZG93biA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIF90aGlzLiRvdXRlci5vbignbW91c2Vtb3ZlLmxnJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgbW91c2Vkb3duID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgX3RoaXMuJG91dGVyLm9uKCdtb3VzZXVwLmxnJywgZnVuY3Rpb24oZSkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCQoZS50YXJnZXQpLmlzKCcubGctb3V0ZXInKSB8fCAkKGUudGFyZ2V0KS5pcygnLmxnLWl0ZW0gJykgfHwgJChlLnRhcmdldCkuaXMoJy5sZy1pbWctd3JhcCcpICYmIG1vdXNlZG93bikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIV90aGlzLiRvdXRlci5oYXNDbGFzcygnbGctZHJhZ2dpbmcnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgUGx1Z2luLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oZCkge1xuXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCFkKSB7XG4gICAgICAgICAgICBfdGhpcy4kZWwudHJpZ2dlcignb25CZWZvcmVDbG9zZS5sZycpO1xuICAgICAgICAgICAgJCh3aW5kb3cpLnNjcm9sbFRvcChfdGhpcy5wcmV2U2Nyb2xsVG9wKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGlmIGQgaXMgZmFsc2Ugb3IgdW5kZWZpbmVkIGRlc3Ryb3kgd2lsbCBvbmx5IGNsb3NlIHRoZSBnYWxsZXJ5XG4gICAgICAgICAqIHBsdWdpbnMgaW5zdGFuY2UgcmVtYWlucyB3aXRoIHRoZSBlbGVtZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIGlmIGQgaXMgdHJ1ZSBkZXN0cm95IHdpbGwgY29tcGxldGVseSByZW1vdmUgdGhlIHBsdWdpblxuICAgICAgICAgKi9cblxuICAgICAgICBpZiAoZCkge1xuICAgICAgICAgICAgaWYgKCFfdGhpcy5zLmR5bmFtaWMpIHtcbiAgICAgICAgICAgICAgICAvLyBvbmx5IHdoZW4gbm90IHVzaW5nIGR5bmFtaWMgbW9kZSBpcyAkaXRlbXMgYSBqcXVlcnkgY29sbGVjdGlvblxuICAgICAgICAgICAgICAgIHRoaXMuJGl0ZW1zLm9mZignY2xpY2subGcgY2xpY2subGdjdXN0b20nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJC5yZW1vdmVEYXRhKF90aGlzLmVsLCAnbGlnaHRHYWxsZXJ5Jyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVbmJpbmQgYWxsIGV2ZW50cyBhZGRlZCBieSBsaWdodEdhbGxlcnlcbiAgICAgICAgdGhpcy4kZWwub2ZmKCcubGcudG0nKTtcblxuICAgICAgICAvLyBEaXN0cm95IGFsbCBsaWdodEdhbGxlcnkgbW9kdWxlc1xuICAgICAgICAkLmVhY2goJC5mbi5saWdodEdhbGxlcnkubW9kdWxlcywgZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMubW9kdWxlc1trZXldKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMubW9kdWxlc1trZXldLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5sR2FsbGVyeU9uID0gZmFsc2U7XG5cbiAgICAgICAgY2xlYXJUaW1lb3V0KF90aGlzLmhpZGVCYXJ0aW1lb3V0KTtcbiAgICAgICAgdGhpcy5oaWRlQmFydGltZW91dCA9IGZhbHNlO1xuICAgICAgICAkKHdpbmRvdykub2ZmKCcubGcnKTtcbiAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdsZy1vbiBsZy1mcm9tLWhhc2gnKTtcblxuICAgICAgICBpZiAoX3RoaXMuJG91dGVyKSB7XG4gICAgICAgICAgICBfdGhpcy4kb3V0ZXIucmVtb3ZlQ2xhc3MoJ2xnLXZpc2libGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJy5sZy1iYWNrZHJvcCcpLnJlbW92ZUNsYXNzKCdpbicpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMuJG91dGVyKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuJG91dGVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCcubGctYmFja2Ryb3AnKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgaWYgKCFkKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuJGVsLnRyaWdnZXIoJ29uQ2xvc2VBZnRlci5sZycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0sIF90aGlzLnMuYmFja2Ryb3BEdXJhdGlvbiArIDUwKTtcbiAgICB9O1xuXG4gICAgJC5mbi5saWdodEdhbGxlcnkgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoISQuZGF0YSh0aGlzLCAnbGlnaHRHYWxsZXJ5JykpIHtcbiAgICAgICAgICAgICAgICAkLmRhdGEodGhpcywgJ2xpZ2h0R2FsbGVyeScsIG5ldyBQbHVnaW4odGhpcywgb3B0aW9ucykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmRhdGEoJ2xpZ2h0R2FsbGVyeScpLmluaXQoKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignbGlnaHRHYWxsZXJ5IGhhcyBub3QgaW5pdGlhdGVkIHByb3Blcmx5Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgJC5mbi5saWdodEdhbGxlcnkubW9kdWxlcyA9IHt9O1xuXG59KSgpO1xuXG5cbn0pKTtcbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8gKyBcIiBcIiArIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5qUXVlcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==