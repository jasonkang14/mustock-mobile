import Icon from "atoms/Icon";
import styled from "styled-components";
import * as fonts from "styles/fonts";
import * as mixins from "styles/mixins";
import { Widget } from "templates/Screen";

type DialogueProps = {
  isUser?: boolean;
};

export default function Dialogue({ isUser }: DialogueProps) {
  return (
    <Wrapper>
      <UserWrap>
        <Icon
          src={
            isUser ? "/icons/ic-user-inactive.svg" : "/icons/ic-user-active.svg"
          }
        />
        <User>{isUser ? "나" : "관리자"}</User>
      </UserWrap>
      <Widget>
        <Time>시간</Time>
        <Content>{`내용\n내용`}</Content>
      </Widget>
    </Wrapper>
  );
}

const UserWrap = styled.div`
  ${mixins.flexRow}
  padding: 12px 15px;
`;

const User = styled.span`
  ${fonts.normal}
  color: var(--color-07);
  margin-left: 13px;
`;

const Wrapper = styled.li`
  display: grid;
  grid-row: auto auto;
  grid-template-columns: 130px auto;
  list-style-type: none;
  margin-bottom: 24px;
`;

const Time = styled.div`
  ${fonts.normal}
  color: var(--color-04);
  margin-bottom: 20px;
`;

const Content = styled.div`
  ${fonts.normal}
  white-space: pre-line;
`;
