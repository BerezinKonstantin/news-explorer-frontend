import React, { useState } from 'react';
import imgFailure from '../../images/img-failure.png'
function NewsCard(props) {
  const [isButtonClick, setIsButtonClick] = useState(false);
  let isCardSaved = false;
  function handleButtonClick(){
    setIsButtonClick(true)
  }
  const imgSource = props.card.urlToImage ? props.card.urlToImage : imgFailure;
  return (
    <li className='card'>
      <a 
      className='card_link'
      href={props.card.url}
      rel="noopener noreferrer"
      target='_blank'
      >
      <img
        className='card__picture'
        src={imgSource}
        alt={props.card.title}
      />
      <p className='card__date'>
        {props.card.publishedAt}
      </p>
      <h2 className='card__title'>
        {props.card.title}
      </h2>
      <p className='card__text'>
        {props.card.description}
      </p>
      <p className='card__source'>
        {props.card.source.name}
      </p>
      </a>
      <p className='card__tag'>
        {props.keyword}
      </p>
      <button
        className={'card__button' + (isCardSaved ? " card__button_delete" : " card__button_save")}
        onClick={handleButtonClick}
      >
      </button>
      {
      isButtonClick && 
      <p className='card__button-label'>
        Войдите, чтобы сохранять статьи
      </p>
      }
    </li> 
  );
}

export default NewsCard;