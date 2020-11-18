import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList(props) {
  return (
    <ul className='card-list'>
      {props.cards.map((card, i) => (
          <NewsCard
            card={card}
            key={i}
            keyword={props.keyword}
            onSaveArticle={props.onSaveArticle}
            onDeleteArticle={props.onDeleteArticle}
            isLogin={props.isLogin}
          />
        ))}
    </ul> 
  );
}

export default NewsCardList;