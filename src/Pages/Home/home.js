import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../../Components/HomeLayout/footer';
import Navigation from '../../Components/HomeLayout/navigationTool';
import { useSelector } from 'react-redux';
import NavigationLogged from '../../Components/HomeLayout/navigationLogged';

const Home = () => {
  const auth = useSelector((state) => state.auth.auth);

  if (auth.isAuth) {
    return (
      <>
        <NavigationLogged />
        <Outlet />
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Navigation />
        <Outlet />
        <Footer />
      </>
    );
  }
};

export default Home;
