// 오늘 날씨로 보려면 JSON url에서 base_date 바꿔줘야 합니다! ex) base_date:20230815

// 날씨 상태
$.getJSON(
  "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=wyV9inZShxC1nfFEVEWQCao9dPAK1aTTcTnz2MCHQqsEeFkpNglEWFgVqnIE%2BINQr85RFE0VwMR4kpduEc7M9A%3D%3D&pageNo=1&numOfRows=1000&dataType=JSON&base_date=20230815&base_time=0630&nx=90&ny=69",
  function (data) {
    console.log(data);
    console.log(data.response.body.items.item[18].fcstValue);

    let item = data.response.body.items.item[18];
    let content = "WEATHER " + item.fcstValue;
    $(".weather").text(content);
  }
);

// 현재 기온
$.getJSON(
  "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=wyV9inZShxC1nfFEVEWQCao9dPAK1aTTcTnz2MCHQqsEeFkpNglEWFgVqnIE%2BINQr85RFE0VwMR4kpduEc7M9A%3D%3D&pageNo=1&numOfRows=1000&dataType=JSON&base_date=20230815&base_time=0600&nx=90&ny=69",
  function (data) {
    console.log(data);
    console.log(data.response.body.items.item[3].obsrValue);

    let item = data.response.body.items.item[3];
    let content = "TEMPERATURE " + item.obsrValue + "°C";
    $(".temp").text(content);
  }
);
