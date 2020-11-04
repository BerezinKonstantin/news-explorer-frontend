import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function PopupForLogin(props) {
  return (
    <PopupWithForm
      title='Вход'
      name='login'
      inputId='login'
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonName='Войти'
      buttonLink="Зарегистрироваться"
      onButtonClick={props.onPopupForSignup}
      inputNameClass='popup__input-name-wrapper_hidden'
      onOverlayClick={props.onOverlayClick}
    />    
  );
}

export default PopupForLogin;
