import React, {useState} from 'react';
import ClassList from "./ClassList";

export default function Expansion({expansion}) {
    const [classVisibility, setClassVisibility] = useState(false)
    
    const cardClasses = ["Neutral", "Rogue", "Warrior",
  "Hunter", "Mage", "Paladin", "Shaman",
  "Priest", "Druid", "Warlock", "Demon Hunter"];
    return (
        <div className="expansion">
            <h2 className="expansion-header"
                onClick={() => setClassVisibility(!classVisibility)}>
                {expansion.name}
            </h2>
            {cardClasses.map(playerClass => {
                return <ClassList 
                            playerClass={playerClass} 
                            cards={expansion.cards} 
                            classVisibility={classVisibility}
                        />
            })}
        </div>
    )
}
