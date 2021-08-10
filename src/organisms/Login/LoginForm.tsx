import styled from "styled-components";
import { useTextInput } from "atoms/Input";
import { AuthButton as LoginButton } from "atoms/AuthButtons";

export default function LoginForm() {
  const [email, emailInput] = useTextInput({
    id: "email",
    initValue: "이메일",
  });

  const [password, passwordInput] = useTextInput({
    id: "password",
    initValue: "비밀번호",
    type: "password",
  });

  return (
    <Wrapper>
      <InputWrap>{emailInput}</InputWrap>
      <InputWrap>{passwordInput}</InputWrap>
      <LoginButton>로그인</LoginButton>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: 56px;
  width: 100%;
  > div:nth-child(2) {
    margin-top: 10px;
  }
  > button {
    margin-top: 20px;
  }
`;

const InputWrap = styled.div`
  background-color: var(--color-01);
  border-radius: 5px;
  border: 1px solid var(--color-04);
  padding: 0 16px;
`;
