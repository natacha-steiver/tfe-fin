

import React, { useState }  from 'react';
import store from "../../../../redux/store"
import Test from "../../../test"
import { fetchAllExercices } from '../../../../redux/actions';



const styles = {
  borderBottom: '2px solid #eee',
  background: '#fff',
//  margin: '.75rem auto',
  padding: '.6rem 1rem',
width:'100%',
  borderRadius: '7px',
  position:"relative",
  top:"10em"
};
window.store=store;
export default ({ exercice: { titre,ennonce,type, ref,_id },onFetchSolution, solutions}) => {
  //console.log(exercice)


const [currentLangNew, setcurrentLang] = useState('a');
const childData="j"
const callbackFunction = (childData) => {
      setcurrentLang(childData)
}

const soluces= solutions.filter(el=>el.ref== ref && el.type==currentLangNew ).map((el,i)=>{
//const datas=[]
//datas.push(el.solution,el.type)

//datas.push({solution:el.solution,type:el.type})

  return (

//datas

el
)})


localStorage.setItem("soluces",soluces)



  return (

    <div style={ styles }>

      <h2 className="titre">Exercez-vous</h2>
      <h2 >{ titre }</h2>
      <p>{ ennonce}</p>

      <p>{type}</p>
      <p>{ref}</p>
    <p>{currentLangNew}</p>


    <Test langage={type=="python"?`text/x-${type}`:`text/${type}`} refEx={ref} soluces={soluces} parentCallback = {(childData)=>{callbackFunction(childData)}} currentLangNew={currentLangNew}/>

    </div>
  );
};
