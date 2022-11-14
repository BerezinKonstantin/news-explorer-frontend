import React, { useContext } from "react";
import avatar from "../../images/avatar.jpg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function About() {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="about">
      <img className="about__avatar" alt="Аватар пользователя" src={avatar} />
      <div className="about__wrapper">
        <h2 className="about__title">Об авторе</h2>
        <p className="about__text">
          Привет, {currentUser.name ? currentUser.name + "," : ""} меня зовут
          Константин!
          <br />
          Это мой дипломный проект по завершению курса Frontend разработчика.
          Это сервис - агрегатор новостей.
          <br />
          Вы можете искать новости интересующей вас теме с помощью стороннего
          API Newsapi.org. Сейчас реализована регистрация, авторизация,
          сохранение и удаление найденных новостей на отдельной странице, так
          что - вперед, попробуйте!
          <br />
          Рад, что вы зашли)
        </p>
        <p className="about__github">
          Код проекта на GitHub:
          <div className="about__github-link-wrap">
            <a
              className="about__github-link"
              href="https://github.com/BerezinKonstantin/news-explorer-frontend"
              rel="noopener noreferrer"
              target="_blank"
            >
              Frontend
            </a>
            <a
              className="about__github-link"
              href="https://github.com/BerezinKonstantin/news-explorer-api"
              rel="noopener noreferrer"
              target="_blank"
            >
              Backend
            </a>
          </div>
        </p>
      </div>
    </div>
  );
}

export default About;
