import { createEditor } from './editor-setup.js'
import { copyToClipboard } from './utils'

import './style.scss';
import './button.scss';

// Elements
const contentInput = document.querySelector('#content')
const button = document.querySelector('#actionbutton')
const copyButton = document.querySelector('#copy')
const resultDiv = document.querySelector('#result')
const rawResultDiv = document.querySelector('#rawhtml')
const feedback = document.querySelector('#feedback')

const renderResult = content => {
  if (!content || content == '')
    return;
  resultDiv.innerHTML = content;
  rawResultDiv.innerText = content;
}

const initialContent = `
  Olá,<br><br>
  Digite o conteúdo do seu email aqui...
  <br><br>
  Att,<br>
  Diretoria de Inovação MobJr.
`

const editor = createEditor(contentInput, renderResult)
editor.setValue(initialContent)

copy.addEventListener('click', e => {
  try {
    copyToClipboard(rawResultDiv.innerText)
    feedback.classList.remove('hidden')
    setTimeout(_ => {
      feedback.classList.add('hidden')
    }, 2000)
  }
  catch(e) {}
})