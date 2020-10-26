import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';

function SavedNews() {
  return (
    <main className='saved-news'>
      <SavedNewsHeader />
      <NewsCardList />
    </main> 
  );
}   

export default SavedNews;