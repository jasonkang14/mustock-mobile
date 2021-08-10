import styled, { css } from "styled-components";

const mid = css`
  margin-right: 8px;
`;

const big = css`
  margin-right: 13px;
`;

const margins = { mid, big };

interface PropTypes {
  margin: "mid" | "big";
}

const Item = styled.span<PropTypes>`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: var(--color-08);
  ${(props) => (props.margin ? margins[props.margin] : "")};
`;

export default Item;
