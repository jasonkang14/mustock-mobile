import styled from "styled-components";

import Dropdown from "atoms/Dropdown";
import { OpenCaseButton } from "atoms/SupportButtons";
import SearchBar from "molecules/SearchBar";
import CaseHistory from "./CaseHistory";
import type { SupportTypeName } from "organisms/Support";
import * as mixins from "styles/mixins";

type CaseListProps = {
  handleTypeChange: (typeName: SupportTypeName) => void;
};

export default function CaseList({ handleTypeChange }: CaseListProps) {
  return (
    <Wrapper>
      <ButtonWrap>
        <SearchWrap>
          <Dropdown size="small">제목</Dropdown>
          <SearchBar />
        </SearchWrap>
        <OpenCaseButton onClick={() => handleTypeChange("new")}>
          케이스 열기
        </OpenCaseButton>
      </ButtonWrap>
      <CaseHistory handleTypeChange={handleTypeChange} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${mixins.flexColumn}
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 40px 70px 70px 70px;
`;

const SearchWrap = styled.div`
  ${mixins.flexRow}
  width: 90%;
  > button:first-child {
    margin-right: 16px;
  }
  > div:nth-child(2) {
    width: 30%;
  }
`;

const ButtonWrap = styled.section`
  ${mixins.flexRow}
  justify-content: space-between;
  margin-bottom: 30px;
`;
