import React from "react";
import { isAuthenticated } from "../../api/authAPI";
import {
  DashboardContainer,
  DashboardInfo,
  DashboardLinks,
  DashboardWrapper,
  DashboardCard,
  DashboardLinkGroup,
  DashboardLinkItems,
  DashboardName,
  DashboardText,
} from "./dashboard.styles";
import { useSelector, useDispatch } from "react-redux";
import AddCategory from "../addCategory/AddCategory";
import { showCategoryForm } from "../../redux/slices/formToggleSlice";

const AdminDashboard = () => {
  const { user } = isAuthenticated();
  const categoryForm = useSelector((state) => state.formToggleSlice.category);
  const dispatch = useDispatch();

  const memberSince = () => {
    const date = new Date(user.createdAt).toLocaleString("default", {
      month: "long",
      year: "numeric",
    });
    return date;
  };

  return (
    <DashboardWrapper>
      {categoryForm && <AddCategory />}
      <DashboardContainer>
        <DashboardLinks>
          <DashboardCard>
            <DashboardLinkGroup>
              <DashboardLinkItems onClick={() => dispatch(showCategoryForm())}>
                Create Category
              </DashboardLinkItems>
              <DashboardLinkItems>Create Product</DashboardLinkItems>
              <DashboardLinkItems>Update Profile</DashboardLinkItems>
              <DashboardLinkItems>Admin Dashboard</DashboardLinkItems>
              <DashboardLinkItems>Admin Dashboard</DashboardLinkItems>
            </DashboardLinkGroup>
          </DashboardCard>
        </DashboardLinks>
        <DashboardInfo>
          <DashboardCard>
            <DashboardName>
              {user.firstName} {user.lastName}
            </DashboardName>
            <DashboardText>{user.email}</DashboardText>
            <DashboardText>Member since: {memberSince()}</DashboardText>
          </DashboardCard>
        </DashboardInfo>
      </DashboardContainer>
    </DashboardWrapper>
  );
};

export default AdminDashboard;
