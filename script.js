"use strict";

const btn = document.querySelector(".btn");
const txtarea = document.querySelector(".text--input");
const output = document.querySelector(".output");

document.addEventListener("click", function () {
  const backgroundMusic = document.getElementById("background-music");
  backgroundMusic.play();
});

const content = function (data) {
  console.log(data);
  output.innerHTML = data;
};
btn.addEventListener("click", () => {
  //Getting the message from textarea
  const message = txtarea.value;
  console.log("button clicked");
  console.log(message);
  fetch(
    `https://api.funtranslations.com/translate/mandalorian.json?text=${
      encodeURIComponent(message)
    }`,
  ).then((response) => response.json()).then((data) =>
    content(data.contents.translated) // output.innnerHTML`${data}`
  );
});
// audioElement.play();
//
