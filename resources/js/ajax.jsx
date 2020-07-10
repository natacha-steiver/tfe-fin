import axios from 'axios';
axios.defaults.withCredentials = true
import store,{history} from './redux/store'



function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

export const getList = ()=>{

return axios

  .get('api/solutions',{
    headers:{'Content-Type':'application/json',"Authorization":"Bearer "+readCookie('tokenTxt').split(/%[0-55][0-55]/,8).reverse().join('').replace(/%/,' ').split(' ',1).join('')}
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
      headers:{'Content-Type':'application/json',"Authorization":"Bearer "+readCookie('tokenTxt').split(/%[0-55][0-55]/,8).reverse().join('').replace(/%/,' ').split(' ',1).join('')}
    })
    .then(res =>{

      var data = res.data


      return data
    })
}



//------------------AUTH--------------
export const registerUser = (email,password)=>{

return axios
  .post(`api/user/register`,{email:email,password:password})
  .then(res =>{
  console.log(res)

  })

}


export const register = (email,password)=>{

return axios
  .post(`api/auth/register`,{email:email,password:password},{
    headers:{'Content-Type':'application/json',"Authorization":"Bearer "+readCookie('tokenTxt').split(/%[0-55][0-55]/,8).reverse().join('').replace(/%/,' ').split(' ',1).join('')}
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



export const getUser = ()=>{
  return axios
    .get(`api/users`,{
      headers:{'Content-Type':'application/json',"Authorization":"Bearer "+readCookie('tokenTxt').split(/%[0-55][0-55]/,8).reverse().join('').replace(/%/,' ').split(' ',1).join('')}
    })
    .then(res =>{
    console.log(res)
    let data=res.data;
    return data
    })
}

export const deleteUser = (id)=>{

  return axios({
      method: 'delete',
      url: `api/user/${id}`,
      data:{id:id},
      headers:{'Content-Type':'application/json',"Authorization":"Bearer "+readCookie('tokenTxt').split(/%[0-55][0-55]/,8).reverse().join('').replace(/%/,' ').split(' ',1).join('')}
}).then(res => {
        console.log(res)
    })
    .catch(error => {
      throw(error);
    });
}


export const updateUser = (id,email,password)=>{

return axios
  .put(`api/user/${id}`,{id:id,email: email,password:password},{
    headers:{'Content-Type':'application/json',"Authorization":"Bearer "+readCookie('tokenTxt').split(/%[0-55][0-55]/,8).reverse().join('').replace(/%/,' ').split(' ',1).join('')}
  })
  .then(res =>{
  console.log(res)
  })

}
//--------------Admin------------------------

export const getAdmin = ()=>{
  return axios
    .get(`api/admins`,{
      headers:{'Content-Type':'application/json',"Authorization":"Bearer "+readCookie('tokenTxt').split(/%[0-55][0-55]/,8).reverse().join('').replace(/%/,' ').split(' ',1).join('')}
    })
    .then(res =>{
    console.log(res)
    let data=res.data;
    return data
    })
}


export const deleteAdmin = (id)=>{


  return axios({
      method: 'delete',
      url: `api/auth/${id}`,
      data:{id:id},
      headers:{'Content-Type':'application/json',"Authorization":"Bearer "+readCookie('tokenTxt').split(/%[0-55][0-55]/,8).reverse().join('').replace(/%/,' ').split(' ',1).join('')}
}).then(res => {
        console.log(res)
    })
    .catch(error => {
      throw(error);
    });


}


export const updateAdmin = (id,email,password)=>{

return axios
  .put(`api/auth/${id}`,{id:id,email: email,password:password},{
    headers:{'Content-Type':'application/json',"Authorization":"Bearer "+readCookie('tokenTxt').split(/%[0-55][0-55]/,8).reverse().join('').replace(/%/,' ').split(' ',1).join('')}
  })
  .then(res =>{
  console.log(res)
  })

}
//-----------------------------------


export const solutionsRefEx = ()=>{

return axios
  .get(`api/solutionsEx`,{
    headers:{'Content-Type':'application/json',"Authorization":"Bearer "+readCookie('tokenTxt').split(/%[0-55][0-55]/,8).reverse().join('').replace(/%/,' ').split(' ',1).join('')}
  })
  .then(res =>{
    var data = res.data

  console.log(res)
    return data
  })

}

export const logoutAdmin = ()=>{

return axios
  .get(`api/auth/logout`)
  .then(res =>{
    axios.defaults.withCredentials = true
    axios.defaults.xsrfHeaderName = "";
    axios.defaults.xsrfCookieName = "";
  console.log(res)

  document.location.reload(true);
    window.location.href = '/';
  })

}


export const logoutUser = ()=>{

return axios
  .get(`api/user/logout`,{
    headers:{'Content-Type':'application/json',"Authorization":"Bearer "+readCookie('tokenTxt').split(/%[0-55][0-55]/,8).reverse().join('').replace(/%/,' ').split(' ',1).join('')}
  })
  .then(res =>{
    axios.defaults.withCredentials = true
    axios.defaults.xsrfHeaderName = "";
    axios.defaults.xsrfCookieName = "";
  console.log(res)

  document.location.reload(true);
    window.location.href = '/login_user';
  })

}



export const getCurrentAdmin = ()=>{

return axios
  .get(`api/admin`,{
    headers:{'Content-Type':'application/json',"Authorization":"Bearer "+readCookie('tokenTxt').split(/%[0-55][0-55]/,8).reverse().join('').replace(/%/,' ').split(' ',1).join('')}
  })
  .then(res =>{

  console.log(res)
  })

}
