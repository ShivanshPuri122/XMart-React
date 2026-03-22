import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    function handleSearch() {
        if (query.trim() === "") return;
        navigate(`/products?search=${query}`);
    }

    function handleKeyDown(e) {
        if (e.key === "Enter") {
            handleSearch();
        }
    }

    return (
        <div className="search-bar-wrap">
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search Products"
                    value={query}
                    onChange={function(e) {
                        setQuery(e.target.value);
                    }}
                    onKeyDown={handleKeyDown}
                />
                <button onClick={handleSearch}>
                    Search
                </button>
            </div>
        </div>
    )
}

export default SearchBar;