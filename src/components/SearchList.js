import React from 'react';
import Card from "./Card";

export default function SearchList({cards}) {
    if (cards.length === 0) return (<></>);
    return (
        <div>
            {cards.map((card, index) => {
                return <Card card={card} cardVisibility={true} key={index} />
            })}
        </div>
    )
}
