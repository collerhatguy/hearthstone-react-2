// this is a hook that takes a url and returns data
import { useState, useEffect } from "react";

function useFetch(url) {

    
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
            const array = await convertToArray(json);
            // filter the array
            const filteredArray = await filterByExpansion(array);
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
const convertToArray = (data) => {
    return Object.keys(data).map(expansionName => {
        return {
            name: expansionName,
            cards: data[expansionName],
        }
    })
}
const filterByExpansion = (data) => {
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
const filterByCard = (data) => {

}
export default useFetch;