

import React, { useState }  from 'react';
import store from "../../redux/store"

import { ADD_EXERCICE } from "../../redux/constantes/index";
import {FETCH_EXERCICE} from "../../redux/constantes/index";
import { fetchAllExercices } from '../../redux/actions';

const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',
  margin: '.75rem auto',
  padding: '.6rem 1rem',
  maxWidth: '500px',
  borderRadius: '7px'
};
window.store=store;
export default ({onAddExercice,onFetch} ) => {
  //console.log(exercice)
const ennonce="ennonce";
const type="type";

const titre="titre";
  const [typeNew, setType] = useState('');
  const [ennonceNew, setEnnonce] = useState('');
  const [titreNew, setTitre] = useState('');
  return (
    <div style={ styles }>

      <form method="POST" onSubmit={() => onAddExercice(
    typeNew,ennonceNew,titreNew)
      }>
    <label htmlFor="">Ennonce:</label>
    <input type="text" name="ennonce"  placeholder={ennonce}  onChange={event => setEnnonce(event.target.value)}/>
    <label htmlFor="">Type:</label>
    <input type="text" name="type"  placeholder={type}    onChange={event => setType(event.target.value)}/>

    <label htmlFor="">Titre:</label>
    <input type="text" name="titre"  placeholder={titre}    onChange={event => setTitre(event.target.value)}/>

      <button type="submit" className="btn btn-primary">Add Post</button>
      </form>





  <button className="btn btn-primary" onClick={()=>store.dispatch(fetchAllExercices())}>list </button>

    </div>
  );
};
