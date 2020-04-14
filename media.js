//weather app
const input = document.querySelector(".input-text");
const main = document.querySelector("#name");
const button = document.querySelector("input.btn");
const temp = document.querySelector(".temp");
const desc = document.querySelector(".desc");
const icon = document.querySelector(".icon");
const country = document.querySelector(".country");
const apiKeyWeather = "3f24b2bf14e436852ff873111d6e8a0d";

button.addEventListener("click", function() {
  const weatherUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    input.value +
    `&appid=${apiKeyWeather}&units=metric`;

  fetch(weatherUrl)
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
      icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${iconValue}@2x.png"/>`;
      country.innerHTML = countryValue;
    })

    .catch(err => alert("Please search for a valid location"));
});

//news app
const title = document.querySelector(".title");
const author = document.querySelector(".author");
const description = document.querySelector(".description");
const newsUrl = document.querySelector(".newsUrl");
const title2 = document.querySelector(".title2");
const author2 = document.querySelector(".author2");
const description2 = document.querySelector(".description2");
const newsUrl2 = document.querySelector(".newsUrl2");
const apiKeyNews = "165d3a1692a240bd9e158508db8eada3";

const newsWeb =
  "https://newsapi.org/v2/everything?q=manufacturing&sortBy=publishedAt" +
  `&apiKey=${apiKeyNews}`;

fetch(newsWeb)
  .then(response => response.json())
  .then(data => {
    let titleValue = data.articles[0].title;
    let authorValue = data.articles[0].author;
    let descriptionValue = data.articles[0].description;
    let newsUrlValue = data.articles[0].url;
    let title2Value = data.articles[2].title;
    let author2Value = data.articles[2].author;
    let description2Value = data.articles[2].description;
    let newsUrl2Value = data.articles[2].url;

    title.innerHTML = titleValue;
    author.innerHTML = authorValue;
    description.innerHTML = descriptionValue;
    newsUrl.innerHTML = newsUrlValue;
    title2.innerHTML = title2Value;
    author2.innerHTML = author2Value;
    description2.innerHTML = description2Value;
    newsUrl2.innerHTML = newsUrl2Value;
  });

//clock and date
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

//hamburger side menu bar
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

//Refresh
function AutoRefresh(t) {
  setTimeout("location.reload(true);", t);
}

function refreshPage() {
  if (confirm("Are you sure, want to refresh?")) {
    location.reload();
  }
}
