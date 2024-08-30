import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { userSelector } from '../store/selectors/userInfoSelector';

const Checking = ({ children }) => {
  const user = useSelector(userSelector);

  if (!user.isLogged) {
    return <Navigate to="/login" />;
  }

  return children;
};
export default Checking;
