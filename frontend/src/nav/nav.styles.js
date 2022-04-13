import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavWrapper = styled.div`
  background: grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavGroup = styled.ul`
  display: flex;
  align-items: center;
  padding: 1rem;
  margin: 0;
  // min-width: 960px;
`;

export const NavItem = styled(Link)`
  list-style: none;
  margin: 0 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  text-decoration: none;
  background: ${(props) => (props.active ? "black" : "white")};
  color: ${(props) => (props.active ? "white" : "black")};
  cursor: pointer;
  &:hover {
    background: black;
    color: white;
  }
`;

export const NavButton = styled.button`
  border: none;
  font-family: Roboto, sans-serif;
  font-size: 15px;
  margin: 0 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background: ${(props) => (props.active ? "black" : "white")};
  color: ${(props) => (props.active ? "white" : "black")};
  cursor: pointer;
  &:hover {
    background: black;
    color: white;
  }
`;
