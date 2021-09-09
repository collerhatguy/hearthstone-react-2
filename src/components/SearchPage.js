import React, {useState} from 'react';
import useFetchSearch from "../hooks/useFetchSearch";
import CardList from './CardList';
import styled from "styled-components"

const StyledSearch = styled.form`
    width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        & > * {font-size: 4rem;}
`

export default function SearchPage() {
    const [search, setSearch] = useState("");
    const searchResponse = useFetchSearch(search);
    const handleChange = e => setSearch(e.target.value)
    return (
        <>
            <StyledSearch>
                <label>Search For Cards:</label>
                <input
                    type="text"
                    onChange={handleChange}
                    placeholder="search"
                    value={search}
                />
            </StyledSearch>
            <CardList cards={searchResponse} cardVisibility={true} />
        </>
    )
}
