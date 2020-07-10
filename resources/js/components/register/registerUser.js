import React,{Component} from 'react'
import {registerUser,getUser,updateUser,deleteUser} from '../../ajax'
import { Router, Route, browserHistory, IndexRoute} from 'react-router'
import {withRouter} from 'react-router-dom'
import  '../../../assets/sass/grid.min.css';

import  '../../../assets/sass/backend.min.css';

import soluImg from '../../../../public/images/solution.png';

class RegisterUser extends Component{

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


  }
  componentDidMount(){




  }









  handleInputChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  onSubmit(e){
    e.preventDefault()
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    registerUser(email,password)
    window.location.href = '/';
  }




  render() {

    return (
      <div className="container ">


           <div className="row">
           <div className="addSoluce col-lg-4">
           <img src={soluImg} alt="solution" id="addImg"/>
             <h3>Inscription</h3>

      <form  onSubmit={this.onSubmit} >
      <label htmlFor="">email:</label>
      <input type="text" name="email"  id="email" placeholder="email"/>

      <label htmlFor="">password:</label>
      <input type="text" name="password"  id="password" placeholder="password"/>

      <button type='submit'>envoie</button>

      </form>



      </div>
      <div className="col-lg-8">
      <h3>Notification</h3>
    <p>Enregistrez-vous pour avoir accès aux théories et exercices.</p>
      </div>
    </div>

    </div>
    );
  }


}

export default RegisterUser
