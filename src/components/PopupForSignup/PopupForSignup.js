import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function PopupForSignup(props) {
  return (
    <PopupWithForm 
      title='Регистрация'
      name='signup'
      inputId='signup'
      isPopupForSignupOpen={props.isPopupForSignupOpen}
      onClose={props.onClose}
      buttonName='Зарегистрироваться'
      buttonLink='Войти'
      onButtonClick={props.onPopupForLogin}
      inputNameClass='popup__input-name-wrapper_active'
      onOverlayClick={props.onOverlayClick}
      onSubmit={props.onSubmit}
      isValid={props.isValid}
      onChange={props.onChange}
      values={props.values}
      errors={props.errors}
      submitError={props.submitError}
    />
  );
}

export default PopupForSignup;
