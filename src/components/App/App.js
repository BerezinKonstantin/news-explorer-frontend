import React, { useState, useEffect } from 'react';
import { useLocation, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SavedNews from '../SavedNews/SavedNews';

import PopupWithForm from '../PopupWithForm/PopupWithForm';
import './App.css';

function App() {
  const isLogin = true;
  let pathname = useLocation().pathname;
  const [isHeaderBlack, setIsHeaderBlack] = useState();
  function handleHeaderChange(pathname) {
    
    if (pathname === '/saved-news') {
      setIsHeaderBlack(true)
    } if (pathname === '/') {
      setIsHeaderBlack(false)
    };
  }
  
  useEffect(() => {
    handleHeaderChange(pathname)
  }, [pathname]);

  return (
    <div className='app'>
      <Header
       isLogin={isLogin}
       isHeaderBlack={isHeaderBlack}
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
      <PopupWithForm />
    </div>
  );
}

export default App;
