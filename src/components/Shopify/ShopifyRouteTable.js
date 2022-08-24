import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminLogin from './AdminLogin'
import AdminOperation from './AdminOperation'
import Cart from './Cart'
import Products from './Products'
import Register from './Register'
import ShopifyLandingPage from './ShopifyLandingPage'
import UserLogin from './UserLogin'

export default function ShopifyRouteTable() {
  return (
    <div>
       <BrowserRouter>
       <Routes>
        <Route path="/"element={<ShopifyLandingPage/>}></Route>
        <Route path="/userlogin"element={<UserLogin/>}></Route>
          <Route path="/products"element={<Products/>}>
            <Route path="cart" element={<Cart/>}/>
          </Route>
        <Route path="/register"element={<Register/>}></Route>
        <Route path="/adminlogin"element={<AdminLogin/>}>
          
        </Route>
        <Route path="/manage" element={<AdminOperation/>}/>
       </Routes>
       </BrowserRouter> 
    </div>
  )
}
