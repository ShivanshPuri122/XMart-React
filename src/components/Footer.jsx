import { Link} from "react-router-dom"
function Footer() {
  return (
    <footer>
      <div className="footer-container">

            <div className="footer-col">
              <Link to={"/"}>
                <h2>XMart</h2>
              </Link>  
              <p>Your one stop shop for everything you need, delivered fast.</p>
            </div>

            <div className="footer-col">
                <h4>Shop</h4>
                <ul>
                    <li><Link to={"/products"}>All Products</Link ></li>
                    <li><Link to={"/products"}>Categories</Link ></li>
                    <li><Link to={"/"}>New Arrivals</Link ></li>
                    <li><Link to={"/"}>Sale</Link ></li>
                </ul>
            </div>

            <div className="footer-col">
                <h4>Help</h4>
                <ul>
                    <li><Link to={"/"}>FAQ</Link ></li>
                    <li><Link to={"/"}>Contact Us</Link ></li>
                    <li><Link to={"/"}>Track Order</Link ></li>
                    <li><Link to={"/"}>Return Policy</Link ></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>Follow Us</h4>
                <ul>
                    <li><a href="https://instagram.com" target="_blank">Instagram</a></li>
                    <li><a href="https://twitter.com" target="_blank">Twitter</a></li>
                    <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
                    <li><a href="https://youtube.com" target="_blank">Youtube</a></li>
                </ul>
            </div>

        </div>
        <div className="footer-bottom">
            <p>© 2024 XMart. All rights reserved.</p>
            <div className="footer-bottom-links">
                <Link to={"/"}>Privacy Policy</Link >
                <Link to={"/"}>Terms of Service</Link >
            </div>
        </div>
    </footer>
  )
}

export default Footer