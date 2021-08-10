import { ButtonStyle } from "atoms/Button/Button";
import Icon from "atoms/Icon";
import styled, { css } from "styled-components";
import * as mixins from "styles/mixins";

export const SectionTitle = styled.h1`
  font-family: NanumGothicBold;
  font-size: 20px;
  line-height: 130%;
  ${mixins.flexRow}
  align-items: center;
`;

export const HeaderIcon = styled(Icon)`
  margin-right: 12px;
`;

export const SectionTab = styled.li<{ isActive?: boolean }>`
  font-family: NanumGothicBold;
  font-weight: bold;
  font-size: 18px;
  line-height: 130%;
  list-style-type: none;
  margin: auto 0;
  padding: 0 3%;
  height: 20px;
  cursor: pointer;
  color: ${({ isActive }) =>
    isActive ? "var(--color-07)" : "var(--color-04)"};
`;

export const SettingTab = styled.li<{ isActive?: boolean }>`
  ${mixins.flexCenter}
  ${({ isActive }) => `
    background-color: ${isActive ? "var(--color-07)" : "var(--color-04)"};
    border: 0.8px solid ${isActive ? "var(--color-07)" : "var(--color-04)"};
  `}
  box-sizing: border-box;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px 3px 0px 0px;
  color: var(--color-01);
  padding: 8px 1.678vw;
  font-family: NanumGothic;
  font-weight: bold;
  font-size: 16px;
  line-height: 140%;
  list-style-type: none;
  cursor: pointer;
`;

export const SupportTab = styled.li<{ isActive?: boolean }>`
  border: none;
  ${({ isActive }) => `
    background-color: ${isActive ? "var(--color-07)" : "transparent"};
    color: ${isActive ? "var(--color-01)" : "var(--color-04)"};
  `}
  padding: 8px 1.678vw;
  font-family: NanumGothic;
  font-weight: bold;
  border: none;
  font-size: 18px;
  line-height: 130%;
  list-style-type: none;
  border-radius: 3px 3px 0px 0px;
  cursor: pointer;
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
