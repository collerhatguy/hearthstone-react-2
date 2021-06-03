import React, { useState, useMemo } from 'react'
import Card from "./Card"

export default function ClassCards({playerClass, cards, classVisibility, sequence}) {
    const [cardVisibility, setCardVisibility] = useState(false);
    const classCards = useMemo(() => {
        return cards.filter(card => {
            return card.playerClass === playerClass;
        })
    }, [cards])
    if (classCards.length === 0) return (<></>);
    
    return (
        <li
            className="class-cards"
            style={{
                display: classVisibility ? "flex" : "none",
                animationDelay: `${sequence * 100}ms`
            }}>
            <h2 
                className="player-class-header"
                tabIndex="1"
                onClick={() => setCardVisibility(!cardVisibility)}
            >{playerClass}: <span>{classCards.length} Cards</span></h2>
            <ul 
                className="card-list"
            >
                {classCards.map((card, index) => {
                    return <Card 
                                card={card} 
                                cardVisibility={cardVisibility} 
                                sequence={index}
                                key={index} 
                            />
                })}
            </ul>
        </li>
    )
} 
