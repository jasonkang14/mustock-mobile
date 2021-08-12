import styled from "styled-components";
import { Chart } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
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
  rotation: 180,
  plugins: {
    legend: {
      display: false,
    },
  },
};

export default function PortfolioChart() {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${mixins.flexColumn}
  align-items: center;
  width: 60%;
`;

const StockWrap = styled.div`
  ${mixins.flexRow}
  margin-top: 24px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const EachStock = styled.div`
  ${fonts.normal}
  ${mixins.flexRow}
  align-items: center;
  margin-bottom: 8px;
`;

const StockColor = styled.span<{ color: string }>`
  width: 16px;
  margin-right: 8px;
  border-bottom: 4px solid ${({ color }) => color};
`;

const StockName = styled.h5`
  ${fonts.normal}
  margin: 0;
`;
