import React, {useState} from 'react';
import ClassCards from "./ClassCards";
import styled from 'styled-components';
import { v4 as uuid } from "uuid";

export default function Expansion({expansion, sequence, setArtist}) {
    const [classVisibility, setClassVisibility] = useState(false)
    
    const cardClasses = [
        "Neutral", "Rogue", "Warrior",
        "Hunter", "Mage", "Paladin", "Shaman",
        "Priest", "Druid", "Warlock", "Demon Hunter"
    ];
    const StyleExpansion = styled.li``;
    return (
        <li className="expansion"
            style={{
                animationDelay: `${sequence * 200}ms`,
            }}>
            <h2 className="expansion-header"
                tabIndex="0"
                onClick={() => setClassVisibility(!classVisibility)}>
                {expansion.name}
            </h2>
            <ul className="class-list">
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
        </li>
    )
}
