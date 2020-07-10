import React from 'react';
import ReactDOM from "react-dom";
import MoveOffset from "../keyevent/MoveOffset"
import Compteur from "../compteur/Compteur"
import background from "../../assets/background/game_background_1.png";
class Background extends React.Component {




componentDidMount(){
  const canvas = this.refs.canvas
  const c = canvas.getContext("2d")
  const img = this.refs.image

  this.draw()
}







 draw=()=>{

     var posX = 0;
     var  posY = 0;
     const canvas = this.refs.canvas
     const c = canvas.getContext("2d")
     const img = this.refs.img

     img.onload = () => {
setInterval(()=>{
       posX +=.2;
       posY =0;
      c.drawImage(img,posX,posY);
},5)

        }

console.log('hhh')
requestAnimationFrame(this.draw)





       }




  render() {
     return (
       <div>
       <Compteur/>
  <MoveOffset/>
    <canvas ref="canvas" style={{width:window.innerWidth,height:window.innerHeight/2}}/>

                <img  ref="img" src={background} style={{width:"7%",display:"none"}} />
       </div>
     );
  }
}
export default Background
