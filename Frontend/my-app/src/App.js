import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import UpdateClientForm from './Components/UpdateClientInfo';
import SearchHousingScheme from './Components/HousingScheme/SearchHS';
import ViewHousingScheme from './Components/HousingScheme/ViewHS';
import SearchProperty from './Components/Properties/SearchProperty';
import ViewProperty from './Components/Properties/ViewProperty';
import AgentSearch from './Components/Agents/SearchAgent';
import AgentView from './Components/Agents/ViewAgent';
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<UpdateClientForm />} />
          <Route path="/SearchHousingScheme" element={<SearchHousingScheme />} />
          <Route path="/ViewHousingScheme" element={<ViewHousingScheme />} />
          <Route path="/SearchProperty" element={<SearchProperty />} />
          <Route path="/ViewProperty" element={<ViewProperty />} />
          <Route path="/SearchAgent" element={<AgentSearch />} />
          <Route path="/ViewAgent" element={<AgentView />} />
          
 
        </Routes>
      </div>
    </Router>
  );
};


export default App;
