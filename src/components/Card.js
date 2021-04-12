import React, {useState} from 'react';
import CardDescription from "./CardDescription";

export default function Card({card, visibility}) {
    const [descriptionVisibility, setDescriptionVisibility] = useState(visibility);
    return (
        <li 
            onClick={() => setDescriptionVisibility(!descriptionVisibility)}
            className={`card ${card.playerClass}`} 
            style={{
                display: visibility ? "flex" : "none",
            }}
        >
            <h3 className="card-name">
                {card.name}
            </h3>
            <CardDescription card={card} visibility={visibility} visibility2={descriptionVisibility} key={card.dbfId}/>
        </li>
    )
}
