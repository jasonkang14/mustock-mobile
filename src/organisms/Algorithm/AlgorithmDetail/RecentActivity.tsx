import styled from "styled-components";
import { Chart } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Item from "atoms/Item";
import * as fonts from "styles/fonts";
import * as mixins from "styles/mixins";

const stockArray = [
  { name: "현대로템", color: "rgba(30, 96, 129, 1)" },
  { name: "유안타증권", color: "rgba(30, 96, 129, 0.7)" },
  { name: "CJ CGV", color: "rgba(30, 96, 129, 0.5)" },
  { name: "씨에스윈드", color: "rgba(30, 96, 129, 0.3)" },
];

const data = {
  labels: ["현대로템", "유안타증권", "CJ CGV", "씨에스윈드"],
  datasets: [
    {
      data: [58, 23, 10, 9],
      backgroundColor: [
        "rgba(30, 96, 129, 1)",
        "rgba(30, 96, 129, 0.7)",
        "rgba(30, 96, 129, 0.5)",
        "rgba(30, 96, 129, 0.3)",
      ],
      datalabels: {
        display: true,
        color: "white",
        font: {
          size: 16,
        },
        formatter: (value: number) => {
          return `${value}%`;
        },
      },
    },
  ],
};

Chart.register(ChartDataLabels);

const options = {
  circumference: 180,
  rotation: -90,
  plugins: {
    legend: {
      display: false,
    },
  },
};

export default function RecentActivity() {
  return (
    <Wrapper>
      <Content>
        <Item margin="big" />
        <ActivityWrap>
          <Activity>최근 행동</Activity>
          <ActivityDetail>
            현대자동차 322주(25%) 매도 – 2021년 8월 12일
          </ActivityDetail>
        </ActivityWrap>
      </Content>
      <ChartWrap>
        <Doughnut data={data} options={options} />
        <StockWrap>
          {stockArray.map((stock, index) => {
            const { name, color } = stock;
            return (
              <EachStock key={`stock-${index}`}>
                <StockColor color={color} />
                <StockName>{name}</StockName>
              </EachStock>
            );
          })}
        </StockWrap>
      </ChartWrap>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: -24px;
`;

const ActivityWrap = styled.div`
  ${mixins.flexColumn}
  margin-top: 26px;
`;

const Content = styled.div`
  ${mixins.flexRow}
  align-items: center;
  > span {
    margin-top: 5px;
  }
`;

const Activity = styled.h4`
  ${fonts.normal}
  margin: 0;
  margin-bottom: 4px;
`;

const ActivityDetail = styled(Activity.withComponent("h5"))`
  color: var(--color-05);
`;

const ChartWrap = styled.div`
  ${mixins.flexCenter}
  width: 90%;
  position: relative;
  margin-top: -56px;
  margin-left: 5%;
`;

const StockWrap = styled.div`
  display: grid;
  width: 100%;
  padding: 0 10%;
  position: absolute;
  bottom: 0;
  grid-template-columns: 50% auto;
`;

const EachStock = styled(Content)``;

const StockColor = styled.span<{ color: string }>`
  width: 16px;
  margin-right: 8px;
  margin-bottom: 8px;
  border-bottom: 4px solid ${({ color }) => color};
`;

const StockName = styled(Activity.withComponent("h5"))`
  && {
    line-height: 130%;
  }
`;
