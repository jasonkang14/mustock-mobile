import Evidence from "organisms/Evidence";
import StockList from "./StockList";
import StockTrend from "./StockTrend";

export default function AnalysisBody() {
  return (
    <>
      <StockList />
      <StockTrend />
      <Evidence />
    </>
  );
}
