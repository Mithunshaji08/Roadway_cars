import React, { useState } from 'react';

const Sigin = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear validation error when the user starts typing
    if (e.target.name in errors) {
      setErrors({
        ...errors,
        [e.target.name]: '',
      });
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      setErrors({
        ...errors,
        email: 'Please enter a valid email address',
      });
      return false;
    }
    return true;
  };

  const validatePassword = () => {
    if (!formData.password || formData.password.length < 6) {
      setErrors({
        ...errors,
        password: 'Password must be at least 6 characters',
      });
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate each field before submitting
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      // Your sign-in logic goes here
      console.log('Signing in with:', formData);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <div style={styles.card}>
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={styles.input}
              />
              {errors.email && <span style={styles.error}>{errors.email}</span>}
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                style={styles.input}
              />
              {errors.password && <span style={styles.error}>{errors.password}</span>}
            </div>
            <button type="submit" style={styles.button}>
              Sign In
            </button>
          </form>
        </div>
      </div>
      <div style={styles.imageContainer}>
        <img
          src="/signin.png" // Replace with your image URL
          alt="Right Image"
          style={styles.image}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'black',
  },
  formContainer: {
    flex: 1,
  },
  card: {
    width: '100%',
    maxWidth: '360px',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: 'white',
    marginLeft:'125px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  formGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '10px',
    boxSizing: 'border-box',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    fontSize: '14px',
  },
  imageContainer: {
    flex: 1,
    marginLeft: '20px', // Adjust the margin as needed
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '8px',
  },
};

export default Sigin;
