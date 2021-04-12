import React, {useState} from 'react';
import CardDescription from "./CardDescription";

export default function Card({card, visibility}) {
    const [descriptionVisibility, setDescriptionVisibility] = useState(visibility);
    return (
        <li 
            onClick={() => setDescriptionVisibility(!descriptionVisibility)}
            className="card" 
            style={{
                display: visibility ? "flex" : "none",
            }}
        >
            <div>
                {card.name}
            </div>
            <CardDescription card={card} visibility={visibility} visibility2={descriptionVisibility}/>
        </li>
    )
}
