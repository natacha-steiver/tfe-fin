// SolutionList.js

import React from 'react';
import { connect } from 'react-redux';
import SolutionEx from '../backend/exercices/delete/solutionEx';

import { fetchAllSolutionsEx } from '../../redux/actions';

function SolutionExList({ exercices,onFetch }) {

  return (
    <div>

      <button className="btn btn-primary" onClick={()=>onFetch()}>list </button>
      {
        exercices.map((solutionEx,index )=> {
        return (

          <SolutionEx solutionEx={ solutionEx }   key={solutionEx._id} />
        );
      })}

    </div>
  );
}

const mapStateToProps = state => {
  {/*utilisé uniquement pour faire le map au dessus et undefined state (solutions correspond au props)*/}


  return {
    exercices: state.exercices ,

  };
};

const mapDispatchToProps = dispatch => {
  return {

    onFetch: () => {
      dispatch(fetchAllSolutionsEx())
    },

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SolutionExList);
