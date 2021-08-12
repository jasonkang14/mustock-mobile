import AssetAnalysis from "./AssetAnalysis";
import AssetSummary from "./AssetSummary";
import RecommendationList from "./RecommendationList";

export default function AssetBody() {
  return (
    <>
      <AssetSummary />
      <AssetAnalysis />
      <RecommendationList />
    </>
  );
}
