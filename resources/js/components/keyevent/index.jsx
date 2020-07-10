import React from 'react';
import ReactDOM from "react-dom";
import {getList} from '../../ajax'
import "./keyevent.min.css";
import {UnControlled as CodeMirror} from 'react-codemirror2'
import { JSHINT } from 'jshint'
import MoveOffset from "./MoveOffset"
import 'codemirror/addon/lint/lint'
import 'codemirror/addon/lint/javascript-lint'
import 'codemirror/mode/javascript/javascript'
window.JSHINT = JSHINT
const nl2br=require('locutus/php/strings/nl2br')
//ex move
class Keyevent extends React.Component {


  constructor(props){
    super(props)
    this.state={

      solution: "",
      show:true
    }

  }

componentDidMount(){
  this.getAll()
}



getAll(){
  getList().then(
    data => {
      const result=data[0].result.replace(/\\n/g,"<br />")
      this.setState(
      {

        solution:result,

      },    () => {
          console.log(this.state.solution)

          }
      )
    }
  )
}


render(){

  return (
    <div>
    <CodeMirror id="edit1"

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

  //const input = this.state.solution;

//const pattern = "^.*$";
//const replacement = "\n$&";
//const rgx = new RegExp(pattern, 'm');
//const result = String.Empty;

//const match = input.match(rgx);
// Double space all but the first line.

//   const result = input.replace('\n','</br>');

//console.log(result);

  //document.write(this.state.solution )

if(editor.getValue().includes(this.state.solution)){

//affiche composant qui joue perso déplacement en mettant une props a true (!this.state)
  console.log(this.state.solution)
  this.setState({show:false})




}
else{
  console.log('pas ok')
}
    }

}
/>
 <MoveOffset state={this.state.show}/>
</div>
);
}
}

export default Keyevent
