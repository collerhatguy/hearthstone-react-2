import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from "react-router-dom";

export default function ArtistPage(props) {
    const { data } = props;
    const { artist } = useParams();
    const history = useHistory();
    const [pictures, setPictures] = useState([])
    useEffect(() => {
        setPictures(data?.reduce((allPics, expansion) => {
            const artistCards = expansion.cards.filter(card => card.artist === artist)
            return [...allPics, ...artistCards.map(card => card.img)];
        }, []))
    }, [artist])
    return (
        <div className="page">
            <span
            onClick={() => history.goBack()}
            >Back</span>
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
