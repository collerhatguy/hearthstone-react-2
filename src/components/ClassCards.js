import React from 'react';
import styled from "styled-components";
import CardList from './CardList';
import { useToggle } from 'use-toggle-coolhatguy';

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
    const { playerClass, cards } = props;
    const [cardVisibility, toggleCardVisibility] = useToggle(false);

    return cards.length && (
        <StyledClassList>
            <h3 tabIndex="1" 
                onClick={toggleCardVisibility}
                className={playerClass.replace(" ", "-")}
            >
                {playerClass}: {cards.length} Cards
            </h3>
            {cardVisibility && <CardList cards={cards}/>}
        </StyledClassList>
    )
} 
