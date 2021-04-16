import React from 'react';
import Card from "./Card";

export default function SearchList({cards}) {
    return (
        <div>
            {cards.map((card, index) => {
                return <Card card={card} cardVisibility={true} key={index} />
            })}
        </div>
    )
}
