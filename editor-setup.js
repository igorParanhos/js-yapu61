import pell from 'pell'
import { EMAIL_HTML_STRING } from './constants'


export const createEditor = (element, callback) =>{
  const self = {}

  self.html = '';
  self.setHtml = html => { self.html = html }
  self.getResult = _ => EMAIL_HTML_STRING.replace('##content##', self.html);
  self.initialValue

  self.ref = pell.init({
    element: element,
    onChange: html => callback(EMAIL_HTML_STRING.replace('##content##', html)) || self.setHtml,
    defaultParagraphSeparator: 'div',
    styleWithCSS: false,
    actions: [
      'bold',
      'italic',
      'underline',
      'strikethrough',
      'heading1',
      'heading2',
      'olist',
      'ulist',
      'line',
      'link',
      'image',
      {
        icon: 'botão',
        title: 'Botão',
        result: _ => {
          const title = window.prompt('Título do botão');
          const url = window.prompt('URL');
          document.execCommand('insertHTML', true, `
            <a href="${url}" style="font-size: 16px;
            color: #fff; 
            display: inline-block;
            background: #18ca77;
            border-radius: 3px;
            padding: 10px 20px;">${title}</a>
          `)
        }
      }
    ],
    classes: {
      actionbar: 'pell-actionbar',
      button: 'pell-button',
      content: 'pell-content',
      selected: 'pell-button-selected'
    }
  })

  self.setValue = value => {
    //self.ref.content.focus()
    self.ref.content.innerHTML = value
    const res = EMAIL_HTML_STRING.replace('##content##', value)
    callback(res)
  }

  return self;
} 