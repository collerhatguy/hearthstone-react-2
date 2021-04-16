import {useState, useEffect} from "react";

function useFetchSearch(search) {
    const [searchResponse, setSearchResponse] = useState([])
    const getSearch = async (search) => {
        try {
            if (search.length === 0) return;
            const response = await fetch(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/${search}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": process.env.REACT_APP_API_KEY,
                    "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com"
                }
            })
            const data = await response.json();
            setSearchResponse(data);
            console.log(data);
        } catch(error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getSearch(search)
    }, [search])
    return searchResponse;
}
export default useFetchSearch;