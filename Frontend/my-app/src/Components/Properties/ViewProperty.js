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

  const [contactedPropertyId, setContactedPropertyId] = useState('');

  const handleContactOwner = (propertyId) => {
    // Implement your logic to contact the owner here
    // Set the propertyId to indicate that it has been contacted
    setContactedPropertyId(propertyId);
  };

  return (
    <div className="container-fluid text-center home-page">
      <h1 className="mt-3 display-4">
        Welcome to the <span className="text-primary">Houzz!</span>
      </h1>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-5">
        <div className="container">
          <Link className="navbar-brand" to="/home">
            Houzz
          </Link>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                My Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <span className="text-danger">Logout!</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="row mt-5">
        {properties.map((property) => (
          <div key={property._id} className="col-lg-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{property.Title} </h5>
                <p className="card-text">{property.description}</p>
                <p className="card-text">{property.City}</p>
                <p className="card-text">{property.email}</p>
                {contactedPropertyId === property._id ? (
                  <p className="card-text">{property.mobileNo}</p>
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={() => handleContactOwner(property._id)}
                  >
                    Contact Owner
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewProperty;
