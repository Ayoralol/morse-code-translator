import {translatorFunction} from "./translator.js";

const btn = document.querySelector(".magic__btn");
const swaps = document.querySelectorAll(".changer");
const engOrMorse = document.querySelectorAll(".engormorse");
const desc = document.querySelectorAll(".desc");
const foot = document.querySelectorAll(".foot");
const label = document.querySelectorAll(".label");
const btnText = document.querySelectorAll(".magic__button--text");
const input = document.querySelector(".translate");
const outputs = document.querySelectorAll(".output");
const normOutput = document.querySelector(".output__norm");

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
      (html.innerHTML =
        ". -. --. .-.. .. ... ....&nbsp;&nbsp;--- .-.&nbsp;&nbsp;-- --- .-. ... .")
  );
  desc.forEach(
    (html) =>
      (html.innerHTML =
        "- .... .. ...&nbsp;&nbsp;.. ...&nbsp;&nbsp;.-&nbsp;&nbsp;- .-. .- -. ... .-.. .- - --- .-.&nbsp;&nbsp;..-. --- .-.&nbsp;&nbsp;. -. --. .-.. .. ... ....&nbsp;&nbsp;.. -. - ---&nbsp;&nbsp;-- --- .-. ... .&nbsp;&nbsp;-.-. --- -.. .&nbsp;&nbsp;--- .-.&nbsp;&nbsp;-- --- .-. ... .&nbsp;&nbsp;-.-. --- -.. .&nbsp;&nbsp;.. -. - ---&nbsp;&nbsp;. -. --. .-.. .. ... ....")
  );
  foot.forEach(
    (html) =>
      (html.innerHTML =
        "-.-. ..- .-. .-. . -. - .-.. -.--&nbsp;&nbsp;--- -. .-.. -.--&nbsp;&nbsp;... ..- .--. .--. --- .-. - ...&nbsp;&nbsp;.-&nbsp;&nbsp;- ---&nbsp;&nbsp;--..&nbsp;&nbsp;--- .-.&nbsp;&nbsp;-----&nbsp;&nbsp;- ---&nbsp;&nbsp;----.")
  );
  label.forEach(
    (html) =>
      (html.innerHTML =
        ". -. - . .-.&nbsp;&nbsp;. -. --. .-.. .. ... ....&nbsp;&nbsp;--- .-.&nbsp;&nbsp;-- --- .-. ... .&nbsp;&nbsp;-.-. --- -.. .")
  );
  btnText.forEach((html) => (html.innerHTML = "-- .- --. .. -.-."));
};

const changeToEnglish = () => {
  engOrMorse.forEach((html) => (html.innerHTML = "English or Morse"));
  desc.forEach(
    (html) =>
      (html.innerHTML =
        "This is a translator for English into Morse Code or Morse Code into English")
  );
  foot.forEach((html) => (html.innerHTML = "Currently only supports A-Z, 0-9"));
  label.forEach((html) => (html.innerHTML = "Enter English or Morse Code"));
  btnText.forEach((html) => (html.innerHTML = "Magic"));
};

const swapInput = () => {
  let firstOutputValue = outputs[0].innerHTML.replace(/&nbsp;/g, " ");
  input.value = firstOutputValue;
  translatorFunction();
};
