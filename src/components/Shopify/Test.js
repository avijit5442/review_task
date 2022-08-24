import React from 'react'
import { useState } from 'react'
import {useCookies} from "react-cookie"
export default function Test() {
    const[cookies,setcookies,removecookies]=useCookies(["username"])
    const [details,setdetails]=({
        UserName:"",
        Password:'',
    })
    function handleUser(e){
        setdetails({
                  UserName:e.target.value,
                  Password:details.Password 
        })

    }
    function handlePwd(e){
        setdetails({
                    UserName:details.UserName,
                    Password:e.target.value,
        })

    }
    function handleSubmit(){
        setcookies("username",details.UserName,{path:"/",expires:new Date("2022-12-25 20:24")})
    }
  return (
    <div>
      <form>
        <dl>
            <dt>UserName</dt>
            <dd><input onChange={handleUser} type="text"/></dd>
            <dt>Password</dt>
            <dd><input onChange={handlePwd} type="password"/></dd>
            <dd><button onClick={handleSubmit}>Login</button></dd>
        </dl>
      </form>
      <p>hello{cookies.username}</p>
    </div>
  )
}
