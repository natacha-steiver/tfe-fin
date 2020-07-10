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
  return axios
    .get(`api/exercice/${id}`,{
      headers:{'Content-Type':'application/json'}
        })
    .then(res =>{
      var data = res.data


      return data
    })
}

export const deleteEx = (id)=>{
  return axios
    .delete(`api/exercice/${id}`,{id:id},{
      headers:{'Content-Type':'application/json'}
    })
    .then(res =>{
    console.log(res)
    })
}

export const storeEx = (id,solution,type)=>{
  return axios
    .post(`api/exercice/add`,{
      headers:{'Content-Type':'application/json'}
        })
    .then(res =>{
    console.log(res)
    })
}



export const updateEx = (id,solution,type)=>{
  return axios
    .put(`api/exercice/${id}`,{id:id,solution: solution,type:type},{
      headers:{'Content-Type':'application/json'}
        })
    .then(res =>{
    console.log(res)
    })
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
    .post(`http://localhost:3000/auth/register`,{email:email,password:password},{
      headers:{'Content-Type':'application/json', 'Authorization' :'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZGYwZmM2YWFhODg1NGQ0MDQ1NTkzM2IiLCJpYXQiOjE1NzYwNzQzNDYsImV4cCI6MTU3NjA3NjE0Nn0.zLGaE_xt-peImOPbG7Psl9Fx3BYwxaXPKO5WHAJdFe8'}
        })
    .then(res =>{
    console.log(res)
    })
}



export const login = (email,password)=>{
  return axios
    .post(`http://localhost:3000/auth/login`,{email:email,password:password},{
      headers:{'Content-Type':'application/json'}
        })
    .then(res =>{
    console.log(res)
var token= res.data
return token
    })
}

export const getUser = ()=>{
  return axios
    .get(`users`,{
      headers:{'Content-Type':'application/json'}
        })
    .then(res =>{
    console.log(res)
    })
}
