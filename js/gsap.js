// gsap
let tl = gsap.timeline();
tl.to("#move", {
  xPercent: -33.4, // 기본 위치에서 왼쪽으로 40% 만큼 이동 (스크롤 내릴 때 section을 가로로 움직이도록)
});
// 스크롤 Trigger 동작
ScrollTrigger.create({
  animation: tl, // 위에서 만들어준 #move에 대한 타임라인
  trigger: "#move", // (move 아이디를 가진 두번째 section을 만나면 gsap 발동)
  start: "top top", // section을 기준으로 맨 위에서 시작
  end: "bottom bottom", // 끝점 설정
  markers: false, // 배포시 markers 옵션은 false 로 변경해주세요
  scrub: 1, // 부드러운 움직임 + 되돌아갈 때도 스크롤 기반 애니메이션 동작하도록
  pin: true, // #move 에서 애니메이션이 동작할 때는 고정된 위치에 있도록
  end: "+=3000", // 3000px 에 해당하는 스크롤 범위만큼 애니메이션이 동작하도록
});
