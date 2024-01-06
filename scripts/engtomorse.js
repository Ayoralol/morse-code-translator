// If the string is english, this translates to morse code.

import {morseCode} from "./morseguide.js";

export const engToMorse = (str) => {
  const words = str.toUpperCase().split(" ");
  const morseWords = words.map((word) => {
    const letters = word.split("");
    const morseLetters = letters.map((char) => {
      if (morseCode[char]) {
        return morseCode[char];
      } else {
        return char;
      }
    });
    return morseLetters.join(" "); // join letters with a space
  });
  return morseWords.join(" / "); // join words with a " / "
};
