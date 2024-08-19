import { Navigate } from 'react-router-dom';

export const auth = true;
const Checking = ({children}) => {
   

    if (!auth) {
        return <Navigate to='/login'/>
    }

    return children;
}
export default Checking;