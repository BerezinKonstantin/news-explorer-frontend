import React from 'react';

function PopupInfoTip(props) {
  let isOpen;
  if (props.isOpen) {
    isOpen = 'popup_opened';
  }
  function redirectToLogin(){
    props.onClose()
    props.onPopupForLogin()
  }

  return (
    <section
      className={`popup popup_info-tip ${isOpen}`}
      onClick={props.onOverlayClick}
    >
      <div className='popup__form popup__form-info-tip'>
        <button
          className='popup__close-button'
          type='button'
          onClick={props.onClose}
        >
        </button>
        <h2 className='popup__title'>
          {props.infoTipText}
        </h2>
        {!props.isLogin && <button
          className='popup__link-button-info-tip'
          type='button'
          onClick={redirectToLogin} 
        > 
          Войти
        </button> }
      </div>
    </section>
  );
}

export default PopupInfoTip;
