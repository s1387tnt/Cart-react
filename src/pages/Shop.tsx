import { useState } from "react";
import { useCart } from "../context/CartContext";
import "./Shop.css";

type Product = {
  id: number;
  name: string;
  price: number;
  img: string;
  category: string;
  quantity: number;
};

const products: Product[] = [
  {
    id: 1,
    name: "無線滑鼠",
    price: 490,
    img: "/images/mouse.jpg",
    category: "電腦週邊",
    quantity: 1,
  },
  {
    id: 2,
    name: "機械鍵盤",
    price: 1590,
    img: "/images/keyboard.jpg",
    category: "電腦週邊",
    quantity: 1,
  },
  {
    id: 3,
    name: "筆電支架",
    price: 890,
    img: "/images/stand.jpg",
    category: "電腦週邊",
    quantity: 1,
  },
  {
    id: 4,
    name: "藍牙喇叭",
    price: 990,
    img: "/images/speaker.jpg",
    category: "音訊設備",
    quantity: 1,
  },
  {
    id: 5,
    name: "耳機",
    price: 1290,
    img: "/images/headphone.jpg",
    category: "音訊設備",
    quantity: 1,
  },
  {
    id: 6,
    name: "隨身碟 64GB",
    price: 390,
    img: "/images/usb.jpg",
    category: "儲存裝置",
    quantity: 1,
  },
];

export default function Shop() {
  const cart = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("全部");

  const categories = ["全部", "電腦週邊", "音訊設備", "儲存裝置"];

  const filteredProducts = products.filter((p) => {
    const matchCategory =
      selectedCategory === "全部" || p.category === selectedCategory;
    const matchSearch = p.name.includes(searchQuery);
    return matchCategory && matchSearch;
  });

  return (
    <div className="shop-layout">
      {/* 側邊分類欄 */}
      <aside className="sidebar">
        <h2>📦 商品分類</h2>
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
      <main className="shop-main">
        <header className="shop-header">
          <h1>🛒 Smart 商城</h1>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="🔍 搜尋商品..."
            className="search-bar"
          />
        </header>

        <section className="product-grid">
          {filteredProducts.map((p) => (
            <div key={p.id} className="product-card">
              <img src={p.img} alt={p.name} className="product-img" />
              <div className="product-info">
                <h3>{p.name}</h3>
                <p className="price">NT$ {p.price}</p>
                <button onClick={() => cart.addItem(p)} className="add-btn">
                  ➕ 加入購物車
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
