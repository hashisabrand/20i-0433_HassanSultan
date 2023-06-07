import React from 'react';
import { Link } from 'react-router-dom';
import SearchHousingScheme from './SearchHS';
import 'bootstrap/dist/css/bootstrap.min.css';

function HSHome() {
  return (
    <div className="container-fluid text-center home-page">
      <div className="background-image"></div>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="93.000000pt"
        height="63.000000pt"
        viewBox="0 0 93.000000 63.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* SVG path code */}
      </svg>
      <h1 className="mt-3 display-4">Welcome to the <span className="text-primary">Houzz!</span></h1>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-5">
        <div className="container">
          <Link className="navbar-brand" to="/home">Houzz</Link>
  
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/profile">My Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <span className="text-danger">Logout!</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      

      <SearchHousingScheme/>


      <div className="mt-5">
        <div className="card">
        <div className="card bg-info text-black">
          <div className="card-body" >
            <h5 className="card-title">All Agents</h5>
            <p className="card-text">Click the button below to view agents.</p>
            <Link to="/ViewAgent" className="btn btn-primary">View Agents</Link>
          </div>
        </div>
      </div>
    </div>
    </div>

    
  );
}

export default HSHome;
