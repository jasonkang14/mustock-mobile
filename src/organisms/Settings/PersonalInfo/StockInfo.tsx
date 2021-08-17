import { HeaderIcon, SectionTitle } from "atoms/Headers";
import { StockButton } from "atoms/SettingButtons";
import SearchBar from "molecules/SearchBar";
import styled from "styled-components";
import * as mixins from "styles/mixins";
import { Widget } from "templates/Screen";
import StockTable from "./StockTable";

export default function StockInfo() {
  return (
    <StockWidget>
      <SectionTitle>
        <HeaderIcon src="/icons/ic-bar-chart-inactive.svg" />
        주식 종목 검색
      </SectionTitle>

      <SearchBar />
      <ButtonWrap>
        <StockButton isActive>최근</StockButton>
        <StockButton isActive={false}>전체</StockButton>
        <StockButton isActive={false}>ETF</StockButton>
        <StockButton isActive={false}>ETN</StockButton>
        <StockButton isActive={false}>코스피</StockButton>
        <StockButton isActive={false}>코스닥</StockButton>
      </ButtonWrap>
      <TableWrap>
        <StockTable />
      </TableWrap>
    </StockWidget>
  );
}

const StockWidget = styled(Widget)`
  padding: 16px 10px;
  > h1 {
    padding: 0 8px;
  }

  > div:nth-child(2) {
    box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    margin-top: 20px;
  }
`;

const ButtonWrap = styled.div`
  ${mixins.flexRow}
  margin-top: 27px;
  border-bottom: 1px solid var(--color-07);
`;

const TableWrap = styled.div`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px 5px 5px;
`;
