//현재 시간 불러오기 =====================================
let timestamp = new Date().getTime();

// timestamp Date 객체로 변환 출력
let nowDate = new Date(timestamp);

function dateFormat(date) {
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  month = month >= 10 ? month : "0" + month;
  day = day >= 10 ? day : "0" + day;
  hour = hour >= 10 ? hour : "0" + hour;
  minute = minute >= 10 ? minute : "0" + minute;
  second = second >= 10 ? second : "0" + second;

  return (
    date.getFullYear() +
    "-" +
    month +
    "-" +
    day +
    " " +
    hour +
    ":" +
    minute +
    ":" +
    second
  );
}

// timestamp를 yyyy-MM-dd HH:mm:ss 로 출력
// 결과 : 2023-08-15 17:11:10
let currentFormatDate = dateFormat(nowDate);

// 화면에 출력
let currentDate = document.querySelector("#currentDate");
let currentTime = document.querySelector("#currentTime");

//요일
const WEEKDAY = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
];
let week = WEEKDAY[nowDate.getDay()];

// 날짜, 시간 slice
let YYYY = currentFormatDate.slice(0, 4);
let MM = currentFormatDate.slice(5, 7);
let DD = currentFormatDate.slice(8, 10);
let hour = currentFormatDate.slice(11, 13);
let mm = currentFormatDate.slice(14, 16);

currentDate.innerText = `${YYYY}년 ${MM}월 ${DD}일 ${week}`;
currentTime.innerText = `${hour}시 ${mm}분`;

/**
 * 계절별 배경 & 티켓 이미지 변경
 */
function changeTicketImages(MM) {
  let ticketFlower = document.querySelector(".ticket-flower");
  let defaultTicket = document.querySelector(".default-ticket");

  let month = Number(MM);

  let springTicket = "./img/main/ticket-spring.png";
  let summerTicket = "./img/main/ticket-summer.png";
  let autumnTicket = "./img/main/ticket-autumn.png";
  let winterTicket = "./img/main/ticket-winter.png";

  let img = document.createElement("img");

  // 3~5 봄
  if (month >= 3 && month <= 5) {
    img.src = springTicket;
    img.alt = "봄 꽃";

    ticketFlower.append(img);
    defaultTicket.style.display = "none";

    // 6~8 여름
  } else if (month >= 6 && month <= 8) {
    img.src = summerTicket;
    img.alt = "여름 꽃";

    ticketFlower.append(img);
    defaultTicket.style.display = "none";

    // 9~11 가을
  } else if (month >= 9 && month <= 11) {
    img.src = autumnTicket;
    img.alt = "가을 꽃";

    ticketFlower.append(img);
    defaultTicket.style.display = "none";

    //나머지 겨울
  } else {
    img.src = winterTicket;
    img.alt = "겨울 꽃";

    ticketFlower.append(img);
    defaultTicket.style.display = "none";
  }
}

changeTicketImages(MM);

/**
 * 티켓 클릭시 애니메이션 적용 후 계절별 페이지로 이동
 */

let ticketInfo = document.querySelector(".ticket-info");
let ticketFlower = document.querySelector(".ticket-flower");

ticketInfo.addEventListener("click", addPaperAnimation);
ticketFlower.addEventListener("click", addPaperAnimation);

function addPaperAnimation() {
  //ticketInfo, ticketFlower 애니메이션 클래스 적용
  ticketInfo.classList.toggle("rotate-10-left");
  ticketFlower.classList.toggle("rotate-10-right");

  // 1초뒤 페이지 이동
  setTimeout(() => {
    moveFourSeosonPage();
  }, 1000);
}

function moveFourSeosonPage() {
  let month = Number(MM);
  let springUrl = "/html/spring.html";
  let summerUrl = "/html/summer.html";
  let autumnUrl = "/html/autumn.html";
  let winterUrl = "/html/winter.html";

  // 3~5 봄
  if (month >= 3 && month <= 5) {
    location.href = springUrl;

    // 6~8 여름
  } else if (month >= 6 && month <= 8) {
    location.href = summerUrl;

    // 9~11 가을
  } else if (month >= 9 && month <= 11) {
    location.href = autumnUrl;

    //나머지 겨울
  } else {
    location.href = winterUrl;
  }
}

// 메인섹션에서는 메뉴 안 보이도록 구현 =====================================
let mainMenu = document.querySelector(".main-menu");
let mainSection = document.querySelector(".main-section");
let mainSecHeight = mainSection.clientHeight;

window.addEventListener("scroll", () => {
  if (window.scrollY <= mainSecHeight - 80) {
    mainMenu.classList.add("menu-hide");
  } else {
    mainMenu.classList.remove("menu-hide");
  }
});

// 스크롤 감지 메뉴 구현 =====================================
let didScroll;
let lastScrollTop = 0;
let delta = 5;
let navbarHeight = $("header.main-menu").outerHeight();

// 스크롤시에 사용자가 스크롤했다는 것을 알림
$(window).scroll(function (event) {
  didScroll = true;
});

// hasScrolled()를 실행하고 didScroll 상태를 재설정
setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  let st = $(this).scrollTop();

  if (Math.abs(lastScrollTop - st) <= delta) return;

  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    $("header.main-menu").removeClass("nav-down").addClass("nav-up");
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $("header.main-menu").removeClass("nav-up").addClass("nav-down");
    }
  }

  lastScrollTop = st;
}

// 메인 전체메뉴 보이기 =====================================
function showNav() {
  let mainNav = document.querySelector(".main-nav");
  let navArea = document.querySelector(".nav-area");
  let bodyHeight = document.body.scrollHeight;
  let viewHeight = window.innerHeight;

  if (mainNav.classList.contains("fade-out-box")) {
    mainNav.classList.remove("fade-out-box");
    mainNav.classList.add("fade-in-box");
  } else {
    mainNav.classList.add("fade-in-box");
  }

  mainNav.setAttribute("style", `display: block; height: ${bodyHeight}px`);
  navArea.setAttribute("style", `height: calc(${viewHeight}px - 80px)`);
}

// 메인 전체메뉴 숨기기 =====================================
function hideNav() {
  let mainNav = document.querySelector(".main-nav");

  if (mainNav.classList.contains("fade-in-box")) {
    mainNav.classList.remove("fade-in-box");
    mainNav.classList.add("fade-out-box");
  } else {
    mainNav.classList.add("fade-out-box");
  }

  setTimeout(() => {
    mainNav.style.display = "none";
  }, 500);
}

//페이지 새로고침 될 때 전체 메뉴 숨기기
const entries = performance.getEntriesByType("navigation")[0];
if (entries.type === "reload") {
  hideNav();
}
