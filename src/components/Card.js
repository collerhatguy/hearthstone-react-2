import React, {useState} from 'react';
import { Link } from "react-router-dom";

export default function Card({card, cardVisibility, sequence, setArtist}) {
    const [descriptionVisibility, setDescriptionVisibility] = useState(false);
    const [gold, setGold] = useState(false)
    return cardVisibility ? (
        <li tabIndex="2"
            className={`card ${card.playerClass.replace(" ", "-")}`} 
            style={{ animationDelay: `${sequence * 25}ms`}}
        >
            <h3 className="card-name">
                {card.name}
            </h3>
            {descriptionVisibility ? 
                <div className="card-description">
                    <div className="card-image">
                        <img src={gold ? card.imgGold : card.img} alt="card pic" />
                        <button className="description-btn"
                            onClick={() => setGold(!gold)}
                        >{gold ? "Gold" : "Normal"}</button>
                    </div>
                        {card.artist ? <p className="card-artist" 
                        onClick={() => setArtist()}>
                        <Link to="/artist-list">
                            {card.artist}
                        </Link>
                        </p> : null}
                    <p className="card-flavor">
                        {card.flavor || "This card has no flavor text"}
                    </p>    
                </div> : null}
            <button className="description-btn"
                onClick={() => setDescriptionVisibility(!descriptionVisibility)}
            >
               {descriptionVisibility ? "Hide" : "Reveal"}
            </button>
        </li>
    ) 
    :
    null;
}
