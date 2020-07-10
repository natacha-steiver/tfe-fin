import React from 'react';
import ReactDOM from "react-dom";
import avion from "../../../assets/avion/Plane/Fly (1).png";
import dino from "../../../assets/dino/Walk (1).png";
import "./perso.min.css";
class Perso extends React.Component {

constructor(props){
  super(props)
  this.state={
    actualPerso: ''
  }
}
componentDidUpdate(){
   console.log(this.state)
}
render(){

  return (
    <div>
    {/*
      //Faire de ce composant une modale box ou non
      //créer un click qui enregistre le perso actuel et réoriente vers accueil code qui correspond au perso
      */}

    <h2>Choisis ton perso ou crées en un nouveau</h2>

    <button><a href="#">Choisir</a></button>
    <button><a href="#">Créer</a></button>
    <div>
    <a href="#"  onClick={(event)=>{
      var test=event.target.attributes.getNamedItem('data-id').value;
      this.setState(state=>{
        return {actualPerso: test}

      })

    }}

    >
      <img src={avion} alt="perso 1" data-id="1"/>
    </a>
    <a href="#"
    onClick={(event)=>{
      var test=event.target.attributes.getNamedItem('data-id').value;
      this.setState(state=>{
        return {actualPerso: test}

      })

    }}
    >
      <img src={dino} alt="perso 2" data-id="2"/>
    </a>

    </div>
    </div>
  );
}
}

export default Perso
