import React from 'react';
import logoutIconBlack from '../../images/logout-black.svg'
import logoutIconWhite from '../../images/logout-white.svg'
import { NavLink, Link } from 'react-router-dom';

function Header(props) {
  let name = 'Константин'
  const logoutIcon = `${props.isHeaderBlack ? logoutIconBlack : logoutIconWhite}`;
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
        {!props.isLogin && 
        <button 
        className={ "header__auth-button" + (props.isHeaderBlack ? " header__auth-button_black-version" : "") }
        onClick={props.onPopupForSignup}
        >
          Авторизоваться
        </button>
        }
        {props.isLogin && 
        <button 
        className={ "header__auth-button" + (props.isHeaderBlack ? " header__auth-button_black-version" : "") }
        onClick={props.onLogout}
        >
         { props.isLogin && (
         <>
         <span className={"header__auth-name" + (props.isHeaderBlack ? " header__auth-name_black-version" : "") }>
         {name}
         </span> 
         <img className="header__logout-button" alt="Выход" src={logoutIcon}/>
         </>
         ) }
        </button>
        }
      </nav>
    </header>
  )
}

export default Header;
