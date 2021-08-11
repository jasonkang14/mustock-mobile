import styled from "styled-components";
import { HeaderIcon, SectionTitle } from "atoms/Headers";
import * as mixins from "styles/mixins";
import PortfolioTable from "./PortfolioTable";

export default function AIPortfolio() {
  return (
    <Content>
      <TitleSection>
        <SectionTitle>
          <HeaderIcon src="/icons/ic-algorithm-portfolio.svg" />
          포트폴리오 구성
        </SectionTitle>
      </TitleSection>
      <PortfolioTable />
    </Content>
  );
}

const Content = styled.div`
  ${mixins.flexColumn}
  margin-top: 24px;
`;

const TitleSection = styled.section`
  ${mixins.flexRow}
  justify-content: space-between;
`;
