import React from 'react';
function Omk() {
    const cardOmk = [
        {
          title: "ОМК",
          subtitle: "Система менеджемента качества",
          text: "Документы, оповещения об обновлениях.",
          link: '/omk',
          status: "production"
        },
        {
          title: "Обучение и развитие персонала.",
          text: "Планы обучения, корпаративные сервисы, партнерские программы",
          link: '/omk',
          status: "production"
        },
        {
          title: "ОРП: информация для сотрудников",
          text: "Документы и брошюры для действующих и новых сотрудников.",
          link: '/omk',
          status: "production"
        }
      ]
      
        
    
    return (
<div className='card'>
            <div className='card__description'>
                <div className="card__info">
                    <h2 className='card__title'>props.title</h2>
                    <h3 className='card__subtitle'>props.subtitle</h3>
                    <p className='card__text'>props.text</p>
                </div>
                <a href='/' className='card__button_link' >
                    <button className='card__button'>
                        Перейти
                    </button>
                </a>
            </div>


        </div >
        );

    }
export default Omk;