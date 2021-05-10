import React from 'react';
import Expansion from "./Expansion";
import useFetchAllExpansions from "../hooks/useFetchAllExpansions";

export default function ExpansionList() {
    ;
    const [data, isDone] = useFetchAllExpansions();
    return (
        <div id="expansion-list">
            <h1>Hearthstone Cards</h1>
            <div 
                style={{ display: isDone ? "none" : "block", }}
                className="loader"
            >
                <div className="loading-dot"></div>
                <div className="loading-dot"></div>
                <div className="loading-dot"></div>
            </div>
            
            {data.map((expansion, index) => {
                return <Expansion 
                            expansion={expansion} 
                            sequence={index}
                            key={index} />
            })}
        </div>         
    )
}
