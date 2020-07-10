import React from 'react';
import ReactDOM from "react-dom";
import {UnControlled as CodeMirror} from 'react-codemirror2'
import { JSHINT } from 'jshint'

import 'codemirror/addon/lint/lint'
import 'codemirror/addon/lint/javascript-lint'
import 'codemirror/mode/javascript/javascript'
window.JSHINT = JSHINT

class Test extends React.Component {



    constructor(props){
      super(props)
      this.state={

        valeur:"",

        valeurcss:"",
      }

    }
  componentDidUpdate(){
      this.test= React.createRef();
    const getGeneratedPageURL = ({ html, css, js }) => {
    const getBlobURL = (code, type) => {
      const blob = new Blob([code], { type })
      return URL.createObjectURL(blob)
    }

    const cssURL = getBlobURL(css, 'text/css')
    const jsURL = getBlobURL(js, 'text/javascript')

    const source = `
      <html>
        <head>
          ${css && `<link rel="stylesheet" type="text/css" href="${cssURL}" />`}
          ${js && `<script src="${jsURL}"></script>`}
        </head>
        <body>
          ${html || ''}
        </body>
      </html>
    `

    return getBlobURL(source, 'text/html')
  }

  const url = getGeneratedPageURL({
    html: this.state.valeurhtml,
    css: this.state.valeurcss,
  js:setInterval(()=>{
    if(this.state.click){
        js:eval(this.state.valeurjs)
    }


},10),

  })

  document.getElementById('iframe').src = url
  }


  render(){

    return (
      <div>
      <CodeMirror id="js"

        value='//crée une fonction pour déplacer ton perso'
        options={{
          mode: 'javascript',
          gutters: ["CodeMirror-lint-markers"],
          lint:true,
          styleActiveLine: true,
          lineNumbers: true
        }}
        style={{width:'100%',height:'50%'}}
        onChange={(editor, data, value) => {




        this.setState({valeurjs:  editor.getValue()})



}

  }
  />
  <CodeMirror

    value='//html'
    options={{
      mode: 'javascript',
      gutters: ["CodeMirror-lint-markers"],
      lint:true,
      styleActiveLine: true,
      lineNumbers: true
    }}
    style={{width:'100%',height:'50%'}}
    onChange={(editor, data, value) => {




    this.setState({valeurhtml: `<h1>hhhh</h1>`})



}

}
/>
<CodeMirror

  value='//css'
  options={{
    mode: 'css',
    gutters: ["CodeMirror-lint-markers"],
    lint:true,
    styleActiveLine: true,
    lineNumbers: true
  }}
  style={{width:'100%',height:'50%'}}
  onChange={(editor, data, value) => {




  this.setState({valeurcss:  editor.getValue()})



}

}
/>
      <iframe ref={this.test} id="iframe" style={{width:"100%",height:"200px"}}>



      </iframe>
</div>
      );
  }
}
export default Test
