import React from 'react'
import { Link } from 'react-router-dom'
export default function AdminLogin() {
  return (
  <dl className='text-center'>
    <div className='text-danger'>Admin Login</div>
    <dt>UserName</dt>
    <dd><input type="text"/></dd>
    <dt>Password</dt>
    <dd><input type="password"/></dd>
    <Link to="/manage"><button className='btn btn-success'>Login</button></Link>
    
  </dl>
    
  )
}
