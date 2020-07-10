'use strict'
const Theorie = use('App/Models/theories');
const CloudinaryService = use('App/Services/CloudinaryService');
const Helpers = use('Helpers')
const fs = require('fs');
class theoriesController {
async index({response}){

  try{
    let theorie = await Theorie.all()

    return response.json(theorie)

  }

    catch (e) {

      console.log(e)

      return response.json({message: 'You are not authorized to perform this action'})
    }
  }


  async store({request,auth,response}){


      const theoTitre= request.post('titre')
      const theoTexte = request.post('texte')
      //const theoImage= request.post('image')
      //const theoVideo = request.post('video')
      const theoLangage = request.post('langage')

  const file = request.file('image', {
     types: ['image'],
     size: '1000mb'
   })
   const video = request.file('video', {
      types: ['video'],
      size: '1000mb'
    })




if(file){
  if(file._files && file._files.length>1){
    file._files.forEach((el,i)=>{


if (fs.existsSync("public/images/".concat(el.clientName))) {
 console.log("exist")

}else{
  file.moveAll(Helpers.publicPath('images'), {
 name: file._files.clientName,
 overwrite: true
 })

}
    })
  }else if(file){
    if (fs.existsSync("public/images/".concat(file.clientName))) {
      console.log("exist")

    }else{
       file.move(Helpers.publicPath('images'), {
      name: file.clientName,
      overwrite: true
      })

    }
  }
}



if(video){


              if(video._files && video._files.length>1){
                  video._files.forEach((el,i)=>{


                 if (fs.existsSync("public/videos/".concat(el.clientName))) {
                   console.log("exist")
                 }else{
                    video.moveAll(Helpers.publicPath('videos'), {
                   name: video.clientName,
                   overwrite: true
                   })
                 }
                  })
                }else if(video){
                  if (fs.existsSync("public/videos/".concat(video.clientName))) {
                    console.log("exist")
                  }else{
                     video.move(Helpers.publicPath('videos'), {
                    name: video.clientName,
                    overwrite: true
                    })
                  }
                }
}






      const theorie = new Theorie()

    //  const cloudinaryResponse = await CloudinaryService.v2.uploader.upload(file.tmpPath, {folder: 'images'});
    // theorie.image = cloudinaryResponse.secure_url;
      theorie.titre = theoTitre.titre
      theorie.texte = theoTexte.texte
      theorie.image = file
      theorie.video = video
      theorie.langage = theoLangage.langage
  const theorieLast=  await Theorie
      .fetch()

      await theorie.save()
      console.log(response)
      return response.status(201).json({all:theorieLast,file:file,video:video})

  }

  async show ({params,response}) {
    const theorie= await Theorie.where({_id:params.id}).fetch()

    return response.json(theorie)
  }

  async update ({params,response,request}) {



        try {
//await Theorie.where({_id:params.id}).delete({image:file,video:video})
              const theoTitre= request.post('titre')
              const theoTexte = request.post('texte')
            //  const theoImage= request.post('image')
            //  const theoVideo = request.post('video')
              const theoLangage = request.post('langage')


              const files = request.file('images', {
                 types: ['image'],
                 size: '1000mb'
               })
               const videos = request.file('videos', {
                  types: ['video'],
                  size: '1000mb'
                })




            if(files){
              if(files._files && files._files.length>1){
                files._files.forEach((el,i)=>{


            if (fs.existsSync("public/images/".concat(el.clientName))) {
             console.log("exist")

            }else{
              files.moveAll(Helpers.publicPath('images'), {
             name: files._files.clientName,
             overwrite: true
             })

            }
                })
              }else if(files){
                if (fs.existsSync("public/images/".concat(files.clientName))) {
                  console.log("exist")

                }else{
                   files.move(Helpers.publicPath('images'), {
                  name: files.clientName,
                  overwrite: true
                  })

                }
              }
            }



            if(videos){


                          if(videos._files && videos._files.length>1){
                              videos._files.forEach((el,i)=>{


                             if (fs.existsSync("public/videos/".concat(el.clientName))) {
                               console.log("exist")
                             }else{
                                videos.moveAll(Helpers.publicPath('videos'), {
                               name: videos.clientName,
                               overwrite: true
                               })
                             }
                              })
                            }else if(videos){
                              if (fs.existsSync("public/videos/".concat(videos.clientName))) {
                                console.log("exist")
                              }else{
                                 videos.move(Helpers.publicPath('videos'), {
                                name: videos.clientName,
                                overwrite: true
                                })
                              }
                            }
            }




          const theorie= await Theorie.where({_id:params.id}).update({id:params.id,titre:theoTitre.titre,texte:theoTexte.texte,image:files,video:videos,langage:theoLangage.langage})
          theorie.titre = theoTitre.titre
          theorie.texte = theoTexte.texte
          theorie.image = files
          theorie.video = videos
          theorie.langage = theoLangage.langage
      console.log(request+"requete")
        return response.status(200).json({id:params.id,titre:theoTitre.titre,texte:theoTexte.texte,image:files,video:videos,langage:theoLangage.langage})

        } catch (e) {
          console.log(e)
          return response.json({message: 'You are not authorized to perform this action'})
        }
  }

  async delete ({  params, response }) {
  //NB: id est envoyé via List.js

    const theorie= await Theorie.where({_id:params.id}).delete({id:params.id})

    return response.status(200).json({

      id: params.id,



    })
  }


  }

module.exports = theoriesController
