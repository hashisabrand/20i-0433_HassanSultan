import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
  
    return (
      <div>
        <h2>View Property</h2>
        <ul>
          {properties.map((property) => {
            return (<><li key={property._id}>{property.Title}</li>
            <p>{property.Description}</p>
            <p>{property.propertytype}</p>
            <p>{property.City}</p>
            <p>{property.Area}</p>
            <p>{property.length}</p>
            <p>{property.width}</p></>
            )
          }
            
            
          )}
        </ul>
      </div>
    );
  };
  
  export default ViewProperty;
  