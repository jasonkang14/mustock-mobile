import Icon from "atoms/Icon";
import styled from "styled-components";
import * as fonts from "styles/fonts";
import * as mixins from "styles/mixins";

export default function StockTable() {
  return (
    <TableWrap>
      <TableBody>
        <TableRow>
          <BodyContent>삼성전자</BodyContent>
          <BodyContent>003409</BodyContent>
          <HasStock hasStock={false}>등록하기</HasStock>
          <BodyContent>
            <Icon src="/icons/ic-star-inactive.svg" />
          </BodyContent>
        </TableRow>
        <TableRow>
          <BodyContent>셀트리온</BodyContent>
          <BodyContent>003409</BodyContent>
          <HasStock hasStock>보유</HasStock>
          <BodyContent>
            <Icon src="/icons/ic-star-active.svg" />
          </BodyContent>
        </TableRow>
        <TableRow>
          <BodyContent>삼성전자</BodyContent>
          <BodyContent>003409</BodyContent>
          <HasStock hasStock={false}>등록하기</HasStock>
          <BodyContent>
            <Icon src="/icons/ic-star-inactive.svg" />
          </BodyContent>
        </TableRow>
        <TableRow>
          <BodyContent>셀트리온</BodyContent>
          <BodyContent>003409</BodyContent>
          <HasStock hasStock>보유</HasStock>
          <BodyContent>
            <Icon src="/icons/ic-star-active.svg" />
          </BodyContent>
        </TableRow>
        <TableRow>
          <BodyContent>삼성전자</BodyContent>
          <BodyContent>003409</BodyContent>
          <HasStock hasStock={false}>등록하기</HasStock>
          <BodyContent>
            <Icon src="/icons/ic-star-inactive.svg" />
          </BodyContent>
        </TableRow>{" "}
        <TableRow>
          <BodyContent>삼성전자</BodyContent>
          <BodyContent>003409</BodyContent>
          <HasStock hasStock={false}>등록하기</HasStock>
          <BodyContent>
            <Icon src="/icons/ic-star-inactive.svg" />
          </BodyContent>
        </TableRow>
        <TableRow>
          <BodyContent>셀트리온</BodyContent>
          <BodyContent>003409</BodyContent>
          <HasStock hasStock>보유</HasStock>
          <BodyContent>
            <Icon src="/icons/ic-star-active.svg" />
          </BodyContent>
        </TableRow>
        <TableRow>
          <BodyContent>삼성전자</BodyContent>
          <BodyContent>003409</BodyContent>
          <HasStock hasStock={false}>등록하기</HasStock>
          <BodyContent>
            <Icon src="/icons/ic-star-inactive.svg" />
          </BodyContent>
        </TableRow>
        <TableRow>
          <BodyContent>셀트리온</BodyContent>
          <BodyContent>003409</BodyContent>
          <HasStock hasStock>보유</HasStock>
          <BodyContent>
            <Icon src="/icons/ic-star-active.svg" />
          </BodyContent>
        </TableRow>
        <TableRow>
          <BodyContent>삼성전자</BodyContent>
          <BodyContent>003409</BodyContent>
          <HasStock hasStock={false}>등록하기</HasStock>
          <BodyContent>
            <Icon src="/icons/ic-star-inactive.svg" />
          </BodyContent>
        </TableRow>{" "}
        <TableRow>
          <BodyContent>삼성전자</BodyContent>
          <BodyContent>003409</BodyContent>
          <HasStock hasStock={false}>등록하기</HasStock>
          <BodyContent>
            <Icon src="/icons/ic-star-inactive.svg" />
          </BodyContent>
        </TableRow>
        <TableRow>
          <BodyContent>셀트리온</BodyContent>
          <BodyContent>003409</BodyContent>
          <HasStock hasStock>보유</HasStock>
          <BodyContent>
            <Icon src="/icons/ic-star-active.svg" />
          </BodyContent>
        </TableRow>
        <TableRow>
          <BodyContent>삼성전자</BodyContent>
          <BodyContent>003409</BodyContent>
          <HasStock hasStock={false}>등록하기</HasStock>
          <BodyContent>
            <Icon src="/icons/ic-star-inactive.svg" />
          </BodyContent>
        </TableRow>
        <TableRow>
          <BodyContent>셀트리온</BodyContent>
          <BodyContent>003409</BodyContent>
          <HasStock hasStock>보유</HasStock>
          <BodyContent>
            <Icon src="/icons/ic-star-active.svg" />
          </BodyContent>
        </TableRow>
        <TableRow>
          <BodyContent>삼성전자</BodyContent>
          <BodyContent>003409</BodyContent>
          <HasStock hasStock={false}>등록하기</HasStock>
          <BodyContent>
            <Icon src="/icons/ic-star-inactive.svg" />
          </BodyContent>
        </TableRow>
      </TableBody>
    </TableWrap>
  );
}

const TableWrap = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableRow = styled.tr`
  display: grid;
  grid-template-columns: 40% 30% 20% 10%;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid var(--color-03);
  td:first-child {
    text-align: left;
    padding-left: 8px;
  }
  td:nth-of-type(2) {
    width: 20%;
  }

  td:nth-of-type(3) {
    width: 100%;
    margin-right: 8px;
  }
  div:last-child {
    ${mixins.flexCenter}
    width: 100%;
  }
`;

const TableBody = styled.tbody`
  overflow: scroll;
  overflow-y: auto;
  overflow-x: hidden;
`;

const BodyContent = styled.td`
  ${fonts.medium}
  color: var(--color-05);
  text-align: center;
  line-height: 160%;
`;

const HasStock = styled(BodyContent)<{ hasStock?: boolean }>`
  ${({ hasStock }) =>
    `
    color: ${hasStock ? "var(--color-07)" : "var(--color-03)"};
    font-weight: ${hasStock ? "bold" : "normal"};
    font-family: ${hasStock ? "NanumGothicBold" : "NanumGothic"};
`}
`;
