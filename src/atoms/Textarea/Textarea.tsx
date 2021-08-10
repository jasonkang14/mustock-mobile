import { useState } from "react";
import styled from "styled-components";

import * as fonts from "styles/fonts";

const Textarea = styled.textarea`
  ${fonts.normal};
  width: 100%;
  color: var(--color-03);
  box-sizing: border-box;
  border: none;
  padding: 10px 16px;
  background-color: var(--white);
  border-radius: 3px;
  border: 1px solid var(--color-03);
  resize: none;
  height: 30%;
`;

interface useInputType
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  initValue?: any;
}

export const useTextarea = ({ initValue, ...props }: useInputType) => {
  const [value, setValue] = useState(initValue || "");
  let input;
  if (Textarea) {
    input = (
      <Textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...props}
      />
    );
  } else {
    input = (
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...props}
      />
    );
  }
  return [value, input, setValue];
};

export const useTextInput = (options: Parameters<typeof useTextarea>[0]) =>
  useTextarea({ ...options });

export default Textarea;
