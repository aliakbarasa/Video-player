let btn = document.querySelector(".btn");
let clip = document.querySelector(".clip");
let close = document.querySelector(".close");
let iframe = clip.querySelector("iframe");
let times = 0,
  playY;
btn.onclick = function () {
  btn.classList.add("active");
  clip.classList.add("active");
  // video.play();
  // video.currentTime = 0;
  if (times == 0) {
    playY = iframe.src += "?autoplay=1";
    times = 1;
  }
};
close.onclick = function () {
  btn.classList.remove("active");
  clip.classList.remove("active");
  // video.pause();
  playY = playY.slice(0, -11);
  iframe.src = playY;
  times = 0;
};