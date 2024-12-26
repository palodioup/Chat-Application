import './style.css'
import { input } from './modules/module.ts'
import { dialogue } from './modules/module.ts'
import { submit } from './modules/module.ts'

submit.addEventListener("click", (e) => {
  e.preventDefault()
  const toAppend = document.createElement("div")
  toAppend.className = "dialog"
  toAppend.innerHTML = `${input.value}`
  dialogue.appendChild(toAppend)
  input.value = ""
})