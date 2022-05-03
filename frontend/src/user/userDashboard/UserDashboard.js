import React from "react";
import { isAuthenticated } from "../../api/authAPI";
import { changePassword } from "./../../api/userAPI";
import { useSelector, useDispatch } from "react-redux";
import { setSuccess } from "../../redux/slices/successSlice";
import UpdatePassword from "../updatePassword/UpdatePassword";
import { showChangePasswordForm } from "../../redux/slices/formToggleSlice";
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
} from "../adminDashboard/dashboard.styles";

const UserDashboard = () => {
  const { changePassword } = useSelector((state) => state.formToggleSlice);
  const { success, msg } = useSelector((state) => state.successSlice);
  const { user } = isAuthenticated();
  const dispatch = useDispatch();

  const date = new Date(user.createdAt).toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

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
      {changePassword && <UpdatePassword />}
      {showSuccess()}
      <DashboardContainer>
        <DashboardLinks>
          <DashboardCard>
            <DashboardLinkGroup>
              <DashboardLinkItems
                onClick={() => dispatch(showChangePasswordForm())}
              >
                Change Password
              </DashboardLinkItems>
            </DashboardLinkGroup>
          </DashboardCard>
        </DashboardLinks>
        <DashboardInfo>
          <DashboardCard>
            <DashboardName>
              {user.firstName} {user.lastName}
            </DashboardName>
            <DashboardText>{user.email}</DashboardText>
            <DashboardText>Member since: {date}</DashboardText>
          </DashboardCard>
        </DashboardInfo>
      </DashboardContainer>
    </DashboardWrapper>
  );
};
export default UserDashboard;
