import styled from "styled-components";

import { HeaderIcon, SectionTitle } from "atoms/Headers";
import { Widget } from "templates/Screen";
import * as fonts from "styles/fonts";
import * as mixins from "styles/mixins";
import MarketAnalysis from "./MarketAnalysis";

export default function MarketDetail() {
  return (
    <Widget>
      <TitleSection>
        <SectionTitle>
          <HeaderIcon src="/icons/ic-market-detail.svg" />
          알고리즘 이름
        </SectionTitle>
        <MarketType>자동차산업</MarketType>
      </TitleSection>
      <AnalysisSection>
        <MarketAnalysis />
      </AnalysisSection>
    </Widget>
  );
}

const TitleSection = styled.section`
  ${mixins.flexRow}
  align-items: center;
  justify-content: space-between;
`;

const MarketType = styled.h3`
  ${fonts.normal}
  ${fonts.bold}
  color: var(--color-09);
`;

const AnalysisSection = styled.section`
  ${mixins.flexCenter}
  margin-top: 48px;
`;
