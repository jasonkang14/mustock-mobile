import { useRouter } from "next/dist/client/router";
import styled from "styled-components";
import {
  AIPortfolioButton,
  AnalysisButton,
  DashboardButton,
  LogoutButton,
  MarketButton,
  MyPortfolioButton,
  PlanButton,
  SettingsButton,
  SupportButton,
} from "atoms/NavigationButtons";
import * as fonts from "styles/fonts";
import * as mixins from "styles/mixins";
import { ButtonStyle } from "atoms/Button/Button";
import Mark from "atoms/Mark";

const Navbar = () => {
  const router = useRouter();

  return (
    <NavBarWrap>
      <ButtonWrap>
        <NavBarLogo>
          <NavMark>홍길동</NavMark> 고객님, 안녕하세여!
        </NavBarLogo>
        <NavButton onClick={() => router.push("/dashboard")}>
          <DashboardButton />
          <NavTitle>대시보드</NavTitle>
        </NavButton>
        <NavButton onClick={() => router.push("/analysis")}>
          <AnalysisButton />
          <NavTitle>종목 별 분석</NavTitle>
        </NavButton>
        <NavButton onClick={() => router.push("/algorithm")}>
          <AIPortfolioButton />
          <NavTitle>AI 포트폴리오</NavTitle>
        </NavButton>
        <NavButton onClick={() => router.push("/market")}>
          <MarketButton />
          <NavTitle>시장 분위기 분석</NavTitle>
        </NavButton>
        <NavButton onClick={() => router.push("/asset")}>
          <MyPortfolioButton />
          <NavTitle>내 포트폴리오</NavTitle>
        </NavButton>
      </ButtonWrap>
      <ButtonWrap>
        <NavBottomButton onClick={() => router.push("/support")}>
          <SupportButton />
          <NavBottomTitle>지원</NavBottomTitle>
        </NavBottomButton>
        <NavBottomButton onClick={() => router.push("/setting")}>
          <SettingsButton />
          <NavBottomTitle>설정</NavBottomTitle>
        </NavBottomButton>
        <NavBottomButton onClick={() => router.push("/plan")}>
          <PlanButton />
          <NavBottomTitle>플랜변경</NavBottomTitle>
        </NavBottomButton>
        <NavBottomButton>
          <LogoutButton />
          <NavBottomTitle>로그아웃</NavBottomTitle>
        </NavBottomButton>
      </ButtonWrap>
    </NavBarWrap>
  );
};

export default Navbar;

const NavBarWrap = styled.nav`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 5;
  background-color: var(--color-06);
  color: white;
  width: 57%;
  height: 100%;
  top: 48px;
  left: 0;
  justify-content: space-between;
`;

export const NavBarLogo = styled.div`
  ${fonts.normal}
  ${mixins.flexRow}
  background: var(--nav-gradient);
  padding: 12px 10px;
  display: flex;
  width: 100%;
  color: var(--color-01);
`;

const NavMark = styled.mark`
  ${fonts.bold}
  color: var(--color-01);
  background: none;
  display: inline;
  margin: 0;
`;

const ButtonWrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const NavButton = styled(ButtonStyle)`
  ${fonts.mid}
  ${fonts.bold}
  ${mixins.flexRow}
  width: 100%;
  justify-content: flex-start;
  padding: 14px;
  align-items: center;
`;

const NavTitle = styled.h2`
  ${fonts.mid}
  ${fonts.bold}
  margin: 0;
  text-align: left;
  color: var(--color-01);
`;

const NavBottomButton = styled(NavButton)`
  ${mixins.flexRow};
  ${fonts.mid}
  ${fonts.bold}
`;

const NavBottomTitle = styled(NavTitle)`
  text-align: center;
  width: 100%;
`;
