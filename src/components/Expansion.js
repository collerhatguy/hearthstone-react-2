import React, {useState} from 'react';
import ClassCards from "./ClassCards";

export default function Expansion({expansion}) {
    const [classVisibility, setClassVisibility] = useState(false)
    
    const cardClasses = ["Neutral", "Rogue", "Warrior",
  "Hunter", "Mage", "Paladin", "Shaman",
  "Priest", "Druid", "Warlock", "Demon Hunter"];
    return (
        <div className="expansion">
            <h2 className="expansion-header"
                tabIndex="0"
                onClick={() => setClassVisibility(!classVisibility)}>
                {expansion.name}
            </h2>
            <div
                className="class-list">
                {cardClasses.map((playerClass, index) => {
                    return <ClassCards 
                                playerClass={playerClass} 
                                cards={expansion.cards} 
                                classVisibility={classVisibility}
                                key={index}
                            />
                })}
            </div>
        </div>
    )
}
