import { useState } from "react";

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
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>🛒 ShopCart 商城</h1>
      <p>精選 3 件商品：</p>

      <div style={{ display: "flex", gap: "1.5rem" }}>
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "1rem",
              width: "180px",
              textAlign: "center",
            }}
          >
            <h3>{p.name}</h3>
            <p>${p.price}</p>
            <button
              onClick={() => addToCart(p)}
              style={{
                background: "#2563eb",
                color: "#fff",
                border: "none",
                padding: "6px 10px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              加入購物車
            </button>
          </div>
        ))}
      </div>

      <hr style={{ margin: "2rem 0" }} />
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
  );
}
