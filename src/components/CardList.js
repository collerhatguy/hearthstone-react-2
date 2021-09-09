import React from 'react';
import styled from 'styled-components';
import Card from "./Card";

const StyledCardList = styled.ul`
    margin: 1rem auto;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`
export default function CardList(props) {
    const { cards, cardVisibility } = props
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
