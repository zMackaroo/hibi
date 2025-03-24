import "./home.css";
import Mock from "../../../assets/mock.png";
import { useContext } from "react";
import { Store } from "../../../context";
import { FaPlus, FaMinus, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const categories = ["All", "Coffee", "Non-Coffee", "Food"];

function Home() {
  const { menu, updateCart, cart } = useContext(Store);

  const navigate = useNavigate();

  const handleAddToCart = (item: any, action: any) => {
    const quantity = action === "add" ? 1 : -1;
    updateCart({ name: item.name, price: item.price, quantity });
  };

  const totalItemsInCart: any = Object.values(cart).reduce(
    (acc: any, item: any) => acc + item.quantity,
    0
  );

  return (
    <div className="home">
      <div className="home-heading">
        <h1 className="heading-title">Find the perfect coffee for you</h1>
      </div>
      <div className="home-categories">
        {categories.map((category) => (
          <span className="home-category" key={category}>
            {category}
          </span>
        ))}
      </div>
      <div className="home-menu">
        {menu.data.map(
          ({ name, description, price, isActive }: any) =>
            isActive && (
              <div key={name} className="home-menu-item">
                <div className="home-menu-item-image">
                  <img src={Mock} alt={name} />
                </div>
                <div className="home-menu-item-info">
                  <h3 className="home-menu-item-name">{name}</h3>
                  <p className="home-menu-item-description">{description}</p>
                </div>
                <div className="home-menu-item-footer">
                  <span className="home-menu-item-price">₱{price}</span>
                  <div className="home-menu-item-add-cart-container">
                    <button
                      className="home-menu-item-add-cart"
                      onClick={() => handleAddToCart({ name, price }, "remove")}
                    >
                      <FaMinus />
                    </button>
                    <span className="home-menu-item-quantity">
                      {cart[name]?.quantity || 0}
                    </span>
                    <button
                      className="home-menu-item-add-cart"
                      onClick={() => handleAddToCart({ name, price }, "add")}
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
      <button
        className="floating-cart-button"
        onClick={() => navigate("/cart", { state: { cart } })}
      >
        <FaShoppingCart />
        {totalItemsInCart > 0 && (
          <span className="cart-item-count">{totalItemsInCart}</span>
        )}
      </button>
    </div>
  );
}

export default Home;
