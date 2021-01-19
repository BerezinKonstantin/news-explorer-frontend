import React from 'react';
import avatar from '../../images/avatar.jpg'

function About() {
  return (
    <div className='about'>
      <img
        className='about__avatar'
        alt='Аватар пользователя'
        src={avatar}/>
      <div className='about__wrapper'>
        <h2 className='about__title'>
          Об авторе
        </h2>
        <p className='about__text'>
          Привет, меня зовут Константин! 
          <br />
          Это мой дипломный проект по завершению курса Frontend разработчика.
          Это сервис - агрегатор новостей.
          <br />
          Вы можете искать новости интересующей вас теме с помощью стороннего API Newsapi.org.
          Сейчас реализована регистрация, авторизация, сохранение и удаление найденных новостей на отдельной странице, так что - вперед, попробуйте!
          <br />
          Рад, что вы зашли)
        </p>
      </div>
    </div>
  );
}

export default About;