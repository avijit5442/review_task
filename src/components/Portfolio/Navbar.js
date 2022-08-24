import { Link } from "react-router-dom"
import React from 'react'

export default function Navbar() {
  return (
    <div>
              <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
    <div class="container-fluid">
    <a class="navbar-brand">AVIJIT</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="me-auto">
      </ul>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
          <Link to="/home"><a className="nav-link" aria-current="page"><i class="bi bi-house-door"></i></a></Link>
        </li>
        <li class="nav-item mx-4">
          <Link to="/about"><a className="nav-link" aria-current="page" >About me</a></Link>
        </li>
        <li class="nav-item">
          <Link to="/projects"><a className="nav-link" aria-current="page" >skills</a></Link>
        </li>
        <li class="nav-item">
          <Link to="/contact"><a className="nav-link" aria-current="page" >Contact</a></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
