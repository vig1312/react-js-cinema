import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <div className="header">
    <NavLink to="/" >Home</NavLink>
    <NavLink to="/movies">Movies</NavLink>
    <NavLink to="/loginpage">Log in</NavLink>
    <NavLink to="/profile">My Profile</NavLink>
  </div>
)

export default Navigation;