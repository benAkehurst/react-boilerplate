import React, { useEffect, useState } from 'react';
import './App.scss';
import { checkUserLoggedIn } from './Services/api/index';
import HomeContainer from './Views/Home/Home.container';
import AuthContainer from './Views/Auth/Auth.container';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    let valid = checkUserLoggedIn();
    if (valid) {
      setIsAuth(true);
    }
  }, []);

  window.addEventListener('UserAuthorised', (e: any) => {
    setIsAuth(true);
  });

  return (
    <div className="App">{isAuth ? <HomeContainer /> : <AuthContainer />}</div>
  );
};

export default App;
