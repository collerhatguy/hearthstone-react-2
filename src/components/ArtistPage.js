import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";
import {v4 as uuid} from "uuid";
import styled from 'styled-components';

import Button from './Button';
import CardImage from './CardImage';
import Loader from "./Loader";

const StyledList = styled.ul`
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

export default function ArtistPage(props) {
    const { data } = props;
    const { artist } = useParams();
    const { goBack } = useHistory();
    const [pictures, setPictures] = useState()
    useEffect(() => {
        setPictures(data?.reduce((allPics, expansion) => {
            const artistCards = expansion.cards.filter(card => card.artist === artist)
            return [...allPics, ...artistCards];
        }, []))
    }, [artist, data])
    return (
        <div className="page">
            <Button
                handleClick={goBack}
                text={"Back"}
            />
           <h2>All pictures by {artist}: </h2> 
           <StyledList>
                {pictures ? pictures.map(({ img, imgGold }) => 
                    <li key={uuid()}>
                        <CardImage img={img} imgGold={imgGold} />
                    </li>
                ) : <Loader />}
           </StyledList>
        </div>
    )
}
