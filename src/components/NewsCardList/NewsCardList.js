import React from 'react';
import NewsCard from '../NewsCard/NewsCard';


function NewsCardList() {
  return (
    <ul className='cards'>
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </ul> 
  );
}

export default NewsCardList;