import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AgentView() {
    const [agents, setAgents] = useState([]);
  
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
      <div>
                <h1>ViewAgent</h1>

        <ul>
          {agents.map((agent) => (
            <li key={agent._id}>
              <h3>{agent.fname} {agent.lname}</h3>
              <p>Email: {agent.email}</p>
              <p>Contact No: {agent.contactNo}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default AgentView;
  