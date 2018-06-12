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
/******/ 	__webpack_require__.p = "";
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! lightgallery */ "./node_modules/lightgallery/dist/js/lightgallery.js");
__webpack_require__(/*! lg-fullscreen */ "./node_modules/lg-fullscreen/dist/lg-fullscreen.js");
__webpack_require__(/*! lg-thumbnail */ "./node_modules/lg-thumbnail/dist/lg-thumbnail.js");
__webpack_require__(/*! lg-zoom */ "./node_modules/lg-zoom/dist/lg-zoom.js");

document.addEventListener('DOMContentLoaded', function () {
  // initialize code
});


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

/***/ "jquery":
/*!********************************!*\
  !*** external "window.jQuery" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = window.jQuery;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2luaXRpYWxpemUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xnLWZ1bGxzY3JlZW4vZGlzdC9sZy1mdWxsc2NyZWVuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sZy10aHVtYm5haWwvZGlzdC9sZy10aHVtYm5haWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xnLXpvb20vZGlzdC9sZy16b29tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saWdodGdhbGxlcnkvZGlzdC9qcy9saWdodGdhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2luZG93LmpRdWVyeVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7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QUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFD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VDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQzs7O0FBR0QsQ0FBQzs7Ozs7Ozs7Ozs7O0FDOWdCRDtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQUE7QUFDTCxHQUFHLFFBT0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYixTQUFTOztBQUVUOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsd0JBQXdCO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsdUJBQXVCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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OztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQSxhQUFhOztBQUViO0FBQ0E7QUFDQSxhQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTs7QUFFYjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBLENBQUM7OztBQUdELENBQUM7Ozs7Ozs7Ozs7OztBQ2gxQ0QsK0IiLCJmaWxlIjoianMvcGx1Z2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hcHAvaW5pdGlhbGl6ZS5qc1wiKTtcbiIsInJlcXVpcmUoJ2xpZ2h0Z2FsbGVyeScpO1xucmVxdWlyZSgnbGctZnVsbHNjcmVlbicpO1xucmVxdWlyZSgnbGctdGh1bWJuYWlsJyk7XG5yZXF1aXJlKCdsZy16b29tJyk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gIC8vIGluaXRpYWxpemUgY29kZVxufSk7XG4iLCIvKiEgbGctZnVsbHNjcmVlbiAtIHYxLjAuMSAtIDIwMTYtMDktMzBcclxuKiBodHRwOi8vc2FjaGluY2hvb2x1ci5naXRodWIuaW8vbGlnaHRHYWxsZXJ5XHJcbiogQ29weXJpZ2h0IChjKSAyMDE2IFNhY2hpbiBOOyBMaWNlbnNlZCBHUEx2MyAqL1xyXG5cclxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUgdW5sZXNzIGFtZE1vZHVsZUlkIGlzIHNldFxuICAgIGRlZmluZShbJ2pxdWVyeSddLCBmdW5jdGlvbiAoYTApIHtcbiAgICAgIHJldHVybiAoZmFjdG9yeShhMCkpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgIC8vIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMsIGJ1dFxuICAgIC8vIG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLFxuICAgIC8vIGxpa2UgTm9kZS5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JykpO1xuICB9IGVsc2Uge1xuICAgIGZhY3RvcnkoalF1ZXJ5KTtcbiAgfVxufSh0aGlzLCBmdW5jdGlvbiAoJCkge1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgIGZ1bGxTY3JlZW46IHRydWVcbiAgICB9O1xuXG4gICAgdmFyIEZ1bGxzY3JlZW4gPSBmdW5jdGlvbihlbGVtZW50KSB7XG5cbiAgICAgICAgLy8gZ2V0IGxpZ2h0R2FsbGVyeSBjb3JlIHBsdWdpbiBkYXRhXG4gICAgICAgIHRoaXMuY29yZSA9ICQoZWxlbWVudCkuZGF0YSgnbGlnaHRHYWxsZXJ5Jyk7XG5cbiAgICAgICAgdGhpcy4kZWwgPSAkKGVsZW1lbnQpO1xuXG4gICAgICAgIC8vIGV4dGVuZCBtb2R1bGUgZGVmYWx1dCBzZXR0aW5ncyB3aXRoIGxpZ2h0R2FsbGVyeSBjb3JlIHNldHRpbmdzXG4gICAgICAgIHRoaXMuY29yZS5zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCB0aGlzLmNvcmUucyk7XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEZ1bGxzY3JlZW4ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGZ1bGxTY3JlZW4gPSAnJztcbiAgICAgICAgaWYgKHRoaXMuY29yZS5zLmZ1bGxTY3JlZW4pIHtcblxuICAgICAgICAgICAgLy8gY2hlY2sgZm9yIGZ1bGxzY3JlZW4gYnJvd3NlciBzdXBwb3J0XG4gICAgICAgICAgICBpZiAoIWRvY3VtZW50LmZ1bGxzY3JlZW5FbmFibGVkICYmICFkb2N1bWVudC53ZWJraXRGdWxsc2NyZWVuRW5hYmxlZCAmJlxuICAgICAgICAgICAgICAgICFkb2N1bWVudC5tb3pGdWxsU2NyZWVuRW5hYmxlZCAmJiAhZG9jdW1lbnQubXNGdWxsc2NyZWVuRW5hYmxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZnVsbFNjcmVlbiA9ICc8c3BhbiBjbGFzcz1cImxnLWZ1bGxzY3JlZW4gbGctaWNvblwiPjwvc3Bhbj4nO1xuICAgICAgICAgICAgICAgIHRoaXMuY29yZS4kb3V0ZXIuZmluZCgnLmxnLXRvb2xiYXInKS5hcHBlbmQoZnVsbFNjcmVlbik7XG4gICAgICAgICAgICAgICAgdGhpcy5mdWxsU2NyZWVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgRnVsbHNjcmVlbi5wcm90b3R5cGUucmVxdWVzdEZ1bGxzY3JlZW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICBpZiAoZWwucmVxdWVzdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAgIGVsLnJlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZWwubXNSZXF1ZXN0RnVsbHNjcmVlbikge1xuICAgICAgICAgICAgZWwubXNSZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgICAgICB9IGVsc2UgaWYgKGVsLm1velJlcXVlc3RGdWxsU2NyZWVuKSB7XG4gICAgICAgICAgICBlbC5tb3pSZXF1ZXN0RnVsbFNjcmVlbigpO1xuICAgICAgICB9IGVsc2UgaWYgKGVsLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgICBlbC53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbigpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEZ1bGxzY3JlZW4ucHJvdG90eXBlLmV4aXRGdWxsc2NyZWVuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5leGl0RnVsbHNjcmVlbikge1xuICAgICAgICAgICAgZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKTtcbiAgICAgICAgfSBlbHNlIGlmIChkb2N1bWVudC5tc0V4aXRGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5tc0V4aXRGdWxsc2NyZWVuKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbikge1xuICAgICAgICAgICAgZG9jdW1lbnQubW96Q2FuY2VsRnVsbFNjcmVlbigpO1xuICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LndlYmtpdEV4aXRGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgICBkb2N1bWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbigpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0d1aWRlL0FQSS9ET00vVXNpbmdfZnVsbF9zY3JlZW5fbW9kZVxuICAgIEZ1bGxzY3JlZW4ucHJvdG90eXBlLmZ1bGxTY3JlZW4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAkKGRvY3VtZW50KS5vbignZnVsbHNjcmVlbmNoYW5nZS5sZyB3ZWJraXRmdWxsc2NyZWVuY2hhbmdlLmxnIG1vemZ1bGxzY3JlZW5jaGFuZ2UubGcgTVNGdWxsc2NyZWVuQ2hhbmdlLmxnJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBfdGhpcy5jb3JlLiRvdXRlci50b2dnbGVDbGFzcygnbGctZnVsbHNjcmVlbi1vbicpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNvcmUuJG91dGVyLmZpbmQoJy5sZy1mdWxsc2NyZWVuJykub24oJ2NsaWNrLmxnJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoIWRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50ICYmXG4gICAgICAgICAgICAgICAgIWRvY3VtZW50Lm1vekZ1bGxTY3JlZW5FbGVtZW50ICYmICFkb2N1bWVudC53ZWJraXRGdWxsc2NyZWVuRWxlbWVudCAmJiAhZG9jdW1lbnQubXNGdWxsc2NyZWVuRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnJlcXVlc3RGdWxsc2NyZWVuKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF90aGlzLmV4aXRGdWxsc2NyZWVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIEZ1bGxzY3JlZW4ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAvLyBleGl0IGZyb20gZnVsbHNjcmVlbiBpZiBhY3RpdmF0ZWRcbiAgICAgICAgdGhpcy5leGl0RnVsbHNjcmVlbigpO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9mZignZnVsbHNjcmVlbmNoYW5nZS5sZyB3ZWJraXRmdWxsc2NyZWVuY2hhbmdlLmxnIG1vemZ1bGxzY3JlZW5jaGFuZ2UubGcgTVNGdWxsc2NyZWVuQ2hhbmdlLmxnJyk7XG4gICAgfTtcblxuICAgICQuZm4ubGlnaHRHYWxsZXJ5Lm1vZHVsZXMuZnVsbHNjcmVlbiA9IEZ1bGxzY3JlZW47XG5cbn0pKCk7XG5cbn0pKTtcbiIsIi8qISBsZy10aHVtYm5haWwgLSB2MS4xLjAgLSAyMDE3LTA4LTA4XHJcbiogaHR0cDovL3NhY2hpbmNob29sdXIuZ2l0aHViLmlvL2xpZ2h0R2FsbGVyeVxyXG4qIENvcHlyaWdodCAoYykgMjAxNyBTYWNoaW4gTjsgTGljZW5zZWQgR1BMdjMgKi9cclxuXHJcbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlIHVubGVzcyBhbWRNb2R1bGVJZCBpcyBzZXRcbiAgICBkZWZpbmUoWydqcXVlcnknXSwgZnVuY3Rpb24gKGEwKSB7XG4gICAgICByZXR1cm4gKGZhY3RvcnkoYTApKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAvLyBOb2RlLiBEb2VzIG5vdCB3b3JrIHdpdGggc3RyaWN0IENvbW1vbkpTLCBidXRcbiAgICAvLyBvbmx5IENvbW1vbkpTLWxpa2UgZW52aXJvbm1lbnRzIHRoYXQgc3VwcG9ydCBtb2R1bGUuZXhwb3J0cyxcbiAgICAvLyBsaWtlIE5vZGUuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoJ2pxdWVyeScpKTtcbiAgfSBlbHNlIHtcbiAgICBmYWN0b3J5KGpRdWVyeSk7XG4gIH1cbn0odGhpcywgZnVuY3Rpb24gKCQpIHtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICB0aHVtYm5haWw6IHRydWUsXG5cbiAgICAgICAgYW5pbWF0ZVRodW1iOiB0cnVlLFxuICAgICAgICBjdXJyZW50UGFnZXJQb3NpdGlvbjogJ21pZGRsZScsXG5cbiAgICAgICAgdGh1bWJXaWR0aDogMTAwLFxuICAgICAgICB0aHVtYkhlaWdodDogJzgwcHgnLFxuICAgICAgICB0aHVtYkNvbnRIZWlnaHQ6IDEwMCxcbiAgICAgICAgdGh1bWJNYXJnaW46IDUsXG5cbiAgICAgICAgZXhUaHVtYkltYWdlOiBmYWxzZSxcbiAgICAgICAgc2hvd1RodW1iQnlEZWZhdWx0OiB0cnVlLFxuICAgICAgICB0b29nbGVUaHVtYjogdHJ1ZSxcbiAgICAgICAgcHVsbENhcHRpb25VcDogdHJ1ZSxcblxuICAgICAgICBlbmFibGVUaHVtYkRyYWc6IHRydWUsXG4gICAgICAgIGVuYWJsZVRodW1iU3dpcGU6IHRydWUsXG4gICAgICAgIHN3aXBlVGhyZXNob2xkOiA1MCxcblxuICAgICAgICBsb2FkWW91dHViZVRodW1ibmFpbDogdHJ1ZSxcbiAgICAgICAgeW91dHViZVRodW1iU2l6ZTogMSxcblxuICAgICAgICBsb2FkVmltZW9UaHVtYm5haWw6IHRydWUsXG4gICAgICAgIHZpbWVvVGh1bWJTaXplOiAndGh1bWJuYWlsX3NtYWxsJyxcblxuICAgICAgICBsb2FkRGFpbHltb3Rpb25UaHVtYm5haWw6IHRydWVcbiAgICB9O1xuXG4gICAgdmFyIFRodW1ibmFpbCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcblxuICAgICAgICAvLyBnZXQgbGlnaHRHYWxsZXJ5IGNvcmUgcGx1Z2luIGRhdGFcbiAgICAgICAgdGhpcy5jb3JlID0gJChlbGVtZW50KS5kYXRhKCdsaWdodEdhbGxlcnknKTtcblxuICAgICAgICAvLyBleHRlbmQgbW9kdWxlIGRlZmF1bHQgc2V0dGluZ3Mgd2l0aCBsaWdodEdhbGxlcnkgY29yZSBzZXR0aW5nc1xuICAgICAgICB0aGlzLmNvcmUucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgdGhpcy5jb3JlLnMpO1xuXG4gICAgICAgIHRoaXMuJGVsID0gJChlbGVtZW50KTtcbiAgICAgICAgdGhpcy4kdGh1bWJPdXRlciA9IG51bGw7XG4gICAgICAgIHRoaXMudGh1bWJPdXRlcldpZHRoID0gMDtcbiAgICAgICAgdGhpcy50aHVtYlRvdGFsV2lkdGggPSAodGhpcy5jb3JlLiRpdGVtcy5sZW5ndGggKiAodGhpcy5jb3JlLnMudGh1bWJXaWR0aCArIHRoaXMuY29yZS5zLnRodW1iTWFyZ2luKSk7XG4gICAgICAgIHRoaXMudGh1bWJJbmRleCA9IHRoaXMuY29yZS5pbmRleDtcblxuICAgICAgICBpZiAodGhpcy5jb3JlLnMuYW5pbWF0ZVRodW1iKSB7XG4gICAgICAgICAgICB0aGlzLmNvcmUucy50aHVtYkhlaWdodCA9ICcxMDAlJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRodW1ibmFpbCBhbmltYXRpb24gdmFsdWVcbiAgICAgICAgdGhpcy5sZWZ0ID0gMDtcblxuICAgICAgICB0aGlzLmluaXQoKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgVGh1bWJuYWlsLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmNvcmUucy50aHVtYm5haWwgJiYgdGhpcy5jb3JlLiRpdGVtcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb3JlLnMuc2hvd1RodW1iQnlEZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jb3JlLiRvdXRlci5hZGRDbGFzcygnbGctdGh1bWItb3BlbicpO1xuICAgICAgICAgICAgICAgIH0sIDcwMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmNvcmUucy5wdWxsQ2FwdGlvblVwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3JlLiRvdXRlci5hZGRDbGFzcygnbGctcHVsbC1jYXB0aW9uLXVwJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuYnVpbGQoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvcmUucy5hbmltYXRlVGh1bWIgJiYgdGhpcy5jb3JlLmRvQ3NzKCkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb3JlLnMuZW5hYmxlVGh1bWJEcmFnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlVGh1bWJEcmFnKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29yZS5zLmVuYWJsZVRodW1iU3dpcGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmFibGVUaHVtYlN3aXBlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy50aHVtYkNsaWNrYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRodW1iQ2xpY2thYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy50b29nbGUoKTtcbiAgICAgICAgICAgIHRoaXMudGh1bWJrZXlQcmVzcygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFRodW1ibmFpbC5wcm90b3R5cGUuYnVpbGQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHRodW1iTGlzdCA9ICcnO1xuICAgICAgICB2YXIgdmltZW9FcnJvclRodW1iU2l6ZSA9ICcnO1xuICAgICAgICB2YXIgJHRodW1iO1xuICAgICAgICB2YXIgaHRtbCA9ICc8ZGl2IGNsYXNzPVwibGctdGh1bWItb3V0ZXJcIj4nICtcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibGctdGh1bWIgbGctZ3JvdXBcIj4nICtcbiAgICAgICAgICAgICc8L2Rpdj4nICtcbiAgICAgICAgICAgICc8L2Rpdj4nO1xuXG4gICAgICAgIHN3aXRjaCAodGhpcy5jb3JlLnMudmltZW9UaHVtYlNpemUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3RodW1ibmFpbF9sYXJnZSc6XG4gICAgICAgICAgICAgICAgdmltZW9FcnJvclRodW1iU2l6ZSA9ICc2NDAnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndGh1bWJuYWlsX21lZGl1bSc6XG4gICAgICAgICAgICAgICAgdmltZW9FcnJvclRodW1iU2l6ZSA9ICcyMDB4MTUwJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3RodW1ibmFpbF9zbWFsbCc6XG4gICAgICAgICAgICAgICAgdmltZW9FcnJvclRodW1iU2l6ZSA9ICcxMDB4NzUnO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMuY29yZS4kb3V0ZXIuYWRkQ2xhc3MoJ2xnLWhhcy10aHVtYicpO1xuXG4gICAgICAgIF90aGlzLmNvcmUuJG91dGVyLmZpbmQoJy5sZycpLmFwcGVuZChodG1sKTtcblxuICAgICAgICBfdGhpcy4kdGh1bWJPdXRlciA9IF90aGlzLmNvcmUuJG91dGVyLmZpbmQoJy5sZy10aHVtYi1vdXRlcicpO1xuICAgICAgICBfdGhpcy50aHVtYk91dGVyV2lkdGggPSBfdGhpcy4kdGh1bWJPdXRlci53aWR0aCgpO1xuXG4gICAgICAgIGlmIChfdGhpcy5jb3JlLnMuYW5pbWF0ZVRodW1iKSB7XG4gICAgICAgICAgICBfdGhpcy5jb3JlLiRvdXRlci5maW5kKCcubGctdGh1bWInKS5jc3Moe1xuICAgICAgICAgICAgICAgIHdpZHRoOiBfdGhpcy50aHVtYlRvdGFsV2lkdGggKyAncHgnLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNvcmUucy5hbmltYXRlVGh1bWIpIHtcbiAgICAgICAgICAgIF90aGlzLiR0aHVtYk91dGVyLmNzcygnaGVpZ2h0JywgX3RoaXMuY29yZS5zLnRodW1iQ29udEhlaWdodCArICdweCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0VGh1bWIoc3JjLCB0aHVtYiwgaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBpc1ZpZGVvID0gX3RoaXMuY29yZS5pc1ZpZGVvKHNyYywgaW5kZXgpIHx8IHt9O1xuICAgICAgICAgICAgdmFyIHRodW1iSW1nO1xuICAgICAgICAgICAgdmFyIHZpbWVvSWQgPSAnJztcblxuICAgICAgICAgICAgaWYgKGlzVmlkZW8ueW91dHViZSB8fCBpc1ZpZGVvLnZpbWVvIHx8IGlzVmlkZW8uZGFpbHltb3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNWaWRlby55b3V0dWJlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5jb3JlLnMubG9hZFlvdXR1YmVUaHVtYm5haWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRodW1iSW1nID0gJy8vaW1nLnlvdXR1YmUuY29tL3ZpLycgKyBpc1ZpZGVvLnlvdXR1YmVbMV0gKyAnLycgKyBfdGhpcy5jb3JlLnMueW91dHViZVRodW1iU2l6ZSArICcuanBnJztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRodW1iSW1nID0gdGh1bWI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzVmlkZW8udmltZW8pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmNvcmUucy5sb2FkVmltZW9UaHVtYm5haWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRodW1iSW1nID0gJy8vaS52aW1lb2Nkbi5jb20vdmlkZW8vZXJyb3JfJyArIHZpbWVvRXJyb3JUaHVtYlNpemUgKyAnLmpwZyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aW1lb0lkID0gaXNWaWRlby52aW1lb1sxXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRodW1iSW1nID0gdGh1bWI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzVmlkZW8uZGFpbHltb3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmNvcmUucy5sb2FkRGFpbHltb3Rpb25UaHVtYm5haWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRodW1iSW1nID0gJy8vd3d3LmRhaWx5bW90aW9uLmNvbS90aHVtYm5haWwvdmlkZW8vJyArIGlzVmlkZW8uZGFpbHltb3Rpb25bMV07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHVtYkltZyA9IHRodW1iO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHVtYkltZyA9IHRodW1iO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHVtYkxpc3QgKz0gJzxkaXYgZGF0YS12aW1lby1pZD1cIicgKyB2aW1lb0lkICsgJ1wiIGNsYXNzPVwibGctdGh1bWItaXRlbVwiIHN0eWxlPVwid2lkdGg6JyArIF90aGlzLmNvcmUucy50aHVtYldpZHRoICsgJ3B4OyBoZWlnaHQ6ICcgKyBfdGhpcy5jb3JlLnMudGh1bWJIZWlnaHQgKyAnOyBtYXJnaW4tcmlnaHQ6ICcgKyBfdGhpcy5jb3JlLnMudGh1bWJNYXJnaW4gKyAncHhcIj48aW1nIHNyYz1cIicgKyB0aHVtYkltZyArICdcIiAvPjwvZGl2Pic7XG4gICAgICAgICAgICB2aW1lb0lkID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX3RoaXMuY29yZS5zLmR5bmFtaWMpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX3RoaXMuY29yZS5zLmR5bmFtaWNFbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGdldFRodW1iKF90aGlzLmNvcmUucy5keW5hbWljRWxbaV0uc3JjLCBfdGhpcy5jb3JlLnMuZHluYW1pY0VsW2ldLnRodW1iLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLmNvcmUuJGl0ZW1zLmVhY2goZnVuY3Rpb24oaSkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCFfdGhpcy5jb3JlLnMuZXhUaHVtYkltYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGdldFRodW1iKCQodGhpcykuYXR0cignaHJlZicpIHx8ICQodGhpcykuYXR0cignZGF0YS1zcmMnKSwgJCh0aGlzKS5maW5kKCdpbWcnKS5hdHRyKCdzcmMnKSwgaSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0VGh1bWIoJCh0aGlzKS5hdHRyKCdocmVmJykgfHwgJCh0aGlzKS5hdHRyKCdkYXRhLXNyYycpLCAkKHRoaXMpLmF0dHIoX3RoaXMuY29yZS5zLmV4VGh1bWJJbWFnZSksIGkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy5jb3JlLiRvdXRlci5maW5kKCcubGctdGh1bWInKS5odG1sKHRodW1iTGlzdCk7XG5cbiAgICAgICAgJHRodW1iID0gX3RoaXMuY29yZS4kb3V0ZXIuZmluZCgnLmxnLXRodW1iLWl0ZW0nKTtcblxuICAgICAgICAvLyBMb2FkIHZpbWVvIHRodW1ibmFpbHNcbiAgICAgICAgJHRodW1iLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgICAgdmFyIHZpbWVvVmlkZW9JZCA9ICR0aGlzLmF0dHIoJ2RhdGEtdmltZW8taWQnKTtcblxuICAgICAgICAgICAgaWYgKHZpbWVvVmlkZW9JZCkge1xuICAgICAgICAgICAgICAgICQuZ2V0SlNPTignLy93d3cudmltZW8uY29tL2FwaS92Mi92aWRlby8nICsgdmltZW9WaWRlb0lkICsgJy5qc29uP2NhbGxiYWNrPT8nLCB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdDogJ2pzb24nXG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAkdGhpcy5maW5kKCdpbWcnKS5hdHRyKCdzcmMnLCBkYXRhWzBdW190aGlzLmNvcmUucy52aW1lb1RodW1iU2l6ZV0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBtYW5hZ2UgYWN0aXZlIGNsYXNzIGZvciB0aHVtYm5haWxcbiAgICAgICAgJHRodW1iLmVxKF90aGlzLmNvcmUuaW5kZXgpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgX3RoaXMuY29yZS4kZWwub24oJ29uQmVmb3JlU2xpZGUubGcudG0nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICR0aHVtYi5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAkdGh1bWIuZXEoX3RoaXMuY29yZS5pbmRleCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkdGh1bWIub24oJ2NsaWNrLmxnIHRvdWNoZW5kLmxnJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgXyR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBJbiBJRTkgYW5kIGJlbGxvdyB0b3VjaCBkb2VzIG5vdCBzdXBwb3J0XG4gICAgICAgICAgICAgICAgLy8gR28gdG8gc2xpZGUgaWYgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IGNzcyB0cmFuc2l0aW9uc1xuICAgICAgICAgICAgICAgIGlmICgoX3RoaXMudGh1bWJDbGlja2FibGUgJiYgIV90aGlzLmNvcmUubGdCdXN5KSB8fCAhX3RoaXMuY29yZS5kb0NzcygpKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNvcmUuaW5kZXggPSBfJHRoaXMuaW5kZXgoKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY29yZS5zbGlkZShfdGhpcy5jb3JlLmluZGV4LCBmYWxzZSwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgX3RoaXMuY29yZS4kZWwub24oJ29uQmVmb3JlU2xpZGUubGcudG0nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIF90aGlzLmFuaW1hdGVUaHVtYihfdGhpcy5jb3JlLmluZGV4KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUubGcudGh1bWIgb3JpZW50YXRpb25jaGFuZ2UubGcudGh1bWInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYW5pbWF0ZVRodW1iKF90aGlzLmNvcmUuaW5kZXgpO1xuICAgICAgICAgICAgICAgIF90aGlzLnRodW1iT3V0ZXJXaWR0aCA9IF90aGlzLiR0aHVtYk91dGVyLndpZHRoKCk7XG4gICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBUaHVtYm5haWwucHJvdG90eXBlLnNldFRyYW5zbGF0ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIC8vIGpRdWVyeSBzdXBwb3J0cyBBdXRvbWF0aWMgQ1NTIHByZWZpeGluZyBzaW5jZSBqUXVlcnkgMS44LjBcbiAgICAgICAgdGhpcy5jb3JlLiRvdXRlci5maW5kKCcubGctdGh1bWInKS5jc3Moe1xuICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoLScgKyAodmFsdWUpICsgJ3B4LCAwcHgsIDBweCknXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBUaHVtYm5haWwucHJvdG90eXBlLmFuaW1hdGVUaHVtYiA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgIHZhciAkdGh1bWIgPSB0aGlzLmNvcmUuJG91dGVyLmZpbmQoJy5sZy10aHVtYicpO1xuICAgICAgICBpZiAodGhpcy5jb3JlLnMuYW5pbWF0ZVRodW1iKSB7XG4gICAgICAgICAgICB2YXIgcG9zaXRpb247XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuY29yZS5zLmN1cnJlbnRQYWdlclBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gMDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbWlkZGxlJzpcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPSAodGhpcy50aHVtYk91dGVyV2lkdGggLyAyKSAtICh0aGlzLmNvcmUucy50aHVtYldpZHRoIC8gMik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gPSB0aGlzLnRodW1iT3V0ZXJXaWR0aCAtIHRoaXMuY29yZS5zLnRodW1iV2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxlZnQgPSAoKHRoaXMuY29yZS5zLnRodW1iV2lkdGggKyB0aGlzLmNvcmUucy50aHVtYk1hcmdpbikgKiBpbmRleCAtIDEpIC0gcG9zaXRpb247XG4gICAgICAgICAgICBpZiAodGhpcy5sZWZ0ID4gKHRoaXMudGh1bWJUb3RhbFdpZHRoIC0gdGhpcy50aHVtYk91dGVyV2lkdGgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0ID0gdGhpcy50aHVtYlRvdGFsV2lkdGggLSB0aGlzLnRodW1iT3V0ZXJXaWR0aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMubGVmdCA8IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnQgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5jb3JlLmxHYWxsZXJ5T24pIHtcbiAgICAgICAgICAgICAgICBpZiAoISR0aHVtYi5oYXNDbGFzcygnb24nKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvcmUuJG91dGVyLmZpbmQoJy5sZy10aHVtYicpLmNzcygndHJhbnNpdGlvbi1kdXJhdGlvbicsIHRoaXMuY29yZS5zLnNwZWVkICsgJ21zJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNvcmUuZG9Dc3MoKSkge1xuICAgICAgICAgICAgICAgICAgICAkdGh1bWIuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtdGhpcy5sZWZ0ICsgJ3B4J1xuICAgICAgICAgICAgICAgICAgICB9LCB0aGlzLmNvcmUucy5zcGVlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY29yZS5kb0NzcygpKSB7XG4gICAgICAgICAgICAgICAgICAgICR0aHVtYi5jc3MoJ2xlZnQnLCAtdGhpcy5sZWZ0ICsgJ3B4Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNldFRyYW5zbGF0ZSh0aGlzLmxlZnQpO1xuXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gRW5hYmxlIHRodW1ibmFpbCBkcmFnZ2luZyBhbmQgc3dpcGluZ1xuICAgIFRodW1ibmFpbC5wcm90b3R5cGUuZW5hYmxlVGh1bWJEcmFnID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHN0YXJ0Q29vcmRzID0gMDtcbiAgICAgICAgdmFyIGVuZENvb3JkcyA9IDA7XG4gICAgICAgIHZhciBpc0RyYWdpbmcgPSBmYWxzZTtcbiAgICAgICAgdmFyIGlzTW92ZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIHRlbXBMZWZ0ID0gMDtcblxuICAgICAgICBfdGhpcy4kdGh1bWJPdXRlci5hZGRDbGFzcygnbGctZ3JhYicpO1xuXG4gICAgICAgIF90aGlzLmNvcmUuJG91dGVyLmZpbmQoJy5sZy10aHVtYicpLm9uKCdtb3VzZWRvd24ubGcudGh1bWInLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMudGh1bWJUb3RhbFdpZHRoID4gX3RoaXMudGh1bWJPdXRlcldpZHRoKSB7XG4gICAgICAgICAgICAgICAgLy8gZXhlY3V0ZSBvbmx5IG9uIC5sZy1vYmplY3RcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgc3RhcnRDb29yZHMgPSBlLnBhZ2VYO1xuICAgICAgICAgICAgICAgIGlzRHJhZ2luZyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAvLyAqKiBGaXggZm9yIHdlYmtpdCBjdXJzb3IgaXNzdWUgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTI2NzIzXG4gICAgICAgICAgICAgICAgX3RoaXMuY29yZS4kb3V0ZXIuc2Nyb2xsTGVmdCArPSAxO1xuICAgICAgICAgICAgICAgIF90aGlzLmNvcmUuJG91dGVyLnNjcm9sbExlZnQgLT0gMTtcblxuICAgICAgICAgICAgICAgIC8vICpcbiAgICAgICAgICAgICAgICBfdGhpcy50aHVtYkNsaWNrYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIF90aGlzLiR0aHVtYk91dGVyLnJlbW92ZUNsYXNzKCdsZy1ncmFiJykuYWRkQ2xhc3MoJ2xnLWdyYWJiaW5nJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQod2luZG93KS5vbignbW91c2Vtb3ZlLmxnLnRodW1iJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYgKGlzRHJhZ2luZykge1xuICAgICAgICAgICAgICAgIHRlbXBMZWZ0ID0gX3RoaXMubGVmdDtcbiAgICAgICAgICAgICAgICBpc01vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBlbmRDb29yZHMgPSBlLnBhZ2VYO1xuXG4gICAgICAgICAgICAgICAgX3RoaXMuJHRodW1iT3V0ZXIuYWRkQ2xhc3MoJ2xnLWRyYWdnaW5nJyk7XG5cbiAgICAgICAgICAgICAgICB0ZW1wTGVmdCA9IHRlbXBMZWZ0IC0gKGVuZENvb3JkcyAtIHN0YXJ0Q29vcmRzKTtcblxuICAgICAgICAgICAgICAgIGlmICh0ZW1wTGVmdCA+IChfdGhpcy50aHVtYlRvdGFsV2lkdGggLSBfdGhpcy50aHVtYk91dGVyV2lkdGgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBMZWZ0ID0gX3RoaXMudGh1bWJUb3RhbFdpZHRoIC0gX3RoaXMudGh1bWJPdXRlcldpZHRoO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0ZW1wTGVmdCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcExlZnQgPSAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIG1vdmUgY3VycmVudCBzbGlkZVxuICAgICAgICAgICAgICAgIF90aGlzLnNldFRyYW5zbGF0ZSh0ZW1wTGVmdCk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdtb3VzZXVwLmxnLnRodW1iJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoaXNNb3ZlZCkge1xuICAgICAgICAgICAgICAgIGlzTW92ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBfdGhpcy4kdGh1bWJPdXRlci5yZW1vdmVDbGFzcygnbGctZHJhZ2dpbmcnKTtcblxuICAgICAgICAgICAgICAgIF90aGlzLmxlZnQgPSB0ZW1wTGVmdDtcblxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhlbmRDb29yZHMgLSBzdGFydENvb3JkcykgPCBfdGhpcy5jb3JlLnMuc3dpcGVUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudGh1bWJDbGlja2FibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy50aHVtYkNsaWNrYWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpc0RyYWdpbmcpIHtcbiAgICAgICAgICAgICAgICBpc0RyYWdpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBfdGhpcy4kdGh1bWJPdXRlci5yZW1vdmVDbGFzcygnbGctZ3JhYmJpbmcnKS5hZGRDbGFzcygnbGctZ3JhYicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBUaHVtYm5haWwucHJvdG90eXBlLmVuYWJsZVRodW1iU3dpcGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHN0YXJ0Q29vcmRzID0gMDtcbiAgICAgICAgdmFyIGVuZENvb3JkcyA9IDA7XG4gICAgICAgIHZhciBpc01vdmVkID0gZmFsc2U7XG4gICAgICAgIHZhciB0ZW1wTGVmdCA9IDA7XG5cbiAgICAgICAgX3RoaXMuY29yZS4kb3V0ZXIuZmluZCgnLmxnLXRodW1iJykub24oJ3RvdWNoc3RhcnQubGcnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMudGh1bWJUb3RhbFdpZHRoID4gX3RoaXMudGh1bWJPdXRlcldpZHRoKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHN0YXJ0Q29vcmRzID0gZS5vcmlnaW5hbEV2ZW50LnRhcmdldFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgICAgICAgICAgX3RoaXMudGh1bWJDbGlja2FibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgX3RoaXMuY29yZS4kb3V0ZXIuZmluZCgnLmxnLXRodW1iJykub24oJ3RvdWNobW92ZS5sZycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy50aHVtYlRvdGFsV2lkdGggPiBfdGhpcy50aHVtYk91dGVyV2lkdGgpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZW5kQ29vcmRzID0gZS5vcmlnaW5hbEV2ZW50LnRhcmdldFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgICAgICAgICAgaXNNb3ZlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBfdGhpcy4kdGh1bWJPdXRlci5hZGRDbGFzcygnbGctZHJhZ2dpbmcnKTtcblxuICAgICAgICAgICAgICAgIHRlbXBMZWZ0ID0gX3RoaXMubGVmdDtcblxuICAgICAgICAgICAgICAgIHRlbXBMZWZ0ID0gdGVtcExlZnQgLSAoZW5kQ29vcmRzIC0gc3RhcnRDb29yZHMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRlbXBMZWZ0ID4gKF90aGlzLnRodW1iVG90YWxXaWR0aCAtIF90aGlzLnRodW1iT3V0ZXJXaWR0aCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcExlZnQgPSBfdGhpcy50aHVtYlRvdGFsV2lkdGggLSBfdGhpcy50aHVtYk91dGVyV2lkdGg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRlbXBMZWZ0IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB0ZW1wTGVmdCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gbW92ZSBjdXJyZW50IHNsaWRlXG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0VHJhbnNsYXRlKHRlbXBMZWZ0KTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBfdGhpcy5jb3JlLiRvdXRlci5maW5kKCcubGctdGh1bWInKS5vbigndG91Y2hlbmQubGcnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy50aHVtYlRvdGFsV2lkdGggPiBfdGhpcy50aHVtYk91dGVyV2lkdGgpIHtcblxuICAgICAgICAgICAgICAgIGlmIChpc01vdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzTW92ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuJHRodW1iT3V0ZXIucmVtb3ZlQ2xhc3MoJ2xnLWRyYWdnaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhlbmRDb29yZHMgLSBzdGFydENvb3JkcykgPCBfdGhpcy5jb3JlLnMuc3dpcGVUaHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnRodW1iQ2xpY2thYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmxlZnQgPSB0ZW1wTGVmdDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy50aHVtYkNsaWNrYWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy50aHVtYkNsaWNrYWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIFRodW1ibmFpbC5wcm90b3R5cGUudG9vZ2xlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChfdGhpcy5jb3JlLnMudG9vZ2xlVGh1bWIpIHtcbiAgICAgICAgICAgIF90aGlzLmNvcmUuJG91dGVyLmFkZENsYXNzKCdsZy1jYW4tdG9nZ2xlJyk7XG4gICAgICAgICAgICBfdGhpcy4kdGh1bWJPdXRlci5hcHBlbmQoJzxzcGFuIGNsYXNzPVwibGctdG9vZ2xlLXRodW1iIGxnLWljb25cIj48L3NwYW4+Jyk7XG4gICAgICAgICAgICBfdGhpcy5jb3JlLiRvdXRlci5maW5kKCcubGctdG9vZ2xlLXRodW1iJykub24oJ2NsaWNrLmxnJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuY29yZS4kb3V0ZXIudG9nZ2xlQ2xhc3MoJ2xnLXRodW1iLW9wZW4nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFRodW1ibmFpbC5wcm90b3R5cGUudGh1bWJrZXlQcmVzcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAkKHdpbmRvdykub24oJ2tleWRvd24ubGcudGh1bWInLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzOCkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5jb3JlLiRvdXRlci5hZGRDbGFzcygnbGctdGh1bWItb3BlbicpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDQwKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIF90aGlzLmNvcmUuJG91dGVyLnJlbW92ZUNsYXNzKCdsZy10aHVtYi1vcGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBUaHVtYm5haWwucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuY29yZS5zLnRodW1ibmFpbCAmJiB0aGlzLmNvcmUuJGl0ZW1zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICQod2luZG93KS5vZmYoJ3Jlc2l6ZS5sZy50aHVtYiBvcmllbnRhdGlvbmNoYW5nZS5sZy50aHVtYiBrZXlkb3duLmxnLnRodW1iJyk7XG4gICAgICAgICAgICB0aGlzLiR0aHVtYk91dGVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgdGhpcy5jb3JlLiRvdXRlci5yZW1vdmVDbGFzcygnbGctaGFzLXRodW1iJyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgJC5mbi5saWdodEdhbGxlcnkubW9kdWxlcy5UaHVtYm5haWwgPSBUaHVtYm5haWw7XG5cbn0pKCk7XG5cbn0pKTtcbiIsIi8qISBsZy16b29tIC0gdjEuMS4wIC0gMjAxNy0wOC0wOFxyXG4qIGh0dHA6Ly9zYWNoaW5jaG9vbHVyLmdpdGh1Yi5pby9saWdodEdhbGxlcnlcclxuKiBDb3B5cmlnaHQgKGMpIDIwMTcgU2FjaGluIE47IExpY2Vuc2VkIEdQTHYzICovXHJcblxyXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZSB1bmxlc3MgYW1kTW9kdWxlSWQgaXMgc2V0XG4gICAgZGVmaW5lKFsnanF1ZXJ5J10sIGZ1bmN0aW9uIChhMCkge1xuICAgICAgcmV0dXJuIChmYWN0b3J5KGEwKSk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgLy8gTm9kZS4gRG9lcyBub3Qgd29yayB3aXRoIHN0cmljdCBDb21tb25KUywgYnV0XG4gICAgLy8gb25seSBDb21tb25KUy1saWtlIGVudmlyb25tZW50cyB0aGF0IHN1cHBvcnQgbW9kdWxlLmV4cG9ydHMsXG4gICAgLy8gbGlrZSBOb2RlLlxuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSk7XG4gIH0gZWxzZSB7XG4gICAgZmFjdG9yeShqUXVlcnkpO1xuICB9XG59KHRoaXMsIGZ1bmN0aW9uICgkKSB7XG5cbihmdW5jdGlvbigpIHtcblxuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBnZXRVc2VMZWZ0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB1c2VMZWZ0ID0gZmFsc2U7XG4gICAgICAgIHZhciBpc0Nocm9tZSA9IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0Nocm9tKGV8aXVtKVxcLyhbMC05XSspXFwuLyk7XG4gICAgICAgIGlmIChpc0Nocm9tZSAmJiBwYXJzZUludChpc0Nocm9tZVsyXSwgMTApIDwgNTQpIHtcbiAgICAgICAgICAgIHVzZUxlZnQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVzZUxlZnQ7XG4gICAgfTtcblxuICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgc2NhbGU6IDEsXG4gICAgICAgIHpvb206IHRydWUsXG4gICAgICAgIGFjdHVhbFNpemU6IHRydWUsXG4gICAgICAgIGVuYWJsZVpvb21BZnRlcjogMzAwLFxuICAgICAgICB1c2VMZWZ0Rm9yWm9vbTogZ2V0VXNlTGVmdCgpXG4gICAgfTtcblxuICAgIHZhciBab29tID0gZnVuY3Rpb24oZWxlbWVudCkge1xuXG4gICAgICAgIHRoaXMuY29yZSA9ICQoZWxlbWVudCkuZGF0YSgnbGlnaHRHYWxsZXJ5Jyk7XG5cbiAgICAgICAgdGhpcy5jb3JlLnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIHRoaXMuY29yZS5zKTtcblxuICAgICAgICBpZiAodGhpcy5jb3JlLnMuem9vbSAmJiB0aGlzLmNvcmUuZG9Dc3MoKSkge1xuICAgICAgICAgICAgdGhpcy5pbml0KCk7XG5cbiAgICAgICAgICAgIC8vIFN0b3JlIHRoZSB6b29tYWJsZSB0aW1lb3V0IHZhbHVlIGp1c3QgdG8gY2xlYXIgaXQgd2hpbGUgY2xvc2luZ1xuICAgICAgICAgICAgdGhpcy56b29tYWJsZXRpbWVvdXQgPSBmYWxzZTtcblxuICAgICAgICAgICAgLy8gU2V0IHRoZSBpbml0aWFsIHZhbHVlIGNlbnRlclxuICAgICAgICAgICAgdGhpcy5wYWdlWCA9ICQod2luZG93KS53aWR0aCgpIC8gMjtcbiAgICAgICAgICAgIHRoaXMucGFnZVkgPSAoJCh3aW5kb3cpLmhlaWdodCgpIC8gMikgKyAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgWm9vbS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciB6b29tSWNvbnMgPSAnPHNwYW4gaWQ9XCJsZy16b29tLWluXCIgY2xhc3M9XCJsZy1pY29uXCI+PC9zcGFuPjxzcGFuIGlkPVwibGctem9vbS1vdXRcIiBjbGFzcz1cImxnLWljb25cIj48L3NwYW4+JztcblxuICAgICAgICBpZiAoX3RoaXMuY29yZS5zLmFjdHVhbFNpemUpIHtcbiAgICAgICAgICAgIHpvb21JY29ucyArPSAnPHNwYW4gaWQ9XCJsZy1hY3R1YWwtc2l6ZVwiIGNsYXNzPVwibGctaWNvblwiPjwvc3Bhbj4nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF90aGlzLmNvcmUucy51c2VMZWZ0Rm9yWm9vbSkge1xuICAgICAgICAgICAgX3RoaXMuY29yZS4kb3V0ZXIuYWRkQ2xhc3MoJ2xnLXVzZS1sZWZ0LWZvci16b29tJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdGhpcy5jb3JlLiRvdXRlci5hZGRDbGFzcygnbGctdXNlLXRyYW5zaXRpb24tZm9yLXpvb20nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29yZS4kb3V0ZXIuZmluZCgnLmxnLXRvb2xiYXInKS5hcHBlbmQoem9vbUljb25zKTtcblxuICAgICAgICAvLyBBZGQgem9vbWFibGUgY2xhc3NcbiAgICAgICAgX3RoaXMuY29yZS4kZWwub24oJ29uU2xpZGVJdGVtTG9hZC5sZy50bS56b29tJywgZnVuY3Rpb24oZXZlbnQsIGluZGV4LCBkZWxheSkge1xuXG4gICAgICAgICAgICAvLyBkZWxheSB3aWxsIGJlIDAgZXhjZXB0IGZpcnN0IHRpbWVcbiAgICAgICAgICAgIHZhciBfc3BlZWQgPSBfdGhpcy5jb3JlLnMuZW5hYmxlWm9vbUFmdGVyICsgZGVsYXk7XG5cbiAgICAgICAgICAgIC8vIHNldCBfc3BlZWQgdmFsdWUgMCBpZiBnYWxsZXJ5IG9wZW5lZCBmcm9tIGRpcmVjdCB1cmwgYW5kIGlmIGl0IGlzIGZpcnN0IHNsaWRlXG4gICAgICAgICAgICBpZiAoJCgnYm9keScpLmhhc0NsYXNzKCdsZy1mcm9tLWhhc2gnKSAmJiBkZWxheSkge1xuXG4gICAgICAgICAgICAgICAgLy8gd2lsbCBleGVjdXRlIG9ubHkgb25jZVxuICAgICAgICAgICAgICAgIF9zcGVlZCA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGxnLWZyb20taGFzaCB0byBlbmFibGUgc3RhcnRpbmcgYW5pbWF0aW9uLlxuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbGctZnJvbS1oYXNoJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF90aGlzLnpvb21hYmxldGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuY29yZS4kc2xpZGUuZXEoaW5kZXgpLmFkZENsYXNzKCdsZy16b29tYWJsZScpO1xuICAgICAgICAgICAgfSwgX3NwZWVkICsgMzApO1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgc2NhbGUgPSAxO1xuICAgICAgICAvKipcbiAgICAgICAgICogQGRlc2MgSW1hZ2Ugem9vbVxuICAgICAgICAgKiBUcmFuc2xhdGUgdGhlIHdyYXAgYW5kIHNjYWxlIHRoZSBpbWFnZSB0byBnZXQgYmV0dGVyIHVzZXIgZXhwZXJpZW5jZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gc2NhbGVWYWwgLSBab29tIGRlY3JlbWVudC9pbmNyZW1lbnQgdmFsdWVcbiAgICAgICAgICovXG4gICAgICAgIHZhciB6b29tID0gZnVuY3Rpb24oc2NhbGVWYWwpIHtcblxuICAgICAgICAgICAgdmFyICRpbWFnZSA9IF90aGlzLmNvcmUuJG91dGVyLmZpbmQoJy5sZy1jdXJyZW50IC5sZy1pbWFnZScpO1xuICAgICAgICAgICAgdmFyIF94O1xuICAgICAgICAgICAgdmFyIF95O1xuXG4gICAgICAgICAgICAvLyBGaW5kIG9mZnNldCBtYW51YWxseSB0byBhdm9pZCBpc3N1ZSBhZnRlciB6b29tXG4gICAgICAgICAgICB2YXIgb2Zmc2V0WCA9ICgkKHdpbmRvdykud2lkdGgoKSAtICRpbWFnZS5wcm9wKCdvZmZzZXRXaWR0aCcpKSAvIDI7XG4gICAgICAgICAgICB2YXIgb2Zmc2V0WSA9ICgoJCh3aW5kb3cpLmhlaWdodCgpIC0gJGltYWdlLnByb3AoJ29mZnNldEhlaWdodCcpKSAvIDIpICsgJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG4gICAgICAgICAgICBfeCA9IF90aGlzLnBhZ2VYIC0gb2Zmc2V0WDtcbiAgICAgICAgICAgIF95ID0gX3RoaXMucGFnZVkgLSBvZmZzZXRZO1xuXG4gICAgICAgICAgICB2YXIgeCA9IChzY2FsZVZhbCAtIDEpICogKF94KTtcbiAgICAgICAgICAgIHZhciB5ID0gKHNjYWxlVmFsIC0gMSkgKiAoX3kpO1xuXG4gICAgICAgICAgICAkaW1hZ2UuY3NzKCd0cmFuc2Zvcm0nLCAnc2NhbGUzZCgnICsgc2NhbGVWYWwgKyAnLCAnICsgc2NhbGVWYWwgKyAnLCAxKScpLmF0dHIoJ2RhdGEtc2NhbGUnLCBzY2FsZVZhbCk7XG5cbiAgICAgICAgICAgIGlmIChfdGhpcy5jb3JlLnMudXNlTGVmdEZvclpvb20pIHtcbiAgICAgICAgICAgICAgICAkaW1hZ2UucGFyZW50KCkuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLXggKyAncHgnLFxuICAgICAgICAgICAgICAgICAgICB0b3A6IC15ICsgJ3B4J1xuICAgICAgICAgICAgICAgIH0pLmF0dHIoJ2RhdGEteCcsIHgpLmF0dHIoJ2RhdGEteScsIHkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkaW1hZ2UucGFyZW50KCkuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlM2QoLScgKyB4ICsgJ3B4LCAtJyArIHkgKyAncHgsIDApJykuYXR0cignZGF0YS14JywgeCkuYXR0cignZGF0YS15JywgeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGNhbGxTY2FsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHNjYWxlID4gMSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmNvcmUuJG91dGVyLmFkZENsYXNzKCdsZy16b29tZWQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVzZXRab29tKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzY2FsZSA8IDEpIHtcbiAgICAgICAgICAgICAgICBzY2FsZSA9IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHpvb20oc2NhbGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBhY3R1YWxTaXplID0gZnVuY3Rpb24oZXZlbnQsICRpbWFnZSwgaW5kZXgsIGZyb21JY29uKSB7XG4gICAgICAgICAgICB2YXIgdyA9ICRpbWFnZS5wcm9wKCdvZmZzZXRXaWR0aCcpO1xuICAgICAgICAgICAgdmFyIG53O1xuICAgICAgICAgICAgaWYgKF90aGlzLmNvcmUucy5keW5hbWljKSB7XG4gICAgICAgICAgICAgICAgbncgPSBfdGhpcy5jb3JlLnMuZHluYW1pY0VsW2luZGV4XS53aWR0aCB8fCAkaW1hZ2VbMF0ubmF0dXJhbFdpZHRoIHx8IHc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG53ID0gX3RoaXMuY29yZS4kaXRlbXMuZXEoaW5kZXgpLmF0dHIoJ2RhdGEtd2lkdGgnKSB8fCAkaW1hZ2VbMF0ubmF0dXJhbFdpZHRoIHx8IHc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBfc2NhbGU7XG5cbiAgICAgICAgICAgIGlmIChfdGhpcy5jb3JlLiRvdXRlci5oYXNDbGFzcygnbGctem9vbWVkJykpIHtcbiAgICAgICAgICAgICAgICBzY2FsZSA9IDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChudyA+IHcpIHtcbiAgICAgICAgICAgICAgICAgICAgX3NjYWxlID0gbncgLyB3O1xuICAgICAgICAgICAgICAgICAgICBzY2FsZSA9IF9zY2FsZSB8fCAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGZyb21JY29uKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucGFnZVggPSAkKHdpbmRvdykud2lkdGgoKSAvIDI7XG4gICAgICAgICAgICAgICAgX3RoaXMucGFnZVkgPSAoJCh3aW5kb3cpLmhlaWdodCgpIC8gMikgKyAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF90aGlzLnBhZ2VYID0gZXZlbnQucGFnZVggfHwgZXZlbnQub3JpZ2luYWxFdmVudC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYO1xuICAgICAgICAgICAgICAgIF90aGlzLnBhZ2VZID0gZXZlbnQucGFnZVkgfHwgZXZlbnQub3JpZ2luYWxFdmVudC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYWxsU2NhbGUoKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuY29yZS4kb3V0ZXIucmVtb3ZlQ2xhc3MoJ2xnLWdyYWJiaW5nJykuYWRkQ2xhc3MoJ2xnLWdyYWInKTtcbiAgICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgdGFwcGVkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gZXZlbnQgdHJpZ2dlcmVkIGFmdGVyIGFwcGVuZGluZyBzbGlkZSBjb250ZW50XG4gICAgICAgIF90aGlzLmNvcmUuJGVsLm9uKCdvbkFmZXJBcHBlbmRTbGlkZS5sZy50bS56b29tJywgZnVuY3Rpb24oZXZlbnQsIGluZGV4KSB7XG5cbiAgICAgICAgICAgIC8vIEdldCB0aGUgY3VycmVudCBlbGVtZW50XG4gICAgICAgICAgICB2YXIgJGltYWdlID0gX3RoaXMuY29yZS4kc2xpZGUuZXEoaW5kZXgpLmZpbmQoJy5sZy1pbWFnZScpO1xuXG4gICAgICAgICAgICAkaW1hZ2Uub24oJ2RibGNsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBhY3R1YWxTaXplKGV2ZW50LCAkaW1hZ2UsIGluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkaW1hZ2Uub24oJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgIGlmICghdGFwcGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcHBlZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXBwZWQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0YXBwZWQpO1xuICAgICAgICAgICAgICAgICAgICB0YXBwZWQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBhY3R1YWxTaXplKGV2ZW50LCAkaW1hZ2UsIGluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVXBkYXRlIHpvb20gb24gcmVzaXplIGFuZCBvcmllbnRhdGlvbmNoYW5nZVxuICAgICAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZS5sZy56b29tIHNjcm9sbC5sZy56b29tIG9yaWVudGF0aW9uY2hhbmdlLmxnLnpvb20nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIF90aGlzLnBhZ2VYID0gJCh3aW5kb3cpLndpZHRoKCkgLyAyO1xuICAgICAgICAgICAgX3RoaXMucGFnZVkgPSAoJCh3aW5kb3cpLmhlaWdodCgpIC8gMikgKyAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICAgICAgICB6b29tKHNjYWxlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnI2xnLXpvb20tb3V0Jykub24oJ2NsaWNrLmxnJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMuY29yZS4kb3V0ZXIuZmluZCgnLmxnLWN1cnJlbnQgLmxnLWltYWdlJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc2NhbGUgLT0gX3RoaXMuY29yZS5zLnNjYWxlO1xuICAgICAgICAgICAgICAgIGNhbGxTY2FsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcjbGctem9vbS1pbicpLm9uKCdjbGljay5sZycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLmNvcmUuJG91dGVyLmZpbmQoJy5sZy1jdXJyZW50IC5sZy1pbWFnZScpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHNjYWxlICs9IF90aGlzLmNvcmUucy5zY2FsZTtcbiAgICAgICAgICAgICAgICBjYWxsU2NhbGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnI2xnLWFjdHVhbC1zaXplJykub24oJ2NsaWNrLmxnJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGFjdHVhbFNpemUoZXZlbnQsIF90aGlzLmNvcmUuJHNsaWRlLmVxKF90aGlzLmNvcmUuaW5kZXgpLmZpbmQoJy5sZy1pbWFnZScpLCBfdGhpcy5jb3JlLmluZGV4LCB0cnVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gUmVzZXQgem9vbSBvbiBzbGlkZSBjaGFuZ2VcbiAgICAgICAgX3RoaXMuY29yZS4kZWwub24oJ29uQmVmb3JlU2xpZGUubGcudG0nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNjYWxlID0gMTtcbiAgICAgICAgICAgIF90aGlzLnJlc2V0Wm9vbSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBEcmFnIG9wdGlvbiBhZnRlciB6b29tXG4gICAgICAgIF90aGlzLnpvb21EcmFnKCk7XG5cbiAgICAgICAgX3RoaXMuem9vbVN3aXBlKCk7XG5cbiAgICB9O1xuXG4gICAgLy8gUmVzZXQgem9vbSBlZmZlY3RcbiAgICBab29tLnByb3RvdHlwZS5yZXNldFpvb20gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5jb3JlLiRvdXRlci5yZW1vdmVDbGFzcygnbGctem9vbWVkJyk7XG4gICAgICAgIHRoaXMuY29yZS4kc2xpZGUuZmluZCgnLmxnLWltZy13cmFwJykucmVtb3ZlQXR0cignc3R5bGUgZGF0YS14IGRhdGEteScpO1xuICAgICAgICB0aGlzLmNvcmUuJHNsaWRlLmZpbmQoJy5sZy1pbWFnZScpLnJlbW92ZUF0dHIoJ3N0eWxlIGRhdGEtc2NhbGUnKTtcblxuICAgICAgICAvLyBSZXNldCBwYWd4IHBhZ3kgdmFsdWVzIHRvIGNlbnRlclxuICAgICAgICB0aGlzLnBhZ2VYID0gJCh3aW5kb3cpLndpZHRoKCkgLyAyO1xuICAgICAgICB0aGlzLnBhZ2VZID0gKCQod2luZG93KS5oZWlnaHQoKSAvIDIpICsgJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgIH07XG5cbiAgICBab29tLnByb3RvdHlwZS56b29tU3dpcGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHN0YXJ0Q29vcmRzID0ge307XG4gICAgICAgIHZhciBlbmRDb29yZHMgPSB7fTtcbiAgICAgICAgdmFyIGlzTW92ZWQgPSBmYWxzZTtcblxuICAgICAgICAvLyBBbGxvdyB4IGRpcmVjdGlvbiBkcmFnXG4gICAgICAgIHZhciBhbGxvd1ggPSBmYWxzZTtcblxuICAgICAgICAvLyBBbGxvdyBZIGRpcmVjdGlvbiBkcmFnXG4gICAgICAgIHZhciBhbGxvd1kgPSBmYWxzZTtcblxuICAgICAgICBfdGhpcy5jb3JlLiRzbGlkZS5vbigndG91Y2hzdGFydC5sZycsIGZ1bmN0aW9uKGUpIHtcblxuICAgICAgICAgICAgaWYgKF90aGlzLmNvcmUuJG91dGVyLmhhc0NsYXNzKCdsZy16b29tZWQnKSkge1xuICAgICAgICAgICAgICAgIHZhciAkaW1hZ2UgPSBfdGhpcy5jb3JlLiRzbGlkZS5lcShfdGhpcy5jb3JlLmluZGV4KS5maW5kKCcubGctb2JqZWN0Jyk7XG5cbiAgICAgICAgICAgICAgICBhbGxvd1kgPSAkaW1hZ2UucHJvcCgnb2Zmc2V0SGVpZ2h0JykgKiAkaW1hZ2UuYXR0cignZGF0YS1zY2FsZScpID4gX3RoaXMuY29yZS4kb3V0ZXIuZmluZCgnLmxnJykuaGVpZ2h0KCk7XG4gICAgICAgICAgICAgICAgYWxsb3dYID0gJGltYWdlLnByb3AoJ29mZnNldFdpZHRoJykgKiAkaW1hZ2UuYXR0cignZGF0YS1zY2FsZScpID4gX3RoaXMuY29yZS4kb3V0ZXIuZmluZCgnLmxnJykud2lkdGgoKTtcbiAgICAgICAgICAgICAgICBpZiAoKGFsbG93WCB8fCBhbGxvd1kpKSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRDb29yZHMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBlLm9yaWdpbmFsRXZlbnQudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGUub3JpZ2luYWxFdmVudC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VZXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIF90aGlzLmNvcmUuJHNsaWRlLm9uKCd0b3VjaG1vdmUubGcnLCBmdW5jdGlvbihlKSB7XG5cbiAgICAgICAgICAgIGlmIChfdGhpcy5jb3JlLiRvdXRlci5oYXNDbGFzcygnbGctem9vbWVkJykpIHtcblxuICAgICAgICAgICAgICAgIHZhciBfJGVsID0gX3RoaXMuY29yZS4kc2xpZGUuZXEoX3RoaXMuY29yZS5pbmRleCkuZmluZCgnLmxnLWltZy13cmFwJyk7XG4gICAgICAgICAgICAgICAgdmFyIGRpc3RhbmNlWDtcbiAgICAgICAgICAgICAgICB2YXIgZGlzdGFuY2VZO1xuXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGlzTW92ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgZW5kQ29vcmRzID0ge1xuICAgICAgICAgICAgICAgICAgICB4OiBlLm9yaWdpbmFsRXZlbnQudGFyZ2V0VG91Y2hlc1swXS5wYWdlWCxcbiAgICAgICAgICAgICAgICAgICAgeTogZS5vcmlnaW5hbEV2ZW50LnRhcmdldFRvdWNoZXNbMF0ucGFnZVlcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLy8gcmVzZXQgb3BhY2l0eSBhbmQgdHJhbnNpdGlvbiBkdXJhdGlvblxuICAgICAgICAgICAgICAgIF90aGlzLmNvcmUuJG91dGVyLmFkZENsYXNzKCdsZy16b29tLWRyYWdnaW5nJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYWxsb3dZKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlWSA9ICgtTWF0aC5hYnMoXyRlbC5hdHRyKCdkYXRhLXknKSkpICsgKGVuZENvb3Jkcy55IC0gc3RhcnRDb29yZHMueSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2VZID0gLU1hdGguYWJzKF8kZWwuYXR0cignZGF0YS15JykpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChhbGxvd1gpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2VYID0gKC1NYXRoLmFicyhfJGVsLmF0dHIoJ2RhdGEteCcpKSkgKyAoZW5kQ29vcmRzLnggLSBzdGFydENvb3Jkcy54KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZVggPSAtTWF0aC5hYnMoXyRlbC5hdHRyKCdkYXRhLXgnKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKChNYXRoLmFicyhlbmRDb29yZHMueCAtIHN0YXJ0Q29vcmRzLngpID4gMTUpIHx8IChNYXRoLmFicyhlbmRDb29yZHMueSAtIHN0YXJ0Q29vcmRzLnkpID4gMTUpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmNvcmUucy51c2VMZWZ0Rm9yWm9vbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXyRlbC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGRpc3RhbmNlWCArICdweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBkaXN0YW5jZVkgKyAncHgnXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8kZWwuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlM2QoJyArIGRpc3RhbmNlWCArICdweCwgJyArIGRpc3RhbmNlWSArICdweCwgMCknKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIF90aGlzLmNvcmUuJHNsaWRlLm9uKCd0b3VjaGVuZC5sZycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLmNvcmUuJG91dGVyLmhhc0NsYXNzKCdsZy16b29tZWQnKSkge1xuICAgICAgICAgICAgICAgIGlmIChpc01vdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzTW92ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY29yZS4kb3V0ZXIucmVtb3ZlQ2xhc3MoJ2xnLXpvb20tZHJhZ2dpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudG91Y2hlbmRab29tKHN0YXJ0Q29vcmRzLCBlbmRDb29yZHMsIGFsbG93WCwgYWxsb3dZKTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgWm9vbS5wcm90b3R5cGUuem9vbURyYWcgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgc3RhcnRDb29yZHMgPSB7fTtcbiAgICAgICAgdmFyIGVuZENvb3JkcyA9IHt9O1xuICAgICAgICB2YXIgaXNEcmFnaW5nID0gZmFsc2U7XG4gICAgICAgIHZhciBpc01vdmVkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gQWxsb3cgeCBkaXJlY3Rpb24gZHJhZ1xuICAgICAgICB2YXIgYWxsb3dYID0gZmFsc2U7XG5cbiAgICAgICAgLy8gQWxsb3cgWSBkaXJlY3Rpb24gZHJhZ1xuICAgICAgICB2YXIgYWxsb3dZID0gZmFsc2U7XG5cbiAgICAgICAgX3RoaXMuY29yZS4kc2xpZGUub24oJ21vdXNlZG93bi5sZy56b29tJywgZnVuY3Rpb24oZSkge1xuXG4gICAgICAgICAgICAvLyBleGVjdXRlIG9ubHkgb24gLmxnLW9iamVjdFxuICAgICAgICAgICAgdmFyICRpbWFnZSA9IF90aGlzLmNvcmUuJHNsaWRlLmVxKF90aGlzLmNvcmUuaW5kZXgpLmZpbmQoJy5sZy1vYmplY3QnKTtcblxuICAgICAgICAgICAgYWxsb3dZID0gJGltYWdlLnByb3AoJ29mZnNldEhlaWdodCcpICogJGltYWdlLmF0dHIoJ2RhdGEtc2NhbGUnKSA+IF90aGlzLmNvcmUuJG91dGVyLmZpbmQoJy5sZycpLmhlaWdodCgpO1xuICAgICAgICAgICAgYWxsb3dYID0gJGltYWdlLnByb3AoJ29mZnNldFdpZHRoJykgKiAkaW1hZ2UuYXR0cignZGF0YS1zY2FsZScpID4gX3RoaXMuY29yZS4kb3V0ZXIuZmluZCgnLmxnJykud2lkdGgoKTtcblxuICAgICAgICAgICAgaWYgKF90aGlzLmNvcmUuJG91dGVyLmhhc0NsYXNzKCdsZy16b29tZWQnKSkge1xuICAgICAgICAgICAgICAgIGlmICgkKGUudGFyZ2V0KS5oYXNDbGFzcygnbGctb2JqZWN0JykgJiYgKGFsbG93WCB8fCBhbGxvd1kpKSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRDb29yZHMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBlLnBhZ2VYLFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogZS5wYWdlWVxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIGlzRHJhZ2luZyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gKiogRml4IGZvciB3ZWJraXQgY3Vyc29yIGlzc3VlIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0yNjcyM1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jb3JlLiRvdXRlci5zY3JvbGxMZWZ0ICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNvcmUuJG91dGVyLnNjcm9sbExlZnQgLT0gMTtcblxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jb3JlLiRvdXRlci5yZW1vdmVDbGFzcygnbGctZ3JhYicpLmFkZENsYXNzKCdsZy1ncmFiYmluZycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdtb3VzZW1vdmUubGcuem9vbScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmIChpc0RyYWdpbmcpIHtcbiAgICAgICAgICAgICAgICB2YXIgXyRlbCA9IF90aGlzLmNvcmUuJHNsaWRlLmVxKF90aGlzLmNvcmUuaW5kZXgpLmZpbmQoJy5sZy1pbWctd3JhcCcpO1xuICAgICAgICAgICAgICAgIHZhciBkaXN0YW5jZVg7XG4gICAgICAgICAgICAgICAgdmFyIGRpc3RhbmNlWTtcblxuICAgICAgICAgICAgICAgIGlzTW92ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGVuZENvb3JkcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgeDogZS5wYWdlWCxcbiAgICAgICAgICAgICAgICAgICAgeTogZS5wYWdlWVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAvLyByZXNldCBvcGFjaXR5IGFuZCB0cmFuc2l0aW9uIGR1cmF0aW9uXG4gICAgICAgICAgICAgICAgX3RoaXMuY29yZS4kb3V0ZXIuYWRkQ2xhc3MoJ2xnLXpvb20tZHJhZ2dpbmcnKTtcblxuICAgICAgICAgICAgICAgIGlmIChhbGxvd1kpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2VZID0gKC1NYXRoLmFicyhfJGVsLmF0dHIoJ2RhdGEteScpKSkgKyAoZW5kQ29vcmRzLnkgLSBzdGFydENvb3Jkcy55KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZVkgPSAtTWF0aC5hYnMoXyRlbC5hdHRyKCdkYXRhLXknKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGFsbG93WCkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZVggPSAoLU1hdGguYWJzKF8kZWwuYXR0cignZGF0YS14JykpKSArIChlbmRDb29yZHMueCAtIHN0YXJ0Q29vcmRzLngpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlWCA9IC1NYXRoLmFicyhfJGVsLmF0dHIoJ2RhdGEteCcpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuY29yZS5zLnVzZUxlZnRGb3Jab29tKSB7XG4gICAgICAgICAgICAgICAgICAgIF8kZWwuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGRpc3RhbmNlWCArICdweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IGRpc3RhbmNlWSArICdweCdcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgXyRlbC5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUzZCgnICsgZGlzdGFuY2VYICsgJ3B4LCAnICsgZGlzdGFuY2VZICsgJ3B4LCAwKScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdtb3VzZXVwLmxnLnpvb20nLCBmdW5jdGlvbihlKSB7XG5cbiAgICAgICAgICAgIGlmIChpc0RyYWdpbmcpIHtcbiAgICAgICAgICAgICAgICBpc0RyYWdpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBfdGhpcy5jb3JlLiRvdXRlci5yZW1vdmVDbGFzcygnbGctem9vbS1kcmFnZ2luZycpO1xuXG4gICAgICAgICAgICAgICAgLy8gRml4IGZvciBjaHJvbWUgbW91c2UgbW92ZSBvbiBjbGlja1xuICAgICAgICAgICAgICAgIGlmIChpc01vdmVkICYmICgoc3RhcnRDb29yZHMueCAhPT0gZW5kQ29vcmRzLngpIHx8IChzdGFydENvb3Jkcy55ICE9PSBlbmRDb29yZHMueSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZENvb3JkcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGUucGFnZVgsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBlLnBhZ2VZXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnRvdWNoZW5kWm9vbShzdGFydENvb3JkcywgZW5kQ29vcmRzLCBhbGxvd1gsIGFsbG93WSk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpc01vdmVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF90aGlzLmNvcmUuJG91dGVyLnJlbW92ZUNsYXNzKCdsZy1ncmFiYmluZycpLmFkZENsYXNzKCdsZy1ncmFiJyk7XG5cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIFpvb20ucHJvdG90eXBlLnRvdWNoZW5kWm9vbSA9IGZ1bmN0aW9uKHN0YXJ0Q29vcmRzLCBlbmRDb29yZHMsIGFsbG93WCwgYWxsb3dZKSB7XG5cbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIF8kZWwgPSBfdGhpcy5jb3JlLiRzbGlkZS5lcShfdGhpcy5jb3JlLmluZGV4KS5maW5kKCcubGctaW1nLXdyYXAnKTtcbiAgICAgICAgdmFyICRpbWFnZSA9IF90aGlzLmNvcmUuJHNsaWRlLmVxKF90aGlzLmNvcmUuaW5kZXgpLmZpbmQoJy5sZy1vYmplY3QnKTtcbiAgICAgICAgdmFyIGRpc3RhbmNlWCA9ICgtTWF0aC5hYnMoXyRlbC5hdHRyKCdkYXRhLXgnKSkpICsgKGVuZENvb3Jkcy54IC0gc3RhcnRDb29yZHMueCk7XG4gICAgICAgIHZhciBkaXN0YW5jZVkgPSAoLU1hdGguYWJzKF8kZWwuYXR0cignZGF0YS15JykpKSArIChlbmRDb29yZHMueSAtIHN0YXJ0Q29vcmRzLnkpO1xuICAgICAgICB2YXIgbWluWSA9IChfdGhpcy5jb3JlLiRvdXRlci5maW5kKCcubGcnKS5oZWlnaHQoKSAtICRpbWFnZS5wcm9wKCdvZmZzZXRIZWlnaHQnKSkgLyAyO1xuICAgICAgICB2YXIgbWF4WSA9IE1hdGguYWJzKCgkaW1hZ2UucHJvcCgnb2Zmc2V0SGVpZ2h0JykgKiBNYXRoLmFicygkaW1hZ2UuYXR0cignZGF0YS1zY2FsZScpKSkgLSBfdGhpcy5jb3JlLiRvdXRlci5maW5kKCcubGcnKS5oZWlnaHQoKSArIG1pblkpO1xuICAgICAgICB2YXIgbWluWCA9IChfdGhpcy5jb3JlLiRvdXRlci5maW5kKCcubGcnKS53aWR0aCgpIC0gJGltYWdlLnByb3AoJ29mZnNldFdpZHRoJykpIC8gMjtcbiAgICAgICAgdmFyIG1heFggPSBNYXRoLmFicygoJGltYWdlLnByb3AoJ29mZnNldFdpZHRoJykgKiBNYXRoLmFicygkaW1hZ2UuYXR0cignZGF0YS1zY2FsZScpKSkgLSBfdGhpcy5jb3JlLiRvdXRlci5maW5kKCcubGcnKS53aWR0aCgpICsgbWluWCk7XG5cbiAgICAgICAgaWYgKChNYXRoLmFicyhlbmRDb29yZHMueCAtIHN0YXJ0Q29vcmRzLngpID4gMTUpIHx8IChNYXRoLmFicyhlbmRDb29yZHMueSAtIHN0YXJ0Q29vcmRzLnkpID4gMTUpKSB7XG4gICAgICAgICAgICBpZiAoYWxsb3dZKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlWSA8PSAtbWF4WSkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZVkgPSAtbWF4WTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRpc3RhbmNlWSA+PSAtbWluWSkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZVkgPSAtbWluWTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhbGxvd1gpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2VYIDw9IC1tYXhYKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlWCA9IC1tYXhYO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlzdGFuY2VYID49IC1taW5YKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlWCA9IC1taW5YO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGFsbG93WSkge1xuICAgICAgICAgICAgICAgIF8kZWwuYXR0cignZGF0YS15JywgTWF0aC5hYnMoZGlzdGFuY2VZKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRpc3RhbmNlWSA9IC1NYXRoLmFicyhfJGVsLmF0dHIoJ2RhdGEteScpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGFsbG93WCkge1xuICAgICAgICAgICAgICAgIF8kZWwuYXR0cignZGF0YS14JywgTWF0aC5hYnMoZGlzdGFuY2VYKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRpc3RhbmNlWCA9IC1NYXRoLmFicyhfJGVsLmF0dHIoJ2RhdGEteCcpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKF90aGlzLmNvcmUucy51c2VMZWZ0Rm9yWm9vbSkge1xuICAgICAgICAgICAgICAgIF8kZWwuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogZGlzdGFuY2VYICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBkaXN0YW5jZVkgKyAncHgnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF8kZWwuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlM2QoJyArIGRpc3RhbmNlWCArICdweCwgJyArIGRpc3RhbmNlWSArICdweCwgMCknKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfTtcblxuICAgIFpvb20ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIC8vIFVuYmluZCBhbGwgZXZlbnRzIGFkZGVkIGJ5IGxpZ2h0R2FsbGVyeSB6b29tIHBsdWdpblxuICAgICAgICBfdGhpcy5jb3JlLiRlbC5vZmYoJy5sZy56b29tJyk7XG4gICAgICAgICQod2luZG93KS5vZmYoJy5sZy56b29tJyk7XG4gICAgICAgIF90aGlzLmNvcmUuJHNsaWRlLm9mZignLmxnLnpvb20nKTtcbiAgICAgICAgX3RoaXMuY29yZS4kZWwub2ZmKCcubGcudG0uem9vbScpO1xuICAgICAgICBfdGhpcy5yZXNldFpvb20oKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KF90aGlzLnpvb21hYmxldGltZW91dCk7XG4gICAgICAgIF90aGlzLnpvb21hYmxldGltZW91dCA9IGZhbHNlO1xuICAgIH07XG5cbiAgICAkLmZuLmxpZ2h0R2FsbGVyeS5tb2R1bGVzLnpvb20gPSBab29tO1xuXG59KSgpO1xuXG5cbn0pKTtcbiIsIi8qISBsaWdodGdhbGxlcnkgLSB2MS42LjExIC0gMjAxOC0wNS0yMlxuKiBodHRwOi8vc2FjaGluY2hvb2x1ci5naXRodWIuaW8vbGlnaHRHYWxsZXJ5L1xuKiBDb3B5cmlnaHQgKGMpIDIwMTggU2FjaGluIE47IExpY2Vuc2VkIEdQTHYzICovXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZSB1bmxlc3MgYW1kTW9kdWxlSWQgaXMgc2V0XG4gICAgZGVmaW5lKFsnanF1ZXJ5J10sIGZ1bmN0aW9uIChhMCkge1xuICAgICAgcmV0dXJuIChmYWN0b3J5KGEwKSk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAvLyBOb2RlLiBEb2VzIG5vdCB3b3JrIHdpdGggc3RyaWN0IENvbW1vbkpTLCBidXRcbiAgICAvLyBvbmx5IENvbW1vbkpTLWxpa2UgZW52aXJvbm1lbnRzIHRoYXQgc3VwcG9ydCBtb2R1bGUuZXhwb3J0cyxcbiAgICAvLyBsaWtlIE5vZGUuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoJ2pxdWVyeScpKTtcbiAgfSBlbHNlIHtcbiAgICBmYWN0b3J5KHJvb3RbXCJqUXVlcnlcIl0pO1xuICB9XG59KHRoaXMsIGZ1bmN0aW9uICgkKSB7XG5cbihmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgZGVmYXVsdHMgPSB7XG5cbiAgICAgICAgbW9kZTogJ2xnLXNsaWRlJyxcblxuICAgICAgICAvLyBFeCA6ICdlYXNlJ1xuICAgICAgICBjc3NFYXNpbmc6ICdlYXNlJyxcblxuICAgICAgICAvLydmb3IganF1ZXJ5IGFuaW1hdGlvbidcbiAgICAgICAgZWFzaW5nOiAnbGluZWFyJyxcbiAgICAgICAgc3BlZWQ6IDYwMCxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGFkZENsYXNzOiAnJyxcbiAgICAgICAgc3RhcnRDbGFzczogJ2xnLXN0YXJ0LXpvb20nLFxuICAgICAgICBiYWNrZHJvcER1cmF0aW9uOiAxNTAsXG4gICAgICAgIGhpZGVCYXJzRGVsYXk6IDYwMDAsXG5cbiAgICAgICAgdXNlTGVmdDogZmFsc2UsXG5cbiAgICAgICAgY2xvc2FibGU6IHRydWUsXG4gICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgIGVzY0tleTogdHJ1ZSxcbiAgICAgICAga2V5UHJlc3M6IHRydWUsXG4gICAgICAgIGNvbnRyb2xzOiB0cnVlLFxuICAgICAgICBzbGlkZUVuZEFuaW1hdG9pbjogdHJ1ZSxcbiAgICAgICAgaGlkZUNvbnRyb2xPbkVuZDogZmFsc2UsXG4gICAgICAgIG1vdXNld2hlZWw6IHRydWUsXG5cbiAgICAgICAgZ2V0Q2FwdGlvbkZyb21UaXRsZU9yQWx0OiB0cnVlLFxuXG4gICAgICAgIC8vIC5sZy1pdGVtIHx8ICcubGctc3ViLWh0bWwnXG4gICAgICAgIGFwcGVuZFN1Ykh0bWxUbzogJy5sZy1zdWItaHRtbCcsXG5cbiAgICAgICAgc3ViSHRtbFNlbGVjdG9yUmVsYXRpdmU6IGZhbHNlLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAZGVzYyBudW1iZXIgb2YgcHJlbG9hZCBzbGlkZXNcbiAgICAgICAgICogd2lsbCBleGljdXRlIG9ubHkgYWZ0ZXIgdGhlIGN1cnJlbnQgc2xpZGUgaXMgZnVsbHkgbG9hZGVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAZXggeW91IGNsaWNrZWQgb24gNHRoIGltYWdlIGFuZCBpZiBwcmVsb2FkID0gMSB0aGVuIDNyZCBzbGlkZSBhbmQgNXRoXG4gICAgICAgICAqIHNsaWRlIHdpbGwgYmUgbG9hZGVkIGluIHRoZSBiYWNrZ3JvdW5kIGFmdGVyIHRoZSA0dGggc2xpZGUgaXMgZnVsbHkgbG9hZGVkLi5cbiAgICAgICAgICogaWYgcHJlbG9hZCBpcyAyIHRoZW4gMm5kIDNyZCA1dGggNnRoIHNsaWRlcyB3aWxsIGJlIHByZWxvYWRlZC4uIC4uLiAuLi5cbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIHByZWxvYWQ6IDEsXG4gICAgICAgIHNob3dBZnRlckxvYWQ6IHRydWUsXG4gICAgICAgIHNlbGVjdG9yOiAnJyxcbiAgICAgICAgc2VsZWN0V2l0aGluOiAnJyxcbiAgICAgICAgbmV4dEh0bWw6ICcnLFxuICAgICAgICBwcmV2SHRtbDogJycsXG5cbiAgICAgICAgLy8gMCwgMVxuICAgICAgICBpbmRleDogZmFsc2UsXG5cbiAgICAgICAgaWZyYW1lTWF4V2lkdGg6ICcxMDAlJyxcblxuICAgICAgICBkb3dubG9hZDogdHJ1ZSxcbiAgICAgICAgY291bnRlcjogdHJ1ZSxcbiAgICAgICAgYXBwZW5kQ291bnRlclRvOiAnLmxnLXRvb2xiYXInLFxuXG4gICAgICAgIHN3aXBlVGhyZXNob2xkOiA1MCxcbiAgICAgICAgZW5hYmxlU3dpcGU6IHRydWUsXG4gICAgICAgIGVuYWJsZURyYWc6IHRydWUsXG5cbiAgICAgICAgZHluYW1pYzogZmFsc2UsXG4gICAgICAgIGR5bmFtaWNFbDogW10sXG4gICAgICAgIGdhbGxlcnlJZDogMVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBQbHVnaW4oZWxlbWVudCwgb3B0aW9ucykge1xuXG4gICAgICAgIC8vIEN1cnJlbnQgbGlnaHRHYWxsZXJ5IGVsZW1lbnRcbiAgICAgICAgdGhpcy5lbCA9IGVsZW1lbnQ7XG5cbiAgICAgICAgLy8gQ3VycmVudCBqcXVlcnkgZWxlbWVudFxuICAgICAgICB0aGlzLiRlbCA9ICQoZWxlbWVudCk7XG5cbiAgICAgICAgLy8gbGlnaHRHYWxsZXJ5IHNldHRpbmdzXG4gICAgICAgIHRoaXMucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgICAgLy8gV2hlbiB1c2luZyBkeW5hbWljIG1vZGUsIGVuc3VyZSBkeW5hbWljRWwgaXMgYW4gYXJyYXlcbiAgICAgICAgaWYgKHRoaXMucy5keW5hbWljICYmIHRoaXMucy5keW5hbWljRWwgIT09ICd1bmRlZmluZWQnICYmIHRoaXMucy5keW5hbWljRWwuY29uc3RydWN0b3IgPT09IEFycmF5ICYmICF0aGlzLnMuZHluYW1pY0VsLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgKCdXaGVuIHVzaW5nIGR5bmFtaWMgbW9kZSwgeW91IG11c3QgYWxzbyBkZWZpbmUgZHluYW1pY0VsIGFzIGFuIEFycmF5LicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbGlnaHRHYWxsZXJ5IG1vZHVsZXNcbiAgICAgICAgdGhpcy5tb2R1bGVzID0ge307XG5cbiAgICAgICAgLy8gZmFsc2Ugd2hlbiBsaWdodGdhbGxlcnkgY29tcGxldGUgZmlyc3Qgc2xpZGU7XG4gICAgICAgIHRoaXMubEdhbGxlcnlPbiA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMubGdCdXN5ID0gZmFsc2U7XG5cbiAgICAgICAgLy8gVGltZW91dCBmdW5jdGlvbiBmb3IgaGlkaW5nIGNvbnRyb2xzO1xuICAgICAgICB0aGlzLmhpZGVCYXJ0aW1lb3V0ID0gZmFsc2U7XG5cbiAgICAgICAgLy8gVG8gZGV0ZXJtaW5lIGJyb3dzZXIgc3VwcG9ydHMgZm9yIHRvdWNoIGV2ZW50cztcbiAgICAgICAgdGhpcy5pc1RvdWNoID0gKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XG5cbiAgICAgICAgLy8gRGlzYWJsZSBoaWRlQ29udHJvbE9uRW5kIGlmIHNpbGRlRW5kQW5pbWF0aW9uIGlzIHRydWVcbiAgICAgICAgaWYgKHRoaXMucy5zbGlkZUVuZEFuaW1hdG9pbikge1xuICAgICAgICAgICAgdGhpcy5zLmhpZGVDb250cm9sT25FbmQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEdhbGxlcnkgaXRlbXNcbiAgICAgICAgaWYgKHRoaXMucy5keW5hbWljKSB7XG4gICAgICAgICAgICB0aGlzLiRpdGVtcyA9IHRoaXMucy5keW5hbWljRWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zLnNlbGVjdG9yID09PSAndGhpcycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRpdGVtcyA9IHRoaXMuJGVsO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnMuc2VsZWN0b3IgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucy5zZWxlY3RXaXRoaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kaXRlbXMgPSAkKHRoaXMucy5zZWxlY3RXaXRoaW4pLmZpbmQodGhpcy5zLnNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRpdGVtcyA9IHRoaXMuJGVsLmZpbmQoJCh0aGlzLnMuc2VsZWN0b3IpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuJGl0ZW1zID0gdGhpcy4kZWwuY2hpbGRyZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC5sZy1pdGVtXG4gICAgICAgIHRoaXMuJHNsaWRlID0gJyc7XG5cbiAgICAgICAgLy8gLmxnLW91dGVyXG4gICAgICAgIHRoaXMuJG91dGVyID0gJyc7XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgUGx1Z2luLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAvLyBzLnByZWxvYWQgc2hvdWxkIG5vdCBiZSBtb3JlIHRoYW4gJGl0ZW0ubGVuZ3RoXG4gICAgICAgIGlmIChfdGhpcy5zLnByZWxvYWQgPiBfdGhpcy4kaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBfdGhpcy5zLnByZWxvYWQgPSBfdGhpcy4kaXRlbXMubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgZHluYW1pYyBvcHRpb24gaXMgZW5hYmxlZCBleGVjdXRlIGltbWVkaWF0ZWx5XG4gICAgICAgIHZhciBfaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuICAgICAgICBpZiAoX2hhc2guaW5kZXhPZignbGc9JyArIHRoaXMucy5nYWxsZXJ5SWQpID4gMCkge1xuXG4gICAgICAgICAgICBfdGhpcy5pbmRleCA9IHBhcnNlSW50KF9oYXNoLnNwbGl0KCcmc2xpZGU9JylbMV0sIDEwKTtcblxuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdsZy1mcm9tLWhhc2gnKTtcbiAgICAgICAgICAgIGlmICghJCgnYm9keScpLmhhc0NsYXNzKCdsZy1vbicpKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYnVpbGQoX3RoaXMuaW5kZXgpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdsZy1vbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF90aGlzLnMuZHluYW1pYykge1xuXG4gICAgICAgICAgICBfdGhpcy4kZWwudHJpZ2dlcignb25CZWZvcmVPcGVuLmxnJyk7XG5cbiAgICAgICAgICAgIF90aGlzLmluZGV4ID0gX3RoaXMucy5pbmRleCB8fCAwO1xuXG4gICAgICAgICAgICAvLyBwcmV2ZW50IGFjY2lkZW50YWwgZG91YmxlIGV4ZWN1dGlvblxuICAgICAgICAgICAgaWYgKCEkKCdib2R5JykuaGFzQ2xhc3MoJ2xnLW9uJykpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5idWlsZChfdGhpcy5pbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnbGctb24nKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgLy8gVXNpbmcgZGlmZmVyZW50IG5hbWVzcGFjZSBmb3IgY2xpY2sgYmVjYXVzZSBjbGljayBldmVudCBzaG91bGQgbm90IHVuYmluZCBpZiBzZWxlY3RvciBpcyBzYW1lIG9iamVjdCgndGhpcycpXG4gICAgICAgICAgICBfdGhpcy4kaXRlbXMub24oJ2NsaWNrLmxnY3VzdG9tJywgZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICAgICAgICAgIC8vIEZvciBJRThcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX3RoaXMuJGVsLnRyaWdnZXIoJ29uQmVmb3JlT3Blbi5sZycpO1xuXG4gICAgICAgICAgICAgICAgX3RoaXMuaW5kZXggPSBfdGhpcy5zLmluZGV4IHx8IF90aGlzLiRpdGVtcy5pbmRleCh0aGlzKTtcblxuICAgICAgICAgICAgICAgIC8vIHByZXZlbnQgYWNjaWRlbnRhbCBkb3VibGUgZXhlY3V0aW9uXG4gICAgICAgICAgICAgICAgaWYgKCEkKCdib2R5JykuaGFzQ2xhc3MoJ2xnLW9uJykpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYnVpbGQoX3RoaXMuaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2xnLW9uJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBQbHVnaW4ucHJvdG90eXBlLmJ1aWxkID0gZnVuY3Rpb24oaW5kZXgpIHtcblxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIF90aGlzLnN0cnVjdHVyZSgpO1xuXG4gICAgICAgIC8vIG1vZHVsZSBjb25zdHJ1Y3RvclxuICAgICAgICAkLmVhY2goJC5mbi5saWdodEdhbGxlcnkubW9kdWxlcywgZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICBfdGhpcy5tb2R1bGVzW2tleV0gPSBuZXcgJC5mbi5saWdodEdhbGxlcnkubW9kdWxlc1trZXldKF90aGlzLmVsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gaW5pdGlhdGUgc2xpZGUgZnVuY3Rpb25cbiAgICAgICAgX3RoaXMuc2xpZGUoaW5kZXgsIGZhbHNlLCBmYWxzZSwgZmFsc2UpO1xuXG4gICAgICAgIGlmIChfdGhpcy5zLmtleVByZXNzKSB7XG4gICAgICAgICAgICBfdGhpcy5rZXlQcmVzcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF90aGlzLiRpdGVtcy5sZW5ndGggPiAxKSB7XG5cbiAgICAgICAgICAgIF90aGlzLmFycm93KCk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZW5hYmxlRHJhZygpO1xuICAgICAgICAgICAgICAgIF90aGlzLmVuYWJsZVN3aXBlKCk7XG4gICAgICAgICAgICB9LCA1MCk7XG5cbiAgICAgICAgICAgIGlmIChfdGhpcy5zLm1vdXNld2hlZWwpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5tb3VzZXdoZWVsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdGhpcy4kc2xpZGUub24oJ2NsaWNrLmxnJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuJGVsLnRyaWdnZXIoJ29uU2xpZGVDbGljay5sZycpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy5jb3VudGVyKCk7XG5cbiAgICAgICAgX3RoaXMuY2xvc2VHYWxsZXJ5KCk7XG5cbiAgICAgICAgX3RoaXMuJGVsLnRyaWdnZXIoJ29uQWZ0ZXJPcGVuLmxnJyk7XG5cbiAgICAgICAgLy8gSGlkZSBjb250cm9sbGVycyBpZiBtb3VzZSBkb2Vzbid0IG1vdmUgZm9yIHNvbWUgcGVyaW9kXG4gICAgICAgIF90aGlzLiRvdXRlci5vbignbW91c2Vtb3ZlLmxnIGNsaWNrLmxnIHRvdWNoc3RhcnQubGcnLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgX3RoaXMuJG91dGVyLnJlbW92ZUNsYXNzKCdsZy1oaWRlLWl0ZW1zJyk7XG5cbiAgICAgICAgICAgIGNsZWFyVGltZW91dChfdGhpcy5oaWRlQmFydGltZW91dCk7XG5cbiAgICAgICAgICAgIC8vIFRpbWVvdXQgd2lsbCBiZSBjbGVhcmVkIG9uIGVhY2ggc2xpZGUgbW92ZW1lbnQgYWxzb1xuICAgICAgICAgICAgX3RoaXMuaGlkZUJhcnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLiRvdXRlci5hZGRDbGFzcygnbGctaGlkZS1pdGVtcycpO1xuICAgICAgICAgICAgfSwgX3RoaXMucy5oaWRlQmFyc0RlbGF5KTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBfdGhpcy4kb3V0ZXIudHJpZ2dlcignbW91c2Vtb3ZlLmxnJyk7XG5cbiAgICB9O1xuXG4gICAgUGx1Z2luLnByb3RvdHlwZS5zdHJ1Y3R1cmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGxpc3QgPSAnJztcbiAgICAgICAgdmFyIGNvbnRyb2xzID0gJyc7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIHN1Ykh0bWxDb250ID0gJyc7XG4gICAgICAgIHZhciB0ZW1wbGF0ZTtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAkKCdib2R5JykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwibGctYmFja2Ryb3BcIj48L2Rpdj4nKTtcbiAgICAgICAgJCgnLmxnLWJhY2tkcm9wJykuY3NzKCd0cmFuc2l0aW9uLWR1cmF0aW9uJywgdGhpcy5zLmJhY2tkcm9wRHVyYXRpb24gKyAnbXMnKTtcblxuICAgICAgICAvLyBDcmVhdGUgZ2FsbGVyeSBpdGVtc1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy4kaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxpc3QgKz0gJzxkaXYgY2xhc3M9XCJsZy1pdGVtXCI+PC9kaXY+JztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyZWF0ZSBjb250cm9sbHNcbiAgICAgICAgaWYgKHRoaXMucy5jb250cm9scyAmJiB0aGlzLiRpdGVtcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBjb250cm9scyA9ICc8ZGl2IGNsYXNzPVwibGctYWN0aW9uc1wiPicgK1xuICAgICAgICAgICAgICAgICc8YnV0dG9uIGNsYXNzPVwibGctcHJldiBsZy1pY29uXCI+JyArIHRoaXMucy5wcmV2SHRtbCArICc8L2J1dHRvbj4nICtcbiAgICAgICAgICAgICAgICAnPGJ1dHRvbiBjbGFzcz1cImxnLW5leHQgbGctaWNvblwiPicgKyB0aGlzLnMubmV4dEh0bWwgKyAnPC9idXR0b24+JyArXG4gICAgICAgICAgICAgICAgJzwvZGl2Pic7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zLmFwcGVuZFN1Ykh0bWxUbyA9PT0gJy5sZy1zdWItaHRtbCcpIHtcbiAgICAgICAgICAgIHN1Ykh0bWxDb250ID0gJzxkaXYgY2xhc3M9XCJsZy1zdWItaHRtbFwiPjwvZGl2Pic7XG4gICAgICAgIH1cblxuICAgICAgICB0ZW1wbGF0ZSA9ICc8ZGl2IGNsYXNzPVwibGctb3V0ZXIgJyArIHRoaXMucy5hZGRDbGFzcyArICcgJyArIHRoaXMucy5zdGFydENsYXNzICsgJ1wiPicgK1xuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJsZ1wiIHN0eWxlPVwid2lkdGg6JyArIHRoaXMucy53aWR0aCArICc7IGhlaWdodDonICsgdGhpcy5zLmhlaWdodCArICdcIj4nICtcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibGctaW5uZXJcIj4nICsgbGlzdCArICc8L2Rpdj4nICtcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibGctdG9vbGJhciBsZy1ncm91cFwiPicgK1xuICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwibGctY2xvc2UgbGctaWNvblwiPjwvc3Bhbj4nICtcbiAgICAgICAgICAgICc8L2Rpdj4nICtcbiAgICAgICAgICAgIGNvbnRyb2xzICtcbiAgICAgICAgICAgIHN1Ykh0bWxDb250ICtcbiAgICAgICAgICAgICc8L2Rpdj4nICtcbiAgICAgICAgICAgICc8L2Rpdj4nO1xuXG4gICAgICAgICQoJ2JvZHknKS5hcHBlbmQodGVtcGxhdGUpO1xuICAgICAgICB0aGlzLiRvdXRlciA9ICQoJy5sZy1vdXRlcicpO1xuICAgICAgICB0aGlzLiRzbGlkZSA9IHRoaXMuJG91dGVyLmZpbmQoJy5sZy1pdGVtJyk7XG5cbiAgICAgICAgaWYgKHRoaXMucy51c2VMZWZ0KSB7XG4gICAgICAgICAgICB0aGlzLiRvdXRlci5hZGRDbGFzcygnbGctdXNlLWxlZnQnKTtcblxuICAgICAgICAgICAgLy8gU2V0IG1vZGUgbGctc2xpZGUgaWYgdXNlIGxlZnQgaXMgdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucy5tb2RlID0gJ2xnLXNsaWRlJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJG91dGVyLmFkZENsYXNzKCdsZy11c2UtY3NzMycpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRm9yIGZpeGVkIGhlaWdodCBnYWxsZXJ5XG4gICAgICAgIF90aGlzLnNldFRvcCgpO1xuICAgICAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZS5sZyBvcmllbnRhdGlvbmNoYW5nZS5sZycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRUb3AoKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGFkZCBjbGFzcyBsZy1jdXJyZW50IHRvIHJlbW92ZSBpbml0aWFsIHRyYW5zaXRpb25cbiAgICAgICAgdGhpcy4kc2xpZGUuZXEodGhpcy5pbmRleCkuYWRkQ2xhc3MoJ2xnLWN1cnJlbnQnKTtcblxuICAgICAgICAvLyBhZGQgQ2xhc3MgZm9yIGNzcyBzdXBwb3J0IGFuZCB0cmFuc2l0aW9uIG1vZGVcbiAgICAgICAgaWYgKHRoaXMuZG9Dc3MoKSkge1xuICAgICAgICAgICAgdGhpcy4kb3V0ZXIuYWRkQ2xhc3MoJ2xnLWNzczMnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJG91dGVyLmFkZENsYXNzKCdsZy1jc3MnKTtcblxuICAgICAgICAgICAgLy8gU2V0IHNwZWVkIDAgYmVjYXVzZSBubyBhbmltYXRpb24gd2lsbCBoYXBwZW4gaWYgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgY3NzM1xuICAgICAgICAgICAgdGhpcy5zLnNwZWVkID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJG91dGVyLmFkZENsYXNzKHRoaXMucy5tb2RlKTtcblxuICAgICAgICBpZiAodGhpcy5zLmVuYWJsZURyYWcgJiYgdGhpcy4kaXRlbXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhpcy4kb3V0ZXIuYWRkQ2xhc3MoJ2xnLWdyYWInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnMuc2hvd0FmdGVyTG9hZCkge1xuICAgICAgICAgICAgdGhpcy4kb3V0ZXIuYWRkQ2xhc3MoJ2xnLXNob3ctYWZ0ZXItbG9hZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZG9Dc3MoKSkge1xuICAgICAgICAgICAgdmFyICRpbm5lciA9IHRoaXMuJG91dGVyLmZpbmQoJy5sZy1pbm5lcicpO1xuICAgICAgICAgICAgJGlubmVyLmNzcygndHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nLCB0aGlzLnMuY3NzRWFzaW5nKTtcbiAgICAgICAgICAgICRpbm5lci5jc3MoJ3RyYW5zaXRpb24tZHVyYXRpb24nLCB0aGlzLnMuc3BlZWQgKyAnbXMnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCcubGctYmFja2Ryb3AnKS5hZGRDbGFzcygnaW4nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIF90aGlzLiRvdXRlci5hZGRDbGFzcygnbGctdmlzaWJsZScpO1xuICAgICAgICB9LCB0aGlzLnMuYmFja2Ryb3BEdXJhdGlvbik7XG5cbiAgICAgICAgaWYgKHRoaXMucy5kb3dubG9hZCkge1xuICAgICAgICAgICAgdGhpcy4kb3V0ZXIuZmluZCgnLmxnLXRvb2xiYXInKS5hcHBlbmQoJzxhIGlkPVwibGctZG93bmxvYWRcIiB0YXJnZXQ9XCJfYmxhbmtcIiBkb3dubG9hZCBjbGFzcz1cImxnLWRvd25sb2FkIGxnLWljb25cIj48L2E+Jyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTdG9yZSB0aGUgY3VycmVudCBzY3JvbGwgdG9wIHZhbHVlIHRvIHNjcm9sbCBiYWNrIGFmdGVyIGNsb3NpbmcgdGhlIGdhbGxlcnkuLlxuICAgICAgICB0aGlzLnByZXZTY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cbiAgICB9O1xuXG4gICAgLy8gRm9yIGZpeGVkIGhlaWdodCBnYWxsZXJ5XG4gICAgUGx1Z2luLnByb3RvdHlwZS5zZXRUb3AgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMucy5oZWlnaHQgIT09ICcxMDAlJykge1xuICAgICAgICAgICAgdmFyIHdIID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuICAgICAgICAgICAgdmFyIHRvcCA9ICh3SCAtIHBhcnNlSW50KHRoaXMucy5oZWlnaHQsIDEwKSkgLyAyO1xuICAgICAgICAgICAgdmFyICRsR2FsbGVyeSA9IHRoaXMuJG91dGVyLmZpbmQoJy5sZycpO1xuICAgICAgICAgICAgaWYgKHdIID49IHBhcnNlSW50KHRoaXMucy5oZWlnaHQsIDEwKSkge1xuICAgICAgICAgICAgICAgICRsR2FsbGVyeS5jc3MoJ3RvcCcsIHRvcCArICdweCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkbEdhbGxlcnkuY3NzKCd0b3AnLCAnMHB4Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gRmluZCBjc3MzIHN1cHBvcnRcbiAgICBQbHVnaW4ucHJvdG90eXBlLmRvQ3NzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIGNoZWNrIGZvciBjc3MgYW5pbWF0aW9uIHN1cHBvcnRcbiAgICAgICAgdmFyIHN1cHBvcnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciB0cmFuc2l0aW9uID0gWyd0cmFuc2l0aW9uJywgJ01velRyYW5zaXRpb24nLCAnV2Via2l0VHJhbnNpdGlvbicsICdPVHJhbnNpdGlvbicsICdtc1RyYW5zaXRpb24nLCAnS2h0bWxUcmFuc2l0aW9uJ107XG4gICAgICAgICAgICB2YXIgcm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0cmFuc2l0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRyYW5zaXRpb25baV0gaW4gcm9vdC5zdHlsZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHN1cHBvcnQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqICBAZGVzYyBDaGVjayB0aGUgZ2l2ZW4gc3JjIGlzIHZpZGVvXG4gICAgICogIEBwYXJhbSB7U3RyaW5nfSBzcmNcbiAgICAgKiAgQHJldHVybiB7T2JqZWN0fSB2aWRlbyB0eXBlXG4gICAgICogIEV4OnsgeW91dHViZSAgOiAgW1wiLy93d3cueW91dHViZS5jb20vd2F0Y2g/dj1jMGFzSmdTeXhjWVwiLCBcImMwYXNKZ1N5eGNZXCJdIH1cbiAgICAgKi9cbiAgICBQbHVnaW4ucHJvdG90eXBlLmlzVmlkZW8gPSBmdW5jdGlvbihzcmMsIGluZGV4KSB7XG5cbiAgICAgICAgdmFyIGh0bWw7XG4gICAgICAgIGlmICh0aGlzLnMuZHluYW1pYykge1xuICAgICAgICAgICAgaHRtbCA9IHRoaXMucy5keW5hbWljRWxbaW5kZXhdLmh0bWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBodG1sID0gdGhpcy4kaXRlbXMuZXEoaW5kZXgpLmF0dHIoJ2RhdGEtaHRtbCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIGlmKGh0bWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBodG1sNTogdHJ1ZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2xpZ2h0R2FsbGVyeSA6LSBkYXRhLXNyYyBpcyBub3QgcHZvdmlkZWQgb24gc2xpZGUgaXRlbSAnICsgKGluZGV4ICsgMSkgKyAnLiBQbGVhc2UgbWFrZSBzdXJlIHRoZSBzZWxlY3RvciBwcm9wZXJ0eSBpcyBwcm9wZXJseSBjb25maWd1cmVkLiBNb3JlIGluZm8gLSBodHRwOi8vc2FjaGluY2hvb2x1ci5naXRodWIuaW8vbGlnaHRHYWxsZXJ5L2RlbW9zL2h0bWwtbWFya3VwLmh0bWwnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgeW91dHViZSA9IHNyYy5tYXRjaCgvXFwvXFwvKD86d3d3XFwuKT95b3V0dSg/OlxcLmJlfGJlXFwuY29tfGJlLW5vY29va2llXFwuY29tKVxcLyg/OndhdGNoXFw/dj18ZW1iZWRcXC8pPyhbYS16MC05XFwtXFxfXFwlXSspL2kpO1xuICAgICAgICB2YXIgdmltZW8gPSBzcmMubWF0Y2goL1xcL1xcLyg/Ond3d1xcLik/dmltZW8uY29tXFwvKFswLTlhLXpcXC1fXSspL2kpO1xuICAgICAgICB2YXIgZGFpbHltb3Rpb24gPSBzcmMubWF0Y2goL1xcL1xcLyg/Ond3d1xcLik/ZGFpLmx5XFwvKFswLTlhLXpcXC1fXSspL2kpO1xuICAgICAgICB2YXIgdmsgPSBzcmMubWF0Y2goL1xcL1xcLyg/Ond3d1xcLik/KD86dmtcXC5jb218dmtvbnRha3RlXFwucnUpXFwvKD86dmlkZW9fZXh0XFwucGhwXFw/KSguKikvaSk7XG5cbiAgICAgICAgaWYgKHlvdXR1YmUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgeW91dHViZTogeW91dHViZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmICh2aW1lbykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB2aW1lbzogdmltZW9cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAoZGFpbHltb3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZGFpbHltb3Rpb246IGRhaWx5bW90aW9uXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKHZrKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZrOiB2a1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiAgQGRlc2MgQ3JlYXRlIGltYWdlIGNvdW50ZXJcbiAgICAgKiAgRXg6IDEvMTBcbiAgICAgKi9cbiAgICBQbHVnaW4ucHJvdG90eXBlLmNvdW50ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMucy5jb3VudGVyKSB7XG4gICAgICAgICAgICAkKHRoaXMucy5hcHBlbmRDb3VudGVyVG8pLmFwcGVuZCgnPGRpdiBpZD1cImxnLWNvdW50ZXJcIj48c3BhbiBpZD1cImxnLWNvdW50ZXItY3VycmVudFwiPicgKyAocGFyc2VJbnQodGhpcy5pbmRleCwgMTApICsgMSkgKyAnPC9zcGFuPiAvIDxzcGFuIGlkPVwibGctY291bnRlci1hbGxcIj4nICsgdGhpcy4kaXRlbXMubGVuZ3RoICsgJzwvc3Bhbj48L2Rpdj4nKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiAgQGRlc2MgYWRkIHN1Yi1odG1sIGludG8gdGhlIHNsaWRlXG4gICAgICogIEBwYXJhbSB7TnVtYmVyfSBpbmRleCAtIGluZGV4IG9mIHRoZSBzbGlkZVxuICAgICAqL1xuICAgIFBsdWdpbi5wcm90b3R5cGUuYWRkSHRtbCA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgIHZhciBzdWJIdG1sID0gbnVsbDtcbiAgICAgICAgdmFyIHN1Ykh0bWxVcmw7XG4gICAgICAgIHZhciAkY3VycmVudEVsZTtcbiAgICAgICAgaWYgKHRoaXMucy5keW5hbWljKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zLmR5bmFtaWNFbFtpbmRleF0uc3ViSHRtbFVybCkge1xuICAgICAgICAgICAgICAgIHN1Ykh0bWxVcmwgPSB0aGlzLnMuZHluYW1pY0VsW2luZGV4XS5zdWJIdG1sVXJsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdWJIdG1sID0gdGhpcy5zLmR5bmFtaWNFbFtpbmRleF0uc3ViSHRtbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRjdXJyZW50RWxlID0gdGhpcy4kaXRlbXMuZXEoaW5kZXgpO1xuICAgICAgICAgICAgaWYgKCRjdXJyZW50RWxlLmF0dHIoJ2RhdGEtc3ViLWh0bWwtdXJsJykpIHtcbiAgICAgICAgICAgICAgICBzdWJIdG1sVXJsID0gJGN1cnJlbnRFbGUuYXR0cignZGF0YS1zdWItaHRtbC11cmwnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3ViSHRtbCA9ICRjdXJyZW50RWxlLmF0dHIoJ2RhdGEtc3ViLWh0bWwnKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zLmdldENhcHRpb25Gcm9tVGl0bGVPckFsdCAmJiAhc3ViSHRtbCkge1xuICAgICAgICAgICAgICAgICAgICBzdWJIdG1sID0gJGN1cnJlbnRFbGUuYXR0cigndGl0bGUnKSB8fCAkY3VycmVudEVsZS5maW5kKCdpbWcnKS5maXJzdCgpLmF0dHIoJ2FsdCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghc3ViSHRtbFVybCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdWJIdG1sICE9PSAndW5kZWZpbmVkJyAmJiBzdWJIdG1sICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBnZXQgZmlyc3QgbGV0dGVyIG9mIHN1Ymh0bWxcbiAgICAgICAgICAgICAgICAvLyBpZiBmaXJzdCBsZXR0ZXIgc3RhcnRzIHdpdGggLiBvciAjIGdldCB0aGUgaHRtbCBmb3JtIHRoZSBqUXVlcnkgb2JqZWN0XG4gICAgICAgICAgICAgICAgdmFyIGZMID0gc3ViSHRtbC5zdWJzdHJpbmcoMCwgMSk7XG4gICAgICAgICAgICAgICAgaWYgKGZMID09PSAnLicgfHwgZkwgPT09ICcjJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zLnN1Ykh0bWxTZWxlY3RvclJlbGF0aXZlICYmICF0aGlzLnMuZHluYW1pYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ViSHRtbCA9ICRjdXJyZW50RWxlLmZpbmQoc3ViSHRtbCkuaHRtbCgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ViSHRtbCA9ICQoc3ViSHRtbCkuaHRtbCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdWJIdG1sID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zLmFwcGVuZFN1Ykh0bWxUbyA9PT0gJy5sZy1zdWItaHRtbCcpIHtcblxuICAgICAgICAgICAgaWYgKHN1Ykh0bWxVcmwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRvdXRlci5maW5kKHRoaXMucy5hcHBlbmRTdWJIdG1sVG8pLmxvYWQoc3ViSHRtbFVybCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuJG91dGVyLmZpbmQodGhpcy5zLmFwcGVuZFN1Ykh0bWxUbykuaHRtbChzdWJIdG1sKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpZiAoc3ViSHRtbFVybCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHNsaWRlLmVxKGluZGV4KS5sb2FkKHN1Ykh0bWxVcmwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzbGlkZS5lcShpbmRleCkuYXBwZW5kKHN1Ykh0bWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIGxnLWVtcHR5LWh0bWwgY2xhc3MgaWYgdGl0bGUgZG9lc24ndCBleGlzdFxuICAgICAgICBpZiAodHlwZW9mIHN1Ykh0bWwgIT09ICd1bmRlZmluZWQnICYmIHN1Ykh0bWwgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChzdWJIdG1sID09PSAnJykge1xuICAgICAgICAgICAgICAgIHRoaXMuJG91dGVyLmZpbmQodGhpcy5zLmFwcGVuZFN1Ykh0bWxUbykuYWRkQ2xhc3MoJ2xnLWVtcHR5LWh0bWwnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kb3V0ZXIuZmluZCh0aGlzLnMuYXBwZW5kU3ViSHRtbFRvKS5yZW1vdmVDbGFzcygnbGctZW1wdHktaHRtbCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kZWwudHJpZ2dlcignb25BZnRlckFwcGVuZFN1Ykh0bWwubGcnLCBbaW5kZXhdKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogIEBkZXNjIFByZWxvYWQgc2xpZGVzXG4gICAgICogIEBwYXJhbSB7TnVtYmVyfSBpbmRleCAtIGluZGV4IG9mIHRoZSBzbGlkZVxuICAgICAqL1xuICAgIFBsdWdpbi5wcm90b3R5cGUucHJlbG9hZCA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgIHZhciBpID0gMTtcbiAgICAgICAgdmFyIGogPSAxO1xuICAgICAgICBmb3IgKGkgPSAxOyBpIDw9IHRoaXMucy5wcmVsb2FkOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpID49IHRoaXMuJGl0ZW1zLmxlbmd0aCAtIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubG9hZENvbnRlbnQoaW5kZXggKyBpLCBmYWxzZSwgMCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGogPSAxOyBqIDw9IHRoaXMucy5wcmVsb2FkOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChpbmRleCAtIGogPCAwKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubG9hZENvbnRlbnQoaW5kZXggLSBqLCBmYWxzZSwgMCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogIEBkZXNjIExvYWQgc2xpZGUgY29udGVudCBpbnRvIHNsaWRlLlxuICAgICAqICBAcGFyYW0ge051bWJlcn0gaW5kZXggLSBpbmRleCBvZiB0aGUgc2xpZGUuXG4gICAgICogIEBwYXJhbSB7Qm9vbGVhbn0gcmVjIC0gaWYgdHJ1ZSBjYWxsIGxvYWRjb250ZW50KCkgZnVuY3Rpb24gYWdhaW4uXG4gICAgICogIEBwYXJhbSB7Qm9vbGVhbn0gZGVsYXkgLSBkZWxheSBmb3IgYWRkaW5nIGNvbXBsZXRlIGNsYXNzLiBpdCBpcyAwIGV4Y2VwdCBmaXJzdCB0aW1lLlxuICAgICAqL1xuICAgIFBsdWdpbi5wcm90b3R5cGUubG9hZENvbnRlbnQgPSBmdW5jdGlvbihpbmRleCwgcmVjLCBkZWxheSkge1xuXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBfaGFzUG9zdGVyID0gZmFsc2U7XG4gICAgICAgIHZhciBfJGltZztcbiAgICAgICAgdmFyIF9zcmM7XG4gICAgICAgIHZhciBfcG9zdGVyO1xuICAgICAgICB2YXIgX3NyY3NldDtcbiAgICAgICAgdmFyIF9zaXplcztcbiAgICAgICAgdmFyIF9odG1sO1xuICAgICAgICB2YXIgZ2V0UmVzcG9uc2l2ZVNyYyA9IGZ1bmN0aW9uKHNyY0l0bXMpIHtcbiAgICAgICAgICAgIHZhciByc1dpZHRoID0gW107XG4gICAgICAgICAgICB2YXIgcnNTcmMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3JjSXRtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBfX3NyYyA9IHNyY0l0bXNbaV0uc3BsaXQoJyAnKTtcblxuICAgICAgICAgICAgICAgIC8vIE1hbmFnZSBlbXB0eSBzcGFjZVxuICAgICAgICAgICAgICAgIGlmIChfX3NyY1swXSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgX19zcmMuc3BsaWNlKDAsIDEpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJzU3JjLnB1c2goX19zcmNbMF0pO1xuICAgICAgICAgICAgICAgIHJzV2lkdGgucHVzaChfX3NyY1sxXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciB3V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcnNXaWR0aC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChyc1dpZHRoW2pdLCAxMCkgPiB3V2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3NyYyA9IHJzU3JjW2pdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKF90aGlzLnMuZHluYW1pYykge1xuXG4gICAgICAgICAgICBpZiAoX3RoaXMucy5keW5hbWljRWxbaW5kZXhdLnBvc3Rlcikge1xuICAgICAgICAgICAgICAgIF9oYXNQb3N0ZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIF9wb3N0ZXIgPSBfdGhpcy5zLmR5bmFtaWNFbFtpbmRleF0ucG9zdGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfaHRtbCA9IF90aGlzLnMuZHluYW1pY0VsW2luZGV4XS5odG1sO1xuICAgICAgICAgICAgX3NyYyA9IF90aGlzLnMuZHluYW1pY0VsW2luZGV4XS5zcmM7XG5cbiAgICAgICAgICAgIGlmIChfdGhpcy5zLmR5bmFtaWNFbFtpbmRleF0ucmVzcG9uc2l2ZSkge1xuICAgICAgICAgICAgICAgIHZhciBzcmNEeUl0bXMgPSBfdGhpcy5zLmR5bmFtaWNFbFtpbmRleF0ucmVzcG9uc2l2ZS5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgICAgIGdldFJlc3BvbnNpdmVTcmMoc3JjRHlJdG1zKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX3NyY3NldCA9IF90aGlzLnMuZHluYW1pY0VsW2luZGV4XS5zcmNzZXQ7XG4gICAgICAgICAgICBfc2l6ZXMgPSBfdGhpcy5zLmR5bmFtaWNFbFtpbmRleF0uc2l6ZXM7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKF90aGlzLiRpdGVtcy5lcShpbmRleCkuYXR0cignZGF0YS1wb3N0ZXInKSkge1xuICAgICAgICAgICAgICAgIF9oYXNQb3N0ZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIF9wb3N0ZXIgPSBfdGhpcy4kaXRlbXMuZXEoaW5kZXgpLmF0dHIoJ2RhdGEtcG9zdGVyJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF9odG1sID0gX3RoaXMuJGl0ZW1zLmVxKGluZGV4KS5hdHRyKCdkYXRhLWh0bWwnKTtcbiAgICAgICAgICAgIF9zcmMgPSBfdGhpcy4kaXRlbXMuZXEoaW5kZXgpLmF0dHIoJ2hyZWYnKSB8fCBfdGhpcy4kaXRlbXMuZXEoaW5kZXgpLmF0dHIoJ2RhdGEtc3JjJyk7XG5cbiAgICAgICAgICAgIGlmIChfdGhpcy4kaXRlbXMuZXEoaW5kZXgpLmF0dHIoJ2RhdGEtcmVzcG9uc2l2ZScpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNyY0l0bXMgPSBfdGhpcy4kaXRlbXMuZXEoaW5kZXgpLmF0dHIoJ2RhdGEtcmVzcG9uc2l2ZScpLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICAgICAgZ2V0UmVzcG9uc2l2ZVNyYyhzcmNJdG1zKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX3NyY3NldCA9IF90aGlzLiRpdGVtcy5lcShpbmRleCkuYXR0cignZGF0YS1zcmNzZXQnKTtcbiAgICAgICAgICAgIF9zaXplcyA9IF90aGlzLiRpdGVtcy5lcShpbmRleCkuYXR0cignZGF0YS1zaXplcycpO1xuXG4gICAgICAgIH1cblxuICAgICAgICAvL2lmIChfc3JjIHx8IF9zcmNzZXQgfHwgX3NpemVzIHx8IF9wb3N0ZXIpIHtcblxuICAgICAgICB2YXIgaWZyYW1lID0gZmFsc2U7XG4gICAgICAgIGlmIChfdGhpcy5zLmR5bmFtaWMpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5zLmR5bmFtaWNFbFtpbmRleF0uaWZyYW1lKSB7XG4gICAgICAgICAgICAgICAgaWZyYW1lID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy4kaXRlbXMuZXEoaW5kZXgpLmF0dHIoJ2RhdGEtaWZyYW1lJykgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgICAgIGlmcmFtZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX2lzVmlkZW8gPSBfdGhpcy5pc1ZpZGVvKF9zcmMsIGluZGV4KTtcbiAgICAgICAgaWYgKCFfdGhpcy4kc2xpZGUuZXEoaW5kZXgpLmhhc0NsYXNzKCdsZy1sb2FkZWQnKSkge1xuICAgICAgICAgICAgaWYgKGlmcmFtZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLiRzbGlkZS5lcShpbmRleCkucHJlcGVuZCgnPGRpdiBjbGFzcz1cImxnLXZpZGVvLWNvbnQgbGctaGFzLWlmcmFtZVwiIHN0eWxlPVwibWF4LXdpZHRoOicgKyBfdGhpcy5zLmlmcmFtZU1heFdpZHRoICsgJ1wiPjxkaXYgY2xhc3M9XCJsZy12aWRlb1wiPjxpZnJhbWUgY2xhc3M9XCJsZy1vYmplY3RcIiBmcmFtZWJvcmRlcj1cIjBcIiBzcmM9XCInICsgX3NyYyArICdcIiAgYWxsb3dmdWxsc2NyZWVuPVwidHJ1ZVwiPjwvaWZyYW1lPjwvZGl2PjwvZGl2PicpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChfaGFzUG9zdGVyKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZpZGVvQ2xhc3MgPSAnJztcbiAgICAgICAgICAgICAgICBpZiAoX2lzVmlkZW8gJiYgX2lzVmlkZW8ueW91dHViZSkge1xuICAgICAgICAgICAgICAgICAgICB2aWRlb0NsYXNzID0gJ2xnLWhhcy15b3V0dWJlJztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKF9pc1ZpZGVvICYmIF9pc1ZpZGVvLnZpbWVvKSB7XG4gICAgICAgICAgICAgICAgICAgIHZpZGVvQ2xhc3MgPSAnbGctaGFzLXZpbWVvJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2aWRlb0NsYXNzID0gJ2xnLWhhcy1odG1sNSc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX3RoaXMuJHNsaWRlLmVxKGluZGV4KS5wcmVwZW5kKCc8ZGl2IGNsYXNzPVwibGctdmlkZW8tY29udCAnICsgdmlkZW9DbGFzcyArICcgXCI+PGRpdiBjbGFzcz1cImxnLXZpZGVvXCI+PHNwYW4gY2xhc3M9XCJsZy12aWRlby1wbGF5XCI+PC9zcGFuPjxpbWcgY2xhc3M9XCJsZy1vYmplY3QgbGctaGFzLXBvc3RlclwiIHNyYz1cIicgKyBfcG9zdGVyICsgJ1wiIC8+PC9kaXY+PC9kaXY+Jyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoX2lzVmlkZW8pIHtcbiAgICAgICAgICAgICAgICBfdGhpcy4kc2xpZGUuZXEoaW5kZXgpLnByZXBlbmQoJzxkaXYgY2xhc3M9XCJsZy12aWRlby1jb250IFwiPjxkaXYgY2xhc3M9XCJsZy12aWRlb1wiPjwvZGl2PjwvZGl2PicpO1xuICAgICAgICAgICAgICAgIF90aGlzLiRlbC50cmlnZ2VyKCdoYXNWaWRlby5sZycsIFtpbmRleCwgX3NyYywgX2h0bWxdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuJHNsaWRlLmVxKGluZGV4KS5wcmVwZW5kKCc8ZGl2IGNsYXNzPVwibGctaW1nLXdyYXBcIj48aW1nIGNsYXNzPVwibGctb2JqZWN0IGxnLWltYWdlXCIgc3JjPVwiJyArIF9zcmMgKyAnXCIgLz48L2Rpdj4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX3RoaXMuJGVsLnRyaWdnZXIoJ29uQWZlckFwcGVuZFNsaWRlLmxnJywgW2luZGV4XSk7XG5cbiAgICAgICAgICAgIF8kaW1nID0gX3RoaXMuJHNsaWRlLmVxKGluZGV4KS5maW5kKCcubGctb2JqZWN0Jyk7XG4gICAgICAgICAgICBpZiAoX3NpemVzKSB7XG4gICAgICAgICAgICAgICAgXyRpbWcuYXR0cignc2l6ZXMnLCBfc2l6ZXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoX3NyY3NldCkge1xuICAgICAgICAgICAgICAgIF8kaW1nLmF0dHIoJ3NyY3NldCcsIF9zcmNzZXQpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHBpY3R1cmVmaWxsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzOiBbXyRpbWdbMF1dXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdsaWdodEdhbGxlcnkgOi0gSWYgeW91IHdhbnQgc3Jjc2V0IHRvIGJlIHN1cHBvcnRlZCBmb3Igb2xkZXIgYnJvd3NlciBwbGVhc2UgaW5jbHVkZSBwaWN0dXJlZmlsIHZlcnNpb24gMiBqYXZhc2NyaXB0IGxpYnJhcnkgaW4geW91ciBkb2N1bWVudC4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnMuYXBwZW5kU3ViSHRtbFRvICE9PSAnLmxnLXN1Yi1odG1sJykge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkZEh0bWwoaW5kZXgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfdGhpcy4kc2xpZGUuZXEoaW5kZXgpLmFkZENsYXNzKCdsZy1sb2FkZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLiRzbGlkZS5lcShpbmRleCkuZmluZCgnLmxnLW9iamVjdCcpLm9uKCdsb2FkLmxnIGVycm9yLmxnJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIC8vIEZvciBmaXJzdCB0aW1lIGFkZCBzb21lIGRlbGF5IGZvciBkaXNwbGF5aW5nIHRoZSBzdGFydCBhbmltYXRpb24uXG4gICAgICAgICAgICB2YXIgX3NwZWVkID0gMDtcblxuICAgICAgICAgICAgLy8gRG8gbm90IGNoYW5nZSB0aGUgZGVsYXkgdmFsdWUgYmVjYXVzZSBpdCBpcyByZXF1aXJlZCBmb3Igem9vbSBwbHVnaW4uXG4gICAgICAgICAgICAvLyBJZiBnYWxsZXJ5IG9wZW5lZCBmcm9tIGRpcmVjdCB1cmwgKGhhc2gpIHNwZWVkIHZhbHVlIHNob3VsZCBiZSAwXG4gICAgICAgICAgICBpZiAoZGVsYXkgJiYgISQoJ2JvZHknKS5oYXNDbGFzcygnbGctZnJvbS1oYXNoJykpIHtcbiAgICAgICAgICAgICAgICBfc3BlZWQgPSBkZWxheTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy4kc2xpZGUuZXEoaW5kZXgpLmFkZENsYXNzKCdsZy1jb21wbGV0ZScpO1xuICAgICAgICAgICAgICAgIF90aGlzLiRlbC50cmlnZ2VyKCdvblNsaWRlSXRlbUxvYWQubGcnLCBbaW5kZXgsIGRlbGF5IHx8IDBdKTtcbiAgICAgICAgICAgIH0sIF9zcGVlZCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQHRvZG8gY2hlY2sgbG9hZCBzdGF0ZSBmb3IgaHRtbDUgdmlkZW9zXG4gICAgICAgIGlmIChfaXNWaWRlbyAmJiBfaXNWaWRlby5odG1sNSAmJiAhX2hhc1Bvc3Rlcikge1xuICAgICAgICAgICAgX3RoaXMuJHNsaWRlLmVxKGluZGV4KS5hZGRDbGFzcygnbGctY29tcGxldGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZWMgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmICghX3RoaXMuJHNsaWRlLmVxKGluZGV4KS5oYXNDbGFzcygnbGctY29tcGxldGUnKSkge1xuICAgICAgICAgICAgICAgIF90aGlzLiRzbGlkZS5lcShpbmRleCkuZmluZCgnLmxnLW9iamVjdCcpLm9uKCdsb2FkLmxnIGVycm9yLmxnJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnByZWxvYWQoaW5kZXgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5wcmVsb2FkKGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAqICAgQGRlc2Mgc2xpZGUgZnVuY3Rpb24gZm9yIGxpZ2h0Z2FsbGVyeVxuICAgICAgICAqKiBTbGlkZSgpIGdldHMgY2FsbCBvbiBzdGFydFxuICAgICAgICAqKiAqKiBTZXQgbGcub24gdHJ1ZSBvbmNlIHNsaWRlKCkgZnVuY3Rpb24gZ2V0cyBjYWxsZWQuXG4gICAgICAgICoqIENhbGwgbG9hZENvbnRlbnQoKSBvbiBzbGlkZSgpIGZ1bmN0aW9uIGluc2lkZSBzZXRUaW1lb3V0XG4gICAgICAgICoqICoqIE9uIGZpcnN0IHNsaWRlIHdlIGRvIG5vdCB3YW50IGFueSBhbmltYXRpb24gbGlrZSBzbGlkZSBvZiBmYWRlXG4gICAgICAgICoqICoqIFNvIG9uIGZpcnN0IHNsaWRlKCBpZiBsZy5vbiBpZiBmYWxzZSB0aGF0IGlzIGZpcnN0IHNsaWRlKSBsb2FkQ29udGVudCgpIHNob3VsZCBzdGFydCBsb2FkaW5nIGltbWVkaWF0ZWx5XG4gICAgICAgICoqICoqIEVsc2UgbG9hZENvbnRlbnQoKSBzaG91bGQgd2FpdCBmb3IgdGhlIHRyYW5zaXRpb24gdG8gY29tcGxldGUuXG4gICAgICAgICoqICoqIFNvIHNldCB0aW1lb3V0IHMuc3BlZWQgKyA1MFxuICAgIDw9PiAqKiBsb2FkQ29udGVudCgpIHdpbGwgbG9hZCBzbGlkZSBjb250ZW50IGluIHRvIHRoZSBwYXJ0aWN1bGFyIHNsaWRlXG4gICAgICAgICoqICoqIEl0IGhhcyByZWN1cnNpb24gKHJlYykgcGFyYW1ldGVyLiBpZiByZWMgPT09IHRydWUgbG9hZENvbnRlbnQoKSB3aWxsIGNhbGwgcHJlbG9hZCgpIGZ1bmN0aW9uLlxuICAgICAgICAqKiAqKiBwcmVsb2FkIHdpbGwgZXhlY3V0ZSBvbmx5IHdoZW4gdGhlIHByZXZpb3VzIHNsaWRlIGlzIGZ1bGx5IGxvYWRlZCAoaW1hZ2VzIGlmcmFtZSlcbiAgICAgICAgKiogKiogYXZvaWQgc2ltdWx0YW5lb3VzIGltYWdlIGxvYWRcbiAgICA8PT4gKiogUHJlbG9hZCgpIHdpbGwgY2hlY2sgZm9yIHMucHJlbG9hZCB2YWx1ZSBhbmQgY2FsbCBsb2FkQ29udGVudCgpIGFnYWluIGFjY29yaW5nIHRvIHByZWxvYWQgdmFsdWVcbiAgICAgICAgKiogbG9hZENvbnRlbnQoKSAgPD09PT0+IFByZWxvYWQoKTtcblxuICAgICogICBAcGFyYW0ge051bWJlcn0gaW5kZXggLSBpbmRleCBvZiB0aGUgc2xpZGVcbiAgICAqICAgQHBhcmFtIHtCb29sZWFufSBmcm9tVG91Y2ggLSB0cnVlIGlmIHNsaWRlIGZ1bmN0aW9uIGNhbGxlZCB2aWEgdG91Y2ggZXZlbnQgb3IgbW91c2UgZHJhZ1xuICAgICogICBAcGFyYW0ge0Jvb2xlYW59IGZyb21UaHVtYiAtIHRydWUgaWYgc2xpZGUgZnVuY3Rpb24gY2FsbGVkIHZpYSB0aHVtYm5haWwgY2xpY2tcbiAgICAqICAgQHBhcmFtIHtTdHJpbmd9IGRpcmVjdGlvbiAtIERpcmVjdGlvbiBvZiB0aGUgc2xpZGUobmV4dC9wcmV2KVxuICAgICovXG4gICAgUGx1Z2luLnByb3RvdHlwZS5zbGlkZSA9IGZ1bmN0aW9uKGluZGV4LCBmcm9tVG91Y2gsIGZyb21UaHVtYiwgZGlyZWN0aW9uKSB7XG5cbiAgICAgICAgdmFyIF9wcmV2SW5kZXggPSB0aGlzLiRvdXRlci5maW5kKCcubGctY3VycmVudCcpLmluZGV4KCk7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgLy8gUHJldmVudCBpZiBtdWx0aXBsZSBjYWxsXG4gICAgICAgIC8vIFJlcXVpcmVkIGZvciBoc2ggcGx1Z2luXG4gICAgICAgIGlmIChfdGhpcy5sR2FsbGVyeU9uICYmIChfcHJldkluZGV4ID09PSBpbmRleCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfbGVuZ3RoID0gdGhpcy4kc2xpZGUubGVuZ3RoO1xuICAgICAgICB2YXIgX3RpbWUgPSBfdGhpcy5sR2FsbGVyeU9uID8gdGhpcy5zLnNwZWVkIDogMDtcblxuICAgICAgICBpZiAoIV90aGlzLmxnQnVzeSkge1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zLmRvd25sb2FkKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9zcmM7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLnMuZHluYW1pYykge1xuICAgICAgICAgICAgICAgICAgICBfc3JjID0gX3RoaXMucy5keW5hbWljRWxbaW5kZXhdLmRvd25sb2FkVXJsICE9PSBmYWxzZSAmJiAoX3RoaXMucy5keW5hbWljRWxbaW5kZXhdLmRvd25sb2FkVXJsIHx8IF90aGlzLnMuZHluYW1pY0VsW2luZGV4XS5zcmMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF9zcmMgPSBfdGhpcy4kaXRlbXMuZXEoaW5kZXgpLmF0dHIoJ2RhdGEtZG93bmxvYWQtdXJsJykgIT09ICdmYWxzZScgJiYgKF90aGlzLiRpdGVtcy5lcShpbmRleCkuYXR0cignZGF0YS1kb3dubG9hZC11cmwnKSB8fCBfdGhpcy4kaXRlbXMuZXEoaW5kZXgpLmF0dHIoJ2hyZWYnKSB8fCBfdGhpcy4kaXRlbXMuZXEoaW5kZXgpLmF0dHIoJ2RhdGEtc3JjJykpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKF9zcmMpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnI2xnLWRvd25sb2FkJykuYXR0cignaHJlZicsIF9zcmMpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy4kb3V0ZXIucmVtb3ZlQ2xhc3MoJ2xnLWhpZGUtZG93bmxvYWQnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy4kb3V0ZXIuYWRkQ2xhc3MoJ2xnLWhpZGUtZG93bmxvYWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuJGVsLnRyaWdnZXIoJ29uQmVmb3JlU2xpZGUubGcnLCBbX3ByZXZJbmRleCwgaW5kZXgsIGZyb21Ub3VjaCwgZnJvbVRodW1iXSk7XG5cbiAgICAgICAgICAgIF90aGlzLmxnQnVzeSA9IHRydWU7XG5cbiAgICAgICAgICAgIGNsZWFyVGltZW91dChfdGhpcy5oaWRlQmFydGltZW91dCk7XG5cbiAgICAgICAgICAgIC8vIEFkZCB0aXRsZSBpZiB0aGlzLnMuYXBwZW5kU3ViSHRtbFRvID09PSBsZy1zdWItaHRtbFxuICAgICAgICAgICAgaWYgKHRoaXMucy5hcHBlbmRTdWJIdG1sVG8gPT09ICcubGctc3ViLWh0bWwnKSB7XG5cbiAgICAgICAgICAgICAgICAvLyB3YWl0IGZvciBzbGlkZSBhbmltYXRpb24gdG8gY29tcGxldGVcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hZGRIdG1sKGluZGV4KTtcbiAgICAgICAgICAgICAgICB9LCBfdGltZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuYXJyb3dEaXNhYmxlKGluZGV4KTtcblxuICAgICAgICAgICAgaWYgKCFkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPCBfcHJldkluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9ICdwcmV2JztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID4gX3ByZXZJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSAnbmV4dCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWZyb21Ub3VjaCkge1xuXG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGFsbCB0cmFuc2l0aW9uc1xuICAgICAgICAgICAgICAgIF90aGlzLiRvdXRlci5hZGRDbGFzcygnbGctbm8tdHJhbnMnKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuJHNsaWRlLnJlbW92ZUNsYXNzKCdsZy1wcmV2LXNsaWRlIGxnLW5leHQtc2xpZGUnKTtcblxuICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdwcmV2Jykge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vcHJldnNsaWRlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHNsaWRlLmVxKGluZGV4KS5hZGRDbGFzcygnbGctcHJldi1zbGlkZScpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzbGlkZS5lcShfcHJldkluZGV4KS5hZGRDbGFzcygnbGctbmV4dC1zbGlkZScpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBzbGlkZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzbGlkZS5lcShpbmRleCkuYWRkQ2xhc3MoJ2xnLW5leHQtc2xpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2xpZGUuZXEoX3ByZXZJbmRleCkuYWRkQ2xhc3MoJ2xnLXByZXYtc2xpZGUnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBnaXZlIDUwIG1zIGZvciBicm93c2VyIHRvIGFkZC9yZW1vdmUgY2xhc3NcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy4kc2xpZGUucmVtb3ZlQ2xhc3MoJ2xnLWN1cnJlbnQnKTtcblxuICAgICAgICAgICAgICAgICAgICAvL190aGlzLiRzbGlkZS5lcShfcHJldkluZGV4KS5yZW1vdmVDbGFzcygnbGctY3VycmVudCcpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy4kc2xpZGUuZXEoaW5kZXgpLmFkZENsYXNzKCdsZy1jdXJyZW50Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gcmVzZXQgYWxsIHRyYW5zaXRpb25zXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLiRvdXRlci5yZW1vdmVDbGFzcygnbGctbm8tdHJhbnMnKTtcbiAgICAgICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgdGhpcy4kc2xpZGUucmVtb3ZlQ2xhc3MoJ2xnLXByZXYtc2xpZGUgbGctY3VycmVudCBsZy1uZXh0LXNsaWRlJyk7XG4gICAgICAgICAgICAgICAgdmFyIHRvdWNoUHJldjtcbiAgICAgICAgICAgICAgICB2YXIgdG91Y2hOZXh0O1xuICAgICAgICAgICAgICAgIGlmIChfbGVuZ3RoID4gMikge1xuICAgICAgICAgICAgICAgICAgICB0b3VjaFByZXYgPSBpbmRleCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIHRvdWNoTmV4dCA9IGluZGV4ICsgMTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoKGluZGV4ID09PSAwKSAmJiAoX3ByZXZJbmRleCA9PT0gX2xlbmd0aCAtIDEpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5leHQgc2xpZGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoTmV4dCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaFByZXYgPSBfbGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICgoaW5kZXggPT09IF9sZW5ndGggLSAxKSAmJiAoX3ByZXZJbmRleCA9PT0gMCkpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJldiBzbGlkZVxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hOZXh0ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoUHJldiA9IF9sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0b3VjaFByZXYgPSAwO1xuICAgICAgICAgICAgICAgICAgICB0b3VjaE5leHQgPSAxO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdwcmV2Jykge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy4kc2xpZGUuZXEodG91Y2hOZXh0KS5hZGRDbGFzcygnbGctbmV4dC1zbGlkZScpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLiRzbGlkZS5lcSh0b3VjaFByZXYpLmFkZENsYXNzKCdsZy1wcmV2LXNsaWRlJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX3RoaXMuJHNsaWRlLmVxKGluZGV4KS5hZGRDbGFzcygnbGctY3VycmVudCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoX3RoaXMubEdhbGxlcnlPbikge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmxvYWRDb250ZW50KGluZGV4LCB0cnVlLCAwKTtcbiAgICAgICAgICAgICAgICB9LCB0aGlzLnMuc3BlZWQgKyA1MCk7XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5sZ0J1c3kgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuJGVsLnRyaWdnZXIoJ29uQWZ0ZXJTbGlkZS5sZycsIFtfcHJldkluZGV4LCBpbmRleCwgZnJvbVRvdWNoLCBmcm9tVGh1bWJdKTtcbiAgICAgICAgICAgICAgICB9LCB0aGlzLnMuc3BlZWQpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF90aGlzLmxvYWRDb250ZW50KGluZGV4LCB0cnVlLCBfdGhpcy5zLmJhY2tkcm9wRHVyYXRpb24pO1xuXG4gICAgICAgICAgICAgICAgX3RoaXMubGdCdXN5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgX3RoaXMuJGVsLnRyaWdnZXIoJ29uQWZ0ZXJTbGlkZS5sZycsIFtfcHJldkluZGV4LCBpbmRleCwgZnJvbVRvdWNoLCBmcm9tVGh1bWJdKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX3RoaXMubEdhbGxlcnlPbiA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnMuY291bnRlcikge1xuICAgICAgICAgICAgICAgICQoJyNsZy1jb3VudGVyLWN1cnJlbnQnKS50ZXh0KGluZGV4ICsgMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBfdGhpcy5pbmRleCA9IGluZGV4O1xuXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqICBAZGVzYyBHbyB0byBuZXh0IHNsaWRlXG4gICAgICogIEBwYXJhbSB7Qm9vbGVhbn0gZnJvbVRvdWNoIC0gdHJ1ZSBpZiBzbGlkZSBmdW5jdGlvbiBjYWxsZWQgdmlhIHRvdWNoIGV2ZW50XG4gICAgICovXG4gICAgUGx1Z2luLnByb3RvdHlwZS5nb1RvTmV4dFNsaWRlID0gZnVuY3Rpb24oZnJvbVRvdWNoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBfbG9vcCA9IF90aGlzLnMubG9vcDtcbiAgICAgICAgaWYgKGZyb21Ub3VjaCAmJiBfdGhpcy4kc2xpZGUubGVuZ3RoIDwgMykge1xuICAgICAgICAgICAgX2xvb3AgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghX3RoaXMubGdCdXN5KSB7XG4gICAgICAgICAgICBpZiAoKF90aGlzLmluZGV4ICsgMSkgPCBfdGhpcy4kc2xpZGUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuaW5kZXgrKztcbiAgICAgICAgICAgICAgICBfdGhpcy4kZWwudHJpZ2dlcignb25CZWZvcmVOZXh0U2xpZGUubGcnLCBbX3RoaXMuaW5kZXhdKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5zbGlkZShfdGhpcy5pbmRleCwgZnJvbVRvdWNoLCBmYWxzZSwgJ25leHQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKF9sb29wKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuJGVsLnRyaWdnZXIoJ29uQmVmb3JlTmV4dFNsaWRlLmxnJywgW190aGlzLmluZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNsaWRlKF90aGlzLmluZGV4LCBmcm9tVG91Y2gsIGZhbHNlLCAnbmV4dCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoX3RoaXMucy5zbGlkZUVuZEFuaW1hdG9pbiAmJiAhZnJvbVRvdWNoKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLiRvdXRlci5hZGRDbGFzcygnbGctcmlnaHQtZW5kJyk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy4kb3V0ZXIucmVtb3ZlQ2xhc3MoJ2xnLXJpZ2h0LWVuZCcpO1xuICAgICAgICAgICAgICAgICAgICB9LCA0MDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiAgQGRlc2MgR28gdG8gcHJldmlvdXMgc2xpZGVcbiAgICAgKiAgQHBhcmFtIHtCb29sZWFufSBmcm9tVG91Y2ggLSB0cnVlIGlmIHNsaWRlIGZ1bmN0aW9uIGNhbGxlZCB2aWEgdG91Y2ggZXZlbnRcbiAgICAgKi9cbiAgICBQbHVnaW4ucHJvdG90eXBlLmdvVG9QcmV2U2xpZGUgPSBmdW5jdGlvbihmcm9tVG91Y2gpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIF9sb29wID0gX3RoaXMucy5sb29wO1xuICAgICAgICBpZiAoZnJvbVRvdWNoICYmIF90aGlzLiRzbGlkZS5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgICBfbG9vcCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFfdGhpcy5sZ0J1c3kpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5pbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5pbmRleC0tO1xuICAgICAgICAgICAgICAgIF90aGlzLiRlbC50cmlnZ2VyKCdvbkJlZm9yZVByZXZTbGlkZS5sZycsIFtfdGhpcy5pbmRleCwgZnJvbVRvdWNoXSk7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2xpZGUoX3RoaXMuaW5kZXgsIGZyb21Ub3VjaCwgZmFsc2UsICdwcmV2Jyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChfbG9vcCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5pbmRleCA9IF90aGlzLiRpdGVtcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy4kZWwudHJpZ2dlcignb25CZWZvcmVQcmV2U2xpZGUubGcnLCBbX3RoaXMuaW5kZXgsIGZyb21Ub3VjaF0pO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zbGlkZShfdGhpcy5pbmRleCwgZnJvbVRvdWNoLCBmYWxzZSwgJ3ByZXYnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKF90aGlzLnMuc2xpZGVFbmRBbmltYXRvaW4gJiYgIWZyb21Ub3VjaCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy4kb3V0ZXIuYWRkQ2xhc3MoJ2xnLWxlZnQtZW5kJyk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy4kb3V0ZXIucmVtb3ZlQ2xhc3MoJ2xnLWxlZnQtZW5kJyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDQwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIFBsdWdpbi5wcm90b3R5cGUua2V5UHJlc3MgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuJGl0ZW1zLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICQod2luZG93KS5vbigna2V5dXAubGcnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLiRpdGVtcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDM3KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5nb1RvUHJldlNsaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAzOSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZ29Ub05leHRTbGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAkKHdpbmRvdykub24oJ2tleWRvd24ubGcnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMucy5lc2NLZXkgPT09IHRydWUgJiYgZS5rZXlDb2RlID09PSAyNykge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBpZiAoIV90aGlzLiRvdXRlci5oYXNDbGFzcygnbGctdGh1bWItb3BlbicpKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy4kb3V0ZXIucmVtb3ZlQ2xhc3MoJ2xnLXRodW1iLW9wZW4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBQbHVnaW4ucHJvdG90eXBlLmFycm93ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuJG91dGVyLmZpbmQoJy5sZy1wcmV2Jykub24oJ2NsaWNrLmxnJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBfdGhpcy5nb1RvUHJldlNsaWRlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJG91dGVyLmZpbmQoJy5sZy1uZXh0Jykub24oJ2NsaWNrLmxnJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBfdGhpcy5nb1RvTmV4dFNsaWRlKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBQbHVnaW4ucHJvdG90eXBlLmFycm93RGlzYWJsZSA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cbiAgICAgICAgLy8gRGlzYWJsZSBhcnJvd3MgaWYgcy5oaWRlQ29udHJvbE9uRW5kIGlzIHRydWVcbiAgICAgICAgaWYgKCF0aGlzLnMubG9vcCAmJiB0aGlzLnMuaGlkZUNvbnRyb2xPbkVuZCkge1xuICAgICAgICAgICAgaWYgKChpbmRleCArIDEpIDwgdGhpcy4kc2xpZGUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kb3V0ZXIuZmluZCgnLmxnLW5leHQnKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRvdXRlci5maW5kKCcubGctbmV4dCcpLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJykuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRvdXRlci5maW5kKCcubGctcHJldicpLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJykucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuJG91dGVyLmZpbmQoJy5sZy1wcmV2JykuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBQbHVnaW4ucHJvdG90eXBlLnNldFRyYW5zbGF0ZSA9IGZ1bmN0aW9uKCRlbCwgeFZhbHVlLCB5VmFsdWUpIHtcbiAgICAgICAgLy8galF1ZXJ5IHN1cHBvcnRzIEF1dG9tYXRpYyBDU1MgcHJlZml4aW5nIHNpbmNlIGpRdWVyeSAxLjguMFxuICAgICAgICBpZiAodGhpcy5zLnVzZUxlZnQpIHtcbiAgICAgICAgICAgICRlbC5jc3MoJ2xlZnQnLCB4VmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGVsLmNzcyh7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoJyArICh4VmFsdWUpICsgJ3B4LCAnICsgeVZhbHVlICsgJ3B4LCAwcHgpJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgUGx1Z2luLnByb3RvdHlwZS50b3VjaE1vdmUgPSBmdW5jdGlvbihzdGFydENvb3JkcywgZW5kQ29vcmRzKSB7XG5cbiAgICAgICAgdmFyIGRpc3RhbmNlID0gZW5kQ29vcmRzIC0gc3RhcnRDb29yZHM7XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKGRpc3RhbmNlKSA+IDE1KSB7XG4gICAgICAgICAgICAvLyByZXNldCBvcGFjaXR5IGFuZCB0cmFuc2l0aW9uIGR1cmF0aW9uXG4gICAgICAgICAgICB0aGlzLiRvdXRlci5hZGRDbGFzcygnbGctZHJhZ2dpbmcnKTtcblxuICAgICAgICAgICAgLy8gbW92ZSBjdXJyZW50IHNsaWRlXG4gICAgICAgICAgICB0aGlzLnNldFRyYW5zbGF0ZSh0aGlzLiRzbGlkZS5lcSh0aGlzLmluZGV4KSwgZGlzdGFuY2UsIDApO1xuXG4gICAgICAgICAgICAvLyBtb3ZlIG5leHQgYW5kIHByZXYgc2xpZGUgd2l0aCBjdXJyZW50IHNsaWRlXG4gICAgICAgICAgICB0aGlzLnNldFRyYW5zbGF0ZSgkKCcubGctcHJldi1zbGlkZScpLCAtdGhpcy4kc2xpZGUuZXEodGhpcy5pbmRleCkud2lkdGgoKSArIGRpc3RhbmNlLCAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0VHJhbnNsYXRlKCQoJy5sZy1uZXh0LXNsaWRlJyksIHRoaXMuJHNsaWRlLmVxKHRoaXMuaW5kZXgpLndpZHRoKCkgKyBkaXN0YW5jZSwgMCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgUGx1Z2luLnByb3RvdHlwZS50b3VjaEVuZCA9IGZ1bmN0aW9uKGRpc3RhbmNlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgLy8ga2VlcCBzbGlkZSBhbmltYXRpb24gZm9yIGFueSBtb2RlIHdoaWxlIGRyYWdnL3N3aXBlXG4gICAgICAgIGlmIChfdGhpcy5zLm1vZGUgIT09ICdsZy1zbGlkZScpIHtcbiAgICAgICAgICAgIF90aGlzLiRvdXRlci5hZGRDbGFzcygnbGctc2xpZGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJHNsaWRlLm5vdCgnLmxnLWN1cnJlbnQsIC5sZy1wcmV2LXNsaWRlLCAubGctbmV4dC1zbGlkZScpLmNzcygnb3BhY2l0eScsICcwJyk7XG5cbiAgICAgICAgLy8gc2V0IHRyYW5zaXRpb24gZHVyYXRpb25cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIF90aGlzLiRvdXRlci5yZW1vdmVDbGFzcygnbGctZHJhZ2dpbmcnKTtcbiAgICAgICAgICAgIGlmICgoZGlzdGFuY2UgPCAwKSAmJiAoTWF0aC5hYnMoZGlzdGFuY2UpID4gX3RoaXMucy5zd2lwZVRocmVzaG9sZCkpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5nb1RvTmV4dFNsaWRlKHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgoZGlzdGFuY2UgPiAwKSAmJiAoTWF0aC5hYnMoZGlzdGFuY2UpID4gX3RoaXMucy5zd2lwZVRocmVzaG9sZCkpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5nb1RvUHJldlNsaWRlKHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChNYXRoLmFicyhkaXN0YW5jZSkgPCA1KSB7XG5cbiAgICAgICAgICAgICAgICAvLyBUcmlnZ2VyIGNsaWNrIGlmIGRpc3RhbmNlIGlzIGxlc3MgdGhhbiA1IHBpeFxuICAgICAgICAgICAgICAgIF90aGlzLiRlbC50cmlnZ2VyKCdvblNsaWRlQ2xpY2subGcnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX3RoaXMuJHNsaWRlLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHJlbW92ZSBzbGlkZSBjbGFzcyBvbmNlIGRyYWcvc3dpcGUgaXMgY29tcGxldGVkIGlmIG1vZGUgaXMgbm90IHNsaWRlXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoIV90aGlzLiRvdXRlci5oYXNDbGFzcygnbGctZHJhZ2dpbmcnKSAmJiBfdGhpcy5zLm1vZGUgIT09ICdsZy1zbGlkZScpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy4kb3V0ZXIucmVtb3ZlQ2xhc3MoJ2xnLXNsaWRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIF90aGlzLnMuc3BlZWQgKyAxMDApO1xuXG4gICAgfTtcblxuICAgIFBsdWdpbi5wcm90b3R5cGUuZW5hYmxlU3dpcGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHN0YXJ0Q29vcmRzID0gMDtcbiAgICAgICAgdmFyIGVuZENvb3JkcyA9IDA7XG4gICAgICAgIHZhciBpc01vdmVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKF90aGlzLnMuZW5hYmxlU3dpcGUgJiYgX3RoaXMuZG9Dc3MoKSkge1xuXG4gICAgICAgICAgICBfdGhpcy4kc2xpZGUub24oJ3RvdWNoc3RhcnQubGcnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFfdGhpcy4kb3V0ZXIuaGFzQ2xhc3MoJ2xnLXpvb21lZCcpICYmICFfdGhpcy5sZ0J1c3kpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5tYW5hZ2VTd2lwZUNsYXNzKCk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0Q29vcmRzID0gZS5vcmlnaW5hbEV2ZW50LnRhcmdldFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIF90aGlzLiRzbGlkZS5vbigndG91Y2htb3ZlLmxnJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGlmICghX3RoaXMuJG91dGVyLmhhc0NsYXNzKCdsZy16b29tZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGVuZENvb3JkcyA9IGUub3JpZ2luYWxFdmVudC50YXJnZXRUb3VjaGVzWzBdLnBhZ2VYO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy50b3VjaE1vdmUoc3RhcnRDb29yZHMsIGVuZENvb3Jkcyk7XG4gICAgICAgICAgICAgICAgICAgIGlzTW92ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBfdGhpcy4kc2xpZGUub24oJ3RvdWNoZW5kLmxnJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFfdGhpcy4kb3V0ZXIuaGFzQ2xhc3MoJ2xnLXpvb21lZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc01vdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc01vdmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy50b3VjaEVuZChlbmRDb29yZHMgLSBzdGFydENvb3Jkcyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy4kZWwudHJpZ2dlcignb25TbGlkZUNsaWNrLmxnJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFBsdWdpbi5wcm90b3R5cGUuZW5hYmxlRHJhZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgc3RhcnRDb29yZHMgPSAwO1xuICAgICAgICB2YXIgZW5kQ29vcmRzID0gMDtcbiAgICAgICAgdmFyIGlzRHJhZ2luZyA9IGZhbHNlO1xuICAgICAgICB2YXIgaXNNb3ZlZCA9IGZhbHNlO1xuICAgICAgICBpZiAoX3RoaXMucy5lbmFibGVEcmFnICYmIF90aGlzLmRvQ3NzKCkpIHtcbiAgICAgICAgICAgIF90aGlzLiRzbGlkZS5vbignbW91c2Vkb3duLmxnJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGlmICghX3RoaXMuJG91dGVyLmhhc0NsYXNzKCdsZy16b29tZWQnKSAmJiAhX3RoaXMubGdCdXN5ICYmICEkKGUudGFyZ2V0KS50ZXh0KCkudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubWFuYWdlU3dpcGVDbGFzcygpO1xuICAgICAgICAgICAgICAgICAgICBzdGFydENvb3JkcyA9IGUucGFnZVg7XG4gICAgICAgICAgICAgICAgICAgIGlzRHJhZ2luZyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gKiogRml4IGZvciB3ZWJraXQgY3Vyc29yIGlzc3VlIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0yNjcyM1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy4kb3V0ZXIuc2Nyb2xsTGVmdCArPSAxO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy4kb3V0ZXIuc2Nyb2xsTGVmdCAtPSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICpcblxuICAgICAgICAgICAgICAgICAgICBfdGhpcy4kb3V0ZXIucmVtb3ZlQ2xhc3MoJ2xnLWdyYWInKS5hZGRDbGFzcygnbGctZ3JhYmJpbmcnKTtcblxuICAgICAgICAgICAgICAgICAgICBfdGhpcy4kZWwudHJpZ2dlcignb25EcmFnc3RhcnQubGcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCh3aW5kb3cpLm9uKCdtb3VzZW1vdmUubGcnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzRHJhZ2luZykge1xuICAgICAgICAgICAgICAgICAgICBpc01vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZW5kQ29vcmRzID0gZS5wYWdlWDtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudG91Y2hNb3ZlKHN0YXJ0Q29vcmRzLCBlbmRDb29yZHMpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy4kZWwudHJpZ2dlcignb25EcmFnbW92ZS5sZycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKHdpbmRvdykub24oJ21vdXNldXAubGcnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzTW92ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNNb3ZlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy50b3VjaEVuZChlbmRDb29yZHMgLSBzdGFydENvb3Jkcyk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLiRlbC50cmlnZ2VyKCdvbkRyYWdlbmQubGcnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKCdsZy1vYmplY3QnKSB8fCAkKGUudGFyZ2V0KS5oYXNDbGFzcygnbGctdmlkZW8tcGxheScpKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLiRlbC50cmlnZ2VyKCdvblNsaWRlQ2xpY2subGcnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBQcmV2ZW50IGV4ZWN1dGlvbiBvbiBjbGlja1xuICAgICAgICAgICAgICAgIGlmIChpc0RyYWdpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNEcmFnaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLiRvdXRlci5yZW1vdmVDbGFzcygnbGctZ3JhYmJpbmcnKS5hZGRDbGFzcygnbGctZ3JhYicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgUGx1Z2luLnByb3RvdHlwZS5tYW5hZ2VTd2lwZUNsYXNzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfdG91Y2hOZXh0ID0gdGhpcy5pbmRleCArIDE7XG4gICAgICAgIHZhciBfdG91Y2hQcmV2ID0gdGhpcy5pbmRleCAtIDE7XG4gICAgICAgIGlmICh0aGlzLnMubG9vcCAmJiB0aGlzLiRzbGlkZS5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIF90b3VjaFByZXYgPSB0aGlzLiRzbGlkZS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmluZGV4ID09PSB0aGlzLiRzbGlkZS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgX3RvdWNoTmV4dCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRzbGlkZS5yZW1vdmVDbGFzcygnbGctbmV4dC1zbGlkZSBsZy1wcmV2LXNsaWRlJyk7XG4gICAgICAgIGlmIChfdG91Y2hQcmV2ID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuJHNsaWRlLmVxKF90b3VjaFByZXYpLmFkZENsYXNzKCdsZy1wcmV2LXNsaWRlJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRzbGlkZS5lcShfdG91Y2hOZXh0KS5hZGRDbGFzcygnbGctbmV4dC1zbGlkZScpO1xuICAgIH07XG5cbiAgICBQbHVnaW4ucHJvdG90eXBlLm1vdXNld2hlZWwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgX3RoaXMuJG91dGVyLm9uKCdtb3VzZXdoZWVsLmxnJywgZnVuY3Rpb24oZSkge1xuXG4gICAgICAgICAgICBpZiAoIWUuZGVsdGFZKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZS5kZWx0YVkgPiAwKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZ29Ub1ByZXZTbGlkZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5nb1RvTmV4dFNsaWRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgUGx1Z2luLnByb3RvdHlwZS5jbG9zZUdhbGxlcnkgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgbW91c2Vkb3duID0gZmFsc2U7XG4gICAgICAgIHRoaXMuJG91dGVyLmZpbmQoJy5sZy1jbG9zZScpLm9uKCdjbGljay5sZycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgX3RoaXMuZGVzdHJveSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoX3RoaXMucy5jbG9zYWJsZSkge1xuXG4gICAgICAgICAgICAvLyBJZiB5b3UgZHJhZyB0aGUgc2xpZGUgYW5kIHJlbGVhc2Ugb3V0c2lkZSBnYWxsZXJ5IGdldHMgY2xvc2Ugb24gY2hyb21lXG4gICAgICAgICAgICAvLyBmb3IgcHJldmVudGluZyB0aGlzIGNoZWNrIG1vdXNlZG93biBhbmQgbW91c2V1cCBoYXBwZW5lZCBvbiAubGctaXRlbSBvciBsZy1vdXRlclxuICAgICAgICAgICAgX3RoaXMuJG91dGVyLm9uKCdtb3VzZWRvd24ubGcnLCBmdW5jdGlvbihlKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoJChlLnRhcmdldCkuaXMoJy5sZy1vdXRlcicpIHx8ICQoZS50YXJnZXQpLmlzKCcubGctaXRlbSAnKSB8fCAkKGUudGFyZ2V0KS5pcygnLmxnLWltZy13cmFwJykpIHtcbiAgICAgICAgICAgICAgICAgICAgbW91c2Vkb3duID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtb3VzZWRvd24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBfdGhpcy4kb3V0ZXIub24oJ21vdXNlbW92ZS5sZycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIG1vdXNlZG93biA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIF90aGlzLiRvdXRlci5vbignbW91c2V1cC5sZycsIGZ1bmN0aW9uKGUpIHtcblxuICAgICAgICAgICAgICAgIGlmICgkKGUudGFyZ2V0KS5pcygnLmxnLW91dGVyJykgfHwgJChlLnRhcmdldCkuaXMoJy5sZy1pdGVtICcpIHx8ICQoZS50YXJnZXQpLmlzKCcubGctaW1nLXdyYXAnKSAmJiBtb3VzZWRvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfdGhpcy4kb3V0ZXIuaGFzQ2xhc3MoJ2xnLWRyYWdnaW5nJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFBsdWdpbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKGQpIHtcblxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIGlmICghZCkge1xuICAgICAgICAgICAgX3RoaXMuJGVsLnRyaWdnZXIoJ29uQmVmb3JlQ2xvc2UubGcnKTtcbiAgICAgICAgICAgICQod2luZG93KS5zY3JvbGxUb3AoX3RoaXMucHJldlNjcm9sbFRvcCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBpZiBkIGlzIGZhbHNlIG9yIHVuZGVmaW5lZCBkZXN0cm95IHdpbGwgb25seSBjbG9zZSB0aGUgZ2FsbGVyeVxuICAgICAgICAgKiBwbHVnaW5zIGluc3RhbmNlIHJlbWFpbnMgd2l0aCB0aGUgZWxlbWVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBpZiBkIGlzIHRydWUgZGVzdHJveSB3aWxsIGNvbXBsZXRlbHkgcmVtb3ZlIHRoZSBwbHVnaW5cbiAgICAgICAgICovXG5cbiAgICAgICAgaWYgKGQpIHtcbiAgICAgICAgICAgIGlmICghX3RoaXMucy5keW5hbWljKSB7XG4gICAgICAgICAgICAgICAgLy8gb25seSB3aGVuIG5vdCB1c2luZyBkeW5hbWljIG1vZGUgaXMgJGl0ZW1zIGEganF1ZXJ5IGNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgICB0aGlzLiRpdGVtcy5vZmYoJ2NsaWNrLmxnIGNsaWNrLmxnY3VzdG9tJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQucmVtb3ZlRGF0YShfdGhpcy5lbCwgJ2xpZ2h0R2FsbGVyeScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVW5iaW5kIGFsbCBldmVudHMgYWRkZWQgYnkgbGlnaHRHYWxsZXJ5XG4gICAgICAgIHRoaXMuJGVsLm9mZignLmxnLnRtJyk7XG5cbiAgICAgICAgLy8gRGlzdHJveSBhbGwgbGlnaHRHYWxsZXJ5IG1vZHVsZXNcbiAgICAgICAgJC5lYWNoKCQuZm4ubGlnaHRHYWxsZXJ5Lm1vZHVsZXMsIGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgaWYgKF90aGlzLm1vZHVsZXNba2V5XSkge1xuICAgICAgICAgICAgICAgIF90aGlzLm1vZHVsZXNba2V5XS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubEdhbGxlcnlPbiA9IGZhbHNlO1xuXG4gICAgICAgIGNsZWFyVGltZW91dChfdGhpcy5oaWRlQmFydGltZW91dCk7XG4gICAgICAgIHRoaXMuaGlkZUJhcnRpbWVvdXQgPSBmYWxzZTtcbiAgICAgICAgJCh3aW5kb3cpLm9mZignLmxnJyk7XG4gICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbGctb24gbGctZnJvbS1oYXNoJyk7XG5cbiAgICAgICAgaWYgKF90aGlzLiRvdXRlcikge1xuICAgICAgICAgICAgX3RoaXMuJG91dGVyLnJlbW92ZUNsYXNzKCdsZy12aXNpYmxlJyk7XG4gICAgICAgIH1cblxuICAgICAgICAkKCcubGctYmFja2Ryb3AnKS5yZW1vdmVDbGFzcygnaW4nKTtcblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLiRvdXRlcikge1xuICAgICAgICAgICAgICAgIF90aGlzLiRvdXRlci5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJCgnLmxnLWJhY2tkcm9wJykucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIGlmICghZCkge1xuICAgICAgICAgICAgICAgIF90aGlzLiRlbC50cmlnZ2VyKCdvbkNsb3NlQWZ0ZXIubGcnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LCBfdGhpcy5zLmJhY2tkcm9wRHVyYXRpb24gKyA1MCk7XG4gICAgfTtcblxuICAgICQuZm4ubGlnaHRHYWxsZXJ5ID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCEkLmRhdGEodGhpcywgJ2xpZ2h0R2FsbGVyeScpKSB7XG4gICAgICAgICAgICAgICAgJC5kYXRhKHRoaXMsICdsaWdodEdhbGxlcnknLCBuZXcgUGx1Z2luKHRoaXMsIG9wdGlvbnMpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5kYXRhKCdsaWdodEdhbGxlcnknKS5pbml0KCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2xpZ2h0R2FsbGVyeSBoYXMgbm90IGluaXRpYXRlZCBwcm9wZXJseScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgICQuZm4ubGlnaHRHYWxsZXJ5Lm1vZHVsZXMgPSB7fTtcblxufSkoKTtcblxuXG59KSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5qUXVlcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==