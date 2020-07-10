import React,{Component} from 'react'
//import {getList,storeSite} from './ajax'
import { Router, Route, browserHistory, IndexRoute} from 'react-router'
import {withRouter} from 'react-router-dom'
import Exercice from '../backend/exercices/exercice/index'


class Admin extends Component{


    render() {


return(
  <div>
  <h2>01 <span> - Administration</span></h2>
  <div>

  <Exercice/>

  </div>
  </div>
);



}



}

export default Admin
