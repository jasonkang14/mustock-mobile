import styled from "styled-components";

import Dropdown from "atoms/Dropdown";
import { useTextInput } from "atoms/Input";
import {
  AttachmentButton,
  OpenCaseButton as NewCaseButton,
} from "atoms/SupportButtons";
import { useTextarea } from "atoms/Textarea/Textarea";
import type { SupportTypeName } from "organisms/Support";
import * as mixins from "styles/mixins";

type NewCaseProps = {
  handleTypeChange: (typeName: SupportTypeName) => void;
};

export default function NewCase({ handleTypeChange }: NewCaseProps) {
  const [title, titleInput] = useTextInput({
    id: "title",
    initValue: "제목",
    border: true,
  });

  const [content, contentInput] = useTextarea({
    id: "content",
    initValue: "내용",
  });

  const submitNewCase = () => {
    handleTypeChange("list");
  };

  return (
    <Wrapper>
      <Dropdown size="big">케이스유형</Dropdown>
      <Dropdown size="big">우선순위</Dropdown>
      {titleInput}
      {contentInput}
      <ButtonWrap>
        <AttachmentButton>첨부파일</AttachmentButton>
        <NewCaseButton onClick={() => submitNewCase()}>
          케이스 등록
        </NewCaseButton>
      </ButtonWrap>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${mixins.flexColumn}
  justify-content: center;
  width: 50%;
  height: 100%;
  > button {
    margin-bottom: 8px;
  }
  > input {
    margin-bottom: 8px;
  }
`;

const ButtonWrap = styled.section`
  ${mixins.flexRow}
  justify-content: space-between;
  margin-top: 16px;
`;
