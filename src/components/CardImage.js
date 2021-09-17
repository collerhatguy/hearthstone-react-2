import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { useToggle } from 'use-toggle-coolhatguy'

const StyledCard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 200px;
    }
    & > * {
        margin: 1rem;
    }
`

export default function CardImage(props) {
    const { imgGold, img } = props;
    const [gold, toggleGold] = useToggle(false);
    return (
        <StyledCard>
            <img src={gold ? imgGold : img} alt="No card here"/>
            {
                imgGold && 
                    <Button 
                        handleClick={toggleGold}
                        text={gold ? "Gold" : "Normal"}
                    />
            }
            
        </StyledCard>
    )
}
