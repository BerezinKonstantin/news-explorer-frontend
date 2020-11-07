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
            /*onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}*/
          />
        ))}
    </ul> 
  );
}

export default NewsCardList;