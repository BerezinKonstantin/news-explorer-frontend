import React, {useEffect} from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';

function SavedNews(props) {
  useEffect(() => {
    props.getSavedArticles();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [] );
  return (
    <main className='saved-news'>
      <SavedNewsHeader 
        savedArticles={props.savedArticles}
        sortedKeywords={props.sortedKeywords}
      />
      <NewsCardList
        cards={props.savedArticles}
        onDeleteArticle={props.onDeleteArticle}
        isLogin={props.isLogin}
      />
    </main> 
  );
}   

export default SavedNews;