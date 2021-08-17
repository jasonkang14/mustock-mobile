import styled from "styled-components";
import { HeaderIcon, SectionTitle } from "atoms/Headers";

import * as fonts from "styles/fonts";
import * as mixins from "styles/mixins";
import Item from "atoms/Item";
import { ButtonStyle } from "atoms/Button/Button";
import { Widget } from "templates/Screen";

export default function RequiredInfo() {
  return (
    <Widget>
      <TitleSection>
        <SectionTitle>
          <HeaderIcon src="/icons/ic-personal-info.svg" />
          필수 정보 관리
        </SectionTitle>
        <Progress>2 / 3</Progress>
      </TitleSection>
      <InfoWrap>
        <Item margin="mid" />
        <InfoHeader>이름</InfoHeader>
        <InfoContent>홍길동</InfoContent>
        <Alarm></Alarm>
      </InfoWrap>
      <InfoWrap>
        <Item margin="mid" />
        <InfoHeader>이메일</InfoHeader>
        <InfoContent>hong@gmail.com</InfoContent>
        <Alarm>이메일 알림</Alarm>
      </InfoWrap>
      <InfoWrap>
        <Item margin="mid" />
        <InfoHeader>휴대전화</InfoHeader>
        <VerifyButton>인증하기</VerifyButton>
        <Alarm>카카오톡 알림</Alarm>
      </InfoWrap>
      <InfoWrap>
        <Item margin="mid" />
        <InfoHeader>결제정보</InfoHeader>
        <InfoContent>BC카드 1234 - **05 - 5412 - 1234</InfoContent>
      </InfoWrap>
    </Widget>
  );
}

const TitleSection = styled.section`
  ${mixins.flexRow}
  align-items: center;
  justify-content: space-between;
`;

const Progress = styled.h3`
  ${fonts.normal}
  color: var(--color-05);
`;

const InfoWrap = styled.div`
  ${mixins.flexRow};
  align-items: center;
  margin-bottom: 12px;
`;

const InfoHeader = styled.h4`
  ${fonts.normal}
  margin: 0;
  width: 60px;
`;

const InfoContent = styled(InfoHeader)`
  ${mixins.flexRow}
  ${fonts.normal}
  ${fonts.bold}
  color: var(--color-05);
  flex-grow: 1;
`;

const Alarm = styled.span<{ isActive?: boolean }>`
  ${fonts.normal};
  ${fonts.bold};
  text-align: right;
  flex-grow: 1;
  color: ${({ isActive }) =>
    isActive ? "var(--color-07)" : "var(--color-03)"};
`;

const VerifyButton = styled(ButtonStyle)`
  ${fonts.normal}
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 8px 18px;
`;
