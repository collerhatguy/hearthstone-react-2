import React, { useState } from 'react'
import Card from "./Card"

export default function ClassList({playerClass, cards, classVisibility}) {
    const [cardVisibility, setCardVisibility] = useState(false)
    const classCards = cards.filter(card => {
        return card.playerClass === playerClass;
    })
    return (
        <div
            className="class-list"
            style={{
                display: classVisibility ? "flex" : "none",
            }}>
            <h2 onClick={() => setCardVisibility(!cardVisibility)}>{playerClass}</h2>
            <ul className="card-list">
                {classCards.map(card => {
                    return <Card card={card} cardVisibility={cardVisibility} key={card.cardId}/>
                })}
            </ul>
        </div>
    )
}
