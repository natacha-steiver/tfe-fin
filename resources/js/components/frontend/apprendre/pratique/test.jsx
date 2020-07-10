import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SolutionExList from '../../../container/SolutionExList'
import Test from '../../../test/index'
import Ex1 from '../../../test/ex1'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';


import { connect } from 'react-redux';
import ExerciceFront from './index';
import { fetchAllExercices } from '../../../../redux/actions';

import { fetchAllSolutions } from '../../../../redux/actions';

import { Route,Link, Switch,BrowserRouter as Router } from 'react-router-dom';




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
    component="div"
    role="tabpanel"
    hidden={value !== index}
    id={`vertical-tabpanel-${index}`}
    aria-labelledby={`vertical-tab-${index}`}
    {...other}
    >
    {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    wordBreak:"break-all",

    position:'relative',
    top:"51rem",
    listStylePuce:"none"
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    minWidth:"11rem",

  },
  card: {
   width:"15em",
   maxWidth: 345,

 },
 media: {
   height: 140,
 },
}));

function TestListe({ exercices,onFetch,onFetchSolution,solutions,langages}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [langageNew, setLangage] = useState('');
  const [titreNew, setTitre] = useState('');
    const [visibleNew, setVisible] = useState(true);
    const [buttonNew, setButton] = useState('show/hide Katas');
    const [currentLangNew, setcurrentLang] = useState('a');
  //  const childData="j"
  const [soluceNew, setSoluce] = useState('');

    const callbackFunction = (childData) => {
          setcurrentLang(childData)
    }


const ref=  exercices.map((element,index)=>{
  return(
    element.ref
  )
      })
    const soluces
    =solutions.filter(el=>el.ref== ref && el.type==currentLangNew ).map((el,i)=>{
    //const datas=[]
    //datas.push(el.solution,el.type)

    //datas.push({solution:el.solution,type:el.type})

      return (

    //datas
    el.solution

    )})
//setSoluce(soluce)

  {/* récupérer redux langages!*/}
  //const langages=[{langage:"html"},{langage:"javascript"},{langage:"react"},{langage:"css"},{langage:"python"}]



  return (


    <Router >



            <Link to="/ex1">
            test
            </Link>












{
  exercices.map((exercice,index )=> {

    return (
      <div key={index}>
      <Switch >
<Route exact path="/ex1">
<Ex1/>

</Route>

    </Switch>
      </div>
        );
      })}








      </Router>



    );
  }


  const mapStateToProps = state => {

    return {
      exercices: state.exercices,
      solutions:state.solutions,
      langages:state.langages


    };
  };


  const mapDispatchToProps = dispatch => {

    return {


      onFetch:()=>{
        dispatch(fetchAllExercices())

      },
      onFetchSolution:()=>{
        dispatch(fetchAllSolutions())

      }
    };
  };


  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TestListe);
