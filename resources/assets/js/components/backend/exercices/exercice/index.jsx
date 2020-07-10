import React,{Component} from 'react'
//import {getList,storeSite} from './ajax'
import { Router, Route, browserHistory, IndexRoute} from 'react-router'
import {withRouter} from 'react-router-dom'
import Add from '..//add/index'
import Update from '../update/index'
import Delete from '../delete/index'
class Exercice extends Component{


    render() {


return(

  <div>
  <h3>exercices</h3>
  <Add/>
  <Update/>
  <Delete/>
  </div>

);



}



}

export default Exercice
