// Import GSAP library
const { gsap } = window;

// page1
let tl = gsap.timeline();

tl.to(".page1", {
  opacity: 0,
  // yPercent:-100,
  // scale: 1.2,
}).to(".gsap1", {
  color: "green",
  opacity: 1,
});

ScrollTrigger.create({
  animation: tl,
  trigger: [".page1"],
  start: "top top",
  end: "bottom 60%",
  scrub: true,
  marker: true,
  pin: true,
});

// page2

const pins = document.querySelectorAll(".place");
const buttons = document.querySelectorAll(".mainButton");

function hoverIn(event) {
  gsap.to(event.target, { opacity: 0.65, duration: 0.3 });
  console.log(event.target.classList.contains(`pin4`));
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

//page3 ~ page5

function initScrollAnimations() {
  const elementsToAnimate = document.querySelectorAll(".page3, .page4, .page5");

  elementsToAnimate.forEach((element) => {
    gsap.from(element, {
      opacity: 0,
      y: 50,
      duration: 1,
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
document.addEventListener("DOMContentLoaded", initScrollAnimations);

//page 6
function slideLeft() {
  const images = document.querySelectorAll(".page6 .imgContainer img");

  images.forEach((image) => {
    gsap.to(image, {
      x: "-100%", // 왼쪽으로 100% 이동
      scrollTrigger: {
        trigger: image,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 0.5, // 스크롤 속도에 따라 애니메이션을 조절
      },
    });
  });
}

document.addEventListener("DOMContentLoaded", slideLeft);
