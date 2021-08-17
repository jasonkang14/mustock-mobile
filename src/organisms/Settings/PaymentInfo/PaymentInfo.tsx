import Image from "next/image";
import styled from "styled-components";
import { Widget } from "templates/Screen";
import * as fonts from "styles/fonts";
import * as mixins from "styles/mixins";
import Mark from "atoms/Mark";
import { ButtonStyle } from "atoms/Button/Button";
import Item from "atoms/Item";
import CurrentPayment from "./CurrentPayment";
import { useState } from "react";
import EditPayment from "./EditPayment";
import { HeaderIcon, SectionTitle } from "atoms/Headers";

export type Tab = "current" | "edit";

export default function PaymentInfo() {
  const [tab, setTab] = useState<Tab>("edit");

  const handleTabChange = (tabName: Tab) => {
    setTab(tabName);
  };

  return (
    <Widget>
      <SectionTitle>
        <HeaderIcon src="/icons/ic-personal-info.svg" />
        결제 정보
        <CardInfo>등록 카드</CardInfo>
      </SectionTitle>
      <Plan>
        선택하신 Plan은 <PlanMark>&quot;Premium&quot;</PlanMark>입니다.
      </Plan>
      {tab === "current" ? (
        <CurrentPayment handleTabChange={handleTabChange} />
      ) : (
        <EditPayment />
      )}
      <WarningSection>
        <WarningWrap>
          무료 구독 기간 만료 후, 다음 결제일부터 매달 1,000,000원이 청구됩니다.
        </WarningWrap>
        <WarningWrap>
          언제든 원하실 때 웹사이트에서 구독을 해지하실 수 있습니다.
        </WarningWrap>
        <WarningWrap>
          {`자동 결제 기간 동안, 가격이 상승되거나, 새로운 기능이\n
          추가되어도 현재가격이 동일하게 유지됩니다.`}
        </WarningWrap>
      </WarningSection>
    </Widget>
  );
}

const CardInfo = styled.h4`
  ${fonts.normal}
  position: absolute;
  right: 0;
  color: var(--color-09);
`;

const Plan = styled.h4`
  ${fonts.mid}
  margin: 20px 0 40px;
  line-height: 130%;
  text-align: center;
`;

const PlanMark = styled(Mark)`
  ${fonts.bold}
  line-height: 130%;
  color: var(--color-09);
`;

const WarningSection = styled.section`
  margin-top: 32px;
  margin-left: -16px;
`;

const WarningWrap = styled.div`
  ${mixins.flexRow}
  ${fonts.small}
  color: var(--color-04);
  margin-bottom: 8px;
  white-space: pre-line;
`;
