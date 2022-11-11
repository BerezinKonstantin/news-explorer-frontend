import React from "react";

function SearchForm(props) {
  const searchInput = React.useRef();
  const [isValid, setIsValid] = React.useState(false);
  const [isErrHide, setIsErrHide] = React.useState(true);
  const handleChange = (ev) => {
    setIsValid(ev.target.closest("form").checkValidity());
  };
  function handleSubmit(ev) {
    ev.preventDefault();
    props.onGetArticles(searchInput.current.value);
  }
  function handleErrHide() {
    setIsErrHide(false);
  }

  return (
    <div className="search-form">
      <h1 className="search-form__title">Что творится в мире?</h1>
      <p className="search-form__subtitle">
        Находите самые свежие статьи на любую тему и сохраняйте в своём личном
        кабинете.
      </p>

      <form
        className="search-form__form"
        onSubmit={handleSubmit}
        noValidate
        onMouseDown={handleErrHide}
      >
        {!isValid && !isErrHide && (
          <span className="search-form__error">
            Нужно ввести ключевое слово для поиска
          </span>
        )}
        <div className="search-form__input-wrapper">
          <input
            type="text"
            id="input-search"
            className="search-form__input"
            name="search"
            autoComplete="off"
            ref={searchInput}
            required
            placeholder="Введите тему новости"
            minLength="2"
            onChange={handleChange}
          />
          <button
            className="search-form__submit-button"
            type="submit"
            disabled={!isValid}
          >
            Искать
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
