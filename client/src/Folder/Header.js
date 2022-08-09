import React from 'react';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import RegisterDonor from './RegisterDonor';

import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from './Home';
import About from './About';

const Header = () => {
  return (
    <div>
    <hr className="one" />

<div className="bottombar">
<nav className="navbar navbar-expand-lg navbar-dark bg-danger text-dark">
    
    <div className="container">
      <Link className="navbar-brand navbar-collapse-md animate__slideInLeft" to="/src/Folder/Home.js"><span className="full-text fs-4">Blood Bank Management System</span>
        <span className="short-text">BBMS</span></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ms-auto animate__slideInRight g-5">
          <li className="nav-item active">
            <Link className="nav-link active" to="/">HOME  </Link>
          </li>
          
          <li className="nav-item">
            <div className="dropdown">
              <button className="btn btn-danger text-light nav-item ps-0" type="button" data-bs-toggle="dropdown" aria-expanded="true">
                DONOR
              </button>
              <ul className="dropdown-menu text-dark">
                <li><Link className="dropdown-item text-dark" to="/RegisterDonar">Register as a Donor</Link></li>
                <li><Link className="dropdown-item text-dark" to="/src/Folder/DonorLogin.js">Donor Login</Link></li>
                <li><Link className="dropdown-item text-dark" to="/src/Folder/Eligible.js">Eligibility</Link></li>
                <li><Link className="dropdown-item text-dark" to="/src/Folder/Bloodcamp.js">View Blood Camp</Link></li>
                <li><Link className="dropdown-item text-dark" to="/src/Folder/OrganizeDrive.js">Organize Blood Drive</Link></li>
                <li><Link className="dropdown-item text-dark" to="/src/Folder/About.js">About Blood Donation</Link></li>
              </ul>
            </div>
          </li>
          <li className="nav-item active">
            <div className="dropdown">
              <button className="btn btn-danger text-light nav-item ps-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                RECIEVER
              </button>
              <ul className="dropdown-menu text-dark">
                <li><Link className="dropdown-item text-dark" to="/src/Folder/BloodStock.js">Find Blood Stock</Link></li>
                <li><Link className="dropdown-item text-dark" to="/src/Folder/BloodBank.js">Find Blood Bank</Link></li>
                <li><Link className="dropdown-item text-dark" to="/src/Folder/PostRequest.js">Post a Blood Request</Link></li>
                <li><Link className="dropdown-item text-dark" to="/src/Folder/FindDonor.js">Find a Blood Donor</Link></li>
              </ul>
            </div>
          </li>

          
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/Login">LOG IN</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/Signup">SIGN UP</Link>
          </li>
          <li className="nav-item ">
            <nav className=" bg-danger">
              <div className="nav-item">
                <form className="d-flex" role="search">
                  <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-danger bg-light " type="submit"><i className="bi bi-search"></i></button>
                </form>
              </div>
            </nav>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </div>
    </div>
    
  )
}

export default Header
