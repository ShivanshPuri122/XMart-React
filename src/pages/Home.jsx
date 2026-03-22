import { useState, useEffect } from "react";
import SearchBar from "../components/Searchbar";
import CategoryGrid from "../components/CategoryGrid";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Shop Everything</h2>
          <h2>Delivered Fast</h2>
          <p>Discover thousands of products at best prices.</p>
          <SearchBar />
        </div>
      </section>
      <CategoryGrid />
    </div>
  );
}

export default Home;
