import React, {useState} from 'react';
import ClassCards from "./ClassCards";
import styled from 'styled-components';
import { v4 as uuid } from "uuid";

export default function Expansion({expansion, sequence, setArtist}) {
    const [classVisibility, setClassVisibility] = useState(false)
    
    const cardClasses = [
        "Neutral", "Rogue", "Warrior",
        "Hunter", "Mage", "Paladin", 
        "Shaman", "Priest", "Druid", 
        "Warlock", "Demon Hunter"
    ];
    const StyledExpansion = styled.li`
        width: 95%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        animation-delay: ${sequence * 200}ms;
        h2 {
            ${({ theme }) => theme.hoverEffect(theme.secondColor, theme.primeColor)};
            border: solid .1rem ${props => props.theme.primeColor};
            min-width: min-content;
            width: 60%;
            margin: 1rem auto;
            text-decoration: underline;
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
    return (
        <StyledExpansion>
            <h2 tabIndex="0"
                onClick={() => setClassVisibility(!classVisibility)}>
                {expansion.name}
            </h2>
            <ul>
                {cardClasses.map((playerClass, index) => 
                    <ClassCards 
                        playerClass={playerClass} 
                        cards={expansion.cards} 
                        classVisibility={classVisibility}
                        sequence={index}
                        setArtist={setArtist}
                        key={uuid()}
                    />
                )}
            </ul>
        </StyledExpansion>
    )
}
