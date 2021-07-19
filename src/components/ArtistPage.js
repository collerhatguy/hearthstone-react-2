import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";
import {v4 as uuid} from "uuid";
import styled from 'styled-components';

import Button from './Button';
import CardImage from './CardImage';
import Loader from "./Loader";


export default function ArtistPage(props) {
    const { data } = props;
    const { artist } = useParams();
    const history = useHistory();
    const [pictures, setPictures] = useState([])
    useEffect(() => {
        setPictures(data?.reduce((allPics, expansion) => {
            const artistCards = expansion.cards.filter(card => card.artist === artist)
            return [...allPics, ...artistCards];
        }, []))
    }, [artist])
    const StyledList = styled.ul`
        width: 100%;
        padding: 1rem;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    `
    return (
        <div className="page">
            <Button
            handleClick={() => history.goBack()}
            text={"Back"}
            />
           <h2>All pictures by {artist}: </h2> 
           <StyledList>
                {pictures ? pictures.map(pic => 
                    <li key={uuid()}>
                        <CardImage img={pic.img} imgGold={pic.imgGold} />
                    </li>
                ) : <Loader />}
           </StyledList>
        </div>
    )
}
