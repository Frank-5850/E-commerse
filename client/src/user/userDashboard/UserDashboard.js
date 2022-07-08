import React from "react";
import { isAuthenticated } from "../../api/authAPI";
import { useSelector, useDispatch } from "react-redux";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserDashboard = () => {
  const { changePassword } = useSelector((state) => state.formToggleSlice);
  const { user } = isAuthenticated();
  const dispatch = useDispatch();

  const date = new Date(user.createdAt).toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  return (
    <DashboardWrapper>
      {changePassword && <UpdatePassword toast={toast} />}
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
        <ToastContainer />
      </DashboardContainer>
    </DashboardWrapper>
  );
};
export default UserDashboard;
