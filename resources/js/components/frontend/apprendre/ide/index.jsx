import React,{useState} from 'react';
import ReactDOM from "react-dom";
import {UnControlled as CodeMirror} from 'react-codemirror2'
import { JSHINT } from 'jshint'

import 'codemirror/addon/lint/lint'
import 'codemirror/addon/lint/javascript-lint'
import 'codemirror/addon/lint/css-lint'
//import "codemirror/addon/lint/html-lint"
import 'codemirror/addon/lint/lint.css'



import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/xml/xml'

import 'codemirror/mode/css/css'
import 'codemirror/mode/python/python'
import "../../../../../assets/sass/terminal.min.css"

window.JSHINT = JSHINT

class Ide extends React.Component {



    constructor(props){
      super(props)
      this.state={
  tab:[],
        valeur:"",
        solution: "",
        mode:"",
        valeurcss:"",
        valeurhtml:"",
        valeurjs:"",
        valeurpython:"",
        click:false,
        valeur:"",
        currentLanguage:"",
        jsclick:false,
        htmlclick:false,
        langagechoose:false,
        resultat:false,
        voirSolution:false,


      }

}



selectMode(){
    var modeInput = document.getElementById("select");

    var myindex  = modeInput.selectedIndex;
    var modefly = modeInput.options[myindex].text.toLowerCase();

  //  alert(modefly); // This is giving me the exact mode on the screen
        this.setState({mode:modefly},    console.log(this.state.mode +"fct1"))

  //  editor.setOption("mode", modefly);// no change in the mode
  //  CodeMirror.autoLoadMode(editor, modefly);//no change in the mode
    //editor.refresh();
     }

  componentDidUpdate(){
{/*
  if(this.state.mode=='' ){
      this.selectMode()


  }
  */}


      this.test= React.createRef();
    const getGeneratedPageURL = ({ html, css, js,python }) => {
    const getBlobURL = (code, type) => {
      const blob = new Blob([code], { type })
      return URL.createObjectURL(blob)
    }

    const cssURL = getBlobURL(css, 'text/css')
    const jsURL = getBlobURL(js, 'text/babel')
    const pythonURL = getBlobURL(python, 'text/python')

    const source = `
      <html>
        <head>
          ${css && `<link rel="stylesheet" type="text/css" href="${cssURL}" />`}
          ${js && `<script type="text/babel" src="${jsURL}"></script>`}
          <script src="https://cdnjs.cloudflare.com/ajax/libs/brython/3.8.6/brython.js"></script>


        </head>
        <script>

        </script>
        <body onload="brython()" id="corp">
          ${python && `<script type="text/python">
        ${python}

          </script>`}
          ${html || ''}
          <input id="zone">
          <button id="mybutton">click !</button>

        </body>
      </html>
    `

    return getBlobURL(source, 'text/html')
  }

  const url = getGeneratedPageURL({
    html: this.state.valeurhtml ,
    css: this.state.valeurcss,
    python:this.state.valeurpython,
  js:setTimeout(()=>{
    if(this.state.click){
        js:eval(this.state.valeurjs)
    }


},1),

  })

  document.getElementById('iframe').src = url
  }



  render(){

    return (
      <div style={{width:"100%",position:"relative",top:"60rem"}}>


<h3>IDE - Testez vos codes librement</h3>



      <button onClick={()=>{this.setState({htmlclick:false,jsclick:false,resultat:false,langagechoose:true})}}>ton langage</button>

      <button onClick={()=>{this.setState({htmlclick:false,jsclick:false,langagechoose:false,resultat:true})}}>Résultat</button>
      <select name="idLanguage" id="select" onChange={()=>{this.selectMode()}} >
        <option value="0">{this.props.langage}</option>
      <option value="1">text/x-python</option>
      <option value="10">text/javascript</option>
  <option value="5">text/jsx</option>
  <option value="6">text/html</option>
        <option value="7">text/css</option>

      </select>

      <button onClick={()=>{
        this.setState({click: true});
        setTimeout(()=>{
         this.setState({click: false})
      },2000)
    }}>compile</button>
      <br/>




{this.state.langagechoose  &&
  <div>
  <CodeMirror

    value='//choisissez votre mode'
    options={{
      mode: this.state.mode,
      htmlMode: true,
      gutters: ["CodeMirror-lint-markers"],
      lint:true,
      styleActiveLine: true,
      lineNumbers: true
    }}
    style={{width:'100%',height:'50%',marginTop:"2em",position:"relative",top:"57rem"}}
    onChange={(editor, data, value) => {




    const langages =this.state.mode
    switch (langages) {
      case "text/x-python":
  this.setState({valeurpython:  editor.getValue()})
  break;
        case "text/javascript":
  this.setState({valeurjs:  editor.getValue()})
  break;

  case "text/css":
this.setState({valeurcss:  editor.getValue()})
break;

case "text/html":
this.setState({valeurhtml:  editor.getValue()})
break;
case "text/jsx":

const getJS = jsx => Babel.transform(jsx, {
presets: ["es2015"],
plugins: ["transform-react-jsx"]
}).code;

  this.setState({valeurjs:  getJS(editor.getValue())})
break;

      default:

  console.log('default')
       }






  }}


  />


  </div>
}


  <div id="test"></div>
  <iframe ref={this.test} id="iframe" style={{width:"100%",height:"30rem"}}>



  </iframe>



</div>
      );
  }
}
export default Ide
