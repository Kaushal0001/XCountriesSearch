import { useState, useEffect, useCallback } from "react";
import axios from 'axios';

const Countries = ({ search }) => {
    const [filteredCountries, setFilteredCountries] = useState([]);
    const apiEndpoint = "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries";

    const fetchCountries = useCallback(async () => {
        try {
            const response = await axios.get(apiEndpoint);
            console.log(response.data);
            const matchingCountries = response.data.filter((country) =>
                country.common.toLowerCase().includes(search.toLowerCase())
            );
            console.log(matchingCountries);
            setFilteredCountries(matchingCountries);
        } catch (err) {
            console.error("Error fetching countries:", err);
        }
    }, [search, apiEndpoint]);

    useEffect(() => {
        fetchCountries();
    }, [fetchCountries]);

    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "20px",
            paddingTop: "20px"
        }}>
            {filteredCountries.map((country) => (
                <div className="countryCard"
                    style={{
                        textAlign: "center",
                        padding: "10px",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                        border: "1px solid #ccc",
                        borderRadius: "10px"
                    }} key={country.common}>
                    <img style={{ width: "100px", height: "60px", objectFit: "cover" }} src={country.png} alt={country.common} />
                    <p>{country.common}</p>
                </div>
            ))}
        </div>
    );
};

export default Countries;