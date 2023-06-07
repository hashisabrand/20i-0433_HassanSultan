import React, { useState } from 'react';
import axios from 'axios';
function AgentSearch() {
    const [searchQuery, setSearchQuery] = useState('');
    const [agents, setAgents] = useState([]);
  
    const handleSearch = async (e) => {
      e.preventDefault()
      try {
        const response = await axios.post('http://localhost:3000/clientagent/getByNameAgent',
         { fname: searchQuery });
        setAgents(response.data.agent);
      } catch (error) {
        console.error(error);
      }
    };
  
    return (



      <div className="mt-5">
      <form className="form-inline justify-content-center">
        <div className="input-group">
          <input className="form-control" type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search Agents" aria-label="Search" />
          <div className="input-group-append">
            <button className="btn btn-primary" onClick={(e)=> handleSearch(e)}>Search</button>
          </div>
        </div>
      </form>
      <ul>
          {agents.map((agent) => (
            <li key={agent._id}>{agent.fname}</li>
          ))}
        </ul>
    </div>
      

    );
  }
  
  export default AgentSearch;
  