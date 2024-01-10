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
