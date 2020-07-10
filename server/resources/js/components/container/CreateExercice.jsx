// CreateSolution.js
// SolutionList.js

import React from 'react';
import { connect } from 'react-redux';
import ExerciceAdd from './addEx';
import { deleteExercice} from '../../redux/actions';
import { updateExercice} from '../../redux/actions';
import { createExercice } from '../../redux/actions';
import { fetchAllExercices } from '../../redux/actions';

function NewExercice({onAddExercice,onFetch }) {

  return (
    <div>


          <ExerciceAdd  onAddExercice={ onAddExercice } onFetch={onFetch} />

    </div>
  );
}

const mapDispatchToProps = dispatch => {

  return {

    onAddExercice: (type,ennonce,titre) => {
      dispatch(createExercice(type,ennonce,titre));
    },
    onFetch:()=>{
      dispatch(fetchAllExercices())

    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(NewExercice);
