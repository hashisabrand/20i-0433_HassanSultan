import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/Home';
import Signup from './Components/Signup';
import Login from './Components/Login';
import UpdateClientForm from './Components/UpdateClientInfo';
import SearchHousingScheme from './Components/HousingScheme/SearchHS';
import ViewHousingScheme from './Components/HousingScheme/ViewHS';
import SearchProperty from './Components/Properties/SearchProperty';
import ViewProperty from './Components/Properties/ViewProperty';
import AgentSearch from './Components/Agents/SearchAgent';
import AgentView from './Components/Agents/ViewAgent';
import Agent from './Components/Agents/Agenthome';
import HSHome from './Components/HousingScheme/HSHome';
import PHome from './Components/Properties/PHome';
import Downpayment from './Components/HousingScheme/DownPayment'
import InsuranceProduct from './Components/HousingScheme/InsuranceProduct'
import Houzz from './Houzz';
import PaymentHolder from './Components/HousingScheme/PaymentHolder';
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Houzz />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<UpdateClientForm />} />
          <Route path="/SearchHousingScheme" element={<SearchHousingScheme />} />
          <Route path="/ViewHousingScheme" element={<ViewHousingScheme />} />
          <Route path="/SearchProperty" element={<SearchProperty />} />
          <Route path="/ViewProperty" element={<ViewProperty />} />
          <Route path="/SearchAgent" element={<AgentSearch />} />
          <Route path="/ViewAgent" element={<AgentView />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/AgentHome" element={<Agent />} />
          <Route path="/HSHome" element={<HSHome />} />
          <Route path="/PHome" element={<PHome/>} />
          <Route path="/Houzz" element={<Houzz/>} />
          <Route path="/Downpayment" element={<PaymentHolder/>} />
          <Route path="/insurance" element={<InsuranceProduct/>} />



 
        </Routes>
      </div>
    </Router>
  );
};


export default App;
