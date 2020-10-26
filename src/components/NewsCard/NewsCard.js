import React from 'react';
import cardImage from '../../images/card-image.jpg'

function NewsCard() {
 
  return (
    <li className='card'>
      <img
        className='card__picture'
        src={cardImage}
        alt="Изображение карточки"
      />
      <p className='card__date'>2 августа, 2019</p>
      <h2 className='card__title'>Лесные огоньки: история одной фотографии Лесные огоньки: история одной фотографии</h2>
      <p className='card__text'>В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.</p>
      <p className='card__source'>Медуза</p>
      <p className='card__tag'>Природа</p>
      <button className='card__button'></button>
      <p className='card__button-label'>Войдите, чтобы сохранять статьи</p>
    </li> 
  );
}

export default NewsCard;