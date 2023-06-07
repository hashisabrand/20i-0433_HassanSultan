import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Import image from public folder
import backgroundImage from './background.jpg';

function Houzz() {
  return (
    <div className="container-fluid text-center home-page">

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
      <h1 className="mt-3 display-4">
        Welcome to the <span className="text-primary">Houzz!</span>
      </h1>

      <div className="mt-5">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Sign Up</h5>
            <p className="card-text">Create a new account.</p>
            <Link to="/signup" className="btn btn-primary">
              Sign Up
            </Link>
          </div>
        </div>
        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">Sign In</h5>
            <p className="card-text">Already have an account? Sign in.</p>
            <Link to="/login" className="btn btn-primary">
              Sign In
            </Link>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-5">
        <div className="container">
          <Link className="navbar-brand" to="/Houzz">
            Houzz
          </Link>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/Houzz">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Houzz;
