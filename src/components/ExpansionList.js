import React from 'react';
import Expansion from "./Expansion";
import useFetchAllExpansions from "../hooks/useFetchAllExpansions";

export default function ExpansionList() {
    
    // our url
    const url = "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards";
    const [data, isDone] = useFetchAllExpansions(url);
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
                return <Expansion expansion={expansion} key={index} />
            })}
        </div>         
    )
}
