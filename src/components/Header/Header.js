import React, { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import logoutIconBlack from "../../images/logout-black.svg";
import logoutIconWhite from "../../images/logout-white.svg";
import { NavLink, Link } from "react-router-dom";

function Header(props) {
  const [scroll, setScroll] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentUser = useContext(CurrentUserContext);
  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  function menuOpen() {
    setIsMenuOpen(true);
  }
  function menuClose() {
    setIsMenuOpen(false);
  }
  function authButtonClick() {
    menuClose();
    props.onMobilePopupOpen();
    props.onPopupForSignup();
  }
  const logoutIcon = `${
    props.isHeaderBlack ? logoutIconBlack : logoutIconWhite
  }`;
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={
          "header__overlay" + (isMenuOpen ? " header__overlay_active" : "")
        }
      ></div>
      {(props.isHeaderBlack || scroll <= 350) && (
        <header
          className={
            "header" +
            (props.isHeaderBlack ? " header_black-version" : "") +
            (isMenuOpen ? " header_opened-menu" : "")
          }
        >
          <Link
            className={
              "header__logo header__link" +
              (props.isHeaderBlack
                ? " header__link_black-version header__logo_black-version"
                : "")
            }
            to="/news-explorer-frontend/"
          >
            NewsExplorer
          </Link>
          {isMenuOpen ? (
            <button
              className={
                "header__menu-button" +
                (props.isHeaderBlack
                  ? " header__menu-button_close_black-version"
                  : "   header__menu-button_close")
              }
              onClick={menuClose}
            ></button>
          ) : (
            <button
              className={
                "header__menu-button" +
                (props.isHeaderBlack
                  ? " header__menu-button_open_black-version"
                  : "   header__menu-button_open") +
                (props.isMobilePopupOpen ? " header__menu-button_hidden" : "")
              }
              onClick={menuOpen}
            ></button>
          )}
          <nav
            className={
              "header__nav" + (isMenuOpen ? "" : " header__nav_hidden")
            }
          >
            <NavLink
              activeClassName={
                props.isHeaderBlack
                  ? "header__link_active_black-version"
                  : "header__link_active"
              }
              className={
                "header__main header__link" +
                (props.isHeaderBlack ? " header__link_black-version" : "")
              }
              to="/news-explorer-frontend/"
            >
              Главная
            </NavLink>
            {props.isLogin && (
              <NavLink
                activeClassName={
                  props.isHeaderBlack
                    ? "header__link_active_black-version"
                    : "header__link_active"
                }
                className={
                  "header__saved-news header__link" +
                  (props.isHeaderBlack ? " header__link_black-version" : "")
                }
                to="/saved-news"
              >
                Сохранённые статьи
              </NavLink>
            )}
            {!props.isLogin && (
              <button
                className={
                  "header__auth-button" +
                  (props.isHeaderBlack
                    ? " header__auth-button_black-version"
                    : "")
                }
                onClick={authButtonClick}
              >
                Авторизоваться
              </button>
            )}
            {props.isLogin && (
              <button
                className={
                  "header__auth-button" +
                  (props.isHeaderBlack
                    ? " header__auth-button_black-version"
                    : "")
                }
                onClick={props.onLogout}
              >
                {props.isLogin && (
                  <>
                    <span
                      className={
                        "header__auth-name" +
                        (props.isHeaderBlack
                          ? " header__auth-name_black-version"
                          : "")
                      }
                    >
                      {currentUser.name}
                    </span>
                    <img
                      className="header__logout-button"
                      alt="Выход"
                      src={logoutIcon}
                    />
                  </>
                )}
              </button>
            )}
          </nav>
        </header>
      )}
    </>
  );
}

export default Header;
