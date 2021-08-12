import { Fragment, useState } from "react";
import styled from "styled-components";

import Icon from "atoms/Icon";
import * as fonts from "styles/fonts";
import * as mixins from "styles/mixins";

type FAQ = {
  question: string;
  detail: string;
};

type FAQDetailProps = {
  faqArray: Array<FAQ>;
};

export default function FAQDetail({ faqArray }: FAQDetailProps) {
  const [showDetail, setShowDetail] = useState(0);

  const handleQuestionClick = (question: number) => {
    setShowDetail(question);
  };

  return (
    <Wrapper>
      {faqArray.map((faq, index) => {
        const { question, detail } = faq;
        return (
          <Fragment key={`support-${index}`}>
            <Question onClick={() => handleQuestionClick(index)}>
              {question}
              <Icon
                src={
                  showDetail === index
                    ? "/icons/ic-detail-up.svg"
                    : "/icons/ic-detail-down.svg"
                }
              />
            </Question>
            {showDetail === index && <Detail>{detail}</Detail>}
          </Fragment>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  ${mixins.flexColumn}
  justify-content: flex-start;
  padding: 0;
  > li:not(:first-child) {
    padding-top: 16px;
  }
`;

const Question = styled.li`
  ${mixins.flexRow}
  padding: 0 16px 12px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  line-height: 160%;
  list-style-type: none;
  border-bottom: 2px solid var(--color-03);
  justify-content: space-between;
  cursor: pointer;
`;

const Detail = styled.li`
  ${fonts.normal}
  line-height: 160%;
  min-height: 100px;
  padding: 12px 16px;
  list-style-type: none;
  border-bottom: 1px solid var(--color-03);
`;
