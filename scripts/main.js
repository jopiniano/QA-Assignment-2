$('.news-container').flickity({
  cellAlign: 'center',
  contain: true,
  prevNextButtons: false,
  watchCSS: true,
});

jQuery(function($){

  // init Masonry
  var $grid = $('.grid').masonry({
    // options...
    columnWidth: 80,
    itemSelector: '.grid-item'
  });
  // layout Masonry after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
  });

});


//NAVIGATION 

const targetElement = document.querySelector('.gn');
bodyScrollLock.disableBodyScroll(targetElement);
bodyScrollLock.enableBodyScroll(targetElement);

$('.gn-trigger').on('click', function(e) {
    e.preventDefault();
    if($(this).hasClass('is-active')) {
        $(this).removeClass('is-active');
        $('.gn').slideUp();
        bodyScrollLock.enableBodyScroll(targetElement);
    } else {
        $(this).addClass('is-active');
        $('.gn').slideDown();
        bodyScrollLock.disableBodyScroll(targetElement);
    }
});

$( function() {
    $( "#accordion" ).accordion({
      collapsible: true
    });
  } );

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});