import React,{Component} from 'react'
import { Router, Route, browserHistory, IndexRoute} from 'react-router'
import {withRouter} from 'react-router-dom'
import CreateLangage from '../../../container/createLangage';
import LangageList from '../../../container/LangageList';
import '../../../../../assets/sass/backend.scss';
import '../../../../../assets/sass/grid.min.css'
class Langage extends Component{


  render() {
    return(
      <div class="container">
      <CreateLangage/>
      <LangageList/>

      </div>
    );
  }


}

export default Langage
