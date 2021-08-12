import styled from "styled-components";

const Mark = styled.mark<{ color?: string }>`
  color: ${({ color }) => (color ? color : "var(--color-06)")};
  background: none;
  font-family: NanumGothicBold;
  font-weight: bold;
  line-height: 160%;
`;

export default Mark;
