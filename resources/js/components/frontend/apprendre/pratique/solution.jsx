

import React, { useState }  from 'react';
import store from "../../../../redux/store"
import Test from "../../../test"
import { fetchAllSolutions } from '../../../../redux/actions';

const styles = {
  borderBottom: '2px solid #eee',
  background: '#fff',
  margin: '.75rem auto',
  padding: '.6rem 1rem',
  maxWidth: '500px',
  borderRadius: '7px',
  position:"relative",
  marginTop:"10em"
};
window.store=store;
export default ({ solution: { type,solution,ref,_id } }) => {
  //console.log(exercice)

  return (
    <div style={ styles }>
    <h2>{ ref}</h2>

    <p>{type}</p>
    <p>{
        solution[0].map((solution,index)=>{
        return(
            <p key={solution._id}>{solution.toString()}</p>
        )
      })
    }</p>

    </div>
  );
};
