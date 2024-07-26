import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <div className="header">
            
                <NavLink to="/" >home</NavLink>
                <NavLink to="/movies">movies</NavLink>
                <NavLink to="/loginpage">log in</NavLink>
            
            </div>
        </>
    )
}
export {Navigation};