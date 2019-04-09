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
        icon: '<span style="font-family: monospace;color: #08AA63; font-size: 14px; font-weight: 900;"><i>b</i></span>',
        title: 'Botão',
        result: _ => {
          const title = window.prompt('Título do botão');
          const url = window.prompt('URL');
          document.execCommand('insertHTML', true, `
            <a href="${url}" style="font-size: 16px;
            color: #fff; 
            display: inline-block;
            background: #08AA63;
            border-radius: 3px;
            padding: 10px 20px;">${title}</a>
          `)
        }
      },
      {
        icon: '<span style="font-family: monospace;color: #18ca77; font-size: 14px; font-weight: 900;"><i>b</i></span>',
        title: 'Botão2',
        result: _ => {
          const title = window.prompt('Título do botão');
          const url = window.prompt('URL');
          document.execCommand('insertHTML', true, `
            <div style="display: block">
              <div align="center" class="m_8064063849968191805button-container m_8064063849968191805center" style="padding-right:10px;padding-left:10px;padding-top:10px;padding-bottom:10px">
                <a href="${url}" style="text-decoration:none;background-color:transparent;border-radius:3px;max-width:160px;width:auto;border:2px solid #18ca77;padding:10px 20px 10px 20px;display:block;text-decoration:none;text-align:center;color:#18ca77;background-color:transparent;font-size:13px;font-family:'Roboto',Tahoma,Verdana,Segoe,sans-serif" target="_blank" data-saferedirecturl="https://www.google.com/url?q=${url}&amp;source=gmail&amp;ust=1554863791687000&amp;usg=AFQjCNHQ5nOFcQQNJ6V1IU-FSgHZE3-bNA">${title}</a>
              </div>
            </div>
          `)
        }
      },
      {
        icon: '<span style="font-family: monospace;color: #756AF5; font-size: 14px; font-weight: 900;"><i>b</i></span>',
        title: 'Botão2',
        result: _ => {
          const title = window.prompt('Título do botão');
          const url = window.prompt('URL');
          document.execCommand('insertHTML', true, `
            <div style="display: block">
              <div align="center" class="m_8064063849968191805button-container m_8064063849968191805center" style="padding-right:10px;padding-left:10px;padding-top:10px;padding-bottom:10px">
                <a href="${url}" style="text-decoration:none;background-color:transparent;border-radius:3px;max-width:160px;width:auto;border:2px solid #756AF5;padding:10px 20px 10px 20px;display:block;text-decoration:none;text-align:center;color:#756AF5;background-color:transparent;font-size:13px;font-family:'Roboto',Tahoma,Verdana,Segoe,sans-serif" target="_blank" data-saferedirecturl="https://www.google.com/url?q=${url}&amp;source=gmail&amp;ust=1554863791687000&amp;usg=AFQjCNHQ5nOFcQQNJ6V1IU-FSgHZE3-bNA">${title}</a>
              </div>
            </div>
          `)
        }
      },
      {
        icon: '<span style="font-family: monospace;color: #FFAB40; font-size: 14px; font-weight: 900;"><i>b</i></span>',
        title: 'Botão2',
        result: _ => {
          const title = window.prompt('Título do botão');
          const url = window.prompt('URL');
          document.execCommand('insertHTML', true, `
            <div style="display: block">
              <div align="center" class="m_8064063849968191805button-container m_8064063849968191805center" style="padding-right:10px;padding-left:10px;padding-top:10px;padding-bottom:10px">
                <a href="${url}" style="text-decoration:none;background-color:transparent;border-radius:3px;max-width:160px;width:auto;border:2px solid #FFAB40;padding:10px 20px 10px 20px;display:block;text-decoration:none;text-align:center;color:#FFAB40;background-color:transparent;font-size:13px;font-family:'Roboto',Tahoma,Verdana,Segoe,sans-serif" target="_blank" data-saferedirecturl="https://www.google.com/url?q=${url}&amp;source=gmail&amp;ust=1554863791687000&amp;usg=AFQjCNHQ5nOFcQQNJ6V1IU-FSgHZE3-bNA">${title}</a>
              </div>
            </div>
          `)
        }
      },
    ],
    classes: {
      actionbar: 'pell-actionbar',
      button: 'pell-button',
      content: 'pell-content',
      selected: 'pell-button-selected'
    }
  })

  self.setValue = value => {
    self.ref.content.innerHTML = value
    const res = EMAIL_HTML_STRING.replace('##content##', value)
    callback(res)
  }

  return self;
} 