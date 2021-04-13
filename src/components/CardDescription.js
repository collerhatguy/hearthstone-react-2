import React from 'react'
import useCardDescription from "../hooks/useCardDescription";

export default function CardDescription({card, cardVisibility, descriptionVisibility}) {
    const properties = useCardDescription(card)
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
