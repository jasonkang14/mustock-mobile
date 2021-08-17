import styled from "styled-components";
import * as fonts from "styles/fonts";

export default function AssetTable() {
  return (
    <TableWrap>
      <TableBody>
        <TableRow>
          <BodyContent>삼성전자</BodyContent>
          <BodyContent>80,200</BodyContent>
          <ChangeRate>50</ChangeRate>
          <BodyContent>1,338,000</BodyContent>
        </TableRow>
        <TableRow>
          <BodyContent>셀트리온</BodyContent>
          <BodyContent>80,200</BodyContent>
          <ChangeRate>50</ChangeRate>
          <BodyContent>1,338,000</BodyContent>
        </TableRow>
        <TableRow>
          <BodyContent>카카오</BodyContent>
          <BodyContent>80,200</BodyContent>
          <ChangeRate>50</ChangeRate>
          <BodyContent>1,338,000</BodyContent>
        </TableRow>
        <TableRow>
          <BodyContent>네이버</BodyContent>
          <BodyContent>80,200</BodyContent>
          <ChangeRate>50</ChangeRate>
          <BodyContent>1,338,000</BodyContent>
        </TableRow>
        <TableRow>
          <BodyContent>LG디스플레이</BodyContent>
          <BodyContent>80,200</BodyContent>
          <ChangeRate>50</ChangeRate>
          <BodyContent>1,338,000</BodyContent>
        </TableRow>
        <TableRow>
          <BodyContent>LG디스플레이</BodyContent>
          <BodyContent>80,200</BodyContent>
          <ChangeRate>50</ChangeRate>
          <BodyContent>1,338,000</BodyContent>
        </TableRow>
        <TableRow>
          <BodyContent>LG디스플레이</BodyContent>
          <BodyContent>80,200</BodyContent>
          <ChangeRate>50</ChangeRate>
          <BodyContent>1,338,000</BodyContent>
        </TableRow>
        <TableRow>
          <BodyContent>LG디스플레이</BodyContent>
          <BodyContent>80,200</BodyContent>
          <ChangeRate>50</ChangeRate>
          <BodyContent>1,338,000</BodyContent>
        </TableRow>
        <TableRow></TableRow>
      </TableBody>
    </TableWrap>
  );
}

const TableWrap = styled.table`
  border-collapse: collapse;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 0px 0px 5px 5px;
  z-index: 10;
`;

const TableRow = styled.tr`
  text-align: center;
  height: 40px;
  border: 1px solid var(--color-03);
  overflow: scroll;
  td:first-child {
    width: 30%;
  }
  td:nth-of-type(2) {
    width: 20%;
  }
  td:nth-of-type(3) {
    width: 3%;
  }
  td:last-child {
    width: 35%;
  }
`;

const TableBody = styled.tbody`
  overflow: scroll;
  overflow-y: auto;
  overflow-x: hidden;
`;

const BodyContent = styled.td`
  ${fonts.normal}
  color: var(--color-05);
  text-align: left;
  padding-left: 30px;
`;

const ChangeRate = styled(BodyContent)`
  ${fonts.bold}
  color: var(--color-09);
`;
