import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

localStorage.setItem("registeredUsers",JSON.stringify([
  {
    username: "hov123",
    password: "hovo456",
    email: "hovo.vardanyan@gmail.com",
    fullName: "hovo vardanyan"
  },
  {
    username: "vigen123",
    password: "vigen456",
    email: "vigen.vardanyan@gmail.com",
    fullName: "vigen vardanyan"
  }
]))

const users = JSON.parse(localStorage.getItem("registeredUsers"));
const LoginPage = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1)
  const userName = useRef();
  const password = useRef();
  
function loginHandle() {
  try {
    const currentUser = users.find((el) => el.username === userName.current.value)
    if(currentUser) {
      localStorage.setItem("loggedUser", JSON.stringify(currentUser));
    } else {
      throw Error("incorrect password or username")
    }
          
  } catch (error) {
    alert(error)
  }
}

  return (
    <section>
      <h1>login page</h1>
      <input type='text' ref={userName} />
      <input type='text' ref={password} />
      <button onClick={loginHandle}>Log in</button> 
      <button onClick={goBack}>Back</button> 
    </section>
  )
}

export default LoginPage;