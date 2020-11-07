import React, { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import About from '../About/About';
import SearchForm from '../SearchForm/SearchForm';
import SearchResult from '../SearchResult/SearchResult';


function Main(props) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <main className='main'>
      <SearchForm
        onGetArticles={props.onGetArticles}
      />
      <SearchResult
        searchResult={props.searchResult}
        isSearchCompleted={props.isSearchCompleted}
        keyword={props.keyword}
      /> 
      <About/>
    </main>
  );
}

export default Main;