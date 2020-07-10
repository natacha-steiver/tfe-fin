import React from 'react';

import { register } from 'register-service-worker'
import { Route,Link, Switch,BrowserRouter as Router,withRouter,NavLink } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import '../assets/sass/app.min.css'
import Exercice from './components/backend/exercices/exercice/index'



import { Component, useRef } from "react";
import CreateSolution from './components/container/createSolution';
import SolutionList from './components/container/SolutionList';



import CreateTheorie from './components/container/createTheorie';
import TheorieList from './components/container/TheorieList';

import CreateExercice from './components/container/createExercice';
import ExerciceList from './components/container/ExerciceList';

import Admin from './components/admin/index'

import Login from './components/login/index'
import Register from './components/register/index'
import Test from './components/test/index'

import Solution from './components/backend/crud/solution/index'
import TheorieListe from './components/frontend/apprendre/theorie/menu';
import ExerciceListe from './components/frontend/apprendre/pratique/menu';



//import Perso from "./components/introduction/perso/index"
import Keyevent from "./components/keyevent/index"
import MoveOffset from "./components/keyevent/MoveOffset"
import Menu from "./components/menu/index"
import RegisterUser from "./components/register/registerUser"
import './App.css';
import { Provider } from 'react-redux'
import {store,persistor,history} from './redux/store'
import { PersistGate } from 'redux-persist/integration/react';

import { fetchAllSolutions } from './redux/actions/index';
import { fetchAllExercices } from './redux/actions/index';
import { fetchAllTheories } from './redux/actions/index';


import { persistStore, persistCombineReducers } from 'redux-persist'
import ReactDOM from "react-dom";
function App(props) {




  return (

<section id="contentMain">

<Menu/>




</section>






    );

}


const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <ConnectedRouter history={history}>
    <> { /* your usual react-router v4/v5 routing */ }
    <Switch>
      <Route    path="/" render={() => (<div>      <App/></div>)} />



      <Route  exact path="/login" render={() =>   <Login/>} />



      <Route   path="/admin" render={() =>   <Admin/>}/>





      <Route exact path="/apprendre" render={() => <TheorieListe />}/>

  <Route exact path="/entrainement" render={() => <ExerciceListe />}/>


      <Route exact path="/register" render={() =>           <Register/>}/>




            <Route exact path="/register_user" render={() =>           <RegisterUser/>}/>







    </Switch>
  </>

    </ConnectedRouter>
  </PersistGate>
  </Provider>,
  rootElement
);

register();
export default App
