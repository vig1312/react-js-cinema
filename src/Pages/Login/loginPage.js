import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { currentData } from '../../store/actions/profileSlice';


const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userName = useRef();
  const passWord = useRef();
  const [succesMessage,setSuccesMessage] = useState('')
  const [errorMessage,setErrorMessage] = useState("")

  function loginHandle(e) {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('registeredUsers'));
    const currentUser = users.find((el) => el.username === userName.current.value);

    if (currentUser) {
      localStorage.setItem('loggedUser', JSON.stringify(currentUser));
      
      const {email, fullName, password, username} = currentUser
      
      dispatch(
        currentData({
          email,
          fullName,
          password,
          username,
        })
      );

      setSuccesMessage("Logged in succesfully")
      
      setTimeout(() => {
        navigate('/');
      }, 1000);

      } else if(userName.length === 0 || passWord.length === 0) {
        setErrorMessage("fill the empty lines")
      } else {
        setErrorMessage("incorrect password or username")
      }
    }

  return (
    <section>
      <div className="auth-form-fields-container">
        <h1>login page</h1>
        <form onSubmit={loginHandle}>
          <input type="text" ref={userName} placeholder="username" />
          <input type="password" ref={passWord} placeholder="password" />
          <button className="submit-button">Log in </button>
          {succesMessage && <h3>{succesMessage}</h3> }
          {errorMessage && <h3>{errorMessage}</h3>}
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
