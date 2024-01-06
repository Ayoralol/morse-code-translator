// if the string is morse code, this translates it to english

import {morseCodeReverse} from "./morseguide.js";

export const morseToEng = (morseCode) => {
  const words = morseCode.split(" / ");
  const strArr = words.map((word) => {
    const letters = word.split(" ");
    const translatedLetters = letters.map((char) => {
      if (morseCodeReverse[char]) {
        return morseCodeReverse[char];
      } else {
        return char;
      }
    });
    return translatedLetters.join("");
  });
  return strArr.join(" ");
};
