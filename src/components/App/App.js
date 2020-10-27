import React, { useState, useEffect } from 'react';
import { useLocation, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SavedNews from '../SavedNews/SavedNews';
import PopupForLogin from '../PopupForLogin/PopupForLogin';
import PopupForSignup from '../PopupForSignup/PopupForSignup';
import './App.css';

function App() {
  const isLogin = true;
  let pathname = useLocation().pathname;
  const [isHeaderBlack, setIsHeaderBlack] = useState();
  const [isPopupForLoginOpen, setIsPopupForLoginOpen] = useState(false);
  const [isPopupForSignupOpen, setIsPopupForSignupOpen] = useState(false);
  function handlePopupForSignup() {
    setIsPopupForSignupOpen(true);
  }
  function handlePopupForLogin() {
    setIsPopupForLoginOpen(true);
  }
  function handleHeaderChange(pathname) {
    if (pathname === '/saved-news') {
      setIsHeaderBlack(true)
    } if (pathname === '/') {
      setIsHeaderBlack(false)
    };
  }
  function handleCloseAllPopups() {
      setIsPopupForLoginOpen(false);
      setIsPopupForSignupOpen(false);
    }

  useEffect(() => {
    handleHeaderChange(pathname)
  }, [pathname]);

  return (
    <div className='app'>
      <Header
       isLogin={isLogin}
       isHeaderBlack={isHeaderBlack}
       onPopupForLogin={handlePopupForLogin}
      />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/saved-news">
          <SavedNews />
        </Route>
      </Switch>
      <Footer />
      <PopupForLogin
      isOpen={isPopupForLoginOpen}
      onClose={handleCloseAllPopups}
      />
      <PopupForSignup
      isOpen={isPopupForSignupOpen}
      onClose={handleCloseAllPopups}
      />
    </div>
  );
}

export default App;
