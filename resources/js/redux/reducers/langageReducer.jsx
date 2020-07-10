// src/js/reducers/index.js

import { ADD_LANGAGE,DELETE_LANGAGE,FETCH_LANGAGE,UPDATE_LANGAGE } from "../constantes/index";


export default function langageReducer(state = [], action) {
  switch (action.type) {
    case ADD_LANGAGE:
    return [...state,action.payload];
    case DELETE_LANGAGE:
    return state.filter(langage => langage._id !== action.payload._id);
    case UPDATE_LANGAGE:
    const indexOfLangage = state.findIndex(langage => langage._id === action.payload._id);
    //console.log(JSON.stringify(state)+'test')
    //console.log(state.findIndex(langage => langage.id === action.payload._id))
    //const indexOflangage =2
    let newState = [...state];
    newState[indexOfLangage] = action.payload;
    return newState;

    case FETCH_LANGAGE:
    return action.langages;
    default:
    return state;
  }
}
