import React from 'react';

function SavedNewsHeader() {
  return (
    <div className='saved-news-header'>
      <p className='saved-news-header__sub-title'>
        Сохранённые статьи
      </p>
      <h1 className='saved-news-header__title'>
        Грета, у вас 5 сохранённых статей
      </h1>
      <p className='saved-news-header__info'>
        По ключевым словам: Природа, Тайга и 2-м другим
      </p>
    </div> 
  );
}

export default SavedNewsHeader;