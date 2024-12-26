import { input} from '../modules/module';
import { dialogue } from "../modules/module";

export const sendMessage = () => {
  const toAppend = document.createElement("div");
  toAppend.className = "dialog";
  toAppend.innerHTML = `${input.value}`;
  dialogue.appendChild(toAppend);
  input.value = "";
};

export const clearMessageBox = () => {
  dialogue.innerHTML = ""
  input.value = ""
}