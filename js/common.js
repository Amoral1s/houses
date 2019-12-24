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


  $(window).bind('scroll', function() { 
    var top = $(document).scrollTop();
    if (top > 70) {
      $('.header-main').addClass('main-active');
     }
    else {
      $('.header-main').removeClass('main-active');
      
     }
    
  });

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
  $('.feat-toggle-1').on('click', (e) => {
    e.preventDefault();
    $('.feat-1').addClass('features-popup-active');
  });
  $('.feat-toggle-2').on('click', (e) => {
    e.preventDefault();
    $('.feat-2').addClass('features-popup-active');
  });
  $('.feat-toggle-3').on('click', (e) => {
    e.preventDefault();
    $('.feat-3').addClass('features-popup-active');
  });
  $('.feat-toggle-4').on('click', (e) => {
    e.preventDefault();
    $('.feat-4').addClass('features-popup-active');
  });
  $('.feat-toggle-5').on('click', (e) => {
    e.preventDefault();
    $('.feat-5').addClass('features-popup-active');
  });
  $('.feat-toggle-6').on('click', (e) => {
    e.preventDefault();
    $('.feat-6').addClass('features-popup-active');
  });
  $('.close-feat').on('click', (e) => {
    e.preventDefault();
    $('.features-popup').removeClass('features-popup-active');
  });
  $('.close-feat').on('click', (e) => {
    e.preventDefault();
    $('.features-popup').removeClass('features-popup-active');
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