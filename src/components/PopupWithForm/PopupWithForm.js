import React, { useState } from 'react';

function PopupWithForm(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();

  function handleChangeEmail(ev) {
    setEmail(ev.target.value);
    
  } 
  function handleChangePassword(ev) {
    setPassword(ev.target.value);
  }
  function handleChangeName(ev) {
    setName(ev.target.value);
  }
  let isOpen;
  if (props.isOpen) {
    isOpen = 'popup_opened';
  }
      
  return (
    <section className={`popup popup_for_${props.name} ${isOpen}`} onClick={props.onOverlayClick}>
      <form
        id={`form_for_${props.name}`}
        className='popup__form'
        action='#'
        method='POST'
        noValidate 
      >
        <button
          className='popup__close-button'
          type='button'
          onClick={props.onClose}
        ></button>
        <h2 className='popup__title'>{props.title}</h2>
        <fieldset className='popup__fieldset'>
          <span className='popup__input-label'>
            Email
          </span>
          <input
            id={`input-email-${props.inputId}`}
            className='popup__input popup__input_email'
            type='email'
            name='email'
            defaultValue={email}
            onChange={handleChangeEmail}
            autoComplete='email'
            required
            placeholder='Введите почту'
            pattern='^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$'
          />
          <span id={`input-email-${props.inputId}-error`}
            className='popup__input-error-text'>
            Неправильный формат email
          </span>
          <span className='popup__input-label'>
            Пароль
          </span>
          <input
            id={`input-password-${props.inputId}`}
            className='popup__input popup__input_password'
            type='password'
            name='password'
            defaultValue={password}
            onChange={handleChangePassword}
            autoComplete='current-password'
            required
            placeholder='Введите пароль'
            pattern='[0-9a-zA-Z!@#$%^&*]{8,32}'
            maxLength='32'
            minLength='8'
          />
          <span id={`input-password-${props.inputId}-error`} 
            className='popup__input-error-text'>
            Неправильный пароль
          </span>
          <div className={props.inputNameClass}>
            <span className='popup__input-label'>
              Имя
            </span>
            <input
              id={`input-name-${props.inputId}`}
              className='popup__input popup__input_name'
              type='text'
              name='name'
              defaultValue={name}
              onChange={handleChangeName}
              required
              placeholder='Введите свое имя'
              pattern='/[а-яА-Яa-zA-Z]/i'
              maxLength='20'
              minLength='2'
            />
            <span id={`input-name-${props.inputId}-error`}
              className='popup__input-error-text'>
              Имя - обязательное поле!
            </span>
          </div>
          <span
            className='popup__input-error-text popup__auth-error-text'>
            Имя - обязательное поле!
          </span>
        </fieldset>
        <button
          className='popup__submit-button'
          type='submit'
          defaultValue={props.buttonName}
        >
          {props.buttonName}
        </button>
        <div className='popup__link-wrapper'>
          <span>или</span>
          <button
          className="popup__link-button"
          type='button'
          onClick={props.onButtonClick} 
          > 
            {props.buttonLink}
          </button> 
        </div>
      </form>
    </section>
  );
}

export default PopupWithForm;
