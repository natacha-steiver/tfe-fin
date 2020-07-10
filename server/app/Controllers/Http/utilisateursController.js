'use strict'
const Utilisateur = use('App/Models/Utilisateur');
class UtilisateursController {

  async listToken({request, auth, response}) {
let tokens=  await auth.authenticator('user').listTokens()
  return response.json(tokens)
   }

  async deleteToken({request, auth, response}) {
    await auth
      .authenticator('user')
      .revokeTokens()
   }
//add and get user in DB
        async register({request, auth, response}) {

          let user = await Utilisateur.create(request.all())

          //generate token for user;
          let token = await auth.authenticator('user').generate(user)

          Object.assign(user, token)

          return response.json(user)
        }

        async login({request, auth, response}) {

          let {email, password} = request.all();

          try {
            if (await auth.authenticator('user').attempt(email, password)) {
              let user = await Utilisateur.findBy('email', email)
              let token = await auth.authenticator('user').generate(user)

              Object.assign(user, token)

              //return response.json(user)
              return response.json("user")

            }


          }
          catch (e) {
            console.log(e)
            return response.json({message: 'You are not registered!'})
          }
        }

        //get all users
        async index({response}){

            let user = await Utilisateur.all()
            return response.json(user)
          }


        //delete user/token
        async deleteUser({request, auth, response,params}){
          const user= await Utilisateur.where({_id:params.id}).delete({id:params.id})

          return response.status(200).json({

            id: params.id,



          })
          }


          //delete user/token
          async updateUser({params,request, auth, response}){

                    try {
                      const userEmail = request.post('email')
                      const userPassword = request.post('password')


                      const user= await Utilisateur.where({_id:params.id}).update({id:params.id,email:userEmail.email,password:userPassword.password})
                      user.email = userEmail.email
                      user.password =userPassword.password
                  console.log(request+"requete")
                  return response.status(200).json({id:params.id,email:userEmail.email,password:userPassword.password})

                  } catch (e) {
                    console.log(e)
                    return response.json({message: 'You are not authorized to perform this action'})
                  }
            }

}

module.exports = UtilisateursController
