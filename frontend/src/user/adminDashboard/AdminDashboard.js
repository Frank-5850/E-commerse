import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  showCategoryForm,
  showChangePasswordForm,
  showProductForm,
} from "../../redux/slices/formToggleSlice";
import { setSuccess } from "../../redux/slices/successSlice";
import { isAuthenticated } from "../../api/authAPI";
import CreateCategory from "../createCategory/CreateCategory";
import CreateProduct from "../createProduct/CreateProduct";
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
import UpdatePassword from "../updatePassword/UpdatePassword";

const AdminDashboard = () => {
  const { category, product, changePassword } = useSelector(
    (state) => state.formToggleSlice
  );
  const { success, msg } = useSelector((state) => state.successSlice);
  const dispatch = useDispatch();

  const { user } = isAuthenticated();

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
      {category && <CreateCategory />}
      {product && <CreateProduct />}
      {changePassword && <UpdatePassword />}
      {showSuccess()}
      <DashboardContainer>
        <DashboardLinks>
          <DashboardCard>
            <DashboardLinkGroup>
              <DashboardLinkItems onClick={() => dispatch(showCategoryForm())}>
                Create Category
              </DashboardLinkItems>
              <DashboardLinkItems onClick={() => dispatch(showProductForm())}>
                Create Product
              </DashboardLinkItems>
              <DashboardLinkItems
                onClick={() => dispatch(showChangePasswordForm())}
              >
                Change Password
              </DashboardLinkItems>
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
