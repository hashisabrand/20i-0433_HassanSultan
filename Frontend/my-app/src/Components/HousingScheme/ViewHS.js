import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


const ViewHousingScheme = () => {
    const [housingSchemes, setHousingSchemes] = useState([]);
    const navigate=useNavigate()
    
    // Function to get all housing schemes
    const getAllHousingSchemes = async () => {
      try {
        const response = await axios.get('http://localhost:3000/clienthscheme/getAllHousingScheme');
        setHousingSchemes(response.data.HousingSchemes);
      } catch (error) {
        console.log(error);
      }
    };
    
    // Fetch all housing schemes when the component mounts
    useEffect(() => {
      getAllHousingSchemes();
    }, []);
    
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

      

        <div className="row mt-5">
          {housingSchemes.map((housingScheme) => (
            <div key={housingSchemes._id} className="col-lg-4 mb-4">
              <div className="card">
                <div className="card-body">
     
                  <h5 className="card-title">{housingScheme.Title} </h5>
                  <p className="card-text">{"Price $ "+housingScheme.Price}</p>
                  <p className="card-text">{housingScheme.description}</p>
                  <p className="card-text">{housingScheme.City}</p>
                  <Link to={`/agents/${housingScheme._id}`} className="btn btn-primary">View Insurance Plans</Link>
                  <button onClick={()=>{navigate('/Downpayment',{state:{Price:housingScheme.Price}})}}>Pay Down Payment</button>
                </div>
              </div>
            </div>
          ))}
        </div>


        
      </div>
    
  );
}

export default ViewHousingScheme;
