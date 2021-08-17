import React, { useState } from 'react'
import styled from 'styled-components';
import Button from './Button';

const StyledCard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 200px;
    }
    & > * {
        margin: 1rem;
    }
`

export default function CardImage(props) {
    const { imgGold, img } = props;
    const [gold, setGold] = useState(false);
    return (
        <StyledCard>
            <img src={gold ? imgGold : img} alt="No card here" />
            {imgGold && <Button 
            handleClick={() => setGold(!gold)}
            text={gold ? "Gold" : "Normal"}
            ></Button>}
            
        </StyledCard>
    )
}
