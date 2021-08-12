import styled from "styled-components";

import Icon from "atoms/Icon";
import type { SupportTypeName } from "organisms/Support";
import * as fonts from "styles/fonts";
import * as mixins from "styles/mixins";

import Dialogue from "./Dialogue";
import CaseAside from "./CaseAside";

type CaseDetailProps = {
  handleTypeChange: (typeName: SupportTypeName) => void;
};

export default function CaseDetail({ handleTypeChange }: CaseDetailProps) {
  return (
    <Wrapper>
      <Body>
        <Header>
          <CaseWrap>
            <Icon
              src="/icons/ic-back-arrow.svg"
              onClick={() => handleTypeChange("list")}
              style={{ cursor: "pointer" }}
            />
            <CaseName>문의사항 2</CaseName>
          </CaseWrap>
          <CaseNumber>케이스 28208297</CaseNumber>
        </Header>
        <DialogueList>
          <Dialogue isUser />
          <Dialogue />
        </DialogueList>
      </Body>
      <CaseAside handleTypeChange={handleTypeChange}></CaseAside>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${mixins.flexRow}
  width: 88%;
  height: 90%;
`;

const Body = styled.div`
  width: 100%;
`;

const Header = styled.section`
  ${mixins.flexRow}
  align-items: center;
  justify-content: space-between;
  padding: 14px;
  border-bottom: 1px solid var(--color-03);
`;

const CaseWrap = styled.div`
  ${mixins.flexRow}
  align-items: center;
`;

const CaseName = styled.h4`
  ${fonts.mid}
  ${fonts.bold}
  color: var(--color-07);
  margin: 0;
  margin-left: 26px;
`;

const CaseNumber = styled.h4`
  ${fonts.normal}
  ${fonts.bold}
  color: var(--color-04);
  margin: 0;
`;

const DialogueList = styled.ul`
  ${mixins.flexColumn}
  margin-top: 26px;
  padding-left: 20px;
`;
