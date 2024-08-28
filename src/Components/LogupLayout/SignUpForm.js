import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const usernameRegexp = /^[0-9A-Za-z]{6,16}$/;
const passwordRegexp = /^[A-Za-z]\w{5,14}$/;

const SignUpForm = () => {
  
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [successMessage, setSuccessMessage] = useState("");

  

  function handleSubmit(e) {
    const users = localStorage.registeredUsers
      ? JSON.parse(localStorage.getItem('registeredUsers'))
      : [];
    e.preventDefault();
   
      if (usernameRegexp.test(username) && passwordRegexp.test(password)) {
        users.push({
          email,
          username,
          password,
          fullName
        });
        localStorage.setItem('registeredUsers', JSON.stringify(users));
        setSuccessMessage("registered is done")
        setTimeout(() => {
          navigate('/login');
        }, 1500);
      } else if (username.length === 0 || password.length === 0) {
        setSuccessMessage("please fill the empty fields");
      } else {
        setSuccessMessage("incorrect password or username");
      }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        placeholder="Username..."
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="password"
        value={password}
        placeholder="Password..."
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        value={fullName}
        placeholder="Full Name..."
        onChange={(e) => setFullName(e.target.value)}
      />
      <input
        type="email"
        value={email}
        placeholder="Email..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="submit-button">Submit</button>
      <h3 className="err-message">{successMessage}</h3>
    </form>
  );
};

export default SignUpForm;
