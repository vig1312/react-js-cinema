import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
    <>
        <div className="header">
            <NavLink to="/" >home</NavLink>
            <NavLink to="/movies">movies</NavLink>
            <NavLink to="/loginpage">log in</NavLink>
            <NavLink to="/profile">MyProfile</NavLink>
        </div>
    </>
)

export default Navigation;