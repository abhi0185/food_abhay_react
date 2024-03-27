import React, { useState } from 'react';
import Header from '../components/Headertab';
import './css/Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    pswrepeat: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call your Python API here with formData
	const response = await fetch('http://172.22.60.185:5001/submit_form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData),
      });

      // Handle the response as needed
      if (response.ok) {
        console.log('Registration successful!');
      } else {
        console.error('Registration failed.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div>
      <Header />
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Retype Password:
          <input type="password" name="pswrepeat" value={formData.pswrepeat} onChange={handleChange} required />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;

