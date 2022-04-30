import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  CartWrapper,
  CartContainer,
  CartHeader,
  Header,
  OrderContainer,
  CartItemCard,
  CartItemImg,
  CartItemDetails,
  CartItemName,
  CartItemDescription,
  CartItemPrice,
  CartItemQuantity,
  CartTotalContainer,
  CartDetailsContainer,
} from "./cart.styles";

const Cart = () => {
  const { cart } = useSelector((state) => state.cartSlice);

  const getTotalPriceForItem = (a, b) => a * b;

  return (
    <CartWrapper>
      <CartContainer>
        <CartHeader>
          <Header>Your cart...</Header>
        </CartHeader>
        <OrderContainer>
          {cart &&
            cart.map((product, index) => (
              <CartItemCard key={index}>
                <CartItemImg
                  src={`http://localhost:8000/${product.photo?.filePath}`}
                  alt={product.name}
                />
                <CartDetailsContainer>
                  <CartItemDetails>
                    <CartItemName>{product.name}</CartItemName>
                    <CartItemDescription>
                      {product.description}
                    </CartItemDescription>
                    <CartItemPrice>${product.price}</CartItemPrice>
                    <CartItemQuantity defaultValue={product.quantity} />
                  </CartItemDetails>
                  <CartTotalContainer>
                    <CartItemPrice>
                      ${getTotalPriceForItem(product.price, product.quantity)}
                    </CartItemPrice>
                  </CartTotalContainer>
                </CartDetailsContainer>
              </CartItemCard>
            ))}
        </OrderContainer>
      </CartContainer>
    </CartWrapper>
  );
};

export default Cart;
