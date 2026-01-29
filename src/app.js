import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //Declare variables
  const topIcon = document.querySelector("#cardTop");
  const bottomIcon = document.querySelector("#cardBottom");
  const cardValue = document.querySelector("#cardValue");
  const button = document.querySelector("#cardButton");

  const icons = ["♥︎", "♣", "♦", "♠"];
  const values = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];

  //Generate a card function
  let randomItem = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const mixCards = () => {
    const icon = randomItem(icons);
    const value = randomItem(values);
    topIcon.innerHTML = icon;
    bottomIcon.innerHTML = icon;
    cardValue.innerHTML = value;

    const redIcon = icon === "♥︎" || icon === "♦";
    if (redIcon) {
      topIcon.classList.add("text-danger");
      bottomIcon.classList.add("text-danger")
      topIcon.classList.remove("text-dark");
      bottomIcon.classList.remove("text-dark")
    }
    else {
        topIcon.classList.add("text-dark");
        bottomIcon.classList.add("text-dark");
      }
  };

  

  //Load card in every window load
  mixCards();
  //Listener for the generate card button
  button.addEventListener("click", mixCards);
  console.log("Hello Erick from the console!");
};
