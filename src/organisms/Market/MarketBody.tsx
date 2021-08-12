import Evidence from "organisms/Evidence";
import MarketDetail from "./MarketDetail";
import MarketSubscription from "./MarketSubscription";

export default function MarketBody() {
  return (
    <>
      <MarketSubscription />
      <MarketDetail />
      <Evidence />
    </>
  );
}
