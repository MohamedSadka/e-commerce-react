import React from "react";

import { useParams } from "react-router-dom";
import products from "../projectsData";
import { StarsSVG } from "../components/Svgs";

const ProductDetails = () => {
  const productId = useParams();
  const product = products.find((p) => p.id === +productId.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details">
      <div className="about-links d-flex gap-2">
        <span className="home-link">Account</span> /{" "}
        <span className="about-link">Gaming</span> /<span>{product.title}</span>
      </div>
      <div className="product-infos d-flex gap-5">
        <div className="mini-product-photos d-flex flex-column">
          <img src={product.imageSrc} alt="product-pic" />
          <img src={product.imageSrc} alt="product-pic" />
          <img src={product.imageSrc} alt="product-pic" />
          <img src={product.imageSrc} alt="product-pic" />
        </div>
        <div className="product-main-photo">
          <img src={product.imageSrc} alt="product-pic" />
        </div>
        <div className="product-details">
          <h3>{product.title}</h3>
          <div className="d-flex align-items-center gap-1">
            <StarsSVG />
            <span className="rate">({product.rating} Reviews)</span>
            <span className="line"></span>
            <span className="in-stock">In Stock</span>
          </div>
          <h3>${product.price}</h3>
          <p>
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </p>
          <div className="product-underline"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
