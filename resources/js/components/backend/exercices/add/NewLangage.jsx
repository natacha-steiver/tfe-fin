// NewPost.js

import React,{useState} from 'react';
import store  from "../../../../redux/store";
import { ADD_LANGAGE } from "../../../../redux/constantes/index";
import  '../../../../../assets/sass/grid.min.css';

import  '../../../../../assets/sass/backend.min.css';

import soluImg from '../../../../../../public/images/solution.png';

class NewLangage extends React.Component {

constructor(props){
  super(props)
  this.state = {
    _id:"hhjhj",
    langage: 'langage',
    image: 'image'
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
      langage: '',
      image: ''
    });
  };

  render() {
    return (
      <div className=" row ">
      <div className="addSoluce col-lg-4">
      <img src={soluImg} alt="solution" id="addImg"/>
        <h3>Ajoutes un langage</h3>

          <form method="POST"  onSubmit={ (e)=>{ e.preventDefault(); this.props.onAddLangage(this.state)}} >
          <div className="form-group">
              <input
              type="text"
              placeholder="Langage"
              className="form-control"
              name="langage"
              onChange={ this.handleInputChange }
              defaultValue={ this.state.langage }
            />
          </div>
          <div className="form-group">
            <textarea
              cols="19"
              rows="8"
              placeholder="Image"
              className="form-control"
              name="image"
              onChange={ this.handleInputChange }
              defaultValue={ this.state.image }>
            </textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary" >Ajouter</button>

          </div>

        </form>
        </div>
                <div className="col-lg-8">
                <h3>Notification</h3>
              <p>Les langages rajoutés doivent être conforme aux langages inscrits dans la documentation de codemirror.
              Vous ne devez pas ajouter "text/x-" ou "text" devant.



              </p>
                </div>
                </div>
    );
  }
}

export default NewLangage;
