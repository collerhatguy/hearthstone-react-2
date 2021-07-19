import React, { useState } from 'react'
import styled from 'styled-components';
import Button from './Button';

export default function CardImage(props) {
    const { imgGold, img } = props;
    const [gold, setGold] = useState(false);
    const StyledCard = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        & > * {
            margin: 1rem;
        }
    `
    return (
        <StyledCard>
            <img src={gold ? imgGold : img} alt="card pic" />
            <Button 
            handleClick={() => setGold(!gold)}
            text={gold ? "Gold" : "Normal"}
            ></Button>
        </StyledCard>
    )
}
