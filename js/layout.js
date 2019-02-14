

// Slide modal
$('.xzoom-carousel').owlCarousel({
  loop:false,
  autoplay: false,
  dots: false,
  margin:10,
  nav: true,
  items: 4,
  navText: [
    "<i class='fa fa-angle-left' aria-hidden='true'></i>",
    "<i class='fa fa-angle-right' aria-hidden='true'></i>" 
  ],
});


// XZOOM
$(".xzoom, .xzoom-gallery").xzoom({tint: '#333', Xoffset: 15});
$('.main-image').bind('click', function () {
  var xzoom = $(this).data('xzoom');
  xzoom.closezoom();
  var gallery = xzoom.gallery().cgallery;
  var i, images = new Array();
  for (i in gallery) {
    images[i] = {
      src: gallery[i]
    };
  }
  $.magnificPopup.open({
    items: images,
    type: 'image',
    gallery: {
      enabled: true
    }
  });
  event.preventDefault();
});




$('document').ready(function () {
  // ACTIVE MENU
  let url = window.location.href;
  $(".main-menu a").each( function () {
    if (url == (this.href)) {
      $(this).closest("li a").addClass("active");
      $(this).closest("li li a").removeClass("active");
    }
  });
  // END ACTIVE MENU

  $('.menu .nav').slideAndSwipe();

  let ww = document.body.clientWidth;
    
  $('.menu .nav li').click(() => {
    let $ul = $(this).find('.menu-bottom');
    $ul
      .css('display', 'block')
      .toggleClass('in out')
  });

  $('.nav-close').click(() => {
    $('.menu .nav')
      .css('transform', ' translate(-300px, 0px)')
      .removeClass('ssm-nav-visible');

    $('.ssm-overlay').css('display', 'none');
    $('html').removeClass('is-navOpen');
  });

  $('.category ul li').hover(function() {
    let ulChild = $(this).find('ul');
    $(ulChild).toggleClass('ul-out')
  });

  $('.view-more').click(function() {
    $('.category ul').addClass('ul-more')
    $(this).addClass('d-none')
    $('.view-less').removeClass('d-none');
  });

  $('.view-less').click(function() {
    $('.category ul').removeClass('ul-more')
    $(this).addClass('d-none')
    $('.view-more').removeClass('d-none');
  });

  if (ww < 992) {
    $('.footer-bottom .collapse').removeClass('show');
  }

  if (ww > 992) {
    $(window).scroll(() => {
      if ($(this).scrollTop() > 170) {
        $('.menu').addClass('menu-down slideInDown');
        
      } else {
        $('.menu').removeClass('menu-down slideInDown');
      }
    });
  } 

  // GO TOP
  $(window).scroll( function () {
    if ($(this).scrollTop() > 400) {
      $('.go-top')
        .fadeIn()
        .css('transform','translateY(0)');
    } else {
      $('.go-top')
        .fadeOut()
        .css('transform','translateY(100px)');
    }
  });

  $('.go-top').click(() => {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });

  // CATEGORY LEFT
  $('.list-cate-title').on('click', function () {
    $('.list-cate-title').removeClass('active');
    $(this).addClass('active');
  });

  // XZOOM SETTING
  $(".xzoom, .xzoom-gallery").xzoom({
    tint: '#333',
    Xoffset: 15
  });

  $('.main-image').bind('click', function ()  {
    var xzoom = $(this).data('xzoom');
    xzoom.closezoom();
    var gallery = xzoom.gallery().cgallery;
    var i, images = new Array();
    for (i in gallery) {
      images[i] = {
        src: gallery[i]
      };
    }
    $.magnificPopup.open({
      items: images,
      type: 'image',
      gallery: {
        enabled: true
      }
    });
    event.preventDefault();
  });

  // SETTING CART FORM
  $('.cart-btn, .cart-btn-mobile').click(() => {
    $('.overlay').addClass('overlay-in');
    $('.cart').toggleClass('cart-out');
  });
  
  $('.overlay, .cart-close').click(function () {
    $('.overlay').removeClass('overlay-in');
    $('.cart').removeClass('cart-out');
  });

  $('.search-btn').click(() => {
    $('.header-bottom').toggleClass('header-bottom-out')
  });

  // NOTIFICATION ADD TO CART + WISHLIST
  $('.custom-cart').click(() => {
    Swal({
      title: 'Thông báo',
      type: 'success',
      html: 'Bạn đã thêm vào giỏ thành công',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<a href="gio-hang.html">Vào giỏ hàng</a>',
      cancelButtonText:
        'Tiếp tục mua sắm',
    })
  });

  // SETTING MODAL OPACITY XZOOM
  $('.modal-footer button , .modal-header button , .modal').click(() => {
    $('.xzoom-preview , .xzoom-source').css('opacity', '0')
  });

  $(".box-product-cart-detail-quantity button").on("click", function() {

    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
  
    if ($button.text() == "+") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
     // Don't allow decrementing below zero
      if (oldValue > 1) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 1;
      }
    }
  
    $button.parent().find("input").val(newVal);
  
  });
  
});
