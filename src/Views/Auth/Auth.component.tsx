import { Fragment } from 'react';
import './Auth.scss';
import { AuthProps } from '../../types';
import Login from '../../Components/Auth/Login/Login';
import SignUp from '../../Components/Auth/SignUp/SignUp';

const AuthComponent = (props: AuthProps) => {
  return (
    <div>
      <h1>{props.isLogin ? 'Login' : 'Sign Up'}</h1>
      {!props.isLogin ? ( // remove this
        <Fragment>
          <Login />
        </Fragment>
      ) : (
        <Fragment>
          <SignUp />
        </Fragment>
      )}
      <button onClick={() => props.changeAuthForm()}>
        {!props.isLogin ? 'Go to Login' : 'Go to Sign Up'}
      </button>
    </div>
  );
};

export default AuthComponent;
