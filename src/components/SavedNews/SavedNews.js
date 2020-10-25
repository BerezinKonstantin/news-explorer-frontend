import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';

function SavedNews() {
  return (
    <>
      <SavedNewsHeader />
      <NewsCardList />
    </> 
  );
}   

export default SavedNews;