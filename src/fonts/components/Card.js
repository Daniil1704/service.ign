import React from 'react';

function Card(props) {

    return (
        <div className='card'>
            <div className='card__description'>
                <div className="card__info">
                    <div className="card__beta_setting">
                        <h2 className='card__title'>{props.title}</h2>
                        {props.status === 'beta' &&
                            <div className='card__beta'>
                                <h2 className='card__beta_text'>BETA</h2>
                            </div>
                        }
                    </div>
                    <h3 className='card__subtitle'>{props.subtitle}</h3>
                    <p className='card__text'>{props.text}</p>
                </div>
                <a className='card__button_link' href={props.link}>
                    <button className='card__button'>
                        Перейти
                    </button>
                </a>
            </div>


            <img className='card__image' src={props.image} />
        </div >
    );
}

export default Card;