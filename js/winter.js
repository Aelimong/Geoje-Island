const sw = new Swiper(".swiper1", {
  // direction: "vertical",
  slidesPerView: 3,
  spaceBetween: 6, //slide 간의 gap (margin)
  loop: true,
  autoplay: {
    delay: 1000,
  },
  speed: 1000, //like transition

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

console.log("js");
