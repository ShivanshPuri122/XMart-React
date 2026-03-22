import { Link , useLocation } from "react-router-dom";
import { useState,useEffect } from "react";
function Navbar(){
    const location=useLocation();
    const [cartCount,setCartCount]=useState(0);
    useEffect(function(){
        const cart=JSON.parse(localStorage.getItem("cart"))||[];
        setCartCount(cart.length)
    },[]);
    function navClass(path) {
        return location.pathname === path ? "active" : "";
    }
    return(
        <header>
            <nav>
                {/*Logo */}
                <Link to={"/"}>
                    <h1>XMart</h1>
                </Link>
                {/*Nav Links */}
                <ul>
                    <li>
                        <Link to={"/"} className={navClass("/")}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/products"} className={navClass("/products")}>Products</Link>
                    </li>
                    <li>
                        <Link to={"/account"} className={navClass("/account")}>Account</Link>
                    </li>
                    <li>
                        <Link to={"/cart"} className={navClass("/cart")}>Cart{cartCount>0 &&(<span className="cart-count">{cartCount}</span>)}</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar