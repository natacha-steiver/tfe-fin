// SolutionList.js

import React from 'react';
import { connect } from 'react-redux';
import Langage from '../backend/exercices/delete/langage';
import { deleteLangage } from '../../redux/actions';
import { updateLangage } from '../../redux/actions';
import { fetchAllLangages } from '../../redux/actions';

function LangageList({ langages, onDelete,onUpdate,onFetch }) {

  return (
    <div>

      <h3 style={{marginTop:"2em"}}>modifies ou supprimes un langage</h3>
      {
        langages.map((langage,index )=> {
        return (

          <Langage langage={langage } onDelete={ onDelete } onUpdate={onUpdate} key={langage._id} />
        );
      })}

    </div>
  );
}

const mapStateToProps = state => {
  {/*utilisé uniquement pour faire le map au dessus et undefined state (solutions correspond au props)*/}


  return {
    langages: state.langages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deleteLangage(id))
    },
    onUpdate: (id,image,langage) => {
      dispatch(updateLangage(id,image,langage))
    },
    onFetch: () => {
      dispatch(fetchAllLangages())
    }


  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LangageList);
