import { Link,useLocation } from "react-router-dom"
import { useState,useEffect } from "react"
function Footer() {
  return (
    <footer>
      <div class="footer-container">

            <div class="footer-col">
              <Link to={"/"}>
                <h2>XMart</h2>
              </Link>  
              <p>Your one stop shop for everything you need, delivered fast.</p>
            </div>

            <div class="footer-col">
                <h4>Shop</h4>
                <ul>
                    <li><Link to={"/products"}>All Products</Link ></li>
                    <li><Link to={"/products"}>Categories</Link ></li>
                    <li><Link to={"/"}>New Arrivals</Link ></li>
                    <li><Link to={"/"}>Sale</Link ></li>
                </ul>
            </div>

            <div class="footer-col">
                <h4>Help</h4>
                <ul>
                    <li><Link to={"/"}>FAQ</Link ></li>
                    <li><Link to={"/"}>Contact Us</Link ></li>
                    <li><Link to={"/"}>Track Order</Link ></li>
                    <li><Link to={"/"}>Return Policy</Link ></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Follow Us</h4>
                <ul>
                    <li><Link to={"/"}>Instagram</Link ></li>
                    <li><Link to={"/"}>Twitter / X</Link ></li>
                    <li><Link to={"/"}>Facebook</Link ></li>
                    <li><Link to={"/"}>YouTube</Link ></li>
                </ul>
            </div>

        </div>
        <div class="footer-bottom">
            <p>© 2024 XMart. All rights reserved.</p>
            <div class="footer-bottom-links">
                <Link to={"/"}>Privacy Policy</Link >
                <Link to={"/"}>Terms of Service</Link >
            </div>
        </div>
    </footer>
  )
}

export default Footer