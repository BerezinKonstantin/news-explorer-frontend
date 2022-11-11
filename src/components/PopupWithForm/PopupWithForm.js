import React from "react";

function PopupWithForm(props) {
  let isOpenClassName;
  if (props.isPopupForSignupOpen || props.isPopupForLoginOpen) {
    isOpenClassName = "popup_opened";
  }

  return (
    <section
      className={`popup popup_for_${props.name} ${isOpenClassName}`}
      onClick={props.onOverlayClick}
    >
      <form
        id={`form_for_${props.name}`}
        className="popup__form"
        action="#"
        method="POST"
        noValidate
        onSubmit={props.onSubmit}
      >
        <button
          className="popup__close-button"
          type="button"
          onClick={props.onClose}
        ></button>
        <h2 className="popup__title">{props.title}</h2>
        <fieldset className="popup__fieldset">
          <span className="popup__input-label">Email</span>
          <input
            className="popup__input popup__input_email"
            type="email"
            name="email"
            onChange={props.onChange}
            value={props.values.email || ""}
            autoComplete="email"
            required
            placeholder="Введите почту"
            pattern="([\w.%+-]+)@([\w-]+\.)+([\w]{2,})"
          />
          {props.errors.email && (
            <span className="popup__input-error-text">
              {props.errors.email}
            </span>
          )}
          <span className="popup__input-label">Пароль</span>
          <input
            className="popup__input popup__input_password"
            type="password"
            name="password"
            onChange={props.onChange}
            value={props.values.password || ""}
            autoComplete="current-password"
            required
            placeholder="Введите пароль"
            maxLength="32"
            minLength="8"
          />
          {props.errors.password && (
            <span className="popup__input-error-text">
              {props.errors.password}
            </span>
          )}
          {props.isPopupForSignupOpen && (
            <>
              <span className="popup__input-label">Имя</span>
              <input
                className="popup__input popup__input_name"
                type="text"
                name="name"
                onChange={props.onChange}
                value={props.values.name || ""}
                required
                placeholder="Введите свое имя"
                pattern="[а-яА-Яa-zA-Z]{2,20}"
                maxLength="20"
                minLength="2"
              />
              {props.errors.name && (
                <span className="popup__input-error-text">
                  {props.errors.name}
                </span>
              )}
            </>
          )}
          <span
            className={
              "popup__input-error-text popup__auth-error-text" +
              (props.submitError ? " popup__auth-error-text_active" : "")
            }
          >
            {props.submitError}
          </span>
        </fieldset>
        <button
          className="popup__submit-button"
          type="submit"
          defaultValue={props.buttonName}
          disabled={!props.isValid}
        >
          {props.buttonName}
        </button>
        <div className="popup__link-wrapper">
          <span>или</span>
          <button
            className="popup__link-button"
            type="button"
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
