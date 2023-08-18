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
}

function hoverOut(event) {
  gsap.to(event.target, { opacity: 1, duration: 0.3 });
}

pins.forEach((pin) => {
  for (let button of buttons) {
    pin.addEventListener("mouseover", hoverIn);
    pin.addEventListener("mouseover", () => {
      button.addEventListener("mouseover", hoverIn);
    });

    pin.addEventListener("mouseover", hoverOut);
    pin.addEventListener("mouseover", () => {
      button.addEventListener("mouseover", hoverOut);
    });
  }
});



// pins.forEach((pin, index) => {

//   const button = buttons[index];

//   pin.addEventListener("mouseover", () => {
//     hoverIn(pin);
//     hoverIn(button);
//   });

//   pin.addEventListener("mouseout", () => {
//     hoverOut(pin);
//     hoverOut(button);
//   });
// });

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

// Initialize scroll animations when the DOM is ready
document.addEventListener("DOMContentLoaded", initScrollAnimations);
