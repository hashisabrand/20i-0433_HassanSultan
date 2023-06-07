import React, { useState } from 'react';
import axios from 'axios';

const SearchProperty = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
  
    // Function to handle the search form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('http://localhost:3000/clientppt/getByNameProperty',
         { Title: searchTerm });
        setSearchResults(response.data.property);
      } catch (error) {
        console.log('Error:', error);
      }
    };
  
    return (
      <div>
        <h2>Search Property</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter property title"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
  
        <h3>Search Results</h3>
        <ul>
          {searchResults.map((property) => {
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
  
  export default SearchProperty;
  