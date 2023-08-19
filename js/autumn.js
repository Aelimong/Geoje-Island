// page2

/*
-  pin 호버 시에 해당 지역 button의 불투명도가 변함 > 지역을 알려준다
-  pin 클릭 시에 해당 지역을 도착지로 하는 네이버 지도 길찾기 하이퍼링크 이동
-  button 호버 시에 불투명도 변함 > 직관적인 위치 설명
-  button 클릭 시에 거제 시청의 해당 지역 소개 페이지로 이동
*/

const pins = document.querySelectorAll(".place");
const buttons = document.querySelectorAll(".mainButton");

// pin 기능
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

// button 기능
function hoverIn2(event) {
  gsap.to(event.target, { opacity: 0.75, duration: 0.3 });
}

function hoverOut2(event) {
  gsap.to(event.target, { opacity: 1, duration: 0.3 });
}

buttons.forEach((button) => {
  button.addEventListener("mouseover", hoverIn2);
  button.addEventListener("mouseout", hoverOut2);
});

//page3 ~ page5
// 스크롤에 따라 부드럽게 요소들이 올라온다

function scrollAnimation() {
  const elemtMoving = document.querySelectorAll(
    ".page3, .page4, .page5, .page7"
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

//page 6

/* 사진들이 스크롤에 따라
- 왼쪽에서 나타나고(slideLeft)
- 사진들이 자연스럽게 사라짐(fadeOut)
*/

function slideLeft() {
  const images = document.querySelectorAll(".page6 .imgContainer img");

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

function fadeOut() {
  const images2 = document.querySelectorAll(".page6 .imgContainer img");

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
}

// 두 개의 함수 동시에 작동시킴
const timeline2 = gsap.timeline();

timeline2.add(slideLeft(), 0);
timeline2.add(fadeOut(), 0);

document.addEventListener("DOMContentLoaded", timeline2);
