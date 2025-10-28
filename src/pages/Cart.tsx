import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

export default function Cart() {
  const cart = useCart();
  const navigate = useNavigate();

  const total = cart.items.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    alert("✅ 結帳成功！感謝您的購買！");
    setTimeout(() => {
      navigate("/");
    }, 3000); // 3 秒後自動跳回首頁
  };

  return (
    <div className="cart-page">
      <h2>🛒 購物車</h2>
      {cart.items.length === 0 ? (
        <p>購物車目前是空的。</p>
      ) : (
        <>
          <div className="cart-list">
            {cart.items.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt={item.name} />
                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <p>NT$ {item.price}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="total">總金額：NT$ {total}</h3>
          <button onClick={handleCheckout} className="checkout-btn">
            結帳
          </button>
        </>
      )}
    </div>
  );
}
