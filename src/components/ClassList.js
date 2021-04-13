import React, { useState } from 'react'
import Card from "./Card"

export default function ClassList({playerClass, cards, classVisibility}) {
    const [cardVisibility, setCardVisibility] = useState(false)
    const classCards = cards.filter(card => {
        return card.playerClass === playerClass;
    })
    // if the class has no cards in this expansion then dont render anything
    if (classCards.length === 0) return (<></>);
    return (
        <div
            className="class-list"
            style={{
                display: classVisibility ? "flex" : "none",
            }}>
            <h2 
                className="player-class-header"
                onClick={() => setCardVisibility(!cardVisibility)}
            >{playerClass}</h2>
            <ul className="card-list">
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
