$(document).ready(function() {
    $('.carousel__inner').slick({
        speed: 1200, 
        adaptiveHeight: true, 
        prevArrow: '<button type="button" class="slick-prev"> <img src="icons/pr_arow.png"> </button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/next_arow.png"></button>',
        responsive: [
            {
            breakpoint: 992,
            settings: {
                dots: true,
                arrows: false 
               }
            },
            {
            breakpoint: 576,
      settings: {
        dots: false,
        arrows: false,
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
        ]
    });
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

   
    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');  
            })
    });
};

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    // modal

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #thanks, #order').fadeOut('fast')
    });
    
    
    $('.button_mini').each(function(i){
     $(this).on('click',function() {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
        }); 
    });


    function valideForms(form){
        $(form).validate({
            rules:{
                name: {
                    required: true,
                    minlength: 2
                  },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required:  "????????????????????, ?????????????? ???????? ??????",
                    minlength: jQuery.validator.format("?????????????? {0} ??????????????")
                  },
                phone: "????????????????????, ?????????????? ???????? ?????????? ????????????????",
                email: {
                  required: "????????????????????, ?????????????? ???????? ??????????",
                  email: "?????????????????????? ???????????? ?????????? ??????????"
                }
              }
        });
    };

    valideForms('#consultation-form');
    valideForms('#consultation form');
    valideForms('#order form');

/*     $('input[name=phone]').mask("+7 (999) 999-99-99");


    $('form').submit(function(e) {
        e.preventDefault();

        if(!$(this).valid()) {
            return;
        }

        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn("slow");
            
            $('form').trigger('reset');
        });
        return false;
    }); */


    $('input[name=phone]').mask("+7 (999) 999-99-99");

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });

//smooth scrol and page up

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }

    });
    $("a").on('click', function(event) {

        
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
    
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });

      new WOW().init();
});

          


 /*    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  }); */
 

    
    



   /*  
 */
    /*  */

   


    /* const slider = tns({
        container: '.carousel__inner',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        controls:false,
        nav: false
    });
    document.querySelector('.prev').onclick = function () {
        slider.goTo('prev');
    };
    document.querySelector('.next').onclick = function () {
        slider.goTo('next');
    }; */






 