import React, { useState, useMemo } from 'react'
import Card from "./Card"

export default function ClassCards({playerClass, cards, classVisibility}) {
    const [cardVisibility, setCardVisibility] = useState(false);
    const classCards = useMemo(() => {
        return cards.filter(card => {
            return card.playerClass === playerClass;
        })
    }, [cards])
    if (classCards.length === 0) return (<></>);
    
    return (
        <div
            className="class-cards"
            style={{
                display: classVisibility ? "flex" : "none",
            }}>
            <h2 
                className="player-class-header"
                tabIndex="1"
                onClick={() => setCardVisibility(!cardVisibility)}
            >{playerClass}: {classCards.length} Cards</h2>
            <ul 
                className="card-list"
            >
                {classCards.map((card, index) => {
                    return <Card 
                                card={card} 
                                cardVisibility={cardVisibility} 
                                key={index} 
                            />
                })}
            </ul>
        </div>
    )
} 
