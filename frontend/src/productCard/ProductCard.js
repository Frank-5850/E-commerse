import React from "react";
import {
  ProductCardContainer,
  ProductTitle,
  ProductImage,
  ProductDescription,
  ProductPrice,
  ProductImageContainer,
  AddToCart,
  ProductFooter,
} from "../productCard/productCard.styles";
import { addItem } from "../cart/cartHelper";

const ProductCard = ({ product, getProductDetails }) => {
  const addToCart = () => {
    addItem(product);
  };
  return (
    <ProductCardContainer>
      <ProductImageContainer onClick={() => getProductDetails(product._id)}>
        <ProductImage
          src={`http://localhost:8000/${product.photo.filePath}`}
          alt={product.name}
        />
      </ProductImageContainer>
      <ProductTitle onClick={() => getProductDetails(product._id)}>
        {product.name}
      </ProductTitle>
      <ProductDescription onClick={() => getProductDetails(product._id)}>
        {product.description}
      </ProductDescription>
      <ProductFooter>
        <ProductPrice>${product.price}</ProductPrice>
        <AddToCart onClick={() => addToCart()}>Add to cart</AddToCart>
      </ProductFooter>
    </ProductCardContainer>
  );
};

export default ProductCard;
