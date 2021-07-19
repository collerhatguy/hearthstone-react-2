import React, { useState } from 'react'

import styled from "styled-components";
import Button from './Button';
import CardList from './CardList';

export default function ClassCards({playerClass, cards, classVisibility, sequence}) {
    const [cardVisibility, setCardVisibility] = useState(false);

    const classCards = cards.filter(card => card.playerClass === playerClass);

    const StyledClassList = styled.li`
        width: 100%;
        margin: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: column;
        animation-delay: ${sequence * 1000}ms;
        h3 {
            font-size: 3rem;
        }
    `
    return classCards.length === 0 ? null : classVisibility ? (
        <StyledClassList>
            <h3 tabIndex="1">
                <Button 
                handleClick={() => setCardVisibility(!cardVisibility)}
                text={`${playerClass}: ${classCards.length} Cards`} />
            </h3>
            <CardList cards={classCards} cardVisibility={cardVisibility}/>
        </StyledClassList>
    ) 
    :
    null;
} 
