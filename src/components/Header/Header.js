import React from 'react';
import { useLocation, NavLink, Link } from 'react-router-dom';

function Header() {
    
  return (
    <>
      { useLocation().pathname === '/saved-news' ? (
        <header className='header header_black-version'>
          <Link className='header__logo header__link header__link_black-version' to='/'>
              NewsExplorer
          </Link>
          <nav className='header__nav'>
            <NavLink activeClassName="header__link_active_black-version" className='header__main header__link header__link_black-version' exact to='/'>
              Главная
            </NavLink>
            <NavLink activeClassName="header__link_active_black-version" className='header__saved-news header__link header__link_black-version' to='/saved-news'>
              Сохранённые статьи
            </NavLink>
            <button className='header__auth-button header__auth-button_black-version'>
              Выйти
            </button>
          </nav>
        </header>
      ) : (
        <header className='header'>
          <Link className='header__logo header__link' to='/'>
              NewsExplorer
          </Link>
          <nav className='header__nav'>
            <NavLink activeClassName="header__link_active" className='header__main header__link' exact to='/'>
              Главная
            </NavLink>
            <NavLink activeClassName="header__link_active" className='header__saved-news header__link' to='/saved-news'>
              Сохранённые статьи
            </NavLink>
            <button className='header__auth-button'>
              Выйти
            </button>
          </nav>
        </header>
      )}
    </>
  )
}

export default Header;