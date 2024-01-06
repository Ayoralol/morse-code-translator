import {morseToEng} from "../scripts/morsetoeng.js";
import {engToMorse} from "../scripts/engtomorse.js";
import {langCheck} from "../scripts/langcheck.js";

export const testTranslatorFunction = (value) => {
  let inputValue = value.trim();
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
