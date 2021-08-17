import styled from "styled-components";
import { HeaderIcon, SectionTitle } from "atoms/Headers";
import { Widget } from "templates/Screen";
import * as fonts from "styles/fonts";
import * as mixins from "styles/mixins";
import Dropdown from "atoms/Dropdown";
import { CancelButton } from "atoms/SettingButtons";
import HistoryTable from "./HistoryTable";

export default function Record() {
  return (
    <Widget>
      <SectionTitle>
        <HeaderIcon src="/icons/ic-card.svg" />
        다음 결제 예정일
        <NextPaymentDate>2022 / 05 / 01</NextPaymentDate>
      </SectionTitle>
      <FilterWrap>
        <CheckHistory>결제 내역 조회</CheckHistory>
        <DateRange>최근 6개월</DateRange>
        <Dropdown size="small">년도</Dropdown>
      </FilterWrap>
      <HistoryTable />
    </Widget>
  );
}

const NextPaymentDate = styled.h4`
  ${fonts.normal}
  position: absolute;
  right: 0;
  color: var(--color-09);
`;

const FilterWrap = styled.div`
  ${mixins.flexRow}
  margin-top: 20px;
  align-items: center;
  margin-left: -16px;
  > button {
    box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.2);
    border: none;
  }
`;

const DateRange = styled.span`
  ${fonts.normal}
  ${mixins.flexCenter}
  color: var(--color-04);
  border-radius: 5px;
  padding: 8px 14px;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.2);
  height: 100%;
  margin-right: 13px;
`;

const CheckHistory = styled.h5`
  ${fonts.medium}
  ${fonts.bold}
  color: var(--color-04);
  margin: 0;
  padding: 0 16px;
`;
