import React, {useState} from 'react';
import { Link } from "react-router-dom";
import CardImage from './CardImage';
import Button from './Button';
import styled from 'styled-components';

const StyledCard = styled.li`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 1rem;
    margin: 1rem;
    border: solid 1px ${props => props.theme.primeColor};
    opacity: 0;
    animation: ${props => props.theme.cardAnimation} 300ms linear forwards;
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

export default function Card(props) {
    const {card, cardVisibility } = props;
    const [descriptionVisibility, setDescriptionVisibility] = useState(false);

    return cardVisibility && (
        <StyledCard tabIndex="2"
            onClick={() => setDescriptionVisibility(!descriptionVisibility)}
            className={`${card.playerClass.replace(" ", "-")}`}>
            <h4>{card.name}</h4>
            {descriptionVisibility && 
                <div className="card-description">
                    <CardImage imgGold={card.imgGold} img={card.img} />
                    {card.artist &&
                        <Link to={`/artist-list/${card.artist}`}>
                            <Button 
                            handleClick={() => null} 
                            text={card.artist} />
                        </Link>}
                    <p className="card-flavor">
                        {card.flavor || "This card has no flavor text"}
                    </p>    
                </div>}
        </StyledCard>
    )
}
