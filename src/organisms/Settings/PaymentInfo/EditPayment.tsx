import styled from "styled-components";
import * as fonts from "styles/fonts";
import * as mixins from "styles/mixins";
import { ConfirmButton as AddButton } from "atoms/SettingButtons";
import { ButtonStyle } from "atoms/Button/Button";
import { useTextInput } from "atoms/Input";

export default function EditPayment() {
  const [cardNumber, cardNumberInput] = useTextInput({
    id: "cardNumber",
    initValue: "- 생략하고 입력",
    border: true,
  });

  const [month, monthInput] = useTextInput({
    id: "month",
    initValue: "월(MM)",
    border: true,
  });

  const [year, yearInput] = useTextInput({
    id: "year",
    initValue: "년(YY)",
    border: true,
  });

  const [password, passwordInput] = useTextInput({
    id: "password",
    border: true,
    type: "password",
  });

  const [birth, birthInput] = useTextInput({
    id: "birth",
    initValue: "- 생략하고 입력",
    border: true,
  });

  const [name, nameInput] = useTextInput({
    id: "name",
    initValue: "카드 소유자 이름",
    border: true,
  });

  return (
    <CardInfoWrap>
      <InputLabel htmlFor="cardNumber">카드번호</InputLabel>
      {cardNumberInput}
      <InputLabel htmlFor="expiration">
        유효기간<span>(카드에 등록된 그대로 입력해주세요)</span>
      </InputLabel>
      <ExpirationWrap>
        {monthInput} <Slash></Slash> {yearInput}
      </ExpirationWrap>
      <InputLabel htmlFor="password">카드 비밀번호 앞 2자리</InputLabel>
      <PasswordWrap>
        {passwordInput}
        <PasswordInput />
        <PasswordInput />
      </PasswordWrap>
      <InputLabel htmlFor="birth">
        생년월일 6자리<span>(개인)</span> / 사업자등록번호 10자리
        <span>(법인)</span>
      </InputLabel>
      {birthInput}
      <InputLabel htmlFor="cardNumber">카드 소유자 이름</InputLabel>
      {nameInput}
      <AddButton>등록하기</AddButton>
    </CardInfoWrap>
  );
}

const CardInfoWrap = styled.div`
  ${mixins.flexColumn}
  margin-top: -20px;
  padding: 0 40px;
  > input {
    margin-bottom: 8px;
  }
  > button {
    margin-top: 20px;
  }
`;

const InputLabel = styled.label`
  ${fonts.small}
  margin-bottom: 4px;
  white-space: pre;
  > span {
    color: var(--color-04);
  }
`;

const ExpirationWrap = styled.div`
  ${mixins.flexRow}
  justify-content: flex-start;
  margin-bottom: 16px;
  > input {
    width: 30%;
  }
`;

const Slash = styled.div`
  width: 30px;
  border-bottom: 1px solid var(--color-04);
  margin-left: 20px;
  margin-top: 10px;
  transform: rotate(121.33deg);
`;

const PasswordWrap = styled.div`
  ${mixins.flexRow}
  align-items: center;
  margin-bottom: 12px;
  > input {
    width: 30%;
  }
`;

const PasswordInput = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: var(--color-04);
  margin-left: 12px;
`;
