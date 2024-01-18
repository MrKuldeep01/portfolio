$(document).ready(function () {
    $(window).scroll(function () {
      // Sticky navbar on scroll script
      if ($(this).scrollTop() > 50) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }
  
      // Scroll-up button show/hide script
      if ($(this).scrollTop() > 1600) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
    });
  
    // Slide-up script
    $(".scroll-up-btn").click(function () {
      $("html, body").animate({ scrollTop: 0 }, "slow");
    });
  
    $(".navbar .menu li a").click(function () {
      // Applying smooth scroll on menu items click
      $("html, body").animate(
        {
          scrollTop: $($(this).attr("href")).offset().top
        },
        800
      );
    });
  
    // Toggle menu/navbar script
    $(".menu-btn").click(function () {
      $(".navbar .menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
    });
  
    // Typing text animation script
    var typed = new Typed(".typing", {
      strings: [
        "frontend Dev.",
        "Web Devloper."
      ],
      typeSpeed: 80,
      backSpeed: 70,
      loop: true
    });
  
    var typed2 = new Typed(".typing-2", {
      strings: [
          "Web Devloper",
        "frontend Devloper.",
      ],
      typeSpeed: 80,
      backSpeed: 60,
      loop: true
    });
  
    // Owl carousel script
    $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 2,
          nav: false
        },
        1000: {
          items: 3,
          nav: false
        }
      }
    });
  });
  
