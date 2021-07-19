import React, { useState } from 'react'
import Card from "./Card"
import styled from "styled-components";
import Button from './Button';

export default function ClassCards({playerClass, cards, classVisibility, sequence, setArtist}) {
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
        ul {
            margin: 1rem;
            width: 90%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
        }
    `
    return classCards.length === 0 ? null : classVisibility ? (
        <StyledClassList>
            <h3 tabIndex="1">
                <Button 
                handleClick={() => setCardVisibility(!cardVisibility)}
                text={`${playerClass}: ${classCards.length} Cards`} />
            </h3>
            <ul>
                {classCards.map((card, index) => 
                    <Card 
                        card={card} 
                        cardVisibility={cardVisibility} 
                        sequence={index}
                        setArtist={() => setArtist(card.artist)}
                        key={card.cardId} 
                    />
                )}
            </ul>
        </StyledClassList>
    ) 
    :
    null;
} 
