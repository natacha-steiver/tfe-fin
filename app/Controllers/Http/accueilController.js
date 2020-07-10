'use strict'


class accueilController {


  //const Task = use('App/Models/Task')

  async index ({ view }) {

const test={id:"hhh",name:"njkhjk"}
console.log(JSON.stringify(test))
    return view.render('accueil.index', {test:test})
  }


}

module.exports = accueilController
