// src/js/reducers/index.js


import { combineReducers } from 'redux';

import solutions from './solutionReducer';
import langages from './langageReducer';
import { persistReducer } from "redux-persist";
import exercices from './exerciceReducer';
import theories from './theorieReducer';
import { connectRouter } from 'connected-react-router'
import { persistStore, persistCombineReducers } from 'redux-persist'
import { CookieStorage } from 'redux-persist-cookie-storage'
import Cookies from 'cookies-js'
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2"; // ADDED

const rootpersistConfig = {
  key: "root",
  version: "-1",
  debug: true,

  storage: new CookieStorage(Cookies/*, options */),
  stateReconciler: autoMergeLevel2, // ADDED
  timeout:500
}
const rootReducer = (history) => combineReducers({
  router:  connectRouter(history),
  exercices: exercices,
  solutions:  solutions,
  langages: langages,


  theories: theories,
});

export default rootReducer
/*

const rootReducer = (state = {}, action) => {
console.log('Test if rootReducer is ever called')

return {
solutions: solutions(state.solutions, action),
exercices: exercices(state.exercices, action),

}
}


export default rootReducer
*/
