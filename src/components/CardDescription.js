import React from 'react'
import useCardDescription from "../hooks/useCardDescription";

export default function CardDescription({card, visibility, visibility2}) {
    const properties = useCardDescription(card)
    console.log(card)
    return (
        <div 
            style={{
                display: visibility ? "flex" : "none",
                display: visibility2 ? "flex" : "none",
            }}
            className="card-description">
            {properties.map(property => {
                return property();
            })}
        </div>
    )
}
