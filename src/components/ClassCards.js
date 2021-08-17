import React, { useState } from 'react';
import styled from "styled-components";
import CardList from './CardList';

const StyledClassList = styled.li`
    width: 100%;
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    h3 {
        font-size: 3rem;
        padding: .5rem 1rem;
        border: solid 1px ${props => props.theme.primeColor};
    }
`

export default function ClassCards(props) {
    const { playerClass, cards, classVisibility } = props;
    const [cardVisibility, setCardVisibility] = useState(false);

    const classCards = cards.filter(card => card.playerClass === playerClass);

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
