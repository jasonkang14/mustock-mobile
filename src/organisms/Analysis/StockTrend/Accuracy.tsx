import styled from "styled-components";
import * as fonts from "styles/fonts";
import * as mixins from "styles/mixins";

export default function Accuracy() {
  return (
    <Wrapper>
      <Content>
        적중 확률
        <Rate>87%</Rate>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: -10px;
  right: 0;
  border: 1px solid rgba(234, 67, 53, 0.2);
  padding: 4px;
  border-radius: 8px;
`;

const Content = styled.span`
  ${fonts.normal}
  ${mixins.flexRow}
  padding: 1px 10px;
  align-items: center;
  border-radius: 6px;
  color: var(--color-06);
  background-color: rgba(234, 67, 53, 0.03);
`;

const Rate = styled.span`
  ${fonts.mid}
  ${fonts.bold}
  color: var(--color-09);
  margin-left: 9px;
`;
