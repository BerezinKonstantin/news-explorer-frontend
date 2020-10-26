import React from 'react';
import NewsCard from '../NewsCard/NewsCard';


function NewsCardList() {
  return (
    <ul className='card-list'>
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </ul> 
  );
}

export default NewsCardList;