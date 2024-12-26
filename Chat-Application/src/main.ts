import './style.css'
import { submit } from './modules/module.ts'
import { clearBtn } from './modules/module.ts'
import { sendMessage } from './html-ts/node.ts'
import { clearMessageBox} from './html-ts/node.ts'

submit.addEventListener("click", (e) => {
  e.preventDefault()
  sendMessage()
})

clearBtn.addEventListener("click", (e) => {
  e.preventDefault()
  clearMessageBox()
})