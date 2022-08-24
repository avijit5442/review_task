import React from 'react'
import { useNavigate} from 'react-router-dom'
import { useFormik } from 'formik'
import { useState,useEffect } from 'react'
import axios from 'axios'
export default function UserLogin() {
    const navigate=useNavigate()
    const [users,setusers]=useState()
    const formik=useFormik({
      initialvalues:{
        Email:"",
        Pwd:'',
      },
      onSubmit:values=>{
       for(var user of users){
        if(user.Email==values.Email && user.Password==values.Pwd){
          navigate("/products")
        }
        else{
          alert("Invalid login ! Try again")
        }
       }
      }
    })
    useEffect(()=>{
          axios.get("http://localhost:9400/getusers")
          .then((response)=>{
            setusers(response.data)
          })
    },[])
  return (
    <>
  
    <form onSubmit={formik.handleSubmit}>
    <dl className='text-center'>
    <dt>Email</dt>
    <dd><input type="text" name="Email" value={formik.values.Email} onChange={formik.handleChange}/></dd>
    <dt>Password</dt>
    <dd><input type="password" name="Pwd" value={formik.values.Pwd} onChange={formik.handleChange}/></dd>
    <button className='btn btn-success'>Login</button>
    </dl>
    </form>

    <div onClick={()=>{navigate("/register")}} style={{cursor:"pointer",color:"blue"}}>Don't have an account,Register here?</div>
  
         </>
    
  )
}
