'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class exercices extends Model {
  static get updatedAtColumn () {
  return null
}


}

module.exports = exercices
