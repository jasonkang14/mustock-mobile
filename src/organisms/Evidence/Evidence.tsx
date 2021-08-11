import styled from "styled-components";
import { HeaderIcon, SectionTitle } from "atoms/Headers";
import { Widget } from "templates/Screen";
import EvidenceDetail from "organisms/EvidenceDetail";

const evidenceArray = [
  { title: "같은 산업 내 종목 대비", detail: "예측 수익률 분석 결과" },
  {
    title: "전체 시장 내 산업 대비",
    detail: "해당 종목 산업의 예측 성장률 분석 결과",
  },
  { title: "시장 반응", detail: "분석 결과" },
  { title: "종목의 공시지표", detail: "분석 결과" },
];

export default function Evidence() {
  return (
    <Widget>
      <SectionTitle>
        <HeaderIcon src="/icons/ic-item-list.svg" />
        구성근거
      </SectionTitle>
      <DetailWrap>
        {evidenceArray.map((evidence, index) => {
          const { title, detail } = evidence;
          return (
            <EvidenceDetail
              key={`evidence-${index}`}
              title={title}
              detail={detail}
            />
          );
        })}
      </DetailWrap>
    </Widget>
  );
}

const DetailWrap = styled.div`
  margin-top: 21px;
`;
