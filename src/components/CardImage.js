import React, { useState } from 'react'

export default function CardImage(props) {
    const { imgGold, img } = props;
    const [gold, setGold] = useState(false);

    return (
        <div className="card-image">
            <img src={gold ? imgGold : img} alt="card pic" />
            <button className="description-btn"
                onClick={() => setGold(!gold)}
                onMouseEnter={e => e.stopPropagation()}
            >{gold ? "Gold" : "Normal"}</button>
        </div>
    )
}
