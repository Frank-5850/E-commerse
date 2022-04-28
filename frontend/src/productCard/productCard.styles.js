import styled from "styled-components";

export const ProductCardContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  height: 395px;
  width: 30%;
  margin: 10px;
  border: 1px solid black;
  cursor: pointer;
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
  object-fit: cover;
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
export const ProductImageContainer = styled.div`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;
