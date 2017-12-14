$(function() {
  var prevIndex = 0;
  var currentIndex = 1;
  var nextIndex = 2;
  var lastIndex = $('#quotes-carousel').find('.quote').length - 1;

  $('#quotes-carousel').on('click', '.previous', showQuote);
  $('#quotes-carousel').on('click', '.next', showQuote);
  $('#quotes-carousel-pips').on('click', '.pip', showFromPip);

  generatePips();

  var carouselRunning = true;
  var interval = setInterval(function() {
    if (carouselRunning) {
      showNextQuote();
    }
  }, 4000);

  function showNextQuote() {

  }

  function showQuote() {

  }

  function updateState(index) {

  }

  function updateCarouselPosition() {

  }

  function generatePips() {

  }

  function updatePips() {

  }

  function showFromPip() {

  }

  function setLeftClass() {

  }
});

