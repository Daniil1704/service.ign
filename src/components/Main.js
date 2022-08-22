import React from 'react';
import NewCardList from './NewCardList';
import {cards} from '../massiv/home';
function Main(props) {
    
    return (
        < div className='main' >
             <NewCardList
                        cards={cards}
                    />
    
        </div>
    );
}

export default Main;