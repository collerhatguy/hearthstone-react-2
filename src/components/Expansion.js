import React from 'react'
import ClassCards from "./ClassCards"
import styled from 'styled-components'
import Button from './Button'
import { v4 as uuid } from "uuid"
import { useToggle } from 'use-toggle-coolhatguy'

const StyledExpansion = styled.li`
    width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    h2 {
        font-size: 4rem;
    }
    ul {
        min-width: min-content;
        width: 95%;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        flex-direction: row;
    }
`;

export default function Expansion({ expansion }) {
    const [classVisibility, toggleClassVisibility] = useToggle(false)
    
    const cardClasses = [
        "Neutral", "Rogue", "Warrior",
        "Hunter", "Mage", "Paladin", 
        "Shaman", "Priest", "Druid", 
        "Warlock", "Demon Hunter"
    ];
    return (
        <StyledExpansion>
            <h2 tabIndex="0" >
                <Button 
                handleClick={toggleClassVisibility} 
                text={expansion.name} />
            </h2>
            <ul>
                {classVisibility && cardClasses.map(playerClass => 
                    <ClassCards 
                        playerClass={playerClass} 
                        cards={expansion.cards.filter(card => card.playerClass === playerClass)} 
                        key={uuid()}
                    />
                )}
            </ul>
        </StyledExpansion>
    )
}
