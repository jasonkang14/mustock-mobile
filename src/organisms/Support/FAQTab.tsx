import styled from "styled-components";
import * as mixins from "styles/mixins";
import { SupportTab as Tab } from "atoms/Headers";

export type FAQTabName = "intro" | "usage" | "portfolio" | "charge" | "etc";

interface IFAQTabProps {
  tab: FAQTabName;
  handleTabChange: (tabName: FAQTabName) => void;
}

export default function FAQTab({ tab, handleTabChange }: IFAQTabProps) {
  return (
    <TabWrap>
      <Tab isActive={tab === "intro"} onClick={() => handleTabChange("intro")}>
        서비스소개
      </Tab>
      <Tab isActive={tab === "usage"} onClick={() => handleTabChange("usage")}>
        이용방법
      </Tab>
      <Tab isActive={tab === "etc"} onClick={() => handleTabChange("etc")}>
        기타질문
      </Tab>
      <Tab
        isActive={tab === "portfolio"}
        onClick={() => handleTabChange("portfolio")}
      >
        포트폴리오 설명
      </Tab>
      <Tab
        isActive={tab === "charge"}
        onClick={() => handleTabChange("charge")}
      >
        수수료 및 세금
      </Tab>
    </TabWrap>
  );
}

const TabWrap = styled.ul`
  ${mixins.flexRow}
  flex-wrap: wrap;
  padding: 14px 18px 32px;
  justify-content: space-between;
  border-bottom: 2px solid var(--color-03);
  > li {
    padding: 8px 5.5vw;
  }

  > li:nth-of-type(4),
  li:last-child {
    padding: 8px 7.7vw;
  }
`;
