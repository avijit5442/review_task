import { useState } from "react";
import axios from "axios"
import {useNavigate} from "react-router-dom"
export default function Register() {
  var navigate=useNavigate()
  const [userdetails,setuserdetails]=useState({
    Fname:'',
    Lname:'',
    Mobile:'',
    Age:'',
    Email:'',
    Password:'',
  })   
function handleChangeFname(e){
  setuserdetails({
    Fname:e.target.value,
    Lname:userdetails.Lname,
    Mobile:userdetails.Mobile,
    Age:userdetails.Age,
    Email:userdetails.Email,
    Password:userdetails.Password,
  })
}
function handleChangeLname(e){
  setuserdetails({
    Fname:userdetails.Fname,
    Lname:e.target.value,
    Mobile:userdetails.Mobile,
    Age:userdetails.Age,
    Email:userdetails.Email,
    Password:userdetails.Password,
  })
}
function handleChangeMobile(e){
  setuserdetails({
    Fname:userdetails.Fname,
    Lname:userdetails.Lname,
    Mobile:e.target.value,
    Age:userdetails.Age,
    Email:userdetails.Email,
    Password:userdetails.Password,
  })
}function handleChangeAge(e){
  setuserdetails({
    Fname:userdetails.Fname,
    Lname:userdetails.Lname,
    Mobile:userdetails.Mobile,
    Age:e.target.value,
    Email:userdetails.Email,
    Password:userdetails.Password,
  })
}function handleChangeEmail(e){
  setuserdetails({
    Fname:userdetails.Fname,
    Lname:userdetails.Lname,
    Mobile:userdetails.Mobile,
    Age:userdetails.Age,
    Email:e.target.value,
    Password:userdetails.Password,
  })
}function handleChangeCpwd(e){
  setuserdetails({
    Fname:userdetails.Fname,
    Lname:userdetails.Lname,
    Mobile:userdetails.Mobile,
    Age:userdetails.Age,
    Email:userdetails.Email,
    Password:e.target.value,
  })
}
    function Registerclick(){
      axios.post("http://localhost:9400/registerusers",userdetails)
      navigate("/login")
    }
  return (
    <div>
      <form>
        <dl className='text-center'>
            <dt>FirstName</dt>
            <dd><input type="text" onChange={handleChangeFname}/></dd>
            <dt>LastName</dt>
            <dd><input type="text" onChange={handleChangeLname} /></dd>
            <dt>Age</dt>
            <dd><input type="text" onChange={handleChangeAge} /></dd>
            <dt>Mobile</dt>
            <dd><input type="text" onChange={handleChangeMobile}/></dd>
            <dt>Email</dt>
            <dd><input type="text" onChange={handleChangeEmail}/></dd>           
            <dt>Choose Password</dt>
            <dd><input type="text"  onChange={handleChangeCpwd}/></dd>
            <button className='btn btn-success' onClick={Registerclick}>Register</button>
            
        </dl>  
        <br/>
        
        </form>
    </div>
  )
}
