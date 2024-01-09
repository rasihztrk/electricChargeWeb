$("#1").waypoint(
  function () {
    increment(1, 70);
  },
  { offset: "75%" }
);

$("#2").waypoint(
  function () {
    increment(2, 81);
  },
  { offset: "75%" }
);

$("#3").waypoint(
  function () {
    increment(3, 100);
  },
  { offset: "75%" }
);

function increment(elem, finalVal) {
  var currVal = parseInt(document.getElementById(elem).innerHTML, 10);
  if (currVal < finalVal) {
    currVal++;
    document.getElementById(elem).innerHTML = currVal;

    setTimeout(function () {
      increment(elem, finalVal);
    }, 40);
  }
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.6,
  watchSlidesProgress: true,
  spaceBetween: 30,
  centeredSlides: true,
  speed: 1000,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".mySwiperTwo", {
  slidesPerView: 4,
  watchSlidesProgress: true,
  spaceBetween: 30,
  speed: 1000,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});
function slideMenu() {
  var headerInside = document.querySelector(".headerinside");
  headerInside.classList.toggle("headerinsideActive");
  $(".headerinside ul li a").fadeToggle(3000);
}

$(function () {
  $("#menu-wrapper").click(function (event) {
    event.stopPropagation();
    $("#hamburger-menu").toggleClass("open");
    $("#menu-container .menu-list").toggleClass("headerinsideActive");
    slideMenu();

    $("body").toggleClass("overflow-hidden");
  });

  $(".headerinside")
    .find(".headerinside")
    .click(function () {
      $(this).next().toggleClass("open").slideToggle("fast");
      $(this)
        .toggleClass("headerinsideActive")
        .find(".menu-link")
        .toggleClass("headerinsideActive");

      $(".headerinside .accordion-content")
        .not($(this).next())
        .slideUp("fast")
        .removeClass("open");
      $(".headerinside .accordion-toggle")
        .not(jQuery(this))
        .removeClass("headerinsideActive")
        .find(".headerinside")
        .removeClass("headerinsideActive");
    });
}); // jQuery load
