const userSelector = (state) => state.profile.loggedUser;
const authSelector = (state) => state.auth.auth.isAuth;

export {
   userSelector,
   authSelector 
  };
