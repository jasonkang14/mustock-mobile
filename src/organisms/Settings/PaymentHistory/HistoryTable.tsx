import Mark from "atoms/Mark";
import styled from "styled-components";
import * as fonts from "styles/fonts";

export default function HistoryTable() {
  return (
    <Wrapper>
      <TableWrap>
        <TableHeader>
          <HeaderContent>결제일</HeaderContent>
          <HeaderContent>상품명</HeaderContent>
          <HeaderContent>결제금액</HeaderContent>
        </TableHeader>
        <TableBody>
          <TableRow>
            <BodyContent>2021/05/01</BodyContent>
            <BodyContent>뮤스톡 Primeum (연)</BodyContent>
            <BodyContent>
              <PriceMark>1,009,800</PriceMark>원
            </BodyContent>
          </TableRow>
          <TableRow>
            <BodyContent>2021/05/01</BodyContent>{" "}
            <BodyContent>뮤스톡 Pro (월)</BodyContent>
            <BodyContent>
              <PriceMark>79,800</PriceMark>원
            </BodyContent>
          </TableRow>
          <TableRow>
            <BodyContent>2021/05/01</BodyContent>{" "}
            <BodyContent>뮤스톡 Basic (월)</BodyContent>
            <BodyContent>
              <PriceMark>39,800</PriceMark>원
            </BodyContent>
          </TableRow>
        </TableBody>
      </TableWrap>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 20px;
  width: 100%;
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
    width: 20%;
  }
  th:nth-child(2) {
    width: 50%;
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
  td:first-child {
    width: 22%;
  }
  td:nth-child(2) {
    text-align: left;
    padding-left: 1.3vw;
  }
  td:last-child {
    text-align: right;
    padding-right: 3vw;
  }
`;

const TableBody = styled.tbody`
  ${fonts.normal}
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
`;

const PriceMark = styled(Mark)`
  color: var(--color-09);
`;
