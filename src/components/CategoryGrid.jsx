import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"

function CategoryGrid(){
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()

    useEffect(function(){
        fetch("/data/categories.json")
        .then(r=>r.json())
        .then(category=> setCategories(category));
    },[]);

    function handleCategoryClicks(category){
        navigate(`/products?category=${category}`);
    }
    return (
        <section className="categories">
            <h2>Shop by Category</h2>
            <div className="category-grid">
                {categories.map(function(category) {
                    return (
                        <div
                            key={category.id}
                            className="category-card"
                            onClick={function() {handleCategoryClicks(category)}}>
                            <img src={category.image} alt={category.name} />
                            <p>{category.name}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default CategoryGrid