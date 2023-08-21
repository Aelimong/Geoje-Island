const pins = document.querySelectorAll(".place");
const buttons = document.querySelectorAll(".mainButton");

function hoverIn(event) {
  gsap.to(event.target, { opacity: 0.65, duration: 0.3 });
  for (let i = 0; i < 4; i++) {
    if (event.target.classList.contains(`pin${i + 1}`)) {
      gsap.to(`.bt${i + 1}`, { opacity: 0.65, duration: 0.3 });
    }
  }
}

function hoverOut(event) {
  gsap.to(event.target, { opacity: 1, duration: 0.3 });
  for (let i = 0; i < 4; i++) {
    if (event.target.classList.contains(`pin${i + 1}`)) {
      gsap.to(`.bt${i + 1}`, { opacity: 1, duration: 0.3 });
    }
  }
}

pins.forEach((pin) => {
  pin.addEventListener("mouseover", hoverIn);
});

pins.forEach((pin) => {
  pin.addEventListener("mouseout", hoverOut);
});

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

buttons.forEach((btn) => {
  btn.addEventListener("mouseover", hoverInBtn);
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
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//page3 ~ page5
// 스크롤에 따라 부드럽게 요소들이 올라온다

function scrollAnimation() {
  const elemtMoving = document.querySelectorAll(
    ".page3, .page4, .page5, .page7, .page8"
  );

  elemtMoving.forEach((element) => {
    gsap.from(element, {
      opacity: 0,
      y: 50,
      duration: 1,
      // ease: "ease-in-out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
  });
}

//초기화
document.addEventListener("DOMContentLoaded", scrollAnimation);

// 수국축제

/* 사진들이 스크롤에 따라
- 왼쪽에서 나타나고(slideLeft)
- 사진들이 자연스럽게 사라짐(fadeOut)
*/

function slideLeft() {
  const images = document.querySelectorAll(".sugug-info .images-top img");

  images.forEach((image) => {
    gsap.to(image, {
      x: "-300%",
      scrollTrigger: {
        trigger: image,
        start: "top 60%",
        end: "bottom 20%",
        scrub: 2, // 스크롤 속도에 따라 애니메이션을 조절
      },
    });
  });
}

function slideRight() {
  const images = document.querySelectorAll(".sugug-info .images-bottom img");

  images.forEach((image) => {
    gsap.to(image, {
      x: "300%",
      scrollTrigger: {
        trigger: image,
        start: "top 60%",
        end: "bottom 20%",
        scrub: 2, // 스크롤 속도에 따라 애니메이션을 조절
      },
    });
  });
}

function fadeOut() {
  const images2 = document.querySelectorAll(".sugug-info .images-top img");
  const images3 = document.querySelectorAll(".sugug-info .images-bottom img");

  images2.forEach((image) => {
    gsap.to(image, {
      opacity: 0,
      scrollTrigger: {
        trigger: image,
        start: "top 10%",
        end: "bottom 20%",
        scrub: 2,
      },
    });
  });

  images3.forEach((image) => {
    gsap.to(image, {
      opacity: 0,
      scrollTrigger: {
        trigger: image,
        start: "top 10%",
        end: "bottom 20%",
        scrub: 2,
      },
    });
  });
}

// 두 개의 함수 동시에 작동시킴
const timeline2 = gsap.timeline();

timeline2.add(slideLeft(), 0);
timeline2.add(fadeOut(), 0);
timeline2.add(slideRight(), 0);
timeline2.add(fadeOut(), 0);

document.addEventListener("DOMContentLoaded", timeline2);
