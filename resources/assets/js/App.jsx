import React from 'react';
import ReactDOM from "react-dom";

//import Perso from "./components/introduction/perso/index"
import Keyevent from "./components/keyevent/index"
import MoveOffset from "./components/keyevent/MoveOffset"
import Menu from "./components/menu/index"
//import './App.css';

class App extends React.Component {






render(){

  return (
    <div>



    <Menu/>

    </div>

    );
}
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App
