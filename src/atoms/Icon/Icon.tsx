import styled from "styled-components";

const Icon = styled.div<{ src: string }>`
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.src});
`;

export default Icon;
