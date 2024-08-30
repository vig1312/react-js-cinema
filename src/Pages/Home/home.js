import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Footer from '../../Components/HomeLayout/footer';
import Navigation from '../../Components/HomeLayout/navigationTool';
import { userSelector } from '../../store/selectors/userInfoSelector';
import NavigationLogged from '../../Components/HomeLayout/navigationLogged';
import { currentData, ticketsData } from '../../store/actions/profileSlice';

const Home = () => {
  const dispatch = useDispatch();

  const user = useSelector(userSelector);

  useEffect(() => {

    if (localStorage.loggedUser && user.username === '') {
      const currentUser = JSON.parse(localStorage.getItem('loggedUser'));
      const { email, fullName, password, username } = currentUser;
      // const tickets = JSON.parse(localStorage.getItem('reservedTickets'));

      dispatch(
        currentData({
          email,
          fullName,
          password,
          username
        })
      );

    
    }
  }, []);
  return (
    <>
      {user.isLogged ? <NavigationLogged /> : <Navigation />}
      <Outlet />
      <Footer />
    </>
  );
};

export default Home;
