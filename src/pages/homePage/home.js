import React from "react";
import { Route, NavLink, Routes, BrowserRouter, Outlet } from "react-router-dom";
import MoviesComp from "../moviePage/movie.js";
import LoginPage from "../loginPage.js";
import CurrFilm from "../moviePage/CurrFilm.js";
import '../../assets/style/home.css'
import { Navigation } from "../../components/HomeLayout/Navigation.js";


const HomeComponent = () => {

  return (
    <>
      <Navigation/>
      <Outlet />
       <div>footer</div>
    </>
  )
  
  
};

export default HomeComponent;
