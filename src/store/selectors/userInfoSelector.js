
const selectors = {
  userSelector: (state) => state.profile.loggedUser,
  authSelector: (state) => state.auth.auth.isAuth
};

export const { userSelector, authSelector } = selectors;
