import React from 'react';
import styled from 'styled-components';
import Card from "./Card";

export default function CardList({ cards, cardVisibility }) {
    const StyledCardList = styled.ul`
        margin: 1rem;
        width: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    `
    return (
        <StyledCardList>
            {cards.map((card, index) => 
                <Card
                card={card} 
                cardVisibility={cardVisibility} 
                sequence={index}
                key={card.cardId}  />
            )}
        </StyledCardList>
    )
}
