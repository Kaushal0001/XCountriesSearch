import { useState } from "react";
import Countries from "./Countries";

const Search = () => {
    const [search, setSearch] = useState('');

    return (
        <div style={{ margin: "0", padding: "0" }}>
            <div style={{ display: "flex", justifyContent: "center", backgroundColor: "lightgray" }}>
                <input placeholder="Search for countries...." onChange={(e) => setSearch((e.target.value))}
                    type="text" style={{ width: "50vw", margin: "1rem", border: "1px solid #ccc", fontSize: "16px", borderRadius: "5x" }} />
            </div>
            <Countries search={search} />
        </div>
    )
}

export default Search;