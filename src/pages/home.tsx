import { useState } from "react";
import "./home.css";

type Product = {
  id: number;
  name: string;
  price: number;
};

export default function Home() {
  const [cart, setCart] = useState<Product[]>([]);

  const products: Product[] = [
    { id: 1, name: "無線滑鼠", price: 490 },
    { id: 2, name: "機械鍵盤", price: 1590 },
    { id: 3, name: "筆電支架", price: 890 },
  ];

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="home">
      <h1>🛒 ShopCart 商城</h1>
      <p>精選 3 件商品：</p>

      <div className="product-list">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <h3>{p.name}</h3>
            <p>${p.price}</p>
            <button onClick={() => addToCart(p)}>加入購物車</button>
          </div>
        ))}
      </div>

      <hr />
      <div className="cart-section">
        <h2>🧺 購物車 ({cart.length} 件)</h2>
        {cart.length === 0 ? (
          <p>尚未選購任何商品</p>
        ) : (
          <ul>
            {cart.map((c) => (
              <li key={c.id}>
                {c.name} - ${c.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
