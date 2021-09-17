import React from 'react'
import { useToggle } from "use-toggle-coolhatguy"
import { useHistory } from "react-router-dom"
import CardImage from './CardImage'
import Button from './Button'
import styled from 'styled-components'

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
    const { card } = props
    const { artist, playerClass, name, img, imgGold, flavor } = card
    const [descriptionVisibility, toggleDescriptionVisibility] = useToggle(false)
    const { push } = useHistory()
    const handleClick = () => push(`/artist-list/${artist}`)
    return (
        <StyledCard tabIndex="2"
            onClick={toggleDescriptionVisibility}
            className={playerClass.replace(" ", "-")}>
            <h4>{name}</h4>
            {descriptionVisibility && 
                <div className="card-description">
                    <CardImage imgGold={imgGold} img={img}/>
                    {artist && <Button handleClick={handleClick} text={artist}/>}
                    <p className="card-flavor">
                        {flavor || "This card has no flavor text"}
                    </p>    
                </div>}
        </StyledCard>
    )
}
