import React, { useState } from 'react';
import axios from 'axios';
const UpdateClientForm = () => {
    // State variables to store form data
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [contactNo, setContactNo] = useState('');
  
    // Function to handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        // Make a request to update the client
        const response = await axios.post('http://localhost:3000/client/updateclient', {
          name,
          email,
          address,
          contactNo,
        });
        console.log(response.data); // Handle the response as needed
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <div>
        <h1>Update Client</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Contact Number"
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
          />
          <button type="submit">Update</button>
        </form>
      </div>
    );
  };
  
  export default UpdateClientForm;
  