import React, {useState} from 'react';
import { Link } from "react-router-dom";
import CardImage from './CardImage';
import Button from './Button';
import styled from 'styled-components';

export default function Card(props) {
    const {card, cardVisibility, sequence, setArtist} = props;
    const [descriptionVisibility, setDescriptionVisibility] = useState(false);


    const StyledCard = styled.li`
        cursor: pointer;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        animation-delay: ${sequence * 25}ms;
        padding: 1rem;
        margin: 1rem;
        border: solid 1px ${props => props.theme.primeColor};
        h4 {
            font-size: 3rem;
        }
        .card-description {
            display: flex;
            justify-content: center;
            flex-direction: column;
        }
        p {
            width: 80%;
            font-weight: 900;
            margin: 1rem auto;
        }
    `
    return cardVisibility ? (
        <StyledCard tabIndex="2"
            onClick={() => setDescriptionVisibility(!descriptionVisibility)}
            className={`${card.playerClass.replace(" ", "-")}`}>
            <h4>{card.name}</h4>
            {descriptionVisibility ? 
                <div className="card-description">
                    <CardImage imgGold={card.imgGold} img={card.img} />
                    {card.artist ?
                        <Link to="/artist-list">
                            <Button 
                            handleClick={() => null} 
                            text={card.artist} />
                        </Link> : null }
                    <p className="card-flavor">
                        {card.flavor || "This card has no flavor text"}
                    </p>    
                </div> : null}
        </StyledCard>
    ) 
    :
    null;
}
