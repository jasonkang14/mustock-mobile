import styled from "styled-components";
import * as fonts from "styles/fonts";
import * as mixins from "styles/mixins";
// import type { PlanTab } from "../../../pages/plan/Plan";

import type { SupportTab } from "organisms/Support";
import type { SettingsTab } from "organisms/Settings/SettingsBody";

type TabOption = SupportTab | SettingsTab; //| PlanTab

type Tab = {
  name: string;
  code: TabOption;
};

type SupportHeaderProps = {
  currentTab: TabOption;
  handleTabChange: (tabName: any) => void;
  tabArray: Array<Tab>;
};

export default function PageHeader({
  currentTab,
  handleTabChange,
  tabArray,
}: SupportHeaderProps) {
  return (
    <Header>
      {tabArray.map((tab, index) => {
        const { name, code } = tab;
        return (
          <SectionTab
            key={`tab-${index}`}
            isActive={currentTab === code}
            onClick={() => handleTabChange(code)}
          >
            {name}
          </SectionTab>
        );
      })}
    </Header>
  );
}

const Header = styled.ul`
  ${mixins.sticky}
  ${mixins.flexRow}
  align-items: center;
  background-color: var(--color-01);
  border: 1px solid var(--color-01);
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin: 0 0 16px;
  padding: 14px 20px;
  height: 46px;
  overflow-x: scroll;
  overflow-y: hidden;

  > li:not(:first-child) {
    border-left: 2px solid var(--color-04);
    margin-left: 20px;
    padding-left: 20px;
  }
`;

const SectionTab = styled.li<{ isActive?: boolean }>`
  ${fonts.medium}
  ${fonts.bold}
  overflow-x: scroll;
  list-style-type: none;
  list-style-position: inside;
  cursor: pointer;
  color: ${({ isActive }) =>
    isActive ? "var(--color-07)" : "var(--color-04)"};
`;
