import { useState } from "react";
import styled from "styled-components";
import PersonalInfo from "./PersonalInfo";
import ChangePassword from "./ChangePassword";
import PaymentInfo from "./PaymentInfo";
import PaymentHistory from "./PaymentHistory";
import Deactivate from "./Deactivate";
import PageHeader from "organisms/PageHeader";

export type SettingsTab =
  | "PERSONAL_INFO"
  | "CHANGE_PASSWORD"
  | "PAYMENT_INFO"
  | "PAYMENT_HISTORY"
  | "DEACTIVATE_ACCOUNT";

type Tab = {
  name: string;
  code: SettingsTab;
};

const tabArray: Tab[] = [
  { name: "내 정보", code: "PERSONAL_INFO" },
  { name: "비밀번호 변경", code: "CHANGE_PASSWORD" },
  { name: "결제 정보", code: "PAYMENT_INFO" },
  { name: "결제 내역", code: "PAYMENT_HISTORY" },
  { name: "계정 탈퇴", code: "DEACTIVATE_ACCOUNT" },
];

export default function SettingsBody() {
  const [tab, setTab] = useState<SettingsTab>("PERSONAL_INFO");

  const handleTabChange = (tabName: SettingsTab) => {
    setTab(tabName);
  };
  return (
    <>
      <ScrollWrap>
        <HeaderWrap>
          <PageHeader
            currentTab={tab}
            handleTabChange={handleTabChange}
            tabArray={tabArray}
          />
        </HeaderWrap>
      </ScrollWrap>
      {tab === "PERSONAL_INFO" && <PersonalInfo />}
      {tab === "CHANGE_PASSWORD" && <ChangePassword />}
      {tab === "PAYMENT_INFO" && <PaymentInfo />}
      {tab === "PAYMENT_HISTORY" && <PaymentHistory />}
      {tab === "DEACTIVATE_ACCOUNT" && <Deactivate />}
    </>
  );
}

const HeaderWrap = styled.div`
  width: 130vw;
`;

const ScrollWrap = styled.div`
  overflow-x: scroll;
`;
