import React, { useState } from "react";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import notFoundIcon from "../../images/not-found.svg";

function SearchResult(props) {
  const [cardsNumber, setCardsNumber] = useState(3);
  const cardsFiltred = props.searchResult.filter((card) => card.urlToImage);
  const cardsSliced = cardsFiltred.slice(0, 0 + cardsNumber);
  const isSearchSuccess = cardsFiltred.length !== 0 ? true : false;
  const isNotResult =
    cardsFiltred.length === 0 && props.isSearchCompleted ? true : false;
  function showMoreCards() {
    let nextNumber = cardsNumber + 3;
    setCardsNumber(nextNumber);
  }

  return (
    <>
      {(isSearchSuccess || props.isRenderLoading || isNotResult) && (
        <div className="search-result">
          {props.isRenderLoading && (
            <>
              <Preloader />
              <p className="search-result__subtitle">Идет поиск новостей...</p>
            </>
          )}
          {isSearchSuccess && (
            <>
              <h1 className="search-result__title">Результаты поиска</h1>
              <NewsCardList
                cards={cardsSliced}
                keyword={props.keyword}
                onSaveArticle={props.onSaveArticle}
                onDeleteArticle={props.onDeleteArticle}
                isLogin={props.isLogin}
              />
              {cardsSliced.length < cardsFiltred.length && (
                <button
                  className="search-result__more_button"
                  type="button"
                  onClick={showMoreCards}
                >
                  Показать ещё
                </button>
              )}
            </>
          )}
          {isNotResult && (
            <>
              <img
                className="search-result__img_not-result"
                src={notFoundIcon}
                alt="Ничего не найдено"
              />
              <h2 className="search-result__title_not-result">
                Ничего не найдено
              </h2>
              <p className="search-result__subtitle">
                К сожалению, по вашему запросу ничего не найдено.
              </p>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default SearchResult;
