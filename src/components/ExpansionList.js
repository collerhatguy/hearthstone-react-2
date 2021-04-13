import React from 'react';
import Expansion from "./Expansion";
import useFetch from "../hooks/useFetch";

export default function ExpansionList() {
    
    // our url
    const url = "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards";
    const [data, isDone] = useFetch(url)
    return (
        <div className="expansion-list">
            <h1>Hearthstone Cards</h1>
            <div 
                style={{
                    display: isDone ? "none" : "block",
                }}
                className="loader">Loading</div>
            {data.map((expansion, index) => {
                return <Expansion expansion={expansion} key={index} />
            })}
        </div>         
    )
}
