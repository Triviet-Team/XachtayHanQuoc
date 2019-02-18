$('.product5-carousel').owlCarousel({
  loop: false,
  dots: false,
  nav: true,
  margin: 20,
  navText: [
    "<i class='fa fa-angle-left' aria-hidden='true'></i>",
    "<i class='fa fa-angle-right' aria-hidden='true'></i>" 
  ],
  responsive: {
    0: {
      items:2,
      margin: 10,
    },

    450: {
      items:2,
    },

    768: {
      items:3
    },
    1000: {
      items:4
    },
    1270: {
      items:5
    }
  }
});

$('.product4-carousel').owlCarousel({
  loop: false,
  dots: false,
  nav: true,
  margin: 20,
  navText: [
    "<i class='fa fa-angle-left' aria-hidden='true'></i>",
    "<i class='fa fa-angle-right' aria-hidden='true'></i>" 
  ],
  responsive: {
    0: {
      items:2,
      margin: 10,
    },

    450: {
      items:2,
    },

    768: {
      items:3
    },
    1000: {
      items:3
    },
    1270: {
      items:4
    }
  }
});

$('.care-carousel').owlCarousel({
  loop: false,
  dots: false,
  nav: true,
  margin: 20,
  navText: [
    "<i class='fa fa-angle-left' aria-hidden='true'></i>",
    "<i class='fa fa-angle-right' aria-hidden='true'></i>" 
  ],
  responsive: {
    0: {
      items:2,
    },
    576: {
      items:3,
    },
    768: {
      items:4
    },
    1000: {
      items:5
    },
    1270: {
      items:6
    }
  }
});

$('.service-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  dots: false,
  nav: false,
  autoplaySpeed: 1000,
  responsive: {
    0: {
        items:1
    },
    450: {
      items:2
    },
    768: {
        items:3
    },
    1000: {
        items:4
    },
    1270: {
        items:4
    }
  }
});

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


let swiper = new Swiper('.swiper-cate', {
  slidesPerView: 10,
  slidesPerColumn: 2,
  spaceBetween: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1270: {
      slidesPerView: 8,
    },
    1200: {
      slidesPerView: 6,
    },
    768: {
      slidesPerView: 4,
    },
    450: {
      slidesPerView: 3,
    },
  },
});

let swiper2 = new Swiper('.swiper-seller', {
  slidesPerView: 1,
  slidesPerColumn: 5,
  spaceBetween: 15,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

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

  if (ww < 1200) {
    $('.box-product-img a').removeAttr('href');
  }
  
  if (ww > 767) {
    $(window).scroll(() => {
      if ($(this).scrollTop() > 170) {
        $('.menu').addClass('menu-down slideInDown');
        
      } else {
        $('.menu').removeClass('menu-down slideInDown');
      }
    });
  } 

  // GO TOP
  let iScrollPos = 0; 
  $(window).scroll(function () {
    let iCurScrollPos = $(this).scrollTop();
    if (iCurScrollPos < iScrollPos) {
      $('.go-top')
        .fadeIn()
        .css('transform','translateY(0)');
      
    } else {
      $('.go-top')
        .fadeOut()
        .css('transform','translateY(100px)');
      $('.cart').removeClass('cart-out');
      $('.overlay').removeClass('overlay-in');
      $('.header-bottom').removeClass('header-bottom-out');
      $('.left').removeClass('left-out');
    }
    iScrollPos = iCurScrollPos;
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
    let xzoom = $(this).data('xzoom');
    xzoom.closezoom();
    let gallery = xzoom.gallery().cgallery;
    let i, images = new Array();
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
  
  $('.overlay, .cart-close, .filter-close').click(function () {
    $('.overlay').removeClass('overlay-in');
    $('.cart').removeClass('cart-out');
    $('.left').removeClass('left-out')
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

  // Autocomplete Search
  $( function() {
    let availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( ".search input" ).autocomplete({
      source: availableTags
    });
  } );

  // SETTING MODAL OPACITY XZOOM
  $('.modal-footer button , .modal-header button , .modal').click(() => {
    $('.xzoom-preview , .xzoom-source').css('opacity', '0')
  });

  $(".box-product-cart-detail-quantity button, .quantity button").on("click", function() {

    let $button = $(this);
    let oldValue = $button.parent().find("input").val();
  
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
  
  $('.list-cate-title').click(function() {
    $(this).addClass('active');
  });

  $('.type-list').click(function() {
    $('.main-product').addClass('main-product-list');
    $(this).addClass('active');
    $('.type-grid').removeClass('active');
  });

  $('.type-grid').click(function() {
    $('.main-product').removeClass('main-product-list');
    $(this).addClass('active');
    $('.type-list').removeClass('active');
  });

  $('.filter-btn').click(() => {
    $('.left').addClass('left-out');
    $('.overlay').addClass('overlay-in');
  });
});
