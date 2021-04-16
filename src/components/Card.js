import React, {useState} from 'react';
import CardDescription from "./CardDescription";

export default function Card({card, cardVisibility}) {
    const [descriptionVisibility, setDescriptionVisibility] = useState(false);
    return (
        <li 
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
                setDescriptionVisibility={setDescriptionVisibility}
            />
            <button 
                className="description-btn"
                onClick={()=>{setDescriptionVisibility(!descriptionVisibility)}}
            >
                Hide/Reveal
            </button>
        </li>
    )
}
