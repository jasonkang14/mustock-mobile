import { ButtonStyle } from "atoms/Button/Button";
import styled from "styled-components";

export const NavButtonStyle = styled(ButtonStyle)`
  margin-right: 22px;
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const DashboardButton = styled(NavButtonStyle)`
  background-image: url(/icons/ic-dashboard-inactive.svg);
  &:hover {
    background-image: url(/icons/ic-dashboard-active.svg);
  }
`;

export const AnalysisButton = styled(NavButtonStyle)`
  background-image: url(/icons/ic-pie-chart-inactive.svg);
  &:hover {
    background-image: url(/icons/ic-pie-chart-active.svg);
  }
`;

export const AIPortfolioButton = styled(NavButtonStyle)`
  background-image: url(/icons/ic-bar-chart-inactive.svg);
  &:hover {
    background-image: url(/icons/ic-bar-chart-active.svg);
  }
`;

export const MyPortfolioButton = styled(NavButtonStyle)`
  background-image: url(/icons/ic-my-portfolio-inactive.svg);
  &:hover {
    background-image: url(/icons/ic-my-portfolio-active.svg);
  }
`;

export const MarketButton = styled(NavButtonStyle)`
  background-image: url(/icons/ic-market-inactive.svg);
  &:hover {
    background-image: url(/icons/ic-market-active.svg);
  }
`;

export const SupportButton = styled(NavButtonStyle)`
  background-image: url(/icons/ic-support-inactive.svg);
  &:hover {
    background-image: url(/icons/ic-support-active.svg);
  }
`;

export const SettingsButton = styled(NavButtonStyle)`
  background-image: url(/icons/ic-settings-inactive.svg);
  &:hover {
    background-image: url(/icons/ic-settings-active.svg);
  }
`;

export const PlanButton = styled(NavButtonStyle)`
  background-image: url(/icons/ic-plan-inactive.svg);
  &:hover {
    background-image: url(/icons/ic-plan-active.svg);
  }
`;

export const LogoutButton = styled(NavButtonStyle)`
  background-image: url(/icons/ic-logout-inactive.svg);
  &:hover {
    background-image: url(/icons/ic-logout-active.svg);
  }
`;
