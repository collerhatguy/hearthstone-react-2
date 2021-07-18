import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';
import {v4 as uuid} from "uuid";
import CardImage from "./CardImage";

export default function ArtistPage({artist, data}) {
    const [pictures, setPictures] = useState([])
    useEffect(() => {
        setPictures(data?.reduce((allPics, expansion) => {
            const artistCards = expansion.cards.filter(card => card.artist === artist)
            return [...allPics, ...artistCards];
        }, []))
    }, [artist])
    const StyledList = styled.ul`
        display: flex;
        flex-wrap: wrap;
    `
    return (
        <>
            <Link to="">Back</Link>
           <h2>All pictures by {artist}: </h2> 
           <StyledList>
                {pictures?.map(pic => 
                    <li key={uuid()}>
                        <CardImage img={pic.img} imgGold={pic.imgGold} />
                    </li>
                )}
           </StyledList>
        </>
    )
}
