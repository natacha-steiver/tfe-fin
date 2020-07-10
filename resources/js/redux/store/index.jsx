import { createStore,compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from 'axios';
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2"; // ADDED

axios.defaults.withCredentials = true
import { persistStore, persistCombineReducers,persistReducer } from 'redux-persist'
import { CookieStorage } from 'redux-persist-cookie-storage'
import Cookies from 'cookies-js'
import rootReducer from "../reducers/index";
import { fetchAllSolutions } from '../actions/index';
import { fetchAllExercices } from '../actions/index';
import { fetchAllTheories } from '../actions/index';
import { fetchAllLangages } from '../actions/index';
import { fetchAllSolutionsEx } from '../actions/index';

import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
//import { fetchAllAuthentification } from '../actions/index';
import logger from 'redux-logger';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistConfig = {
  key: "root",
  version: "-1",
  debug: true,

  storage: new CookieStorage(Cookies/*, options */),
  stateReconciler: autoMergeLevel2, // ADDED
  timeout:0
}



  {/*
setInterval(()=>{
store.dispatch(fetchAllTheories())
  store.dispatch(fetchAllSolutions())
  store.dispatch(fetchAllExercices())
  store.dispatch(fetchAllLangages())
},100) */}



export const history = createBrowserHistory({
  basename: '/',
})
const persistedReducer = persistReducer(persistConfig,   rootReducer(history));
export const store = createStore(
persistedReducer,
  composeEnhancer(applyMiddleware( routerMiddleware(history),thunk,logger)),
);
export const loginUser = (email,password)=>{


  function readCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for(var i=0;i < ca.length;i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1,c.length);
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
      }
      return null;
  }
const response= axios
  .post(`api/user/login`,{email:email,password:password},{
     headers:{'Content-Type':'application/json',tokenTxt:'ooooo' }    },{withCredentials:true})
  .then(res =>{
    axios.defaults.withCredentials = true
    axios.defaults.xsrfHeaderName = "tokenTxt";
    axios.defaults.xsrfCookieName = "tokenTxt";

//sessionStorage.setItem('test',JSON.stringify(res.data.token))
store.dispatch(fetchAllTheories())
store.dispatch(fetchAllSolutions())
  store.dispatch(fetchAllSolutionsEx())
store.dispatch(fetchAllExercices())
store.dispatch(fetchAllLangages())

 axios.defaults.headers.common['Authorization']  ="Bearer "+res.data.user.token

  console.log(res.config.headers)
    window.location.href = '/apprendre';
if (res.config.headers.tokenTxt == "undefined" ||  res.config.headers.tokenTxt==null ||  res.config.headers.tokenTxt==""){

  return axios
    .post(`api/auth/login`,{email:email,password:password},{
       headers:{'Content-Type':'application/json',"Authorization":"Bearer "+res.data.user.token }    },{withCredentials:true})
.then(res=>{
  console.log(res.config.headers)

})
}


}).catch(error=>{
  console.log(error+" Problème de connexion en cours... mot de passe et/ou login invalide")
}
)


}
  export const login = (email,password)=>{


    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }
  const resp= axios
    .post(`api/auth/login`,{email:email,password:password},{
       headers:{'Content-Type':'application/json',tokenTxt:'ooooo' }    },{withCredentials:true})
    .then(res =>{
      axios.defaults.withCredentials = true
      axios.defaults.xsrfHeaderName = "tokenTxt";
      axios.defaults.xsrfCookieName = "tokenTxt";
  console.log(JSON.stringify(res) )
  //sessionStorage.setItem('test',JSON.stringify(res.data.token))
  store.dispatch(fetchAllTheories())
  store.dispatch(fetchAllSolutions())
    store.dispatch(fetchAllSolutionsEx())
  store.dispatch(fetchAllExercices())
  store.dispatch(fetchAllLangages())

  console.log(res.data.auth)
  //cookie split
  var tokenC=res.config.headers.tokenTxt.replace('j:{"type":"bearer","token":','').split(",",1,res.config.headers.tokenTxt.length-1)
  //var tokenC=res.config.headers.tokenTxt

  localStorage.setItem('tokenc',tokenC)
  localStorage.setItem('tokenD',res.config.headers.tokenTxt)

  localStorage.setItem("tokenn",res.data.user.token)
  //document.cookie =axios.defaults.headers['xsrfCookieName']
  //localStorage.setItem("n",JSON.stringify(document.cookie))
  localStorage.setItem("tokn",res.data.user.token)
  //axios.defaults.headers.common['Authorization']  =`Bearer ${tokenC}`
   axios.defaults.headers.common['Authorization']  ="Bearer "+res.data.user.token
  //console.log(res.config.headers)
    console.log(res.config.headers)
    window.location.href = '/admin#/solutions';
  if (res.config.headers.tokenTxt == "undefined" ||  res.config.headers.tokenTxt==null ||  res.config.headers.tokenTxt==""){

    return axios
      .post(`api/auth/login`,{email:email,password:password},{
         headers:{'Content-Type':'application/json',"Authorization":"Bearer "+res.data.user.token }    },{withCredentials:true})
  .then(res=>{
    console.log(res.config.headers)

  })
  }
  /*

  return axios.get('api/solutions',{
    headers:{'Content-Type':'application/json','Authorization':`${localStorage.getItem("tokenn")}`}
      })
   */

  //var token= res.data


  }).catch(error=>{
    console.log(error+" Problème de connexion en cours... mot de passe et/ou login invalide")
  }
  )


}





/*

store.dispatch(fetchAllTheories())
store.dispatch(fetchAllSolutions())
store.dispatch(fetchAllExercices())

 */





export const persistor = persistStore(store,[{ manualPersist: true }]  )

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

export default () => {
  let store = createStore(
    rootReducer(history),
    composeEnhancer(applyMiddleware( routerMiddleware(history),thunk)),
  );


let persistor = persistStore(store, [{ manualPersist: true }])
store.persistor = persistor
if (module.hot) {
  module.hot.accept('../reducers/index', () => {
    // This fetch the new state of the above reducers.
    const nextRootReducer = require('../reducers/index').default
    store.replaceReducer(
      persistReducer(persistConfig, nextRootReducer)
    )
      store.persistor.persist()
  })
}
  return { store, persistor }
}
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
if(readCookie('tokenTxt') !=null){
  store.dispatch(fetchAllSolutions())
  store.dispatch(fetchAllExercices())
  store.dispatch(fetchAllLangages())
  store.dispatch(fetchAllTheories())
  {
    /*

    store.dispatch(fetchAllSolutionsEx())
     */
  }

}
