import React, { useState, useEffect } from "react";
import { getCart } from "../cart/cartHelper";
import {
  CheckoutContainer,
  CheckoutHeader,
  CheckoutWrapper,
  Header,
  CheckoutBody,
  CheckoutItemCard,
  CheckoutItemDetailsContainer,
  CheckoutItemName,
  CheckoutItemDescription,
  CheckoutItemPriceContainer,
  CheckoutItemPrice,
  CheckoutFooter,
  TotalCalculatorCard,
  AllCheckoutItems,
  TotalBox,
} from "./checkout.styles";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const cartItems = getCart();
    setCartItems(cartItems);
  }, []);

  return (
    <CheckoutWrapper>
      <CheckoutContainer>
        <CheckoutHeader>
          <Header>Checkout</Header>
        </CheckoutHeader>
        <CheckoutBody>
          <TotalCalculatorCard>
            <TotalBox>
              <Header>Total</Header>
            </TotalBox>
          </TotalCalculatorCard>
          <AllCheckoutItems>
            {cartItems.map((item) => (
              <CheckoutItemCard>
                <CheckoutItemDetailsContainer>
                  <CheckoutItemName>{item.name}</CheckoutItemName>
                  <CheckoutItemDescription>
                    {item.description} x {item.count}
                  </CheckoutItemDescription>
                </CheckoutItemDetailsContainer>
                <CheckoutItemPriceContainer>
                  <CheckoutItemPrice>
                    ${item.price * item.count}
                  </CheckoutItemPrice>
                </CheckoutItemPriceContainer>
              </CheckoutItemCard>
            ))}
          </AllCheckoutItems>
        </CheckoutBody>
        <CheckoutFooter>Continue...</CheckoutFooter>
      </CheckoutContainer>
    </CheckoutWrapper>
  );
};

export default Checkout;
