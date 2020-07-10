// CreateSolution.js

import { connect } from 'react-redux';
import { createTheorie } from '../../redux/actions';
import { fetchAllTheories } from '../../redux/actions';
import NewTheorie from '../backend/exercices/add/NewTheorie';




const mapStateToProps = state => {
  {/*utilisé uniquement pour faire le map au dessus et undefined state (solutions correspond au props)*/}


  return {
    langages: state.langages,

  };
};


const mapDispatchToProps = dispatch => {

  return {

    onAddTheorie: (titre,texte,image,video,langage) => {
      dispatch(createTheorie(titre,texte,image,video,langage));
    },
    onFetch: () => {
      dispatch(fetchAllTheories());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTheorie);
