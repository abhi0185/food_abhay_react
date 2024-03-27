import React, { useState } from 'react';
import Header from '../components/Headertab';
import './css/Register.css';

const Register = () => {
  // Initialize state for form data using the useState hook
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    pswrepeat: ''
  });

  // Event handler for input changes
  const handleChange = (e) => {
    // Destructure the event object to get the name and value of the changed input
    const { name, value } = e.target;
    
    // Update the form data state with the new value
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Event handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call your Python API here with formData
      const response = await fetch('http://172.28.206.173:5001/submit_form', {
        method: 'POST',
	headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData),
      });

      // Handle the response as needed
      if (response.ok) {
        console.log('Registration successful!');
	  window.location.href = 'http://localhost:3000/login';
      } else {
        console.error('Registration failed.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  // Render the component
  return (
    <div>
      <Header />
      {/* Form with onSubmit and input elements */}
      <form onSubmit={handleSubmit}>
        {/* Email input field */}
	<h1>Register</h1>
        <label className="spacelabel">
          Email:
          <input type="email" className="spacetext" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />
        {/* Password input field */}
        <label className="spacelabel">
          Password:
          <input type="password" className="spacetext" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <br />
        {/* Retype Password input field */}
        <label className="spacelabel">
          Retype Password:
          <input type="password" className="spacetext" name="pswrepeat" value={formData.pswrepeat} onChange={handleChange} required />
        </label>
        {/* Submit button */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;

