import React from 'react';
import avatar from '../../images/avatar.jpg'
function About() {
  return (
    <div className='about'>
      <img className='about__avatar' alt='Аватар пользователя' src={avatar}/>
      <div className='about__wrapper'>
        <h2 className='about__title'>
          Об авторе
        </h2>
        <p className='about__text'>
          Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, чем вы занимаетесь, какими технологиями разработки владеете.
          Также можно рассказать о процессе обучения в Практикуме, чему вы тут научились, и чем можете помочь потенциальным заказчикам.
        </p>
      </div>
    </div>
  );
}

export default About;