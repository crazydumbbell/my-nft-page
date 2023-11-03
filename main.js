const clock = document.querySelector(".clock");

function getTime() {
  const date = new Date();

  let amPm = "AM";

  // let hours = String(date.getHours()).padStart(2, "0");
  let hours = date.getHours();

  if (hours >= 12) amPm = "PM";

  if (hours >= 13) {
    hours %= 12;
    // hours =hours % 12;
  } /* if문으로 오후 설정*/

  // let hours2 = date.getHours() >= 13 ? date.getHours() : date.getHours % 12;
  // <- 요거는 한줄로 축약한 위에코드 "삼항연산자"로 표현한것

  hours = String(hours).padStart(2, "0");
  let minutes = String(date.getMinutes()).padStart(2, "0");
  let seconds = String(date.getSeconds()).padStart(2, "0");
  /*padStart는 문자열에만 적용됨 그래서 String으로 감싸고 뒤에 붙이면됨*/

  clock.innerText = `${amPm} ${hours}:${minutes}:${seconds}`;
}

getTime();
setInterval(getTime, 1000); /*시간을 계속 갱신시켜줌*/
