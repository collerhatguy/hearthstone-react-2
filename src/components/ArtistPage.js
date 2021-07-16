import React, { useState, useEffect } from 'react'

export default function ArtistPage({artist, data, setArtist, allArtists}) {
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
           <h2>All pictures by {artist}: </h2> 
           <ul className="artist-list">
                {pictures?.map(pic => 
                    <li>
                        <img src={pic} alt="pic" />
                    </li>
                )}
           </ul>
        </div>
    )
}
