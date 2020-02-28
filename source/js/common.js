(function () {
  var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
  });

  var selectStandardList = $('.select-standard__list');

  $(document).ready(function() {
    selectStandardList.mCustomScrollbar({theme:"dark"});
  });
})();
