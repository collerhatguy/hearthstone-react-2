import React, {useState} from 'react';
import useFetchSearch from "../hooks/useFetchSearch";
import CardList from './CardList';

export default function SearchPage() {

    const [search, setSearch] = useState("");
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
            <CardList cards={searchResponse} cardVisibility={true} />
        </div>
    )
}
