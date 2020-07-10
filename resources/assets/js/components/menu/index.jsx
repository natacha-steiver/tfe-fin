import React from 'react';
import ReactDOM from "react-dom";
import {getMenu} from '../../ajax';
import Keyevent from '../keyevent/index';
import { Route,Link, Switch,BrowserRouter as Router } from 'react-router-dom';



class Menu extends React.Component {


  constructor(props){
    super(props)
    this.state={

      menu: [],
      show:true
    }

  }

componentDidMount(){
  this.getAllItem()
}



getAllItem(){
  getMenu().then(
    data => {
      this.setState(
      {

        menu:data,

      },    () => {
          console.log(this.state.menu)

          }
      )
    }
  )
}


render(){

  return (
    <div>
    <Router>
          <div>
            <nav>
              <ul>
{/*map a l'extérieur ou comme clé li...*/}
                      <ul>
                      <h2>javascript</h2>

                        {
                          this.state.menu.map(item=>(
                                <li  key={item}>
                            <Link to={ `/js/${item.nom}` }>
                            {item.nom}
                            </Link>
                                  </li>
                          ))
                        }

                      </ul>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>

              <Route path="/js/ex1">
                <Keyevent/>
              </Route>
            </Switch>
          </div>
        </Router>
</div>
);
}
}

export default Menu
