// CreateSolution.js

import { connect } from 'react-redux';
import { createLangage } from '../../redux/actions';
import NewLangage from '../backend/exercices/add/NewLangage';


const mapDispatchToProps = dispatch => {

  return {

    onAddLangage: langage => {
      dispatch(createLangage(langage));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewLangage);
