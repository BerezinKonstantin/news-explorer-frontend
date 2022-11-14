import React, { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function SavedNewsHeader(props) {
  const articles = props.savedArticles;
  const numberOfArticles = articles.length;
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="saved-news-header">
      <p className="saved-news-header__sub-title">Сохранённые статьи</p>
      <h1 className="saved-news-header__title">
        {currentUser.name}, у вас {numberOfArticles}
        {numberOfArticles === 1 ? " сохранённая" : " сохранённых"}
        {numberOfArticles === 1
          ? " статья"
          : numberOfArticles <= 4
          ? " статьи"
          : " статей"}
      </h1>
      {props.sortedKeywords.length > 0 && (
        <p className="saved-news-header__info">
          По ключевым словам:
          <span className="saved-news-header__info-bold">
            &nbsp;{props.sortedKeywords[0]}
            {props.sortedKeywords.length > 1 && ", " + props.sortedKeywords[1]}
            &nbsp;
          </span>
          {props.sortedKeywords.length > 2 && (
            <>
              и
              <span className="saved-news-header__info-bold">
                &nbsp;{props.sortedKeywords.length - 2}-
                {props.sortedKeywords.length === 3 ? "му" : "м"}&nbsp;
              </span>
              {props.sortedKeywords.length === 3 ? "другому" : "другим"}
            </>
          )}
        </p>
      )}
    </div>
  );
}

export default SavedNewsHeader;
