import React, {useState} from 'react';

export default function SearchPage() {
    const [search, setSearch] = useState("")
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
