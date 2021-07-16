import React from 'react';
import Expansion from "./Expansion";

export default function ExpansionList({data, setArtist}) {
    return (
        <main id="expansion-list" className="page">
            <h1>Hearthstone Cards</h1>
            {data ?  
            <ul>
                {data.map((expansion, index) => 
                    <Expansion 
                    setArtist={setArtist}
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
