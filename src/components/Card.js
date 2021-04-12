import React from 'react'

export default function Card({card, visibility}) {
    console.log(card);
    return (
        <li className="card" 
        style={{
            display: visibility ? "flex" : "none",
        }}>
            {card.name}
        </li>
    )
}
