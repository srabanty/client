import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-color">
        <div className="container">
        <img className="logo" src={logo} alt=""/>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active ml-3">
              <a class="nav-link text-bold" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item ml-3">
              <a class="nav-link text-bold" href="#">Our Portfolio</a>
            </li>
            <li class="nav-item ml-3">
              <a class="nav-link text-bold" href="#">Our Team</a>
            </li>
            <li class="nav-item ml-3">
              <a class="nav-link text-bold" href="#">Contact Us</a>
            </li>
            <li class="nav-item ml-3">
              <Link to="/dashboard"><button className="btn btn-dark text-bold pr-4 pl-4">Login</button></Link>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    );
};

export default Navbar;