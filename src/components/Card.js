import React from 'react';
import CardDescription from "./CardDescription";

export default function Card({card, visibility}) {
    console.log(card);
    return (
        <li className="card" 
        style={{
            display: visibility ? "flex" : "none",
        }}>
            {card.name}
            <CardDescription card={card}/>
        </li>
    )
}
