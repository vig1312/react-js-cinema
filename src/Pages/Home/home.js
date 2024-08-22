import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Footer from '../../Components/HomeLayout/footer';
import Navigation from '../../Components/HomeLayout/navigationTool';
import { authSelector } from '../../store/selectors/userInfoSelector';
import NavigationLogged from '../../Components/HomeLayout/navigationLogged';

const Home = () => {
  const auth = useSelector(authSelector);

  if (auth) {
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
