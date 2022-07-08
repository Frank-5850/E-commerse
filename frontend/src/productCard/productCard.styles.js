import styled from "styled-components";

export const ProductCardContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
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
  object-fit: contain;
`;

export const ProductDescription = styled.p`
  padding: 5px;
  font-size: 1rem;
  margin: 0;
`;

export const ProductPrice = styled.p`
  font-size: 1rem;
  margin: 0;
`;

export const ProductImageContainer = styled.div``;

export const ProductFooter = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;

export const AddToCart = styled.button`
  font-size: 1rem;
  padding: 5px;
  margin: 0;
  border: none;
  background-color: #f5f5f5;
  cursor: pointer;
  &:hover {
    background-color: #ebebeb;
  }
`;
