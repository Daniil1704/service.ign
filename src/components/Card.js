import React from 'react';
// import { Link } from 'react-router-dom';
function Card(props) {

    return (
        <div className='card'>
            <div className='card__description'>
                <div className="card__info">
                    <h2 className='card__title'>{props.title}</h2>
                    <h3 className='card__subtitle'>{props.subtitle}</h3>
                    <p className='card__text'>{props.text}</p>
                </div>
                <a href={props.link} className='card__button_link' >
                    <button className='card__button'>
                        Перейти
                    </button>
                </a>
            </div>


        </div >
    );
}

export default Card;