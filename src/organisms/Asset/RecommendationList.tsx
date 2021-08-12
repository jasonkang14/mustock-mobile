import styled from "styled-components";
import { HeaderIcon, SectionTitle } from "atoms/Headers";
import { Widget } from "templates/Screen";
import EvidenceDetail from "organisms/EvidenceDetail";

const recommendationArray = [
  { stockName: "카카오", detail: "이래서 추천합니당" },
  {
    stockName: "네이버",
    detail: "이래서 추천합니당",
  },
  { stockName: "삼성전자", detail: "이래서 추천합니당" },
  { stockName: "대웅제약", detail: "이래서 추천합니당" },
];

export default function RecommendationList() {
  return (
    <Widget>
      <SectionTitle>
        <HeaderIcon src="/icons/ic-bar-chart-inactive.svg" />
        AI 추천종목
      </SectionTitle>
      <DetailWrap>
        {recommendationArray.map((rec, index) => {
          const { stockName, detail } = rec;
          return (
            <EvidenceDetail
              key={`rec-${index}`}
              title={stockName}
              detail={detail}
            />
          );
        })}
      </DetailWrap>
    </Widget>
  );
}

const DetailWrap = styled.div`
  padding: 8px;
  margin-top: 30px;
`;
