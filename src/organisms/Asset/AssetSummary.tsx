import styled from "styled-components";
import { HeaderIcon, SectionTitle } from "atoms/Headers";
import Item from "atoms/Item";
import * as fonts from "styles/fonts";
import * as mixins from "styles/mixins";
import { Widget } from "templates/Screen";
import Mark from "atoms/Mark";

const assetArray = [
  { type: "총 매입", amount: 100_000_000_000 },
  { type: "총 평가", amount: 100_000_000_000 },
  { type: "추정자산", amount: 100_000_000_000 },
];

export default function Asset() {
  return (
    <Widget>
      <SectionTitle>
        <HeaderIcon src="/icons/ic-asset-summary.svg" />
        <Mark>홍 길동님 </Mark>
        {`   자산 정보`}
        <UpdateButton>정보 업데이트</UpdateButton>
      </SectionTitle>
      <Body>
        {assetArray.map((asset, index) => {
          const { type, amount } = asset;
          return (
            <AssetWrap key={`Market-${index}`}>
              <AssetItem>
                <Item margin="mid" />
                <AssetType>{type}</AssetType>
              </AssetItem>
              <AssetAmount>{amount} 원</AssetAmount>
            </AssetWrap>
          );
        })}
      </Body>
    </Widget>
  );
}

const UpdateButton = styled.a`
  ${fonts.small}
  text-decoration: underline;
  position: absolute;
  right: 0;
  color: var(--color-05);
`;

const Body = styled.section`
  ${mixins.flexColumn}
`;

const AssetWrap = styled.div`
  ${mixins.flexRow}
  ${fonts.normal}
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

const AssetItem = styled.span`
  ${mixins.flexRow}
  align-items: center;
`;

const AssetType = styled.span`
  color: var(--color-07);
`;

const AssetAmount = styled.span`
  ${fonts.bold}
  color: var(--color-05);
`;
