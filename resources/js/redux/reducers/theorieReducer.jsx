// src/js/reducers/index.js

import { ADD_THEORIE,DELETE_THEORIE,FETCH_THEORIE,UPDATE_THEORIE } from "../constantes/index";


export default function theorieReducer(state = [], action) {
  switch (action.type) {
    case ADD_THEORIE:
    return [...state,action.payload];
    case DELETE_THEORIE:
    return state.filter(theorie => theorie._id !== action.payload._id);
    case UPDATE_THEORIE:
    const indexOfTheorie = state.findIndex(theorie => theorie._id === action.payload._id);
    let newState = [...state];
    newState[indexOfTheorie] = action.payload;
    return newState;

    case FETCH_THEORIE:
    return action.theories;
    default:
    return  state;
  }
}
