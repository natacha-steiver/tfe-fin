import React from 'react';
import ReactDOM from "react-dom";
import avion from "../../assets/avion/Plane/Fly (1).png";
class Move extends React.Component {


componentDidMount(){
  setTimeout(    document.addEventListener('keydown',   this.onKeyPressed),1000);
}


  onKeyPressed(e) {
    switch(e.keyCode) {
       case 37:
        document.getElementById('avion').style.marginLeft="-1em"
         break;
       case 39:
               document.getElementById('avion').style.marginLeft="1em"
         break;
         case 38:
          document.getElementById('avion').style.marginTop="-1em"
           break;
         case 40:
                 document.getElementById('avion').style.marginTop="1em"
           break;
     }
  }

  render() {

    return (
      <div

        style={{ position: "absolute" }}

      >
        <div >
          <div >
            <img id="avion" src={avion} />
          </div>
        </div>
      </div>
    )
  }
}

export default Move
