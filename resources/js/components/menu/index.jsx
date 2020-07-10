import React, { useState,  forwardRef  } from 'react';
import ReactDOM from "react-dom";

//import SoluEx from '../backend/exercices/delete/soluEx';
import SolutionListe from '../frontend/apprendre/pratique/solutionRedux';
import {logoutUser} from '../../ajax'

import { Component, useRef } from "react";
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Grid from '@material-ui/core/Grid';

import {getMenu} from '../../ajax';
import Test from '../test/index';
import Ide from '../frontend/apprendre/ide/index';

import '../../../assets/sass/app.min.css'
import Login from '../login/index';
import LoginUser from '../login/loginUser';
import RegisterUser from '../register/registerUser';
import TheorieListe from '../frontend/apprendre/theorie/menu';
import ExerciceListe from '../frontend/apprendre/pratique/menu';
import ExerciceFront from '../frontend/apprendre/pratique/index';

import Admin from '../admin/index';
import CreateExercice from '../container/createExercice';
import ExerciceList from '../container/ExerciceList';


import Solution from '../backend/crud/solution/index'


import { Route,Link, Switch,BrowserRouter as Router } from 'react-router-dom';
let drawerWidth=""
if(window.screen.width<768){
drawerWidth = "100%";
}else{
 drawerWidth = 240;

}

const deconnexion=()=>{
  logoutUser()

}
const useStyles = makeStyles(theme => ({
  root: {
    display: 'block',


  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
  //  marginRight: theme.spacing(4),


  },
  iconMenu: {
    fontSize:50


  },

  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function Menu() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function removeItem(sKey, sPath, sDomain) {
      document.cookie = encodeURIComponent(sKey) +
                    "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" +
                    (sDomain ? "; domain=" + sDomain : "") +
                    (sPath ? "; path=" + sPath : "");
  }

  return (
    <section id="contentMain">




    <div className={classes.root}>
      <CssBaseline />
    <div>
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar style={{backgroundColor:"#fff"}}>
        <IconButton
          color="default"

          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon className={clsx(classes.iconMenu)}/>
        </IconButton>

        <aside  className="container">

                  <h1>CODE<span>GAME</span></h1>



        <button style={{float:'right'}}
>

<Link to="/login_user" onClick={()=>{  document.location.reload(true);
    window.location.href = '/login_user';}}> Se connecter</Link>




</button>
<button style={{float:'right'}} onClick={()=>{deconnexion();removeItem("tokenTxt");}}>logout</button>
        <button style={{float:'right'}}
>

<Link to="/register_user"  onClick={()=>{  document.location.reload(true);
    window.location.href = '/register_user';}}>s'inscrire</Link>

</button>

        </aside>

      </Toolbar>
    </AppBar>
    </div>

      <Router basename="/">
  <div>
  <h2 id="titrePrincipal"  >          <Link to={ `/apprendre` } onClick={()=>{  document.location.reload(true);
                window.location.href = '/apprendre';}} style={{color:'#fff',textDecoration:"none"}}>Conçevez votre propre app</Link></h2>
  <div >
  <Drawer
    className={classes.drawer}
    variant="persistent"
    anchor="left"
    open={open}
    classes={{
      paper: classes.drawerPaper,
    }}

  >

  <div className={classes.drawerHeader}>
    <IconButton onClick={handleDrawerClose}>
      {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
    </IconButton>
  </div>
  <Divider />
  <List component="nav" className={classes.root} aria-label="Menu principal" id="menuPrincipal">


    <ListItem button className="hightlight">


         <Link to={ `/login` }>
         <ListItemText primary="Administration" />
         </Link>

    </ListItem>





          <ListItem button className="hightlight">

          <Link to={ `/apprendre` } onClick={()=>{  document.location.reload(true);
              window.location.href = '/apprendre';}}>
           <ListItemText primary="Apprendre" />
          </Link>



    </ListItem>







                      <ListItem button className="hightlight">

                      <Link to={ `/entrainement` } onClick={()=>{  document.location.reload(true);
                          window.location.href = '/entrainement';}}>
                   <ListItemText primary="S'entrainer" />
                      </Link>


                      </ListItem>










                            <ListItem button className="hightlight">

                            <Link to={ `/ide` }>
                             <ListItemText primary="IDE" />
                            </Link>



                      </ListItem>


                                                  <ListItem button className="hightlight">

                                                  <Link to={ `/login_user` }>
                                                   <ListItemText primary="Se connecter (utilisateur)" />
                                                  </Link>



                                            </ListItem>







  </List>

  </Drawer>
  </div>

              <Switch>





  <Route  exact path="/admin"  render={() =>           <Admin/>}/>


  <Route exact path="/login"  render={() =>        <Login/>}/>
  <Route exact path="/apprendre"  render={() =>     <TheorieListe />}/>




                <Route exact path="/entrainement"  render={() => <ExerciceListe/>}/>




  <Route exact path="/login_user"  render={() =>        <LoginUser/>}/>

  <Route exact path="/register_user"  render={() =>      <div style={{position:"relative",top:"53rem"}}>  <RegisterUser /></div>}/>




                <Route path="/ide">
                  <Ide />
                </Route>



              </Switch>
  </div>

          </Router>



    </div>
        </section>
  );
}
