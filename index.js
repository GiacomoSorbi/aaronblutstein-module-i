const input = document.querySelector(".input-text");
const main = document.querySelector("#name");
const author = document.querySelector(".author");
const author2 = document.querySelector(".author2");
const description = document.querySelector(".description");
const published = document.querySelector(".published");
const published2 = document.querySelector(".published2");
const button = document.querySelector(".submit");
const title = document.querySelector(".title");
const title2 = document.querySelector(".title2");
const temp = document.querySelector(".temp");
const desc = document.querySelector(".desc");
const icon = document.querySelector(".icon");
const country = document.querySelector(".country");
const apiKey = "3f24b2bf14e436852ff873111d6e8a0d";

button.addEventListener("click", function() {
  const web =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    input.value +
    `&appid=${apiKey}&units=metric`;

  fetch(web)
    .then(response => response.json())
    .then(data => {
      let tempValue = Math.round((data.main.temp / 10) * 10);
      let nameValue = data.name;
      let descValue = data.weather[0].description;
      let iconValue = data.weather[0].icon;
      let countryValue = data.sys.country;

      main.innerHTML = nameValue;
      desc.innerHTML = descValue;
      temp.innerHTML = tempValue + "°C";
      icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${iconValue}@2x.png" target="_blank" rel="noopener"/>`;
      country.innerHTML = countryValue;
    })

    .catch(err => alert("Please search for a valid location"));
});

const url = `https://newsapi.org/v2/everything?q=manufacturing&sortBy=publishedAt&apiKey=165d3a1692a240bd9e158508db8eada3`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    let authorValue = data.articles[0].author;
    let author2Value = data.articles[3].author;
    let titleValue = data.articles[0].title;
    let title2Value = data.articles[3].title;
    let descriptionValue = data.articles[0].description;
    let publishedValue = data.articles[0].publishedAt;
    let published2Value = data.articles[3].publishedAt;

    author.innerHTML = authorValue;
    author2.innerHTML = author2Value;
    title.innerHTML = titleValue;
    title2.innerHTML = title2Value;
    description.innerHTML = descriptionValue;
    published.innerHTML = publishedValue;
    published2.innerHTML = published2Value;
  });

let now, dd, td;
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

document.addEventListener("DOMContentLoaded", init, false);
function init() {
  dd = document.getElementById("date");
  td = document.getElementById("time");
  setInterval(updateTime, 1000);
}
function updateTime() {
  let clockdata = getClockStrings();
  dd.innerHTML = clockdata.datehtml;
  td.innerHTML = clockdata.timehtml;
  dd.dateTime = now.toISOString();
  td.dateTime = now.toISOString();
}
function getClockStrings() {
  now = new Date();
  let year = now.getFullYear();
  let month = months[now.getMonth()];
  let date = now.getDate();
  let day = days[now.getDay()];
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let meridian = hour < 12 ? "AM" : "PM";
  let clockhour = hour > 12 ? hour - 12 : hour;
  if (hour === 0) {
    clockhour = 12;
  }
  let clockminutes = minutes < 10 ? "0" + minutes : minutes;
  let clockseconds = seconds < 10 ? "0" + seconds : seconds;
  let datehtml = day + ", " + month + " " + date + ", " + year;
  let timehtml =
    clockhour +
    ":" +
    clockminutes +
    "<span>:" +
    clockseconds +
    " " +
    meridian +
    "</span>";
  return { datehtml: datehtml, timehtml: timehtml };
}
//side menu bar
function openSlideMenu() {
  document.getElementById("side-menu").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeSlideMenu() {
  document.getElementById("side-menu").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function openpage(contents, elmnt, color) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(contents).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

//Refresh
function AutoRefresh(t) {
  setTimeout("location.reload(true);", t);
}
