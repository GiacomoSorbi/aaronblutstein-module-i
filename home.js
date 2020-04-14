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

//video for UKSMUA homepapge
let video = document.getElementById("myVideo");
let btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause video";
  } else {
    video.pause();
    btn.innerHTML = "Play video";
  }
}
let vid = document.getElementById("myVideo");

function enableMute() {
  vid.muted = true;
}

function disableMute() {
  vid.muted = false;
}
