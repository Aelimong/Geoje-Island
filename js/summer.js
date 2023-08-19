// Import GSAP library
const { gsap } = window;

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

// 명사 해수욕장 이미지 슬라이드
const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 2000,
  },
  speed: 3000,
  controller: {
    inverse: false,
  },
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});
