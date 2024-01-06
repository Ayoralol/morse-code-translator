import {morseToEng} from "./morsetoeng.js";
import {engToMorse} from "./engtomorse.js";
import {langCheck} from "./langcheck.js";

const input = document.querySelector(".translate");
const outputs = document.querySelectorAll(".output");
const normOutput = document.querySelector(".output__norm");

input.addEventListener("input", () => {
  const inputValue = input.value;
  translatorFunction(inputValue);
});

export const translatorFunction = (value) => {
  let inputValue = value.trim();
  normOutput.value = inputValue;
  let outputValue = "";
  if (!inputValue) {
    outputValue = "";
  } else if (langCheck(inputValue) === "English") {
    outputValue = engToMorse(inputValue);
  } else if (langCheck(inputValue) === "Morse") {
    outputValue = morseToEng(inputValue);
  } else {
    outputValue = langCheck(inputValue);
  }
  outputs.forEach((output) => (output.innerHTML = outputValue));
};
