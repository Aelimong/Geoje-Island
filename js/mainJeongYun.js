//로딩페이지
const max = 100;

function counter(max) {
  document.body.classList.add("overflow-hidden");
  let now = max;

  const handle = setInterval(() => {
    document.querySelector(".count").innerHTML = Math.ceil(max - now);

    // 목표에 도달하면 정지,
    //   정지 후의 코드는 아래에 작성
    if (now < 0.5) {
      clearInterval(handle);
      // 숫자 정지 후
      /* 
      body의 overflow 없앰으로써 스크롤 제거
      두번째 section인 main클래스 보이도록
      svg 에 horizontal 클래스 추가해서 비행기 svg 색변경 & 수평(rotate) 맞추기
      */
      document.body.classList.remove("overflow-hidden");
      document.querySelector(".main").classList.add("show");
      document.querySelector(".svg").classList.add("horizontal");
      return 0;
    }

    // 적용될 수치, 점점 줄어듬
    let step = now / 10;

    //   99일 때 count 천천히 되도록
    if (now < 2) {
      step = now / 20;
    }
    now -= step;
  }, 50);
}
//   로드 되었을 때 로딩 변경 되도록
window.addEventListener("load", () => {
  counter(100);
});

// 2번째 섹션 가로스크롤
let tl = gsap.timeline();
tl.to("#move", {
  xPercent: -50, // 기본 위치에서 왼쪽으로 40% 만큼 이동 (스크롤 내릴 때 section을 가로로 움직이도록)
});
// 스크롤 Trigger 동작
ScrollTrigger.create({
  animation: tl, // 위에서 만들어준 #move에 대한 타임라인
  trigger: "#move", // (move 아이디를 가진 두번째 section을 만나면 gsap 발동)
  start: "top top", // section을 기준으로 맨 위에서 시작
  end: "bottom bottom", // 끝점 설정
  markers: true, // 배포시 markers 옵션은 false 로 변경해주세요
  scrub: 1, // 부드러운 움직임 + 되돌아갈 때도 스크롤 기반 애니메이션 동작하도록
  pin: true, // #move 에서 애니메이션이 동작할 때는 고정된 위치에 있도록
  end: "+=2800", // 3000px 에 해당하는 스크롤 범위만큼 애니메이션이 동작하도록
});

// 2번째 섹션 나타나기
function scrollAnimation() {
  const elemtMoving = document.querySelectorAll("#move");

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
