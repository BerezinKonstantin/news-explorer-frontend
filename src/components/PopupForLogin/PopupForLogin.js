import React, { useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function PopupForLogin(props) {
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  function handleChangeEmail(ev) {
    setEmail(ev.target.value);
  }
  function handleChangePassword(ev) {
    setPassword(ev.target.value);
  }
  
  return (
    <PopupWithForm
      title='Вход'
      name='login'
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonName='Войти'
    >
      <span className='popup__input-label'>
        Email
      </span>
      <input
        id='input-name'
        className='popup__input popup__input_email'
        type='email'
        name='email'
        defaultValue={email}
        onChange={handleChangeEmail}
        required
        placeholder='Введите почту'
        pattern='^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$'
      />
      <span id='input-email-error' className='popup__input-error-text'>
        Неправильный формат email
      </span>
      <span className='popup__input-label'>
        Пароль
      </span>
      <input
        id='input-password'
        className='popup__input popup__input_password'
        type='password'
        name='password'
        defaultValue={password}
        onChange={handleChangePassword}
        required
        placeholder='Введите пароль'
        pattern='[0-9a-zA-Z!@#$%^&*]{8,32}'
        maxLength='32'
        minLength='8'
      />
      <span id='input-password-error' className='popup__input-error-text'>
        Неправильный пароль
      </span>
    </PopupWithForm>
  );
}

export default PopupForLogin;
