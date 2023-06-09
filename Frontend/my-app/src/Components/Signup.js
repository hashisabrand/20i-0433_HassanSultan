import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNo: '',
    address: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate()
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for empty fields
    for (const key in formData) {
      if (formData[key] === '') {
        setError('Please fill in all fields.');
        return;
      }
    }

    setError(''); // Clear error message

    axios
      .post('http://localhost:3000/client/signup', formData)
      .then((response) => {
        // Handle successful signup
        console.log(response.data);
        navigate('/login')
      })
      .catch((error) => {
        // Handle signup error
        console.error(error);
      });
  };

  return (

    <div className="container-fluid text-center home-page">

    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
width="93.000000pt" height="63.000000pt" viewBox="0 0 93.000000 63.000000"
preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,63.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M373 515 c-29 -13 -53 -28 -53 -32 0 -4 35 -43 77 -85 l77 -78 53 52
c29 28 56 49 60 45 4 -4 -17 -31 -45 -60 l-52 -53 45 -44 c24 -24 46 -42 48
-39 3 2 10 14 16 27 10 20 10 27 -3 41 -15 16 -15 19 3 35 21 20 41 14 41 -11
0 -31 -23 -93 -43 -114 l-20 -21 -53 53 -54 53 -53 -52 c-29 -29 -56 -49 -60
-45 -4 4 16 31 45 60 l53 53 -47 47 -47 47 -12 -28 c-10 -22 -10 -31 0 -48 10
-17 10 -23 -5 -39 -9 -10 -21 -19 -26 -19 -14 0 -9 81 9 117 16 34 15 35 -9
60 l-25 25 -24 -39 c-34 -54 -39 -164 -11 -219 64 -123 200 -169 323 -107 150
77 170 273 39 385 -72 62 -160 74 -247 33z m132 -56 c4 -5 -1 -19 -11 -30 -17
-19 -18 -19 -41 3 -17 16 -20 24 -11 30 19 11 56 10 63 -3z m-13 -286 c27 -25
22 -33 -22 -33 -44 0 -48 5 -23 32 20 22 22 22 45 1z"/>
</g>
</svg>
<h1 className="mt-3 display-4">Welcome to the <span className="text-primary">Houzz!</span></h1>



    <div className="container">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-5">
        <div className="container">
          <Link className="navbar-brand" to="/Houzz">
            Houzz
          </Link>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/Houzz">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <h2>Signup</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            className="form-control"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            className="form-control"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Contact Number:</label>
          <input
            className="form-control"
            type="text"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Address:</label>
          <input
            className="form-control"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            className="form-control"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button className="btn btn-primary" type="submit">Signup</button>
      </form>
    </div>
    </div>
  );
};

export default Signup;
