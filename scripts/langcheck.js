// using regex to check if the input is english or morse code

export const langCheck = (str) => {
  if (typeof str !== "string") {
    return "Unknown";
  }

  let isEng = /^[A-Z0-9 ]$/i.test(str[0]);
  let isMorse = /^[.\- ]$/i.test(str[0]);

  if (isEng) {
    if (/[^A-Z0-9 ,?'!/()&:;=+_"$@¿¡]+/i.test(str)) {
      return "Invalid Character";
    }
    return "English";
  } else if (isMorse) {
    if (/[^.\-/ ]+/i.test(str)) {
      return "Invalid Morse Code";
    }
    return "Morse";
  } else {
    return "Invalid Start Input";
  }
};
