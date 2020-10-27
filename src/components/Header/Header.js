import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Header(props) {
   
  return (
    <header className={ "header" + (props.isHeaderBlack ? " header_black-version" : "") }>
      <Link
       className={ "header__logo header__link" + (props.isHeaderBlack ? " header__link_black-version" : "") }
       to='/'
       >
        NewsExplorer
      </Link>
      <nav className='header__nav'>
        <NavLink
         activeClassName={ (props.isHeaderBlack ? "header__link_active_black-version" : "header__link_active") }
         className={ "header__main header__link" + (props.isHeaderBlack ? " header__link_black-version" : "") }
         exact
         to='/'
         >
          Главная
        </NavLink>
        {props.isLogin &&
        <NavLink
         activeClassName={ (props.isHeaderBlack ? "header__link_active_black-version" : "header__link_active") }
         className={ "header__saved-news header__link" + (props.isHeaderBlack ? " header__link_black-version" : "") }
         to='/saved-news'>
          Сохранённые статьи
        </NavLink>}
        <button 
        className={ "header__auth-button" + (props.isHeaderBlack ? " header__auth-button_black-version" : "") }
        onClick={props.onPopupForLogin}
        >
          Выйти
        </button>
      </nav>
    </header>
  )
}

export default Header;