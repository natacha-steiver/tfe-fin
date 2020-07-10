'use strict'

const Langage = use('App/Models/langages')
class langagesController {
async index({response,request}){

    let langage = await Langage.all()

    return response.json(langage)
  }


  async store({request,auth,response}){

    const lgImage = request.post('image')
    const lgLangage = request.post('langage')

    const langage= new Langage()
    langage.image = lgImage.image
    langage.langage =lgLangage.langage
const langageLast=  await Langage
    .fetch()
//db.tfe.getCollection("langages").find().sort({"_id":-1}).limit(1)
    await langage.save()
    console.log(response)
    return response.status(201).json({all:langageLast})
  }

  async show ({params,response}) {
    const langage= await Langage.where({_id:params.id}).fetch()

    return response.json(langage)
  }

  async update ({params,response,request}) {



        try {

          const lgImage = request.post('image')
          const lgLangage = request.post('langage')


          const langage= await Langage.where({_id:params.id}).update({id:params.id,image:lgImage.image,langage:lgLangage.langage})
          langage.image = lgImage.image
          langage.langage =lgLangage.langage
      console.log(request+"requete")

        return response.status(200).json({id:params.id,image:lgImage.image,langage:lgLangage.langage})

        } catch (e) {
          console.log(e)
          return response.json({message: 'You are not authorized to perform this action'})
        }
  }

  async delete ({  params, response }) {
  //NB: id est envoyé via List.js

    const langage= await Langage.where({_id:params.id}).delete({id:params.id})

    return response.status(200).json({

      id: params.id,



    })
  }


  }

module.exports = langagesController
