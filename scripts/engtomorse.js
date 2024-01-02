// If the string is english, this translates to morse code.

import {morseCode} from "./morseguide.js";

export const engToMorse = (str) => {
  const strArr = str.toUpperCase().split("");
  const morseArr = strArr.map((char) => {
    if (morseCode[char]) {
      return morseCode[char];
    } else {
      return char;
    }
  });
  return morseArr.join(" ");
};
