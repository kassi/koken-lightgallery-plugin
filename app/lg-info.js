require('lightgallery');
import './lg-info.css';
import './font/photography.css';
import * as L from 'leaflet';
// Hack to fix the leaflet not exposing all of the required images
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

require('leaflet-providers');
require('leaflet-semicircle');
const geomagnetism = require('geomagnetism');

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
      'filters',
      'date_time_original',
      'file_name',
      'geolocation',
      'artist',
      'copyright',
      'keywords'
    ]
  };
  var exifTitles = {
    aperture: 'Aperture',
    artist: 'Photographer',
    copyright: 'Copyright',
    date_time_original: 'Date Taken',
    direction: 'Direction of Shot',
    exposure: 'Exposure Time',
    file_name: 'File Name',
    filters: 'Filter',
    flash: 'Flash',
    focal_length: 'Focal Length',
    geolocation: 'Location Taken',
    iso_speed_ratings: 'ISO',
    keywords: 'Tags',
    lens: 'Lens',
    metering_mode: 'Metering Mode',
    model: 'Camera Model',
    size: 'Image Size'
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
      gloc = this.core.s.dynamicEl[index].geolocation,
      iptc = this.core.s.dynamicEl[index].iptc,
      keywords = this.keywordArray(iptc);
    var html = '<table><caption>Image Spec</caption>';

    if (exif) {
      if (exif['date_time_original']['clean'] === undefined) {
        var dto = exif['date_time_original']['raw'].replace(':', '-').replace(':', '-');
        exif['date_time_original']['clean'] = new Date(dto).toLocaleString();
      }
      for (var i = 0; i < this.core.s.exifFields.length; i++) {
        var field = this.core.s.exifFields[i];

        if (field === 'filters') {
          var filter = $.map($.grep(keywords, function (elem) { return elem.match(/^Filter: (.+)/); }), function (elem) {
            return elem.match(/^Filter: (.+)/)[1];
          });
          if (filter.length > 0) {
            html += '<tr><th>' +
              '<span class="lg-icon lg-info-exif-html-' + field + '" title="' + (exifTitles[field] || field) + '"></span>' +
        '</th><td>' +
              this.arrayAsBrList(filter) +
              '</td></tr>';
          }
        } else if (field === 'geolocation') {
          if (gloc) {
            html += this.geolocationHtml(gloc, field);
          }
        } else if (field === 'keywords') {
          if (keywords.length > 0) {
            html += '<tr><th>' +
              '<span class="lg-icon lg-info-exif-html-' + field + '" title="' + (exifTitles[field] || field) + '"></span>' +
              '</th><td>' +
              this.arrayAsBrList($.grep(keywords, function (elem) { return !elem.match(/^Filter: /); })) +
              '</td></tr>';
          }
        } else if (exif[field]) {
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
    $('.lg-info-exif-geolocation').on('click', this.toggleGeolocationMap.bind(this, index));
  };

  Info.prototype.geolocationHtml = function (gloc, field) {
    var lat = parseFloat(gloc['latitude']);
    var lon = parseFloat(gloc['longitude']);
    var dir = '';
    if (gloc['direction']) {
      dir = ', ' + gloc['direction'].clean;
    }
    var html = '<tr><th>' +
      '<span class="lg-icon lg-info-exif-html-' + field + '" title="' + (exifTitles[field] || field) + '"></span>' +
      '</th><td>' +
      '<span class="lg-info-exif-geolocation">' +
      lat.toFixed(5) + ', ' + lon.toFixed(5) + dir +
      '</span></td></tr>' +
      '<tr class="lg-info-exif-geolocation-map"><th></th><td>' +
      '<div id="lg-info-exif-geolocation-map"></div>' +
      '</td></tr>';
    return html;
  };

  Info.prototype.keywordsHtml = function (iptc, field) {
    var keywords = iptc['keywords'];
  };

  Info.prototype.keywordArray = function (iptc) {
    var result = [];
    if (iptc && iptc['keywords']) {
      var keywords = iptc['keywords'];
      if (typeof keywords === 'string') {
        result = [keywords];
      } else {
        result = keywords;
      }
    }
    return result;
  };

  Info.prototype.arrayAsBrList = function (list) {
    var result = '';
    for (var i = 0; i < list.length; i++) {
      if (i > 0) { result += '<br>'; }
      result += list[i];
    }
    return result;
  };

  Info.prototype.toggleGeolocationMap = function (index, event) {
    var row = $('.lg-info-exif-geolocation-map');
    row.toggle();
    if (row.is(':visible')) {
      var gloc = this.core.s.dynamicEl[index].geolocation;
      if (gloc.map === undefined) {
        this.initializeMap('lg-info-exif-geolocation-map', gloc, this.core.s.dynamicEl[index].exif);
      }
    }
  };

  Info.prototype.initializeMap = function (mapid, loc, exif) {
    var lat = parseFloat(loc['latitude']);
    var lon = parseFloat(loc['longitude']);
    loc.map = L.map('lg-info-exif-geolocation-map', {
      zoomControl: false
    });
    loc.map.setView([lat, lon], 16);
    L.tileLayer.provider('OpenStreetMap.DE').addTo(loc.map);
    if (loc.direction) {
      var fov = exif['fov'] ? exif['fov']['raw'] : 90;
      var dir = this.getTrueNorthDirection(loc);
      L.semiCircle([lat, lon], {radius: 125})
        .setDirection(dir, fov)
        .addTo(loc.map);
    } else {
      L.marker([lat, lon]).addTo(loc.map);
    }
  };

  Info.prototype.getTrueNorthDirection = function (loc) {
    switch (loc.direction.computed_ref) {
      case 'TN':
        return loc.direction.computed;
        break;
      case 'MN':
        var dt = new Date(loc.datetime);
        var model = geomagnetism.model(dt);
        var info = model.point([loc.latitude, loc.longitude]);
        return loc.direction.computed + info.decl;
        break;
      default:
        return null;
        break;
    }
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
