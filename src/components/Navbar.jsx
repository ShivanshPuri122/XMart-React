import { Link , useLocation } from "react-router-dom";

function Navbar(){
    const location=useLocation();

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
                        <Link to={"/cart"} className={navClass("/cart")}>Cart</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar