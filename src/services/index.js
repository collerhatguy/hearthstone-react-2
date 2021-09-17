import axios from "axios"

const callApi = () => {
    return axios.create({
        baseURL: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards`,
        headers: {
            "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        }
    })
} 
export default callApi