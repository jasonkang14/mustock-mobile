import styled from "styled-components";
import { Widget } from "templates/Screen";
import * as fonts from "styles/fonts";
import * as mixins from "styles/mixins";
import PlanContent from "./PlanContent";
import PlanTable from "./PlanTable";

export default function PlanBody() {
  return (
    <>
      <PlanExplanationWidget>
        <DiscountMessage>전체 플랜 연 결제 시 최대 10% 할인</DiscountMessage>
      </PlanExplanationWidget>
      <PlanWidget>
        <ScrollWrap>
          <PlanWrapper>
            <PlanContent />
            <PlanContent />
            <PlanContent />
            <PlanContent />
          </PlanWrapper>
        </ScrollWrap>
        <PlanTable />
      </PlanWidget>
    </>
  );
}

const PlanExplanationWidget = styled(Widget)`
  ${mixins.sticky}
`;

const PlanWrapper = styled.div`
  ${mixins.flexRow}
  width: 200vw;
`;

const DiscountMessage = styled.div`
  ${fonts.medium}
  ${fonts.bold}
  color: var(--color-07);
  margin-top: 16px;
`;

const ScrollWrap = styled.div`
  overflow-x: scroll;
`;

const PlanWidget = styled(Widget)`
  padding: 30px 10px;
`;
