import React from 'react';
import About from '../About/About';
import SearchForm from '../SearchForm/SearchForm';
import SearchResult from '../SearchResult/SearchResult';

function Main() {
  return (
    <main className='main'>
      <SearchForm/>
      <SearchResult/> 
      <About/>
    </main>
  );
}

export default Main;