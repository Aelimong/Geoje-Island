new Swiper(".swiper", {
  autoplay: {
    delay: 5000,
  },
  loop: true,
  slidesPerView: 2,
  spaceBetween: 10,
  speed: 1000,
  loopedSlides: 1,
  // loopAdditionalSlides: 1,
});

// const { gsap } = window;
// function initScrollAnimations() {
//   const elementsToAnimate = document.querySelectorAll(
//     ".ygPage, .ggPage, .hdPage, .food"
//   );

//   elementsToAnimate.forEach((element) => {
//     gsap.from(element, {
//       opacity: 0,
//       y: 50,
//       duration: 1,
//       scrollTrigger: {
//         trigger: element,
//         start: "top 80%",
//         end: "bottom 20%",
//         toggleActions: "play none none reverse",
//       },
//     });
//   });
