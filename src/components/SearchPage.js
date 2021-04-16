import React, {useState} from 'react';
import useFetchSearch from "../hooks/useFetchSearch";

export default function SearchPage() {
    const [search, setSearch] = useState("")
    useFetchSearch(search);
    return (
        <div>
            <form>
                <input
                    type="text"
                    onchange={e => setSearch(e.target.value)}
                    placeholder="search"
                    >

                    </input>
            </form>
        </div>
    )
}
