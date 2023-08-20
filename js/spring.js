// Import GSAP library
const { gsap } = window;

// 지도 마우스 오버
const pins = document.querySelectorAll(".place");
const buttons = document.querySelectorAll(".mainButton");

function hoverIn(event) {
  gsap.to(event.target, { opacity: 0.65, duration: 0.3 });
  console.log(event.target.classList.contains(`pin4`));
  for (let i = 0; i < 4; i++) {
    if (event.target.classList.contains(`pin${i + 1}`)) {
      gsap.to(`.bt${i + 1}`, { opacity: 0.65, duration: 0.3 });
      gsap.to(`.pin${i + 1}`, { opacity: 0.65, duration: 0.3 });
    }
  }
}

function hoverOut(event) {
  gsap.to(event.target, { opacity: 1, duration: 0.3 });
  for (let i = 0; i < 4; i++) {
    if (event.target.classList.contains(`pin${i + 1}`)) {
      gsap.to(`.bt${i + 1}`, { opacity: 1, duration: 0.3 });
      gsap.to(`.pin${i + 1}`, { opacity: 1, duration: 0.3 });
    }
  }
}

function hoverInBtn(event) {
  gsap.to(event.target, { opacity: 0.65, duration: 0.3 });
  for (let i = 0; i < 4; i++) {
    if (event.target.classList.contains(`bt${i + 1}`)) {
      gsap.to(`.pin${i + 1}`, { opacity: 0.65, duration: 0.3 });
    }
  }
}

function hoverOutBtn(event) {
  gsap.to(event.target, { opacity: 1, duration: 0.3 });
  for (let i = 0; i < 4; i++) {
    if (event.target.classList.contains(`bt${i + 1}`)) {
      gsap.to(`.pin${i + 1}`, { opacity: 1, duration: 0.3 });
    }
  }
}

pins.forEach((pin) => {
  pin.addEventListener("mouseover", hoverIn);
});

pins.forEach((pin) => {
  pin.addEventListener("mouseout", hoverOut);
});

buttons.forEach((btn) => {
  btn.addEventListener("mouseover", hoverInBtn);
});

buttons.forEach((btn) => {
  btn.addEventListener("mouseout", hoverOutBtn);
});

//스크롤 했을때 나타내기
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
const swiper1 = new Swiper(".swiper1", {
  autoplay: {
    delay: 5000,
  },
  loop: true,
  slidesPerView: 2,
  spaceBetween: 10,
  speed: 1000,
  // loopedSlides: 1,
});

const swiper2 = new Swiper(".swiper2", {
  autoplay: {
    delay: 5000,
  },
  loop: true,
  slidesPerView: 2,
  spaceBetween: 10,
  speed: 1000,
  // loopedSlides: 1,
});
