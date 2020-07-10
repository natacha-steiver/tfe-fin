import React,{Component} from 'react'
import {getList,deleteEx,storeEx,updateEx,showOneEx} from '../../../../ajax'
import { Router, Route, browserHistory, IndexRoute} from 'react-router'
import {withRouter} from 'react-router-dom'
import CreateExercice from '../../../container/createExercice';
import ExerciceList from '../../../container/ExerciceList';
import '../../../../../assets/sass/backend.scss';
import '../../../../../assets/sass/grid.min.css'
class Exercice extends Component{


  render() {
    return(
      <div class="container">
      <CreateExercice/>
      <ExerciceList/>

      </div>
    );
  }


}

export default Exercice
