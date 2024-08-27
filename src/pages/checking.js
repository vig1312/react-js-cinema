import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { userSelector } from '../store/selectors/userInformation';

const Checking = ({ children }) => {
  const user = useSelector(userSelector);

  if (!user.isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};
export default Checking;
