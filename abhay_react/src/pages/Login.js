import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from react-router-dom
import Header from '../components/Headertab';
import './css/Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    uname: '',
    psw: ''
  });
  
  const [user_name, setUser_name] = useState(''); // State to store user name
  const navigate = useNavigate(); // Initialize useNavigate hook

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
      const response = await fetch('http://172.28.206.173:5001/validate_user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData),
      });

      const data = await response.json(); // Parse JSON response

      if (response.ok && data.status==="success") {
        console.log('Login successful!');
	setUser_name(data.message)
        navigate('/'); // Navigate to '/home' route upon successful login
      } else {
        console.error('Login failed.');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <>
      <Header user_name={user_name}/>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <label className="spacelabel">
          Email:
          <input type="email" className="spacetext" name="uname" value={formData.email} onChange={handleChange} required />
        </label>
        <br />
        <label className="spacelabel">
          Password:
          <input type="password" className="spacetext" name="psw" value={formData.password} onChange={handleChange} required />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
