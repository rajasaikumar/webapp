import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
   <>
   <div class= "container mt-3">
   <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand ms-3" href="/">SAI KUMAR</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav  ">
        <li class="nav-item">
          <Link className='nav-link' to="/">Home</Link>
        </li>
        <li class="nav-item">
        <Link className='nav-link' to="/about">About</Link>
        </li>
        <li class="nav-item">
        <Link className='nav-link' to="/skills">Skills</Link>
        </li>
        <li class="nav-item">
        <Link className='nav-link' to="/experience">Experience</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
</div>
   </>
  )
}

export default Navbar
