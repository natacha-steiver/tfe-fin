// SolutionList.js

import React from 'react';
import { connect } from 'react-redux';
import Solution from '../backend/exercices/delete/solution';
import { deleteSolution } from '../../redux/actions';
import { updateSolution } from '../../redux/actions';
import { fetchAllSolutions } from '../../redux/actions';

function SolutionList({ solutions, onDelete,onUpdate,onFetch,hash,langages }) {

  return (
    <div>
    <h3 style={{marginTop:"2em"}}>modifies ou supprimes une solution</h3>
{/*
      <button className="btn btn-primary" onClick={()=>onFetch()}>list update </button>*/}
      {
        solutions.map((solution,index )=> {
        return (

          <Solution solution={ solution } hash={hash} onDelete={ onDelete } onUpdate={onUpdate} key={solution._id} langages={langages} />
        );
      })}

    </div>
  );
}

const mapStateToProps = state => {
  {/*utilisé uniquement pour faire le map au dessus et undefined state (solutions correspond au props)*/}


  return {
    solutions: state.solutions,
    langages: state.langages,
    hash: state.router.location.hash,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deleteSolution(id))
    },
    onUpdate: (id,type,solution,ref) => {
      dispatch(updateSolution(id,type,solution,ref))
    },
    onFetch: () => {
      dispatch(fetchAllSolutions())
    },

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SolutionList);
