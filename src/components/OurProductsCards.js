import React from "react";
import { Link } from "react-router-dom";

import { HeartAndEyeSVG, StarsSVG } from "./Svgs";
import OurProductsData from "./OurProductsData";

export const OurProductsCards = () => {
  return (
    <div className="products d-flex gap-3 flex-wrap">
      {OurProductsData.map((product) => (
        <div className="product" key={product.id}>
          <div className="product-top-part">
            <div className="discount-percent">{product.discountPercent}</div>
            <HeartAndEyeSVG />
            <Link to={`/product/${product.id}`}>
              <img src={product.imageSrc} alt="playstation" />
            </Link>
          </div>
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
