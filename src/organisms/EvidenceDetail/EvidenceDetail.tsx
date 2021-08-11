import Icon from "atoms/Icon";
import styled from "styled-components";
import { Widget } from "templates/Screen";
import * as fonts from "styles/fonts";
import * as mixins from "styles/mixins";

type EvidenceDetailProps = {
  title: string;
  detail: string;
};

export default function EvidenceDetail({ title, detail }: EvidenceDetailProps) {
  return (
    <DetailWidget>
      <PredictionWrap>
        <PredictionTitle>{title}</PredictionTitle>
        <PredictionDetail>{detail}</PredictionDetail>
      </PredictionWrap>
      <Icon src="/icons/ic-show-detail.svg" />
    </DetailWidget>
  );
}

const DetailWidget = styled(Widget)`
  ${mixins.flexRow}
  position: relative;
  justify-content: space-between;
  padding: 34px 18px 8px 12px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  > div:last-child {
    position: absolute;
    bottom: 5px;
    right: 0;
  }
`;

const PredictionWrap = styled.span`
  ${mixins.flexColumn}
`;

const PredictionTitle = styled.h4`
  ${fonts.bold}
  margin: 0;
  color: var(--color-07);
  font-size: 14px;
  line-height: 130%;
`;

const PredictionDetail = styled(PredictionTitle.withComponent("h5"))`
  ${fonts.normal}
  color: var(--color-05);
  margin-top: 5px;
`;
