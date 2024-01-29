const scroll = new LocomotiveScroll({
  el:document.querySelector("body"),
  smooth:true,
  lerp:0.04,
});

// document.addEventListener("DOMContentLoaded", function () {
//   window.addEventListener("scroll", function () {
//     // Sticky navbar on scroll script
//     if (window.scrollY > 50) {
//       document.querySelector(".navbar").classList.add("sticky");
//     } else {
//       document.querySelector(".navbar").classList.remove("sticky");
//     }

//     // Scroll-up button show/hide script
//     if (window.scrollY > 1600) {
//       document.querySelector(".scroll-up-btn").classList.add("show");
//     } else {
//       document.querySelector(".scroll-up-btn").classList.remove("show");
//     }
//   });

//   // Slide-up script
//   document.querySelector(".scroll-up-btn").addEventListener("click", function () {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   });

//   // Applying smooth scroll on menu items click
//   document.querySelectorAll(".navbar .menu li a").forEach(function (element) {
//     element.addEventListener("click", function (e) {
//       e.preventDefault();
//       var targetElement = document.querySelector(this.getAttribute("href"));
//       window.scrollTo({
//         top: targetElement.offsetTop,
//         behavior: "smooth"
//       });
//     });
//   });

//   // Toggle menu/navbar script
//   document.querySelector(".menu-btn").addEventListener("click", function () {
//     document.querySelector(".navbar .menu").classList.toggle("active");
//     document.querySelector(".menu-btn i").classList.toggle("active");
//   });

//   // Typing text animation script
//   var typed = new Typed(".typing", {
//     strings: ["frontend Dev.", "Web Devloper."],
//     typeSpeed: 80,
//     backSpeed: 70,
//     loop: true
//   });

//   var typed2 = new Typed(".typing-2", {
//     strings: ["Web Devloper", "frontend Devloper."],
//     typeSpeed: 80,
//     backSpeed: 60,
//     loop: true
//   });

//   // Owl carousel script
//   var owlCarousel = $(".carousel").owlCarousel({
//     margin: 20,
//     loop: true,
//     autoplay: true,
//     autoplayTimeout: 2000,
//     autoplayHoverPause: true,
//     responsive: {
//       0: {
//         items: 1,
//         nav: false
//       },
//       600: {
//         items: 2,
//         nav: false
//       },
//       1000: {
//         items: 3,
//         nav: false
//       }
//     }
//   });
// });
