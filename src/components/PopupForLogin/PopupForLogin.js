import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function PopupForLogin(props) {
  return (
    <PopupWithForm
      title='Вход'
      name='login'
      inputId='login'
      isPopupForLoginOpen={props.isPopupForLoginOpen}
      onClose={props.onClose}
      buttonName='Войти'
      buttonLink='Зарегистрироваться'
      onButtonClick={props.onPopupForSignup}
      inputNameClass='popup__input-name-wrapper_hidden'
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

export default PopupForLogin;
