import React, {useState} from 'react';
import ClassCards from "./ClassCards";

export default function Expansion({expansion, sequence}) {
    const [classVisibility, setClassVisibility] = useState(false)
    
    const cardClasses = ["Neutral", "Rogue", "Warrior",
  "Hunter", "Mage", "Paladin", "Shaman",
  "Priest", "Druid", "Warlock", "Demon Hunter"];
    return (
        <li className="expansion"
            style={{
                animationDelay: `${sequence * 50}ms`,
            }}>
            <h2 className="expansion-header"
                tabIndex="0"
                onClick={() => setClassVisibility(!classVisibility)}>
                {expansion.name}
            </h2>
            <ul
                className="class-list">
                {cardClasses.map((playerClass, index) => {
                    return <ClassCards 
                                playerClass={playerClass} 
                                cards={expansion.cards} 
                                classVisibility={classVisibility}
                                sequence={index}
                                key={index}
                            />
                })}
            </ul>
        </li>
    )
}
