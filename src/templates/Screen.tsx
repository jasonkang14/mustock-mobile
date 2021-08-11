import styled from "styled-components";
import * as mixins from "styles/mixins";

export const AuthScreen = styled.div`
  ${mixins.flexColumn}
  height: 640px;
  width: 100%;
  padding: 20% 13% 30%;
  align-items: center;
  > section {
    margin-top: 64px;
  }
`;

export const MainScreen = styled.div`
  padding: 40px 16px 30px;
  background-color: var(--color-02);
`;

export const Widget = styled.div`
  background-color: var(--color-01);
  border: 1px solid var(--color-01);
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-bottom: 16px;
  padding: 8px 20px 16px;
  position: relative;
  width: 100%;
  overflow: hidden;
`;
