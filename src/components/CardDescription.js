import React from 'react'
import useCardDescription from "../hooks/useCardDescription";

export default function CardDescription({card, visibility, visibility2}) {
    const properties = useCardDescription(card)
    console.log(card)
    return (
        <div 
            style={{
                display: visibility2 ? "block" : "hidden",
                display: visibility ? "block" : "hidden",
            }}
            className="card-description">
            {properties.map(property => {
                return property();
            })}
        </div>
    )
}
