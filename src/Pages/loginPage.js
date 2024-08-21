import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const users = JSON.parse(localStorage.getItem('registeredUsers'));
const LoginPage = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const userName = useRef();
  const password = useRef();

function loginHandle() {
  const currentUser = users.find(
    (el) => el.username === userName.current.value,
  );

  if (currentUser) {
    localStorage.setItem('loggedUser', JSON.stringify(currentUser));
  } else {
    throw Error('incorrect password or username');
  }
  
}

  return (
    <section>
      <h1>login page</h1>
      <input type="text" ref={userName} />
      <input type="text" ref={password} />
      <button onClick={loginHandle}>Log in</button>
      <button onClick={goBack}>Back</button>
    </section>
  );
};

export default LoginPage;
