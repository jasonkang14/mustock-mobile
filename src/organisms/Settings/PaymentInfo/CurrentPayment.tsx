import styled from "styled-components";
import * as fonts from "styles/fonts";
import * as mixins from "styles/mixins";
import { ConfirmButton as PayButton } from "atoms/SettingButtons";
import { ButtonStyle } from "atoms/Button/Button";
import { Tab } from "./PaymentInfo";

type CurrentPaymentProps = {
  handleTabChange: (tabName: Tab) => void;
};

export default function CurrentPayment({
  handleTabChange,
}: CurrentPaymentProps) {
  return (
    <CardInfoWrap>
      <MustockCard>
        <CardNumber>BC카드 0000 - **0* - *0** - 0***</CardNumber>
      </MustockCard>
      <ChangeCardButton onClick={() => handleTabChange("edit")}>
        결제 카드 변경
      </ChangeCardButton>
      <PayButton>결제하기</PayButton>
    </CardInfoWrap>
  );
}
const CardInfoWrap = styled.div`
  ${mixins.flexColumn}
  ${mixins.flexCenter}
  position: relative;
  > button {
    width: 80%;
    margin-top: 60px;
  }
`;

const MustockCard = styled.div`
  width: 100%;
  height: 150px;
  position: relative;
  margin-bottom: 8px;
  background-image: url(/static/images/mustock-card.png);
  background-size: contain;
  background-repeat: no-repeat;
`;

const CardNumber = styled.div`
  ${fonts.medium}
  ${fonts.bold}
  position: absolute;
  bottom: 20px;
  left: 16px;
  color: var(--color-01);
  text-shadow: 0px 2px 1px rgba(26, 92, 127, 0.55);
`;

const ChangeCardButton = styled(ButtonStyle)`
  ${fonts.normal}
  position: absolute;
  right: -78px;
  color: var(--color-04);
`;
