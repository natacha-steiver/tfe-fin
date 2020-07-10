import React,{Component} from 'react'
import {registerUser,getUser,updateUser,deleteUser} from '../../ajax'
import { Router, Route, browserHistory, IndexRoute} from 'react-router'
import {withRouter} from 'react-router-dom'
import  '../../../assets/sass/grid.min.css';

import  '../../../assets/sass/backend.min.css';

import soluImg from '../../../../public/images/solution.png';

class RegisterUserAdmin extends Component{

  constructor(props){
    super(props)
    this.state={
      id: '',
      term: '',
      editDisabled: false,
      items: [],
      users:[],
      email:'',
      password:''
    }
    this.onSubmit= this.onSubmit.bind(this)
    this.handleInputChange=this.handleInputChange.bind(this)
this.getAll=this.getAll.bind(this)

  }
  componentDidMount(){
this.getAll()



  }









  handleInputChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  getAll = () =>{
    getUser().then(
      data => {
        this.setState(
        {

          users: [...data],

        },    () => {
              console.log(this.state.users)
            }
        )
      }
    )
  }


  onSubmit(e){
    e.preventDefault()
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    registerUser(email,password)
this.getAll()
  }




  render() {
    const data=this.state.users
    return (
      <div className="container">


           <div className="row">
           <div className="addSoluce col-lg-4">
           <img src={soluImg} alt="solution" id="addImg"/>
             <h3>Ajoutes un utilisateur</h3>

      <form  onSubmit={this.onSubmit} >
      <label htmlFor="">email:</label>
      <input type="text" name="email"  id="email" placeholder="email"/>

      <label htmlFor="">password:</label>
      <input type="text" name="password"  id="password" placeholder="password"/>

      <button type='submit'>envoie</button>

      </form>



      </div>
    
    </div>

<h3>Modifies/supprimes un utilisateur</h3>
          {data.map((value, index) => {
         return <div key={value._id} style={{marginBottom:"2em",wordBreak:" break-all"}}>
           <p> id: {value._id}</p>
        <p> email: {value.email}</p>
        <p> password: {value.password}</p>
        <label htmlFor="">email:</label>
        <input type="text" name="email"  id="email" placeholder="email"   onChange={ this.handleInputChange }/>

        <label htmlFor="">password:</label>
        <input type="text" name="password"  id="password" placeholder="password"   onChange={ this.handleInputChange }/>
        <button type='button' onClick={(e)=>{
              e.preventDefault();
          updateUser( value._id,this.state.email,this.state.password);this.getAll()
        }}>envoie</button>
    <button type="button" onClick={(e)=>{    e.preventDefault();
      deleteUser( value._id);this.getAll()}}>delete</button>
          </div>
               })}
    </div>
    );
  }


}

export default RegisterUserAdmin
