import { input } from "../modules/module";
import { dialogue } from "../modules/module";
import { errorMsg } from "../modules/module";

export const sendMessage = () => {
  if (input.value === "") {
    errorMsg.innerHTML = "Cannot send empty message";
  } else {
    const toAppend = document.createElement("div");
    toAppend.className = "dialog";
    toAppend.innerHTML = `${input.value}`;
    dialogue.appendChild(toAppend);
    input.value = "";
  }
  setTimeout(() => {
    errorMsg.innerHTML = ``;
  }, 5000);
};

export const clearMessageBox = () => {
  if ((dialogue.innerHTML = ``)) {
    errorMsg.innerHTML = "Message box is already empty";
  } else {
    dialogue.innerHTML = "";
    input.value = "";
  }
};
