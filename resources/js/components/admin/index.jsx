import React,{Component,useState } from 'react'
//import {getList,storeSite} from './ajax'
import {logoutAdmin,getCurrentAdmin} from '../../ajax'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
  import '../../../assets/sass/grid.min.css'
import { HashRouter, Route, NavLink,Link } from 'react-router-dom';


import Solution from '../backend/crud/solution/index'
import Theorie from '../backend/crud/theorie/index'
import Exercice from '../backend/crud/exercice/index'
import Langage from '../backend/crud/langage/index'


import '../../../assets/sass/app.min.css'



import Register from '../register/index'
import RegisterUserAdmin from '../register/registerUserAdmin'

const routes = [


  { path: '/solutions', component:Solution },
  { path: '/exercices', component:Exercice },
  { path: '/theories', component:Theorie},
  { path: '/langages', component:Langage},
  { path: '/register', component:Register },
  { path: '/register_user_backend', component:RegisterUserAdmin },




];

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});
const deconnexion=()=>{
  logoutAdmin()

}


export default function Admin(){




  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function removeItem(sKey, sPath, sDomain) {
      document.cookie = encodeURIComponent(sKey) +
                    "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" +
                    (sDomain ? "; domain=" + sDomain : "") +
                    (sPath ? "; path=" + sPath : "");
  }


  return(
    <div className="main ">


    <HashRouter>
    <div >

    {screen.width<768 &&
<div style={{display:"block"}} className="menu">
<ul>
<li><Link to="/solutions">solutions</Link></li>
<li><Link to="/exercices">exercices</Link></li>
<li><Link to="/langages">langages</Link></li>
<li><Link to="/theories">theories</Link></li>
<li>
<Link to="/gestion des administrateurs">gestion des administrateurs</Link></li>
<li><Link to="/utilisateurs">utilisateurs</Link></li>





</ul>
</div>

    }
{screen.width>=768 &&

  <Paper>


  <Tabs
  value={value}
  onChange={handleChange}
  indicatorColor="primary"
  textColor="primary"
  centered


  >

  <Tab  label="solutions" component={NavLink} exact to="/solutions"  style={{fontSize:".7rem",minWidth:"11%" }}/>



  <Tab label="exercices" component={NavLink} to="/exercices" style={{fontSize:".7rem",minWidth:"11%" }}/>
  <Tab label="langages" component={NavLink} to="/langages" style={{fontSize:".7rem",minWidth:"11%" }} />
<Tab label="theories" component={NavLink} exact to="/theories" style={{fontSize:".7rem",minWidth:"11%" }}/>

  <Tab label="gestion des administrateurs" component={Link} to="/register" style={{fontSize:".7rem",minWidth:"11%" }}/>

  <Tab label="utilisateurs" component={Link} to="/register_user_backend" style={{fontSize:".7rem",minWidth:"11%" }} />





  </Tabs>
  </Paper>
}

<button onClick={()=>{deconnexion();removeItem("tokenTxt");}} >logout</button>









    <section >
    {routes.map(route => <Route {...route} key={route.path} />)}
    </section>
    </div>
    </HashRouter>

    </div>
  );



}
