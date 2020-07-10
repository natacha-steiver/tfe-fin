import React,{Component} from 'react'
import {solutionsRefEx} from '../../../../ajax'
import { Router, Route, browserHistory, IndexRoute} from 'react-router'
import {withRouter} from 'react-router-dom'
import axios from 'axios';
import { FETCH_SOLUTION_EX} from "../../../../redux/constantes/index";
import Test from '../../../test/index'


//ajout nom dans DB ok
class SoluEx extends Component{

  constructor(props){
    super(props)
    this.state={
      id: '',
      term: '',
      editDisabled: false,
      solutions: [],
      exercices:[]
    }


  }
  componentDidMount(){



    this.getAll()
  }












  getAll(){
    solutionsRefEx().then(
      data => {
        this.setState(
        {

          solutions: data.donnees.solutionsRef,
          exercices: data.donnees.exRef

        }
      ),console.log(this.state.items)
      }
    )
  }


  render() {
const data=this.state.solutions

  return (
      <div>
      <h3>tous les exercices</h3>
      <div>

          <button  onClick={()=>{
            axios.get(`api/solutionsEx`)
              .then(res => {

                  console.log(res);

                  }).catch(error => {
                  throw(error);
                });

          }}>fetchSol</button>



  {

  console.log( this.state.solutions.map(item=>{
      return item
    }),this.state.exercices.map(item=>{
        return item
      }))



  }


      </div>


  </div>
  );
}



}

export default SoluEx
