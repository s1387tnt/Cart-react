import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import "./index.css";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/">🏠 首頁</Link>
        <Link to="/shop">🛍 商店</Link>
        <Link to="/cart">🛒 購物車</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
