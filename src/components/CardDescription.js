import React from 'react'
import useCardDescription from "../hooks/useCardDescription";

export default function CardDescription({card}) {
    const properties = useCardDescription(card)
    return (
        <div className="card-description">
            {properties.map(property => {
                return property();
            })}
        </div>
    )
}
