import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity } from "../redux/slices/cartSlice";
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

const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const [showInput, setShowInput] = useState(false);
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cartSlice);

  const getTotalPriceForItem = (a, b) => a * b;

  const getTotalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total += getTotalPriceForItem(item.price, item.quantity);
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
          <Header>Your cart...</Header>
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
                      defaultValue={product.quantity}
                      onChange={onChange}
                      input={showInput}
                    />
                    <button onClick={() => setShowInput(!showInput)}>
                      update
                    </button>
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
