// NewPost.js

import React,{useState} from 'react';
import store  from "../../../../redux/store";
import {

  ADD_THEORIE,
  DELETE_THEORIE,
  FETCH_THEORIE,
  UPDATE_THEORIE,



} from  "../../../../redux/constantes/index";

import  '../../../../../assets/sass/grid.min.css';
import  '../../../../../assets/sass/backend.min.css';
import axios from 'axios';
import soluImg from '../../../../../../public/images/solution.png';
function NewTheorie({onFetch,langages}){

  const [titreNew, setTitre] = useState('');
  const [texteNew, setTexte] = useState('');
  const [imageNew, setImage] = useState('');
  const [videoNew, setVideo] = useState('');
  const [langageNew, setLangage] = useState('');

{/*
  handleInputChange(e){
console.log('kk')
let data = new FormData()
let input_image = document.getElementById('image')
let input_video= document.getElementById('video')

Array.from(input_image.files).forEach((f) => {
   data.append('image', f)
})
Array.from(input_video.files).forEach((f) => {
   data.append('video', f)
})
data.append(e.target.name,e.target.value)

  this.props.onAddTheorie(data)
 axios.post('api/theorie/add', data)
   .then(res => {
       console.log(res);
   })

  };
  */}

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
  const getFile=()=> {

       let file = event.target.files[0]
       this.selectedFile = file
       let fileV = event.target.files[1]
       this.selectedFileV= fileV
     }

    const uploadFile=()=> {
      //  let fd = new FormData()
      //  fd.append('image', this.selectedFile, this.selectedFile.name)
      //  fd.append('video', this.selectedFileV)
      //
    /*
    let data = new FormData()
   let input_image = document.getElementById('image')
   let input_video= document.getElementById('video')
   Array.from(input_image.files).forEach((f) => {
       data.append('image', f)
   })
   Array.from(input_video.files).forEach((f) => {
       data.append('video', f)
   })
     axios.post('api/theorie/add', data)
       .then(res => {
           console.log(res);
       })
     */


    console.log('ok')
    }




    return (


      <div className=" row ">
      <div className="addSoluce col-lg-4">
      <img src={soluImg} alt="solution" id="addImg"/>
        <h3>Ajoutes une théorie</h3>

          <form method="POST"  encType="multipart/form-data" >
          <div className="form-group">
          <label htmlFor="">Image(s):</label>

            <input
            type="file"
              cols="19"
              rows="8"
              id="image"
              placeholder="image"
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
              id="video"
              placeholder="video"
              className="form-control"
              name="file[]"
              multiple={true}
              onChange={event => setVideo(event.target.value)}
            />
          </div>
          <div className="form-group">
              <input
              type="text"
              placeholder="Titre"
              className="form-control"
              name="titre"
              id="titre"
              onChange={event => setTitre(event.target.value)}

            />

          {/*  <button type="button" onClick={()=>{this.uploadFile()}}>telecharge</button>*/}
          </div>
          <div className="form-group">


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
          </div>
          <div className="form-group">
            <textarea
              cols="19"
              rows="8"
              placeholder="Texte"
              className="form-control"
              name="texte"
              id="texte"
              onChange={event => setTexte(event.target.value)}
            >
            </textarea>
          </div>


          <div className="form-group">
            <button type="button" className="btn btn-primary" onClick={()=>{



              let data = new FormData()
             let input_image = document.getElementById('image')
             let input_video= document.getElementById('video')
             Array.from(input_image.files).forEach((f) => {
                 data.append('image', f)
             })
             Array.from(input_video.files).forEach((f) => {
                 data.append('video', f)
             })
             data.append('titre',titreNew )
             data.append('texte',texteNew )

             data.append('langage',langageNew )



                return axios.post(`api/theorie/add`, data,{      headers:{'Content-Type':'application/json',"Authorization":"Bearer "+readCookie('tokenTxt').split(/%[0-55][0-55]/,8).reverse().join('').replace(/%/,' ').split(' ',1).join('')}
})
                  .then(response => {
                    onFetch()
                    return (
                {
                  type: ADD_THEORIE,
                  payload: {
                    _id: response.data.all.map(item=>(
                        item._id
                      )).toString(),
                    titre: response.data.all.map(item=>(
                        item.titre
                      )).toString(),
                    texte:response.data.all.map(item=>(
                        item.texte
                      )).toString(),
                    image:response.data.all.map(item=>(
                          item.image
                        )).toString(),
                    video:response.data.all.map(item=>(
                            item.video
                          )).toString(),
                    langage:response.data.all.map(item=>(
                                  item.langage
                                )).toString(),
                    date: new Date().toLocaleDateString()
                  }
                },{
                  type: FETCH_THEORIE,
                  theories
                }

              )})
                  .catch(error => {
                    throw(error);
                  });
              }
            }



  >Ajouter</button>

          </div>

        </form>
</div>
        <div className="col-lg-8">
        <h3>Notification</h3>
      <p>Les fichiers téléchargés ne doivent pas excéder 1GB.</p>

        </div>
        </div>
    );
  }


export default NewTheorie;
