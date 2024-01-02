// using regex to check if the input is english or morse code

export const langCheck = (str) => {
  let isEng = /^[A-Z0-9 ]+$/g.test(str.toUpperCase());
  let isMorse = /^([.-]+(\s[.-]+)*(\s\s)?)*$/g.test(str);

  if (isEng) {
    return "English";
  } else if (isMorse) {
    return "Morse";
  } else {
    return "Unknown";
  }
};
