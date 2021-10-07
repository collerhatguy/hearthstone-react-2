
import { useState, useEffect } from "react"
import axios from "axios"

function useFetchAllExpansions() {
    const [data, setData] = useState()
    const getData = async () => {
        try {
            const { data } = await axios.get("https://hearthstone-decoy.herokuapp.com/")
            setData(data)
        } catch (err) {
            console.log(err)   
        }
    }
    useEffect(() => {
      getData()
    }, [])

    return data
}

export default useFetchAllExpansions