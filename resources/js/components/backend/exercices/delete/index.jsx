import React,{Component} from 'react'
import {getList,deleteEx,storeEx,updateEx,showOneEx} from '../../../../ajax'
import { Router, Route, browserHistory, IndexRoute} from 'react-router'
import {withRouter} from 'react-router-dom'



//ajout nom dans DB ok
class Delete extends Component{

  constructor(props){
    super(props)
    this.state={
      id: '',
      term: '',
      editDisabled: false,
      items: []
    }


  }
  componentDidMount(){



    this.getAll()
  }





delete(id){
()=>{
     deleteEx(id),console.log(this.state.items)
}




  }


  getAll(){
    getList().then(
      data => {
        this.setState(
        {

          items: data,

        }
        )
      }
    )
  }


  render() {
const data=this.state.items

  return (
      <div>
      <h3>tous les exercices</h3>
      <div>
{this.state.items.map(item=>(
<div>
<p ids={item._id}>{item._id}</p>
<p>{item.type}</p>
  <p>{item.solution}</p>
  <h3>Supprimer</h3>



<button  onClick={()=>{this.delete(item._id)}}>Supprimer</button>





</div>

)
)}
      </div>


  </div>
  );
}



}

export default Delete
