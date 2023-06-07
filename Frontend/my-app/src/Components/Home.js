import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';




function HomePage() {
  return (
    <div className="container-fluid text-center home-page">
      <div className="background-image"></div>
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="93.000000pt" height="63.000000pt" viewBox="0 0 93.000000 63.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,63.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M373 515 c-29 -13 -53 -28 -53 -32 0 -4 35 -43 77 -85 l77 -78 53 52
c29 28 56 49 60 45 4 -4 -17 -31 -45 -60 l-52 -53 45 -44 c24 -24 46 -42 48
-39 3 2 10 14 16 27 10 20 10 27 -3 41 -15 16 -15 19 3 35 21 20 41 14 41 -11
0 -31 -23 -93 -43 -114 l-20 -21 -53 53 -54 53 -53 -52 c-29 -29 -56 -49 -60
-45 -4 4 16 31 45 60 l53 53 -47 47 -47 47 -12 -28 c-10 -22 -10 -31 0 -48 10
-17 10 -23 -5 -39 -9 -10 -21 -19 -26 -19 -14 0 -9 81 9 117 16 34 15 35 -9
60 l-25 25 -24 -39 c-34 -54 -39 -164 -11 -219 64 -123 200 -169 323 -107 150
77 170 273 39 385 -72 62 -160 74 -247 33z m132 -56 c4 -5 -1 -19 -11 -30 -17
-19 -18 -19 -41 3 -17 16 -20 24 -11 30 19 11 56 10 63 -3z m-13 -286 c27 -25
22 -33 -22 -33 -44 0 -48 5 -23 32 20 22 22 22 45 1z"/>
</g>
</svg>
<h1 className="mt-3 display-4">Welcome to the <span className="text-primary">Houzz!</span></h1>



      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-5">
        <div className="container">
          <Link className="navbar-brand" to="/home">Houzz</Link>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/profile">My Profile</Link>
            </li>
          </ul>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/login" > <span className="text-danger">Logout!</span></Link>
            </li>
          </ul>
        </div>
      </nav>

      

      <div className="row mt-5">
      <div className="col-lg-4">
          <div className="card bg-success text-white">
            <div className="card-body">
              <h5 className="card-title">Houzz Agents</h5>
              <p className="card-text">View agents and their details.</p>
              <Link to="/AgentHome" className="btn btn-light">Go to Agent Panel</Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card bg-secondary text-white">
            <div className="card-body">
              <h5 className="card-title">Houzz Properties</h5>
              <p className="card-text">Explore and manage properties.</p>
              <Link to="/properties" className="btn btn-light">Go to Property Panel</Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card bg-info text-white">
            <div className="card-body">
              <h5 className="card-title">Houzz Housing Schemes</h5>
              <p className="card-text">View and manage housing schemes.</p>
              <Link to="/housing-schemes" className="btn btn-light">Go to Housing Scheme Panel</Link>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default HomePage;
