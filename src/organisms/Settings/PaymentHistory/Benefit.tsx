import styled from "styled-components";
import { HeaderIcon, SectionTitle } from "atoms/Headers";
import * as fonts from "styles/fonts";
import * as mixins from "styles/mixins";
import { Widget } from "templates/Screen";
import Item from "atoms/Item";
import { CancelButton } from "atoms/SettingButtons";

export default function Benefit() {
  return (
    <Widget>
      <SectionTitle>
        <HeaderIcon src="/icons/ic-chart-upward.svg" />
        현재 누리고 있는 혜택
      </SectionTitle>
      <Body>
        <ItemWrap>
          <Item margin="mid" />
          이달 수익률
          <Numeric>10%</Numeric>
        </ItemWrap>
        <ItemWrap>
          <Item margin="mid" />
          이달 손익
          <Numeric>₩ 50,000</Numeric>
        </ItemWrap>
        <ItemWrap>
          <Item margin="mid" />
          이달 수익률
          <Numeric>10%</Numeric>
        </ItemWrap>
        <ItemWrap>
          <Item margin="mid" />
          이달 수익률
          <Numeric>10%</Numeric>
        </ItemWrap>
        <Expectation>1년 후</Expectation>
        <ItemWrap>
          <Item margin="mid" />
          기대 수익률
          <Numeric>10%</Numeric>
        </ItemWrap>
        <ItemWrap>
          <Item margin="mid" />
          기대 손익
          <Numeric>₩ 50,000</Numeric>
        </ItemWrap>
        <CancelButton>자동결제 해지하기</CancelButton>
      </Body>
    </Widget>
  );
}

const ItemWrap = styled.div`
  ${fonts.midBig}
  display: grid;
  align-items: center;
  grid-template-columns: 12% 69% 60%;
  color: var(--color-06);
  width: 70%;
  margin-bottom: 24px;
`;

const Body = styled.div`
  ${mixins.flexColumn}
  width: 100%;
  margin-top: 15%;
  padding: 0 10% 7%;
  > button:last-child {
    width: 100%;
    margin-top: 5%;
  }
`;

const Numeric = styled.span`
  ${fonts.mid}
  ${fonts.bold}
  color: var(--color-05);
  text-align: left;
`;

const Expectation = styled.h4`
  ${fonts.mid}
  ${fonts.bold}
  margin-left: 16px;
  margin-bottom: 32px;
`;
