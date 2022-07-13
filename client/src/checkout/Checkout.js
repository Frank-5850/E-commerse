import React, { useState, useEffect } from "react";
import { ClearCart, getCart } from "../cart/cartHelper";
import {
  CheckoutContainer,
  CheckoutHeader,
  CheckoutWrapper,
  Header,
  CheckoutBody,
  CheckoutFooter,
  TotalCalculatorCard,
  TotalBox,
  TaxPriceLine,
  ItemTotalLine,
  TotalText,
  ShippingInfoCard,
  BillingInfoCard,
  BillingInput,
  MiniHeader,
  CheckBoxBox,
  ConfirmOrderButton,
} from "./checkout.styles";
import { NavItem } from "../nav/nav.styles";
import { addOrderToHistory } from "../api/userAPI";
import { isAuthenticated } from "../api/authAPI";
import { v4 as uuid } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  const { token, user } = isAuthenticated();

  const navigate = useNavigate();

  const totalAmounts = async () => {
    try {
      let total = 0;
      cartItems.map((item) => {
        return (total += item.price * item.count);
      });
      setCartTotal(total);
      let taxTotal = (cartTotal * 9.75) / 100;
      setTax(taxTotal.toFixed(2));
      let totalAmount = cartTotal + taxTotal;
      setTotal(totalAmount.toFixed(2));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const cartItems = getCart();
    totalAmounts();
    setCartItems(cartItems);
  }, [total]);

  const submitOrder = async (e) => {
    e.preventDefault();
    try {
      if (cartItems.length < 1) {
        return;
      }
      const data = await addOrderToHistory(
        { order: cartItems, dateOrdered: new Date(), orderId: uuid() },
        user.id,
        token
      );
      await toast.success("Order Placed Successfully");
      if (user.role === 0) {
        navigate(`/user/dashboard`);
      } else {
        navigate(`/admin/dashboard`);
      }
      ClearCart();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CheckoutWrapper>
      <CheckoutContainer>
        <CheckoutHeader>
          <Header>Checkout</Header>
        </CheckoutHeader>
        <CheckoutBody>
          <ShippingInfoCard>
            <MiniHeader>Shipping</MiniHeader>
            <BillingInput
              placeholder="First Name"
              type="firstName"
              className="form-control"
            />
            <BillingInput
              placeholder="Last Name"
              type="lastName"
              className="form-control"
            />
            <BillingInput
              placeholder="Address"
              type="address"
              className="form-control"
            />
            <BillingInput
              placeholder="City/State"
              type="city/state"
              className="form-control"
            />
            <BillingInput
              placeholder="Zip Code"
              type="zip"
              className="form-control"
            />
            <CheckBoxBox>
              <input
                style={{ alignSelf: "start" }}
                placeholder="Phone Number"
                type="checkbox"
                className="form-control"
              />
              <label>Use address for billing</label>
            </CheckBoxBox>
          </ShippingInfoCard>
          <BillingInfoCard>
            <MiniHeader>Billing</MiniHeader>
            <BillingInput
              placeholder="Full name on card"
              type="text"
              className="form-control"
            />
            <BillingInput
              placeholder="Card Number"
              type="number"
              className="form-control"
            />
            <BillingInput
              placeholder="CVC"
              type="number"
              className="form-control"
            />
            <BillingInput
              placeholder="Expiration Date"
              type="date"
              className="form-control"
            />
            <BillingInput
              placeholder="Zip Code"
              type="number"
              className="form-control"
            />
          </BillingInfoCard>
          <TotalCalculatorCard>
            <TotalBox>
              <ItemTotalLine>
                <TotalText>Items({cartItems.length}):</TotalText>
                <TotalText>${cartTotal}</TotalText>
              </ItemTotalLine>
              <TaxPriceLine>
                <TotalText>Tax:</TotalText>
                <TotalText>+ ${tax}</TotalText>
              </TaxPriceLine>
              <ItemTotalLine>
                <TotalText>Total:</TotalText>
                <TotalText>${total}</TotalText>
              </ItemTotalLine>
            </TotalBox>
          </TotalCalculatorCard>
        </CheckoutBody>
        <CheckoutFooter>
          <NavItem cart={"true"} to="/cart">
            Back to Cart...
          </NavItem>
          <ConfirmOrderButton onClick={(e) => submitOrder(e)}>
            Order!
          </ConfirmOrderButton>
        </CheckoutFooter>
        <ToastContainer autoClose={2000} />
      </CheckoutContainer>
    </CheckoutWrapper>
  );
};

export default Checkout;
