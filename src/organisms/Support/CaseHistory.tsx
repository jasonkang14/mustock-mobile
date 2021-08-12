import styled from "styled-components";

import type { SupportTypeName } from "organisms/Support";
import * as fonts from "styles/fonts";

type CaseHistoryProps = {
  handleTypeChange: (typeName: SupportTypeName) => void;
};

export default function CaseHistory({ handleTypeChange }: CaseHistoryProps) {
  return (
    <TableWrap>
      <TableHeader>
        <tr>
          <HeaderContent>CASE NO.</HeaderContent>
          <HeaderContent>제목</HeaderContent>
          <HeaderContent>우선순위</HeaderContent>
          <HeaderContent>상태</HeaderContent>
          <HeaderContent>등록일</HeaderContent>
          <HeaderContent>업데이트</HeaderContent>
        </tr>
      </TableHeader>
      <TableBody>
        <TableRow onClick={() => handleTypeChange("detail")}>
          <BodyContent>28208297</BodyContent>
          <BodyContent>문의 사항 1</BodyContent>
          <BodyContent>상</BodyContent>
          <BodyContent>답변 완료</BodyContent>
          <BodyContent>2021-06-08</BodyContent>
          <BodyContent>2021-06-08</BodyContent>
        </TableRow>
        <TableRow>
          <BodyContent>28208297</BodyContent>
          <BodyContent>문의 사항 1</BodyContent>
          <BodyContent>상</BodyContent>
          <BodyContent>답변 완료</BodyContent>
          <BodyContent>2021-06-08</BodyContent>
          <BodyContent>2021-06-08</BodyContent>
        </TableRow>
      </TableBody>
    </TableWrap>
  );
}

const TableWrap = styled.table`
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  height: 40px;
  th:not(:first-child) {
    border-left: 1px solid var(--color-03);
  }
  border-bottom: 1px solid var(--color-04);
  th {
    width: 10%;
  }
  th:nth-child(2) {
    width: 50%;
  }
`;

const TableRow = styled.tr`
  text-align: center;
  height: 40px;
  cursor: pointer;
  border-bottom: 1px solid var(--color-03);
  td:not(:first-child) {
    border-left: 1px solid var(--color-03);
  }
`;

const TableBody = styled.tbody`
  overflow: scroll;
  overflow-y: auto;
  overflow-x: hidden;
`;

const HeaderContent = styled.th<{ showSideBorder?: boolean }>`
  ${fonts.normal}
  color: var(--color-06);
  line-height: 130%;
`;

const BodyContent = styled.td`
  ${fonts.normal}
  color: var(--color-05);
  line-height: 160%;
`;
