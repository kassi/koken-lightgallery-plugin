require('lightgallery');
import './lg-info.css';
import './font/photography.css';

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

    if (exif['date_time_original']['clean'] === undefined) {
      var dto = exif['date_time_original']['raw'].replace(':', '-').replace(':', '-');
      exif['date_time_original']['clean'] = new Date(dto).toLocaleString();
    }

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
