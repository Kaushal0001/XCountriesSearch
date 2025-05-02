import { useState, useEffect, useCallback } from "react";
import axios from 'axios';

const Countries = ({ search }) => {
    const [filteredCountries, setFilteredCountries] = useState([]);
    const endpoint = " https://countries-search-data-prod-812920491762.asia-south1.run.app/countries";

    const fetchCountries = useCallback(async () => {
        try {
            const data = await axios.get(endpoint);
            console.log(data.data);
            const filter = data.data.filter((country) =>
                country.common.toLowerCase().includes(search.toLowerCase())
            );
            console.log(filter);
            setFilteredCountries(filter);
        } catch (error) {
            console.error(error);
        }
    }, [search, endpoint]);

    useEffect(() => {
        fetchCountries();
    }, [fetchCountries]);

    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "20px",
            PaddingTop:"20px"
        }}>
            {filteredCountries.map((country) => (
                <div className="countryCard"
                    style={{
                        textAlign: "center",
                        padding: "10px",
                        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
                        border: "1px solid #ddd",
                        borderRadius: "8px"
                    }} key={country.common}>
                    <img style={{ width: "100px", height: "60px" }} src={country.png} alt={country.common} />
                    <p>{country.common}</p>
                </div>
            ))}
        </div>
    );
};

export default Countries;