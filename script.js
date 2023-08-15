"use strict";

const btn = document.querySelector(".btn");
const txtarea = document.querySelector(".text--input");
const output = document.querySelector(".output");
const errorMsg = document.querySelector(".errorMessage");

document.addEventListener("click", function () {
  const backgroundMusic = document.getElementById("background-music");
  backgroundMusic.play();
});

const content = function (data) {
  console.log(data);
  output.innerText = data;
};
function errorHandler(error) {
  errorMsg.innerText =
    "We are sorry. You can only use this for 10 times per hour. Try again later.";
}
btn.addEventListener("click", () => {
  errorMsg.innerText = "";
  output.innerText = "";
  //Getting the message from textarea
  const message = txtarea.value;
  if (message === "") errorMsg.innerText = "Please enter some text";
  fetch(
    `https://api.funtranslations.com/translate/mandalorian.json?text=${
      encodeURIComponent(message)
    }`,
  ).then((response) => response.json()).then((data) =>
    content(data.contents.translated) // output.innnerHTML`${data}`
  ).catch(errorHandler);
});
// audioElement.play();
//
