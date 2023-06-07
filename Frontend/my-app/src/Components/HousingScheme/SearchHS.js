import React, { useState } from 'react';
import axios from 'axios';
const SearchHousingScheme = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    
    // Function to handle the search query
    const handleSearch = async () => {
      try {
        const response = await axios.post('http://localhost:3000/clienthscheme/getByNameHousingScheme', { Title: query });
        setResults(response.data.product);
      } catch (error) {
        console.log(error);
      }
    };
    
    return (
      <div>
        <h1>Search Housing Scheme</h1>
        <input
          type="text"
          placeholder="Enter housing scheme title"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        
        {/* Display search results */}
        {results.map((housingScheme) => (
          <div key={housingScheme._id}>
            <h3>{housingScheme.Title}</h3>
            <p>{housingScheme.Description}</p>
            <p>{housingScheme.Address}</p>
            <p>{housingScheme.City}</p>
            <p>{housingScheme.Address}</p>
            <p>{housingScheme.City}</p>
            <p>{housingScheme.State}</p>
            <p>{housingScheme.Zipcode}</p>
            <p>{housingScheme.Phone}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default SearchHousingScheme;
  