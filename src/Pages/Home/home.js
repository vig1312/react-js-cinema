import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../../Components/HomeLayout/footer';
import Navigation from '../../Components/HomeLayout/navigationTool';
import { useSelector } from 'react-redux';
import NavigationLogged from '../../Components/HomeLayout/navigationLogged';
import { authSelector } from '../../store/selectors/userInformation';

const Home = () => {
  const auth = useSelector(authSelector);

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
