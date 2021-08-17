import styled from "styled-components";
import * as fonts from "styles/fonts";

export default function PlanTable() {
  return (
    <>
      <PlanExplanation>PLAN 별 기능 비교</PlanExplanation>
      <Wrapper>
        <TableWrap>
          <TableHeader>
            <HeaderContent>기능</HeaderContent>
            <HeaderContent>1</HeaderContent>
            <HeaderContent>2</HeaderContent>
            <HeaderContent>3</HeaderContent>
            <HeaderContent>4</HeaderContent>
          </TableHeader>
          <TableBody>
            <TableRow>
              <BodyContent>-</BodyContent>
              <BodyContent>-</BodyContent>
              <BodyContent>-</BodyContent>
              <BodyContent>-</BodyContent>
              <BodyContent>-</BodyContent>
            </TableRow>
            <TableRow>
              <BodyContent>-</BodyContent>
              <BodyContent>-</BodyContent>
              <BodyContent>-</BodyContent>
              <BodyContent>-</BodyContent>
              <BodyContent>-</BodyContent>
            </TableRow>
            <TableRow>
              <BodyContent>-</BodyContent>
              <BodyContent>-</BodyContent>
              <BodyContent>-</BodyContent>
              <BodyContent>-</BodyContent>
              <BodyContent>-</BodyContent>
            </TableRow>
            <TableRow>
              <BodyContent>-</BodyContent>
              <BodyContent>-</BodyContent>
              <BodyContent>-</BodyContent>
              <BodyContent>-</BodyContent>
              <BodyContent>-</BodyContent>
            </TableRow>
          </TableBody>
        </TableWrap>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 24px 16px;
`;

const PlanExplanation = styled.h5`
  ${fonts.medium}
  margin: 32px 0 8px;
  color: var(--color-05);
`;

const TableWrap = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableHeader = styled.thead`
  ${fonts.medium}
  height: 40px;
  th:not(:first-child) {
    border-left: 1px solid var(--color-03);
  }
  th:first-child {
    width: 40%;
  }
  border-bottom: 1px solid var(--color-04);
`;

const TableRow = styled.tr`
  text-align: center;
  height: 40px;
  border-bottom: 1px solid var(--color-03);
  td:not(:first-child) {
    border-left: 1px solid var(--color-03);
    padding-left: 4px;
  }
  td:first-child {
    padding-left: 16px;
  }
`;

const TableBody = styled.tbody`
  overflow: scroll;
  overflow-y: auto;
  overflow-x: hidden;
`;

const HeaderContent = styled.th`
  color: var(--color-06);
  line-height: 130%;
  text-align: center;
`;

const BodyContent = styled.td`
  color: var(--color-05);
  text-align: center;
  line-height: 160%;
  text-align: left;
`;
