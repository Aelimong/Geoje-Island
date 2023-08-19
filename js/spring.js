//스크롫 했을때 나타내기
function scrollAnimation() {
  const elemtMoving = document.querySelectorAll(
    "#ygPage, #ggPage, #hdPage, #food, #springFestival"
  );

  elemtMoving.forEach((element) => {
    gsap.from(element, {
      opacity: 0,
      y: 50,
      duration: 1,

      scrollTrigger: {
        trigger: element,
        start: "top 60%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
  });
}

// addEventListener를 까먹지 맙시다 .,.
document.addEventListener("DOMContentLoaded", scrollAnimation);

// 축제 섹션 사진 스와이퍼
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
