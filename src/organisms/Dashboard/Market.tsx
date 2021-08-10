import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";
import { HeaderIcon, SectionTitle } from "atoms/Headers";
import * as fonts from "styles/fonts";
import * as mixins from "styles/mixins";
import { Widget } from "templates/Screen";

const marketArray = [
  {
    type: "해외",
    community: 55,
    media: 55,
    total: 55,
  },
  {
    type: "국내",
    community: 55,
    media: 55,
    total: 55,
  },
];

const data = {
  datasets: [
    {
      data: [25, 75],
      backgroundColor: ["#EA4335", "#1C7A80"],
      borderAlign: "inner",
      borderRadius: 30,
      borderWidth: 0,
    },
  ],
};

const options = {
  spacing: -10,
  rotation: -90,
  cutout: 36,
  plugins: {
    legend: {
      display: false,
    },
  },
};

export default function Market() {
  return (
    <MarketWidget>
      <SectionTitle>
        <HeaderIcon src="/icons/ic-market-chart.svg" />
        시장반응
      </SectionTitle>
      <Content>
        <MarketSectionWrap>
          <MarketDetail>커뮤니티</MarketDetail>
          <MarketDetail>공적 매체</MarketDetail>
          <MarketDetail>전체</MarketDetail>
        </MarketSectionWrap>
        <BarChartWrap>
          {marketArray.map((market, index) => {
            const { type, community, media, total } = market;
            return (
              <EachMarket key={`market-${index}`}>
                <MarketTitle>{type}</MarketTitle>
                <ResponseBar>
                  <PositiveBar width={community} />
                  <NegativeBar width={100 - community} />
                </ResponseBar>
                <ResponseBar>
                  <PositiveBar width={media} />
                  <NegativeBar width={100 - media} />
                </ResponseBar>
                <ResponseBar>
                  <PositiveBar width={total} />
                  <NegativeBar width={100 - total} />
                </ResponseBar>
              </EachMarket>
            );
          })}
        </BarChartWrap>
        <ChartWrap>
          <PercentageWrap>
            <Percentage>
              <PositiveIndicator />
              75%
            </Percentage>
            <Percentage>
              <NegativeIndicator />
              25%
            </Percentage>
          </PercentageWrap>
          <Doughnut data={data} options={options} />
        </ChartWrap>
      </Content>
    </MarketWidget>
  );
}

const MarketWidget = styled(Widget)`
  padding: 16px 13px 16px 20px;
`;

const ChartWrap = styled.div`
  ${mixins.flexCenter}
  width: 30%;
  height: 100%;
  margin-left: 4%;
  position: relative;
`;

const PercentageWrap = styled.div`
  ${mixins.flexCenter}
  ${mixins.flexColumn}
  position: absolute;
  top: 30%;
  > div:first-child {
    margin-bottom: 5px;
  }
`;

const PositiveIndicator = styled.span`
  width: 11px;
  height: 11px;
  border-radius: 50%;
  margin-right: 5px;
  background-color: var(--color-07);
`;

const NegativeIndicator = styled(PositiveIndicator)`
  background-color: var(--color-09);
`;

const Percentage = styled.div`
  ${mixins.flexRow}
  align-items: center;
`;

const Content = styled.div`
  ${mixins.flexRow}
  width: 100%;
`;

const BarChartWrap = styled.div`
  ${mixins.flexRow}
  width: 100%;
  > div:first-child {
    padding-right: 10px;
    margin-right: 10px;
    border-right: 1px solid var(--color-03);
  }
`;

const EachMarket = styled.div`
  ${mixins.flexColumn}
  width: 100%;
  > div:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const MarketTitle = styled.h4`
  ${fonts.normal}
  ${fonts.bold}
  margin: 0;
  color: var(--color-04);
  margin-bottom: 8px;
`;

const MarketSectionWrap = styled.div`
  ${mixins.flexColumn}
  margin-top: 24px;
  width: 100px;
  > h5:not(:last-child) {
    margin-bottom: 9px;
  }
`;

const MarketDetail = styled.h5`
  ${fonts.small}
  ${mixins.flexRow}
  margin: 0;
  color: var(--color-05);
`;

const ResponseBar = styled.div`
  ${mixins.flexRow}
  height: 15px;
`;

const PositiveBar = styled.span<{ width: number }>`
  background-color: var(--color-08);
  border-radius: 3px 0px 0px 3px;
  width: ${({ width }) => `${width}%`};
`;

const NegativeBar = styled.span<{ width: number }>`
  background-color: var(--color-09);
  border-radius: 0px 3px 3px 0px;
  width: ${({ width }) => `${width}%`};
`;
