import styled, { css } from "styled-components";
import Icon from "atoms/Icon";
import * as mixins from "styles/mixins";
import * as fonts from "styles/fonts";

const small = css`
  width: 84px;
`;

const mid = css`
  width: 178px;
`;

const big = css`
  width: 250px;
`;

interface PropTypes extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  size?: "small" | "mid" | "big";
}

const sizes = { small, mid, big };

const Dropdown = ({ children, ...props }: PropTypes) => {
  return (
    <DropdownStyle {...props}>
      {children}
      <Icon src="/icons/ic-detail-down.svg" style={{ marginLeft: "8px" }} />
    </DropdownStyle>
  );
};

export default Dropdown;

const DropdownStyle = styled.button<PropTypes>`
  ${mixins.flexRow}
  ${fonts.normal}
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--color-03);
  padding-left: 20px;
  padding-right: 9px;
  border-radius: 5px;
  height: 32px;
  cursor: pointer;
  background: none;
  ${(props) => (props.size ? sizes[props.size] : "")};
`;
