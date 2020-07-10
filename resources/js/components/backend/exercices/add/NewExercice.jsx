// NewExercice.js

import React,{useState} from 'react';
import store  from "../../../../redux/store";
import { ADD_EXERCICE } from "../../../../redux/constantes/index";
import { FETCH_EXERCICE } from "../../../../redux/constantes/index";


import  '../../../../../assets/sass/grid.min.css';

import  '../../../../../assets/sass/backend.min.css';

import soluImg from '../../../../../../public/images/solution.png';


class NewExercice extends React.Component {

constructor(props){
  super(props)
  this.state = {
    _id:"hhjhj",
    type:  "choose your langage",
    ennonce: 'ennonce',
    titre:'titre',
    ref:'ref',
    value:  "choose your langage",
  }
  this.handleSubmit=this.handleSubmit.bind(this)
  this.handleInputChange=this.handleInputChange.bind(this)
  this.handleReset=this.handleReset.bind(this)
}


  handleInputChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });

  };

  handleSubmit(e){
    e.preventDefault();



      this.handleReset();

  };

  handleReset(){
    this.setState({
      type: '',
      ennonce: '',
      titre:"",
      ref:""
    });
  };

  render() {
    return (
      <div className="row ">
      <div className="addSoluce col-lg-4">
      <img src={soluImg} alt="solution" id="addImg"/>
        <h3>Ajoutes un Exercice</h3>
          <form method="POST" onSubmit={ ()=>{  this.props.onAddExercice(this.state)}}>
          <div className="form-group">
          <select value={this.state.type} onChange={this.handleInputChange} name="type"  >


        <option value="choose your langage">choose your langage</option>
        {
          this.props.langages.map((el,i)=>{
            return(
             <option value={el.langage}>  {el.langage }</option>



            )
          })
        }
        </select>
          </div>
          <div>
          <input
          type="text"
          placeholder="ref"
          className="form-control"
          name="ref"
          onChange={ this.handleInputChange }
          defaultValue={ this.state.ref}
        />
      </div>

      <div>
      <input
      type="text"
      placeholder="titre"
      className="form-control"
      name="titre"
      onChange={ this.handleInputChange }
      defaultValue={ this.state.titre}
    />
  </div>

          <div className="form-group">
            <textarea
              cols="19"
              rows="8"
              placeholder="ennonce"
              className="form-control"
              name="ennonce"
              onChange={ this.handleInputChange }
              defaultValue={ this.state.ennonce }>
            </textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary" >Ajouter</button>

          </div>

        </form>
        </div>
                <div className="col-lg-8">
                <h3>Notification</h3>

                <p>Le champ "ref" doit être le même que le champ "ref" des solutions liées.</p>
                <p>Un exercice peut avoir plusieurs solutions et une solution peut possèder une même référence pour un exercice avec un langage
                différent. Ainsi, nous pouvons changer de langage dans un exercice pour réalisé un exercice complémentaire à celui en cours.
                </p>
                </div>
                </div>
    );
  }
}

export default NewExercice;
