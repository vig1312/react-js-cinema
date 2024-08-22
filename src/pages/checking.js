import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { authSelector } from '../store/selectors/userInfoSelector';

const Checking = ({ children }) => {
  const auth = useSelector(authSelector);

  if (!auth) {
    return <Navigate to="/login" />;
  }

  return children;
};
export default Checking;
