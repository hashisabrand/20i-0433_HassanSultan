import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewHousingScheme = () => {
    const [housingSchemes, setHousingSchemes] = useState([]);
    
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
      <div>
        <h1>View Housing Scheme</h1>
        
        {/* Display housing schemes */}
        {housingSchemes.map((housingScheme) => (
          <div key={housingScheme._id}>
            <h3>{housingScheme.Title}</h3>
            <p>{housingScheme.Description}</p>
            <p>{housingScheme.Address}</p>
            <p>{housingScheme.City}</p>
            <p>{housingScheme.State}</p>
            <p>{housingScheme.Zipcode}</p>
            <p>{housingScheme.Phone}</p>
            
            {/* Display other information as needed */}
          </div>
        ))}
      </div>
    );
  };
  
  export default ViewHousingScheme;
  