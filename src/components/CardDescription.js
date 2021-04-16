import React from 'react'
import useCardDescription from "../hooks/useCardDescription";

export default function CardDescription({card, cardVisibility, descriptionVisibility, setDescriptionVisibility}) {
    const properties = useCardDescription(card, setDescriptionVisibility);
    return (
        <div 
            style={{
                display: cardVisibility ? "flex" : "none",
                display: descriptionVisibility ? "flex" : "none",
            }}
            className="card-description"
        >
            {properties.map(property => {
                return property();
            })}
        </div>
    )
}
