import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const UpdateClientForm = () => {
  // State variables to store form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [contactNo, setContactNo] = useState('');

  useEffect(() => {
    // Fetching data from API
    fetch();
  }, []);

  const fetch = async () => {
    try {
      const response = await axios.post('http://localhost:3000/client/getclient', {
        email: localStorage.getItem('email'),
      });
      const client = response.data.Client[0];
      setEmail(client.email);
      setName(client.name);
      setAddress(client.address);
      setContactNo(client.contactNo);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a request to update the client
      const response = await axios.post('http://localhost:3000/client/update', {
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

  <div className="container">
          <h1 className="mt-3 display-4">UpdateClient</h1>

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-5">
        <div className="container">
          <Link className="navbar-brand" to="/home">Houzz</Link>
  
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/profile">My Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <span className="text-danger">Logout!</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>


        <form onSubmit={handleSubmit}>
          <table className="table">
            <tbody>
              <tr>
                <td>Name</td>
                <td>
                  <input
                    className="form-control"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                </td>
              </tr>
              <tr>
                <td>Email</td>
                <td>
                  <input
                    className="form-control"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                </td>
              </tr>
              <tr>
                <td>Address</td>
                <td>
                  <input
                    className="form-control"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)} />
                </td>
              </tr>
              <tr>
                <td>Contact Number</td>
                <td>
                  <input
                    className="form-control"
                    type="tel"
                    value={contactNo}
                    onChange={(e) => setContactNo(e.target.value)} />
                </td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-primary" type="submit">Update</button>
        </form>
      </div>
  );
};

export default UpdateClientForm;
