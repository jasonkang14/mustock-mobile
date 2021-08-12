import styled from "styled-components";
import { OpenCaseButton } from "atoms/SupportButtons";
import type { SupportTypeName } from "organisms/Support";
import * as fonts from "styles/fonts";
import * as mixins from "styles/mixins";

type CaseAsideProps = {
  handleTypeChange: (typeName: SupportTypeName) => void;
};

export default function CaseAside({ handleTypeChange }: CaseAsideProps) {
  return (
    <Wrapper>
      <OpenCaseButton onClick={() => handleTypeChange("new")}>
        케이스 다시 열기
      </OpenCaseButton>
      <Content>
        <CaseHeader>케이스 유형</CaseHeader>
        <CaseContent>유형 1</CaseContent>
        <CaseHeader>우선순위</CaseHeader>
        <CaseContent>중</CaseContent>
        <CaseHeader>상태</CaseHeader>
        <CaseContent>종료</CaseContent>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  ${mixins.flexColumn}
  width: 13%;
  height: 100%;
  margin-left: 8%;
  padding-top: 14px;
`;

const Content = styled.div`
  margin-top: 30px;
  border-left: 1px solid var(--color-03);
  height: 100%;
  padding-top: 8px;
  padding-left: 18px;
`;

const CaseHeader = styled.h5`
  ${fonts.normal}
  ${fonts.bold}
  margin: 14px 0;
`;

const CaseContent = styled.h6`
  ${fonts.normal}
  color: var(--color-05);
  margin: 14px 0;
`;
