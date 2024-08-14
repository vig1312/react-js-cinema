import React, { useRef, useState } from 'react';

const LogupForm = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [users, setUsers] = useState(
    localStorage.registeredUsers ? JSON.parse(localStorage.getItem('registeredUsers')) : []
  );

  const errMessageRef = useRef(null);

  localStorage.setItem('registeredUsers', JSON.stringify(users));

  const usernameRegexp = /^[0-9A-Za-z]{6,16}$/;
  const passwordRegexp = /^[A-Za-z]\w{5,14}$/;

  function handleSubmit(e) {
    e.preventDefault();
    try {
      if (usernameRegexp.test(username) && passwordRegexp.test(password)) {
        setUsers([
          ...users,
          {
            username,
            password,
            fullName,
            email,
          },
        ]);
        localStorage.setItem('registeredUsers', JSON.stringify(users));
        errMessageRef.current.innerText = 'Regisered Succesfuly';

        setTimeout(() => {
          window.location.href = '/';
        }, 1500);
      } else {
        throw new Error('incorrect Registration');
      }
    } catch (err) {
      errMessageRef.current.innerText = err;
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
      <h3 ref={errMessageRef} className="err-message"></h3>
    </form>
  );
};

export default LogupForm;
