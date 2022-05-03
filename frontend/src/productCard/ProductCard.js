import React from "react";
import {
  ProductCardContainer,
  ProductTitle,
  ProductImage,
  ProductDescription,
  ProductPrice,
  ProductImageContainer,
} from "../productCard/productCard.styles";

const ProductCard = ({ product, getProductDetails }) => {
  return (
    <ProductCardContainer onClick={() => getProductDetails(product._id)}>
      <ProductImageContainer>
        <ProductImage
          src={`http://localhost:8000/${product.photo.filePath}`}
          alt={product.name}
        />
      </ProductImageContainer>
      <ProductTitle>{product.name}</ProductTitle>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductPrice>${product.price}</ProductPrice>
    </ProductCardContainer>
  );
};

export default ProductCard;