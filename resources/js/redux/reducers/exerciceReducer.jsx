// src/js/reducers/index.js

import { ADD_EXERCICE,DELETE_EXERCICE,FETCH_EXERCICE,UPDATE_EXERCICE,FETCH_SOLUTION_EX } from "../constantes/index";


export default function exerciceReducer(state = [], action) {
  switch (action.type) {
    case ADD_EXERCICE:
    return [...state,action.payload];
    case DELETE_EXERCICE:
    return state.filter(exercice => exercice._id !== action.payload._id);
    case UPDATE_EXERCICE:
    const indexOfExercice = state.findIndex(exercice=> exercice._id === action.payload._id);
    let newState = [...state];
    newState[indexOfExercice] = action.payload;
    return newState;

    case FETCH_EXERCICE:
    return action.exercices;
    case FETCH_SOLUTION_EX:
    return action.solutionsEx;
    default:
    return  state;
  }
}
