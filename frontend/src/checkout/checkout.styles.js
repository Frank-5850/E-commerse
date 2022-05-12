import styled from "styled-components";

export const CheckoutWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  min-height: 95vh;
  background-color: white;
`;

export const CheckoutContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  width: 60%;
  height: 80%;
  margin: 20px 0;
  border: 1px solid black;
`;

export const CheckoutHeader = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid black;
`;
export const Header = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  padding: 10px;
`;

export const CheckoutBody = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin: 20px;
  border: 1px solid black;
`;

export const CheckoutItemCard = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
`;

export const CheckoutItemDetailsContainer = styled.div`
  display: flex;
  flex-flow: column;
  padding: 10px;
`;

export const CheckoutItemName = styled.h6`
  font-weight: bold;
  margin: 0;
`;

export const CheckoutItemDescription = styled.p`
  margin: 0;
`;

export const CheckoutItemPriceContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  border-left: 1px solid black;
  width: 100px;
  height: 50px;
`;

export const CheckoutItemPrice = styled.h6`
  font-weight: bold;
  margin: 0;
  padding: 10px;
`;
