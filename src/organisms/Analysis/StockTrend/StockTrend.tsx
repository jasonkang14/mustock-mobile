import styled from "styled-components";
import { Line } from "react-chartjs-2";

import { HeaderIcon, SectionTitle } from "atoms/Headers";
import { Widget } from "templates/Screen";
import * as fonts from "styles/fonts";
import * as mixins from "styles/mixins";
import Accuracy from "./Accuracy";
import StockPrediction from "./StockPrediction";

const data = {
  labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL"],
  datasets: [
    {
      label: "실제",
      data: [8, 5, 10, 20, 15, 30],
      backgroundColor: "#1E6081",
      borderColor: "#1E6081",
    },
    {
      label: "예측",
      data: [7, 8, 10, 23, 18, 34],
      backgroundColor: "#EA4335",
      borderColor: "#EA4335",
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },

  scales: {
    yAxes: {
      offset: true,
      ticks: {
        display: false,
      },
    },
    xAxes: {
      offset: true,
      ticks: {
        showLabelBackdrop: false,
      },
    },
  },
};

const predictionArray = [
  {
    title: "8월 1주 예측",
    detail: "80% 확률로 상승 - 7월 4주 보유 자산의 40% 매수 추천",
  },
  {
    title: "8월 2주 예측",
    detail: "76% 확률로 하락 – 8월 1주 보유 자산의 80% 매도 추천",
  },
  {
    title: "8월 3주 예측",
    detail: "85% 확률로 하락 – 8월 2주 관망 추천",
  },
];

export default function StockTrend() {
  return (
    <Widget>
      <TitleSection>
        <SectionTitle>
          <HeaderIcon src="/icons/ic-candle.svg" />
          현대로템
        </SectionTitle>
        <CurrentTrend>현재까지 흐름</CurrentTrend>
      </TitleSection>
      <TrendSection>
        <LabelWrap>
          <RealLegend />
          <ChartLabel>실제</ChartLabel>
          <PredictionLegend />
          <ChartLabel>예측</ChartLabel>
        </LabelWrap>
        <Accuracy />
        <ChartWrap>
          <Line data={data} options={options} />
        </ChartWrap>
      </TrendSection>
      <PredictionSection>
        {predictionArray.map((prediction, index) => {
          const { title, detail } = prediction;
          return (
            <StockPrediction
              key={`prediction-${index}`}
              title={title}
              detail={detail}
            />
          );
        })}
      </PredictionSection>
    </Widget>
  );
}

const RealLegend = styled.span`
  width: 16px;
  border-bottom: 4px solid var(--color-07);
  margin-bottom: 4px;
  margin-right: 8px;
`;

const PredictionLegend = styled(RealLegend)`
  border-bottom: 4px solid var(--color-09);
  margin-left: 16px;
`;

const LabelWrap = styled.div`
  ${mixins.flexRow}
  margin-top: 8px;
`;

const ChartLabel = styled.h6`
  ${fonts.normal}
  color: var(--color-04);
  margin: 0;
`;

const TitleSection = styled.section`
  ${mixins.flexRow}
  align-items: center;
  justify-content: space-between;
`;

const CurrentTrend = styled.h3`
  ${fonts.normal}
  ${fonts.bold}
  color: var(--color-05);
`;

const TrendSection = styled.section`
  position: relative;
`;

const ChartWrap = styled.div`
  width: 100%;
  margin-top: 18px;
`;

const PredictionSection = styled.section`
  margin-top: 24px;
  margin-right: -8px;
`;
