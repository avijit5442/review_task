import React from 'react'
import {Formik,Form,Field,ErrorMessage} from "formik"
import axios from "axios"
import { Link } from 'react-router-dom'
export default function GiveReviews() { 
function handlereset(){
    document.getElementById("title").value=""
    document.getElementById("rating").value=""
    document.getElementById("description").value=""
}
    
  return (
    <div className='container'>
        <div className='d-flex justify-content-between' style={{marginLeft:"500px" }}>
        <h2 className='text-danger' style={{fontFamily:"cursive"}}>Give Reviews</h2>
        <p id="p">Time :</p>
        </div>
        <br/>
        <div>
            <Link to="reviews"><button className='btn btn-warning' style={{float:"right"}}>Reviews</button></Link>
        <h5 style={{fontStyle:"italic" }}>
            Now You can give review about our services...
        </h5>
        <Formik 
         initialValues={{
            title:"",
            rating:0,
            description:"",
         }}
         onSubmit={values=>{
             axios.post("http://localhost:8080/postreviews",values)
             document.getElementById("title").value=""
             document.getElementById("rating").value=""
             document.getElementById("description").value=""
         }}
         
        >
            <Form>
            <dl>
                <dt>Title</dt>
                <dd><Field id="title" type="text" name="title"/></dd>
                
                <dt>Rating</dt>
                <dd><Field id="rating" name="rating" type="number" step="0.2" max="5" min="0"/></dd>
              
                <dt>Description</dt>
                <dd><Field id="description" name="description" type="text" size="40"/></dd>
                
                <button className='btn btn-success'>Submit</button>
            </dl>
            
            
        </Form>
        
        </Formik>
        
        <button onClick={handlereset} className='btn btn-danger mx-4'>Reset</button>
        </div>
    </div>
  )
}
