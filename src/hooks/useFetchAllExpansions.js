
import { useState, useEffect } from "react"
import callApi from "../services"

function useFetchAllExpansions() {
    const [data, setData] = useState();
    const getData = async () => {
        try {
            const response = await callApi().get()
            const array = convertToArray(response.data);
            const filteredArray = filterByExpansion(array);
            const filteredTwiceArray = filterByCard(filteredArray);
            setData(filteredTwiceArray);
        } catch (err) {
            console.log(err);   
        }
    }
    useEffect(() => {
      getData()
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