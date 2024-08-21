import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Checking = ({ children }) => {
  const auth = useSelector((state) => state.auth.auth);

  if (!auth.isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
};
export default Checking;
