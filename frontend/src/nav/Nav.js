import React from "react";
import { NavWrapper, NavGroup, NavItem, NavButton } from "./nav.styles";
import { isAuthenticated, signout } from "./../api/authAPI";
import { useNavigate } from "react-router-dom";

const Nav = ({ setShowSignin }) => {
  const navigate = useNavigate();
  return (
    <NavWrapper>
      <NavGroup>
        <NavItem to="/">Home</NavItem>
      </NavGroup>
      <NavGroup>
        {!isAuthenticated() && (
          <NavButton onClick={() => setShowSignin(true)}>Sign In</NavButton>
        )}
        {isAuthenticated() && (
          <NavButton onClick={() => signout(() => navigate("/"))}>
            Log Out
          </NavButton>
        )}
      </NavGroup>
    </NavWrapper>
  );
};

export default Nav;
