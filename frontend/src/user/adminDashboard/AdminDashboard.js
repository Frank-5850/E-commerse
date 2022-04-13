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
import { setSuccess } from "../../redux/slices/successSlice";

const AdminDashboard = () => {
  const { user } = isAuthenticated();
  const categoryForm = useSelector((state) => state.formToggleSlice.category);
  const { success, msg } = useSelector((state) => state.successSlice);
  const dispatch = useDispatch();

  const memberSince = () => {
    const date = new Date(user.createdAt).toLocaleString("default", {
      month: "long",
      year: "numeric",
    });
    return date;
  };

  const showSuccess = () => (
    <div
      style={{
        display: success ? "" : "none",
        color: "green",
        fontSize: "1rem",
        margin: "0.5rem",
      }}
    >
      {msg}
    </div>
  );

  return (
    <DashboardWrapper onClick={() => dispatch(setSuccess({}))}>
      {categoryForm && <AddCategory />}
      {showSuccess()}
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
