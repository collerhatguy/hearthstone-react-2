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
                {expansion.cards.map((card, index) => {
                    return <Card card={card} key={index} visibility={visibility}/>
                })}
            </ul>
        </div>
    )
}
