import React,{Component} from 'react'
import {getList,deleteEx,storeEx,updateEx,showOneEx} from '../../../../ajax'
import { Router, Route, browserHistory, IndexRoute} from 'react-router'
import {withRouter} from 'react-router-dom'
//ajout nom dans DB ok
class Update extends Component{

    constructor(props){
      super(props)
      this.state={
        id: '',
        term: '',
        editDisabled: false,
        items: [],
      }



    }
    componentWillMount(){

        this.getAll()


    }

    onChange(){

        this.getAll()


    }

        modifier(e){
          e.preventDefault()
    /*
    let test= document.querySelectorAll('.modifier')


        test.forEach((test) => {
            test.innerHTML='<input type="text" />'

        });

     */

    let test= document.querySelectorAll('.modifier')
//a modifier pour que ce soit le bon résultat et pas que le premier p


        test.forEach((test) => {
/*
this.state.items.map(item=>(
  test.innerHTML=`<input class="input"  placeholder=${item.type}/><input class="input"  placeholder=${item.solution}/>`
))
 */
    var placeholder =  test.innerHTML
           test.innerHTML='<input class="input" type="text" placeholder='+placeholder+' />'
            function logKey(event) {
              if (event.key === "Enter") {
               event.preventDefault();
                 test.innerHTML=event.target.value

               // Do more work
           }
          }
          test.querySelector('.input').addEventListener('keydown', logKey);

        });




        }


update(e){
  e.preventDefault()
  var id= document.getElementById("id").value;
  var solution= document.getElementById("solution").value;
  var type= document.getElementById("type").value;

  updateEx(id,solution,type)

        console.log(this.state.items)

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
        <h3>Modifier</h3>

{this.state.items.map((item,index)=>(
  <div>

  <div className="conteneur">

  <p onChange={()=>{this.onChange()}} className="modifier" id="type" data={"type"+index}>{item.type}</p>
  </div>
  <div className="conteneur">
  <p onChange={()=>{this.onChange()}} className="modifier" id="solution"  data={"solution"+index}>{item.solution}</p>
  </div>




<button onClick={(e)=>{this.modifier(e)}}>modif</button>
<button  onClick={()=>{console.log(document.querySelector(`[data="type${index}"]`).innerHTML) ;updateEx(item._id,document.querySelector(`[data="type${index}"]`).innerHTML,document.querySelector(`[data="solution${index}"]`).innerHTML)
}}>update</button>
  </div>
))}
  <ul>



  </ul>


    </div>
    );
  }


}

export default Update
