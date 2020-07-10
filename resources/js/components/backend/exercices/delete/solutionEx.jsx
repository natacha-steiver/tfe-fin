

import React, { useState }  from 'react';
import store from "../../../../redux/store"
import Icon from '@mdi/react'
import {solutionsRefEx} from '../../../../ajax'
import {  mdiDeleteForever, mdiCheck  } from '@mdi/js';
const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',
  margin: '.75rem auto',
  padding: '.6rem 1rem',
  maxWidth: '500px',
  borderRadius: '7px'
};
window.store=store;
export default ({ solutionEx: { solutionsRef,exRef, _id }}) => {
  const [solNew, setSol] = useState('');
const solutionExFetch=()=>{
  solutionsRefEx().then(
    data => {
      const result=data

        setSol(result)

      },    () => {
          console.log(solNew)

          }


  )
}


  return (
    <div style={ styles }>

      <p>{solutionsRef.map((el,i)=>{
        return <li key={i}>el</li>
      })}</p>


<div>
{
solutionsEx
}
</div>






    </div>
  );
};
