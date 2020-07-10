'use strict'

const Solution = use('App/Models/solutions')
class solutionsController {
async index({response,request}){

    let solution = await Solution.all()

    return response.json(solution)
  }


  async store({request,auth,response}){

    const exType = request.post('type')
    const exSolution = request.post('solution')
    const exRef = request.post('ref')


    const exercice = new Solution()
    exercice.type = exType.type
    exercice.solution =[exSolution.solution.split(/[0-9]+\./)]
    exercice.ref =exRef.ref

const exerciceLast=  await Solution
    .fetch()
//db.tfe.getCollection("solutions").find().sort({"_id":-1}).limit(1)
    await exercice.save()
    console.log(response)
    return response.status(201).json({all:exerciceLast})
  }

  async show ({params,response}) {
    const solution= await Solution.where({_id:params.id}).fetch()

    return response.json(solution)
  }

  async update ({params,response,request}) {



        try {
          const exType = request.post('type')
          const exSolutions = request.post('solutions')
          const exRef = request.post('ref')


          const exercice= await Solution.where({_id:params.id}).update({id:params.id,type:exType.type,solution:[exSolutions.solution.split(/[0-9]+\./)],ref:exRef.ref})
          exercice.type = exType.type
          exercice.solution =[exSolutions.solution.split('*')]
          exercice.ref =exRef.ref
      console.log(request+"requete")
        return response.status(200).json({id:params.id,type:exType.type,solution:exSolutions.solution,ref:exRef.ref})

        } catch (e) {
          console.log(e)
          return response.json({message: 'You are not authorized to perform this action'})
        }
  }

  async delete ({  params, response }) {
  //NB: id est envoyé via List.js

    const exercice= await Solution.where({_id:params.id}).delete({id:params.id})

    return response.status(200).json({

      id: params.id,



    })
  }


  }

module.exports = solutionsController
