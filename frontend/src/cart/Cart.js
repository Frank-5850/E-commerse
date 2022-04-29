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
          <OrderContainer>
            {cart &&
              cart.map((product, index) => (
                <div key={index}>
                  <img
                    src={`http://localhost:8000/${product.photo?.filePath}`}
                    alt={product.name}
                  />
                  <div>
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                    <p>{product.quantity}</p>
                  </div>
                </div>
              ))}
          </OrderContainer>
          <CartTotalContainer>Totals</CartTotalContainer>
        </CartInfoWrapper>
      </CartContainer>
    </CartWrapper>
  );
};

export default Cart;
