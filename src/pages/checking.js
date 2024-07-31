import { Navigate } from 'react-router-dom';

const Checking = ({children}) => {
    const auth = false;

    if (!auth) {
        return <Navigate to='/login'/>
    }

    return children;
}
export default Checking;