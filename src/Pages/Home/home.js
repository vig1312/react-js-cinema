import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../../Components/HomeLayout/footer';
import Navigation from '../../Components/HomeLayout/navigationTool';

const Home = () => (
  <>
    <Navigation />
    <Outlet />
    <Footer />
  </>
);

export default Home;
