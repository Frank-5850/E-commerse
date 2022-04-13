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
} from "../adminDashboard/dashboard.styles";

const UserDashboard = () => {
  const { user } = isAuthenticated();

  const date = new Date(user.createdAt).toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  return (
    <DashboardWrapper>
      <DashboardContainer>
        {/* <DashboardLinks>
          <DashboardCard>
            <DashboardLinkGroup>
              <DashboardLinkItems>Create Category</DashboardLinkItems>
              <DashboardLinkItems>Create Product</DashboardLinkItems>
              <DashboardLinkItems>Update Profile</DashboardLinkItems>
              <DashboardLinkItems>Admin Dashboard</DashboardLinkItems>
              <DashboardLinkItems>Admin Dashboard</DashboardLinkItems>
            </DashboardLinkGroup>
          </DashboardCard>
        </DashboardLinks> */}
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
