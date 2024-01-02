import {morseToEng} from "./morsetoeng.js";
import {engToMorse} from "./engtomorse.js";
import {langCheck} from "./langcheck.js";

const form = document.querySelector(".input");
const input = document.querySelector("#translate");
const output = document.querySelector(".output");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (langCheck(input.value) === "English") {
    output.innerHTML = engToMorse(input.value);
  } else if (langCheck(input.value) === "Morse") {
    output.innerHTML = morseToEng(input.value);
  } else {
    output.innerHTML = "Invalid Input";
  }
});
