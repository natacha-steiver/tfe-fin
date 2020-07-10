'use strict'

const items = use('App/Models/items')
class itemsController {
async index({response}){
try{
  let item = await items.all()
  return response.json(item)
}

catch{
    //  alert('connectez-vous pour avoir accès.')
}
  }



  }

module.exports = itemsController
