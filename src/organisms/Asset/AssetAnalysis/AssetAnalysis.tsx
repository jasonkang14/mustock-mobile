import styled from "styled-components";

import { HeaderIcon, SectionTitle } from "atoms/Headers";
import { Widget } from "templates/Screen";
import * as mixins from "styles/mixins";
import PortfolioAdvice from "./PortfolioAdvice";
import PortfolioChart from "./PortfolioChart";

export default function AssetAnalysis() {
  return (
    <Widget>
      <TitleSection>
        <SectionTitle>
          <HeaderIcon src="/icons/ic-asset-analysis.svg" />
          자산 현황 보고서
        </SectionTitle>
      </TitleSection>
      <AnalysisSection>
        <PortfolioChart />
        <PortfolioAdvice />
      </AnalysisSection>
    </Widget>
  );
}

const TitleSection = styled.section`
  ${mixins.flexRow}
  justify-content: space-between;
`;

const AnalysisSection = styled.section`
  ${mixins.flexColumn}
  ${mixins.flexCenter}
  margin-top: 20px;
`;
