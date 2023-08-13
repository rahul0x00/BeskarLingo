"use strict";

const btn = document.querySelector(".btn");
// const audio = document.querySelector(".audio");
// audio.muted = true;
// audio.play();
/*
const source = "./hum.ogg";
const audio = document.createElement("audio");
//
audio.autoplay = true;
//
audio.load();
audio.addEventListener("load", function () {
  audio.play();
}, true);
audio.src = source;
*/

document.addEventListener("click", function () {
  const backgroundMusic = document.getElementById("background-music");
  backgroundMusic.play();
});

btn.addEventListener("click", () => console.log("button clicked"));
// audioElement.play();
