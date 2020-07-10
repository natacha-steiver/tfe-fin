

import React, { useState }  from 'react';
import store from "../../../../redux/store"
import Icon from '@mdi/react'
import {  mdiDeleteForever, mdiCheck  } from '@mdi/js';
import { UPDATE_SOLUTION } from "../../../../redux/constantes/index";
import soluImg from '../../../../../../public/images/solution.png';
import  '../../../../../assets/sass/grid.min.css';
import  '../../../../../assets/sass/backend.min.css';
const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',

  padding: '.6rem 1rem',
margin:"1em 0",
  borderRadius: '7px'
};
window.store=store;
export default ({ solution: { type, solution,ref, _id }, onDelete,onUpdate,langages}) => {
  console.log(solution)

  const [typeNew, setType] = useState('');
  const [solutionNew, setSolution] = useState('');
  const [refNew, setRef] = useState('');

  return (
    <div style={ styles } className="form">

    <img id="imgForm" src={soluImg} alt="solution" />

<div className="col-lg-4">
<h2>{ type }</h2>
<p>{ref}</p>
<h2>Solutions:</h2>

{
solution
}


</div>
      <form className="col-lg-8">


<p>!!! Les solutions doivent être séparées par un chiffre de 0 à 9 et un point (liste numérotée) exemple: 1.solution1 2.solution etc...</p>
<label htmlFor="">Solution:</label>

    <textarea
      cols="19"
      rows="8"
      placeholder="Solution"
      className="form-control"
      name="solutions"
       onChange={event => setSolution(event.target.value)}
      defaultValue={
          solution}>
    </textarea>
    <label htmlFor="">Type:</label>

                <select value={typeNew}   onChange={event => setType(event.target.value)} name="type"  >


              <option value="choose your langage">choose your langage</option>
              {
              langages.map((el,i)=>{
                  return(
                   <option value={el.langage}>  {el.langage }</option>



                  )
                })
              }
              </select>
    <label htmlFor="">ref:</label>
    <input type="text" name="ref"  placeholder={ref}    onChange={event => setRef(event.target.value)}/>


    <Icon path={ mdiDeleteForever }    onClick={() => onDelete(_id)} style={{cursor:"pointer"}}
      title="delete"
      size={2}


      color="red"
    />


          <Icon path={ mdiCheck }   onClick={() => onUpdate(_id,typeNew,solutionNew,refNew)} style={{cursor:"pointer"}}
            title="validate"
            size={2}


            color="green"
          />
      </form>









    </div>
  );
};
