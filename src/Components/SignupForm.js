// SignupForm.js
import React, { useState } from 'react';


const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailRegex.test(value));
  };

  const validatePassword = (value) => {
    setPasswordValid(value.length >= 8);
  };

  const validateConfirmPassword = (value) => {
    setConfirmPasswordValid(value === password);
  };

  const handleSubmit = () => {
    if (emailValid && passwordValid && confirmPasswordValid) {
      alert('Form submitted successfully!');
    } else {
      alert('Form cannot be submitted!');
    }
  };

  return (
    <div className='container'>
      <form>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);
            }}
            style={{ border: emailValid ? '2px solid green' : '2px solid red' }}
          />
          {!emailValid && <p>Invalid email format.</p>}
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              validatePassword(e.target.value);
            }}
            style={{ border: passwordValid ? '2px solid green' : '2px solid red' }}
          />
          {!passwordValid && <p>Password must be at least 8 characters.</p>}
        </div>

        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              validateConfirmPassword(e.target.value);
            }}
            style={{ border: confirmPasswordValid ? '2px solid green' : '2px solid red' }}
          />
          {!confirmPasswordValid && <p>Passwords do not match.</p>}
        </div>

        <button type="button" onClick={handleSubmit}>
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
