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
      />
      <NewsCardList
        cards={props.savedArticles}
        onDeleteArticle={props.onDeleteArticle}
      />
    </main> 
  );
}   

export default SavedNews;