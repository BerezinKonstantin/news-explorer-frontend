import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SavedNews from '../SavedNews/SavedNews';

import PopupWithForm from '../PopupWithForm/PopupWithForm';
import './App.css';

function App() {
  
  return (
    <div className='app'>
      <Header />
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
