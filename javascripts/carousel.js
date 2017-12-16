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
    if (currentIndex === lastIndex) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }

    updateState(currentIndex);
  }

  function showQuote(event) {
    if ($(event.target).hasClass('quote')) {
      var target = $(event.target);
    } else {
      var target = $(event.target).parent();
    }

    var index = $('.quote').index(target);
    updateState(index);
  }

  function updateState(index) {
    prevIndex = index === 0 ? lastIndex : index - 1;
    currentIndex = index;
    nextIndex = index === lastIndex ? 0 : index + 1;

    updateCarouselPosition();
    setLeftClass();
    updatePips();
  }

  function updateCarouselPosition() {
    $('#quotes-carousel').find('.previous').removeClass('previous');
    $('#quotes-carousel').find('.current').removeClass('current');
    $('#quotes-carousel').find('.next').removeClass('next');

    var allQuotes = $('#quotes-carousel').find('.quote');
    $(allQuotes[prevIndex]).addClass('previous');
    $(allQuotes[currentIndex]).addClass('current');
    $(allQuotes[nextIndex]).addClass('next');
  }

  function generatePips() {
    var listContainer = $('#quotes-carousel-pips').find('ul');

    for (var i = lastIndex; i>=0; i--) {
      var newPip = $('<li class="pip"></li>');
      $(listContainer).append(newPip);
    }

    updatePips();
  }

  function updatePips() {

  }

  function showFromPip() {

  }

  function setLeftClass() {

  }
});

