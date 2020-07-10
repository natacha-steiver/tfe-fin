import React,{Component} from 'react'
import {getList,deleteEx,storeEx,updateEx,showOneEx} from '../../../../ajax'
import { Router, Route, browserHistory, IndexRoute} from 'react-router'
import {withRouter} from 'react-router-dom'
import CreateSolution from '../../../container/createSolution';
import SolutionList from '../../../container/SolutionList';
import '../../../../../assets/sass/backend.scss';
import '../../../../../assets/sass/grid.min.css'
class Solution extends Component{


  render() {
    return(
      <div class="container">
      <h3 className="titre">Solutions</h3>
      <CreateSolution/>
        
      <SolutionList/>

      </div>
    );
  }


}

export default Solution
