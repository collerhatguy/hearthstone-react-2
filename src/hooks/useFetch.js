// this is a hook that takes a url and returns data
import { useState, useEffect } from "react";

function useFetch(url) {

    const expansionMinimum = 50;
    const invalidExpansions = [
        "Hero Skins",
        "Credits",
        "Tavern Brawl",
        "Battlegrounds",
    ];
    // data varibale
    const [data, setData] = useState([]);
    const getData = async (url) => {
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
                    "x-rapidapi-key": process.env.REACT_APP_API_KEY,
                },
            });
            // converting data into js object
            const json = await response.json();
            // convert object into array
            const array = await Object.keys(json).map(expansionName => {
                return {
                    name: expansionName,
                    cards: json[expansionName],
                }
            })
            // filter the array
            const filteredArray = await array.filter(expansion => {
                if (expansion.cards.length < expansionMinimum) return false;
                if (invalidExpansions.includes(expansion.name)) return false;
                return true
            })
            console.log(filteredArray);
            // set data varibale to converted response
            setData(filteredArray);
        } catch (err) {
            console.log(err);   
        }
    }
    // run the async function when component renders
    useEffect(() => {
      getData(url)
    }, [])
    return [data];
}
export default useFetch;