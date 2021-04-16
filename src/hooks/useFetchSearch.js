import {useState} from "react";

function useFetchSearch(search) {
    const getSearch = async (search) => {
        const response = await fetch(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/%7B${search}%7D`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": process.env.REACT_APP_API_KEY,
                "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com"
            }
        })
    }
}