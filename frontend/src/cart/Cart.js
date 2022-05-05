import React, { useEffect, useState } from "react";
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
  CartTotal,
} from "./cart.styles";
import { getCart } from "./cartHelper";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [showInput, setShowInput] = useState(false);

  const initializeCart = () => {
    setCart(getCart());
  };

  useEffect(() => {
    initializeCart();
  }, []);

  const getTotalPriceForItem = (a, b) => a * b;

  const getTotalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total += getTotalPriceForItem(item.price, item.count);
    });
    return total;
  };

  const onChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <CartWrapper>
      <CartContainer>
        <CartHeader>
          <Header>You have {`${cart.length}`} items in your cart...</Header>
          <CartTotal>Total: ${getTotalPrice()}</CartTotal>
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
                    <CartItemQuantity
                      defaultValue={product.count}
                      onChange={onChange}
                      input={showInput}
                    />
                    <button onClick={() => setShowInput(!showInput)}>
                      update
                    </button>
                  </CartItemDetails>
                  <CartTotalContainer>
                    <CartItemPrice>
                      ${getTotalPriceForItem(product.price, product.count)}
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
