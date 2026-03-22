import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
    const [query, setQuery] = useState("");
    const [products,setProducts]= useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();

    // fetch products for dropdown suggestions
    useEffect(function() {
        fetch("/data/products.json")
            .then(r => r.json())
            .then(data => setProducts(data));
    }, []);

    const suggestions= products.filter(function(p){
        return query.trim()!==""&& p.name.toLowerCase().includes(query.toLowerCase());
    }).slice(0,5);

    // Handles Searches
    function handleSearch() {
        if (query.trim() === "") return;
        setShowDropdown(false);
        navigate(`/products?search=${query}`);
    }

    function handleKeyDown(e) {
        if (e.key === "Enter") {
            handleSearch();
        }
    }
    function handleSuggestionClick(productName) {
        setShowDropdown(false);
        navigate(`/products?search=${productName}`);
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
                        setShowDropdown(true);
                    }}
                    onKeyDown={handleKeyDown}
                />
                <button onClick={handleSearch}>Search</button>
            </div>

            {/* Dropdown only shows when suggestions exist */}
            {showDropdown && suggestions.length > 0 && (
                <div className="search-dropdown">
                    {suggestions.map(function(product) {
                        return (
                            <div
                                key={product.id}
                                className="dropdown-item"
                                onClick={function() {
                                    handleSuggestionClick(product.name);
                                }}
                            >
                                <span className="dropdown-item-name">
                                    {product.name}
                                </span>
                                <span className="dropdown-item-category">
                                    {product.category}
                                </span>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default SearchBar;