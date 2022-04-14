
    $('.customer-list').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots:true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><img src='./assets/images/dd.svg' alt=''></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><img src='./assets/images/arrow-right.svg' alt=''></i></button>",
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows:false,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
      });