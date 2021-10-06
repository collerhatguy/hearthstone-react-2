
import { useState, useEffect } from "react"
import callApi from "../services"

function useFetchAllExpansions() {
    const [data, setData] = useState()
    const getData = async () => {
        try {
            const { data } = await callApi().get()
            const array = convertToArray(data)
            const filteredArray = filterByExpansion(array)
            const filteredTwiceArray = filterByCard(filteredArray)
            setData(filteredTwiceArray)
        } catch (err) {
            console.log(err)   
        }
    }
    useEffect(() => {
      getData()
    }, [])

    return data
}

const convertToArray = data => 
        Object.keys(data).map(expansionName => ({
            name: expansionName,
            cards: data[expansionName],
        })
    )

const filterByExpansion = data => {
    const expansionMinimum = 50
    const invalidExpansions = [
        "Hero Skins",
        "Credits",
        "Tavern Brawl",
        "Battlegrounds",
    ]

    return data.filter(expansion => {
        if (expansion.cards.length < expansionMinimum) return false
        if (invalidExpansions.includes(expansion.name)) return false
        return true
    })
}

const filterByCard = data => {
    const invalidCardTypes = [
        "Hero Power", 
        "Hero", 
        "Enchantment"
    ]
    const invalidCardNames = [
        "FX", 
        "Cost", 
        "NOOOOOOOOOOOO", 
        "AFK", 
        "Coin's Vengeance", 
        "Anomaly"
    ]

    return data.map(({ name, cards }) => ({
            name,
            cards: cards.filter((card, index) => {
                const { name, type, flavor } = card
                if (invalidCardNames.includes(name)) return false
                if (invalidCardTypes.includes(type)) return false
                if (!flavor) return false
                if (cards[index + 1]) {
                    const nextCard = cards[index + 1]
                    if (nextCard.name === name) return false
                }
                return true
            })
        })
    )
}

export default useFetchAllExpansions