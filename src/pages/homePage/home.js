import React from 'react';
import { Outlet } from 'react-router-dom';
import '../../assets/style/home.css'
import { Navigation } from '../../components/HomeLayout/Navigation.js';

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
