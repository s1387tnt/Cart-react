import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function Cart() {
  const cart = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <div className="page cart">
      <h1>🛒 我的購物車</h1>

      {cart.items.length === 0 ? (
        <p>你的購物車是空的！</p>
      ) : (
        <div>
          {cart.items.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p>NT$ {item.price}</p>
              <div>
                <button onClick={() => cart.decrease(item.id)}>－</button>
                <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                <button onClick={() => cart.increase(item.id)}>＋</button>
                <button
                  onClick={() => cart.removeItem(item.id)}
                  style={{ marginLeft: "10px", color: "red" }}
                >
                  移除
                </button>
              </div>
            </div>
          ))}

          <h2>總金額：NT$ {cart.totalPrice}</h2>

          <button
            className="checkout-btn"
            onClick={() => setShowCheckout(true)}
          >
            前往結帳
          </button>

          {showCheckout && (
            <div className="modal">
              <div className="modal-content">
                <h2>🎉 結帳成功！</h2>
                <p>感謝你的購買 💳</p>
                <button
                  onClick={() => {
                    cart.clearCart();
                    setShowCheckout(false);
                  }}
                >
                  返回商店
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
