import React from 'react';
import ReactDOM from "react-dom";
import  convertMS from 'ms-convert';
//import avion from "../../assets/avion/Plane/Fly (1).png";
class Compteur extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      time: 0,

    }
    this.startTimer = this.startTimer.bind(this)

  }
  startTimer() {
{/*
  -modifie le state start qui sera le time total (ex:16h05 50ms) en ms au moment ou je clique sur start (=ancien time )
  - nouveau time ms = time actuelle en ms - ancien time ms
  - restructuration du format grace a convertMS

*/}

  this.setState({

    start: Date.now()
  })
  this.timer = setInterval(() => this.setState({
    time: convertMS(Date.now() - this.state.start)
  }), 1)



  }

  render() {
     return (
       <div>
         <h3>timer: {this.state.time}</h3>
         <button onClick={this.startTimer}>start</button>

       </div>
     );
  }
}
export default Compteur
