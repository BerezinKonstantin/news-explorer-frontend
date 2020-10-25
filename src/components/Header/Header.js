import React from 'react';
import { NavLink, Link } from 'react-router-dom';
function Header() {
  return (
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
        <button className='header__auth-button' /*onClick={}*/>
          Выйти
        </button>
      </nav>
    </header>
  );
}

export default Header;