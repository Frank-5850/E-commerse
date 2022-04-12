import React from "react";
import { NavWrapper, NavGroup, NavItem, NavButton } from "./nav.styles";

const Nav = () => {
  return (
    <NavWrapper>
      <NavGroup>
        <NavItem to="/">Home</NavItem>
        <NavButton>Sign In</NavButton>
      </NavGroup>
    </NavWrapper>
  );
};

export default Nav;
