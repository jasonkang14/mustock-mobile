import { ButtonStyle } from "atoms/Button/Button";
import Icon from "atoms/Icon";
import styled from "styled-components";
import * as fonts from "styles/fonts";
import * as mixins from "styles/mixins";

export const SectionTitle = styled.h1`
  ${fonts.mid}
  ${fonts.bold}
  ${mixins.sticky}
  ${mixins.flexRow}
  align-items: center;
  position: relative;
`;

export const HeaderIcon = styled(Icon)`
  margin-right: 12px;
`;

export const SectionTab = styled.li<{ isActive?: boolean }>`
  ${fonts.bold}
  font-size: 14px;
  list-style-type: none;
  height: 14px;
  cursor: pointer;
  color: ${({ isActive }) =>
    isActive ? "var(--color-07)" : "var(--color-04)"};
`;

export const SupportTab = styled.li<{ isActive?: boolean }>`
  ${fonts.normal}
  ${fonts.bold}
  ${({ isActive }) => `
    background-color: ${isActive ? "var(--color-07)" : "transparent"};
    color: ${isActive ? "var(--color-01)" : "var(--color-04)"};
  `}
  border: none;
  list-style-position: inside;
  list-style-type: none;
  border-radius: 3px;
  cursor: pointer;
  box-shadow: -1px 0px 4px rgba(0, 0, 0, 0.15);
  margin-bottom: 8px;
`;

export const SettingTab = styled(SupportTab)<{ isActive?: boolean }>`
  ${mixins.flexCenter}
  ${({ isActive }) => `
    background-color: ${isActive ? "var(--color-07)" : "var(--color-04)"};
    border: 0.8px solid ${isActive ? "var(--color-07)" : "var(--color-04)"};
  `}
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  color: var(--color-01);
  padding: 8px 1.678vw;
`;

export const NavBarButton = styled(ButtonStyle)`
  width: 18px;
  height: 16px;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(/icons/ic-nav-bar.svg);
`;

export const AlarmButton = styled(NavBarButton)`
  width: 16px;
  height: 22px;
  background-image: url(/icons/ic-alarm-header.svg);
`;
