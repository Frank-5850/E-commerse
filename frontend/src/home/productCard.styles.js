import styled from "styled-components";

export const ProductCard = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  width: 30%;
  margin: 10px;
  border: 1px solid black;
`;

export const ProductTitle = styled.h1`
  padding: 5px;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 300px;
`;

export const ProductDescription = styled.p`
  padding: 5px;
  font-size: 1rem;
  margin: 0;
`;

export const ProductPrice = styled.p`
  padding: 5px;
  font-size: 1rem;
  margin: 0;
`;
