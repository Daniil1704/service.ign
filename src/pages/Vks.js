import React from 'react';
import vks from '../massiv/vks';
function Vks() {


 
       


  return (
    
    <div className='card__list'>
{ vks.map((card, key) =>{
   
 return   <div className='card__vks' key={key}>
   
 <div className='card__description' >
   <div className="card__info_vks">
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

export default Vks;