import styled from "styled-components";
import { AuthButton as SignupButton } from "atoms/AuthButtons";
import * as fonts from "styles/fonts";
import * as mixins from "styles/mixins";
import { useTextInput } from "atoms/Input";
import Checkbox from "atoms/Checkbox";

export default function SignupForm() {
  const [name, nameInput] = useTextInput({
    id: "name",
    initValue: "이름",
  });

  const [email, emailInput] = useTextInput({
    id: "email",
    initValue: "이메일",
  });

  const [password, passwordInput] = useTextInput({
    id: "password",
    initValue: "8-20자 이내, 문자, 숫자, 기호",
    type: "password",
  });

  return (
    <Wrapper>
      <FormWrapper>
        <OptionHeader>이름</OptionHeader>
        <InputWrap>{nameInput}</InputWrap>
        <OptionHeader>이메일</OptionHeader>
        <InputWrap>{emailInput}</InputWrap>
        <OptionHeader>비밀번호</OptionHeader>
        <InputWrap>{passwordInput}</InputWrap>
      </FormWrapper>
      <TermWrapper>
        <Checkbox />
        <TermText>모두 동의합니다</TermText>
        <ShowDetailButton />
        <Checkbox />
        <TermText>이용 약관 동의(필수)</TermText>
        <ShowDetailButton>보기</ShowDetailButton>
        <Checkbox />
        <TermText>개인정보 수집 이용 동의(필수)</TermText>
        <ShowDetailButton>보기</ShowDetailButton>
      </TermWrapper>
      <AgreeWithAllMessage>
        MuStock 서비스 약관을 확인하고, 동의합니다
      </AgreeWithAllMessage>
      <SignupButton>동의하고 가입하기</SignupButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${mixins.flexColumn}
  ${mixins.flexCenter}
  width: 100%;
  > button:last-of-type {
    width: 300px;
    margin-top: 10px;
  }
`;

const FormWrapper = styled.div`
  margin: 10px 0 8px;
  width: 100%;
`;

const OptionHeader = styled.h4`
  ${fonts.normal}
  text-align: left;
  margin: 0;
  margin-bottom: 4px;
`;

const InputWrap = styled.div`
  background-color: var(--color-01);
  border-radius: 5px;
  border: 1px solid var(--color-03);
  padding: 0 2px;
  margin-bottom: 11px;
  > input {
    ${fonts.normal}
  }
`;

const TermWrapper = styled.div`
  display: grid;
  width: 100%;
  align-items: center;
  grid-template-columns: 10% 80% 30%;
  grid-template-rows: 20% 20% 20%;
  grid-row-gap: 10px;
  margin-bottom: 32px;
`;

const TermText = styled.h5`
  ${fonts.normal}
  color: var(--color-04);
  margin: 0;
`;

const ShowDetailButton = styled(TermText)`
  text-decoration: underline;
`;

const AgreeWithAllMessage = styled.h6`
  ${fonts.normal}
  margin: 0
`;
