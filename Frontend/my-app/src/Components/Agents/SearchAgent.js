import React, { useState } from 'react';
import axios from 'axios';
function AgentSearch() {
    const [searchQuery, setSearchQuery] = useState('');
    const [agents, setAgents] = useState([]);
  
    const handleSearch = async () => {
      try {
        const response = await axios.post('http://localhost:3000/clientagent/getByNameAgent',
         { fname: searchQuery });
        setAgents(response.data.agent);
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <div>
          <h1>Search Agents</h1>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
  
        <ul>
          {agents.map((agent) => (
            <li key={agent._id}>{agent.fname}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default AgentSearch;
  