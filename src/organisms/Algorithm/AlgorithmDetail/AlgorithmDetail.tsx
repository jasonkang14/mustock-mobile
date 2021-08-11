import styled from "styled-components";

import { HeaderIcon, SectionTitle } from "atoms/Headers";
import { Widget } from "templates/Screen";
import * as fonts from "styles/fonts";
import * as mixins from "styles/mixins";
import AIPortfolio from "./AIPortfolio";
import RecentActivity from "./RecentActivity";

export default function AlgorithmDetail() {
  return (
    <AlgorithmWidget>
      <TitleSection>
        <SectionTitle>
          <HeaderIcon src="/icons/ic-pie-chart-inactive.svg" />
          알고리즘 이름
        </SectionTitle>
        <AlgorithmType>전략형</AlgorithmType>
      </TitleSection>
      <RecentActivity />
      <AIPortfolio />
    </AlgorithmWidget>
  );
}

const AlgorithmWidget = styled(Widget)`
  max-height: 560px;
  overflow: auto;
`;

const TitleSection = styled.section`
  ${mixins.flexRow}
  justify-content: space-between;
  align-items: center;
`;

const AlgorithmType = styled.h3`
  ${fonts.midBig}
  ${fonts.bold}
  margin: 0;
  color: var(--color-09);
`;
