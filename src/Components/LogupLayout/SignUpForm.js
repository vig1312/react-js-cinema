import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const usernameRegexp = /^[0-9A-Za-z]{6,16}$/;
const passwordRegexp = /^[A-Za-z]\w{5,14}$/;

const SignUpForm = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [succesMessage,setSuccesMessage] = useState(false)
  const [errorMessage,setErrorMessage] = useState(false)

  
  function handleSubmit(e) {
    e.preventDefault();
    const users = localStorage.registeredUsers ? JSON.parse(localStorage.getItem("registeredUsers")) : [];

      if (usernameRegexp.test(username) && passwordRegexp.test(password)) {
        users.push({
          email,
          username,
          password,
          fullName
        })
        localStorage.setItem('registeredUsers', JSON.stringify(users));
        setSuccesMessage("Signed Up Succesfuly")

        setTimeout(() => {
          navigate("/login")
        }, 1500);
      } else if(username.length === 0 || password.length === 0) {
        setErrorMessage("fill the empty lines")
      } else {
        setErrorMessage("Wrong username or password")
      }
    }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        required={true}
        value={username}
        placeholder="Username..."
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="password"
        required={true}
        value={password}
        placeholder="Password..."
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        required={true}
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
      {succesMessage && <h3>{succesMessage}</h3>}
      {errorMessage && <h3>{errorMessage}</h3>}
    </form>
  );
};

export default SignUpForm;
