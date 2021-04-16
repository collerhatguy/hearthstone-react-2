import React, {useState} from 'react';
import CardDescription from "./CardDescription";

export default function Card({card, cardVisibility}) {
    const [descriptionVisibility, setDescriptionVisibility] = useState(cardVisibility);
    return (
        <li 
            onClick={() => setDescriptionVisibility(!descriptionVisibility)}
            tabIndex="2"
            className={`card ${card?.playerClass.replace(" ", "-")}`} 
            style={{
                display: cardVisibility ? "flex" : "none",
            }}
        >
            <h3 
                className="card-name"
            >
                {card.name}
            </h3>
            <CardDescription 
                card={card} 
                cardVisibility={cardVisibility} 
                descriptionVisibility={descriptionVisibility}
            />
        </li>
    )
}
