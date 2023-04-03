const responsive = {
  0: {
    items: 1,
  },
  300: {
    items: 1,
  },
  600: {
    items: 2,
  },
};

$("documnet").ready(function () {
  //   let $btns = $(".project-btn");

  //   $btns.click(function (e) {
  //     $(".project.btn").removeClass("active");
  //     e.target.classList.add("active");

  //     let selector = $(e.target).attr("data-filter");
  //     $(".grid").isotope({
  //       filter: selector,
  //     });
  //     return false;
  //   });

  //owl caraousel
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    responsive: responsive,
  });

  let nav_offset_top = $(".header_area").height() + 50;
  function navbarFixed() {
    if ($(".header_area").length) {
      $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $(".header-area>.main-menu").addClass("navbar_fixed");
        } else {
          $(".header_area>.main-menu").removeClass("navbar_fixed");
        }
      });
    }
  }
  navbarFixed();
});
