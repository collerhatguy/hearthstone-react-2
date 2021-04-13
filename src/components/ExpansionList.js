import React from 'react';
import Expansion from "./Expansion";
import useFetch from "../hooks/useFetch";

export default function ExpansionList() {
    
    // our url
    const url = "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards";
    const [data] = useFetch(url)
    return (
        <div className="expansion-list">
            {data.map((expansion, index) => {
                return <Expansion expansion={expansion} key={index} />
            })}
        </div>         
    )
}
