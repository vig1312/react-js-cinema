import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeAuth } from '../../store/actions/authSlice';

const users = JSON.parse(localStorage.getItem('registeredUsers'));

const LoginPage = () => {
  const navigate = useNavigate();
  const userName = useRef();
  const password = useRef();
  const messageRef = useRef();

  const dispatch = useDispatch();

  function loginHandle(e) {
    e.preventDefault();
    try {
      const currentUser = users.find((el) => el.username === userName.current.value);

      if (currentUser) {
        localStorage.setItem('loggedUser', JSON.stringify(currentUser));
        dispatch(changeAuth({ auth: true }));
        messageRef.current.innerText = 'logged in succesfully';

        setTimeout(() => {
          navigate('/profile');
        }, 1000);
      } else {
        throw Error('incorrect password or username');
      }
    } catch (error) {
      messageRef.current.innerText = error;
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
          <h3 ref={messageRef}></h3>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
