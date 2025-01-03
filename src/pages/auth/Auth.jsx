import React, { useState } from 'react';
import Login from '../../components/login/Login';
import Register from '../../components/register/Register';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    return <>{isLogin ? <Login setIsLogin={setIsLogin} /> : <Register setIsLogin={setIsLogin} />}</>;
};

export default Auth;
