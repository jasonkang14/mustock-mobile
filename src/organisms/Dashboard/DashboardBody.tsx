import Alarm from "./Alarm";
import Disclosure from "./Disclosure";
import Market from "./Market";
import PortfolioSummary from "./PortfolioSummary";

export default function DashboardBody() {
  return (
    <>
      <Alarm />
      <Market />
      <PortfolioSummary />
      <Disclosure />
    </>
  );
}
