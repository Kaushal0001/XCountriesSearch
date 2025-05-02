import { useState } from "react";
import Countries from "./Countries";

const Search = () => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <div style={{ margin: 0, padding: 0 }}>
            <div style={{ display: "flex", justifyContent: "center", backgroundColor: "#d3d3d3" }}>
                <input 
                    type="text" 
                    placeholder="Type to search for a country..." 
                    onChange={handleInputChange}
                    style={{ 
                        width: "50%", 
                        margin: "1rem", 
                        border: "1px solid #ccc", 
                        fontSize: "16px", 
                        borderRadius: "5px" 
                    }} 
                />
            </div>
            <Countries search={query} />
        </div>
    );
};

export default Search;