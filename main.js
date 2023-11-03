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

//quotes를 quote로 쓰는과정에서 오타가 많아서
// "quotes를"맨위에 const QUOTES = "quotes" 로 변형해서 상수를 넣어주면 좋음

function getQuotes() {
  const quotes = document.querySelector(".quotes");

  let savedQuotes = localStorage.getItem("quotesList");

  if (!savedQuotes) {
    // 로컬 스토리지 없으니까 없으면 기본적으로 하나 생성
    localStorage.setItem("quotesList", JSON.stringify(["열심히살자!"]));
    // 문자열 형태로 저장

    savedQuotes = localStorage.getItem("quotesList");
  }

  let parsedQuotes = JSON.parse(savedQuotes);

  quotes.innerText =
    parsedQuotes[Math.floor(Math.random() * parsedQuotes.length)];
  // quotes.innerHTML = "<h1 style='background-color: red;'>화이팅!!!</h1>";
  // innerHTML과innerText의 차이점은 h1태그를 이용하여 꾸밀수 있냐없냐
}

getQuotes();

function onClickNewQuotes() {
  const quotes = document.querySelector(".quotes");
  const newQuotes = document.querySelector(".new-quotes");
  const newQuotesInput = document.querySelector(".new-quotes-input");

  if (!newQuotesInput.value) return;
  // 뉴쿼츠에 값이 없다면(!) return(실행시키지 않는다)//

  let savedQuotes = localStorage.getItem("quotesList");
  let parseQuotes = JSON.parse(savedQuotes);
  parseQuotes.push(newQuotesInput.value);
  // 입력값 저장

  localStorage.setItem("quotesList", JSON.stringify(parseQuotes));
  //저장된 입력값을 로컬 스토리지에 저장
  // quotesList를 quoteList로 저장해서 틀림 ;;

  //현재 페이지 반영하고
  quotes.innerText = newQuotesInput.value;
  newQuotesInput.value = "";
  //입력창은 비워둔다

  quotes.style.display = "block";
  newQuotes.style.display = "none";
}

function onClickQuotes() {
  const quotes = document.querySelector(".quotes");
  const newQuotes = document.querySelector(".new-quotes");
  quotes.style.display = "none";
  newQuotes.style.display = "block";
}
