import {
  AppleLoginButton,
  GoogleLoginButton,
  KakaoLoginButton,
  NaverLoginButton,
} from "atoms/AuthButtons";
import styled from "styled-components";
import * as mixins from "styles/mixins";

export default function SocialLogin() {
  return (
    <Wrapper>
      <GoogleLoginButton />
      <AppleLoginButton />
      <KakaoLoginButton />
      <NaverLoginButton />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  ${mixins.flexCenter}
  justify-content: space-around;
  width: 100%;
`;
