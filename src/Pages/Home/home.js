import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Footer from '../../Components/HomeLayout/footer';
import Navigation from '../../Components/HomeLayout/navigationTool';
import { userSelector } from '../../store/selectors/userInfoSelector';
import NavigationLogged from '../../Components/HomeLayout/navigationLogged';


const Home = () => {
  const user = useSelector(userSelector);

  return (
    <>
      {user.isLogged ? <NavigationLogged /> : <Navigation />}
      <Outlet />
      <Footer />
    </>
  );
};

export default Home;
