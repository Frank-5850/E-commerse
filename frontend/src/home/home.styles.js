import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  background-cover: fill;
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
  margin: 30px 30px;
`;

export const CategoryLinks = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  min-width: 20%;
`;

export const ProductCategoryTitle = styled.h1`
  padding: 8px;
  margin: 5px;
  border-bottom: 1px solid #ccc;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-flow: column;
  min-width: 80%;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 100%;
`;

export const CategoryLinksCard = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 10px;
`;

export const CategoryLinksItems = styled.h4`
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  border-box: box-sizing;
  cursor: pointer;
  margin: 0;
  &:hover {
    background-color: black;
    color: white;
  }
`;

export const CategoryLinkContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  border-box: box-sizing;
`;
