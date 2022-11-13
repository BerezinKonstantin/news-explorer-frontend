import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function NewsCard(props) {
  const [isCardSaved, setIsCardSaved] = useState(false);
  const [isButtonOnFocus, setIsButtonOnFocus] = useState(false);
  const location = useLocation().pathname;
  const cardText = `${
    location === "/" ? props.card.description : props.card.text
  }`;
  const cardLink = `${location === "/" ? props.card.url : props.card.link}`;
  const imgSource = `${
    location === "/" ? props.card.urlToImage : props.card.image
  }`;
  const keyword = `${location === "/" ? props.keyword : props.card.keyword}`;
  const cardDate = `${
    location === "/" ? props.card.publishedAt : props.card.date
  }`;
  const cardSource = `${
    location === "/" ? props.card.source.name : props.card.source
  }`;
  useEffect(() => {
    setIsCardSaved(false);
  }, [props]);
  function handleSaveArticle() {
    if (props.isLogin && !isCardSaved) {
      if (location === "/") {
        const data = {
          link: props.card.url,
          keyword: props.keyword,
          title: props.card.title,
          text: props.card.description,
          date: props.card.publishedAt,
          source: props.card.source.name,
          image: props.card.urlToImage,
        };
        props.onSaveArticle(data);
        setIsCardSaved(true);
      }
    }
  }
  function handleDeleteArticle() {
    props.onDeleteArticle(props.card._id);
    setIsCardSaved(false);
  }
  function handleClick() {
    if (location === "/") {
      handleSaveArticle();
    }
    if (location === "/saved-news") {
      handleDeleteArticle();
    }
  }
  function handleFocus() {
    setIsButtonOnFocus(!isButtonOnFocus);
  }

  function dateConverter(date) {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    const convertedMonth = month
      .replace("01", "Января")
      .replace("02", "Февраля")
      .replace("03", "Марта")
      .replace("04", "Апреля")
      .replace("05", "Мая")
      .replace("06", "Июня")
      .replace("07", "Июля")
      .replace("08", "Августа")
      .replace("09", "Сентября")
      .replace("10", "Октября")
      .replace("11", "Ноября")
      .replace("12", "Декабря");
    return day + " " + convertedMonth + ", " + year;
  }

  return (
    <li className="card">
      <a
        className="card_link"
        href={cardLink}
        rel="noopener noreferrer"
        target="_blank"
      >
        <img className="card__picture" src={imgSource} alt={props.card.title} />
        <p className="card__date">{dateConverter(cardDate)}</p>
        <h2 className="card__title">{props.card.title}</h2>
        <p className="card__text">{cardText}</p>
        <p className="card__source">{cardSource}</p>
      </a>
      <p className="card__tag">{keyword}</p>
      {location === "/" ? (
        <button
          className={
            "card__button card__button_save" +
            (isCardSaved ? " card__button_save_active" : "")
          }
          onClick={handleClick}
          onMouseEnter={handleFocus}
          onMouseLeave={handleFocus}
        ></button>
      ) : (
        <button
          className={"card__button card__button_delete"}
          onClick={handleClick}
          onMouseEnter={handleFocus}
          onMouseLeave={handleFocus}
        ></button>
      )}
      {isButtonOnFocus && props.isLogin && location === "/saved-news" && (
        <p className="card__button-label">Удалить из сохранённых</p>
      )}
      {isButtonOnFocus && !props.isLogin && (
        <p className="card__button-label">Войдите, чтобы сохранять статьи</p>
      )}
    </li>
  );
}

export default NewsCard;
