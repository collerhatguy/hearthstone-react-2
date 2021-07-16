import React, {useState} from 'react';
import useFetchSearch from "../hooks/useFetchSearch";
import SearchList from "../components/SearchList";

export default function SearchPage() {
    // our search query
    const [search, setSearch] = useState("");
    // our custom hook that returns our response
    const searchResponse = useFetchSearch(search);
    return (
        <div id="search-page" className="page">
            <form>
                <label>Search For Cards:</label>
                <input
                    type="text"
                    onChange={e => setSearch(e.target.value)}
                    placeholder="search"
                    ></input>
            </form>
            <SearchList cards={searchResponse} />
        </div>
    )
}
