import styled from "styled-components";
import { HeaderIcon, SectionTitle } from "atoms/Headers";
import Item from "atoms/Item";
import * as fonts from "styles/fonts";
import * as mixins from "styles/mixins";
import { Widget } from "templates/Screen";
import Mark from "atoms/Mark";

const marketArray = [
  { name: "알고리즘 이름", type: "자동차 산업", percentage: 80, up: true },
  { name: "알고리즘 이름", type: "원자재 산업", percentage: 62, up: false },
];

export default function MarketSubscription() {
  return (
    <Widget>
      <SectionTitle>
        <HeaderIcon src="/icons/ic-algorithm.svg" />
        구독중인 <Mark color="#1e6081">시장</Mark> 포트폴리오
      </SectionTitle>
      {marketArray.map((market, index) => {
        const { name, type, percentage, up } = market;
        return (
          <MarketWrap key={`Market-${index}`}>
            <Item margin="mid" />
            <MarketName>{name}</MarketName>
            <TypeIndicator />
            <MarketName>{type}</MarketName>
            <Percentage up={up}>{percentage}%</Percentage>
          </MarketWrap>
        );
      })}
    </Widget>
  );
}

const MarketWrap = styled.span`
  display: grid;
  grid-template-columns: 5% 56% 10% 25% 5%;
  align-items: center;
  margin-bottom: 8px;
`;

const MarketName = styled.span`
  ${fonts.normal}
`;

const TypeIndicator = styled.span`
  width: 20px;
  border-bottom: 2px solid var(--color-05);
`;

const Percentage = styled(MarketName)<{ up?: boolean }>`
  ${fonts.bold}
  color: ${({ up }) => (up ? "var(--color-09)" : "var(--color-07)")};
`;
