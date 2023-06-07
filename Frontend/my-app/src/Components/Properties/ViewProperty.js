

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const ViewProperty = () => {
    const [properties, setProperties] = useState([]);
  
    // Function to fetch all properties
    const fetchProperties = async () => {
      try {
        const response = await axios.get('http://localhost:3000/clientppt/getAllProperty');
        setProperties(response.data.Properties);
      } catch (error) {
        console.log('Error:', error);
      }
    };
  
    useEffect(() => {
      fetchProperties();
    }, []);
  
    return (

  
   

      
    <div className="row mt-5">

<div>
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
</div>

          {properties.map((property) => (
            <div key={property._id} className="col-lg-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{property.Title} </h5>
                  <p className="card-text">{property.description}</p>
                  <p className="card-text">{property.City}</p>
                  <p className="card-text">{property.mobileNo}</p>
                  <p className="card-text">{property.email}</p>
                  <Link to={`/agents/${property._id}`} className="btn btn-primary">Contact Agent</Link>
                </div>
              </div>
            </div>
          ))}
          </div>
        

    );
  };
  
  export default ViewProperty;
  