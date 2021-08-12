import styled from "styled-components";
import { SectionTab } from "atoms/Headers";
import * as mixins from "styles/mixins";
// import type { PlanTab } from "../../../pages/plan/Plan";
// import type { SettingsTab } from "../../../pages/settings/Settings";
import type { SupportTab } from "organisms/Support";

type TabOption = SupportTab; //| PlanTab | SettingsTab;

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
  ${mixins.flexRow}
  align-items: center;
  background-color: var(--color-01);
  border: 1px solid var(--color-01);
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 14px 20px;
  margin: 0 0 16px;
  > li:not(:first-child) {
    border-left: 2px solid var(--color-04);
    margin-left: 20px;
    padding-left: 20px;
  }
`;
