import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useHistory, Route, Switch } from 'react-router-dom';
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
  deleteArticle as deleteArticleApi,
} from '../../utils/MainApi';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './App.css';

function App() {
  const history = useHistory();
  const newsApi = new NewsApi();
  const pathname = useLocation().pathname;
  const [isLogin, setIsLogin] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isHeaderBlack, setIsHeaderBlack] = useState();
  const [isPopupForLoginOpen, setIsPopupForLoginOpen] = useState(false);
  const [isPopupForSignupOpen, setIsPopupForSignupOpen] = useState(false);
  const [isPopupInfoTipOpen, setIsPopupInfoTipOpen] = useState(false);
  const [isMobilePopupOpen, setIsMobilePopupOpen] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);
  const [isSearchCompleted, setIsSearchCompleted] = useState(false);
  const [currentKeyword, setCurrentKeyword] = useState();
  const [isRenderLoading, setIsRenderLoading] = useState(false);
  const [infoTipText, setInfoTipText] = useState('');
 
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
    resetForm();
    setIsPopupForSignupOpen(true);
    setIsPopupForLoginOpen(false);
    document.addEventListener('keydown', onEscClose);
  }
  function handlePopupInfoTip() {
    setIsPopupInfoTipOpen(true);
    document.addEventListener('keydown', onEscClose);
  }
  function handlePopupForLogin() {
    resetForm();
    setIsPopupForSignupOpen(false);
    setIsPopupForLoginOpen(true);
    document.addEventListener('keydown', onEscClose);
  }
  function handleMobilePopup() {
    setIsMobilePopupOpen(true);
  }
  function logout() {
    setIsLogin(false);
    localStorage.removeItem('token');
    localStorage.removeItem("currentKeyword");
    localStorage.removeItem(searchResult)
    history.push('/');
  }
  function handleOverlayClick(evt) {
    if (evt.target.classList.contains('popup')) {
      handleCloseAllPopups();
    }
  }
  function getSearchResult(keyword) {
    setIsRenderLoading(true);
    newsApi.getArticles(keyword)
    .then((result) =>{
      setSearchResult(result.articles);
      setCurrentKeyword(keyword);
      localStorage.setItem(searchResult, JSON.stringify(result.articles));
      localStorage.setItem("currentKeyword", keyword);
      setIsSearchCompleted(true);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(()=>{
      setIsRenderLoading(false)
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
    .catch((error) => {
        console.error(error);
    });
  }
  function deleteArticle(cardId){
    const token = localStorage.getItem('token');
    deleteArticleApi(token, cardId)
    .then(()=>{
      getSavedArticles()
    })
    .catch((error) => {
        console.error(error);
    });
  }
  function onLogin({ email, password }) {
    loginApi({ email, password })
        .then((res) => {
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
            setInfoTipText('Вход выполнен!');
            }
          if (res.message) {
            setSubmitError(res.message);
            throw new Error()
          }
        })
      .then(() => {
        handleCloseAllPopups() ;
      })
      .then(() => {
        handlePopupInfoTip();
      })
      .catch((err) => console.log(err));
  }
  function onSignup({ password, email, name }) {
    signupApi({ password, email, name })
      .then((res) => {
        if (res.email) {
          setInfoTipText('Вы успешно зарегистрировались!');
        }
        if (res.message) {
          setSubmitError(res.message);
          throw new Error()
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
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false); 
  const [submitError, setSubmitError] = useState('');
  
  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };
  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false, newSubmitError = '') => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
      setSubmitError(newSubmitError);
    },
    [setValues, setErrors, setIsValid, setSubmitError]
  );

  function handlePopupSubmit(ev) {
    ev.preventDefault();
    if (isPopupForSignupOpen){
      onSignup({
          password: values.password,
          email: values.email,
          name: values.name 
        }
      );
    } if (isPopupForLoginOpen) {
       onLogin({
          password: values.password,
          email: values.email,
        }
      );
    }
  }   
  useEffect(() => {
    const savedSearchResult = localStorage.getItem(searchResult);
    const savedCurrentKeyword = localStorage.getItem("currentKeyword");
    if (savedSearchResult && savedCurrentKeyword){
      setSearchResult(JSON.parse(savedSearchResult));
      setCurrentKeyword(savedCurrentKeyword)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localStorage]);
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
            onDeleteArticle={deleteArticle}
            onGetArticles={getSearchResult}
            searchResult={searchResult}
            isSearchCompleted={isSearchCompleted}
            keyword={currentKeyword}
            isRenderLoading={isRenderLoading}
          />
        </Route>
        <ProtectedRoute
          path="/saved-news"
          component={SavedNews}
          isLogin={isLogin}
          onPopupForSignup={handlePopupForSignup}
          savedArticles={savedArticles}
          getSavedArticles={getSavedArticles}
          onDeleteArticle={deleteArticle}
        />
      </Switch>
      <Footer/>
      <PopupForLogin
        isPopupForLoginOpen={isPopupForLoginOpen}
        onClose={handleCloseAllPopups}
        onPopupForSignup={handlePopupForSignup}
        onOverlayClick={handleOverlayClick}
        onSubmit={handlePopupSubmit}
        isValid={isValid}
        onChange={handleChange}
        values={values}
        errors={errors}
        submitError={submitError}
      />
      <PopupForSignup
        isPopupForSignupOpen={isPopupForSignupOpen}
        onClose={handleCloseAllPopups}
        onPopupForLogin={handlePopupForLogin}
        onSubmit={handlePopupSubmit}
        onOverlayClick={handleOverlayClick}
        isValid={isValid}
        onChange={handleChange}
        values={values}
        errors={errors}
        submitError={submitError}
      />
      <PopupInfoTip
        isLogin={isLogin}
        infoTipText={infoTipText}
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
