import React from "react";
import { NavWrapper, NavGroup, NavItem, NavButton } from "./nav.styles";
import { isAuthenticated, signout } from "./../api/authAPI";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showSignin } from "../redux/slices/formToggleSlice";

const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <NavWrapper>
      <NavGroup>
        <NavItem to="/">Home</NavItem>
      </NavGroup>
      <NavGroup>
        {isAuthenticated() && isAuthenticated().user.role === 1 && (
          <NavItem to="/admin/dashboard">
            {isAuthenticated().user.firstName}
          </NavItem>
        )}

        {isAuthenticated() && isAuthenticated().user.role === 0 && (
          <NavItem to="/user/dashboard">
            {isAuthenticated().user.firstName}
          </NavItem>
        )}

        {!isAuthenticated() && (
          <NavButton onClick={() => dispatch(showSignin())}>Sign In</NavButton>
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
