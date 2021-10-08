import { useState } from "react"
import { useDebounce } from "use-debounce-coolhatguy"
import useApi from "./useApi"

function useFetchSearch(search) {
    const [searchResponse, setSearchResponse] = useState([])

    const getSearch = async search => {
        try {
            if (search.length === 0) return
            const { data } = await useApi.get(`/search/${search}`)
            if (!data) return searchResponse
            if (data.length > 9) 
                return setSearchResponse(data.slice(0, 10))
            setSearchResponse(data)
        } catch(error) {
            console.log(error)
        }
    }

    useDebounce(() => {
        getSearch(search)
    }, 1000, [search])
    
    return searchResponse
}
export default useFetchSearch