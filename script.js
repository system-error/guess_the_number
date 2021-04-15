"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (theMessage) {
  document.querySelector(".message").textContent = theMessage;
};

const displayTheNumber = function (theNumber, theNumberStyle) {
  document.querySelector(".number").textContent = theNumber;
  document.querySelector(".number").style.width = theNumberStyle;
};

const displayTheScore = function (theScore) {
  document.querySelector(".score").textContent = theScore;
};

const changeBackgroundColor = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("No Number!");
  } else if (guess === secretNumber) {
    displayMessage("Correct Number!");

    displayTheNumber(secretNumber, "30rem");

    changeBackgroundColor("#60b347");

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? "Grater Than Secret Number!"
          : "Less Than Secret Number!"
      );
      displayTheScore(--score);
    } else {
      displayMessage("Lost!");
      displayTheScore(0);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess").value = "";
  displayMessage("Start guessing...");

  changeBackgroundColor("#222");
  displayTheNumber("?", "15rem");

  displayTheScore(score);
});
