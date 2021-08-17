import styled from "styled-components";
import { HeaderIcon, SectionTitle } from "atoms/Headers";
import * as mixins from "styles/mixins";
import { AssetButton } from "atoms/SettingButtons";
import AssetTable from "./AssetTable";
import { Widget } from "templates/Screen";

export default function AssetInfo() {
  return (
    <AssetWidget>
      <SectionTitle>
        <HeaderIcon src="/icons/ic-asset-info.svg" />
        자산 정보 관리
      </SectionTitle>
      <ButtonWrap>
        <AssetButton isActive>보유 종목</AssetButton>
        <AssetButton isActive={false}>관심 종목</AssetButton>
      </ButtonWrap>
      <AssetTable />
    </AssetWidget>
  );
}

const AssetWidget = styled(Widget)`
  max-height: 300px;
  overflow: scroll;
`;

const ButtonWrap = styled.div`
  ${mixins.flexRow}
  margin-top: 28px;
`;
