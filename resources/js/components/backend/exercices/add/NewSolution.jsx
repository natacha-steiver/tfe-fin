// NewPost.js

import React,{useState,useEffect, Component } from 'react';
import store  from "../../../../redux/store";
import { ADD_SOLUTION } from "../../../../redux/constantes/index";
import '../../../../../assets/sass/backend.scss';
import soluImg from '../../../../../../public/images/solution.png';
import  '../../../../../assets/sass/grid.min.css';
import  '../../../../../assets/sass/backend.min.css';



class NewSolution extends React.Component {

constructor(props){
  super(props)
  this.state = {
    _id:"hhjhj",
    type:  "choose your langage",
    solution: 'solution',
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
      solution: '',
      ref:''
    });
  };

  render() {



    return (
    <div className=" row ">
    <div className="addSoluce col-lg-4">
    <img src={soluImg} alt="solution" id="addImg"/>
  <h3>Ajoutes une solution</h3>
        <form method="POST"  onSubmit={ (e)=>{ e.preventDefault(); this.props.onAddSolution(this.state)}} >
        <div className="form-group">
  {
    /*

    <input
    type="text"
    placeholder="Type"
    className="form-control"
    name="type"
    onChange={ this.handleInputChange }
    defaultValue={ this.state.type }
  />
     */
  }
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
        <div className="form-group">
            <input
            type="text"
            placeholder="ref"
            className="form-control"
            name="ref"
            onChange={ this.handleInputChange }
            defaultValue={ this.state.ref }
          />
        </div>
        <div className="form-group">
          <textarea
            cols="19"
            rows="8"
            placeholder="Solution"
            className="form-control"
            name="solution"
            onChange={ this.handleInputChange }
            defaultValue={ this.state.solution }>
          </textarea>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary" >Ajouter</button>

        </div>

      </form>
    </div>
    <div className="col-lg-8">
    <h3>Notification</h3>
    <p>!!! Les solutions doivent être séparées par un chiffre de 0 à 9 et un point (liste numérotée) exemple: 1.solution1 2.solution etc...</p>


    <p>Le champ "ref" doit être le même que le champ "ref" de l'exercice lié.</p>
    <p>Un exercice peut avoir plusieurs solutions et une solution peut possèder une même référence pour un exercice avec un langage
    différent. Ainsi, nous pouvons changer de langage dans un exercice pour réalisé un exercice complémentaire à celui en cours.
    </p>

        </div>
    </div>
    );
  }
}

export default NewSolution;
