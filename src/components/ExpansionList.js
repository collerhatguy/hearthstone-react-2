import React from 'react';
import Expansion from "./Expansion";
import Loader from "./Loader";

export default function ExpansionList(props) {
    const { data } = props
    return (
        <>
            <h1>Hearthstone Cards</h1>
            {
                data ?  
                    <ul>
                        {data.map((expansion, index) => 
                            <Expansion
                                expansion={expansion} 
                                sequence={index}
                                key={index} 
                            />
                        )}
                    </ul> 
                    :
                    <Loader/>
            }
        </>         
    )
}
