import React,{Component} from 'react'
import {register,login} from '../../ajax'
import { Router, Route, browserHistory, IndexRoute} from 'react-router'
import {withRouter} from 'react-router-dom'
//ajout nom dans DB ok
class Login extends Component{

    constructor(props){
      super(props)
      this.state={
        id: '',
        term: '',
        editDisabled: false,
        items: []
      }
     this.onSubmit= this.onSubmit.bind(this)


    }
    componentDidMount(){




    }

    onSubmit = e =>{
      e.preventDefault()
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
    login(email,password)

    }




    render() {

    return (
        <div>
        <h3>Login</h3>

        <form onSubmit={this.onSubmit}>
        <label htmlFor="">email:</label>
        <input type="text" name="email"  id="email" placeholder="email"/>

        <label htmlFor="">password:</label>
        <input type="text" name="password"  id="password" placeholder="password"/>
      <button type='submit'>envoie</button>

        </form>




  <ul>



  </ul>


    </div>
    );
  }


}

export default Login
