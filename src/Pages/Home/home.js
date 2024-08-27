import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Footer from '../../Components/HomeLayout/footer';
import Navigation from '../../Components/HomeLayout/navigationTool';
import NavigationLogged from '../../Components/HomeLayout/navigationLogged';
import { userSelector } from '../../store/selectors/userInformation';
import { currentData } from '../../store/actions/profileSlice';

const Home = () => {
  const user = useSelector(userSelector);
  const dispatch = useDispatch()

  useEffect(() => {
    if(localStorage.loggedUser && user.username === "") {
      const currentUser = JSON.parse(localStorage.getItem('loggedUser'))
      
      const {email, fullName, password, username} = currentUser
      
      dispatch(
        currentData({
          email,
          fullName,
          password,
          username,
        })
      );
    }
  },[])

  return (
    <>
      {user.isLoggedIn ? <NavigationLogged /> : <Navigation />}
      <Outlet />
      <Footer />
    </>
  );
};

export default Home;
