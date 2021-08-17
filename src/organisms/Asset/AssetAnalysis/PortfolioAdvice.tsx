import styled from "styled-components";
import * as fonts from "styles/fonts";
import * as mixins from "styles/mixins";
import Mark from "atoms/Mark";

type PortfolioAdviceProps = {
  stockList?: Array<string>;
};

const stockArray = ["현대로템", "유안타증권", "원자재 산업"];

export default function PortfolioAdvice({ stockList }: PortfolioAdviceProps) {
  return (
    <Wrapper>
      <CurrentStatus>
        현재 <Mark>홍 길동</Mark>님의 수익률은
        <PredictionMark>10%</PredictionMark>로
      </CurrentStatus>
      <CurrentPortfolio>
        <Mark>구독중인 종목</Mark> <br></br>
        {stockArray.join(",")}을
      </CurrentPortfolio>
      <AdviceWrap>
        <AlgorithmMark>알고리즘대로 따라가시면</AlgorithmMark>
        <br></br>수익율이<PredictionMark>80%</PredictionMark>로 높아질 수
        있습니다.
      </AdviceWrap>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${mixins.flexColumn}
  margin-top: 30px;
  width: 72%;
  color: var(--color-05);
`;

const CurrentStatus = styled.div`
  ${fonts.normal}
  > mark:last-child {
    ${fonts.medium}
  }
`;

const CurrentPortfolio = styled(CurrentStatus)`
  ${fonts.normal}
  line-height: 160%;
  margin-top: 18px;
`;

const AdviceWrap = styled(CurrentStatus)`
  ${fonts.normal}
  > mark {
    font-size: 12px;
  }
  margin-top: 12px;
`;

const PredictionMark = styled(Mark)`
  margin: 0 4px;
  color: var(--color-09);
`;

const AlgorithmMark = styled(Mark)``;
