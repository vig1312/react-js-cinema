import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Footer from '../../Components/HomeLayout/footer';
import Navigation from '../../Components/HomeLayout/navigationTool';
import NavigationLogged from '../../Components/HomeLayout/navigationLogged';
import { userSelector } from '../../store/selectors/userInformation';

const Home = () => {
  const user = useSelector(userSelector);

  return (
    <>
      {user.isLoggedIn ? <NavigationLogged /> : <Navigation />}
      <Outlet />
      <Footer />
    </>
  );
};

export default Home;
