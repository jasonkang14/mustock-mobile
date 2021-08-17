import styled from "styled-components";
import Mark from "atoms/Mark";
import * as fonts from "styles/fonts";
import * as mixins from "styles/mixins";

const termArray = [
  "미국",
  "인상",
  "내년",
  "분기",
  "올해",
  "금리",
  "하락",
  "경제",
];

export default function MarketAnalysis() {
  const getRandomPosition = (term: string, index: number) => {
    const fontArray = ["NanumGothic", "NanumGothicBold"];
    const fontFamily = fontArray[Math.floor(Math.random() * fontArray.length)];
    const left = Math.random() * 150;
    const top = Math.random() * 150;
    const fontSize = Math.random() * 15 + 14;
    return (
      <Term key={`term-${index}`} style={{ left, top, fontFamily, fontSize }}>
        {term}
      </Term>
    );
  };

  return (
    <Wrapper>
      <EvidenceWrap>
        <Evidence>
          {termArray.map((term, index) => getRandomPosition(term, index))}
        </Evidence>
      </EvidenceWrap>
      <Result>
        <Industry>
          현재 <Mark>자동차 산업</Mark>의 시장 감정 분석 결과
        </Industry>
        <NumericWrap>
          <Mark color="#ea4335">긍정 80%</Mark>
          <Mark color="#1c7a80">부정 20%</Mark> 입니다
        </NumericWrap>
      </Result>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${mixins.flexCenter}
  flex-direction: column;
  padding-bottom: 16px;
`;

const EvidenceWrap = styled.div`
  border: 1px solid rgba(30, 96, 129, 0.2);
  padding: 10px;
  width: 50vw;
  height: 50vw;
  border-radius: 50%;
  position: relative;
`;

const Evidence = styled.span`
  ${mixins.flexColumn}
  ${mixins.flexCenter}
  width: 44vw;
  height: 44vw;
  border-radius: 50%;
  background-color: rgba(30, 96, 129, 0.03);
`;

const Term = styled.span`
  position: absolute;
`;

const Result = styled.div`
  ${fonts.medium}
  ${mixins.flexCenter};
  flex-direction: column;
  margin-top: 35px;
`;

const Industry = styled.div``;

const NumericWrap = styled.div`
  ${fonts.midBig}
  margin-top: 8px;
`;

const Positive = styled(Mark)`
  ${fonts.normal}
  color: var(--color-09);
`;

const Negative = styled(Positive)`
  color: var(--color-07);
`;
