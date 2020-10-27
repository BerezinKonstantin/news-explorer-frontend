import React from 'react';

function PopupWithForm(props) {
  let isOpen;
  if (props.isOpen) {
    isOpen = 'popup_opened';
  }
 
  return (
    <section className={`popup popup_for_${props.name} ${isOpen}`}>
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
        <fieldset className='popup__fieldset'>{props.children}</fieldset>
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
          onClick={props.onPopupForSignup} //Передать!!!
          > 
            {props.buttonLink}
          </button> 
        </div>
      </form>
    </section>
  );
}

export default PopupWithForm;
