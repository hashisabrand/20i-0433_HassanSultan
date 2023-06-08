import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const InsuranceProduct = (props) => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/get-plans"
        );
        setPlans(response.data);
      } catch (error) {
        console.log("Error fetching plans:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="card-container">

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

      <h1 className="mt-3 display-4">InsurancePlan </h1>

      {plans.map((plan) => (
        <div key={plan._id} className="card bg-light mb-3">
          <div className="card-body">
            <h5 className="card-title">{plan.CompanyName}</h5>
            <p className="card-text">Rate: {plan.Rate.$numberDecimal}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InsuranceProduct;
