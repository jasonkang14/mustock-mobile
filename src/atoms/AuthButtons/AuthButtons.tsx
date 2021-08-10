import styled from "styled-components";
import { ButtonStyle } from "atoms/Button/Button";
import * as fonts from "styles/fonts";
import * as mixins from "styles/mixins";

export const AuthButton = styled(ButtonStyle)`
  ${mixins.flexCenter}
  ${fonts.mid}
  ${fonts.bold}
  width: 100%;
  height: 50px;
  background-color: var(--color-07);
  color: var(--color-01);
`;

const AuthButtonStyle = styled(ButtonStyle)`
  width: 35px;
  height: 35px;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const GoogleLoginButton = styled(AuthButtonStyle)`
  background-image: url(/icons/ic-google-login.svg);
`;

export const AppleLoginButton = styled(AuthButtonStyle)`
  background-image: url(/icons/ic-apple-login.svg);
`;

export const KakaoLoginButton = styled(AuthButtonStyle)`
  background-image: url(/icons/ic-kakao-login.svg);
`;
export const NaverLoginButton = styled(AuthButtonStyle)`
  background-image: url(/icons/ic-naver-login.svg);
`;
