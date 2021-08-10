import styled, { css } from "styled-components";

/** Sizes */
const small = css`
  width: 20px;
  height: 20px;
`;

const mid = css`
  width: 20px;
  height: 20px;
`;

const big = css`
  width: 20px;
  height: 20px;
`;

interface PropTypes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  size?: "small" | "mid" | "big";
}

const sizes = { small, mid, big };

export const ButtonStyle = styled.button<PropTypes>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  min-height: 20px;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  text-decoration: none;
  ${(props) => (props.size ? sizes[props.size] : "")};
`;

const Button: React.FC<PropTypes> = ({ children, ...props }) => (
  <ButtonStyle type="button" {...props}>
    {children}
  </ButtonStyle>
);

export default Button;
