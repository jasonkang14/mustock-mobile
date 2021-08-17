import { ButtonStyle } from "atoms/Button/Button";
import styled from "styled-components";
import * as mixins from "styles/mixins";
import * as fonts from "styles/fonts";

export const AssetButton = styled(ButtonStyle)<{ isActive: boolean }>`
  ${mixins.flexCenter}
  ${fonts.medium}
  ${fonts.bold}
  padding: 7px 11%;
  border-radius: 3px 3px 0px 0px;
  color: var(--color-01);
  ${({ isActive }) =>
    `
  background-color: ${isActive ? "var(--color-07)" : "var(--color-03)"};
  border: 0.8px solid ${isActive ? "var(--color-07)" : "var(--color-03)"};
  box-shadow: ${isActive ? "4px 4px 4px rgba(0, 0, 0, 0.25)" : ""}
  `}
`;

export const StockButton = styled(AssetButton)<{ isActive: boolean }>`
  ${fonts.normal}
  ${fonts.bold}
  padding: 8px 12.7px;
  box-shadow: 0px 0.2px 0.2px rgba(0, 0, 0, 0.25);
  ${({ isActive }) =>
    `
  background-color: ${isActive ? "var(--color-07)" : "transparent"};
  color: ${isActive ? "var(--color-01)" : "var(--color-04)"};
  border-top: none;
  

  `}
`;

export const ConfirmButton = styled(ButtonStyle)`
  ${fonts.mid}
  ${fonts.bold}
  ${mixins.flexCenter}
  height: 40px;
  width: 100%;
  color: var(--color-01);
  background-color: var(--color-07);
  border-radius: 5px;
`;

export const CancelButton = styled(ConfirmButton)`
  color: var(--color-04);
  border-radius: 5px;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.2);
  background-color: transparent;
`;
