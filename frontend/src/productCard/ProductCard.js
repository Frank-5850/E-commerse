import React from "react";
import { useDispatch } from "react-redux";
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
import { isAuthenticated } from "../api/authAPI";
import { showUpdateProductForm } from "../redux/slices/formToggleSlice";
import { deleteProduct } from "../api/adminAPI";

const ProductCard = ({ product, getProductDetails, setProductId }) => {
  const addToCart = () => {
    addItem(product);
  };
  const dispatch = useDispatch();

  const { user, token } = isAuthenticated();

  const updateProductForm = (id) => {
    dispatch(showUpdateProductForm());
    setProductId(id);
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
      <ProductFooter>
        {user && user.role === 1 && (
          <button onClick={() => updateProductForm(product._id)}>Update</button>
        )}
        {user && user.role === 1 && (
          <button onClick={() => deleteProduct(user.id, token, product._id)}>
            Delete
          </button>
        )}
      </ProductFooter>
    </ProductCardContainer>
  );
};

export default ProductCard;
