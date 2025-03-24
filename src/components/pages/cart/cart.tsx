import { useNavigate, useLocation } from "react-router-dom";
import "./cart.css";

function Cart() {
  const {
    state: { cart },
  } = useLocation();
  const navigate = useNavigate();

  const items = Object.keys(cart).map((key) => {
    return {
      name: key,
      quantity: cart[key].quantity,
      price: cart[key].price,
    };
  });

  const handlePlaceOrder = async () => {
    let customerName = prompt("Enter your name");
    let customerPhone = prompt("Enter your phone number");

    if (!customerName || !customerPhone) {
      alert("Please enter your name and phone number");
      return;
    }

    const orders = {
      customerName,
      customerPhone,
      orders: items,
      totalPrice: items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      ),
      status: "Pending",
    };

    const req = await fetch(
      "https://www.hibi-service.vercel.app/order/createOrder",
      {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orders),
      }
    );
    const res = await req.json();

    if (res) {
      alert("Order placed successfully!");
      navigate("/");
      window.location.reload();
    }
  };

  return (
    <div className="cart">
      <div className="cart-header">
        <button className="back-button" onClick={() => navigate("/")}>
          ⟵ Home
        </button>
        <h2 className="cart-title">Your Order</h2>
      </div>
      <div className="cart-items">
        {items.length > 0 ? (
          <>
            {items.map((item) => (
              <div key={item.name} className="cart-item">
                <div className="cart-item-header">
                  <span className="cart-item-name">{item.name}</span>
                  <span className="cart-item-quantity">x{item.quantity}</span>
                </div>
                <div className="cart-item-details">
                  <span className="cart-item-price">
                    ₱{Number(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
            <div className="cart-footer">
              <div className="cart-total">
                <span>Total</span>
                <span>
                  ₱
                  {Number(
                    items.reduce(
                      (acc, item) => acc + item.price * item.quantity,
                      0
                    )
                  ).toFixed(2)}
                </span>
              </div>
            </div>
          </>
        ) : (
          <p className="empty-cart">Your cart is empty.</p>
        )}
      </div>
      <button className="place-order-button" onClick={handlePlaceOrder}>
        Next
      </button>
    </div>
  );
}

export default Cart;
