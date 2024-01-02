// using regex to check if the input is english or morse code

export const langCheck = (str) => {
  if (typeof str !== "string") {
    return "Unknown";
  }

  let isEng = /^[A-Z0-9 ]+$/i.test(str);
  let isMorse = /^([.-]+\s)*[.-]+((\s\s)*([.-]+\s)*[.-]*)*$/g.test(str);

  if (isEng) {
    return "English";
  } else if (isMorse) {
    return "Morse";
  } else {
    return "Unknown";
  }
};
