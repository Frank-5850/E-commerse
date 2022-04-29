import React, { useEffect } from "react";
import { useSelector } from "react-redux";
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
  const { cart } = useSelector((state) => state.cartSlice);

  useEffect(() => {
    console.log(cart);
  }, []);

  return (
    <CartWrapper>
      <CartContainer>
        <CartHeader>
          <Header>Your cart...</Header>
        </CartHeader>
        <CartInfoWrapper>
          <OrderContainer>{cart.name}</OrderContainer>
          <CartTotalContainer>Totals</CartTotalContainer>
        </CartInfoWrapper>
      </CartContainer>
    </CartWrapper>
  );
};

export default Cart;
