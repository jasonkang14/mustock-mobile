import { HeaderIcon, SectionTitle } from "atoms/Headers";
import { useTextInput } from "atoms/Input";
import { ConfirmButton as ChangePasswordButton } from "atoms/SettingButtons";
import styled from "styled-components";
import * as fonts from "styles/fonts";
import * as mixins from "styles/mixins";
import { Widget } from "templates/Screen";

export default function ChangePassword() {
  const [currentPassword, currentPasswordInput] = useTextInput({
    id: "currentPassword",
    border: true,
    type: "password",
  });

  const [newPassword, newPasswordInput] = useTextInput({
    id: "currentPassword",
    initValue: "8~20자 이내, 문자, 숫자, 기호",
    border: true,
    type: "password",
  });

  const [confirmPassword, confirmPasswordInput] = useTextInput({
    id: "currentPassword",
    border: true,
    type: "password",
  });

  return (
    <ChangePasswordWidget>
      <SectionTitle>
        <HeaderIcon src="/icons/ic-personal-info.svg" />
        비밀번호 변경
      </SectionTitle>
      <div>
        <InputLabel htmlFor="currentPassword">현재 비밀번호</InputLabel>
        {currentPasswordInput}

        <InputLabel htmlFor="currentPassword">변경 비밀번호</InputLabel>
        {newPasswordInput}

        <InputLabel htmlFor="currentPassword">비밀번호 확인</InputLabel>
        {confirmPasswordInput}

        <InputLabel htmlFor=""></InputLabel>
        <ChangePasswordButton>변경하기</ChangePasswordButton>
      </div>
    </ChangePasswordWidget>
  );
}

const ChangePasswordWidget = styled(Widget)`
  > div:last-child {
    ${mixins.flexColumn}
    padding:  40px;
    > input {
      margin-bottom: 12px;
    }
    > button {
      margin-top: 50px;
    }
  }
`;

const InputLabel = styled.label`
  ${fonts.normal}
  margin-bottom: 4px;
`;
