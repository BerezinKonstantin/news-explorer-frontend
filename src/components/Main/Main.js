import React from "react";
import About from "../About/About";
import SearchForm from "../SearchForm/SearchForm";
import SearchResult from "../SearchResult/SearchResult";

function Main(props) {
  return (
    <main className="main">
      <SearchForm onGetArticles={props.onGetArticles} />
      <SearchResult
        searchResult={props.searchResult}
        isSearchCompleted={props.isSearchCompleted}
        keyword={props.keyword}
        onSaveArticle={props.onSaveArticle}
        onDeleteArticle={props.onDeleteArticle}
        isRenderLoading={props.isRenderLoading}
        isLogin={props.isLogin}
      />
      <About />
    </main>
  );
}

export default Main;
