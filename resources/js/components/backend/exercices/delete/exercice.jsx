

import React, { useState }  from 'react';
import store from "../../../../redux/store"
import soluImg from '../../../../../../public/images/solution.png';
import  '../../../../../assets/sass/grid.min.css';
import  '../../../../../assets/sass/backend.min.css';
import Icon from '@mdi/react'
import {  mdiDeleteForever, mdiCheck  } from '@mdi/js';
import { UPDATE_EXERCICE } from "../../../../redux/constantes/index";
const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',

  padding: '.6rem 1rem',
margin:"1em 0",
  borderRadius: '7px'
};
window.store=store;
export default ({ exercice: {  ennonce,type,titre,ref, _id }, onDelete,onUpdate,langages }) => {
  //console.log(exercice)

  const [typeNew, setType] = useState('');
  const [ennonceNew, setEnnonce] = useState('');
  const [titreNew, setTitre] = useState('');
  const [refNew, setRef] = useState('');

  return (
    <div style={ styles } className="form">
      <img id="imgForm" src={soluImg} alt="solution" />
      <div className="col-lg-4">
      <h2>{ type }</h2>
      <p>{ ennonce }</p>
    <p>{ titre }</p>
    <p>{ ref }</p>
</div>
      <form className="col-lg-8">
    <label htmlFor="">Ennonce:</label>
    <input type="text" name="ennonce"  placeholder={ennonce}  onChange={event => setEnnonce(event.target.value)}/>
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

    <label htmlFor="">Titre:</label>
    <input type="text" name="titre"  placeholder={titre}    onChange={event => setTitre(event.target.value)}/>


    <label htmlFor="">Ref:</label>
    <input type="text" name="ref"  placeholder={ref}    onChange={event => setRef(event.target.value)}/>

      </form>






      <Icon path={ mdiDeleteForever }    onClick={() => onDelete(_id)} style={{cursor:"pointer"}}
        title="delete"
        size={2}


        color="red"
      />


            <Icon path={ mdiCheck }   onClick={() => onUpdate(
          _id,ennonceNew,typeNew,titreNew,refNew)}  style={{cursor:"pointer"}}
              title="validate"
              size={2}


              color="green"
            />

    </div>
  );
};
