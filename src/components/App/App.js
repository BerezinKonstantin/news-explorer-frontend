import React, { useState, useEffect } from 'react';
import { useLocation, Route, Switch, useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SavedNews from '../SavedNews/SavedNews';
import PopupForLogin from '../PopupForLogin/PopupForLogin';
import PopupForSignup from '../PopupForSignup/PopupForSignup';
import PopupInfoTip from '../PopupInfoTip/PopupInfoTip';
import NewsApi from "../../utils/NewsApi";
import { signup, login, getCheckToken } from '../../utils/MainApi';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './App.css';

function App() {
  const newsApi = new NewsApi();
  const [isLogin, setIsLogin] = useState(false);
  let pathname = useLocation().pathname;
  const [currentUser, setCurrentUser] = useState({});
  const [isHeaderBlack, setIsHeaderBlack] = useState();
  const [isPopupForLoginOpen, setIsPopupForLoginOpen] = useState(false);
  const [isPopupForSignupOpen, setIsPopupForSignupOpen] = useState(false);
  const [isPopupInfoTipOpen, setIsPopupInfoTipOpen] = useState(false);
  const [isMobilePopupOpen, setIsMobilePopupOpen] = useState(false);
  const [searchResult, setSearchResult] = React.useState([]);
  const [isSearchCompleted, setIsSearchCompleted] = React.useState(false);
  const [currentKeyword, setCurrentKeyword] = useState();
  const history = useHistory();
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
  function onEscClose(evt) {
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
  function logout() {

  }
  function handleOverlayClick(evt) {
    if (evt.target.classList.contains('popup')) {
      handleCloseAllPopups();
    }
  }
  function getArticles(keyword) {
    newsApi.getArticles(keyword)
    .then((result) =>{
      setSearchResult(result.articles);
      setIsSearchCompleted(true);
      setCurrentKeyword(keyword);
    })
    .catch((error) => {
        console.error(error);
    });
  }
  function onLogin({ email, password }) {
    login({ email, password })
      .then((res) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          setCurrentUser(
            {
              email: res.data.email,
              name: res.data.name,
            }
          );
          setIsLogin(true);
          history.push('/');
          //setInfoText('Вход выполнен!');
        }
        if (res.message) {
          //setInfoText(`Что-то пошло не так! Попробуйте ещё раз. ${res.message}`);
        }
      })
      .then(() => {
        handlePopupInfoTip();
      })
      .catch((err) => console.log(err));
  }
  // Регистрация пользователя
  function onSignup({ password, email, name }) {
    signup({ password, email, name })
      .then((res) => {
        if (res.data) {
          history.push('/');
          //setInfoText('Вы успешно зарегистрировались!');
        }
        if (res.error) {
          //setInfoText(`Что-то пошло не так! Попробуйте ещё раз. ${res.error}`);
        }
        if (res.message) {
          //setInfoText(`Что-то пошло не так! Попробуйте ещё раз. ${res.message}`);
        }
      })
      .then(() => {
        handlePopupInfoTip();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function checkToken() {
    const token = localStorage.getItem('token');
    if (token) {
      getCheckToken(token).then((res) => {
        if (res) {
          setCurrentUser(
            {
              email: res.data.email,
              name: res.data.name,
            }
          );
          setIsLogin(true);
          history.push('/');
        }
      });
    }
  }
  useEffect(() => {
    checkToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localStorage]);
  useEffect(() => {
    handleHeaderChange(pathname)
  }, [pathname]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
          <Main
            onGetArticles={getArticles}
            searchResult={searchResult}
            isSearchCompleted={isSearchCompleted}
            keyword={currentKeyword}
          />
        </Route>
        <ProtectedRoute
          path="/saved-news"
          component={SavedNews}
          isLogin={isLogin}
          onPopupForSignup={handlePopupForSignup}
        />
      </Switch>
      <Footer/>
      <PopupForLogin
        isOpen={isPopupForLoginOpen}
        onClose={handleCloseAllPopups}
        onPopupForSignup={handlePopupForSignup}
        onOverlayClick={handleOverlayClick}
        onSubmit={onLogin}
      />
      <PopupForSignup
        isOpen={isPopupForSignupOpen}
        onClose={handleCloseAllPopups}
        onPopupForLogin={handlePopupForLogin}
        onSubmit={onSignup}
        onOverlayClick={handleOverlayClick}
      />
      <PopupInfoTip
        isOpen={isPopupInfoTipOpen}
        onClose={handleCloseAllPopups}
        onPopupForLogin={handlePopupForLogin}
        onOverlayClick={handleOverlayClick}
      />
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
