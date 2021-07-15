import React, {useState} from 'react';
import useCardDescription from "../hooks/useCardDescription";

export default function Card({card, cardVisibility, sequence}) {
    const [descriptionVisibility, setDescriptionVisibility] = useState(false);
    const properties = useCardDescription(card);
    return cardVisibility ? (
        <li tabIndex="2"
            className={`card ${card?.playerClass.replace(" ", "-")}`} 
            style={{
                animationDelay: `${sequence * 25}ms`,
            }}>
            <h3 className="card-name">
                {card.name}
            </h3>
            {descriptionVisibility ? <div className="card-description">
                {properties.map(property => {
                    return property();
                })}
            </div> : null}
            <button 
                className="description-btn"
                onClick={()=>{setDescriptionVisibility(!descriptionVisibility)}}
            >
               {descriptionVisibility ? "Hide" : "Reveal"}
            </button>
        </li>
    ) : null;
}
