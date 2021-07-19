import React, { useState } from 'react'

import styled from "styled-components";
import Button from './Button';
import CardList from './CardList';

export default function ClassCards(props) {
    const { playerClass, cards, classVisibility, sequence } = props;
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
        /* opacity: 0;
        animation: ${props => props.theme.cardAnimation} 300ms linear ${sequence * 500}ms forwards; */
        h3 {
            font-size: 3rem;
            padding: .5rem 1rem;
            border: solid 1px ${props => props.theme.primeColor};
        }
    `
    return classCards.length === 0 || !classVisibility ? null : (
        <StyledClassList>
            <h3 tabIndex="1" 
            onClick={() => setCardVisibility(!cardVisibility)}
            className={`${playerClass.replace(" ", "-")}`}>
                {`${playerClass}: ${classCards.length} Cards`}
            </h3>
            <CardList cards={classCards} cardVisibility={cardVisibility}/>
        </StyledClassList>
    )
} 
