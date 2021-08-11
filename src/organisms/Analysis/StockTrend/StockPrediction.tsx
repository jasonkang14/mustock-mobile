import styled from "styled-components";
import * as fonts from "styles/fonts";
import * as mixins from "styles/mixins";
import Item from "atoms/Item";

type StockPredictionProps = {
  title: string;
  detail: string;
};
export default function StockPrediction({
  title,
  detail,
}: StockPredictionProps) {
  return (
    <Wrapper>
      <Item margin="big" />
      <PredictionWrap>
        <PredictionTitle>{title}</PredictionTitle>
        <PredictionDetail>{detail}</PredictionDetail>
      </PredictionWrap>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${mixins.flexRow}
  position: relative;
  > span:first-of-type {
    position: absolute;
    top: 5px;
  }
`;

const PredictionWrap = styled.span`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  margin-left: 16px;
`;

const PredictionTitle = styled.h4`
  ${fonts.normal}
  margin: 0;
  color: var(--color-06);
`;

const PredictionDetail = styled(PredictionTitle.withComponent("h5"))`
  margin: 0;
  margin-top: 4px;
  color: var(--color-05);
`;
