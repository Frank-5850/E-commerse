import React, { useEffect, useState } from "react";
import { NavItem } from "../nav/nav.styles";
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
  RemoveButton,
  CartUpdateOptions,
} from "./cart.styles";
import { getCart, removeItem, updateItem } from "./cartHelper";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const initializeCart = () => {
    setCart(getCart());
  };

  useEffect(() => {
    initializeCart();
  }, [quantity]);

  const getTotalPriceForItem = (a, b) => a * b;

  const getTotalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total += getTotalPriceForItem(item.price, item.count);
    });
    return total;
  };

  const onChange = (productId) => (e) => {
    setQuantity(e.target.value < 1 ? 1 : e.target.value);
    if (e.target.value >= 1) {
      updateItem(productId, e.target.value);
    }
  };

  const removeItemFromCart = (productId) => {
    removeItem(productId);
    setCart(getCart());
  };

  return (
    <CartWrapper>
      {cart.length > 0 ? (
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
                      <CartUpdateOptions>
                        Qty:{"  "}
                        <CartItemQuantity
                          type="number"
                          value={product.count}
                          onChange={onChange(product._id)}
                        />
                        <RemoveButton
                          onClick={() => removeItemFromCart(product._id)}
                        >
                          Remove
                        </RemoveButton>
                      </CartUpdateOptions>
                    </CartItemDetails>
                    <CartTotalContainer>
                      <CartItemPrice>
                        ${getTotalPriceForItem(product.price, product.count)}
                      </CartItemPrice>
                    </CartTotalContainer>
                  </CartDetailsContainer>
                </CartItemCard>
              ))}
            <NavItem to="/checkout">Checkout</NavItem>
          </OrderContainer>
        </CartContainer>
      ) : (
        <h2>Your cart is empty</h2>
      )}
    </CartWrapper>
  );
};

export default Cart;