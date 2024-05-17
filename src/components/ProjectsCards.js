import React from "react";
import { Link } from "react-router-dom";
import products from "../projectsData";
import { HeartAndEyeSVG, StarsSVG } from "./Svgs";
import { useCart } from "../context/CartContext";
import { useWishList } from "../context/WishListContext";

export const ProjectsCards = () => {
  const { addToCart, cartItems } = useCart();
  const { addToWishList } = useWishList();

  const isItemInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleAddToWishlist = (product) => {
    addToWishList(product);
  };

  return (
    <div className="products" id="products-section">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <div className="product-top-part">
            <div className="discount-percent">{product.discountPercent}</div>
            <HeartAndEyeSVG />
            <Link to={`/product/${product.id}`}>
              <img src={product.imageSrc} alt="playstation" />
            </Link>
          </div>
          {!isItemInCart(product.id) && (
            <button
              onClick={() => handleAddToCart(product)}
              className="add-to-cart w-100"
            >
              Add To Cart
            </button>
          )}
          <div className="product-bottom-part">
            <p className="product-title mt-2 mb-0">{product.title}</p>
            <div className="product-price">
              ${product.price}{" "}
              <span className="product-disc"> ${product.discountedPrice}</span>
            </div>
            <div className="d-flex align-items-center gap-1">
              <StarsSVG />
              <span className="rate">({product.rating})</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
