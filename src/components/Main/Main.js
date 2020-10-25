import React from 'react';
import About from '../About/About';
import SearchForm from '../SearchForm/SearchForm';

function Main() {
  return (
    <main className='main'>
      <SearchForm/>
      <About/>
    </main>
  );
}

export default Main;