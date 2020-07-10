import axios from 'axios';

export const getList = ()=>{


return axios

  .get('api/solutions',{
    headers:{'Content-Type':'application/json'}
      })
  .then(res =>{

    var data = res.data


    return data
  })

}




export const showOneEx = (id)=>{
/*
return axios
  .get(`api/exercice/${id}`,{
    headers:{'Content-Type':'application/json'}
      })
  .then(res =>{
    var data = res.data


    return data
  })
 */
}

export const deleteEx = (id)=>{
/*
return axios
  .delete(`api/exercice/${id}`,{id:id},{
    headers:{'Content-Type':'application/json','Authorization' :'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZTBlNWRiODM1NzUxNTQ3MjQ4ZTUwZmIiLCJpYXQiOjE1Nzc5OTk4MDAsImV4cCI6MTU3ODAwMTYwMH0.I2dRrjS3EVhDP0Og8aqW4mdsLV5oJz2YUlb4SpU3UAo'}
  })
  .then(res =>{
  console.log(res)
  })
 */
}

export const storeEx = (id,solution,type)=>{
/*  return axios
    .post(`api/exercice/add`,{
      headers:{'Content-Type':'application/json'}
        })
    .then(res =>{
    console.log(res)
    })
    return axios
      .post(`api/exercice/add`,{
        headers:{'Content-Type':'application/json'}
          })
      .then(res =>{
      console.log(res)
      })
 */
}



export const updateEx = (id,solution,type)=>{
/*
return axios
  .put(`api/exercice/${id}`,{id:id,solution: solution,type:type},{
    headers:{'Content-Type':'application/json','Authorization' :'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZTBlNWRiODM1NzUxNTQ3MjQ4ZTUwZmIiLCJpYXQiOjE1Nzc5OTk4MDAsImV4cCI6MTU3ODAwMTYwMH0.I2dRrjS3EVhDP0Og8aqW4mdsLV5oJz2YUlb4SpU3UAo'}
      })
  .then(res =>{
  console.log(res)
  })
 */
}

//------------

export const getMenu = ()=>{
  return axios

    .get('api/items',{
      headers:{'Content-Type':'application/json'}
        })
    .then(res =>{

      var data = res.data


      return data
    })
}



//------------------AUTH--------------


export const register = (email,password)=>{

return axios
  .post(`api/auth/register`,{email:email,password:password},{
    headers:{'Content-Type':'application/json'}
  // headers:{'Content-Type':'application/json'}
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZTBlMWFlNWIyYTA3OGY2MzBlZTQ2YzMiLCJpYXQiOjE1Nzc5ODU2NTF9.bZVYTE2NTn9Djo_UulfHZKBsLhIKtsYZ2tzge5H9ehM
      })
  .then(res =>{
  console.log(res)

  })

}
axios.defaults.xsrfHeaderName = "tokenTxt";
axios.defaults.xsrfCookieName= "tokenTxt";
let axiosInstances = axios.create({
  baseURL: "http://localhost:3333",
  timeout: 50000,
});

export const login = (email,password)=>{

const resp= axios
  .post(`api/auth/login`,{email:email,password:password},{
     headers:{'Content-Type':'application/json' }    },{withCredentials:true})
  .then(res =>{
console.log(JSON.stringify(res) )
//sessionStorage.setItem('test',JSON.stringify(res.data.token))
//window.location.href = '/admin';
console.log(res.data.auth)
//cookie split
var tokenC=res.config.headers.tokenTxt.replace('j:{"type":"bearer","token":','').split(",",1,res.config.headers.tokenTxt.length-1)
//var tokenC=res.config.headers.tokenTxt

localStorage.setItem('tokenc',tokenC)
localStorage.setItem('tokenD',res.config.headers.tokenTxt)

localStorage.setItem("tokenn",res.data.user.token)
//document.cookie =axios.defaults.headers['xsrfCookieName']
//localStorage.setItem("n",JSON.stringify(document.cookie))
localStorage.setItem("tokn",res.data.user.token)
//axios.defaults.headers.common['Authorization']  =`Bearer ${tokenC}`
 axios.defaults.headers.common['Authorization']  ="Bearer "+res.data.user.token
//console.log(res.config.headers)

if (res.config.headers.tokenTxt == "undefined" ||  res.config.headers.tokenTxt==null ||  res.config.headers.tokenTxt==""){

  return axios
    .post(`api/auth/login`,{email:email,password:password},{
       headers:{'Content-Type':'application/json',"Authorization":"Bearer "+res.data.user.token }    },{withCredentials:true})
.then(res=>{
  console.log(res.config.headers)

})
}
/*

return axios.get('api/solutions',{
  headers:{'Content-Type':'application/json','Authorization':`${localStorage.getItem("tokenn")}`}
    })
 */

//var token= res.data


}).catch(error=>{
  alert(error+" Problème de connexion en cours... mot de passe et/ou login invalide")
}
)
}

export const getUser = ()=>{
  return axios
    .get(`api/users`,{
      headers:{'Content-Type':'application/json'}
        })
    .then(res =>{
    console.log(res)
    })
}

//axios.defaults.headers.common['Authorization'] = 'Bearer ' + sessionStorage.getItem('token');
