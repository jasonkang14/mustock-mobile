import { AlarmButton, NavBarButton } from "atoms/Headers";
import styled from "styled-components";
import * as fonts from "styles/fonts";
import * as mixins from "styles/mixins";

interface HeaderProps {
  toggleNavBar: () => void;
}

export default function Header({ toggleNavBar }: HeaderProps) {
  return (
    <Wrapper onClick={() => toggleNavBar()}>
      <NavBarButton />
      <Logo>μStock</Logo>
      <AlarmWrap>
        <AlarmButton />
        <AlarmCount>9+</AlarmCount>
      </AlarmWrap>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  ${mixins.flexRow}
  justify-content: space-between;
  align-items: center;
  height: 48px;
  background-color: var(--color-01);
  padding: 15px;
  filter: drop-shadow(0px 1px 10px rgba(0, 0, 0, 0.15));
`;

const Logo = styled.h1`
  ${fonts.big}
  margin: 0;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`;

const AlarmWrap = styled.div`
  position: relative;
`;

const AlarmCount = styled.h6`
  ${fonts.bold}
  ${mixins.flexCenter}
  height: 13px;
  width: 20px;
  position: absolute;
  font-size: 10px;
  margin: 0;
  border-radius: 7px;
  color: var(--color-01);
  background-color: var(--color-09);
  top: -20%;
  left: 50%;
  line-height: 130%;
`;
