import { useState } from "react";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";
import { Link } from "react-router-dom";
import "../App.css";

export default function Shop() {
  const cart = useCart();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("全部");

  const categories = ["全部", ...new Set(products.map((p) => p.category))];

  const filtered = products.filter((p) => {
    const matchCategory =
      selectedCategory === "全部" || p.category === selectedCategory;
    const matchSearch = p.name.includes(search) || p.desc.includes(search);
    return matchCategory && matchSearch;
  });

  return (
    <div className="shop-layout">
      {/* 左側分類欄 */}
      <aside className="sidebar">
        <h2>商品分類</h2>
        <ul>
          {categories.map((cat) => (
            <li
              key={cat}
              className={selectedCategory === cat ? "active" : ""}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </li>
          ))}
        </ul>
      </aside>

      {/* 主內容區 */}
      <main className="main-content">
        <header className="shop-header">
          <input
            type="text"
            placeholder="🔍 搜尋商品..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </header>

        {/* 商品卡片 */}
        <div className="grid">
          {filtered.map((p) => (
            <div key={p.id} className="card">
              <img src={p.img} alt={p.name} className="product-img" />
              <h3>{p.name}</h3>
              <p className="desc">{p.desc}</p>
              <p className="price">${p.price}</p>
              <button onClick={() => cart.addItem({ ...p, quantity: 1 })}>
                加入購物車
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
