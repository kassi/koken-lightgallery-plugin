require('lightgallery');
require('lg-fullscreen');
require('lg-thumbnail');
require('lg-zoom');
import './styles.css';

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
