import styled from "styled-components";

const Checkbox = styled.span<{ checked?: boolean }>`
  border: 1px solid var(--color-03);
  border-radius: 3px;
  width: 15px;
  height: 15px;
  margin-right: 8px;
  cursor: pointer;
  background-color: ${({ checked }) =>
    checked ? "var(--color-07)" : "transparent"};
`;

export default Checkbox;
