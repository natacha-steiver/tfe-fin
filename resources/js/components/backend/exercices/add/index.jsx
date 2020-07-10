import React,{Component} from 'react'
import {getList,deleteEx,storeEx,updateEx,showOneEx} from '../../../../ajax'
import { Router, Route, browserHistory, IndexRoute} from 'react-router'
import {withRouter} from 'react-router-dom'
//ajout nom dans DB ok
class Add extends Component{

    constructor(props){
      super(props)
      this.state={
        id: '',
        term: '',
        editDisabled: false,
        items: []
      }
     this.onSubmit= this.onSubmit.bind(this)


    }
    componentDidMount(){



      this.getAll()
    }

    onSubmit(e){
      e.preventDefault()
      storeEx()
    }



    modifier(e){
      e.preventDefault()
/*
let test= document.querySelectorAll('.modifier')


    test.forEach((test) => {
        test.innerHTML='<input type="text" />'

    });

 */

let test= document.querySelectorAll('.modifier')

var placeholder =  document.querySelector('.modifier:nth-of-type(1) p').innerHTML
    test.forEach((test) => {

        test.innerHTML='<input class="input" type="text" placeholder='+placeholder+' />'
        function logKey(event) {
          if (event.key === "Enter") {
           event.preventDefault();
             test.innerHTML=event.target.value
           // Do more work
       }

      }
      test.querySelector('.input').addEventListener('keypress', logKey);
    });



    }

    getAll(){
      getList().then(
        data => {
          this.setState(
          {

            items: [data],

          },    () => {
                console.log(this.state.items)
              }
          )
        }
      )
    }


    render() {
const data=this.state.items
    return (
        <div>
        <h3>Ajoute un exercice:</h3>

        <form action="api/exercice/add" method="POST">
      <label htmlFor="">Solution:</label>
      <input type="text" name="solution"  placeholder={data.solution}/>
      <label htmlFor="">Type:</label>
      <input type="text" name="type"  placeholder={data.imagetype}/>

      <button onSubmit={this.onSubmit}>envoie</button>
        </form>


  <ul>



  </ul>


    </div>
    );
  }


}

export default Add
