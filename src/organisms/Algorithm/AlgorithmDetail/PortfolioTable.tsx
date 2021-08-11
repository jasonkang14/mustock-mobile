import styled from "styled-components";
import * as fonts from "styles/fonts";

export default function PortfolioTable() {
  return (
    <TableWrap>
      <TableHeader>
        <tr>
          <HeaderContent>종목명</HeaderContent>
          <HeaderContent>매수시점</HeaderContent>
          <HeaderContent>등락률</HeaderContent>
          <HeaderContent>보유비율</HeaderContent>
        </tr>
      </TableHeader>
      <TableBody>
        <TableRow>
          <BodyContent>삼성전자</BodyContent>
          <BodyContent>2021/7/1</BodyContent>
          <ChangeRate>asdf</ChangeRate>
          <BodyContent>asdf</BodyContent>
        </TableRow>
        <TableRow>
          <BodyContent>셀트리온</BodyContent>
          <BodyContent>2021/7/1</BodyContent>
          <ChangeRate>asdf</ChangeRate>
          <BodyContent>asdf</BodyContent>
        </TableRow>
        <TableRow>
          <BodyContent>카카오</BodyContent>
          <BodyContent>2021/7/1</BodyContent>
          <ChangeRate>asdf</ChangeRate>
          <BodyContent>asdf</BodyContent>
        </TableRow>
        <TableRow>
          <BodyContent>네이버</BodyContent>
          <BodyContent>2021/7/1</BodyContent>
          <ChangeRate>asdf</ChangeRate>
          <BodyContent>asdf</BodyContent>
        </TableRow>
        <TableRow>
          <BodyContent>SK하이닉스</BodyContent>
          <BodyContent>2021/7/1</BodyContent>
          <ChangeRate>asdf</ChangeRate>
          <BodyContent>asdf</BodyContent>
        </TableRow>
        <TableRow>
          <BodyContent>씨젠</BodyContent>
          <BodyContent>2021/7/1</BodyContent>
          <ChangeRate>asdf</ChangeRate>
          <BodyContent>asdf</BodyContent>
        </TableRow>
        <TableRow>
          <BodyContent>서진시스템</BodyContent>
          <BodyContent>2021/7/1</BodyContent>
          <ChangeRate>asdf</ChangeRate>
          <BodyContent>asdf</BodyContent>
        </TableRow>
        <TableRow>
          <BodyContent>에코프로</BodyContent>
          <BodyContent>2021/7/1</BodyContent>
          <ChangeRate>asdf</ChangeRate>
          <BodyContent>asdf</BodyContent>
        </TableRow>
        <TableRow>
          <BodyContent>LG생활건강</BodyContent>
          <BodyContent>2021/7/1</BodyContent>
          <ChangeRate>asdf</ChangeRate>
          <BodyContent>asdf</BodyContent>
        </TableRow>
      </TableBody>
    </TableWrap>
  );
}

const TableWrap = styled.table`
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  height: 34px;
  th:not(:first-child) {
    border-left: 1px solid var(--color-03);
  }
  border-bottom: 1px solid var(--color-04);
`;

const TableRow = styled.tr`
  text-align: center;
  height: 40px;
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
  text-align: center;
`;

const BodyContent = styled.td`
  ${fonts.normal}
  color: var(--color-05);
  text-align: center;
`;

const ChangeRate = styled(BodyContent)`
  color: var(--color-09);
`;
