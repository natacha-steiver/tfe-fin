import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


import Test from '../../../test'
import { connect } from 'react-redux';
import SolutionFront from './solution';
import { fetchAllSolutions } from '../../../../redux/actions';


import { Route,Link, Switch,BrowserRouter as Router } from 'react-router-dom';




function SolutionListe({ solutions,onFetch}) {


  return (
    <div>



    {solutions.map((solution)=>{

  return (
<div>

          <SolutionFront  solution={solution} key={solution._id} refSolution={solution.ref} />



</div>

);
      })}


      </div>


    );
  }


  const mapStateToProps = state => {

    return {
      solutions: state.solutions,


    };
  };


  const mapDispatchToProps = dispatch => {

    return {


      onFetch:()=>{
        dispatch(fetchAllSolutions())

      }
    };
  };


  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SolutionListe);
