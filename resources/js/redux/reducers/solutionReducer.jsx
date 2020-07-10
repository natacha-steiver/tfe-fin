// src/js/reducers/index.js

import { ADD_SOLUTION,DELETE_SOLUTION,FETCH_SOLUTION,UPDATE_SOLUTION } from "../constantes/index";


export default function solutionReducer(state = [], action) {
  switch (action.type) {
    case ADD_SOLUTION:
    return [...state,action.payload];
    case DELETE_SOLUTION:
    return state.filter(solution => solution._id !== action.payload._id);
    case UPDATE_SOLUTION:
    const indexOfSolution = state.findIndex(solution => solution._id === action.payload._id);
    //console.log(JSON.stringify(state)+'test')
    //console.log(state.findIndex(solution => solution.id === action.payload._id))
    //const indexOfSolution =2
    let newState = [...state];
    newState[indexOfSolution] = action.payload;
    return newState;

    case FETCH_SOLUTION:
    return action.solutions;
    default:
    return state;
  }
}
