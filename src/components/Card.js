import React, {useState} from 'react';
import { Link } from "react-router-dom";
import CardImage from './CardImage';
import styled from 'styled-components';

export default function Card({card, cardVisibility, sequence, setArtist}) {
    const [descriptionVisibility, setDescriptionVisibility] = useState(false);


    const StyledCard = styled.li`
        border: solid 2px ${props => props.theme.primeColor};
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        opacity: 0;
        animation-delay: ${sequence * 25}ms;
        h3 {
            font-size: 3rem;
        }
        .card-description, .card-image {
            display: flex;
            justify-content: center;
            flex-direction: column;
        }
    `
    return cardVisibility ? (
        <StyledCard tabIndex="2"
            className={`card ${card.playerClass.replace(" ", "-")}`}>
            <h3>{card.name}</h3>
            {descriptionVisibility ? 
                <div className="card-description">
                    <CardImage imgGold={card.imgGold} img={card.img} />
                    { card.artist ?
                    <Link to="/artist-list" 
                    onClick={() => setArtist()}>
                        {card.artist}
                    </Link> : null }
                    <p className="card-flavor">
                        {card.flavor || "This card has no flavor text"}
                    </p>    
                </div> : null}
            <button className="description-btn"
                onMouseEnter={e => e.stopPropagation()}
                onClick={() => setDescriptionVisibility(!descriptionVisibility)}
            >
               {descriptionVisibility ? "Hide" : "Reveal"}
            </button>
        </StyledCard>
    ) 
    :
    null;
}
