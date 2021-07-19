
import { useState, useEffect } from "react";

function useFetchAllExpansions() {
    const url = "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards"
    const [data, setData] = useState();
    const getData = async (url) => {
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
                    "x-rapidapi-key": process.env.REACT_APP_API_KEY,
                },
            });
            const json = await response.json();
            const array = convertToArray(json);
            const filteredArray = filterByExpansion(array);
            const filteredTwiceArray = filterByCard(filteredArray);
            setData(filteredTwiceArray);
        } catch (err) {
            console.log(err);   
        }
    }
    useEffect(() => {
      getData(url)
    }, [])

    return data;
}
const convertToArray = data => {
    return Object.keys(data).map(expansionName => {
        return {
            name: expansionName,
            cards: data[expansionName],
        }
    })
}
const filterByExpansion = data => {
    const expansionMinimum = 50;
    const invalidExpansions = [
        "Hero Skins",
        "Credits",
        "Tavern Brawl",
        "Battlegrounds",
    ];
    // return expnsions thata re long enough and not invalid
    return data.filter(expansion => {
        if (expansion.cards.length < expansionMinimum) return false;
        if (invalidExpansions.includes(expansion.name)) return false;
        return true
    })
}
const filterByCard = data => {
    const invalidCardTypes = ["Hero Power", "Hero", "Enchantment"];
    const invalidCardNames = ["FX", "Cost", "NOOOOOOOOOOOO", "AFK", "Coin's Vengeance", "Anomaly"];

    return data.map(expansion => {
        return {
            ...expansion,
            cards: expansion.cards.filter((card, index) => {
                if (invalidCardNames.includes(card.name)) return false;
                if (invalidCardTypes.includes(card.type)) return false;
                if (!card.flavor) return false;
                if (expansion.cards[index + 1]) {
                    const nextCard = expansion.cards[index + 1]
                    if (nextCard.name === card.name) return false;
                }
                return true;
            })
        }
    })
}

export default useFetchAllExpansions;