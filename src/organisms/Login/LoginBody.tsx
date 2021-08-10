import Link from "next/link";
import styled from "styled-components";
import * as fonts from "styles/fonts";
import * as mixins from "styles/mixins";
import LoginForm from "./LoginForm";
import SocialLogin from "molecules/SocialLogin";
import { AuthLogo } from "atoms/Logo";

export default function LoginBody() {
  return (
    <Wrapper>
      <AuthLogo>μStock</AuthLogo>
      <LoginText>회원로그인</LoginText>
      <LoginForm />
      <SocialLogin />
      <ButtonWrap>
        <Link href="/signup" passHref>
          <SignupButton>회원가입</SignupButton>
        </Link>
        <Link href="/find/password" passHref>
          <FindPasswordButton>비밀번호 찾기</FindPasswordButton>
        </Link>
      </ButtonWrap>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${mixins.flexColumn}
  width: 100%;
  padding: 20% 13% 30%;
  align-items: center;
  > section {
    margin-top: 64px;
  }
`;

const LoginText = styled.h2`
  ${fonts.big}
  margin: 0;
  margin-top: 42px;
  text-align: center;
`;

const ButtonWrap = styled.div`
  ${mixins.flexCenter}
  margin-top: 35px;
`;

const SignupButton = styled.a`
  ${fonts.normal}
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const FindPasswordButton = styled(SignupButton)`
  border-left: 1px solid var(--color-04);
  margin-left: 24px;
  padding-left: 24px;
`;
