import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function PopupForSignup(props) {
  return (
    <PopupWithForm 
      title='Регистрация'
      name='signup'
      inputId='signup'
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonName='Зарегистрироваться'
      buttonLink="Войти"
      onButtonClick={props.onPopupForLogin}
      inputNameClass='popup__input-name-wrapper_active'
      onOverlayClick={props.onOverlayClick}
    />
  );
}

export default PopupForSignup;
