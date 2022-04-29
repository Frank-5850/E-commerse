import React, { useState } from "react";
import {
  ProductDetailWrapper,
  ProductDetailContainer,
  ProductDetailImg,
  ProductDetailGroup,
  ProductDetailSection,
} from "../productDetailsModal/productDetailCard.styles";
import {
  ProductTitle,
  ProductDescription,
  ProductPrice,
} from "../productCard/productCard.styles";
import { CloseButton } from "../user/signin/forms.styles";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

const ProductDetailsModal = ({
  product,
  productDetails,
  setProductDetails,
}) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartSlice);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleAddToCart = async () => {
    try {
      await dispatch(addToCart(product));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductDetailWrapper
      show={productDetails.show}
      onClick={() => setProductDetails({ ...productDetails, show: false })}
    >
      <ProductDetailContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton
          onClick={() => setProductDetails({ ...productDetails, show: false })}
        >
          X
        </CloseButton>
        <ProductDetailImg
          src={`http://localhost:8000/${product?.photo?.filePath}`}
          alt={product.name}
        />
        <ProductDetailSection>
          <ProductDetailGroup>
            <ProductTitle>{product.name}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductPrice>${product.price}</ProductPrice>
          </ProductDetailGroup>
          <ProductDetailGroup>
            Qty:
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
            />
            <button onClick={() => handleAddToCart()}>Add to Cart</button>
          </ProductDetailGroup>
        </ProductDetailSection>
      </ProductDetailContainer>
    </ProductDetailWrapper>
  );
};

export default ProductDetailsModal;
