import Icon from "atoms/Icon";
import styled from "styled-components";
import * as fonts from "styles/fonts";
import * as mixins from "styles/mixins";

const Footer = () => {
  return (
    <Wrapper>
      <MMELogo src="/icons/ic-mme-logo.svg" />
      <Box>
        <CompanyInfo>{`메이크모어엔터티 주식회사 | 대표 김종우\n사업자등록번호 123-123-123123`}</CompanyInfo>
        <Address>{`TEL +82 70-4202-6888, support@mmentity.com\n울산광역시 울주군 도호 1길 30-24, 1209호`}</Address>
        <Credit>Make More Entity Co., Ltd. All rights reserved</Credit>
        <PolicyWrap>
          <Policy>서비스 이용약관</Policy>
          <Policy>개인정보 처리방침</Policy>
          <Policy>공지사항</Policy>
        </PolicyWrap>
      </Box>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  height: 230px;
  width: 100%;
  background-color: var(--color-01);
  padding: 16px 40px;
`;

const MMELogo = styled(Icon)`
  && {
    width: 92px;
    height: 41px;
  }
`;

const Box = styled.section`
  ${fonts.small}
  margin-top: 20px;
`;

const CompanyInfo = styled.h5`
  margin: 0;
  white-space: pre-line;
`;

const Address = styled(CompanyInfo)`
  margin-top: 20px;
  color: var(--color-04);
`;

const PolicyWrap = styled(CompanyInfo.withComponent("div"))`
  ${mixins.flexRow}
  margin-top: 10px;
  align-items: center;
  > a:nth-of-type(2) {
    border-left: 1px solid #000000;
    border-right: 1px solid #000000;
    margin: 0 8px;
    padding: 0 8px;
  }
`;

const Policy = styled.a`
  ${fonts.small}
  cursor: pointer;
  height: 16px;
`;

const ContactInfo = styled(CompanyInfo)`
  && {
    color: var(--color-04);
  }

  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

const Credit = styled(Address)`
  margin-top: 10px;
`;
