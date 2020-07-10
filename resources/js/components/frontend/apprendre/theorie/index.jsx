

import React, { useState }  from 'react';
import store from "../../../../redux/store"
import ImageGallery from 'react-image-gallery';
import '../../../../../assets/sass/app.min.css'
const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',
  margin: '.75rem auto',
  padding: '.6rem 1rem',
  maxWidth: '80%',
  borderRadius: '7px'
};
window.store=store;
export default ({ theorie: { titre,texte,image,video,langage, _id } }) => {
  //console.log(exercice)
let images=[]




  return (
    <div style={ styles }>
        <p>{ langage}</p>
    <h2>{ titre }</h2>



    {

      image != null ?
      image._files &&
     image._files.map((el,i)=>{
          return(


images.push(  {
original:   `/images/${el.clientName}`,
thumbnail:   `/images/${el.clientName}`
})

            )

          })
&& <ImageGallery items={images} />
        :console.log("image doesn't exist")

      }

              {

                image !=null  ?
                image.clientName &&
    <img style={{width:"80%"}} src={`/images/${image.clientName}`} alt={image.clientName}/>



                  :console.log("image loop doesn't exist")
                }

  <p>{ texte }</p>


    {

      video != null ? video._files && <div className="container row d-flex justify-content-center" >
      {video._files.map((el,i)=>{
        return(
          <li key={i} clientName="col-lg-6" style={{padding:"1em",boxSizing:"border-box"}}>
          <iframe style={{width:"100%"}} allowfullscreen="true" allow="autoplay; fullscreen" controls src={`https://www.codegame.be/videos/${el.clientName}`}frameBorder="0"></iframe>
            </li>
          )

        })}
      </div>: console.log("loop video doesn't exist")
      }
      {
        video != null  ?
        !video._files &&



        <iframe src={`/videos/${video.clientName}`}allowfullscreen="true" allow="autoplay; fullscreen" frameBorder="0"></iframe>



          : console.log("video doesn't exist")

        }




    </div>
  );
};
