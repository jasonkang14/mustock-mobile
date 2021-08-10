import { useState } from "react";
import styled, { css } from "styled-components";

import * as fonts from "styles/fonts";

const border = css`
  border: 1px solid var(--color-03);
`;

const Input = styled.input<useInputType>`
  ${fonts.normal};
  width: 100%;
  color: var(--color-06);
  &placeholder {
    opacity: 0.5;
  }
  box-sizing: border-box;
  border: none;
  outline: none;
  padding: 10px 16px;
  background-color: var(--white);
  border-radius: 3px;
  ${(props) => (props.border ? border : "")};
`;

interface useInputType extends React.InputHTMLAttributes<HTMLInputElement> {
  initValue?: any;
  border?: boolean;
  type?: "password" | "text";
}

export const useInput = ({
  initValue,
  type = "text",
  ...props
}: useInputType) => {
  const [value, setValue] = useState(initValue || "");
  let input;
  if (Input) {
    input = (
      <Input
        onChange={(e) => setValue(e.target.value)}
        type={type}
        placeholder={value}
        {...props}
      />
    );
  } else {
    input = (
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={type}
        {...props}
      />
    );
  }
  return [value, input, setValue];
};
export const useTextInput = (options: Parameters<typeof useInput>[0]) =>
  useInput({ type: "text", ...options });

export default Input;
