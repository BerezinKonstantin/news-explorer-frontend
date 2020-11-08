import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function NewsCard(props) {
  const [isCardSaved, setIsCardSaved] = useState(false)
  let isButtonClick = false;
  const location = useLocation();
  const cardText = `${location.pathname === '/' ? props.card.description : props.card.text}`;
  const cardLink = `${location.pathname === '/' ? props.card.url : props.card.link}`;
  const imgSource = `${location.pathname === '/' ? props.card.urlToImage : props.card.image}`;
  const keyword = `${location.pathname === '/' ? props.keyword : props.card.keyword}`;
  const cardDate = `${location.pathname === '/' ? props.card.publishedAt : props.card.date}`;
  const cardSource = `${location.pathname === '/' ? props.card.source.name : props.card.source}`;
  function handleSaveArticle(){
    if (location.pathname === '/'){
      const data = {
        link: props.card.url,
        keyword: props.keyword, 
        title: props.card.title,
        text: props.card.description,
        date: props.card.publishedAt,
        source: props.card.source.name,
        image: props.card.urlToImage,
      }
      props.onSaveArticle(data);
      setIsCardSaved(true);
    }
  }
  function handleDeleteArticle(){
    props.onDeleteArticle(props.card._id)
    setIsCardSaved(false)
  }
  return (
    <li className='card'>
      <a 
      className='card_link'
      href={cardLink}
      rel="noopener noreferrer"
      target='_blank'
      >
      <img
        className='card__picture'
        src={imgSource}
        alt={props.card.title}
      />
      <p className='card__date'>
        {cardDate}
      </p>
      <h2 className='card__title'>
        {props.card.title}
      </h2>
      <p className='card__text'>
        {cardText}
      </p>
      <p className='card__source'>
        {cardSource}
      </p>
      </a>
      <p className='card__tag'>
        {keyword}
      </p>
      {location.pathname === '/' ? 
        <button
          className={'card__button card__button_save' + (isCardSaved ? " card__button_save_active" : "")}
          onClick={handleSaveArticle}
        >
        </button>
         :
      <button
        className={'card__button card__button_delete'}
        onClick={handleDeleteArticle}
      >
      </button>}
      {isButtonClick && 
      <p className='card__button-label'>
        Войдите, чтобы сохранять статьи
      </p>}
    </li> 
  );
}

export default NewsCard;