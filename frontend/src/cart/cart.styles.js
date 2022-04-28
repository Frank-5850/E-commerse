import styled from "styled-components";

export const CartWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  min-height: 95vh;
  background-color: white;
`;

export const CartContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  width: 60%;
  margin: 20px 0;
  border: 1px solid black;
`;

export const CartHeader = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid black;
`;

export const Header = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
`;

export const CartInfoWrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  width: 100%;
`;

export const OrderContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  width: 100%;
`;

export const CartTotalContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  width: 100%;
`;
