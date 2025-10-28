import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./NavBar.css";

export default function NavBar() {
  const cart = useCart();
  const location = useLocation();

  return (
    <nav className="navbar">

      <div className="nav-center">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          首頁
        </Link>
        <Link
          to="/shop"
          className={location.pathname === "/shop" ? "active" : ""}
        >
          商店
        </Link>
        <Link
          to="/cart"
          className={location.pathname === "/cart" ? "active" : ""}
        >
          購物車
        </Link>
      </div>

      <div className="nav-right">
        <Link to="/cart" className="cart-link">
          🛒
          {cart.items.length > 0 && (
            <span className="cart-count">{cart.items.length}</span>
          )}
        </Link>
      </div>
    </nav>
  );
}
