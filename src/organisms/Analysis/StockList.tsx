import styled from "styled-components";
import { HeaderIcon, SectionTitle } from "atoms/Headers";
import Item from "atoms/Item";
import * as fonts from "styles/fonts";
import * as mixins from "styles/mixins";
import { Widget } from "templates/Screen";
import { useState } from "react";

const stockArray = [
  { name: "현대로템", changeRate: 80, up: true },
  { name: "CJ CGV", changeRate: 62, up: false },
  { name: "NH 투자증권", changeRate: 96, up: true },
  { name: "삼성전자", changeRate: 96, up: true },
  { name: "유안타증권", changeRate: 68, up: false },
  { name: "씨에스윈드", changeRate: 56, up: true },
  { name: "대동전자", changeRate: 75, up: false },
  { name: "하이닉스", changeRate: 75, up: false },
  { name: "유안타증권", changeRate: 68, up: false },
  { name: "씨에스윈드", changeRate: 56, up: true },
  { name: "대동전자", changeRate: 75, up: false },
  { name: "하이닉스", changeRate: 75, up: false },
  { name: "현대로템", changeRate: 80, up: true },
  { name: "CJ CGV", changeRate: 62, up: false },
  { name: "NH 투자증권", changeRate: 96, up: true },
  { name: "삼성전자", changeRate: 96, up: true },
  { name: "유안타증권", changeRate: 68, up: false },
  { name: "씨에스윈드", changeRate: 56, up: true },
];

export default function StockList() {
  const [expanded, setExpanded] = useState(false);

  const toggleWidget = () => {
    setExpanded(!expanded);
  };

  return (
    <StockListWidget expanded={expanded}>
      <StockTitle>
        <HeaderIcon src="/icons/ic-stock-list.svg" />
        구독중인 종목
        <HeaderIcon
          onClick={() => toggleWidget()}
          src="/icons/ic-show-detail-down.svg"
        />
      </StockTitle>
      <Body>
        {stockArray.map((stock, index) => {
          const { name, changeRate, up } = stock;
          return (
            <StockWrap key={`stock-${index}`}>
              <StockItem>
                <Item margin="mid" />
                <Stock>{name}</Stock>
              </StockItem>
              <ChangeRate up={up}>{`${changeRate}%`}</ChangeRate>
            </StockWrap>
          );
        })}
      </Body>
    </StockListWidget>
  );
}

const StockListWidget = styled(Widget)<{ expanded: boolean }>`
  max-height: ${({ expanded }) => (expanded ? "100%" : "130px")};
  overflow: hidden;
`;

const StockTitle = styled(SectionTitle)`
  ${mixins.sticky}
  > div:last-child {
    position: absolute;
    margin: 0;
    right: 0;
  }
`;

const Body = styled.section`
  display: grid;
  grid-template-columns: 60% 50%;
  max-height: 130px;
  overflow: scroll;
`;

const StockWrap = styled.span`
  ${mixins.flexRow}
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  width: 80%;
`;

const StockItem = styled.span`
  ${mixins.flexRow}
  align-items: center;
`;

const Stock = styled.span`
  ${fonts.normal}
`;

const ChangeRate = styled(Stock)<{ up?: boolean }>`
  color: ${({ up }) => (up ? "var(--color-09)" : "var(--color-07)")};
  font-family; NanumGothicBold;
  font-weight: bold;
`;
