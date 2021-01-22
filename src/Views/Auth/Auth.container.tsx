import { useState } from 'react';
import { AuthProps } from '../../types';
import Auth from './Auth.component';

const AuthContainer = () => {
  const [isLogin, setIsLogin] = useState(false);

  const changeAuthForm = () => {
    setIsLogin(!isLogin);
  };

  const authProps: AuthProps = {
    isLogin,
    changeAuthForm,
  };

  return <Auth {...authProps} />;
};

export default AuthContainer;
