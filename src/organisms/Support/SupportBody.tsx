import { useState } from "react";
import styled from "styled-components";

import { Widget } from "templates/Screen";

import CaseList from "./CaseList";
import CaseDetail from "./CaseDetail";
import FAQDetail from "./FAQDetail";
import FAQTab from "./FAQTab";
import type { FAQTabName } from "./FAQTab";
import NewCase from "./NewCase";
import PageHeader from "organisms/PageHeader";

export type SupportTab = "FAQ" | "SUPPORT_CASE";

type Tab = {
  name: string;
  code: SupportTab;
};

const tabArray: Tab[] = [
  { name: "FAQ", code: "FAQ" },
  { name: "지원 케이스", code: "SUPPORT_CASE" },
];

const faqArray = [
  {
    question: "Q. μStock은 어떤 서비스 인가요?",
    detail:
      "μStock은 인공지능 알고리즘을 이용한 미래 주가 예측 정보 제공 서비스로, 인간 감정에 치우친 판단과 같은 간섭이 전혀 없는 높은 정확도의 “진짜” 로보어드바이저 투자자문 서비스입니다.",
  },
  {
    question: "Q. 만 14세 미만도 가입이 가능한가요?",
    detail:
      "μStock은 인공지능 알고리즘을 이용한 미래 주가 예측 정보 제공 서비스로, 인간 감정에 치우친 판단과 같은 간섭이 전혀 없는 높은 정확도의 “진짜” 로보어드바이저 투자자문 서비스입니다.",
  },
  {
    question: "Q. 내 포트폴리오 이용 방법이 궁금해요.",
    detail:
      "μStock은 인공지능 알고리즘을 이용한 미래 주가 예측 정보 제공 서비스로, 인간 감정에 치우친 판단과 같은 간섭이 전혀 없는 높은 정확도의 “진짜” 로보어드바이저 투자자문 서비스입니다.",
  },
];

export type SupportTypeName = "list" | "new" | "detail";

export default function SupportBody() {
  const [faqTab, setFAQTab] = useState<FAQTabName>("intro");
  const [supportTab, setSupportTab] = useState<SupportTab>("FAQ");
  const [supportType, setSupportType] = useState<SupportTypeName>("list");

  const handlePageTabChange = (tabName: SupportTab) => {
    setSupportTab(tabName);
  };

  const handleTabChange = (tabName: FAQTabName) => {
    setSupportType("list");
    setFAQTab(tabName);
  };

  const handleTypeChange = (typeName: SupportTypeName) => {
    setSupportType(typeName);
  };

  const getSupportScreen = () => {
    switch (supportType) {
      case "list":
        return <CaseList handleTypeChange={handleTypeChange} />;

      case "new":
        return <NewCase handleTypeChange={handleTypeChange} />;

      case "detail":
        return <CaseDetail handleTypeChange={handleTypeChange} />;
    }
  };

  return (
    <>
      <PageHeader
        currentTab={supportTab}
        tabArray={tabArray}
        handleTabChange={handlePageTabChange}
      />
      <SupportWidget>
        {supportTab === "FAQ" && (
          <>
            <FAQTab handleTabChange={handleTabChange} tab={faqTab} />
            <FAQDetail faqArray={faqArray} />
          </>
        )}
        {supportTab === "SUPPORT_CASE" && getSupportScreen()}
      </SupportWidget>
    </>
  );
}

const SupportWidget = styled(Widget)`
  padding: 0;
`;
