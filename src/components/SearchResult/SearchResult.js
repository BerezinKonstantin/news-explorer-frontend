import React, {useState} from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import Preloader from '../Preloader/Preloader';
import notFoundIcon from '../../images/not-found.svg';

function SearchResult(props) {
  let isLoading = false;
  
  let [cardsNumber, setCardsNumber] = useState(3);
  const cards = props.searchResult.slice(0, 0+cardsNumber);
  const isSearchSuccess = props.searchResult.length !== 0 ? true : false;
  const isNotResult = ( props.searchResult.length === 0 && props.isSearchCompleted ) ? true : false;
  function showMoreCards(){
     let nextNumber = cardsNumber+3;
     setCardsNumber(nextNumber)
  }

  return (
    <>
    {
      (isSearchSuccess || isLoading || isNotResult) &&
      (
        <div className="search-result">
        { isSearchSuccess && 
          (
            <>
              <h1 className="search-result__title">
                Результаты поиска
              </h1>
              <NewsCardList
                cards={cards}
                keyword={props.keyword}
              />
              { (cards.length < props.searchResult.length ) &&
                (<button
                className="search-result__more_button"
                type="button"
                onClick={showMoreCards}
                >
                  Показать ещё
                </button>)
              } 
            </>
          )
        } 
        { isLoading && 
          <>
            <Preloader />
            <p className="search-result__subtitle_not-result">
                Идет поиск новостей...
            </p>
          </>
        }
        { isNotResult &&
          (
            <>
              <img
                 className="search-result__img_not-result"
                 src={notFoundIcon}
                 alt='Ничего не найдено'
              />
              <h2 className="search-result__title_not-result">
                Ничего не найдено
              </h2>
              <p className="search-result__subtitle_not-result">
                К сожалению, по вашему запросу ничего не найдено.
              </p>
            </>
          )
        }
        </div>
      )
    }
    </>
  );
}

export default SearchResult;