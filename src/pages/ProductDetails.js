

import React from 'react';

import { useParams } from 'react-router-dom';
import products  from '../projectsData';

const ProductDetails = () => {
  const productId = useParams();
  const product = products.find(p => p.id === +productId.id);
  
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details">
      <h2>{product.title}</h2>
      <div>
        <img src={product.imageSrc} alt={product.title} />
        <div>
          <p>Price: ${product.price}</p>
          <p>Discounted Price: ${product.discountedPrice}</p>
          <p>Rating: {product.rating}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
