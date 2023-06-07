import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Agent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [agents, setAgents] = useState([]);

  const handleSearch = () => {
    // Perform search logic here based on the searchQuery
    // Update the agents state with the search results
  };

  useEffect(() => {
    async function fetchAgents() {
      try {
        const response = await axios.get('http://localhost:3000/clientagent/getAllAgent');
        setAgents(response.data.Agents);
      } catch (error) {
        console.error(error);
      }
    }

    fetchAgents();
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
          {agents.map((agent) => (
            <div key={agent._id} className="col-lg-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{agent.fname} {agent.lname}</h5>
                  <p className="card-text">{agent.description}</p>
                  <Link to={`/agents/${agent._id}`} className="btn btn-primary">View Agent</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    
  );
}

export default Agent;
