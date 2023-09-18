// 오늘의 날짜
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is zero-based
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}${month}${day}`;
}

// 날짜 코드로
const today = new Date();
const baseDate = formatDate(today);

// api 불러오기
function fetchWeatherData() {
  const url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=wyV9inZShxC1nfFEVEWQCao9dPAK1aTTcTnz2MCHQqsEeFkpNglEWFgVqnIE%2BINQr85RFE0VwMR4kpduEc7M9A%3D%3D&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${baseDate}&base_time=1000&nx=90&ny=69`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      // console.log(data.response.body.items.item[18].fcstValue);

      let weather = data.response.body.items.item[18];
      let content = "WEATHER " + weather.fcstValue;

      //아이콘 전환
      let icons = {
        1: '<i class="fa-solid fa-sun fa-spin fa-lg" style="color: #023793"></i>',
        3: '<i class="fa-solid fa-cloud-sun fa-fade fa-lg" style="color: #023793;"></i>',
        4: '<i class="fa-solid fa-cloud fa-fade fa-lg" style="color: #023793;"></i>',
      };

      //else는 비오는 icon
      let rainy =
        'WEATHER <i class="fa-solid fa-cloud-showers-heavy fa-fade fa-lg" style="color: #023793;"></i>';

      // WEATHER랑 icon 찍기
      let weatherIcon = icons[weather.fcstValue] || rainy;
      let weatherHtml = `WEATHER ${weatherIcon}`;
      document.querySelector(".weather").innerHTML = weatherHtml;

      // 온도
      // console.log(data.response.body.items.item[24].f);
      let temp = data.response.body.items.item[24];
      let content2 = "TEMPERATURE " + temp.fcstValue + "°C";
      document.querySelector(".temp").innerHTML = content2;

      // 반응형 글자크기 함수 불러오기
      adjustFontSize();
    })
    .catch((error) => {
      console.error("Error fetching weather data: ", error);
    });
}

// 반응형 글자크기
function adjustFontSize() {
  const screenWidth = window.innerWidth;
  const fontSize = screenWidth <= 1023 ? "16px" : "20px";

  document
    .querySelectorAll(".apis .weather, .apis .temp")
    .forEach((element) => {
      element.style.fontSize = fontSize;
    });
}

window.addEventListener("load", fetchWeatherData);
window.addEventListener("resize", adjustFontSize);

fetchWeatherData();
