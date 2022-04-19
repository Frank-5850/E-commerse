import React from "react";
import {
  ProductCardContainer,
  ProductTitle,
  ProductImage,
  ProductDescription,
  ProductPrice,
} from "../productCard/productCard.styles";

const ProductCard = ({ product, getProductDetails }) => {
  return (
    <ProductCardContainer onClick={() => getProductDetails(product._id)}>
      <ProductImage
        src={`http://localhost:8000/${product.photo.filePath}`}
        alt={product.name}
      />
      <ProductTitle>{product.name}</ProductTitle>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductPrice>${product.price}</ProductPrice>
    </ProductCardContainer>
  );
};

export default ProductCard;
