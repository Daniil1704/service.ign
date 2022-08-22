import React from 'react';
import NewCardList from './NewCardList';

function Main(props) {

    return (
        < div className='main' >

            <NewCardList

                cards={props.cards}
            />

        </div>
    );
}

export default Main;