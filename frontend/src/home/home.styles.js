import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  // min-height: 95vh;
  background-color: darkgrey;
  background-cover: fill;
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  // width: 80%;
  margin: 30px 0;
`;

export const CategoryLinks = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  // width: 20%;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  // width: 60%;
`;

export const CategoryLinksHeader = styled.h1`
  padding: 5px;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`;

export const CategoryLinksCard = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  // width: 80%;
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
`;

export const CategoryLinksItems = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  border-box: box-sizing;
  cursor: pointer;
  // width: 100%;
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
