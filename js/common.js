$(document).ready(function () {
  $('.release-wrap').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: true
 
  });
  $('.blog-wrap-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: true
 
  });
  if ($(window).width() < 768) {
    $('.ethaps-wrap-center').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: false,
      arrows: true
    });

  }
  if ($(window).width() > 768) {
    $(window).bind('scroll', function() { 
      var top = $(document).scrollTop();
      if (top > 70) {
        $('.header-main').addClass('main-active');
        $('.toggle-mob').addClass('tog-active');
       }
      else {
        $('.header-main').removeClass('main-active');
        $('.toggle-mob').removeClass('tog-active');
       }
    });
  } else {
    $('.toggle-mob').on('click', () => {
      $('.toggle-mob').toggleClass('toggle-mob-active');
      $('#mob-menu').slideToggle(500);
    });
    $('#mob-menu ul li a').on('click', (e) => {
      $('.toggle-mob').toggleClass('toggle-mob-active');
      $('#mob-menu').slideToggle(500);
    });
    

    $(window).bind('scroll', function() { 
      var top = $(document).scrollTop();
      if (top > 70) {
        $('.toggle-mob').addClass('tog-active');
       }
      else {
        $('.toggle-mob').removeClass('tog-active');
       }
    });
  }
  


  

  const overlay = document.querySelector('.overlay'),
        popupPdf = document.querySelector('.popup-pdf'),
        check = document.querySelectorAll('#privat'),
        button = document.querySelectorAll('#privat');
  
  const checkActive = () => {

  };
  checkActive();

  $('.pdf').on('click', (event) => {
    event.preventDefault();
    overlay.style.display = 'flex';
    popupPdf.style.display = 'flex';
    setTimeout(() => {
      $(overlay).addClass('overlay-active');
      $(popupPdf).addClass('popup-active');
    }, 100);
  });


  $(overlay).on('click', () => {
    $(overlay).removeClass('overlay-active');
    $(popupPdf).removeClass('popup-active');
    setTimeout(() => {
      overlay.style.display = 'none';
      popupPdf.style.display = 'none';
    }, 800);
  });


  $('.close').on('click', () => {
    $(overlay).removeClass('overlay-active');
    $(popupPdf).removeClass('popup-active');
    setTimeout(() => {
      overlay.style.display = 'none';
      popupPdf.style.display = 'none';
    }, 800);
  });
  
  const featPopup1 = document.querySelectorAll('.features-popup');
  featPopup1.forEach((elem) => {
    elem.addEventListener('click', (event) => {
      let target = event.target;
      if (target.classList.contains('features-popup')) {
        $('.features-popup').removeClass('features-popup-active');
      }
    });
  });
 
  
});