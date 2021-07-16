import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import {v4 as uuid} from "uuid";

export default function ArtistPage({artist, data}) {
    const [pictures, setPictures] = useState([])
    useEffect(() => {
        setPictures(data?.reduce((allPics, expansion) => {
            const artistCards = expansion.cards.filter(card => card.artist === artist)
            return [...allPics, ...artistCards.map(card => card.img)];
        }, []))
    }, [artist])
    return (
        <div className="page">
            {/* <select
                onChange={e => setArtist(e.target.value)}>
                {allArtists?.map(a => <option value={a}>{a}</option>)}
            </select> */}
            <Link to="">Back</Link>
           <h2>All pictures by {artist}: </h2> 
           <ul className="artist-list">
                {pictures?.map(pic => 
                    <li key={uuid()}>
                        <img src={pic} alt="pic" />
                    </li>
                )}
           </ul>
        </div>
    )
}
