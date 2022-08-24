import "./welcome.css"
const Welcome=()=>{
       return(

       <div id="back">
       <h2 className="text-center ">Welcome to react</h2> 
       <form className="container main">
            <div className="d-flex justify-content-between p-4">
                <input className="form-control" type="text" placeholder="Enter Employee Id"/>
                <div className="form-switch m-4"><input type="checkbox" className="form-check-input"/>prime member</div>
                <button className="btn btn-success bi bi-chevron-right m-4">Enter</button>
            </div> 
       </form>
        </div>
       )
//using arrow function consumes less space in memory than tradional function based component,Better to use tradional function 
//in case of using dis-connect/discrete memories(i.e if we want to that if one functionality depend on other),use arrow in case
// of if we want to make application light weight and if every functionality is independent to each other 
       
}
export default Welcome
/*
import React from "react"
export default class Welcome extends React.Component{
    render(){
        return(
            <>
            <h2 className="text-center">Welcome to react</h2> 
            <form className="container">
                 <div className="d-flex justify-content-between p-4">
                     <input className="form-control" type="text" placeholder="Enter Employee Id"/>
                     <div className="form-switch m-4"><input type="checkbox" className="form-check-input"/>prime member</div>
                     <button className="btn btn-success m-4">Enter</button>
                 </div> 
            </form>
             </>
        )
    }
}
*/