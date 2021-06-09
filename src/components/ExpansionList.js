import React from 'react';
import Expansion from "./Expansion";
import useFetchAllExpansions from "../hooks/useFetchAllExpansions";

export default function ExpansionList() {
    const [data, isDone] = useFetchAllExpansions();
    return (
        <main id="expansion-list">
            <h1>Hearthstone Cards</h1>
            <aside 
                style={{ display: isDone ? "none" : "flex", }}
                className="loader">
                <div className="loading-dot"></div>
                <div className="loading-dot"></div>
                <div className="loading-dot"></div>
            </aside>
            <ul>
                {data.map((expansion, index) => {
                    return <Expansion 
                                expansion={expansion} 
                                sequence={index}
                                key={index} />
                })}
            </ul>
        </main>         
    )
}
