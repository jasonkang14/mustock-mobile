import styled from "styled-components";
import { HeaderIcon, SectionTitle } from "atoms/Headers";
import { Widget } from "templates/Screen";
import Dropdown from "atoms/Dropdown";
import Item from "atoms/Item";
import * as fonts from "styles/fonts";

const disclosureArray = [
  { stock: "현대로템", title: "증권신고서(채무증권)" },
  { stock: "현대로템", title: "증권신고서(채무증권)" },
  { stock: "현대로템", title: "증권신고서(채무증권)" },
  { stock: "현대로템", title: "증권신고서(채무증권)" },
  { stock: "현대로템", title: "증권신고서(채무증권)" },
  { stock: "현대로템", title: "증권신고서(채무증권)" },
  { stock: "현대로템", title: "증권신고서(채무증권)" },
  { stock: "현대로템", title: "증권신고서(채무증권)" },
  { stock: "현대로템", title: "증권신고서(채무증권)" },
];

export default function Disclosure() {
  return (
    <DisclosureWidget>
      <SectionTitle>
        <HeaderIcon src="/icons/ic-disclosure.svg" />
        8월 10일 주요공시
      </SectionTitle>
      <DropdownWrap>
        <Dropdown size="small">국내</Dropdown>
      </DropdownWrap>

      {disclosureArray.map((disclosure, index) => {
        const { stock, title } = disclosure;
        return (
          <EachNews key={`disclosure-${index}`}>
            <Item margin="big" />
            <StockName>{stock}</StockName>
            <span></span>
            <DisclosureTitle>{title}</DisclosureTitle>
          </EachNews>
        );
      })}
    </DisclosureWidget>
  );
}

const DisclosureWidget = styled(Widget)`
  max-height: 380px;
  overflow: auto;
  margin-bottom: 0;
`;

const EachNews = styled.div`
  display: grid;
  grid-template-columns: 6% auto;
  grid-template-rows: 20px;
  align-items: center;
  width: 100%;
  padding 8px 0;
`;

const StockName = styled.h5`
  ${fonts.normal}
  margin: 0;
`;

const DisclosureTitle = styled.h6`
  ${fonts.normal}
  margin: 0;
  color: var(--color-05);
  line-height: 160%;
`;

const DropdownWrap = styled.div`
  position: absolute;
  right: 16px;
  top: 21px;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;
