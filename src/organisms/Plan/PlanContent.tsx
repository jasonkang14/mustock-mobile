import { ButtonStyle } from "atoms/Button/Button";
import styled from "styled-components";
import * as fonts from "styles/fonts";
import * as mixins from "styles/mixins";

export default function PlanContent() {
  return (
    <Wrapper>
      <PlanTitle>Plan 1</PlanTitle>
      <Price>1,000,000 원/월</Price>
      <Subscrption>매월 자동 결제</Subscrption>
      <TrialButton>무료 체험 하기</TrialButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${mixins.flexColumn}
  ${mixins.flexCenter}
  border: 1px solid var(--color-07);
  border-radius: 7px;
  height: 197px;
  width: 167px;
  margin-right: 24px;
  padding: 32px;
  box-shadow: 0px 2.91852px 3.64815px rgba(0, 0, 0, 0.1);
`;

const PlanTitle = styled.h5`
  ${fonts.mid}
  ${fonts.bold}
  margin: 0;
  color: var(--color-07);
`;

const Price = styled.h6`
  ${fonts.normal}
  margin: 0;
  margin-top: 24px;
`;

const Subscrption = styled(Price)`
  ${fonts.normal}
  color: var(--color-04);
  margin-top: 12px;
`;

const TrialButton = styled(ButtonStyle)`
  ${fonts.normal}
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin-top: 24px;
  padding: 8px 8px 10px;
`;
