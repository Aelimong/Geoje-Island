# 거제온(溫)섬
### 거제도, 따스한 사계절 온기 넘치는 섬
#### 배포링크: https://geoje-island.netlify.app

<br />

## 프로젝트 설명 <br />
- 거제도의 계절 별 관광 정보를 편하게 접할 수 있는 관광 홍보 사이트를 제작하였습니다.<br />
- 프론트엔드 영역과 UI/UX 디자인을 통해 페이지를 구현하였습니다. <br />
- HTML, CSS, JAVASCRIPT와 GSAP, JQUERY, SWIPER를 사용하여 프로젝트를 완성하였습니다. <br />  

<사진넣기>

 <br /> 
 
## 🎁 서비스 소개
거제온(溫)섬은 한국의 아름다운 휴가지 중 두 번째로 큰 섬인 거제도를 관광지로 브랜딩하여, 거제를 여행하려는 분들, 여행지 선택에 고민하는 분들, 혹은 거제에 대해 궁금한 분들을 위한 정보를 제공합니다. '거제도 따스한 사계절, 온기 넘치는 섬'이라는 슬로건을 기반으로 거제의 사계절을 다양한 콘셉트로 소개하며, 텍스트와 딱딱한 이미지로만 이루어진 기존의 여행 관광 홈페이지와 달리 시각적이고 기능적으로 정보를 제공하여 관광지 위치 정보를 효과적으로 구현하고자 했습니다.
<br /> 
<br /> 

## 📎 프로젝트 개요
프로젝트명 : 거제온(溫)섬<br />
### ⏱ 기간
2023.08.04 ~ 2023.08.21 <br />
### 🖥 플랫폼 
Web (Frontend Page) <br />
### 💡 기술 스택

IDE <br />

<img src="https://img.shields.io/badge/visual%20studio%20code-%23007ACC.svg?&style=flat&logo=visual%20studio%20code&logoColor=white" />

Library <br />

<img src="https://img.shields.io/badge/greensock-%2388CE02.svg?&style=flat&logo=greensock&logoColor=black" />
  <img src="https://img.shields.io/badge/swiper-%236332F6.svg?&style=flat&logo=swiper&logoColor=white" />
  <img src="https://img.shields.io/badge/jquery-%230769AD.svg?&style=flat&logo=jquery&logoColor=white" />

Language <br />

<img src="https://img.shields.io/badge/html5-%23E34F26.svg?&style=flat&logo=html5&logoColor=white" />
<img src="https://img.shields.io/badge/css3-%231572B6.svg?&style=flat&logo=css3&logoColor=white" />
<img src="https://img.shields.io/badge/javascript-%23F7DF1E.svg?&style=flat&logo=javascript&logoColor=black" />

Deploy Tool <br />
<img src="https://img.shields.io/badge/netlify-%2300C7B7.svg?&style=flat&logo=netlify&logoColor=white" />
<br />
<br /> 

## 👩🏻‍💻 팀원 소개 <br />
정애림, 김은홍, 유창용, 한정윤

<br />

## 🛠 주요 기능 & 역할 <br />
**1. 정애림 - Main page, Sub page 구현, Summer page  UI 디자인 및 구현**

- Main page 티켓 섹션, 메인 메뉴 구현
- 티켓 섹션 - 현재 계절에 따라 티겟 이미지가 바뀌고 클릭시 해당 계절 페이지로 이동하는 기능 구현
- 메인 메뉴 - Javascript로 스크롤 감지 기능을 구현하여 스크롤 내릴 때 안 보이고 올릴 때 보이도록 구현
- Sub page 사이드 메뉴, Footer 구현, 최상단 춘하추동 섹션 구현
- 사이드 메뉴, Footer 구현시 include-html 속성 사용하여 정적 페이지 연결, header/footer.html만 수정하면 모든 서브페이지에 변경사항이 적용 되어 유지보수하기 용이하게 구현
- Footer - pageTop아이콘을 추가하고 window.scrollTo 메서드를 이용하여 최상단으로 돌아가도록 구현
- Summer page UI 디자인 및 구현
- [댕수욕장] Swiper를 이용해 갤러리 슬라이드 구현
- Winter page 일부 구현
- [신년행사] 섹션 클릭시 Javascript와 @keyframes을 이용하여 랜덤 색상의 폭죽이 터지는 애니메이션 구현 

**2. 김은홍 - Main page UI 디자인, Sub page 공통 UI 디자인, 가을 페이지 UI 디자인 및 코드 구현**

- Main page 레이아웃 구성 및 UI 디자인
- Sub page 공통 UI 디자인
- [추천명소] 지도 내 핀과 버튼을 연동시키고 mouseOver와 mouseOut이 GSAP과 함께 구현되는 함수 작성
- [사진 슬라이더] 페이지 스크롤에 따라 사진이 자연스럽게 움직이도록 GSAP과 ScrollTrigger를 이용하여 함수 작성  

**3. 유창용  - Main page  1st Section 구현, Winter Page UI 디자인 및 구현**

- Main page 1st Section UI 구현
- 공공데이터포털 Open API를 이용하여 현재 거제도의 기상 상황과 온도 표시 구현
- Winter page UI 구성 및 구현
- [전체] GSAP을 활용하여 scroll시 Winter page의 section에 해당하는 부분이 fade-In, fade-out 될수 있도록 구현
- [전통시장] Swiper를 이용해 갤러리 Carousel 구현

**4. 한정윤 - Loading page, Main page, Spring page UI 디자인 및 구현**

- JavaScript를 이용한 Loading page 구현
- Main page 2, 3 seciton UI 구성
- GSAP을 사용하여 main page 스크롤시 페이지가 가로로 넘어가는 기능 구현
- Spring page UI 구성 및 구현
- [전체] GSAP을 활용해 스크롤 위치에 따라 컨텐츠가 나타나는 현상 구현
- [봄축제] Swiper를 이용해 사진이 자동으로 왼쪽으로 넘어가는 기능 구현 



