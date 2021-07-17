import React, { useState } from 'react'
import styled from 'styled-components';

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
            <div className="btn"
                onClick={e => {
                    e.stopPropagation();
                    setGold(!gold);
                }}
            >{gold ? "Gold" : "Normal"}</div>
        </StyledCard>
    )
}
