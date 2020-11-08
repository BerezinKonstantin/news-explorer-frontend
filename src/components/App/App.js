import React, { useState, useEffect } from 'react';
import { useLocation, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SavedNews from '../SavedNews/SavedNews';
import PopupForLogin from '../PopupForLogin/PopupForLogin';
import PopupForSignup from '../PopupForSignup/PopupForSignup';
import PopupInfoTip from '../PopupInfoTip/PopupInfoTip';
import NewsApi from "../../utils/NewsApi";
import {
  signup as signupApi,
  login as loginApi,
  checkToken as checkTokenApi,
  saveArticle as saveArticleApi,
  getArticles as getArticlesApi,
} from '../../utils/MainApi';
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
  const [savedArticles, setSavedArticles] = React.useState([]);
  // const [savedKeywords, setSavedKeywords] = React.useState([]);
  const [isSearchCompleted, setIsSearchCompleted] = React.useState(false);
  const [currentKeyword, setCurrentKeyword] = useState();
 
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
  function getSearchResult(keyword) {
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
  function getSavedArticles() {
    const token = localStorage.getItem('token');
    getArticlesApi(token)
    .then((result) =>{
      setSavedArticles(result);
    })
    .catch((error) => {
        console.error(error);
    });
  }
  function saveArticle(data){
    const token = localStorage.getItem('token');
    saveArticleApi(token, data)
    
  }
  function onLogin({ email, password }) {
    loginApi({ email, password })
        .then((res) => {
          console.log(res);
          if (res.token) {
          localStorage.setItem('token', res.token);
          setCurrentUser(
            {
              email: res.email,
              name: res.name,
              _id: res._id
            }
          );
          setIsLogin(true);
          }
          //setInfoText('Вход выполнен!');
        })
      .then(() => {
        handleCloseAllPopups() ;
      })
      .then(() => {
        handlePopupInfoTip();
      })
      .catch((err) => console.log(err));
  }
  // Регистрация пользователя
  function onSignup({ password, email, name }) {
    signupApi({ password, email, name })
      .then((res) => {
        if (res.data) {
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
        handleCloseAllPopups() ;
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
      checkTokenApi(token).then((res) => {
        if (res) {
          setCurrentUser(
            {
              email: res.email,
              name: res.name,
              _id: res._id
            });
          setIsLogin(true);
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
            onSaveArticle={saveArticle}
            onGetArticles={getSearchResult}
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
          savedArticles={savedArticles}
          getSavedArticles={getSavedArticles}
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
