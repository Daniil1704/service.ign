import React from 'react';
import academy from '../massiv/academy';
function Academy() {


 
       


  return (
    
    <div className='card__list_academy'>
     <div className='card__post_academy '>

     </div>
{ academy.map((card, key) =>{
   
 return   <div className='card_academy' key={key}>
   
 <div className='card__description' >
   <div className="card__info">
     <h2 className='card__title'>{card.title}</h2>
     <h3 className='card__subtitle'>{card.text}</h3>
     <p className='card__text'>{card.subtitle}</p>
   </div>
     <a href={card.link} className='card__button_link' >
       <button className='card__button'>
         Перейти
       </button>
     </a>
     </div>
     </div>
     
  })
  }
  </div>
  
 )
 }

export default Academy;