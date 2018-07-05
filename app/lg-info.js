require('lightgallery');
import './lg-info.css';
import './font/flaticon.css';

(function ($, window, document, undefined) {
  'use strict';

  var defaults = {
    info: true,
    showInfoByDefault: false
  };
  var $infoButton;

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

    $infoButton = $('<span id="lg-info" class="lg-icon"></span>');
    $infoButton.on('click.lg', this.toggleState.bind(this));
    this.core.$outer.find('.lg-toolbar').append($infoButton);

    var state;
    if (this.core.s.showInfoByDefault) {
      state = 'desc';
    } else {
      state = 'image';
    }
    this.setState(state);
  };

  Info.prototype.setState = function (state) {
    $infoButton.removeClass('lg-info-state-desc lg-info-state-image');
    $infoButton.addClass('lg-info-state-' + state);
    this.showInfo(state);
  };

  Info.prototype.getState = function () {
    var match = $infoButton.attr('class').match(/\blg-info-state-(\w+)/);
    return match[1];
  };

  Info.prototype.showInfo = function (state) {
    switch (state) {
      case 'desc':
        $('.lg-sub-html').show();
        break;
      case 'image':
        $('.lg-sub-html').hide();
        break;
    }
  };

  Info.prototype.toggleState = function () {
    var currentState = this.getState(),
      newState = '';

    switch (currentState) {
      case 'image':
        newState = 'desc';
        break;
      case 'desc':
        newState = 'image';
        break;
    }
    this.setState(newState);
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
