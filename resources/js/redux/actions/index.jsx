// src/js/actions/index.js


import {
  ADD_LANGAGE,
  DELETE_LANGAGE,
  FETCH_LANGAGE,
  UPDATE_LANGAGE,
  ADD_SOLUTION,
  DELETE_SOLUTION,
  FETCH_SOLUTION,
  UPDATE_SOLUTION,
  ADD_EXERCICE,
  DELETE_EXERCICE,
  FETCH_EXERCICE,
  UPDATE_EXERCICE,
  FETCH_SOLUTION_EX,
  ADD_THEORIE,
  DELETE_THEORIE,
  FETCH_THEORIE,
  UPDATE_THEORIE,
  POST_LOGIN,
  GET_LOGIN,
  POST_REGISTER,
  GET_REGISTER,
  ADD_USER,
  DELETE_USER,
  FETCH_USER ,
  UPDATE_USER,
  POST_LOGIN_USER,
  GET_LOGIN_USER


 } from  "../constantes/index";

import axios from 'axios';
axios.defaults.withCredentials = true
axios.defaults.xsrfHeaderName = "tokenTxt";
axios.defaults.xsrfCookieName = "tokenTxt";

/*

function logCookie(cookie) {
  if (cookie) {
    console.log(cookie.value);
  }
}

function getCookie(tabs) {
  var getting = browser.cookies.get({
    url: tabs[0].url,
    name: "tokenTxt"
  });
  getting.then(logCookie);
}

var getActive = browser.tabs.query({
  active: true,
  currentWindow: true
});
getActive.then(getCookie);
axios.defaults.headers.common.Authorization = getting.then(logCookie);

 */
        // This means that there's a JWT so someone must be logged in.

      //  axios.defaults.headers.common.Authorization = document.cookie

//axios.defaults.headers.common['Authorization']  =`Bearer ${localStorage.getItem("tokenn")}`
let axiosInstance = axios.create({
  baseURL: "http://localhost:3333",
  timeout: 50000,
});
axiosInstance.interceptors.request.use(
  config => {

if(config.headers.tokenTxt!=="undefined"){
  config.headers['Authorization'] = config.headers.tokenTxt

}
else{
  config.headers['Authorization'] = "Bearer config.headers.tokenTxt"

}
  return config;
  },
  error => Promise.reject(error)
);
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
//------------------------------------------SOLUTIONS DES EXERCICES-------------------------------
//-------------------ADD-------------------
export const createSolution = ({solution,type,ref }) => {
  return (dispatch) => {
    return axios.post(`api/solution/add`, {solution,type,ref},{
      headers:{'Content-Type':'application/json',"Authorization":"Bearer "+readCookie('tokenTxt').split(/%[0-55][0-55]/,8).reverse().join('').replace(/%/,' ').split(' ',1).join('')}
    })




      .then(response => {

         dispatch(createSolutionSuccess(response.data))
window.location.reload();
      })
      .catch(error => {
        console.log(error)
        throw(error);
      });
  };
};

export const createSolutionSuccess =  (data) => {

  return {
    type: ADD_SOLUTION,
    payload: {
      _id: data.all.map(item=>(
          item._id
        )).toString(),
      solution: data.all.map(item=>(
          item.solution
        )).toString(),
      type:data.all.map(item=>(
          item.type
        )).toString(),
      ref:data.all.map(item=>(
            item.ref
          )).toString(),
      date: new Date().toLocaleDateString()
    }
  }
};

//-------------------UPDATE-------------------
export const updateSolution = (id,type,solution,ref)=>{



    return (dispatch) => {
      return axios.put(`api/solution/${id}`,{id:id,type:type,solution: solution,ref:ref},{
        headers:{'Content-Type':'application/json',"Authorization":"Bearer "+readCookie('tokenTxt').split(/%[0-55][0-55]/,8).reverse().join('').replace(/%/,' ').split(' ',1).join('')}
      })
      .then(response => {
        console.log(JSON.stringify(response)+"reponseok")
          dispatch(updateSolutionSuccess(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
}

export const updateSolutionSuccess =  (data) => {
  console.log("put"+JSON.stringify(data.id))
  return {
    type: UPDATE_SOLUTION,
    payload: {
      _id: data.id,
      solution: data.solution,
      type: data.type,
      ref:data.ref,
      date: new Date().toLocaleDateString()
    }
  }
};
//--------------DELETE---------------------------
export const deleteSolutionSuccess = _id => {
  return {
    type: DELETE_SOLUTION,
    payload: {
      _id
    }
  }
}

export const deleteSolution = id => {
  return (dispatch) => {
    return axios({
        method: 'delete',
        url: `api/solution/${id}`,
        data:{id:id},
        headers:{'Content-Type':'application/json',"Authorization":"Bearer "+readCookie('tokenTxt').split(/%[0-55][0-55]/,8).reverse().join('').replace(/%/,' ').split(' ',1).join('')}
}).then(response => {
        dispatch(deleteSolutionSuccess(id))
      })
      .catch(error => {
        throw(error);
      });
  };
};
//--------------GET ALL---------------------------
export const fetchSolutions = (solutions) => {
  return {
    type: FETCH_SOLUTION,
    solutions
  }
};

//"Authorization":"Bearer "+readCookie('tokenTxt').split('%')
export const fetchAllSolutions = () => {
  return (dispatch) => {
    return axios.get('api/solutions',{
      headers:{'Content-Type':'application/json',"Authorization":"Bearer "+readCookie('tokenTxt').split(/%[0-55][0-55]/,8).reverse().join('').replace(/%/,' ').split(' ',1).join('')}
        })

      .then(res => {
        dispatch(fetchSolutions(res.data))
      })
      .catch((error,res)=> {
//error 401

//  console.log(res.config.header)

        throw(error);
      });
  };
};


//------------------------------------------EXERCICES-------------------------------
//-------------------ADD-------------------
export const createExercice = ({ennonce,type,titre,ref }) => {
  return (dispatch) => {
    return axios.post(`api/exercice/add`, {ennonce,type,titre,ref},{
      headers:{'Content-Type':'application/json',"Authorization":"Bearer "+readCookie('tokenTxt').split(/%[0-55][0-55]/,8).reverse().join('').replace(/%/,' ').split(' ',1).join('')}
    })
      .then(response => {

        dispatch(createExerciceSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createExerciceSuccess =  (data) => {
  console.log(data.all+"testAddReponse")
  console.log(data.all.map(item=>(
      item._id
    )).toString()+'id add')



  return {
    type: ADD_EXERCICE,
    payload: {
      _id: data.all.map(item=>(
          item._id
        )).toString(),
      ennonce: data.all.map(item=>(
          item.ennonce
        )).toString(),
      type:data.all.map(item=>(
          item.type
        )).toString(),
      titre:data.all.map(item=>(
            item.titre
          )).toString(),
      ref:data.all.map(item=>(
                item.ref
              )).toString(),
      date: new Date().toLocaleDateString()
    }
  }
};

//-------------------UPDATE-------------------
export const updateExercice = (id,ennonce,type,titre,ref)=>{



    return (dispatch) => {
      return axios.put(`api/exercice/${id}`,{id:id,ennonce: ennonce,type:type,titre:titre,ref:ref},{
        headers:{'Content-Type':'application/json',"Authorization":"Bearer "+readCookie('tokenTxt').split(/%[0-55][0-55]/,8).reverse().join('').replace(/%/,' ').split(' ',1).join('')}
      })
      .then(response => {
        console.log(JSON.stringify(response)+"reponseok")
          dispatch(updateExerciceSuccess(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
}

export const updateExerciceSuccess =  (data) => {
  console.log("put"+JSON.stringify(data.id))
  return {
    type: UPDATE_EXERCICE,
    payload: {
      _id: data.id,
      ennonce: data.ennonce,
      type: data.type,
      titre: data.titre,
      ref: data.ref,

      date: new Date().toLocaleDateString()
    }
  }
};
//--------------DELETE---------------------------
export const deleteExerciceSuccess = _id => {
  return {
    type: DELETE_EXERCICE,
    payload: {
      _id
    }
  }
}

export const deleteExercice = id => {
  return (dispatch) => {
    return axios({
        method: 'delete',
        url: `api/exercice/${id}`,
        data:{id:id},
        headers:{'Content-Type':'application/json',"Authorization":"Bearer "+readCookie('tokenTxt').split(/%[0-55][0-55]/,8).reverse().join('').replace(/%/,' ').split(' ',1).join('')}
}).then(response => {
        dispatch(deleteExerciceSuccess(id))
      })
      .catch(error => {
        throw(error);
      });
  };
};
//--------------GET ALL---------------------------
export const fetchExercices = (exercices) => {
  return {
    type: FETCH_EXERCICE,
    exercices
  }
};

export const fetchAllExercices = () => {
  return (dispatch) => {
    return axios.get('api/exercices',{
      headers:{'Content-Type':'application/json',"Authorization":"Bearer "+readCookie('tokenTxt').split(/%[0-55][0-55]/,8).reverse().join('').replace(/%/,' ').split(' ',1).join('')}
        })
      .then(response => {
        dispatch(fetchExercices(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};



export const fetchSolutionsEx = (solutionsEx) => {
  return {
    type: FETCH_SOLUTION_EX,
    solutionsEx
  }
};

export const fetchAllSolutionsEx = () => {
  return (dispatch) => {
    return axios.get('api/solutionsEx',{
      headers:{'Content-Type':'application/json',"Authorization":"Bearer "+readCookie('tokenTxt').split(/%[0-55][0-55]/,8).reverse().join('').replace(/%/,' ').split(' ',1).join('')}
        })
      .then(response => {
        dispatch(fetchSolutionsEx(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

//------------------------------------------THEORIES-------------------------------
//-------------------ADD-------------------

export const createTheorie = ({titre,texte,image,video,langage }) => {
  return (dispatch) => {

    return axios.post(
    {

      method: 'post',
      url: `api/theorie/add`,
      data: {titre,texte,image,video,langage },
      headers:{'Content-Type':'application/json',"Authorization":"Bearer "+readCookie('tokenTxt').split(/%[0-55][0-55]/,8).reverse().join('').replace(/%/,' ').split(' ',1).join('')}
    }

  ).then(response => {

        dispatch(createTheorieSuccess(response.data))

      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createTheorieSuccess =  (data) => {
/*  console.log(data.all+"testAddReponse")
  console.log(data.all.map(item=>(
      item._id
    )).toString()+'id add')*/
  return {
    type: ADD_THEORIE,
    payload: {
      _id: data.all.map(item=>(
          item._id
        )).toString(),
      titre: data.all.map(item=>(
          item.titre
        )).toString(),
      texte:data.all.map(item=>(
          item.texte
        )).toString(),
      image:data.all.map(item=>(
            item.image
          )).toString(),
      video:data.all.map(item=>(
              item.video
            )).toString(),
      langage:data.all.map(item=>(
                    item.langage
                  )).toString(),
      date: new Date().toLocaleDateString()
    }
  }
};

//-------------------UPDATE-------------------
export const updateTheorie = (id,titre,texte,image,video,langage )=>{



    return (dispatch) => {
      return axios.put({

        method: 'put',
        url: `api/theorie/${id}`,
        data:{id:id,titre: titre,texte:texte,image:image,video:video,langage:langage},
        headers:{'Content-Type':'application/json',"Authorization":"Bearer "+readCookie('tokenTxt').split(/%[0-55][0-55]/,8).reverse().join('').replace(/%/,' ').split(' ',1).join('')}
      })
      .then(response => {
        console.log(JSON.stringify(response)+"reponseok")
          dispatch(updateTheorieSuccess(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
}

export const updateTheorieSuccess =  (data) => {
  console.log("put"+JSON.stringify(data.id))
  return {
    type: UPDATE_THEORIE,
    payload: {
      _id: data.id,
      titre: data.titre,
      texte: data.texte,
      image:data.image,
      video:data.video,
      langage:data.langage,
      date: new Date().toLocaleDateString()
    }
  }
};
//--------------DELETE---------------------------
export const deleteTheorieSuccess = _id => {
  return {
    type: DELETE_THEORIE,
    payload: {
      _id
    }
  }
}

export const deleteTheorie = id => {
  return (dispatch) => {
    return axios({
        method: 'delete',
        url: `api/theorie/${id}`,
        data:{id:id},
        headers:{'Content-Type':'application/json',"Authorization":"Bearer "+readCookie('tokenTxt').split(/%[0-55][0-55]/,8).reverse().join('').replace(/%/,' ').split(' ',1).join('')}
}).then(response => {
        dispatch(deleteTheorieSuccess(id))
      })
      .catch(error => {
        throw(error);
      });
  };
};
//--------------GET ALL---------------------------
export const fetchTheories = (theories) => {
  return {
    type: FETCH_THEORIE,
    theories
  }
};

export const fetchAllTheories = () => {
  return (dispatch) => {
    return axios.get('api/theories',{headers:{"Authorization":"Bearer "+readCookie('tokenTxt').split(/%[0-55][0-55]/,8).reverse().join('').replace(/%/,' ').split(' ',1).join('')}})

      .then(response => {
        dispatch(fetchTheories(response.data))
      })
      .catch(error => {
        alert('connectez-vous pour avoir accès.')
        throw(error);
      });
  };
};




//------------------------------------------Langages-------------------------------
//-------------------ADD-------------------
export const createLangage = ({langage,image }) => {
  return (dispatch) => {
    return axios.post(`api/langage/add`, {langage,image },{
      headers:{'Content-Type':'application/json',"Authorization":"Bearer "+readCookie('tokenTxt').split(/%[0-55][0-55]/,8).reverse().join('').replace(/%/,' ').split(' ',1).join('')}
    })




      .then(response => {

         dispatch(createLangageSuccess(response.data))
         window.location.reload();
      })
      .catch(error => {
        console.log(error)
        throw(error);
      });
  };
};

export const createLangageSuccess =  (data) => {

  return {
    type: ADD_LANGAGE,
    payload: {
      _id: data.all.map(item=>(
          item._id
        )).toString(),
      langage: data.all.map(item=>(
          item.langage
        )).toString(),
      image:data.all.map(item=>(
          item.image
        )).toString(),
      date: new Date().toLocaleDateString()
    }
  }
};

//-------------------UPDATE-------------------
export const updateLangage = (id,langage,image)=>{



    return (dispatch) => {
      return axios.put(`api/langage/${id}`,{id:id,langage: langage,image:image},
        {
        headers:{'Content-Type':'application/json',"Authorization":"Bearer "+readCookie('tokenTxt').split(/%[0-55][0-55]/,8).reverse().join('').replace(/%/,' ').split(' ',1).join('')}
      })
      .then(response => {
        console.log(JSON.stringify(response)+"reponseok")
          dispatch(updateLangageSuccess(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
}

export const updateLangageSuccess =  (data) => {
  console.log("put"+JSON.stringify(data._id))
  return {
    type: UPDATE_LANGAGE,
    payload: {
      _id: data.id,
      langage: data.langage,
      image: data.image,
      date: new Date().toLocaleDateString()
    }
  }
};
//--------------DELETE---------------------------
export const deleteLangageSuccess = _id => {
  return {
    type: DELETE_LANGAGE,
    payload: {
      _id
    }
  }
}

export const deleteLangage = id => {
  return (dispatch) => {
    return axios({
        method: 'delete',
        url: `api/langage/${id}`,
        data:{id:id},
        headers:{'Content-Type':'application/json',"Authorization":"Bearer "+readCookie('tokenTxt').split(/%[0-55][0-55]/,8).reverse().join('').replace(/%/,' ').split(' ',1).join('')}
}).then(response => {
        dispatch(deleteLangageSuccess(id))
      })
      .catch(error => {
        throw(error);
      });
  };
};
//--------------GET ALL---------------------------
export const fetchLangages = (langages) => {
  return {
    type: FETCH_LANGAGE,
    langages
  }
};

//"Authorization":"Bearer "+readCookie('tokenTxt').split('%')
export const fetchAllLangages = () => {
  return (dispatch) => {
    return axios.get('api/langages',{
      headers:{'Content-Type':'application/json',"Authorization":"Bearer "+readCookie('tokenTxt').split(/%[0-55][0-55]/,8).reverse().join('').replace(/%/,' ').split(' ',1).join('')}
        })

      .then(res => {
        dispatch(fetchLangages(res.data))
      })
      .catch((error,res)=> {
//error 401

//  console.log(res.config.header)

        throw(error);
      });
  };
};
