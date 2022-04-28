import React from "react";
import {
  CartWrapper,
  CartContainer,
  CartHeader,
  Header,
  CartInfoWrapper,
  OrderContainer,
  CartTotalContainer,
} from "./cart.styles";

const Cart = () => {
  return (
    <CartWrapper>
      <CartContainer>
        <CartHeader>
          <Header>Your cart...</Header>
        </CartHeader>
        <CartInfoWrapper>
          <OrderContainer>orders</OrderContainer>
          <CartTotalContainer>Totals</CartTotalContainer>
        </CartInfoWrapper>
      </CartContainer>
    </CartWrapper>
  );
};

export default Cart;
