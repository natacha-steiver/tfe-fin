import "../../../../../assets/sass/app.min.css"
import ImageGallery from 'react-image-gallery';
import soluImg from '../../../../../../public/images/solution.png';
import  '../../../../../assets/sass/grid.min.css';
import  '../../../../../assets/sass/backend.min.css';
import React, { useState }  from 'react';
import Icon from '@mdi/react'
import {  mdiDeleteForever, mdiCheck  } from '@mdi/js';
import store from "../../../../redux/store"
import axios from 'axios';
import { UPDATE_THEORIE} from "../../../../redux/constantes/index";
const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',

  padding: '.6rem 1rem',
margin:"1em 0",
  borderRadius: '7px'
};
window.store=store;
export default ({ theorie: { titre,texte,image,video,langage, _id }, onDelete,onUpdate,onFetch,langages }) => {
  //console.log(exercice)

  const [titreNew, setTitre] = useState('');
  const [texteNew, setTexte] = useState('');
  const [imageNew, setImage] = useState('');
  const [videoNew, setVideo] = useState('');
  const [langageNew, setLangage] = useState('');



  function readCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for(var i=0;i < ca.length;i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1,c.length);
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
      }
      return null;
  }
let images=[]




  return (
    <div style={ styles } className="form">
      <img id="imgForm" src={soluImg} alt="solution" />
      <div className="col-lg-4">
    <h2>{ titre }</h2>
    <p>{ texte }</p>
    <p>{ langage}</p>
    {

      video != null ? video._files && video._files.map((el,i)=>{
        return(
          <li key={i}>
          <iframe allowfullscreen="true" allow="autoplay; fullscreen" src={`/videos/${el.clientName}`}frameBorder="0" style={{width:"100%"}}></iframe>
            </li>
          )

        }): console.log("loop video doesn't exist")
      }
      {
        video != null  ?
        !video._files &&



        <iframe allowfullscreen="true" allow="autoplay; fullscreen" src={`/videos/${video.clientName}`}frameBorder="0" style={{width:"100%"}}></iframe>



          : console.log("video doesn't exist")

        }

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





</div>


            <form className="col-lg-8">
            <label htmlFor="">Titre:</label>
            <input type="text" name="titre"  placeholder={titre}  onChange={event => setTitre(event.target.value)}/>
            <label htmlFor="">Texte:</label>
            <input type="text" name="texte"  placeholder={texte}    onChange={event => setTexte(event.target.value)}/>
            <div className="form-group">
            <label htmlFor="">Image(s):</label>

              <input
              type="file"
                cols="19"
                rows="8"
                id="images"
                placeholder="images"
                className="form-control"
                name="file[]"
                multiple={true}
                onChange={event => setImage(event.target.value)}
              />
            </div>
            <div className="form-group">
            <label htmlFor="">Vidéo(s):</label>

              <input
              type="file"
                cols="19"
                rows="8"
                id="videos"
                placeholder="videos"
                className="form-control"
                name="file[]"
                multiple={true}
                onChange={event => setVideo(event.target.value)}
              />
            </div>
            <label htmlFor="">langage:</label>


                        <select value={langageNew}   onChange={event => setLangage(event.target.value)} name="langage"  >


                      <option value="choose your langage">choose your langage</option>
                      {
                      langages.map((el,i)=>{
                          return(
                           <option value={el.langage}>  {el.langage }</option>



                          )
                        })
                      }
                      </select>
            </form>








              <Icon path={ mdiDeleteForever }    onClick={() => onDelete(_id)} style={{cursor:"pointer"}}
                title="delete"
                size={2}


                color="red"
              />


                    <Icon path={ mdiCheck }  onClick={()=>{

                      let data = new FormData()
                     let input_image = document.getElementById('images')
                     let input_video= document.getElementById('videos')
                     Array.from(input_image.files).forEach((f) => {
                         data.append('images', f)
                     })
                     Array.from(input_video.files).forEach((f) => {
                         data.append('videos', f)
                     })
                     data.append('titre',titreNew )
                     data.append('texte',texteNew )

                     data.append('langage',langageNew )
                       axios.put(`api/theorie/${_id}`, data,{      headers:{'Content-Type':'application/json',"Authorization":"Bearer "+readCookie('tokenTxt').split(/%[0-55][0-55]/,8).reverse().join('').replace(/%/,' ').split(' ',1).join('')}
        })
                         .then(res => {
                               onFetch()
                             console.log(res);
                             return {
                               type: UPDATE_THEORIE,
                               payload: {
                                 _id: res.data.id,
                                 titre: res.data.titre,
                                 texte: res.data.texte,
                                 image:res.data.image,
                                 video:res.data.video,
                                 langage:res.data.langage,
                                 date: new Date().toLocaleDateString()
                               }
                         }}).catch(error => {
                             throw(error);
                           });



                  }} style={{cursor:"pointer"}}
                      title="validate"
                      size={2}


                      color="green"
                    />
              </div>
            );
          };
