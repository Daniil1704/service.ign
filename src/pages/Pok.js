import React from 'react';
import pok from '../massiv/pok';
function Pok() {


 
       


    return (
    
       <div className='card__list'>
  { pok.map((card, key) =>{
      
    return   <div className='card__pok' key={key}>
      
    <div className='card__description' >
      <div className="card__info_pok">
        <h2 className='card__title'>{card.title}</h2>
        <a href={card.link} className='card__button_link-pok' >
          <button className='card__button'>
            Перейти
          </button>
        </a>
      </div>
    
        </div>
        </div>
        
     })
     }
     </div>
     
    )
    }

export default Pok;