'use strict'

const Exercice = use('App/Models/exercices')
const Solution = use('App/Models/solutions')

class exercicesController {
async index({response}){

try{
  let exercice = await Exercice.all()
  return response.json(exercice)
} catch (e) {
  console.log(e)
  alert('connectez-vous pour avoir accès aux exercices')
  return response.json({message: 'You are not authorized to perform this action'})
}
  }



  async indexByRefEx({response}){

  try{
    let solutionsRef = await Solution.all()
    let exRef = await Exercice.all()

    return response.json({donnees:{solutionsRef,exRef}}  )
  } catch (e) {

    return response.json({message: 'You are not authorized to perform this action'})
  }
    }


  async store({request,auth,response}){

    const exType = request.post('type')
    const exEnnonce = request.post('ennonce')
    const exTitre = request.post('titre')
    const exRef = request.post('ref')


    const exercice = new Exercice()
    exercice.type = exType.type
    exercice.ennonce =exEnnonce.ennonce
    exercice.titre =exTitre.titre
    exercice.ref =exRef.ref

const exerciceLast=  await Exercice
    .fetch()

    await exercice.save()
    console.log(response)
    return response.status(201).json({all:exerciceLast})
  }

  async show ({params,response}) {
    const exercice= await Exercice.where({_id:params.id}).fetch()

    return response.json(exercice)
  }

  async update ({params,response,request}) {



        try {
          const exType = request.post('type')
          const exEnnonce = request.post('ennonce')
          const exTitre = request.post('titre')
          const exRef = request.post('ref')



          const exercice= await Exercice.where({_id:params.id}).update({id:params.id,type:exType.type,ennonce:exEnnonce.ennonce,titre:exTitre.titre,ref:exRef.ref})
          exercice.type = exType.type
          exercice.ennonce =exEnnonce.ennonce
          exercice.titre =exTitre.titre
          exercice.ref =exRef.ref

      console.log(request+"requete")
        return response.status(200).json({id:params.id,type:exType.type,ennonce:exEnnonce.ennonce,titre:exTitre.titre,ref:exRef.ref})

        } catch (e) {
          console.log(e)
          return response.json({message: 'You are not authorized to perform this action'})
        }
  }

  async delete ({  params, response }) {
  //NB: id est envoyé via List.js

    const exercice= await Exercice.where({_id:params.id}).delete({id:params.id})

    return response.status(200).json({

      id: params.id,



    })
  }


  }

module.exports = exercicesController
