import React from 'react';
import ReactDOM from "react-dom";
import {getList} from '../../ajax'
import "./keyevent.min.css";
import {UnControlled as CodeMirror} from 'react-codemirror2'
import { JSHINT } from 'jshint'
import Compteur from "./Compteur"
import 'codemirror/addon/lint/lint'
import 'codemirror/addon/lint/javascript-lint'
import 'codemirror/mode/javascript/javascript'
window.JSHINT = JSHINT

//ex move
class Keyevent extends React.Component {


  constructor(props){
    super(props)
    this.state={

      solution: [],
      show:true
    }

  }

componentDidMount(){
  this.getAll()
}



getAll = () =>{
  getList().then(
    data => {
      this.setState(
      {

        solution:data[0].result,

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
    <CodeMirror

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



  if(editor.getValue()==this.state.solution){
    //affiche composant qui joue perso déplacement en mettant une props a true (!this.state)
    console.log(this.state.solution)
      this.setState({show:false})




      }}

}
/>
 <Compteur state={this.state.show}/>
</div>
);
}
}

export default Keyevent
