import { ButtonStyle } from "atoms/Button/Button";
import styled from "styled-components";
import * as mixins from "styles/mixins";
import * as fonts from "styles/fonts";

export const SupportButton = styled(ButtonStyle)`
  ${fonts.normal}
  ${fonts.bold}
  ${mixins.flexCenter}
  padding: 12px 16px;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  color: var(--color-01);
`;

export const OpenCaseButton = styled(SupportButton)`
  background-color: var(--color-07);
`;

export const AttachmentButton = styled(SupportButton)`
  background-color: var(--color-01);
  color: var(--color-06);
  font-family: NanumGothic;
`;
