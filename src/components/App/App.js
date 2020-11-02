import React, { useState, useEffect } from 'react';
import { useLocation, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SavedNews from '../SavedNews/SavedNews';
import PopupForLogin from '../PopupForLogin/PopupForLogin';
import PopupForSignup from '../PopupForSignup/PopupForSignup';
import PopupInfoTip from '../PopupInfoTip/PopupInfoTip';
import './App.css';

function App() {
  const isLogin = false;
  let pathname = useLocation().pathname;
  const [isHeaderBlack, setIsHeaderBlack] = useState();
  const [isPopupForLoginOpen, setIsPopupForLoginOpen] = useState(false);
  const [isPopupForSignupOpen, setIsPopupForSignupOpen] = useState(false);
  const [isPopupInfoTipOpen, setIsPopupInfoTipOpen] = useState(false);
  const [isMobilePopupOpen, setIsMobilePopupOpen] = useState(false);
    function handleHeaderChange(pathname) {
    if (pathname === '/saved-news') {
      setIsHeaderBlack(true)
    } if (pathname === '/') {
      setIsHeaderBlack(false)
    };
  }
  function handleCloseAllPopups() {
      setIsPopupForLoginOpen(false);
      setIsPopupForSignupOpen(false)
      setIsPopupInfoTipOpen(false);
      setIsMobilePopupOpen(false);
      document.removeEventListener('keydown', onEscClose)
  }
  function onEscClose(evt){
    if(evt.key === 'Escape'){
      handleCloseAllPopups();
    }
  }
  function handlePopupForSignup() {
    setIsPopupForSignupOpen(true);
    setIsPopupForLoginOpen(false);
    document.addEventListener('keydown', onEscClose);
  }
  function handlePopupInfoTip() {
    setIsPopupInfoTipOpen(true);
    document.addEventListener('keydown', onEscClose);
  }
  function handlePopupForLogin() {
    setIsPopupForSignupOpen(false);
    setIsPopupForLoginOpen(true);
    document.addEventListener('keydown', onEscClose);
  }
  function handleMobilePopup() {
    setIsMobilePopupOpen(true);
  }
  function logout(){

  }
  function handleOverlayClick(evt) {
    if (evt.target.classList.contains('popup')) {
      handleCloseAllPopups();
    }
  }
  useEffect(() => {
    handleHeaderChange(pathname)
  }, [pathname]);

  return (
    <div className='app'>
      <Header
       isLogin={isLogin}
       isHeaderBlack={isHeaderBlack}
       onPopupForSignup={handlePopupForSignup}
       onLogout={logout}
       isMobilePopupOpen={isMobilePopupOpen}
       onMobilePopupOpen={handleMobilePopup}
      />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/saved-news">
          <SavedNews />
        </Route>
      </Switch>
      <Footer/>
      <PopupForLogin
      isOpen={isPopupForLoginOpen}
      onClose={handleCloseAllPopups}
      onPopupForSignup={handlePopupForSignup}
      onOverlayClick={handleOverlayClick}
      />
      <PopupForSignup
      isOpen={isPopupForSignupOpen}
      onClose={handleCloseAllPopups}
      onPopupForLogin={handlePopupForLogin}
      onSubmit={handlePopupInfoTip}
      onOverlayClick={handleOverlayClick}
      />
      <PopupInfoTip
      isOpen={isPopupInfoTipOpen}
      onClose={handleCloseAllPopups}
      onPopupForLogin={handlePopupForLogin}
      onOverlayClick={handleOverlayClick}
      />
    </div>
  );
}

export default App;
