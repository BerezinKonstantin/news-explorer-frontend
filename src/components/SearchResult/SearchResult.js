import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import Preloader from '../Preloader/Preloader';
import notFoundIcon from '../../images/not-found.svg';

function SearchResult() {
  let isSeachSuccess = false;
  let isLoading = false;
  let isNotResult = false;
  return (
    <>
    { (isSeachSuccess || isLoading || isNotResult) &&
    (<div className="search-result">
      { isSeachSuccess && (
      <>
        <h1 className="search-result__title">Результаты поиска</h1>
        <NewsCardList />
        <button className="search-result__more_button" type="button">Показать ещё</button>
        </>
      )} 
      { isLoading && 
      <>
        <Preloader />
        <p className="search-result__subtitle_not-result">
            Идет поиск новостей...
        </p>
      </>
      }
      { isNotResult && (
      <>
        <img className="search-result__img_not-result" src={notFoundIcon} alt='Ничего не найдено'/>
        <h2 className="search-result__title_not-result">Ничего не найдено</h2>
        <p className="search-result__subtitle_not-result">
          К сожалению, по вашему запросу ничего не найдено.
        </p>
      </>
      )}
    </div>)
    }
    </>
  );
}

export default SearchResult;