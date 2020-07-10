'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Secure {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
   async handle({ request,response}, next) {



     // call next to advance the request
   //response.plainCookie("tokenTxt",request.request.headers["Authorization"],{  path: '/' })
    request.plainCookie('tokenTxt')

    request.header('Cookie',request.plainCookie('tokenTxt'))


     await next();
  //   response.plainCookie("tokenTxt",request.request.headers["Authorization"],{  path: '/' })

     request.plainCookie('tokenTxt')

       request.header('Cookie',request.plainCookie('tokenTxt'))


   }

  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async wsHandle ({ request }, next) {
    // call next to advance the request
    await next()
  }
}

module.exports = Secure
