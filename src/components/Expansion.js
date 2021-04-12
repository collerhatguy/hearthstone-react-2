import React, {useState} from 'react'
import Card from "./Card"

export default function Expansion({expansion}) {
    const [visibility, setVisibility] = useState(false)
    return (
        <div className="expansion">
            <h2 className="expansion-header"
                onClick={() => setVisibility(!visibility)}>
                {expansion.name}
            </h2>
            <ul className="card-list">
                {expansion.cards.map(card => {
                    return <Card card={card} visibility={visibility} key={card.cardId}/>
                })}
            </ul>
        </div>
    )
}
