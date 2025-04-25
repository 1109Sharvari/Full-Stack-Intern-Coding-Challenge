import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const { name, email, address, password } = formData;

    if (name.length < 20 || name.length > 60) {
      newErrors.name = 'Name must be between 20 and 60 characters';
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Invalid email address';
    }

    if (address.length > 400) {
      newErrors.address = 'Address must be less than 400 characters';
    }

    if (
      password.length < 8 ||
      password.length > 16 ||
      !/[A-Z]/.test(password) ||
      !/[!@#$%^&*(),.?":{}|<>]/.test(password)
    ) {
      newErrors.password =
        'Password must be 8–16 chars, include one uppercase and one special character';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await axios.post('http://localhost:5000/register', formData);
      alert('User registered!');
    } catch (err) {
      alert('Error registering user');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
      />
      {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}

      <input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

      <input
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
      />
      {errors.address && <p style={{ color: 'red' }}>{errors.address}</p>}

      <input
        name="password"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}

      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
