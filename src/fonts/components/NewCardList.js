import React from 'react';
import Card from './Card';


function NewCardList(props) {

  

    return (
        <section className="card__list">
            {

                props.cards.map((card, key) => {
                    return <Card
                        key={key}
                        title={card.title}
                        text={card.text}
                        subtitle={card.subtitle}
                        status={card.status}
                        link = {card.link}
                        image = {card.image}
                    />

                })
            }


        </section>
    );
}

export default NewCardList;