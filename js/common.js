function pageTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

const moHeader = document.querySelector(".mo-header");
const openIcon = document.querySelector(".open-icon");
const closeIcon = document.querySelector(".close-icon");
const fourContainer = document.querySelector(".four-container");
const body = document.querySelector("body");

if (openIcon !== null) {
  openIcon.addEventListener("click", openMenu);
}

if (closeIcon !== null) {
  closeIcon.addEventListener("click", closeMenu);
}

// 메뉴 펼칠 때
function openMenu() {
  if (moHeader.classList.contains("hide")) {
    moHeader.classList.remove("hide");
  }
  moHeader.classList.add("show");

  //1. 햄버거 메뉴 안 보이게 한다.
  if (openIcon.classList.contains("show")) {
    openIcon.classList.remove("show");
  }
  openIcon.classList.add("hide");
  //openIcon.setAttribute("style", "opacity: 0");

  //2. 엑스 메뉴 보이게 한다.
  if (closeIcon.classList.contains("hide")) {
    closeIcon.classList.remove("hide");
  }
  closeIcon.classList.add("show");
  closeIcon.setAttribute("style", "opacity: 1");
  //fourContainer.classList.add("close");

  //body 스크롤 숨겨주기
  body.style.overflowY = "hidden";

  //활성화된 메뉴 색 변경해주기
  changeActiveMenuColor();
}

// 엑스 클릭시 mo-header close , 메인은 open
function closeMenu() {
  if (moHeader.classList.contains("show")) {
    moHeader.classList.remove("show");
  }

  moHeader.classList.add("hide");

  //1. 엑스 메뉴 다시 안 보이게
  if (closeIcon.classList.contains("show")) {
    closeIcon.classList.remove("show");
  }
  closeIcon.classList.add("hide");
  closeIcon.setAttribute("style", "opacity: 0");

  //2. 햄버거 메뉴 보이게
  if (openIcon.classList.contains("hide")) {
    openIcon.classList.remove("hide");
  }
  openIcon.classList.add("show");

  //body 스크롤 보여주기
  body.style.overflowY = "scroll";
}

// 현재 링크가 메인이면 background-color: skyblue로
function changeActiveMenuColor() {
  //1. 현재 링크 가져와서 루트 제외한 링크 확인
  let currentUrl = window.location.href;
  let currentPage = currentUrl.split("/").reverse()[0];
  let currentNav = "";
  let activeColor = "#9AB1DB";

  console.log(currentPage);

  //2. switch로
  if (currentPage === "spring.html") {
    currentNav = document.querySelector(".nav-spring");
    currentNav.style.backgroundColor = activeColor;
  } else if (currentPage === "summer.html") {
    currentNav = document.querySelector(".nav-summer");
    currentNav.style.backgroundColor = activeColor;
  } else if (currentPage === "autumn.html") {
    currentNav = document.querySelector(".nav-autumn");
    currentNav.style.backgroundColor = activeColor;
  } else if (currentPage === "winter.html") {
    currentNav = document.querySelector(".nav-winter");
    currentNav.style.backgroundColor = activeColor;
  } else {
    currentNav = document.querySelector(".nav-home");
    currentNav.style.backgroundColor = "f5f5f5";
  }
  //3.
}
