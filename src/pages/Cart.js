// Cart.jsx
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { scrollToSection } from "../components/ScrollToSection";

const Cart = () => {
  const { cartItems,  removeFromCart, updateQuantity } = useCart();
  const [showDeleteButton, setShowDeleteButton] = useState(true);

  const navigate = useNavigate();

  const handleQuantityChange = (productId, quantity) => {
    updateQuantity(productId, quantity);
  };

  const handleReturnToShop = () => {
    navigate("/");
    setTimeout(() => scrollToSection("products-section"), 100);
  };

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const handleUpdateCart = () => {
    // setShowDeleteButton(!showDeleteButton);
    setShowDeleteButton((prevShowDeleteButton) => !prevShowDeleteButton);
  };

  return (
    <div className="cart-page align-center">
      <ul className="cart-items">
        <h4 className="cart-item title">Product</h4>
        <h4 className="cart-item title">Price</h4>
        <h4 className="cart-item title">Quantity</h4>
        <h4 className="cart-item title">Subtotal</h4>
      </ul>
      <ul className="items-container">
        {cartItems.map((item) => (
          <li key={item.id} className="cart-items">
            <div className="cart-item">
              <div className="d-flex align-items-center gap-2">
                <img width="40px" src={item.imageSrc} alt="cart-img" />
                <p className="item-title">{item.title}</p>
              </div>
            </div>
            <div className="cart-item">
              <div>{item.price}$</div>
            </div>
            <div className="cart-item">
              <input
                style={{ width: "37px", display: "block" }}
                type="number"
                value={item.quantity}
                onChange={(e) =>
                  handleQuantityChange(item.id, parseInt(e.target.value))
                }
              />
            </div>
            <div className="cart-item">
              <div>{item.price * item.quantity}$</div>
            </div>
            {showDeleteButton && (
              <button
                style={{
                  position: "absolute",
                  right: "10px",
                  border: "none",
                  backgroundColor: "#db4444",
                  color: "white",
                  borderRadius: "4px",
                  padding: "4px"
                }}
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            )}
          </li>
        ))}
      </ul>
      <div className="cart-buttons d-flex align-items-center justify-content-between mb-5">
        <button onClick={handleReturnToShop}>Return to shop</button>
        <button onClick={handleUpdateCart}>Update cart</button>
      </div>
      <div className="cart-details d-flex justify-content-between">
        <div className="details-btns d-flex gap-3">
          <input className="coupon-code" placeholder="Coupon Code" />
          <button className="coupon-btn">Apply Coupon</button>
        </div>
        <div className="total-recept">
          <p className="recept-title">Cart Total</p>
          <div className="recept-item d-flex align-items-center justify-content-between">
            <p>Subtotal</p>
            <span>{totalPrice}$</span>
          </div>
          <div className="recept-item d-flex align-items-center justify-content-between">
            <p>Shipping</p>
            <span>Free</span>
          </div>
          <div className="recept-item d-flex align-items-center justify-content-between">
            <p>Total</p>
            <span>{totalPrice}$</span>
          </div>
          <button
            className="checkout-btn"
            onClick={() => navigate("/checkout")}
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
