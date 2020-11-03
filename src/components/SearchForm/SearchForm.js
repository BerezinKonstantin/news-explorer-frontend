import React from 'react';

function SearchForm() {
  return ( 
    <div className='search-form'>
     <h1 className='search-form__title'>
        Что творится в мире?
      </h1>
      <p className='search-form__subtitle'>
        Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.
      </p>
      <form className='search-form__form'>
        <input
          type ='text'
          id='input-search'
          className='search-form__input'
          name='email'
          autoComplete='off'
          // defaultValue={email}
          // onChange={handleChangeEmail}
          required
          placeholder='Введите тему новости'
        />
        <button
         className='search-form__submit-button'
         type='submit'>
          Искать
        </button>
      </form>
    </div>
  );
}

export default SearchForm;