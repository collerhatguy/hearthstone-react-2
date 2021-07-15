import React from 'react';
import Expansion from "./Expansion";
import useFetchAllExpansions from "../hooks/useFetchAllExpansions";

export default function ExpansionList() {
    const data = useFetchAllExpansions();
    return (
        <main id="expansion-list">
            <h1>Hearthstone Cards</h1>
            {data ?  
            <ul>
                {data.map((expansion, index) => 
                    <Expansion 
                    expansion={expansion} 
                    sequence={index}
                    key={index} />
                )}
            </ul> 
            :
            <aside className="loader">
                <div className="loading-dot"></div>
                <div className="loading-dot"></div>
                <div className="loading-dot"></div>
            </aside>}
        </main>         
    )
}
