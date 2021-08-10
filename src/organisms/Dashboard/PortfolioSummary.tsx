import styled from "styled-components";
import { HeaderIcon, SectionTitle } from "atoms/Headers";
import { Widget } from "templates/Screen";

export default function PortfolioSummary() {
  return (
    <Widget>
      <SectionTitle>
        <HeaderIcon src="/icons/ic-bar-chart-inactive.svg" />
        포트폴리오 요약
      </SectionTitle>
      <Content>asdf asdf</Content>
    </Widget>
  );
}

const Content = styled.section`
  height: 700px;
  min-height: 700px;
`;
