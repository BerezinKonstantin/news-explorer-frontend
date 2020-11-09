import React, { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function SavedNewsHeader(props) {
  const articlesArray = props.savedArticles;
  const numberOfArticles = articlesArray.length;
  const keywordsArray = articlesArray.map(function(el){
    return el.keyword
  });
  console.log(keywordsArray);
  
  const sortedKeywordsArray = keywordsArray.sort();
  console.log(sortedKeywordsArray);

  const currentUser = useContext(CurrentUserContext);
  
  return (
    <div className='saved-news-header'>
      <p className='saved-news-header__sub-title'>
        Сохранённые статьи
      </p>
      <h1 className='saved-news-header__title'>
        {currentUser.name}, у вас {numberOfArticles} сохранённых статей
      </h1>
      <p className='saved-news-header__info'>
        По ключевым словам:
        <span className='saved-news-header__info-bold'>
         &nbsp;Природа, Тайга&nbsp;
        </span>
          и 
        <span className='saved-news-header__info-bold' >
          &nbsp;2-м&nbsp;
        </span>
        другим
      </p>
    </div> 
  );
}

export default SavedNewsHeader;