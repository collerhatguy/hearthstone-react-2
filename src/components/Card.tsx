import React, {useState} from 'react';
import useCardDescription from "../hooks/useCardDescription";

export default function Card({card, cardVisibility, sequence}) {
    const [descriptionVisibility, setDescriptionVisibility] = useState(false);
    const properties = useCardDescription(card);
    return (
        <li 
            tabIndex="2"
            className={`card ${card?.playerClass.replace(" ", "-")} ${cardVisibility ? "" : "hidden"}`} 
            style={{
                animationDelay: `${sequence * 25}ms`,
            }}
        >
            <h3 
                className="card-name"
            >
                {card.name}
            </h3>
            <div 
                className="card-description"
                style={{
                    display: cardVisibility ? "flex" : "none",
                    display: descriptionVisibility ? "flex" : "none",
                }}
            >
                {properties.map(property => {
                    return property();
                })}
            </div>
            <button 
                className="description-btn"
                onClick={()=>{setDescriptionVisibility(!descriptionVisibility)}}
            >
                Hide/Reveal
            </button>
        </li>
    )
}
