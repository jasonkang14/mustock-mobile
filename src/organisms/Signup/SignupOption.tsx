import styled from "styled-components";
import { EmailSignupButton as SignupButton } from "atoms/AuthButtons";
import SocialLogin from "molecules/SocialLogin";
import * as fonts from "styles/fonts";
import * as mixins from "styles/mixins";

interface SignupOptionProps {
  signupWithEmail: () => void;
}

export default function SignupOption({ signupWithEmail }: SignupOptionProps) {
  return (
    <Wrapper>
      <SignupButton onClick={signupWithEmail}>이메일로 가입하기</SignupButton>
      <OptionText>or</OptionText>
      <SocialLoginMessage>소셜 계정으로 가입하기</SocialLoginMessage>
      <SocialLogin />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${mixins.flexColumn}
  ${mixins.flexCenter}
  margin-top: 56px;
  width: 100%;
  > section {
    margin-top: 30px;
  }
`;

const OptionText = styled.h4`
  ${fonts.normal}
  margin: 52px 0 40px;
`;

const SocialLoginMessage = styled(OptionText)`
  margin: 0;
`;
