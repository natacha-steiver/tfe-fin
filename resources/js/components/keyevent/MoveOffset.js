import React from 'react';
import ReactDOM from "react-dom";
import avion from "../../assets/avion/Plane/Fly (1).png";
class MoveOffset extends React.Component {
constructor(props){
  super(props)
  this.state={
    margin:10
  }
}

componentDidUpdate(){
  setTimeout(    document.addEventListener('keydown',   this.onKeyPressed),1000);

}



  onKeyPressed(e) {
var margin = .1;
{/*faire un test avec des states*/}
    switch(e.keyCode) {
       case 37:
        if(document.getElementById('avion').offsetLeft>=0){
        document.getElementById('avion').style.marginLeft=document.getElementById('avion').offsetLeft/20-margin+ "em";
}
         break;
       case 39:
       if(document.getElementById('avion').offsetLeft<window.innerWidth-442){
            document.getElementById('avion').style.marginLeft=document.getElementById('avion').offsetLeft/12+margin+ "em";
}
         break;
         case 38:
            document.getElementById('avion').style.marginTop=document.getElementById('avion').offsetTop/20-margin+ "em";
           break;
         case 40:
                  if(document.getElementById('avion').offsetTop<300){
                    document.getElementById('avion').style.marginTop=document.getElementById('avion').offsetTop/12+margin+ "em";

                  }
           break;
     }
  }

  render() {

    return (
    !this.props.state   &&<div

        style={{ position: "absolute",width:"100%",height:"30em",overflow:"hidden" }}

      >
      <div><button>Défi suivant</button></div>
        <div >
          <div >

            <img id="avion" src={avion} style={{width:"7%"}} />

          </div>
        </div>
      </div>
    )
  }
}

export default MoveOffset
