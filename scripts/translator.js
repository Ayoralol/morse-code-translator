import {morseToEng} from "./morsetoeng.js";
import {engToMorse} from "./engtomorse.js";
import {langCheck} from "./langcheck.js";
import {translatorFunction} from "./translatorFunction.js";

const input = document.querySelector(".translate");
const outputs = document.querySelectorAll(".output");
const normOutput = document.querySelector(".output__norm");

input.addEventListener("input", () => {
  const inputValue = input.value;
  const outputValue = translatorFunction(inputValue, normOutput);
  outputs.forEach((output) => (output.innerHTML = outputValue));
});
