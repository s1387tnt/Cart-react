import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-text">
          <h1>
            🛒 歡迎來到 <span className="brand">SmartShop</span>
          </h1>
          <p>
            精選上百項商品，從電子產品到生活用品一應俱全。<br />
            探索你的風格，享受智慧購物的樂趣！
          </p>
          <Link to="/shop" className="btn-primary">
            進入商店 →
          </Link>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          🚚 <h3>快速出貨</h3>
          <p>每日出貨不間斷，最短隔日送達。</p>
        </div>
        <div className="feature-card">
          💳 <h3>多元支付</h3>
          <p>支援信用卡、轉帳、行動支付。</p>
        </div>
        <div className="feature-card">
          ⭐ <h3>精選商品</h3>
          <p>嚴選上百種商品，品質有保障。</p>
        </div>
      </section>
    </div>
  );
}
