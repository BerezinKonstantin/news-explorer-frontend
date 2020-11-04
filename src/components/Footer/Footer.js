import React from 'react';
import { Link } from 'react-router-dom';
import githubIcon from '../../images/github-icon.svg'
import fbIcon from '../../images/facebook-icon.svg'

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__copyright'>
        &copy; 2020 Supersite, Powered by News API
      </p>
      <nav className='footer__nav'>
        <div className='footer__nav-wrapper'>
          <Link className='footer__link' to='/'>
            Главная
          </Link>
          <a 
            className='footer__link'
            href='https://praktikum.yandex.ru'
            rel="noopener noreferrer"
            target='_blank'
          >
            Яндекс Практикум
          </a>
        </div>
        <div className='footer__nav-wrapper'>
          <a
            className='footer__social-link'
            href='https://github.com'
            rel="noopener  noreferrer"
            target='_blank'
          >
            <img
              className='footer__social-link-img'
              src={githubIcon}
              alt='Иконка GitHub'
            />
          </a>
          <a
            className='footer__social-link'
            href='https://www.facebook.com'
            rel="noopener noreferrer"
            target='_blank'
          >
            <img
              className='footer__social-link-img'
              src={fbIcon}
              alt='Иконка Facebook'
            />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
