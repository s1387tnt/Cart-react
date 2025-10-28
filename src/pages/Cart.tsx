import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

export default function Cart() {
  const cart = useCart();
  const navigate = useNavigate();

  // 計算總金額
  const total = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert("✅ 結帳成功！感謝您的購買！");
    setTimeout(() => {
      navigate("/");
    }, 3000);
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

                  {/* 數量控制 */}
                  <div className="quantity-control">
                    <button
                      onClick={() => cart.decrease(item.id)}
                      className="qty-btn"
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => cart.increase(item.id)}
                      className="qty-btn"
                    >
                      ＋
                    </button>
                  </div>

                  {/* 移除按鈕 */}
                  <button
                    onClick={() => cart.remove(item.id)}
                    className="remove-btn"
                  >
                    🗑 移除
                  </button>
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
