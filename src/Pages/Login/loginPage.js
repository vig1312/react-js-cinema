import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { currentData } from '../../store/actions/profileSlice';

const LoginPage = () => {
  const navigate = useNavigate();
  
  const dispatch = useDispatch();
  
  const userName = useRef();
  const password = useRef();
  
  const [successMessage, setSuccessMessage] = useState("");

  function loginHandle(e) {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('registeredUsers'));
    const currentUser = users.find((el) => el.username === userName.current.value && el.password === password.current.value);
    
    if (currentUser) {
      localStorage.setItem('loggedUser', JSON.stringify(currentUser));
      const {email, fullName, password, username} = currentUser;

      dispatch(currentData({ 
        email,
        fullName,
        password,
        username
       }));
      setSuccessMessage('logged in succesfully');

      setTimeout(() => {
        navigate('/');
      }, 1000);
    } else if (!userName.length || !password.length) {
        setSuccessMessage('fill empty lines');
    } else {
      setSuccessMessage('incorrect password or username');
    }
  }

  return (
    <section>
      <div className="auth-form-fields-container">
        <h1>login page</h1>
        <form onSubmit={loginHandle}>
          <input type="text" ref={userName} placeholder="username" />
          <input type="password" ref={password} placeholder="password" />
          <button className="submit-button">Log in </button>
          <h3>{successMessage}</h3>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
