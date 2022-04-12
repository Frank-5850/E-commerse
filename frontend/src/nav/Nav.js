import React from "react";
import { NavWrapper, NavGroup, NavItem, NavButton } from "./nav.styles";

const Nav = ({ setShowSignin }) => {
  return (
    <NavWrapper>
      <NavGroup>
        <NavItem to="/">Home</NavItem>
        <NavButton onClick={() => setShowSignin(true)}>Sign In</NavButton>
      </NavGroup>
    </NavWrapper>
  );
};

export default Nav;
