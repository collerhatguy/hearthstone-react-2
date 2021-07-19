import React, { useState } from 'react'
import Card from "./Card"

export default function ClassCards({playerClass, cards, classVisibility, sequence}) {
    const [cardVisibility, setCardVisibility] = useState(false);

    const classCards = cards.filter(card => card.playerClass === playerClass);

    return classCards.length === 0 ? null : classVisibility ? (
        <li className="class-cards"
            style={{animationDelay: `${sequence * 1000}ms`}}
        >
            <h2 tabIndex="1"
                className="player-class-header"
                onClick={() => setCardVisibility(!cardVisibility)}
            >{playerClass}: <span>{classCards.length} Cards</span></h2>
            <ul className="card-list">
                {classCards.map((card, index) => 
                    <Card 
                        card={card} 
                        cardVisibility={cardVisibility} 
                        sequence={index}
                        key={card.cardId} 
                    />
                )}
            </ul>
        </li>
    ) 
    :
    null;
} 
