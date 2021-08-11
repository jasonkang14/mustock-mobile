import styled from "styled-components";
import { HeaderIcon, SectionTitle } from "atoms/Headers";
import Item from "atoms/Item";
import * as fonts from "styles/fonts";
import * as mixins from "styles/mixins";
import { Widget } from "templates/Screen";
import Mark from "atoms/Mark";

const algorithmArray = [
  { name: "알고리즘 이름", type: "전략형", up: true },
  { name: "알고리즘 이름", type: "안정형", up: false },
];

export default function AlgorithmSubscription() {
  return (
    <Widget>
      <SectionTitle>
        <HeaderIcon src="/icons/ic-algorithm.svg" />
        구독중인 <Mark color="#ea4335">인공지능</Mark> 포트폴리오
      </SectionTitle>

      {algorithmArray.map((algorithm, index) => {
        const { name, type, up } = algorithm;
        return (
          <AlgorithmWrap key={`algorithm-${index}`}>
            <AlgorithmItem>
              <Item margin="mid" />
              <Algorithm>{name}</Algorithm>
            </AlgorithmItem>
            <AlgorithmItem>
              <TypeIndicator up={up} />
              <AlgorithmType up={up}>{type}</AlgorithmType>
            </AlgorithmItem>
          </AlgorithmWrap>
        );
      })}
    </Widget>
  );
}

const AlgorithmWrap = styled.div`
  ${mixins.flexRow}
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`;

const AlgorithmItem = styled.span`
  ${mixins.flexRow}
  align-items: center;
`;

const Algorithm = styled.span`
  ${fonts.normal}
`;

const TypeIndicator = styled.span<{ up?: boolean }>`
  width: 20px;
  margin 0 10px;
  border-bottom: 2px solid
    ${({ up }) => (up ? "var(--color-09)" : "var(--color-07)")};
`;

const AlgorithmType = styled(Algorithm)<{ up?: boolean }>`
  color: ${({ up }) => (up ? "var(--color-09)" : "var(--color-07)")};
  ${fonts.bold}
`;
