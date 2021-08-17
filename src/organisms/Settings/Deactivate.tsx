import Checkbox from "atoms/Checkbox";
import Item from "atoms/Item";
import { CancelButton as DeactivateButton } from "atoms/SettingButtons";
import styled from "styled-components";
import * as fonts from "styles/fonts";
import * as mixins from "styles/mixins";
import { Widget } from "templates/Screen";

export default function Deactivate() {
  return (
    <DeactivateWidget>
      <Warning>주의 사항</Warning>
      <ItemWrap>
        <Item margin="mid" />
        탈퇴 시 이미 결제된 달은 환불되지 않습니다
      </ItemWrap>
      <ItemWrap>
        <Item margin="mid" />
        탈퇴 시 자동 결제가 해지됩니다
      </ItemWrap>
      <ItemWrap>
        <Item margin="mid" />
        고객님의 개인정보는 1년 후 파기됩니다
      </ItemWrap>
      <Agreement>
        <Checkbox />
        주의사항에 적힌 내용을 숙지하고 동의합니다
      </Agreement>
      <DeactivateButton>탈퇴하기</DeactivateButton>
    </DeactivateWidget>
  );
}

const DeactivateWidget = styled(Widget)`
  ${mixins.flexColumn}
  padding-bottom: 35%;
  > button {
    margin: 0 auto;
    width: 80%;
  }
`;

const Warning = styled.h4`
  ${fonts.big}
  ${fonts.bold}
  text-align: center;
`;

const ItemWrap = styled.div`
  ${fonts.medium}
  ${mixins.flexRow}
  align-items: center;
  margin-bottom: 8px;
`;

const Agreement = styled.h5`
  ${mixins.flexRow}
  ${fonts.medium}
  align-items: center;
  color: var(--color-04);
  margin: 52px 0 40px;
`;
