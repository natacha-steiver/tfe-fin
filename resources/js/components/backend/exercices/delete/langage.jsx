

import React, { useState }  from 'react';
import store from "../../../../redux/store"
import Icon from '@mdi/react'
import {  mdiDeleteForever, mdiCheck  } from '@mdi/js';
import { UPDATE_LANGAGE } from "../../../../redux/constantes/index";
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
export default ({ langage: { langage,image, _id }, onDelete,onUpdate }) => {
  console.log(langage)

  const [langageNew, setLangage] = useState('');
  const [imageNew, setImage] = useState('');
  return (
    <div style={ styles } className="form">
      <img id="imgForm" src={soluImg} alt="solution" />
      <div className="col-lg-4">
      <h2>{ langage }</h2>
<img src={image} alt={langage} style={{maxWidth:"15%"}}/>
</div>
      <form className="col-lg-8">
    <label htmlFor="">Langage:</label>
    <input type="text" name="langage"  placeholder={langage}  onChange={event => setLangage(event.target.value)}/>
    <label htmlFor="">Image:</label>
    <input type="text" name="image"  placeholder={image}    onChange={event => setImage(event.target.value)}/>


      </form>

      <Icon path={ mdiDeleteForever }    onClick={() => onDelete(_id)} style={{cursor:"pointer"}}
        title="delete"
        size={2}


        color="red"
      />


            <Icon path={ mdiCheck }   onClick={() => onUpdate(_id,langageNew,imageNew)} style={{cursor:"pointer"}}
              title="validate"
              size={2}


              color="green"
            />







    </div>
  );
};
