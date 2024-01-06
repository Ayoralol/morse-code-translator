import {translatorFunction} from "./translator.js";

const btn = document.querySelector(".magic__btn");
const swaps = document.querySelectorAll(".changer");
const engOrMorse = document.querySelectorAll(".engormorse");
const desc = document.querySelectorAll(".desc");
const foot = document.querySelectorAll(".foot");
const foot2 = document.querySelectorAll(".foot2");
const label = document.querySelectorAll(".label");
const btnText = document.querySelectorAll(".magic--text");
const legText = document.querySelectorAll(".legend--text");
const input = document.querySelector(".translate");
const outputs = document.querySelectorAll(".output");
const normOutput = document.querySelector(".output__norm");
const mainOutput = document.querySelector(".main__output");

btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  btn.style.pointerEvents = "none";
  swaps.forEach((swap) => (swap.style.opacity = "0"));
  setTimeout(() => {
    htmlSwapper();
    swaps.forEach((swap) => (swap.style.opacity = "1"));
  }, 410);
  setTimeout(() => {
    btn.style.pointerEvents = "all";
  }, 800);
});

const htmlSwapper = () => {
  if (btn.classList.contains("active")) {
    changeToMorse();
  } else changeToEnglish();
  swapInput();
};

const changeToMorse = () => {
  engOrMorse.forEach(
    (html) =>
      (html.innerHTML = ". -. --. .-.. .. ... .... /--- .-. / -- --- .-. ... .")
  );
  desc.forEach(
    (html) =>
      (html.innerHTML =
        "- .... .. ... / .. ... / .- / - .-. .- -. ... .-.. .- - --- .-. / ..-. --- .-. / . -. --. .-.. .. ... .... / .. -. - --- / -- --- .-. ...  / ;-.-. --- -.. . / --- .-. / -- --- .-. ... . / -.-. --- -.. . / .. -. - --- / . -. --. .-.. .. ... ....")
  );
  foot.forEach(
    (html) =>
      (html.innerHTML =
        "-.-. ..- .-. .-. . -. - .-.. -.-- / ... ..- .--. .--. --- .-. - ... / .- .-.. .-.. / -- --- .-. ... . / -.-. --- -.. . / -.-. .... .- .-. .- -.-. - . .-. ...")
  );
  foot2.forEach(
    (html) =>
      (html.innerHTML =
        ". -. --. .-.. .. ... .... / -- ..- ... - / ... - .- .-. - / .-- .. - .... / .- / .-.. . - - . .-. / --- .-. / -. ..- -- -... . .-. --..--- / -- --- .-. ... . / -- ..- ... - / ... - .- .-. - / .-- .. - .... / .- / .-.-.- / --- .-. / -....-")
  );
  label.forEach(
    (html) =>
      (html.innerHTML =
        ". -. - . .-. / . -. --. .-.. .. ... .... / --- .-. / -- --- .-. ... . / -.-. --- -.. .")
  );
  btnText.forEach((html) => (html.innerHTML = "-- .- --. .. -.-."));
  legText.forEach(
    (html) => (html.innerHTML = "-- --- .-. ... . / .-.. . --. . -. -..")
  );
};

const changeToEnglish = () => {
  engOrMorse.forEach((html) => (html.innerHTML = "English or Morse"));
  desc.forEach(
    (html) =>
      (html.innerHTML =
        "This is a translator for English into Morse Code or Morse Code into English")
  );
  foot.forEach(
    (html) => (html.innerHTML = "Currently supports all morse code characters")
  );
  foot2.forEach(
    (html) =>
      (html.innerHTML =
        "English must start with a letter or number, Morse must start with a . or -")
  );
  label.forEach((html) => (html.innerHTML = "Enter English or Morse Code"));
  btnText.forEach((html) => (html.innerHTML = "Magic"));
  legText.forEach((html) => (html.innerHTML = "Morse Legend"));
};

const swapInput = () => {
  let firstOutputValue = mainOutput.innerHTML;
  let swapInput = input.value;
  console.log(firstOutputValue);
  console.log(swapInput);
  input.value = firstOutputValue;
  console.log(input.value);
  translatorFunction(firstOutputValue);
};
