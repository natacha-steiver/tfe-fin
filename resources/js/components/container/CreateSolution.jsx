// CreateSolution.js

import { connect } from 'react-redux';
import { createSolution } from '../../redux/actions';
import { fetchAllSolutions } from '../../redux/actions';
import { fetchAllLangages } from '../../redux/actions';


import NewSolution from '../backend/exercices/add/NewSolution';

const mapStateToProps = state => {
  {/*utilisé uniquement pour faire le map au dessus et undefined state (solutions correspond au props)*/}


  return {
    langages: state.langages,

  };
};

const mapDispatchToProps = dispatch => {

  return {

    onAddSolution: solution => {
      dispatch(createSolution(solution));
    },
    onFetch: ()=>{
      dispatch(fetchAllSolutions());

    },

    onFetchLangage: ()=>{
      dispatch(fetchAllLangages());

    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewSolution);
