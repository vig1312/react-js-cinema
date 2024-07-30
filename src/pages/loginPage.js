import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1)
    
    return (
        <>
            <h1>login page</h1>
            <button onClick={goBack}>Back</button> 
        </>
    )
}

export default LoginPage;