import React from 'react';
import { Outlet } from 'react-router-dom';

import Navigation from '../../components/HomeLayout/Navigation.js';
import '../../assets/style/home.css'

const HomeComponent = () =>(
  <>
    <Navigation/>
    <Outlet />
    <div>footer</div>
  </>
)
  

export default HomeComponent; 
