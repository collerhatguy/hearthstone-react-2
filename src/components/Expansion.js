import React, {useState} from 'react';
import ClassCards from "./ClassCards";
import styled, { keyframes } from "styled-components";
import { v4 as uuid } from 'uuid';

export default function Expansion(props) {
    const {expansion, sequence} = props;
    const [classVisibility, setClassVisibility] = useState(false)
    const cardClasses = ["Neutral", "Rogue", "Warrior",
  "Hunter", "Mage", "Paladin", "Shaman",
  "Priest", "Druid", "Warlock", "Demon Hunter"];

    const SpinAnimation = keyframes`
        0% {transform: rotateY(720deg)}
        40% {transform: rotateY(3600deg)}
        90% {transform: rotateY(-45deg)}
        100% {transform: rotateY(0deg)}
    `
    const StyledItem = styled.li`
        h2 {
            animation: ${SpinAnimation} 1s linear forwards;
            cursor: pointer;
            font-size: 2rem;
        }
        ul {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
    `
    return (
        <StyledItem
            style={{
                animationDelay: `${sequence * 50}ms`,
            }}>
            <h2
                tabIndex="0"
                onClick={() => setClassVisibility(!classVisibility)}>
                {expansion.name}
            </h2>
            <ul>
                {cardClasses.map((playerClass, index) => {
                    return <ClassCards 
                                playerClass={playerClass} 
                                cards={expansion.cards} 
                                classVisibility={classVisibility}
                                sequence={index}
                                key={uuid()}
                            />
                })}
            </ul>
        </StyledItem>
    )
}
