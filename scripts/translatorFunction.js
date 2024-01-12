import {morseToEng} from "./morsetoeng.js";
import {engToMorse} from "./engtomorse.js";
import {langCheck} from "./langcheck.js";

export const translatorFunction = (value, normOutput = false) => {
  let inputValue = value.trim();
  if (normOutput) normOutput.value = inputValue;
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
  return outputValue;
};
